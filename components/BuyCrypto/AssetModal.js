import {
  Flex,
  Input,
  Text,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  CloseButton,
  SlideFade,
  Image,
  ScaleFade,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import EUR from "../../assets/euros.png";
import USD from "../../assets/usd.png";
import SHIB from "../../assets/shib.png";
import BUSD from "../../assets/busd.png";
import { tokenImages } from "../../utils/helper";

import React from "react";

const AssetModal = ({
  selectClicked,
  setSelectClicked,
  list,
  setSelectedAsset,
  setIsFiatSelected,
  fiat,
  setSelectedCrypto,
  setCryptoValue,
  loading,
}) => {
  const handleSelect = (asset) => {
    if (fiat) {
      setSelectedCrypto("");
      setSelectedAsset(asset);
      setSelectClicked(false);
      setCryptoValue(0);
    } else {
      setSelectedAsset(asset);
      setSelectClicked(false);
      setCryptoValue(0);
    }
  };
  console.log(list);

  return (
    // <ScaleFade in={selectClicked}>
    <Flex
      // visibility={selectClicked ? "visible" : "hidden"}

      position='absolute'
      // top='32'
      mt={10}
      ml={-4}
      borderRadius='12px'
      display={"inline-block"}
      // right={"60"}
      bgColor='#ffffff'
      p={4}
      zIndex={99}
      flexDirection='column'
      width='380px'
      height='485px'
    >
      <Flex mb={4} alignItems='center' justifyContent='space-between'>
        <Text fontWeight='500' fontSize='20px' color='rgba(49, 52, 87, 0.6)'>
          Select a Fiat Currency
        </Text>
        <CloseButton
          onClick={() => setSelectClicked(false)}
          height='30px'
          width='20px'
          color='rgba(49, 52, 87, 0.6)'
        />
      </Flex>

      <InputGroup mb={4}>
        <InputLeftElement>
          {" "}
          <SearchIcon color='rgba(49, 52, 87, 0.6)' />
        </InputLeftElement>
        {/* <InputLeftElement
          children={<SearchIcon color='rgba(49, 52, 87, 0.6)' />}
        /> */}
        <Input
          borderColor='rgba(49, 52, 87, 0.6)'
          placeholder='Search'
          _placeholder={{ color: "rgba(49, 52, 87, 0.6)" }}
          color='rgba(49, 52, 87, 0.6)'
        />
      </InputGroup>

      {loading ? (
        <Flex justifyContent={"center"}>
          <Text>Loading...</Text>
        </Flex>
      ) : fiat ? (
        <Flex overflowY='scroll' flexDirection='column'>
          {list?.map((asset, index) => {
            console.log(asset);
            return (
              <Flex
                onClick={() => handleSelect(asset)}
                mb={4}
                cursor='pointer'
                alignItems='center'
                key={index}
              >
                <Image
                  alt='img'
                  height='30px'
                  width='30px'
                  mr={2}
                  src={
                    asset === "SHIB"
                      ? SHIB.src
                      : asset === "BUSD"
                      ? BUSD.src
                      : asset === "Select Fiat"
                      ? ""
                      : asset === "Select Crypto"
                      ? ""
                      : asset === "EUR"
                      ? EUR.src
                      : asset === "USD"
                      ? USD.src
                      : ""
                  }
                />

                <Flex flexDirection='column'>
                  <Text fontWeight='bold' color='black'>
                    {asset}
                  </Text>
                  <Text
                    fontWeight='bold'
                    color='rgba(49, 52, 87, 0.6)'
                    fontSize='14px'
                  >
                    {asset}
                  </Text>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      ) : (
        <Flex overflowY='scroll' flexDirection='column'>
          {list?.map((asset, index) => {
            return (
              <Flex
                onClick={() => handleSelect(asset.cryptoCurrency)}
                mb={4}
                cursor='pointer'
                alignItems='center'
                key={index}
              >
                <Image
                  alt='img'
                  height='30px'
                  width='30px'
                  mr={2}
                  src={
                    asset.cryptoCurrency === "SHIB"
                      ? SHIB.src
                      : asset.cryptoCurrency === "BUSD"
                      ? BUSD.src
                      : asset.cryptoCurrency === "Select Fiat"
                      ? ""
                      : asset.cryptoCurrency === "Select Crypto"
                      ? ""
                      : tokenImages[`${asset?.cryptoCurrency}`]
                    //  `https://cryptoicons.org/api/icon/${asset?.cryptoCurrency.toLowerCase()}/200`
                  }
                />
                <Flex flexDirection='column'>
                  <Text fontWeight='bold' color='black'>
                    {asset.cryptoCurrency}
                  </Text>
                  <Text
                    fontWeight='bold'
                    color='rgba(49, 52, 87, 0.6)'
                    fontSize='14px'
                  >
                    {asset.cryptoCurrency}
                  </Text>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      )}
    </Flex>
    // </ScaleFade>
  );
};

export default AssetModal;
