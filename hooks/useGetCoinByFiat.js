import { useState, useMemo } from "react";
import useGetIpAddress from "./useGetIpAddress";
import axios from "axios";
import { addImageUrl } from "../utils/helper";
var qs = require("qs");

const useGetCoinByFiat = (selectedAsset) => {
  const { ipAddress, error } = useGetIpAddress();
  const [coinList, setCoinList] = useState([]);
  const [loading, setloading] = useState(false);
  useMemo(async () => {
    if (ipAddress && !error && selectedAsset) {
      try {
        setloading(true);
        const data = await axios.post("/api/coinbyfiat", {
          ip: ipAddress,
          asset: selectedAsset,
        });

        if (data.status === 200) {
          // const list =await addImageUrl(data.data.coinList);
          setCoinList(data.data.coinList);
          setloading(false);
        } else {
          setloading(false);
          setCoinList([]);
        }

        //   setloading(true);
        //   var data = qs.stringify({
        //     ip: ipAddress,
        //   });
        //   var config = {
        //     method: "post",
        //     url: `http://65.108.192.34:8787/api/binance/get_coin_info/fiat/${selectedAsset}`,
        //     headers: {
        //       "Content-Type": "application/x-www-form-urlencoded",
        //     },
        //     data: data,
        //   };
        //   const coin = await axios(config);
        //   if (coin.data.success === "true") {
        //     setCoinList(coin.data.data);
        //     setloading(false);
        //   } else if (coin.data.success === "false") {
        //     setCoinList([]);
        //     setloading(false);
        //     alert(coin.data.data.message);
        //   }
      } catch (err) {
        console.log(err);
        setloading(false);
      }
    }
  }, [ipAddress, error, selectedAsset]);

  return { coinList, loading };
};

export default useGetCoinByFiat;
