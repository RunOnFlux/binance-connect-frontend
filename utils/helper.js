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
  ZRX: "https://assets.coingecko.com/coins/images/863/large/0x.png",
  ZIL: "https://assets.coingecko.com/coins/images/2687/large/Zilliqa-logo.png",
  ZEN: "https://assets.coingecko.com/coins/images/8177/large/kC-sx49e_400x400.jpg",
  ZEC: "https://assets.coingecko.com/coins/images/486/large/circle-zcash-color.png",
  YGG: "https://assets.coingecko.com/coins/images/17358/large/le1nzlO6_400x400.jpg",
  YFII: "https://assets.coingecko.com/coins/images/11902/large/YFII-logo.78631676.png",
  YFI: "https://assets.coingecko.com/coins/images/11849/large/yfi-192x192.png",
  XVS: "https://assets.coingecko.com/coins/images/12677/large/download.jpg",
  XVG: "https://assets.coingecko.com/coins/images/203/large/verge-symbol-color_logo.png",
  XTZ: "https://assets.coingecko.com/coins/images/976/large/Tezos-logo.png",
  XRP: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png",
  XNO: "https://assets.coingecko.com/coins/images/756/large/nano.png",
  XMR: "https://assets.coingecko.com/coins/images/69/large/monero_logo.png",
  XLM: "https://assets.coingecko.com/coins/images/22321/large/XL-MOON-LOGO-200px.png",
  XEC: "https://assets.coingecko.com/coins/images/16646/large/Logo_final-22.png",
  WTC: "https://assets.coingecko.com/coins/images/1093/large/ggx6nnW.png",
  WRX: "https://assets.coingecko.com/coins/images/10547/large/WazirX.png",
  WOO: "https://assets.coingecko.com/coins/images/12921/large/w2UiemF__400x400.jpg",
  WNXM: "https://assets.coingecko.com/coins/images/11890/large/wrapped-nexus-mutual.jpg",
  WING: "https://assets.coingecko.com/coins/images/12477/large/s_wing_icon.png",
  WAXP: "https://assets.coingecko.com/coins/images/1372/large/WAX_Coin_Tickers_P_512px.png",
  WAN: "https://assets.coingecko.com/coins/images/3482/large/wanchain-logo.png",
  VTHO: "https://assets.coingecko.com/coins/images/5230/large/vethor-token.png",
  VOXEL: "https://assets.coingecko.com/coins/images/21260/large/voxies.png",
  VITE: "https://assets.coingecko.com/coins/images/4513/large/Vite.png",
  VIDT: "https://assets.coingecko.com/coins/images/6115/large/V-ID_blockchain_-logo.png",
  VGX: "https://assets.coingecko.com/coins/images/794/large/Voyager-vgx.png",
  VET: "https://assets.coingecko.com/coins/images/1167/large/VeChain-Logo-768x725.png",
  UTK: "https://assets.coingecko.com/coins/images/1824/large/300x300_logo.png",
  USTC: "https://assets.coingecko.com/coins/images/12681/large/UST.png",
  UNI: "https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png",
  UNFI: "https://assets.coingecko.com/coins/images/13152/large/logo-2.png",
  UMA: "https://assets.coingecko.com/coins/images/10951/large/UMA.png",
  UFT: "https://assets.coingecko.com/coins/images/12819/large/UniLend_Finance_logo_PNG.png",
  TWT: "https://assets.coingecko.com/coins/images/11085/large/Trust.png",
  TVK: "https://assets.coingecko.com/coins/images/13330/large/virtua_original.png",
  TRX: "https://assets.coingecko.com/coins/images/1094/large/tron-logo.png",
  TRU: "https://assets.coingecko.com/coins/images/13180/large/truefi_glyph_color.png",
  TROY: "https://assets.coingecko.com/coins/images/10057/large/troy-logo.png",
  TRIBE: "https://assets.coingecko.com/coins/images/14575/large/tribe.PNG",
  TRB: "https://assets.coingecko.com/coins/images/9644/large/Blk_icon_current.png",
  TORN: "https://assets.coingecko.com/coins/images/13496/large/ZINt8NSB_400x400.jpg",
  TOMO: "https://assets.coingecko.com/coins/images/3416/large/Asset_59_2x.png",
  TLM: "https://assets.coingecko.com/coins/images/14676/large/kY-C4o7RThfWrDQsLCAG4q4clZhBDDfJQVhWUEKxXAzyQYMj4Jmq1zmFwpRqxhAJFPOa0AsW_PTSshoPuMnXNwq3rU7Imp15QimXTjlXMx0nC088mt1rIwRs75GnLLugWjSllxgzvQ9YrP4tBgclK4_rb17hjnusGj_c0u2fx0AvVokjSNB-v2poTj0xT9BZRCbzRE3-lF1.jpg",
  TKO: "https://assets.coingecko.com/coins/images/14577/large/tko-logo.png",
  THETA:
    "https://assets.coingecko.com/coins/images/2538/large/theta-token-logo.png",
  TFUEL:
    "https://assets.coingecko.com/coins/images/8029/large/1_0YusgngOrriVg4ZYx4wOFQ.png",
  TCT: "https://assets.coingecko.com/coins/images/2455/large/tokenclub.png",
  T: "",
  SYS: "https://assets.coingecko.com/coins/images/119/large/Syscoin.png",
  SXP: "https://assets.coingecko.com/coins/images/9368/large/swipe.png",
  SUSHI:
    "https://assets.coingecko.com/coins/images/12271/large/512x512_Logo_no_chop.png",
  SUPER: "https://assets.coingecko.com/coins/images/14040/large/6YPdWn6.png",
  SUN: "https://assets.coingecko.com/coins/images/12424/large/RSFOmQ.png",
  STX: "https://assets.coingecko.com/coins/images/2069/large/Stacks_logo_full.png",
  STRAX: "https://assets.coingecko.com/coins/images/531/large/stratis.png",
  STPT: "https://assets.coingecko.com/coins/images/8713/large/STP.png",
  STORJ: "https://assets.coingecko.com/coins/images/949/large/storj.png",
  STMX: "https://assets.coingecko.com/coins/images/1369/large/StormX.png",
  STG: "https://assets.coingecko.com/coins/images/24413/large/STG_LOGO.png",
  STEEM: "https://assets.coingecko.com/coins/images/398/large/steem.png",
  SSV: "https://assets.coingecko.com/coins/images/19155/large/ssv.png",
  SRM: "https://assets.coingecko.com/coins/images/11970/large/serum-logo.png",
  SPELL:
    "https://assets.coingecko.com/coins/images/15861/large/abracadabra-3.png",
  SOL: "https://assets.coingecko.com/coins/images/4128/large/solana.png",
  SNX: "https://assets.coingecko.com/coins/images/3406/large/SNX.png",
  SNM: "https://assets.coingecko.com/coins/images/861/large/sonm.png",
  SLP: "https://assets.coingecko.com/coins/images/10366/large/SLP.png",
  SKL: "https://assets.coingecko.com/coins/images/13245/large/SKALE_token_300x300.png",
  SFP: "https://assets.coingecko.com/coins/images/13905/large/sfp.png",
  SCRT: "https://assets.coingecko.com/coins/images/11871/large/Secret.png",
  SC: "https://assets.coingecko.com/coins/images/289/large/siacoin.png",
  SANTOS: "https://assets.coingecko.com/coins/images/21132/large/santos.png",
  SAND: "https://assets.coingecko.com/coins/images/12129/large/sandbox_logo.jpg",
  RVN: "https://assets.coingecko.com/coins/images/3412/large/ravencoin.png",
  RUNE: "https://assets.coingecko.com/coins/images/6595/large/RUNE.png",
  RSR: "https://assets.coingecko.com/coins/images/8365/large/rsr.png",
  ROSE: "https://assets.coingecko.com/coins/images/13162/large/rose.png",
  RNDR: "https://assets.coingecko.com/coins/images/11636/large/rndr.png",
  RLC: "https://assets.coingecko.com/coins/images/646/large/pL1VuXm.png",
  RIF: "https://assets.coingecko.com/coins/images/7460/large/RIF.png",
  REQ: "https://assets.coingecko.com/coins/images/1031/large/Request_icon_green.png",
  REP: "https://assets.coingecko.com/coins/images/309/large/REP.png",
  REN: "https://assets.coingecko.com/coins/images/3139/large/REN.png",
  REEF: "https://assets.coingecko.com/coins/images/13504/large/Group_10572.png",
  RAY: "https://assets.coingecko.com/coins/images/13928/large/PSigc4ie_400x400.jpg",
  RARE: "https://assets.coingecko.com/coins/images/17753/large/RARE.jpg",
  RAD: "https://assets.coingecko.com/coins/images/14013/large/radicle.png",
  QUICK:
    "https://assets.coingecko.com/coins/images/13970/large/1_pOU6pBMEmiL-ZJVb0CYRjQ.png",
  QTUM: "https://assets.coingecko.com/coins/images/684/large/Qtum_Logo_blue_CG.png",
  QNT: "https://assets.coingecko.com/coins/images/3370/large/5ZOu7brX_400x400.jpg",
  QI: "https://assets.coingecko.com/coins/images/16362/large/GergDDN3_400x400.jpg",
  PYR: "https://assets.coingecko.com/coins/images/14770/large/1617088937196.png",
  PUNDIX:
    "https://assets.coingecko.com/coins/images/14571/large/vDyefsXq_400x400.jpg",
  PSG: "https://assets.coingecko.com/coins/images/11620/large/psg.png",
  PROM: "https://assets.coingecko.com/coins/images/8825/large/Ticker.png",
  POWR: "https://assets.coingecko.com/coins/images/1104/large/power-ledger.png",
  PORTO: "https://assets.coingecko.com/coins/images/20459/large/fcp.jpg",
  POND: "https://assets.coingecko.com/coins/images/8903/large/POND_200x200.png",
  POLY: "https://assets.coingecko.com/coins/images/2784/large/inKkF01.png",
  POLS: "https://assets.coingecko.com/coins/images/12648/large/polkastarter.png",
  PNT: "https://assets.coingecko.com/coins/images/11659/large/pNetwork.png",
  PLA: "https://assets.coingecko.com/coins/images/14316/large/54023228.png",
  PIVX: "https://assets.coingecko.com/coins/images/548/large/PIVX-Shield.png",
  PHB: "https://assets.coingecko.com/coins/images/1074/large/phoenix-logo.png",
  PHA: "https://assets.coingecko.com/coins/images/12451/large/phala.png",
  PERP: "https://assets.coingecko.com/coins/images/12381/large/60d18e06844a844ad75901a9_mark_only_03.png",
  PERL: "https://assets.coingecko.com/coins/images/4682/large/PERL.eco-Icon-green_6x.png",
  PEOPLE:
    "https://assets.coingecko.com/coins/images/20612/large/GN_UVm3d_400x400.jpg",
  OXT: "https://assets.coingecko.com/coins/images/3916/large/download_%285%29.png",
  ORN: "https://assets.coingecko.com/coins/images/11841/large/orion_logo.png",
  OP: "https://assets.coingecko.com/coins/images/25244/large/Optimism.png",
  OOKI: "https://assets.coingecko.com/coins/images/21719/large/Ooki.png",
  ONT: "https://assets.coingecko.com/coins/images/3447/large/ONT.png",
  ONG: "https://assets.coingecko.com/coins/images/1286/large/So_Mee_logo_icons_11.png",
  ONE: "https://assets.coingecko.com/coins/images/4344/large/Y88JAze.png",
  OMG: "https://assets.coingecko.com/coins/images/776/large/OMG_Network.jpg",
  OM: "https://assets.coingecko.com/coins/images/12151/large/iShot_2022-08-29_15.55.24.png",
  OGN: "https://assets.coingecko.com/coins/images/3296/large/op.jpg",
  OG: "https://assets.coingecko.com/coins/images/11663/large/og.jpg",
  OCEAN:
    "https://assets.coingecko.com/coins/images/3687/large/ocean-protocol-logo.jpg",
  NULS: "https://assets.coingecko.com/coins/images/1053/large/Nuls.png",
  NMR: "https://assets.coingecko.com/coins/images/752/large/numeraire.png",
  NKN: "https://assets.coingecko.com/coins/images/3375/large/nkn.png",
  NEAR: "https://assets.coingecko.com/coins/images/10365/large/near_icon.png",
  MULTI:
    "https://assets.coingecko.com/coins/images/22087/large/1_Wyot-SDGZuxbjdkaOeT2-A.png",
  MOVR: "https://assets.coingecko.com/coins/images/17984/large/9285.png",
  MLN: "https://assets.coingecko.com/coins/images/605/large/Enzyme_Icon_Secondary.png",
  MKR: "https://assets.coingecko.com/coins/images/1364/large/Mark_Maker.png",
  MITH: "https://assets.coingecko.com/coins/images/3484/large/mithril.png",
  MFT: "https://assets.coingecko.com/coins/images/3293/large/hifi_logo.png",
  MDT: "https://assets.coingecko.com/coins/images/2441/large/mdt_logo.png",
  MC: "https://assets.coingecko.com/coins/images/19304/large/Db4XqML.png",
  MBOX: "https://assets.coingecko.com/coins/images/14751/large/mobox.PNG",
  MBL: "https://assets.coingecko.com/coins/images/8460/large/MBL_Logo.png",
  MATIC:
    "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png",
  MASK: "https://assets.coingecko.com/coins/images/14051/large/Mask_Network.jpg",
  MANA: "https://assets.coingecko.com/coins/images/878/large/decentraland-mana.png",
  LUNC: "https://assets.coingecko.com/coins/images/8284/large/01_LunaClassic_color.png",
  LTO: "https://assets.coingecko.com/coins/images/6068/large/lto.png",
  LTC: "https://assets.coingecko.com/coins/images/2/large/litecoin.png",
  LSK: "https://assets.coingecko.com/coins/images/385/large/Lisk_Symbol_-_Blue.png",
  LRC: "https://assets.coingecko.com/coins/images/913/large/LRC.png",
  LPT: "https://assets.coingecko.com/coins/images/7137/large/logo-circle-green.png",
  LOOM: "https://assets.coingecko.com/coins/images/14735/large/LOOM.png",
  LOKA: "https://assets.coingecko.com/coins/images/22572/large/loka_64pix.png",
  LIT: "https://assets.coingecko.com/coins/images/13825/large/logo_200x200.png",
  LINK: "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png",
  LINA: "https://assets.coingecko.com/coins/images/12509/large/1649227343-linalogo200px.png",
  LEVER:
    "https://assets.coingecko.com/coins/images/26205/large/WI72SpBl_400x400.jpeg",
  LDO: "https://assets.coingecko.com/coins/images/13573/large/Lido_DAO.png",
  LAZIO:
    "https://assets.coingecko.com/coins/images/19263/large/B4Lla6V6_400x400.png",
  KP3R: "https://assets.coingecko.com/coins/images/12966/large/kp3r_logo.jpg",
  KMD: "https://assets.coingecko.com/coins/images/611/large/KMD_Mark_Color.png",
  KEY: "https://assets.coingecko.com/coins/images/2034/large/selfkey.png",
  KDA: "https://assets.coingecko.com/coins/images/3693/large/djLWD6mR_400x400.jpg",
  KAVA: "https://assets.coingecko.com/coins/images/9761/large/kava.png",
  JUV: "https://assets.coingecko.com/coins/images/10060/large/Juve-10.png",
  JOE: "https://assets.coingecko.com/coins/images/17569/large/joe_200x200.png",
  JASMY:
    "https://assets.coingecko.com/coins/images/13876/large/JASMY200x200.jpg",
  IRIS: "https://assets.coingecko.com/coins/images/5135/large/IRIS.png",
  IOTX: "https://assets.coingecko.com/coins/images/3334/large/iotex-logo.png",
  IMX: "https://assets.coingecko.com/coins/images/17233/large/imx.png",
  ILV: "https://assets.coingecko.com/coins/images/14468/large/ILV.JPG",
  IDEX: "https://assets.coingecko.com/coins/images/2565/large/logomark-purple-286x286.png",
  ICP: "https://assets.coingecko.com/coins/images/14495/large/Internet_Computer_logo.png",
  HOT: "https://assets.coingecko.com/coins/images/3348/large/Holologo_Profile.png",
  HNT: "https://assets.coingecko.com/coins/images/4284/large/Helium_HNT.png",
  HIVE: "https://assets.coingecko.com/coins/images/10840/large/logo_transparent_4x.png",
  HIGH: "https://assets.coingecko.com/coins/images/18973/large/logosq200200Coingecko.png",
  HBAR: "https://assets.coingecko.com/coins/images/3688/large/hbar.png",
  HARD: "https://assets.coingecko.com/coins/images/13008/large/HARD_coin_256.png",
  GTO: "https://assets.coingecko.com/coins/images/1359/large/gifto.png",
  GTC: "https://assets.coingecko.com/coins/images/15810/large/gitcoin.png",
  GRT: "https://assets.coingecko.com/coins/images/13397/large/Graph_Token.png",
  GMT: "https://assets.coingecko.com/coins/images/23597/large/gmt.png",
  GLMR: "https://assets.coingecko.com/coins/images/22459/large/glmr.png",
  GLM: "https://assets.coingecko.com/coins/images/542/large/Golem_Submark_Positive_RGB.png",
  GHST: "https://assets.coingecko.com/coins/images/12467/large/ghst_200.png",
  GALA: "https://assets.coingecko.com/coins/images/12493/large/GALA-COINGECKO.png",
  GAL: "https://assets.coingecko.com/coins/images/11585/large/Galatasaray-10.png",
  FXS: "https://assets.coingecko.com/coins/images/13423/large/frax_share.png",
  FUN: "https://assets.coingecko.com/coins/images/761/large/funfair.png",
  FTT: "https://assets.coingecko.com/coins/images/9026/large/F.png",
  FTM: "https://assets.coingecko.com/coins/images/4001/large/Fantom.png",
  FRONT:
    "https://assets.coingecko.com/coins/images/12479/large/frontier_logo.png",
  FORTH:
    "https://assets.coingecko.com/coins/images/14917/large/photo_2021-04-22_00.00.03.jpeg",
  FOR: "https://assets.coingecko.com/coins/images/8242/large/for.png",
  FLUX: "https://assets.coingecko.com/coins/images/5163/large/Flux_symbol_blue-white.png",
  FIS: "https://assets.coingecko.com/coins/images/12423/large/stafi_logo.jpg",
  FIRO: "https://assets.coingecko.com/coins/images/479/large/firocoingecko.png",
  FIO: "https://assets.coingecko.com/coins/images/11821/large/fio200x200.png",
  FIL: "https://assets.coingecko.com/coins/images/12817/large/filecoin.png",
  FIDA: "https://assets.coingecko.com/coins/images/13395/large/bonfida.png",
  FET: "https://assets.coingecko.com/coins/images/5681/large/Fetch.jpg",
  FARM: "https://assets.coingecko.com/coins/images/12304/large/Harvest.png",
  ETH: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
  ETC: "https://assets.coingecko.com/coins/images/453/large/ethereum-classic-logo.png",
  ERN: "https://assets.coingecko.com/coins/images/14238/large/LOGO_HIGH_QUALITY.png",
  EPX: "https://assets.coingecko.com/coins/images/25444/large/ellipsis-light_%281%29.png",
  EOS: "https://assets.coingecko.com/coins/images/738/large/eos-eos-logo.png",
  ENS: "https://assets.coingecko.com/coins/images/19785/large/acatxTm8_400x400.jpg",
  ENJ: "https://assets.coingecko.com/coins/images/1102/large/enjin-coin-logo.png",
  EGLD: "https://assets.coingecko.com/coins/images/12335/large/elrond3_360.png",
  DYDX: "https://assets.coingecko.com/coins/images/17500/large/hjnIm9bV.jpg",
  DUSK: "https://assets.coingecko.com/coins/images/5217/large/D_ticker_purple_on_circle_%282%29.png",
  DREP: "https://assets.coingecko.com/coins/images/14578/large/KotgsCgS_400x400.jpg",
  DOT: "https://assets.coingecko.com/coins/images/12171/large/polkadot.png",
  DOGE: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png",
  DOCK: "https://assets.coingecko.com/coins/images/3978/large/dock-icon-dark-large.png",
  DNT: "https://assets.coingecko.com/coins/images/849/large/district0x.png",
  DIA: "https://assets.coingecko.com/coins/images/11955/large/image.png",
  DGB: "https://assets.coingecko.com/coins/images/63/large/digibyte.png",
  DF: "https://assets.coingecko.com/coins/images/9709/large/xlGxxIjI_400x400.jpg",
  DEXE: "https://assets.coingecko.com/coins/images/12713/large/logo_%2814%29.png",
  DENT: "https://assets.coingecko.com/coins/images/1152/large/gLCEA2G.png",
  DEGO: "https://assets.coingecko.com/coins/images/12503/large/c185FKx.png",
  DCR: "https://assets.coingecko.com/coins/images/329/large/decred.png",
  DATA: "https://assets.coingecko.com/coins/images/18500/large/data_32.png",
  DASH: "https://assets.coingecko.com/coins/images/19/large/dash-logo.png",
  DAR: "https://s2.coinmarketcap.com/static/img/coins/64x64/11374.png",
  DAI: "https://assets.coingecko.com/coins/images/9956/large/4943.png",
  CVX: "https://assets.coingecko.com/coins/images/15585/large/convex.png",
  CVP: "https://assets.coingecko.com/coins/images/12266/large/Powerpool.jpg",
  CVC: "https://assets.coingecko.com/coins/images/788/large/civic-orange.png",
  CTXC: "https://assets.coingecko.com/coins/images/3861/large/2638.png",
  CRV: "https://assets.coingecko.com/coins/images/12124/large/Curve.png",
  CREAM: "https://assets.coingecko.com/coins/images/11976/large/Cream.png",
  COTI: "https://assets.coingecko.com/coins/images/2962/large/Coti.png",
  COS: "https://assets.coingecko.com/coins/images/8379/large/4036.png",
  COMP: "https://assets.coingecko.com/coins/images/10775/large/COMP.png",
  COCOS:
    "https://assets.coingecko.com/coins/images/4932/large/_QPpjoUi_400x400.jpg",
  CLV: "https://assets.coingecko.com/coins/images/15278/large/photo_2022-03-24_10-22-33.jpg",
  CKB: "https://assets.coingecko.com/coins/images/9566/large/Nervos_White.png",
  CITY: "https://assets.coingecko.com/coins/images/15799/large/mJgwTHzCVVCJlqo1tF0NWP57igOYSXr5k1Vqvomd.png",
  CHZ: "https://assets.coingecko.com/coins/images/8834/large/Chiliz.png",
  CHESS:
    "https://assets.coingecko.com/coins/images/16964/large/logo_transparent_bg_200x200.png",
  CELR: "https://assets.coingecko.com/coins/images/4379/large/Celr.png",
  CAKE: "https://assets.coingecko.com/coins/images/12632/large/pancakeswap-cake-logo_%281%29.png",
  C98: "https://assets.coingecko.com/coins/images/17117/large/logo.png",
  BURGER: "https://assets.coingecko.com/coins/images/12563/large/burger.png",
  BTTC: "https://assets.coingecko.com/coins/images/22457/large/btt_logo.png",
  BTCST:
    "https://assets.coingecko.com/coins/images/14449/large/4a3IskOf_400x400.png",
  BSW: "https://assets.coingecko.com/coins/images/16845/large/biswap.png",
  BOND: "https://assets.coingecko.com/coins/images/12811/large/barnbridge.jpg",
  BNX: "https://assets.coingecko.com/coins/images/18095/large/BinaryX-RGB-01_%282%29.png",
  BLZ: "https://assets.coingecko.com/coins/images/2848/large/ColorIcon_3x.png",
  BIFI: "https://assets.coingecko.com/coins/images/12704/large/token.png",
  BIDR: "https://assets.coingecko.com/coins/images/12121/large/bidr_mark_transparent.png",
  BICO: "https://assets.coingecko.com/coins/images/21061/large/biconomy_logo.jpg",
  BETH: "https://assets.coingecko.com/coins/images/13804/large/Binnace.png",
  BETA: "https://assets.coingecko.com/coins/images/18715/large/beta_finance.jpg",
  BEL: "https://assets.coingecko.com/coins/images/12478/large/Bella.png",
  BEAM: "https://assets.coingecko.com/coins/images/7339/large/BEAM.png",
  BCH: "https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png",
  BAT: "https://assets.coingecko.com/coins/images/677/large/basic-attention-token.png",
  BAR: "https://assets.coingecko.com/coins/images/11693/large/Barca-10.png",
  BAND: "https://assets.coingecko.com/coins/images/9545/large/Band_token_blue_violet_token.png",
  BAKE: "https://assets.coingecko.com/coins/images/12588/large/bakerytoken_logo.jpg",
  BNT: "https://assets.coingecko.com/coins/images/736/large/bancor-bnt.png",
  BAL: "https://assets.coingecko.com/coins/images/11683/large/Balancer.png",
  ATOM: "https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png",
  AVA: "https://assets.coingecko.com/coins/images/3014/large/Travala.png",
  IOTA: "https://assets.coingecko.com/coins/images/692/large/IOTA_Swirl.png",
  NEO: "https://assets.coingecko.com/coins/images/480/large/NEO_512_512.png",
  WAVES: "https://assets.coingecko.com/coins/images/425/large/waves.png",
  WIN: "https://assets.coingecko.com/coins/images/9129/large/WinK.png",
  LUNA: "https://assets.coingecko.com/coins/images/25767/large/01_Luna_color.png",

  "1INCH":
    "https://assets.coingecko.com/coins/images/13469/large/1inch-token.png",
  AAVE: "https://assets.coingecko.com/coins/images/12645/large/AAVE.png",
  ACA: "https://assets.coingecko.com/coins/images/20634/large/upOKBONH_400x400.jpg",
  ACH: "https://assets.coingecko.com/coins/images/12390/large/ACH_%281%29.png",
  ACM: "https://assets.coingecko.com/coins/images/13940/large/ACM-10.png",
  ADX: "https://assets.coingecko.com/coins/images/847/large/Ambire_AdEx_Symbol_color.png",
  AERGO: "https://assets.coingecko.com/coins/images/4490/large/aergo.png",
  AGIX: "https://assets.coingecko.com/coins/images/2138/large/singularitynet.png",
  AGLD: "https://assets.coingecko.com/coins/images/18125/large/lpgblc4h_400x400.jpg",
  AION: "https://assets.coingecko.com/coins/images/1023/large/Aion_Currency_Symbol_Transparent_PNG.png",
  AKRO: "https://assets.coingecko.com/coins/images/3328/large/Akropolis.png",
  ALCX: "https://assets.coingecko.com/coins/images/14113/large/Alchemix.png",
  ALGO: "https://assets.coingecko.com/coins/images/4380/large/download.png",
  ALICE: "https://assets.coingecko.com/coins/images/14375/large/alice_logo.jpg",
  ALPACA: "https://assets.coingecko.com/coins/images/14165/large/Logo200.png",
  ALPHA:
    "https://assets.coingecko.com/coins/images/12738/large/AlphaToken_256x256.png",
  ALPINE: "https://assets.coingecko.com/coins/images/23717/large/18112.png",
  AMB: "https://assets.coingecko.com/coins/images/1041/large/amb.png",
  AMP: "https://assets.coingecko.com/coins/images/12409/large/amp-200x200.png",
  ANC: "https://assets.coingecko.com/coins/images/9576/large/BUSD.png",
  ANKR: "https://assets.coingecko.com/coins/images/4324/large/U85xTl2.png",
  ANT: "https://assets.coingecko.com/coins/images/681/large/JelZ58cv_400x400.png",
  APE: "https://assets.coingecko.com/coins/images/24383/large/apecoin.jpg",
  API3: "https://assets.coingecko.com/coins/images/13256/large/api3.jpg",
  AR: "https://assets.coingecko.com/coins/images/4343/large/oRt6SiEN_400x400.jpg",
  ARDR: "https://assets.coingecko.com/coins/images/525/large/Ardor_Vertical_1.png",
  ARK: "https://assets.coingecko.com/coins/images/613/large/ark.png",
  ARPA: "https://assets.coingecko.com/coins/images/8506/large/9u0a23XY_400x400.jpg",
  ASR: "https://assets.coingecko.com/coins/images/11688/large/Roma-10.png",
  ASTR: "https://assets.coingecko.com/coins/images/22617/large/astr.png",
  ATA: "https://assets.coingecko.com/coins/images/15985/large/ATA.jpg",
  ATM: "https://assets.coingecko.com/coins/images/11689/large/Atletico-10.png",
  AUCTION:
    "https://assets.coingecko.com/coins/images/13860/large/1_KtgpRIJzuwfHe0Rl0avP_g.jpeg",
  AUDIO:
    "https://assets.coingecko.com/coins/images/12913/large/AudiusCoinLogo_2x.png",
  AUTO: "https://assets.coingecko.com/coins/images/13751/large/autofarm_icon_200x200.png",
  AVAX: "https://assets.coingecko.com/coins/images/12559/large/coin-round-red.png",
  AXS: "https://assets.coingecko.com/coins/images/13029/large/axie_infinity_logo.png",
  BAND: "https://assets.coingecko.com/coins/images/9545/large/Band_token_blue_violet_token.png",
  BAR: "https://assets.coingecko.com/coins/images/11693/large/Barca-10.png",
  BAT: "https://assets.coingecko.com/coins/images/677/large/basic-attention-token.png",
  BCH: "https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png",
  BEAM: "https://assets.coingecko.com/coins/images/7339/large/BEAM.png",
  BEL: "https://assets.coingecko.com/coins/images/12478/large/Bella.png",
  BETA: "https://assets.coingecko.com/coins/images/18715/large/beta_finance.jpg",
  BETH: "https://assets.coingecko.com/coins/images/13804/large/Binnace.png",
  BICO: "https://assets.coingecko.com/coins/images/21061/large/biconomy_logo.jpg",
  BIDR: "https://assets.coingecko.com/coins/images/12121/large/bidr_mark_transparent.png",
  BIFI: "https://assets.coingecko.com/coins/images/12704/large/token.png",
  BLZ: "https://assets.coingecko.com/coins/images/2848/large/ColorIcon_3x.png",
  BNX: "https://assets.coingecko.com/coins/images/18095/large/BinaryX-RGB-01_%282%29.png",
  BOND: "https://assets.coingecko.com/coins/images/12811/large/barnbridge.jpg",
  BSW: "https://assets.coingecko.com/coins/images/16845/large/biswap.png",
  BTCST:
    "https://assets.coingecko.com/coins/images/14449/large/4a3IskOf_400x400.png",
  BTTC: "https://assets.coingecko.com/coins/images/22457/large/btt_logo.png",
  BTG: "https://assets.coingecko.com/coins/images/1043/large/bitcoin-gold-logo.png",
  BTS: "https://assets.coingecko.com/coins/images/95/large/bitshares.png",
  CELO: "https://assets.coingecko.com/coins/images/11090/large/icon-celo-CELO-color-500.png",
  CFX: "https://assets.coingecko.com/coins/images/13079/large/3vuYMbjN.png",
  CHR: "https://assets.coingecko.com/coins/images/5000/large/Chromia.png",
  CTK: "https://assets.coingecko.com/coins/images/12944/large/shentu_2.jpg",
  CTSI: "https://assets.coingecko.com/coins/images/11038/large/cartesi.png",
  DODO: "https://assets.coingecko.com/coins/images/12651/large/dodo_logo.png",
  ELF: "https://assets.coingecko.com/coins/images/1371/large/aelf-logo.png",
  FLM: "https://assets.coingecko.com/coins/images/12618/large/flamingo_finance_logo.jpg",
  FLOW: "https://assets.coingecko.com/coins/images/13446/large/5f6294c0c7a8cda55cb1c936_Flow_Wordmark.png",
  ICX: "https://assets.coingecko.com/coins/images/1060/large/icon-icx-logo.png",
  INJ: "https://assets.coingecko.com/coins/images/12882/large/Secondary_Symbol.png",
  IOST: "https://assets.coingecko.com/coins/images/2523/large/IOST.png",
  JST: "https://assets.coingecko.com/coins/images/11095/large/JUST.jpg",
  KLAY: "https://assets.coingecko.com/coins/images/9672/large/klaytn.png",
  KNC: "https://assets.coingecko.com/coins/images/14899/large/RwdVsGcw_400x400.jpg",
  KSM: "https://assets.coingecko.com/coins/images/9568/large/m4zRhP5e_400x400.jpg",
  MDX: "https://assets.coingecko.com/coins/images/13775/large/mdex.png",
  MINA: "https://assets.coingecko.com/coins/images/15628/large/JM4_vQ34_400x400.png",
  MIR: "https://assets.coingecko.com/coins/images/13295/large/mirror_logo_transparent.png",
  MOB: "https://assets.coingecko.com/coins/images/14751/large/mobox.PNG",
  MTL: "https://assets.coingecko.com/coins/images/763/large/Metal.png",
  NBS: "https://assets.coingecko.com/coins/images/12532/large/Screenshot_2.png",
  NEXO: "https://assets.coingecko.com/coins/images/3695/large/nexo.png",
  REI: "https://assets.coingecko.com/coins/images/25240/large/c51_j0aB_400x400.jpg",
  T: "https://assets.coingecko.com/coins/images/22228/large/nFPNiSbL_400x400.jpg",
  XEM: "https://assets.coingecko.com/coins/images/242/large/NEM_WC_Logo_200px.png",

  BURGER: "https://assets.coingecko.com/coins/images/12563/large/burger.png",
  C98: "https://assets.coingecko.com/coins/images/17117/large/logo.png",
  CAKE: "https://assets.coingecko.com/coins/images/12632/large/pancakeswap-cake-logo_%281%29.png",
  CELR: "https://assets.coingecko.com/coins/images/4379/large/Celr.png",
  CHESS:
    "https://assets.coingecko.com/coins/images/16964/large/logo_transparent_bg_200x200.png",
  CHZ: "https://assets.coingecko.com/coins/images/8834/large/Chiliz.png",
  CITY: "https://assets.coingecko.com/coins/images/15799/large/mJgwTHzCVVCJlqo1tF0NWP57igOYSXr5k1Vqvomd.png",
  CKB: "https://assets.coingecko.com/coins/images/9566/large/Nervos_White.png",
  CLV: "https://assets.coingecko.com/coins/images/15278/large/photo_2022-03-24_10-22-33.jpg",
  COCOS:
    "https://assets.coingecko.com/coins/images/4932/large/_QPpjoUi_400x400.jpg",
  COMP: "https://assets.coingecko.com/coins/images/10775/large/COMP.png",
  COS: "https://assets.coingecko.com/coins/images/8379/large/4036.png",
  CREAM: "https://assets.coingecko.com/coins/images/23295/large/neWvicW.png",
  CRV: "https://assets.coingecko.com/coins/images/12124/large/Curve.png",
  CTXC: "https://assets.coingecko.com/coins/images/3861/large/2638.png",
  CVC: "https://assets.coingecko.com/coins/images/788/large/civic-orange.png",
  CVP: "https://assets.coingecko.com/coins/images/12266/large/Powerpool.jpg",
  CVX: "https://assets.coingecko.com/coins/images/15585/large/convex.png",
  AED: "https://flagcdn.com/ae.svg",
  AUD: "https://flagcdn.com/au.svg",
  AZN: "https://flagcdn.com/az.svg",
  BGN: "https://flagcdn.com/bg.svg",
  BRL: "https://flagcdn.com/br.svg",
  CAD: "https://flagcdn.com/ca.svg",
  CHF: "https://flagcdn.com/ch.svg",
  CLP: "https://flagcdn.com/cl.svg",
  COP: "https://flagcdn.com/co.svg",
  CZK: "https://flagcdn.com/cz.svg",
  DKK: "https://flagcdn.com/dk.svg",
  GBP: "https://flagcdn.com/gb.svg",
  EUR: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
  GHS: "https://flagcdn.com/gh.svg",
  HKD: "https://flagcdn.com/hk.svg",
  HRK: "https://flagcdn.com/hr.svg",
  HUF: "https://flagcdn.com/hu.svg",
  IDR: "https://flagcdn.com/id.svg",
  ISK: "https://flagcdn.com/is.svg",
  JPY: "https://flagcdn.com/jp.svg",
  KES: "https://flagcdn.com/ke.svg",
  KZT: "https://flagcdn.com/kz.svg",
  MXN: "https://flagcdn.com/mx.svg",
  NGN: "https://flagcdn.com/ng.svg",
  NZD: "https://flagcdn.com/nz.svg",
  PEN: "https://flagcdn.com/pe.svg",
  PHP: "https://flagcdn.com/ph.svg",
  PLN: "https://flagcdn.com/pl.svg",
  RON: "https://flagcdn.com/ro.svg",
  SAR: "https://flagcdn.com/sa.svg",
  SEK: "https://flagcdn.com/se.svg",
  THB: "https://flagcdn.com/th.svg",
  TRY: "https://flagcdn.com/tr.svg",
  TWD: "https://flagcdn.com/tw.svg",
  UAH: "https://flagcdn.com/ua.svg",
  UGX: "https://flagcdn.com/ug.svg",
  USD: "https://flagcdn.com/us.svg",
  UYU: "https://flagcdn.com/uy.svg",
  VND: "https://flagcdn.com/vn.svg",
  ZAR: "https://flagcdn.com/za.svg",
};

export const FIAT = {
  AED: "https://flagcdn.com/ae.svg",
  AUD: "https://flagcdn.com/au.svg",
  AZN: "https://flagcdn.com/az.svg",
  BGN: "https://flagcdn.com/bg.svg",
  BRL: "https://flagcdn.com/br.svg",
  CAD: "https://flagcdn.com/ca.svg",
  CHF: "https://flagcdn.com/ch.svg",
  CLP: "https://flagcdn.com/cl.svg",
  COP: "https://flagcdn.com/co.svg",
  CZK: "https://flagcdn.com/cz.svg",
  DKK: "https://flagcdn.com/dk.svg",
  GBP: "https://flagcdn.com/gb.svg",
  EUR: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
  GHS: "https://flagcdn.com/gh.svg",
  HKD: "https://flagcdn.com/hk.svg",
  HRK: "https://flagcdn.com/hr.svg",
  HUF: "https://flagcdn.com/hu.svg",
  IDR: "https://flagcdn.com/id.svg",
  ISK: "https://flagcdn.com/is.svg",
  JPY: "https://flagcdn.com/jp.svg",
  KES: "https://flagcdn.com/ke.svg",
  KZT: "https://flagcdn.com/kz.svg",
  MXN: "https://flagcdn.com/mx.svg",
  NGN: "https://flagcdn.com/ng.svg",
  NZD: "https://flagcdn.com/nz.svg",
  PEN: "https://flagcdn.com/pe.svg",
  PHP: "https://flagcdn.com/ph.svg",
  PLN: "https://flagcdn.com/pl.svg",
  RON: "https://flagcdn.com/ro.svg",
  SAR: "https://flagcdn.com/sa.svg",
  SEK: "https://flagcdn.com/se.svg",
  THB: "https://flagcdn.com/th.svg",
  TRY: "https://flagcdn.com/tr.svg",
  TWD: "https://flagcdn.com/tw.svg",
  UAH: "https://flagcdn.com/ua.svg",
  UGX: "https://flagcdn.com/ug.svg",
  USD: "https://flagcdn.com/us.svg",
  UYU: "https://flagcdn.com/uy.svg",
  VND: "https://flagcdn.com/vn.svg",
  ZAR: "https://flagcdn.com/za.svg",
};
