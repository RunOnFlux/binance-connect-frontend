// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
var qs = require("qs");

export default async function handler(req, res) {
  // console.log("req", req);
  var data = qs.stringify({
    ip: req.body.ip,
  });

  var config = {
    method: "post",
    url: `https://fluxnodeservice.com/api/binance/get_coin_info/fiat/${req.body.asset}`,
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
