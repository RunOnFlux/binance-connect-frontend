import { useState } from "react";
import {
  Modal,
  Flex,
  Text,
  ModalBody,
  ModalOverlay,
  ModalContent,
  useClipboard,
  Tooltip,
  Img,
} from "@chakra-ui/react";
import {
  CheckIcon,
  CloseIcon,
  NotAllowedIcon,
  TimeIcon,
  CopyIcon,
} from "@chakra-ui/icons";
import EUR from "../../assets/euros.png";
import USD from "../../assets/usd.png";
import { addImageUrl, tokenImages } from "../../utils/helper";

const TransactionModals = ({ onClose, isOpen, data, orderId }) => {
  const { onCopy: onCopyMerchantId, hasCopied: hasCopiedMerchantId } =
    useClipboard(orderId);
  const { onCopy: onCopyDestination, hasCopied: hasCopiedDestination } =
    useClipboard(data?.cryptoAddress);
  const { onCopy: onCopyOrderId, hasCopied: hasCopiedOrderId } = useClipboard(
    data?.orderId
  );
  const { onCopy: onCopyUrl, hasCopied: hasCopiedUrl } = useClipboard(
    `${data?.withdrawBscUrl}${data?.withdrawBscTxId}`
  );
  return (
    <Modal isCentered size={"3xl"} onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody borderRadius={"6px"} bgColor={"#ffffff"} px={3} py={6}>
          <Flex
            justifyContent={"center"}
            flexDirection={"column"}
            // alignItems={"center"}
            color='black'
            h='300px'
          >
            <Flex alignItems={"center"} flexDirection={"column"}>
              {data === "not found" ? (
                <NotAllowedIcon color='black' w={50} h={50} />
              ) : data?.orderMainStatus === "failure" ? (
                <CloseIcon color='red' w={50} h={50} />
              ) : data?.orderMainStatus === "success" ? (
                <CheckIcon color='green' w={50} h={50} />
              ) : data?.orderMainStatus === "processing" ? (
                <TimeIcon color='black' w={50} h={50} />
              ) : null}

              {data === "not found" ? (
                <Text fontWeight={"500"} mt={5} fontSize={"18px"}>
                  Transaction not found
                </Text>
              ) : data?.orderMainStatus === "failure" ? (
                <Text fontWeight={"500"} mt={5} fontSize={"18px"}>
                  Transaction Failed
                </Text>
              ) : data?.orderMainStatus === "success" ? (
                <Text fontWeight={"500"} mt={5} fontSize={"18px"}>
                  Transaction Successful
                </Text>
              ) : data?.orderMainStatus === "processing" ? (
                <Text fontWeight={"500"} mt={5} fontSize={"18px"}>
                  Transaction Processing
                </Text>
              ) : null}
            </Flex>

            <Flex
              mt={3}
              px={10}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Text
                wordBreak={"break-all"}
                mt={3}
                fontWeight={"800"}
                fontSize={"12px"}
              >
                Merchant Order Id:{" "}
                <span style={{ fontWeight: "500", marginLeft: "8px" }}>
                  {orderId}
                </span>
                <Tooltip
                  hasArrow
                  label={hasCopiedOrderId ? "Copied!" : "Copy"}
                  bg='gray.300'
                  color='black'
                >
                  <CopyIcon
                    ml={1}
                    onClick={onCopyMerchantId}
                    cursor='pointer'
                  />
                </Tooltip>
              </Text>

              <Flex>
                <Text
                  wordBreak={"break-all"}
                  mt={3}
                  fontWeight={"800"}
                  fontSize={"12px"}
                >
                  Amount:
                </Text>
                <Flex ml={2} alignItems={"center"} mt={3}>
                  <Text
                    wordBreak={"break-all"}
                    fontWeight={"500"}
                    fontSize={"12px"}
                  >
                    {data?.fiatAmount} {data?.baseCurrency}
                  </Text>
                  <Img
                    ml={1}
                    h='14px'
                    src={
                      data?.baseCurrency === "USD"
                        ? USD.src
                        : data?.baseCurrency === "EUR"
                        ? EUR.src
                        : ""
                    }
                  />
                </Flex>

                <Text ml={2} mt={3}>
                  {"->"}
                </Text>

                <Flex ml={2} alignItems={"center"} mt={3}>
                  <Text
                    wordBreak={"break-all"}
                    fontWeight={"500"}
                    fontSize={"12px"}
                  >
                    {data?.cryptoAmount} {data?.cryptoCurrency}
                  </Text>
                  <Img
                    ml={1}
                    h='14px'
                    src={tokenImages[data?.cryptoCurrency]}
                  />
                </Flex>
              </Flex>

              <Text
                mt={3}
                wordBreak={"break-all"}
                fontWeight={"800"}
                fontSize={"12px"}
              >
                Destination:{" "}
                <span style={{ fontWeight: "500", marginLeft: "8px" }}>
                  {data?.cryptoAddress}
                </span>
                <Tooltip
                  hasArrow
                  label={hasCopiedDestination ? "Copied!" : "Copy"}
                  bg='gray.300'
                  color='black'
                >
                  <CopyIcon
                    ml={1}
                    onClick={onCopyDestination}
                    cursor='pointer'
                  />
                </Tooltip>
              </Text>

              <Text
                mt={3}
                wordBreak={"break-all"}
                fontWeight={"800"}
                fontSize={"12px"}
              >
                Order id:{" "}
                <span style={{ fontWeight: "500", marginLeft: "8px" }}>
                  {data?.orderId}
                </span>
                <Tooltip
                  hasArrow
                  label={hasCopiedOrderId ? "Copied!" : "Copy"}
                  bg='gray.300'
                  color='black'
                >
                  <CopyIcon ml={1} onClick={onCopyOrderId} cursor='pointer' />
                </Tooltip>
              </Text>

              <Text
                display={data?.withdrawBscUrl === "" ? "none" : undefined}
                mt={3}
                fontWeight={"800"}
                fontSize={"12px"}
                wordBreak={"break-all"}
              >
                Withdraw Url:
                <span
                  style={{ fontWeight: "500", marginLeft: "8px" }}
                >{`${data?.withdrawBscUrl}${data?.withdrawBscTxId}`}</span>
                <Tooltip
                  hasArrow
                  label={hasCopiedUrl ? "Copied!" : "Copy"}
                  bg='gray.300'
                  color='black'
                >
                  <CopyIcon ml={1} onClick={onCopyUrl} cursor='pointer' />
                </Tooltip>
              </Text>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default TransactionModals;
