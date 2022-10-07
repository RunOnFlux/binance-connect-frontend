import { useMemo, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const useGetIpAddress = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [error, setError] = useState(false);
  useMemo(async () => {
    try {
      if (navigator?.brave) {
        toast.error("Brave browser is not supported", {
          toastId: "error2",
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // const ip = await axios.get(
        //   // `https://api.bigdatacloud.net/data/ip-geolocation-full?key=${process.env.REACT_APP_big_data}`
        //   "https://ip4.seeip.org/json"
        // );

        // setIpAddress(ip.data.ip);
        // setError(false);
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
