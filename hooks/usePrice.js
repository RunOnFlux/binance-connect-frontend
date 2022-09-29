import { useMemo, useState } from "react";
import axios from "axios";

const usePrice = (fiat, crypto, amount) => {
  const [price, setPrice] = useState(0);
  const [price2, setPrice2] = useState(0);

  useMemo(async () => {
    if (fiat && crypto) {
      try {
        const data = await axios.post("/api/price", {
          fiat: fiat,
          crypto: crypto,
        });

        setPrice(data.data.price);
        // setPrice2(data.data.price2);
      } catch (err) {}
    }
  }, [fiat, crypto]);

  return { price, price2 };
};

export default usePrice;
