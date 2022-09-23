// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
var qs = require("qs");
import { getUniqueArray, extractFiat } from "../../utils/helper";

export default async function handler(req, res) {
  // console.log("req", req);
  var data = qs.stringify({
    ip: req.body.ip,
  });
  var config = {
    method: "post",
    url: "https://fluxnodeservice.com/api/binance/get_coin_info",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  const fiat = await axios(config);

  if (fiat.data.success === "true") {
    const Fiat = extractFiat(fiat.data.data.pair_list);
    const FiatList = getUniqueArray(Fiat);

    res.status(200).json({ list: FiatList });
  } else if (fiat.data.success === "false") {
    res.status(400).json({ msg: fiat.data.data.message });
  }
}
