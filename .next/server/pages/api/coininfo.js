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
exports.id = "pages/api/coininfo";
exports.ids = ["pages/api/coininfo"];
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

/***/ "(api)/./pages/api/coininfo.js":
/*!*******************************!*\
  !*** ./pages/api/coininfo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nvar qs = __webpack_require__(/*! qs */ \"qs\");\nasync function handler(req, res) {\n    // console.log(\"req\", req);\n    var data = qs.stringify({\n        ip: req.body.ip\n    });\n    var config = {\n        method: \"post\",\n        url: \"https://fluxnodeservice.com/api/binance/get_coin_info\",\n        headers: {\n            \"Content-Type\": \"application/x-www-form-urlencoded\"\n        },\n        data: data\n    };\n    const fiat = await axios__WEBPACK_IMPORTED_MODULE_0___default()(config);\n    if (fiat.data.success === \"true\") {\n        res.status(200).json({\n            coininfo: fiat.data.data\n        });\n    } else if (fiat.data.success === \"false\") {\n        res.status(400).json({\n            msg: fiat.data.data.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29pbmluZm8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkVBQTZFO0FBQ25EO0FBQzFCLElBQUlDLEVBQUUsR0FBR0MsbUJBQU8sQ0FBQyxjQUFJLENBQUM7QUFFUCxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLDJCQUEyQjtJQUMzQixJQUFJQyxJQUFJLEdBQUdMLEVBQUUsQ0FBQ00sU0FBUyxDQUFDO1FBQ3RCQyxFQUFFLEVBQUVKLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDRCxFQUFFO0tBQ2hCLENBQUM7SUFFRixJQUFJRSxNQUFNLEdBQUc7UUFDWEMsTUFBTSxFQUFFLE1BQU07UUFDZEMsR0FBRyxFQUFFLHVEQUF1RDtRQUM1REMsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLG1DQUFtQztTQUNwRDtRQUNEUCxJQUFJLEVBQUVBLElBQUk7S0FDWDtJQUVELE1BQU1RLElBQUksR0FBRyxNQUFNZCw0Q0FBSyxDQUFDVSxNQUFNLENBQUM7SUFFaEMsSUFBSUksSUFBSSxDQUFDUixJQUFJLENBQUNTLE9BQU8sS0FBSyxNQUFNLEVBQUU7UUFDaENWLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsUUFBUSxFQUFFSixJQUFJLENBQUNSLElBQUksQ0FBQ0EsSUFBSTtTQUFFLENBQUMsQ0FBQztJQUNyRCxPQUFPLElBQUlRLElBQUksQ0FBQ1IsSUFBSSxDQUFDUyxPQUFPLEtBQUssT0FBTyxFQUFFO1FBQ3hDVixHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVFLEdBQUcsRUFBRUwsSUFBSSxDQUFDUixJQUFJLENBQUNBLElBQUksQ0FBQ2MsT0FBTztTQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpbmFuY2UtY29ubmVjdC8uL3BhZ2VzL2FwaS9jb2luaW5mby5qcz9lNDVjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG52YXIgcXMgPSByZXF1aXJlKFwicXNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgLy8gY29uc29sZS5sb2coXCJyZXFcIiwgcmVxKTtcbiAgdmFyIGRhdGEgPSBxcy5zdHJpbmdpZnkoe1xuICAgIGlwOiByZXEuYm9keS5pcCxcbiAgfSk7XG5cbiAgdmFyIGNvbmZpZyA9IHtcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgIHVybDogXCJodHRwczovL2ZsdXhub2Rlc2VydmljZS5jb20vYXBpL2JpbmFuY2UvZ2V0X2NvaW5faW5mb1wiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgfSxcbiAgICBkYXRhOiBkYXRhLFxuICB9O1xuXG4gIGNvbnN0IGZpYXQgPSBhd2FpdCBheGlvcyhjb25maWcpO1xuXG4gIGlmIChmaWF0LmRhdGEuc3VjY2VzcyA9PT0gXCJ0cnVlXCIpIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGNvaW5pbmZvOiBmaWF0LmRhdGEuZGF0YSB9KTtcbiAgfSBlbHNlIGlmIChmaWF0LmRhdGEuc3VjY2VzcyA9PT0gXCJmYWxzZVwiKSB7XG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtc2c6IGZpYXQuZGF0YS5kYXRhLm1lc3NhZ2UgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsInFzIiwicmVxdWlyZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJkYXRhIiwic3RyaW5naWZ5IiwiaXAiLCJib2R5IiwiY29uZmlnIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsImZpYXQiLCJzdWNjZXNzIiwic3RhdHVzIiwianNvbiIsImNvaW5pbmZvIiwibXNnIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/coininfo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/coininfo.js"));
module.exports = __webpack_exports__;

})();