import { useMemo, useState } from "react";
import axios from "axios";

const useGetIpAddress = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [error, setError] = useState(false);
  useMemo(async () => {
    try {
      if (navigator?.brave) {
        const ip = await axios.get(
          // `https://api.bigdatacloud.net/data/ip-geolocation-full?key=${process.env.REACT_APP_big_data}`
          "https://ip4.seeip.org/json"
        );

        const ip2 = await axios.get("/api/ip");

        setIpAddress(ip.data.ip);
        setError(false);
      } else {
        const ip = await axios.get(
          // `https://api.bigdatacloud.net/data/ip-geolocation-full?key=${process.env.REACT_APP_big_data}`
          "https://ip4.seeip.org/json"
        );

        setIpAddress(ip.data.ip);
        setError(false);
      }
    } catch (err) {
      setIpAddress("");
      setError(true);
    }
  }, []);

  return { ipAddress, error };
};

export default useGetIpAddress;
