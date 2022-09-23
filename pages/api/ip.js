// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
  // console.log("req", req);
  const data = await axios.get("https://get.geojs.io/v1/ip.json");

  res.status(200).json({ ip: data.data.ip });
}
