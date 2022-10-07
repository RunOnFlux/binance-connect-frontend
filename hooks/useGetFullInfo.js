import React, { useState, useMemo } from "react";
import useGetIpAddress from "./useGetIpAddress";
// import money from '../node_modules/cryptocurrency-icons/svg/icon/btc.svg'
import axios from "axios";
var qs = require("qs");
import { toast } from "react-toastify";

const useGetFullInfo = () => {
  const { ipAddress, error } = useGetIpAddress();
  const [fullInfo, setFullInfo] = useState({});
  const [showedToast, setshowedToast] = useState(false);

  useMemo(async () => {
    if (ipAddress && !error) {
      try {
        const data = await axios.post("/api/coininfo", {
          ip: ipAddress,
        });

        if (data.status === 200) {
          if (data.data.coininfo.error) {
            toast.error(data.data.coininfo.error, {
              position: "top-right",
              toastId: "error1",
              autoClose: 10000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            setFullInfo(data.data.coininfo);
          }
        } else {
          toast.error(data.data.msg, {
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setFullInfo([]);
        }
        // var data = qs.stringify({
        //   ip: ipAddress,
        // });
        // var config = {
        //   method: "post",
        //   url: "http://65.108.192.34:8787/api/binance/get_coin_info",
        //   headers: {
        //     "Content-Type": "application/x-www-form-urlencoded",
        //   },
        //   data: data,
        // };

        // const info = await axios(config);
        // if (info.data.success === "true") {
        //   setFullInfo(info.data.data);
        // } else if (fiat.data.success === "false") {
        //   setFullInfo({});
        //   alert(info.data.data.message);
        // }
      } catch (err) {
        if (
          err.response.data.msg === "not supported ip country" &&
          !showedToast
        ) {
          toast.error(
            "Your region/country is not supported to purchase crypto at this time",
            {
              position: "top-right",
              autoClose: 10000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        }
      }
    }
  }, [ipAddress, error]);

  return { fullInfo };
};

export default useGetFullInfo;
