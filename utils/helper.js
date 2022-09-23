import axios from "axios";
var qs = require("qs");

export const formatDecimalNumber = (amount) => {
  if (amount) {
    var decimal = amount - Math.floor(amount) !== 0;

    if (!decimal) {
      return amount;
    } else {
      const numberString = amount.toString();
      const isNotZero = numberString[0] !== "0";

      if (isNotZero) {
        const splitValue = amount.toString().split(".");
        const firstValues = splitValue[0];

        const secondValue = splitValue[1]
          .split("")[0]
          .concat(splitValue[1].split("")[1] ?? "0");
        return firstValues + "." + secondValue;
      } else {
        const splitValue = amount.toString().split(".");
        const firstValues = splitValue[0];
        const secondValue = splitValue[1]
          .split("")[0]
          .concat(
            splitValue[1].split("")[1] ?? "0",
            splitValue[1].split("")[2] ?? "0",
            splitValue[1].split("")[3] ?? "0",
            splitValue[1].split("")[4] ?? "0",
            splitValue[1].split("")[5] ?? "0"
          );
        return firstValues + "." + secondValue;
      }
    }
  }
};

export const generateTrade = async (
  fiat,
  crypto,
  walletAddress,
  network,
  amount
) => {
  try {
    // var config = {
    //   method: "post",
    //   url: "http://65.108.192.34:8787/api/binance/get_trade",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   data: qs.stringify({
    //     baseCurrency: fiat,
    //     cryptoCurrency: crypto,
    //     fiatCurrency: fiat,
    //     cryptoAddress: walletAddress,
    //     cryptoNetwork: network,
    //     orderAmount: amount,
    //   }),
    // };

    const data = await axios.post("/api/gettrade", {
      fiat: fiat,
      crypto: crypto,
      walletAddress: walletAddress,
      network: network,
      amount: amount,
    });
    console.log(data);
    if (data.status === 200) {
      return {
        redirectUrl: data.data.redirectUrl,
        homeurl: data.data.homeurl,
        merchantId: data.data.merchantOrderId,
      };
    } else {
      alert(data.data.data.msg);
    }
  } catch (err) {
    console.log(err);
  }
};

export const getOrder = async (merchantId) => {
  try {
    const data = await axios.post("/api/getorder", {
      merchantId: merchantId,
    });

    if (data.status === 200) {
      return data.data.data;
    } else {
      alert(data.data.data.msg);
    }
  } catch (err) {
    console.log(err);
  }
};

export const extractFiat = (array) => {
  let Fiats = [];
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    Fiats.push(array[i].fiatCurrency);
  }
  return Fiats;
};

export const getUniqueArray = (array) => {
  let uniqueArray = [];

  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
};

export const addImageUrl = async (list) => {
  const newList = [];

  for (let i = 0; i < list.length; i++) {
    const tokenList = await axios.get(
      `https://api.coingecko.com/api/v3/search?query=${list[
        i
      ].cryptoCurrency.toLowerCase()}`
    );
    console.log("coin", tokenList);
    const coin = tokenList.data.coins.filter(
      (item) => item.symbol === list[i].cryptoCurrency
    );

    // console.log("coin", { ...list[i], image: coin[0].large });
    newList.push({ ...list[i], image: coin[0].large });
  }

  return newList;
};

export const tokenImages = {
  BNB: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png",
  BTC: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
  ADA: "https://assets.coingecko.com/coins/images/975/large/cardano.png",
  BUSD: "https://assets.coingecko.com/coins/images/9576/large/BUSD.png",
  SHIB: "https://assets.coingecko.com/coins/images/11939/large/shiba.png",
  USDT: "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png",
};
