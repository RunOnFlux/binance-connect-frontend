// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
  // console.log("req", req);
  const data = await axios.get("https://api.coingecko.com/api/v3/coins/list");

  const cryptoObject = data.data.filter(
    (item) => item.symbol.toLowerCase() === req.body.crypto.toLowerCase()
  );

  const id = cryptoObject[0].id;

  const coin = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);

  const current_price =
    coin.data.market_data?.current_price[req.body.fiat.toLowerCase()];

  res.status(200).json({ price: current_price });
}
