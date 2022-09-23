import { useState, useMemo } from "react";

import axios from "axios";
import useGetIpAddress from "./useGetIpAddress";

const useGetNetwork = (selectedCrypto) => {
  const [networkList, setNetworkList] = useState([]);
  const [loading, setloading] = useState(false);

  const { ipAddress } = useGetIpAddress();

  useMemo(async () => {
    if (selectedCrypto && ipAddress) {
      try {
        setloading(true);

        const data = await axios.post("/api/network", {
          ip: ipAddress,
          asset: selectedCrypto,
        });

        if (data.status === 200) {
          setNetworkList(data.data.network);
          setloading(false);
        } else {
          setloading(false);
          setNetworkList([]);
        }

        // var data = qs.stringify({
        //   ip: ipAddress,
        // });
        // var config = {
        //   method: "post",
        //   url: `http://65.108.192.34:8787/api/binance/get_coin_info/network/${selectedCrypto}`,
        //   headers: {
        //     "Content-Type": "application/x-www-form-urlencoded",
        //   },
        //   data: data,
        // };

        // const network = await axios(config);
        // if (network.data.success === "true") {
        //   setNetworkList(network.data.data);
        //   setloading(false);
        // } else if (network.data.success === "false") {
        //   setNetworkList([]);
        //   setloading(false);
        //   alert(network.data.data.message);
        // }
      } catch (err) {
        console.log(err);
        setloading(false);
      }
    }
  }, [selectedCrypto, ipAddress]);

  return { networkList, loading };
};

export default useGetNetwork;
