"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events/[cat]",{

/***/ "./src/components/eventsComponents/catEvents.jsx":
/*!*******************************************************!*\
  !*** ./src/components/eventsComponents/catEvents.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _events_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.module.scss */ \"./src/components/eventsComponents/events.module.scss\");\n/* harmony import */ var _events_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_events_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst CatEvents = (param)=>{\n    let { data , pageName  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_events_module_scss__WEBPACK_IMPORTED_MODULE_3___default().catEvents),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Events in \",\n                    pageName\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/eventsComponents/catEvents.jsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_events_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),\n                children: data.map((ev)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: (_events_module_scss__WEBPACK_IMPORTED_MODULE_3___default().card),\n                        href: \"/events/\".concat(ev.city, \"/\").concat(ev.id),\n                        passHref: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: ev.image,\n                                alt: ev.title,\n                                width: 300,\n                                height: 300\n                            }, void 0, false, {\n                                fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/eventsComponents/catEvents.jsx\",\n                                lineNumber: 14,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: ev.title\n                            }, void 0, false, {\n                                fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/eventsComponents/catEvents.jsx\",\n                                lineNumber: 20,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: ev.description\n                            }, void 0, false, {\n                                fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/eventsComponents/catEvents.jsx\",\n                                lineNumber: 21,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, ev.id, true, {\n                        fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/eventsComponents/catEvents.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 25\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/eventsComponents/catEvents.jsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/eventsComponents/catEvents.jsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\n_c = CatEvents;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CatEvents);\nvar _c;\n$RefreshReg$(_c, \"CatEvents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ldmVudHNDb21wb25lbnRzL2NhdEV2ZW50cy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QztBQUNaO0FBQ0U7QUFFL0IsTUFBTUcsWUFBWSxTQUF3QjtRQUF2QixFQUFFQyxLQUFJLEVBQUVDLFNBQVEsRUFBRTtJQUNqQyxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBV1Asc0VBQWU7OzBCQUMzQiw4REFBQ1M7O29CQUFHO29CQUFXSjs7Ozs7OzswQkFDZiw4REFBQ0M7Z0JBQUlDLFdBQVdQLG9FQUFhOzBCQUN4QkksS0FBS08sR0FBRyxDQUFDQyxDQUFBQSxLQUFNO29CQUNaLHFCQUVJLDhEQUFDWCxrREFBSUE7d0JBQUNNLFdBQVdQLGlFQUFVO3dCQUFjYyxNQUFNLFdBQXNCRixPQUFYQSxHQUFHRyxJQUFJLEVBQUMsS0FBUyxPQUFOSCxHQUFHSSxFQUFFO3dCQUFJQyxRQUFROzswQ0FDbEYsOERBQUNmLG1EQUFLQTtnQ0FDRmdCLEtBQUtOLEdBQUdPLEtBQUs7Z0NBQ2JDLEtBQUtSLEdBQUdTLEtBQUs7Z0NBQ2JDLE9BQU87Z0NBQ1BDLFFBQVE7Ozs7OzswQ0FFWiw4REFBQ2Q7MENBQUlHLEdBQUdTLEtBQUs7Ozs7OzswQ0FDYiw4REFBQ0c7MENBQUdaLEdBQUdhLFdBQVc7Ozs7Ozs7dUJBUlliLEdBQUdJLEVBQUU7Ozs7O2dCQVcvQzs7Ozs7Ozs7Ozs7O0FBSWhCO0tBdkJNYjtBQXlCTiwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ldmVudHNDb21wb25lbnRzL2NhdEV2ZW50cy5qc3g/ZmNkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGUgZnJvbSBcIi4vZXZlbnRzLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuY29uc3QgQ2F0RXZlbnRzID0gKHsgZGF0YSwgcGFnZU5hbWUgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXRFdmVudHN9PlxuICAgICAgICAgICAgPGgyPkV2ZW50cyBpbiB7cGFnZU5hbWV9PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250ZW50fT5cbiAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoZXYgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlLmNhcmR9IGtleT17ZXYuaWR9IGhyZWY9e2AvZXZlbnRzLyR7ZXYuY2l0eX0vJHtldi5pZH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtldi5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtldi50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2V2LnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2V2LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2F0RXZlbnRzXG4iXSwibmFtZXMiOlsic3R5bGUiLCJMaW5rIiwiSW1hZ2UiLCJDYXRFdmVudHMiLCJkYXRhIiwicGFnZU5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXRFdmVudHMiLCJoMiIsImNvbnRlbnQiLCJtYXAiLCJldiIsImNhcmQiLCJocmVmIiwiY2l0eSIsImlkIiwicGFzc0hyZWYiLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJwIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/eventsComponents/catEvents.jsx\n"));

/***/ })

});