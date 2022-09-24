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
exports.id = "pages/api/coinbyfiat";
exports.ids = ["pages/api/coinbyfiat"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("qs");

/***/ }),

/***/ "(api)/./pages/api/coinbyfiat.js":
/*!*********************************!*\
  !*** ./pages/api/coinbyfiat.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nvar qs = __webpack_require__(/*! qs */ \"qs\");\nasync function handler(req, res) {\n    // console.log(\"req\", req);\n    var data = qs.stringify({\n        ip: req.body.ip\n    });\n    var config = {\n        method: \"post\",\n        url: `https://fluxnodeservice.com/api/binance/get_coin_info/fiat/${req.body.asset}`,\n        headers: {\n            \"Content-Type\": \"application/x-www-form-urlencoded\"\n        },\n        data: data\n    };\n    const coin = await axios__WEBPACK_IMPORTED_MODULE_0___default()(config);\n    if (coin.data.success === \"true\") {\n        res.status(200).json({\n            coinList: coin.data.data\n        });\n    } else if (coin.data.success === \"false\") {\n        res.status(400).json({\n            msg: \"an error occurred\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29pbmJ5ZmlhdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw2RUFBNkU7QUFDbkQ7QUFDMUIsSUFBSUMsRUFBRSxHQUFHQyxtQkFBTyxDQUFDLGNBQUksQ0FBQztBQUVQLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsMkJBQTJCO0lBQzNCLElBQUlDLElBQUksR0FBR0wsRUFBRSxDQUFDTSxTQUFTLENBQUM7UUFDdEJDLEVBQUUsRUFBRUosR0FBRyxDQUFDSyxJQUFJLENBQUNELEVBQUU7S0FDaEIsQ0FBQztJQUVGLElBQUlFLE1BQU0sR0FBRztRQUNYQyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxHQUFHLEVBQUUsQ0FBQywyREFBMkQsRUFBRVIsR0FBRyxDQUFDSyxJQUFJLENBQUNJLEtBQUssQ0FBQyxDQUFDO1FBQ25GQyxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsbUNBQW1DO1NBQ3BEO1FBQ0RSLElBQUksRUFBRUEsSUFBSTtLQUNYO0lBRUQsTUFBTVMsSUFBSSxHQUFHLE1BQU1mLDRDQUFLLENBQUNVLE1BQU0sQ0FBQztJQUVoQyxJQUFJSyxJQUFJLENBQUNULElBQUksQ0FBQ1UsT0FBTyxLQUFLLE1BQU0sRUFBRTtRQUNoQ1gsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxRQUFRLEVBQUVKLElBQUksQ0FBQ1QsSUFBSSxDQUFDQSxJQUFJO1NBQUUsQ0FBQyxDQUFDO0lBQ3JELE9BQU8sSUFBSVMsSUFBSSxDQUFDVCxJQUFJLENBQUNVLE9BQU8sS0FBSyxPQUFPLEVBQUU7UUFDeENYLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUUsR0FBRyxFQUFFLG1CQUFtQjtTQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpbmFuY2UtY29ubmVjdC8uL3BhZ2VzL2FwaS9jb2luYnlmaWF0LmpzPzJiZmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbnZhciBxcyA9IHJlcXVpcmUoXCJxc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAvLyBjb25zb2xlLmxvZyhcInJlcVwiLCByZXEpO1xuICB2YXIgZGF0YSA9IHFzLnN0cmluZ2lmeSh7XG4gICAgaXA6IHJlcS5ib2R5LmlwLFxuICB9KTtcblxuICB2YXIgY29uZmlnID0ge1xuICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgdXJsOiBgaHR0cHM6Ly9mbHV4bm9kZXNlcnZpY2UuY29tL2FwaS9iaW5hbmNlL2dldF9jb2luX2luZm8vZmlhdC8ke3JlcS5ib2R5LmFzc2V0fWAsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICB9LFxuICAgIGRhdGE6IGRhdGEsXG4gIH07XG5cbiAgY29uc3QgY29pbiA9IGF3YWl0IGF4aW9zKGNvbmZpZyk7XG5cbiAgaWYgKGNvaW4uZGF0YS5zdWNjZXNzID09PSBcInRydWVcIikge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgY29pbkxpc3Q6IGNvaW4uZGF0YS5kYXRhIH0pO1xuICB9IGVsc2UgaWYgKGNvaW4uZGF0YS5zdWNjZXNzID09PSBcImZhbHNlXCIpIHtcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1zZzogXCJhbiBlcnJvciBvY2N1cnJlZFwiIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJxcyIsInJlcXVpcmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGF0YSIsInN0cmluZ2lmeSIsImlwIiwiYm9keSIsImNvbmZpZyIsIm1ldGhvZCIsInVybCIsImFzc2V0IiwiaGVhZGVycyIsImNvaW4iLCJzdWNjZXNzIiwic3RhdHVzIiwianNvbiIsImNvaW5MaXN0IiwibXNnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/coinbyfiat.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/coinbyfiat.js"));
module.exports = __webpack_exports__;

})();