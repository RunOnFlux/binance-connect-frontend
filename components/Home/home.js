import React from "react";
import styles from "./index.module.css";

import BuyCrypto from "../BuyCrypto";
import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Info from "../info";
export function HomePage() {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  return (
    <Flex
      // py={20}
      // bgColor='rgb(243, 238, 238)'
      // height={isMobileDevice ? undefined : "110vh"}
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
    >
      <Flex
        flexDirection={isMobileDevice ? "column" : undefined}
        justifyContent='center'
      >
        {/* <Info /> */}

        <BuyCrypto />
      </Flex>
    </Flex>
  );
}
