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
import { SearchIcon } from "@chakra-ui/icons";

import React from "react";

const NetworkModal = ({
  visible,
  setVisible,
  networkList,
  selectedNetwork,
  setSelectedNetwork,
  setNetworkRegex,
}) => {
  const handleSelect = (asset) => {};

  return (
    // <SlideFade in={visible}>
    <Flex
      visibility={visible ? "visible" : "hidden"}
      position='absolute'
      // top='32'
      mt={14}
      ml={0}
      borderRadius='12px'
      bgColor='#ffffff'
      p={4}
      zIndex={99}
      flexDirection='column'
      height='520px'
      width='380px'
    >
      <Flex mb={4} alignItems='center' justifyContent='space-between'>
        <Text fontWeight='600' fontSize='20px' color='black'>
          Network
        </Text>
        <CloseButton
          onClick={() => setVisible(false)}
          height='30px'
          width='20px'
          color='rgba(49, 52, 87, 0.6)'
        />
      </Flex>
      <Text color='black' fontSize='14px'>
        Please note that quotation will be different according to the chosen
        network.
      </Text>

      <Flex mt={2} height='300px' flexDirection='column' overflowY='scroll'>
        {networkList?.map((network, index) => (
          <Flex
            color='black'
            border={network.network === selectedNetwork ? "1px" : ""}
            borderColor={network.network === selectedNetwork ? "#fbcd17" : ""}
            borderRadius='6px'
            _hover={{ border: "1px", borderColor: "#fbcd17" }}
            cursor='pointer'
            onClick={() => {
              setSelectedNetwork(network.network);
              setNetworkRegex(network.addressRegex);
            }}
            my={1}
            p={2}
            key={index}
          >
            <Text fontWeight='600'>{network.network} Network</Text>
          </Flex>
        ))}
      </Flex>

      <Button
        width='100%'
        _focus={{ bgColor: "#fbcd17" }}
        _active={{ bgColor: "#fbcd17" }}
        _hover={{ bgColor: "#fbcd17" }}
        bgColor='#fbcd17'
        color='black'
        mt={5}
        onClick={() => setVisible(false)}
      >
        Confirm
      </Button>
    </Flex>
    // </SlideFade>
  );
};

export default NetworkModal;
