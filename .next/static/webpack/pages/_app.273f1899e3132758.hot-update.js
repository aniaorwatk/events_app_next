"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/assets/logo.jsx":
/*!*****************************!*\
  !*** ./src/assets/logo.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Logo\": function() { return /* reexport safe */ _assets_logo_svg__WEBPACK_IMPORTED_MODULE_0__.ReactComponent; }\n/* harmony export */ });\n/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/logo.svg */ \"./src/assets/logo.svg\");\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2xvZ28uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvbG9nby5qc3g/ZDU1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge1JlYWN0Q29tcG9uZW50IGFzIExvZ299IGZyb20gXCIuLy4uL2Fzc2V0cy9sb2dvLnN2Z1wiO1xuIl0sIm5hbWVzIjpbIlJlYWN0Q29tcG9uZW50IiwiTG9nbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/logo.jsx\n"));

/***/ }),

/***/ "./src/components/header/header.jsx":
/*!******************************************!*\
  !*** ./src/components/header/header.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.module.scss */ \"./src/components/header/header.module.scss\");\n/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../assets/logo.svg */ \"./src/assets/logo.svg\");\n/* harmony import */ var _assets_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../assets/logo */ \"./src/assets/logo.jsx\");\n\n\n\n\n\n\nconst Header = ()=>{\n    const header = {\n        title: \"If you have nothing to do, check out what's going on in the city\",\n        home: \"Home\",\n        events: \"Events\",\n        aboutUs: \"About Us\",\n        altImage: \"Page's Logo\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().topNav),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/header/header.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 1\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"\",\n                        width: 50,\n                        height: 50,\n                        alt: header.altImage,\n                        className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().logo)\n                    }, void 0, false, {\n                        fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/header/header.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        passHref: true,\n                                        href: \"/\",\n                                        children: header.home\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/header/header.jsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/header/header.jsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        passHref: true,\n                                        href: \"/events\",\n                                        children: header.events\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/header/header.jsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/header/header.jsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        passHref: true,\n                                        href: \"/about-us\",\n                                        children: header.aboutUs\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/header/header.jsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/header/header.jsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/header/header.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/header/header.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/header/header.jsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: header.title\n            }, void 0, false, {\n                fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/header/header.jsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/header/header.jsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDWTtBQUNWO0FBQ1k7QUFDTDtBQUMvQixNQUFNSyxTQUFTLElBQU07SUFFeEIsTUFBTUMsU0FBUztRQUNYQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxTQUFTO1FBQ1RDLFVBQVc7SUFDZjtJQUNBLHFCQUNJLDhEQUFDTDtRQUFPTSxXQUFXWCxtRUFBWTs7MEJBQzNCLDhEQUFDWTtnQkFBSUQsV0FBV1gsbUVBQVk7O2tDQUN4Qyw4REFBQ0csb0RBQUlBOzs7OztrQ0FDVyw4REFBQ0YsbURBQUtBO3dCQUFDYSxLQUFLO3dCQUFJQyxPQUFPO3dCQUFJQyxRQUFRO3dCQUFJQyxLQUFLWixPQUFPSyxRQUFRO3dCQUFFQyxXQUFXWCxpRUFBVTs7Ozs7O2tDQUNsRiw4REFBQ2tCO2tDQUNHLDRFQUFDQzs7OENBQ0csOERBQUNDOzhDQUNHLDRFQUFDckIsa0RBQUlBO3dDQUFDc0IsUUFBUTt3Q0FBQ0MsTUFBSztrREFDZmpCLE9BQU9FLElBQUk7Ozs7Ozs7Ozs7OzhDQUdwQiw4REFBQ2E7OENBQ0csNEVBQUNyQixrREFBSUE7d0NBQUNzQixRQUFRO3dDQUFDQyxNQUFLO2tEQUNmakIsT0FBT0csTUFBTTs7Ozs7Ozs7Ozs7OENBR3RCLDhEQUFDWTs4Q0FDRyw0RUFBQ3JCLGtEQUFJQTt3Q0FBQ3NCLFFBQVE7d0NBQUNDLE1BQUs7a0RBQ2ZqQixPQUFPSSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1uQyw4REFBQ2M7MEJBQ0lsQixPQUFPQyxLQUFLOzs7Ozs7Ozs7Ozs7QUFJN0IsRUFBQztLQXZDWUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qc3g/MzAyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vaGVhZGVyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuLy4uLy4uL2Fzc2V0cy9sb2dvLnN2Z1wiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4vLi4vLi4vYXNzZXRzL2xvZ29cIlxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcblxuICAgIGNvbnN0IGhlYWRlciA9IHtcbiAgICAgICAgdGl0bGU6IFwiSWYgeW91IGhhdmUgbm90aGluZyB0byBkbywgY2hlY2sgb3V0IHdoYXQncyBnb2luZyBvbiBpbiB0aGUgY2l0eVwiLFxuICAgICAgICBob21lOiBcIkhvbWVcIixcbiAgICAgICAgZXZlbnRzOiBcIkV2ZW50c1wiLFxuICAgICAgICBhYm91dFVzOiBcIkFib3V0IFVzXCIsXG4gICAgICAgIGFsdEltYWdlOiBgUGFnZSdzIExvZ29gXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZS5oZWFkZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRvcE5hdn0+XG48TG9nby8+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17XCJcIn0gd2lkdGg9ezUwfSBoZWlnaHQ9ezUwfSBhbHQ9e2hlYWRlci5hbHRJbWFnZX0gY2xhc3NOYW1lPXtzdHlsZS5sb2dvfSAvPlxuICAgICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBwYXNzSHJlZiBocmVmPScvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlci5ob21lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcGFzc0hyZWYgaHJlZj0nL2V2ZW50cyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXIuZXZlbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcGFzc0hyZWYgaHJlZj0nL2Fib3V0LXVzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlci5hYm91dFVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICB7aGVhZGVyLnRpdGxlfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJMaW5rIiwic3R5bGUiLCJJbWFnZSIsImxvZ28iLCJMb2dvIiwiSGVhZGVyIiwiaGVhZGVyIiwidGl0bGUiLCJob21lIiwiZXZlbnRzIiwiYWJvdXRVcyIsImFsdEltYWdlIiwiY2xhc3NOYW1lIiwiZGl2IiwidG9wTmF2Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJuYXYiLCJ1bCIsImxpIiwicGFzc0hyZWYiLCJocmVmIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/header/header.jsx\n"));

/***/ })

});