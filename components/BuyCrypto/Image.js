import { Img } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Image = dynamic(() =>
  import("../../node_modules/cryptocurrency-icons/svg/icon/btc.svg").then(
    (value) => <Img src={value.src} />
  )
);

export default Image;
