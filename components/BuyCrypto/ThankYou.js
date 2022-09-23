import { Button, Flex, Text, Spinner } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { getOrder } from "../../utils/helper";
import { useRouter } from "next/router";

const ThankYou = ({
  setWalletPage,
  setthankyouPage,
  redirectUrl,
  setSelectedAsset,
  setSelectedCrypto,
  setCryptoValue,
  setFiatValue,
}) => {
  const [loading, setLoading] = useState(false);
  const handleContinue = () => {
    setLoading(true);
  };

  const router = useRouter();

  useEffect(() => {
    if (loading) {
      const interval = setInterval(async () => {
        const data = await getOrder(redirectUrl.merchantId);

        if (
          data?.orderMainStatus === "success" ||
          data?.orderMainStatus === "failure"
        ) {
          if (redirectUrl.homeurl) {
            router.push(redirectUrl.homeurl);
            setthankyouPage(false);
            setLoading(false);
            setWalletPage(false);
            setSelectedAsset("");
            setSelectedCrypto("");
            setCryptoValue("");
            setFiatValue("");
          }
        }
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [loading]);
  return (
    <>
      {loading ? (
        <Flex
          width='380px'
          height='520px'
          p={4}
          bgColor={"#ffffff"}
          flexDirection='column'
          borderRadius='12px'
          alignItems={"center"}
        >
          <Spinner
            mt={20}
            height={"120px"}
            w={"120px"}
            thickness='6px'
            speed='1s'
            color='black'
          />
          <Text fontWeight={"500"} fontSize={"18px"} mt={5} color='black'>
            Waiting for trade confirmation
          </Text>
        </Flex>
      ) : (
        <>
          <Flex
            width='380px'
            height='520px'
            p={4}
            bgColor={"#ffffff"}
            flexDirection='column'
            borderRadius='12px'
          >
            <Flex alignItems='center'>
              <ChevronLeftIcon
                onClick={() => {
                  setWalletPage(true);
                  setthankyouPage(false);
                }}
                cursor='pointer'
                boxSize={6}
                color='black'
              />
              <Text color='black' fontWeight='bold' fontSize='18px'>
                Thank You
              </Text>
            </Flex>

            <Flex mt={20} flexDirection='column'>
              <Text
                textAlign='center'
                color='black'
                fontWeight='bold'
                fontSize='24px'
              >
                Thank You!
              </Text>
              <Text mt={2} fontSize='14px' color='black'>
                Thank you for buying your crypto with us. Now you will be
                redirected to our partner Binance Connect in order to fulfil
                your sensitive information data. Please be advised that we do
                not store any data or sensitive information on our website.
              </Text>

              <a
                target='_blank'
                href={redirectUrl.redirectUrl}
                rel='noreferrer'
              >
                <Button
                  width='100%'
                  _focus={{ bgColor: "#fbcd17" }}
                  _active={{ bgColor: "#fbcd17" }}
                  _hover={{ bgColor: "#fbcd17" }}
                  mt={5}
                  bgColor='#fbcd17'
                  color='black'
                  onClick={() => handleContinue()}
                >
                  Continue
                </Button>
              </a>
            </Flex>
          </Flex>
        </>
      )}
    </>
  );
};

export default ThankYou;
