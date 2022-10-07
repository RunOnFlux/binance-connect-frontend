import React, { useEffect, useMemo, useState } from "react";
import {
  Flex,
  Input,
  Text,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  CloseButton,
  Image,
  SlideFade,
} from "@chakra-ui/react";
import InputElement from "./InputElement";
import EurosPng from "../../assets/euros.png";
import BitcoinPng from "../../assets/bitcoin.png";
import { SearchIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import axios from "axios";
import useGetIpAddress from "../../hooks/useGetIpAddress";
import useFiatList from "../../hooks/useFiatList";
import AssetModal from "./AssetModal";
import useGetCoinByFiat from "../../hooks/useGetCoinByFiat";
import usePrice from "../../hooks/usePrice";
import {
  formatDecimalNumber,
  generateTrade,
  getOrder,
} from "../../utils/helper";
import WalletPage from "./WalletPage";
import ThankYou from "./ThankYou";
import useGetFullInfo from "../../hooks/useGetFullInfo";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import TransactionModals from "../Modals/TransactionModals";
// import { Button } from "../button/button";

const BuyCrypto = () => {
  const [selectClicked, setSelectClicked] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState("USD");
  const [isFiatSelected, setIsFiatSelected] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState("FLUX");
  const [cryptoSelectClicked, setCryptoSelectClicked] = useState(false);
  const [networkRegex, setNetworkRegex] = useState("");
  const router = useRouter();
  const link = router.query;

  const [walletPage, setWalletPage] = useState(false);
  const [thankyouPage, setthankyouPage] = useState(false);

  const [fiatValue, setFiatValue] = useState();
  const [cryptoValue, setCryptoValue] = useState();
  const [visible, setVisible] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [walletAddress, setwalletAddress] = useState("");
  const [redirectUrl, setredirectUrl] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [requirementReached, setrequirementReached] = useState(false);
  const [minLimit, setminLimit] = useState(0);
  const [maxLimit, setmaxLimit] = useState(0);
  const [opentxModal, setopentxModal] = useState(false);
  const [txdata, settxdata] = useState({});
  const [price, setPrice] = useState(0);
  //   useGetIpAddress();
  const { fiatList, loading: fiatLoading } = useFiatList();
  const { coinList, loading: coinLoading } = useGetCoinByFiat(selectedAsset);
  // const { price } = usePrice(selectedAsset, selectedCrypto, fiatValue);

  const { fullInfo } = useGetFullInfo();

  useMemo(() => {
    if (selectedAsset && selectedCrypto && fullInfo.pair_list) {
      const pair = fullInfo.pair_list?.filter(
        (pair) =>
          pair.cryptoCurrency === selectedCrypto &&
          pair.fiatCurrency === selectedAsset
      );
      if (fullInfo.pair_list) {
        setminLimit(pair[0].minLimit);
        setmaxLimit(pair[0].maxLimit);
      }
    }
  }, [selectedCrypto, selectedAsset, fullInfo.pair_list]);

  useMemo(() => {
    if (fiatValue) {
      if (price) {
        setCryptoValue(formatDecimalNumber(fiatValue / price));
      }
    } else {
      setCryptoValue(0);
    }
  }, [price, fiatValue]);

  const handleGenerateTrade = async () => {
    const data = await generateTrade(
      selectedAsset,
      selectedCrypto,
      walletAddress,
      selectedNetwork,
      fiatValue
    );
    if (data) {
      setWalletPage(false);
      setthankyouPage(true);
      setredirectUrl(data);
    }
  };

  useMemo(async () => {
    if (link.merchantorderid) {
      try {
        const data = await getOrder(link.merchantorderid);

        settxdata(data);
      } catch (err) {
        settxdata({});
      }
    }
  }, [link]);

  useMemo(() => {
    if (selectedAsset && selectedCrypto) {
      const filterArray = coinList.filter(
        (value) =>
          value.fiatCurrency === selectedAsset &&
          selectedCrypto === value.cryptoCurrency
      );
      setPrice(filterArray[0]?.quotation);
    }
  }, [selectedAsset, selectedCrypto]);

  useMemo(() => {
    if (Object.keys(txdata).length !== 0) {
      setopentxModal(true);
    }
  }, [txdata]);

  return (
    <>
      {walletPage ? (
        <WalletPage
          selectedCrypto={selectedCrypto}
          coinList={coinList}
          setWalletPage={setWalletPage}
          walletPage={walletPage}
          visible={visible}
          setVisible={setVisible}
          selectedNetwork={selectedNetwork}
          setSelectedNetwork={setSelectedNetwork}
          walletAddress={walletAddress}
          setwalletAddress={setwalletAddress}
          handleGenerateTrade={handleGenerateTrade}
          networkRegex={networkRegex}
          setNetworkRegex={setNetworkRegex}
        />
      ) : thankyouPage ? (
        <ThankYou
          thankyouPage={thankyouPage}
          setWalletPage={setWalletPage}
          setthankyouPage={setthankyouPage}
          redirectUrl={redirectUrl}
          setSelectedAsset={setSelectedAsset}
          setSelectedCrypto={setSelectedCrypto}
          setCryptoValue={setCryptoValue}
          setFiatValue={setFiatValue}
        />
      ) : (
        <Flex flexDirection='column'>
          <Flex
            //   height='500px'
            // position={"absolute"}
            width='380px'
            p={4}
            bgColor={
              selectClicked || cryptoSelectClicked ? "#9899AA" : "#ffffff"
            }
            flexDirection='column'
            borderRadius='12px'
          >
            <Text color='black' fontWeight='bold' fontSize='18px'>
              Buy Crypto
            </Text>

            <>
              <Flex
                flexDirection='column'
                visibility={
                  selectClicked || cryptoSelectClicked ? "hidden" : "visible"
                }
              >
                <Text color='black' mt={4} mb={2} fontSize='14px'>
                  Spend
                </Text>

                <InputGroup>
                  <Input
                    disabled={selectedAsset === ""}
                    value={fiatValue}
                    onChange={(e) => setFiatValue(parseFloat(e.target.value))}
                    type='number'
                    _hover={{
                      borderColor: "#fbcd17",
                    }}
                    color='black'
                    height='12'
                    border='1px'
                    borderColor='#eee'
                  />

                  <InputRightElement
                    mt={1}
                    cursor='pointer'
                    // disabled={fiatList.length === 0}
                    onClick={() => {
                      setSelectClicked(true);
                    }}
                  >
                    <InputElement
                      asset={
                        selectedAsset === "" ? "Select Fiat" : selectedAsset
                      }
                      icon={EurosPng}
                    />
                  </InputRightElement>
                </InputGroup>

                <Text color='black' mt={4} mb={2} fontSize='14px'>
                  Receive
                </Text>

                <InputGroup zIndex={1}>
                  <Input
                    type='number'
                    _hover={{
                      borderColor: "#fbcd17",
                    }}
                    value={cryptoValue}
                    onChange={(e) => setCryptoValue(e.target.value)}
                    color='black'
                    height='12'
                    borderColor='#eee'
                    disabled
                    _disabled={{ color: "black" }}
                  />

                  <InputRightElement
                    mt={1}
                    cursor='pointer'
                    onClick={() => {
                      setCryptoSelectClicked(true);
                    }}
                  >
                    <InputElement
                      asset={
                        selectedCrypto === "" ? "Select Crypto" : selectedCrypto
                      }
                      icon={BitcoinPng}
                    />
                  </InputRightElement>
                </InputGroup>
                <Text
                  display={
                    fiatValue < minLimit && fiatValue && selectedAsset
                      ? undefined
                      : "none"
                  }
                  mt={1}
                  color='red'
                  fontSize='12px'
                >
                  {`Fiat value is less than minimum(${minLimit}) amount allowed`}
                </Text>

                <Text
                  display={
                    fiatValue > maxLimit && fiatValue && selectedAsset
                      ? undefined
                      : "none"
                  }
                  mt={1}
                  color='red'
                  fontSize='12px'
                >
                  {`Fiat value is more than maximum(${maxLimit}) amount allowed`}
                </Text>

                {/* {selectedCrypto &&
              selectedAsset( */}
                <Flex
                  justifyContent='space-between'
                  color='rgba(49, 52, 87, 0.6)'
                  fontSize='14px'
                  mt={52}
                >
                  <Text fontWeight='bold'>Estimated Price</Text>
                  <Text
                    visibility={
                      selectedCrypto && price && selectedAsset
                        ? "visible"
                        : "hidden"
                    }
                    fontWeight='bold'
                  >
                    1 {selectedCrypto} = {formatDecimalNumber(price)}{" "}
                    {selectedAsset}
                  </Text>
                </Flex>
                {/* )} */}
                <Flex width='100%'>
                  <Button
                    disabled={
                      !cryptoValue ||
                      !fiatValue ||
                      !selectedAsset ||
                      !selectedCrypto ||
                      fiatValue < minLimit ||
                      fiatValue > maxLimit
                    }
                    width='100%'
                    _focus={{ bgColor: "#fbcd17" }}
                    _active={{ bgColor: "#fbcd17" }}
                    _hover={{ bgColor: "#fbcd17" }}
                    mt={5}
                    bgColor='#fbcd17'
                    color='black'
                    onClick={() => setWalletPage(true)}
                  >
                    Continue
                  </Button>
                </Flex>
              </Flex>

              {selectClicked && (
                <AssetModal
                  setSelectedAsset={setSelectedAsset}
                  setIsFiatSelected={setIsFiatSelected}
                  selectClicked={selectClicked}
                  setSelectClicked={setSelectClicked}
                  setSelectedCrypto={setSelectedCrypto}
                  setCryptoValue={setCryptoValue}
                  list={fiatList}
                  fiat={true}
                  loading={fiatLoading}
                />
              )}

              {cryptoSelectClicked && (
                <AssetModal
                  setSelectedAsset={setSelectedCrypto}
                  setIsFiatSelected={setIsFiatSelected}
                  selectClicked={cryptoSelectClicked}
                  setSelectClicked={setCryptoSelectClicked}
                  setCryptoValue={setCryptoValue}
                  list={coinList}
                  fiat={false}
                  loading={coinLoading}
                />
              )}
            </>
          </Flex>
        </Flex>
      )}
      {link.merchantorderid !== "" && Object.keys(txdata).length !== 0 && (
        <TransactionModals
          onClose={() => setopentxModal(false)}
          isOpen={opentxModal}
          data={txdata}
          orderId={link.merchantorderid}
        />
      )}
    </>
  );
};

export default BuyCrypto;
