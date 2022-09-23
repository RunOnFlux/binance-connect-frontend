// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
var qs = require("qs");

export default async function handler(req, res) {
  // console.log("req", req);
  var data = qs.stringify({
    merchantOrderId: req.body.merchantId,
  });

  var config = {
    method: "post",
    url: `https://fluxnodeservice.com/api/binance/get_query_order_list`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  const order = await axios(config);

  if (order.data.success === "true") {
    res.status(200).json({
      data: order.data.data == null ? "not found" : order.data.data[0],
    });
  } else if (order.data.success === "false") {
    res.status(400).json({ msg: "an error occurred" });
  }
}
