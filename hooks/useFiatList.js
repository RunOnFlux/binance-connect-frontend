import React, { useState, useMemo } from "react";
import useGetIpAddress from "./useGetIpAddress";
// import money from '../node_modules/cryptocurrency-icons/svg/icon/btc.svg'
import axios from "axios";
import { toast } from "react-toastify";
var qs = require("qs");

const useFiatList = () => {
  const { ipAddress, error } = useGetIpAddress();
  const [fiatList, setFiatList] = useState([]);
  const [loading, setloading] = useState(false);

  const getUniqueArray = (array) => {
    let uniqueArray = [];

    for (let i = 0; i < array.length; i++) {
      if (uniqueArray.indexOf(array[i]) === -1) {
        uniqueArray.push(array[i]);
      }
    }
    return uniqueArray;
  };

  const extractFiat = (array) => {
    let Fiats = [];
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
      Fiats.push(array[i].fiatCurrency);
    }
    return Fiats;
  };

  console.log(fiatList);

  useMemo(async () => {
    if (ipAddress && !error) {
      setloading(true);
      const data = await axios.post("/api/fiatlist", {
        ip: ipAddress,
      });

      if (data.status === 200) {
        console.log("newdata", data);
        if (data.data.list.error) {
          console.log("error occurred");
        } else {
          setFiatList(data.data.list);
          setloading(false);
        }
      } else {
        setloading(false);

        setFiatList([]);
      }
    }
  }, [ipAddress, error]);

  return { fiatList, loading };
};

export default useFiatList;
