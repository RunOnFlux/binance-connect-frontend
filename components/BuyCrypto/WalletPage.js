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
  ScaleFade,
} from "@chakra-ui/react";

import {
  ChevronLeftIcon,
  SearchIcon,
  InfoIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import useGetNetwork from "../../hooks/useGetNetworks";
import NetworkModal from "./NetworkModal";
import SHIB from "../../assets/shib.png";
import BUSD from "../../assets/busd.png";
import { tokenImages } from "../../utils/helper";

const WalletPage = ({
  walletPage,
  setWalletPage,
  coinList,
  selectedCrypto,
  visible,
  setVisible,
  selectedNetwork,
  setSelectedNetwork,
  walletAddress,
  setwalletAddress,
  handleGenerateTrade,
  networkRegex,
  setNetworkRegex,
}) => {
  const [isWalletValid, setisWalletValid] = useState(false);

  const { networkList } = useGetNetwork(selectedCrypto);

  console.log("networkList", networkList);
  //   useGetIpAddress();

  useMemo(() => {
    if (networkRegex && walletAddress) {
      const regex = new RegExp(networkRegex);
      console.log(networkRegex);
      console.log(regex.test(walletAddress));
      setisWalletValid(regex.test(walletAddress));
      // setNetworkRegex()
    }
  }, [networkRegex, walletAddress]);

  console.log("wallet", networkRegex);

  return (
    // <ScaleFade in={walletPage}>
    <Flex flexDirection='column'>
      <Flex
        width='380px'
        p={4}
        bgColor={visible ? "#9899AA" : "#ffffff"}
        flexDirection='column'
        borderRadius='12px'
      >
        <Flex alignItems='center'>
          <ChevronLeftIcon
            color='black'
            cursor='pointer'
            onClick={() => setWalletPage(false)}
            mr={2}
            boxSize={6}
          />
          <Text color='black' fontWeight='bold' fontSize='18px'>
            Enter Wallet Address
          </Text>
        </Flex>

        <Text p={2} color='black' fontSize='14px' mt={2}>
          Please enter the correct wallet address. Only enter the address of a
          wallet that you own and to which you have access.
        </Text>

        <>
          <Flex
            flexDirection='column'
            p={2}
            mt={4}
            visibility={visible ? "hidden" : "visible"}
          >
            <Flex color='black' fontSize='14px' justifyContent='space-between'>
              <Text>Wallet Address</Text>
              <Flex>
                <Image
                  alt='img'
                  height='24px'
                  width='24px'
                  mr={1}
                  src={tokenImages[selectedCrypto]}
                />
                <Text>{selectedCrypto}</Text>
              </Flex>
            </Flex>
            <Input
              border='1px'
              borderColor='#eee'
              color='black'
              value={walletAddress}
              onChange={(e) => setwalletAddress(e.target.value)}
              mt={1}
              _placeholder={{
                fontSize: "14px",
                color: "rgba(49, 52, 87, 0.6)",
              }}
              placeholder={`Enter your ${selectedCrypto} wallet address`}
            />

            {walletAddress && networkRegex && (
              <Text
                display={
                  isWalletValid && walletAddress && selectedNetwork
                    ? "none"
                    : undefined
                }
                mt={1}
                color='red'
                fontSize='12px'
              >
                Invalid Wallet Address
              </Text>
            )}

            <Flex mt={4} fontSize='14px' alignItems='center'>
              <Text color='black' mr={1}>
                Network
              </Text>
              <InfoIcon color='rgba(49, 52, 87, 0.6)' />
            </Flex>

            <Flex
              onClick={() => setVisible(true)}
              justifyContent='space-between'
              h='10'
              border='1px'
              borderColor='#eee'
              alignItems='center'
              fontSize='14px'
              px={2}
              cursor='pointer'
            >
              <Text
                color={selectedNetwork ? "black" : "rgba(49, 52, 87, 0.6)"}
                fontSize='14px'
              >
                {selectedNetwork ? selectedNetwork : "Choose Network"}
              </Text>
              <ChevronRightIcon color='rgba(49, 52, 87, 0.6)' />
            </Flex>
            <Text color='black' mt={1} fontSize='12px'>
              Please note that quotation will be different according to the
              chosen network.
            </Text>

            <Flex
              visibility={selectedNetwork === "BNB" ? "visible" : "hidden"}
              fontSize='14px'
              mt={4}
              alignItems='center'
            >
              <Text color='black' mr={1}>
                Memo
              </Text>
              <InfoIcon color='rgba(49, 52, 87, 0.6)' />
            </Flex>

            <Input
              _placeholder={{
                fontSize: "14px",
                color: "rgba(49, 52, 87, 0.6)",
              }}
              visibility={selectedNetwork === "BNB" ? "visible" : "hidden"}
              mt={1}
              border='1px'
              borderColor='#eee'
              placeholder='Enter Memo'
              color='black'
            />

            <Flex mt={12} width='100%'>
              <Button
                disabled={!isWalletValid}
                width='100%'
                _focus={{ bgColor: "#fbcd17" }}
                _active={{ bgColor: "#fbcd17" }}
                _hover={{ bgColor: "#fbcd17" }}
                mt={5}
                bgColor='#fbcd17'
                color='black'
                onClick={() => handleGenerateTrade()}
              >
                Continue
              </Button>
            </Flex>
          </Flex>
        </>
      </Flex>

      <NetworkModal
        selectedNetwork={selectedNetwork}
        setSelectedNetwork={setSelectedNetwork}
        networkList={networkList}
        visible={visible}
        setVisible={setVisible}
        setNetworkRegex={setNetworkRegex}
      />
    </Flex>
    // </ScaleFade>
  );
};

export default WalletPage;
