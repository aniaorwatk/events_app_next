"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/home/home-page.jsx":
/*!*******************************************!*\
  !*** ./src/components/home/home-page.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HomePage\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_page_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page.module.scss */ \"./src/components/home/home-page.module.scss\");\n/* harmony import */ var _home_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_page_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst HomePage = (param)=>{\n    let { data  } = param;\n    const city = data.map((ev)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            className: (_home_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default().card),\n            href: \"/events/\".concat(ev.id),\n            passHref: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_home_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default().image),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        priority: true,\n                        src: ev.image,\n                        alt: ev.title,\n                        width: 300,\n                        height: 200\n                    }, void 0, false, {\n                        fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/home/home-page.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/home/home-page.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_home_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: ev.title\n                        }, void 0, false, {\n                            fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/home/home-page.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: ev.description\n                        }, void 0, false, {\n                            fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/home/home-page.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/home/home-page.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, ev.id, true, {\n            fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/home/home-page.jsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_home_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default().homePage),\n        children: city\n    }, void 0, false, {\n        fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/home/home-page.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL2hvbWUtcGFnZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNFO0FBQ2E7QUFFckMsTUFBTUcsV0FBVyxTQUFjO1FBQWIsRUFBRUMsS0FBSSxFQUFFO0lBRS9CLE1BQU1DLE9BQU9ELEtBQUtFLEdBQUcsQ0FBQ0MsQ0FBQUEsS0FBTTtRQUMxQixxQkFDRSw4REFBQ1Asa0RBQUlBO1lBQUNRLFdBQVdOLG9FQUFVO1lBQWNRLE1BQU0sV0FBaUIsT0FBTkgsR0FBR0ksRUFBRTtZQUFJQyxRQUFROzs4QkFDekUsOERBQUNDO29CQUFJTCxXQUFXTixxRUFBVzs4QkFDekIsNEVBQUNELG1EQUFLQTt3QkFDSmMsUUFBUTt3QkFDUkMsS0FBS1QsR0FBR08sS0FBSzt3QkFDYkcsS0FBS1YsR0FBR1csS0FBSzt3QkFDYkMsT0FBTzt3QkFDUEMsUUFBUTs7Ozs7Ozs7Ozs7OEJBR1osOERBQUNQO29CQUFJTCxXQUFXTix1RUFBYTs7c0NBQzNCLDhEQUFDb0I7c0NBQUlmLEdBQUdXLEtBQUs7Ozs7OztzQ0FDYiw4REFBQ0s7c0NBQUdoQixHQUFHaUIsV0FBVzs7Ozs7Ozs7Ozs7OztXQVpZakIsR0FBR0ksRUFBRTs7Ozs7SUFnQjNDO0lBQ0EscUJBQ0UsOERBQUNFO1FBQUlMLFdBQVdOLHdFQUFjO2tCQUMzQkc7Ozs7OztBQUdQLEVBQUM7S0ExQllGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hvbWUvaG9tZS1wYWdlLmpzeD8yMDkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuL2hvbWUtcGFnZS5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgY29uc3QgSG9tZVBhZ2UgPSAoeyBkYXRhIH0pID0+IHtcblxuICBjb25zdCBjaXR5ID0gZGF0YS5tYXAoZXYgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlLmNhcmR9IGtleT17ZXYuaWR9IGhyZWY9e2AvZXZlbnRzLyR7ZXYuaWR9YH0gcGFzc0hyZWY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbWFnZX0+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgc3JjPXtldi5pbWFnZX1cbiAgICAgICAgICAgIGFsdD17ZXYudGl0bGV9XG4gICAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250ZW50fT5cbiAgICAgICAgICA8aDI+e2V2LnRpdGxlfTwvaDI+XG4gICAgICAgICAgPHA+e2V2LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgKVxuICB9KVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ob21lUGFnZX0+XG4gICAgICB7Y2l0eX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsInN0eWxlIiwiSG9tZVBhZ2UiLCJkYXRhIiwiY2l0eSIsIm1hcCIsImV2IiwiY2xhc3NOYW1lIiwiY2FyZCIsImhyZWYiLCJpZCIsInBhc3NIcmVmIiwiZGl2IiwiaW1hZ2UiLCJwcmlvcml0eSIsInNyYyIsImFsdCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJjb250ZW50IiwiaDIiLCJwIiwiZGVzY3JpcHRpb24iLCJob21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/home/home-page.jsx\n"));

/***/ })

});