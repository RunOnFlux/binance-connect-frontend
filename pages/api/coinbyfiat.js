// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
var qs = require("qs");

const getImages = async (list) => {
  try {
    const images = [];
    for (let i = 0; i < list.length; i++) {
      const data = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${list[i].cryptoCurrency}`
      );

      const coin = data.data.coins.filter(
        (item) => item.symbol === list[i].cryptoCurrency
      );

      images.push(coin[0].large);
    }

    return images;
  } catch (err) {}
};

export default async function handler(req, res) {
  // console.log("req", req);
  var data = qs.stringify({
    ip: req.body.ip,
  });

  var config = {
    method: "post",
    url: `https://binanceconnectbackend.runonflux.io/api/binance/get_coin_info/fiat/${req.body.asset}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  const coin = await axios(config);

  if (coin.data.success === "true") {
    res.status(200).json({ coinList: coin.data.data });
  } else if (coin.data.success === "false") {
    res.status(400).json({ msg: "an error occurred" });
  }
}
