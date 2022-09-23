import { Text, Flex, useMediaQuery } from "@chakra-ui/react";

const Info = () => {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  return (
    <Flex
      mt={isMobileDevice ? 20 : undefined}
      mb={isMobileDevice ? 10 : 60}
      mr={5}
      color='black'
      flexDirection='column'
    >
      <Flex
        fontWeight='550'
        lineHeight='1.2'
        fontSize={isMobileDevice ? "40px" : "50px"}
        flexDirection={"column"}
      >
        <Text color='black'>Buying </Text>
        <Text color={"#5378EF"}>Made Easy</Text>
      </Flex>
      {isMobileDevice ? (
        <Text mt={5} fontSize='14px'>
          Buy and sell Flux and 50+ <br /> cryptocurrencies on trusted platforms
          <br />
          used by milions of users worldwide.
        </Text>
      ) : (
        <Text fontSize='14px'>
          Buy and sell Flux and 50+ cryptocurrencies on trusted platforms
          <br /> used by milions of users worldwide.
        </Text>
      )}
    </Flex>
  );
};

export default Info;
