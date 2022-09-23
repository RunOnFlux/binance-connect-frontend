// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
var qs = require("qs");

export default async function handler(req, res) {
  // console.log("req", req);

  var config = {
    method: "post",
    url: "https://fluxnodeservice.com/api/binance/get_trade",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify({
      baseCurrency: req.body.fiat,
      cryptoCurrency: req.body.crypto,
      fiatCurrency: req.body.fiat,
      cryptoAddress: req.body.walletAddress,
      cryptoNetwork: req.body.network,
      orderAmount: req.body.amount,
    }),
  };

  const data = await axios(config);
  if (data.data.success === "true") {
    res
      .status(200)
      .json({
        redirectUrl: data.data.data.redirectUrl,
        homeurl: data.data.data.merchantRedirectUrl,
        merchantOrderId: data.data.data.merchantOrderId,
      });
  } else if (data.data.success === "false") {
    res.status(400).json({ msg: data.data.data.message });
  }
}
