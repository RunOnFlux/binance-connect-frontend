"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/price";
exports.ids = ["pages/api/price"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/price.js":
/*!****************************!*\
  !*** ./pages/api/price.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(req, res) {\n    // console.log(\"req\", req);\n    const data = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"https://api.coingecko.com/api/v3/coins/list\");\n    const cryptoObject = data.data.filter((item)=>item.symbol.toLowerCase() === req.body.crypto.toLowerCase());\n    const id = cryptoObject[0].id;\n    const coin = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.coingecko.com/api/v3/coins/${id}`);\n    const current_price = coin.data.market_data?.current_price[req.body.fiat.toLowerCase()];\n    res.status(200).json({\n        price: current_price\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkVBQTZFO0FBQ25EO0FBRVgsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QywyQkFBMkI7SUFDM0IsTUFBTUMsSUFBSSxHQUFHLE1BQU1KLGdEQUFTLENBQUMsNkNBQTZDLENBQUM7SUFFM0UsTUFBTU0sWUFBWSxHQUFHRixJQUFJLENBQUNBLElBQUksQ0FBQ0csTUFBTSxDQUNuQyxDQUFDQyxJQUFJLEdBQUtBLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxXQUFXLEVBQUUsS0FBS1IsR0FBRyxDQUFDUyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0YsV0FBVyxFQUFFLENBQ3RFO0lBRUQsTUFBTUcsRUFBRSxHQUFHUCxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUNPLEVBQUU7SUFFN0IsTUFBTUMsSUFBSSxHQUFHLE1BQU1kLGdEQUFTLENBQUMsQ0FBQyx1Q0FBdUMsRUFBRWEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUU1RSxNQUFNRSxhQUFhLEdBQ2pCRCxJQUFJLENBQUNWLElBQUksQ0FBQ1ksV0FBVyxFQUFFRCxhQUFhLENBQUNiLEdBQUcsQ0FBQ1MsSUFBSSxDQUFDTSxJQUFJLENBQUNQLFdBQVcsRUFBRSxDQUFDO0lBRW5FUCxHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVDLEtBQUssRUFBRUwsYUFBYTtLQUFFLENBQUMsQ0FBQztBQUNqRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmluYW5jZS1jb25uZWN0Ly4vcGFnZXMvYXBpL3ByaWNlLmpzPzJjY2MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAvLyBjb25zb2xlLmxvZyhcInJlcVwiLCByZXEpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9hcGkuY29pbmdlY2tvLmNvbS9hcGkvdjMvY29pbnMvbGlzdFwiKTtcblxuICBjb25zdCBjcnlwdG9PYmplY3QgPSBkYXRhLmRhdGEuZmlsdGVyKFxuICAgIChpdGVtKSA9PiBpdGVtLnN5bWJvbC50b0xvd2VyQ2FzZSgpID09PSByZXEuYm9keS5jcnlwdG8udG9Mb3dlckNhc2UoKVxuICApO1xuXG4gIGNvbnN0IGlkID0gY3J5cHRvT2JqZWN0WzBdLmlkO1xuXG4gIGNvbnN0IGNvaW4gPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLmNvaW5nZWNrby5jb20vYXBpL3YzL2NvaW5zLyR7aWR9YCk7XG5cbiAgY29uc3QgY3VycmVudF9wcmljZSA9XG4gICAgY29pbi5kYXRhLm1hcmtldF9kYXRhPy5jdXJyZW50X3ByaWNlW3JlcS5ib2R5LmZpYXQudG9Mb3dlckNhc2UoKV07XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBwcmljZTogY3VycmVudF9wcmljZSB9KTtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJkYXRhIiwiZ2V0IiwiY3J5cHRvT2JqZWN0IiwiZmlsdGVyIiwiaXRlbSIsInN5bWJvbCIsInRvTG93ZXJDYXNlIiwiYm9keSIsImNyeXB0byIsImlkIiwiY29pbiIsImN1cnJlbnRfcHJpY2UiLCJtYXJrZXRfZGF0YSIsImZpYXQiLCJzdGF0dXMiLCJqc29uIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/price.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/price.js"));
module.exports = __webpack_exports__;

})();