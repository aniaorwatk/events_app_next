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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst CatEvents = (param)=>{\n    let { data , pageName  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Events in \",\n                    pageName\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/eventsComponents/catEvents.jsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, undefined),\n            data.map((ev)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/events/\".concat(ev.city, \"/\").concat(ev.id),\n                        passHref: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: ev.image,\n                                alt: ev.title,\n                                width: 200,\n                                height: 200\n                            }, void 0, false, {\n                                fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/eventsComponents/catEvents.jsx\",\n                                lineNumber: 13,\n                                columnNumber: 33\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: ev.title\n                            }, void 0, false, {\n                                fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/eventsComponents/catEvents.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 33\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: ev.description\n                            }, void 0, false, {\n                                fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/eventsComponents/catEvents.jsx\",\n                                lineNumber: 20,\n                                columnNumber: 33\n                            }, undefined)\n                        ]\n                    }, ev.id, true, {\n                        fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/eventsComponents/catEvents.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/eventsComponents/catEvents.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 21\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/eventsComponents/catEvents.jsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\n_c = CatEvents;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CatEvents);\nvar _c;\n$RefreshReg$(_c, \"CatEvents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ldmVudHNDb21wb25lbnRzL2NhdEV2ZW50cy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUM7QUFDWjtBQUNFO0FBRS9CLE1BQU1HLFlBQVcsU0FBbUI7UUFBbEIsRUFBQ0MsS0FBSSxFQUFDQyxTQUFRLEVBQUM7SUFDN0IscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ0M7O29CQUFHO29CQUFXRjs7Ozs7OztZQUNkRCxLQUFLSSxHQUFHLENBQUNDLENBQUFBLEtBQU07Z0JBQ1oscUJBQ0ksOERBQUNIOzhCQUNHLDRFQUFDTCxrREFBSUE7d0JBQWFTLE1BQU0sV0FBc0JELE9BQVhBLEdBQUdFLElBQUksRUFBQyxLQUFTLE9BQU5GLEdBQUdHLEVBQUU7d0JBQUlDLFFBQVE7OzBDQUN2RCw4REFBQ1gsbURBQUtBO2dDQUNGWSxLQUFLTCxHQUFHTSxLQUFLO2dDQUNiQyxLQUFLUCxHQUFHUSxLQUFLO2dDQUNiQyxPQUFPO2dDQUNQQyxRQUFROzs7Ozs7MENBRVosOERBQUNDOzBDQUFJWCxHQUFHUSxLQUFLOzs7Ozs7MENBQ2IsOERBQUNJOzBDQUFHWixHQUFHYSxXQUFXOzs7Ozs7O3VCQVJmYixHQUFHRyxFQUFFOzs7Ozs7Ozs7O1lBWTVCOzs7Ozs7O0FBR1o7S0F0Qk1UO0FBd0JOLCtEQUFlQSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2V2ZW50c0NvbXBvbmVudHMvY2F0RXZlbnRzLmpzeD9mY2Q5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZSBmcm9tIFwiLi9ldmVudHMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5jb25zdCBDYXRFdmVudHMgPSh7ZGF0YSxwYWdlTmFtZX0pPT57XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5FdmVudHMgaW4ge3BhZ2VOYW1lfTwvaDE+XG4gICAgICAgICAgICB7ZGF0YS5tYXAoZXYgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2V2LmlkfSBocmVmPXtgL2V2ZW50cy8ke2V2LmNpdHl9LyR7ZXYuaWR9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtldi5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17ZXYudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57ZXYudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2V2LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2F0RXZlbnRzXG4iXSwibmFtZXMiOlsic3R5bGUiLCJMaW5rIiwiSW1hZ2UiLCJDYXRFdmVudHMiLCJkYXRhIiwicGFnZU5hbWUiLCJkaXYiLCJoMSIsIm1hcCIsImV2IiwiaHJlZiIsImNpdHkiLCJpZCIsInBhc3NIcmVmIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwiaDIiLCJwIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/eventsComponents/catEvents.jsx\n"));

/***/ }),

/***/ "./src/pages/events/[cat]/index.js":
/*!*****************************************!*\
  !*** ./src/pages/events/[cat]/index.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"getstaticPaths\": function() { return /* binding */ getstaticPaths; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_eventsComponents_catEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/eventsComponents/catEvents */ \"./src/components/eventsComponents/catEvents.jsx\");\n\n\nconst EventsCatPage = (param)=>{\n    let { data , pageName  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_eventsComponents_catEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        data: data,\n        pageName: pageName\n    }, void 0, false, {\n        fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/pages/events/[cat]/index.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, undefined);\n};\n_c = EventsCatPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventsCatPage);\nasync function getstaticPaths() {\n    const { events_categories  } = await __webpack_require__.e(/*! import() */ \"data_data_json\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./../../../../data/data.json */ \"./data/data.json\", 19));\n    const allPaths = events_categories.map((ev)=>{\n        return {\n            params: {\n                cat: ev.id.toString()\n            }\n        };\n    });\n    return {\n        paths: allPaths,\n        fallback: false\n    };\n}\nvar _c;\n$RefreshReg$(_c, \"EventsCatPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZXZlbnRzL1tjYXRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnRTtBQUVoRSxNQUFNQyxnQkFBZ0IsU0FBd0I7UUFBdkIsRUFBRUMsS0FBSSxFQUFFQyxTQUFRLEVBQUU7SUFDckMscUJBQ0ksOERBQUNILDhFQUFTQTtRQUNORSxNQUFNQTtRQUNOQyxVQUFVQTs7Ozs7O0FBR3RCO0tBUE1GOztBQVNOLCtEQUFlQSxhQUFhQSxFQUFBO0FBRXJCLGVBQWVHLGlCQUFpQjtJQUNuQyxNQUFNLEVBQUVDLGtCQUFpQixFQUFFLEdBQUcsTUFBTSx5S0FBTztJQUMzQyxNQUFNQyxXQUFXRCxrQkFBa0JFLEdBQUcsQ0FBQ0MsQ0FBQUEsS0FBTTtRQUN6QyxPQUFPO1lBQ0hDLFFBQVE7Z0JBQ0pDLEtBQUtGLEdBQUdHLEVBQUUsQ0FBQ0MsUUFBUTtZQUN2QjtRQUNKO0lBQ0o7SUFDQSxPQUFPO1FBQ0hDLE9BQU9QO1FBQ1BRLFVBQVUsS0FBSztJQUNuQjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2V2ZW50cy9bY2F0XS9pbmRleC5qcz9kOWVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXRFdmVudHMgZnJvbSAnQC9jb21wb25lbnRzL2V2ZW50c0NvbXBvbmVudHMvY2F0RXZlbnRzJztcblxuY29uc3QgRXZlbnRzQ2F0UGFnZSA9ICh7IGRhdGEsIHBhZ2VOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2F0RXZlbnRzXG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgcGFnZU5hbWU9e3BhZ2VOYW1lfVxuICAgICAgICAvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzQ2F0UGFnZVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0c3RhdGljUGF0aHMoKSB7XG4gICAgY29uc3QgeyBldmVudHNfY2F0ZWdvcmllcyB9ID0gYXdhaXQgaW1wb3J0KCcuLy4uLy4uLy4uLy4uL2RhdGEvZGF0YS5qc29uJyk7XG4gICAgY29uc3QgYWxsUGF0aHMgPSBldmVudHNfY2F0ZWdvcmllcy5tYXAoZXYgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgY2F0OiBldi5pZC50b1N0cmluZygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzOiBhbGxQYXRocyxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcblxuICAgIGNvbnN0IGlkID0gY29udGV4dD8ucGFyYW1zLmNhdDtcbiAgICBjb25zdCB7IGFsbEV2ZW50cyB9ID0gYXdhaXQgaW1wb3J0KCcuLy4uLy4uLy4uLy4uL2RhdGEvZGF0YS5qc29uJyk7XG5cbiAgICBjb25zdCBkYXRhID0gYWxsRXZlbnRzLmZpbHRlcihldiA9PiBldi5jaXR5ID09PSBpZClcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOlxuICAgICAgICAgICAgeyBkYXRhLCBwYWdlTmFtZTogaWQgfVxuXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkNhdEV2ZW50cyIsIkV2ZW50c0NhdFBhZ2UiLCJkYXRhIiwicGFnZU5hbWUiLCJnZXRzdGF0aWNQYXRocyIsImV2ZW50c19jYXRlZ29yaWVzIiwiYWxsUGF0aHMiLCJtYXAiLCJldiIsInBhcmFtcyIsImNhdCIsImlkIiwidG9TdHJpbmciLCJwYXRocyIsImZhbGxiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/events/[cat]/index.js\n"));

/***/ })

});