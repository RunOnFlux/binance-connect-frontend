import { Flex, Img, Text, Image } from "@chakra-ui/react";
import React from "react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import SHIB from "../../assets/shib.png";
import BUSD from "../../assets/busd.png";
import EUR from "../../assets/euros.png";
import USD from "../../assets/usd.png";
import { tokenImages } from "../../utils/helper";
// import Image from "next/image";

const InputElement = ({ icon, asset }) => {
  return (
    <React.Fragment>
      <Flex zIndex={0} alignItems='center' mr={20}>
        <Image
          alt='img'
          display={
            asset === "Select Fiat"
              ? "none"
              : asset === "Select Crypto"
              ? "none"
              : undefined
          }
          zIndex={0}
          mr={2}
          height='20px'
          width='20px'
          // src={asset === "EUR" ? EUR.src : asset === "USD" ? USD.src : icon.src}
          src={
            asset === "Select Fiat"
              ? ""
              : asset === "Select Crypto"
              ? ""
              : tokenImages[`${asset}`]
          }
        />
        <Text
          // mr={}
          whiteSpace='nowrap'
          zIndex={1}
          fontWeight='500'
          color='black'
        >
          {asset}
        </Text>
        <ChevronRightIcon
          zIndex={0}
          mr={2}
          boxSize={6}
          fontWeight='bold'
          color='black'
        />
      </Flex>
    </React.Fragment>
  );
};

export default InputElement;
