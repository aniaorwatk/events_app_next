"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events/[cat]/[id]",{

/***/ "./src/components/eventsComponents/idEvents.jsx":
/*!******************************************************!*\
  !*** ./src/components/eventsComponents/idEvents.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _events_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events.module.scss */ \"./src/components/eventsComponents/events.module.scss\");\n/* harmony import */ var _events_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_events_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst IdEvents = (param)=>{\n    let { data  } = param;\n    _s();\n    const inputEmail = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const onSubmit = async (e)=>{\n        e.preventDefault();\n        const emailValue = inputEmail.current.value;\n        const eventId = router === null || router === void 0 ? void 0 : router.query.id;\n        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/;\n        if (!emailValue.match(validRegex)) {\n            setMessage(\"Email address is invalid, please enter a valid one.\");\n        }\n        try {\n            const response = await fetch(\"/api/email-registration\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email: emailValue,\n                    eventId\n                })\n            });\n            if (!response.ok) throw new Error(\"Error: \".concat(response.starus));\n            const data = await response.json();\n            setMessage(data.message);\n            inputEmail.current.value = \"\";\n        } catch (e) {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_events_module_scss__WEBPACK_IMPORTED_MODULE_4___default().idEvents),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: data.title\n            }, void 0, false, {\n                fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/eventsComponents/idEvents.jsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                priority: true,\n                src: data.image,\n                alt: data.title,\n                width: 300,\n                height: 350,\n                style: {\n                    minWidth: \"60%\",\n                    height: \"auto\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/eventsComponents/idEvents.jsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: data.description\n            }, void 0, false, {\n                fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/eventsComponents/idEvents.jsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: onSubmit,\n                className: (_events_module_scss__WEBPACK_IMPORTED_MODULE_4___default().email_registration),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Get Register for this event\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/eventsComponents/idEvents.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ref: inputEmail,\n                        className: (_events_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input),\n                        id: \"email\",\n                        type: \"text\",\n                        placeholder: \"Please insert your email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/eventsComponents/idEvents.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/eventsComponents/idEvents.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/eventsComponents/idEvents.jsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_events_module_scss__WEBPACK_IMPORTED_MODULE_4___default().errorMessage),\n                children: message\n            }, void 0, false, {\n                fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/eventsComponents/idEvents.jsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/components/eventsComponents/idEvents.jsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n};\n_s(IdEvents, \"lrCtZUtn5LCPIByKCmpL+Ih3gqc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = IdEvents;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IdEvents);\nvar _c;\n$RefreshReg$(_c, \"IdEvents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ldmVudHNDb21wb25lbnRzL2lkRXZlbnRzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0g7QUFDUDtBQUNVO0FBRXpDLE1BQU1LLFdBQVcsU0FBYztRQUFiLEVBQUVDLEtBQUksRUFBRTs7SUFDdEIsTUFBTUMsYUFBYVAsNkNBQU1BO0lBQ3pCLE1BQU1RLFNBQVNOLHNEQUFTQTtJQUN4QixNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBQ1QsK0NBQVFBLENBQUM7SUFFckMsTUFBTVUsV0FBVyxPQUFPQyxJQUFNO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLGFBQWFQLFdBQVdRLE9BQU8sQ0FBQ0MsS0FBSztRQUMzQyxNQUFNQyxVQUFVVCxtQkFBQUEsb0JBQUFBLEtBQUFBLElBQUFBLE9BQVFVLEtBQUssQ0FBQ0MsRUFBRTtRQUNoQyxNQUFNQyxhQUFhO1FBQzNCLElBQUcsQ0FBQ04sV0FBV08sS0FBSyxDQUFDRCxhQUFZO1lBQzdCVixXQUFXO1FBQ2YsQ0FBQztRQUNPLElBQUk7WUFDQSxNQUFNWSxXQUFXLE1BQU1DLE1BQU0sMkJBQTJCO2dCQUNwREMsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxnQkFBZ0I7Z0JBQ3BCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVDLE9BQU9mO29CQUFZRztnQkFBUTtZQUN0RDtZQUNBLElBQUksQ0FBQ0ssU0FBU1EsRUFBRSxFQUFFLE1BQU0sSUFBSUMsTUFBTSxVQUEwQixPQUFoQlQsU0FBU1UsTUFBTSxHQUFHO1lBQzlELE1BQU0xQixPQUFPLE1BQU1nQixTQUFTVyxJQUFJO1lBQ2hDdkIsV0FBV0osS0FBS0csT0FBTztZQUN2QkYsV0FBV1EsT0FBTyxDQUFDQyxLQUFLLEdBQUc7UUFDL0IsRUFBRSxPQUFPSixHQUFHLENBQ1o7SUFDSjtJQUVBLHFCQUNJLDhEQUFDc0I7UUFBSUMsV0FBVy9CLHFFQUFjOzswQkFDMUIsOERBQUNpQzswQkFBSS9CLEtBQUtnQyxLQUFLOzs7Ozs7MEJBQ2YsOERBQUNuQyxtREFBS0E7Z0JBQ0ZvQyxRQUFRO2dCQUNSQyxLQUFLbEMsS0FBS21DLEtBQUs7Z0JBQ2ZDLEtBQUtwQyxLQUFLZ0MsS0FBSztnQkFDZkssT0FBTztnQkFDUEMsUUFBUTtnQkFDUnhDLE9BQU87b0JBQ0h5QyxVQUFVO29CQUNWRCxRQUFRO2dCQUNWOzs7Ozs7MEJBRU4sOERBQUNFOzBCQUFHeEMsS0FBS3lDLFdBQVc7Ozs7OzswQkFDcEIsOERBQUNDO2dCQUFLckMsVUFBVUE7Z0JBQVV3QixXQUFXL0IsK0VBQXdCOztrQ0FDekQsOERBQUM4QztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBTUMsS0FBSzdDO3dCQUFZNEIsV0FBVy9CLGtFQUFXO3dCQUFFZSxJQUFHO3dCQUFRa0MsTUFBSzt3QkFBT0MsYUFBWTs7Ozs7O2tDQUNuRiw4REFBQ0M7d0JBQU9GLE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7OzswQkFFMUIsOERBQUNQO2dCQUFFWCxXQUFXL0IseUVBQWtCOzBCQUFHSzs7Ozs7Ozs7Ozs7O0FBRy9DO0dBcERNSjs7UUFFYUgsa0RBQVNBOzs7S0FGdEJHO0FBc0ROLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2V2ZW50c0NvbXBvbmVudHMvaWRFdmVudHMuanN4PzJhNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vZXZlbnRzLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IElkRXZlbnRzID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgY29uc3QgaW5wdXRFbWFpbCA9IHVzZVJlZigpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV09dXNlU3RhdGUoXCJcIilcblxuICAgIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBlbWFpbFZhbHVlID0gaW5wdXRFbWFpbC5jdXJyZW50LnZhbHVlO1xuICAgICAgICBjb25zdCBldmVudElkID0gcm91dGVyPy5xdWVyeS5pZDtcbiAgICAgICAgY29uc3QgdmFsaWRSZWdleCA9IC9eW2EtekEtWjAtOS4hIyQlJicqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvO1xuaWYoIWVtYWlsVmFsdWUubWF0Y2godmFsaWRSZWdleCkpe1xuICAgIHNldE1lc3NhZ2UoJ0VtYWlsIGFkZHJlc3MgaXMgaW52YWxpZCwgcGxlYXNlIGVudGVyIGEgdmFsaWQgb25lLicpXG59XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9lbWFpbC1yZWdpc3RyYXRpb25cIiwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbDogZW1haWxWYWx1ZSwgZXZlbnRJZCB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEVycm9yOiAke3Jlc3BvbnNlLnN0YXJ1c31gKVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlKVxuICAgICAgICAgICAgaW5wdXRFbWFpbC5jdXJyZW50LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmlkRXZlbnRzfT5cbiAgICAgICAgICAgIDxoMT57ZGF0YS50aXRsZX08L2gxPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgICAgICBzcmM9e2RhdGEuaW1hZ2V9XG4gICAgICAgICAgICAgICAgYWx0PXtkYXRhLnRpdGxlfVxuICAgICAgICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXszNTB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6ICc2MCUnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHA+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlLmVtYWlsX3JlZ2lzdHJhdGlvbn0+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkdldCBSZWdpc3RlciBmb3IgdGhpcyBldmVudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHJlZj17aW5wdXRFbWFpbH0gY2xhc3NOYW1lPXtzdHlsZS5pbnB1dH0gaWQ9XCJlbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQbGVhc2UgaW5zZXJ0IHlvdXIgZW1haWxcIiAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5lcnJvck1lc3NhZ2V9PnttZXNzYWdlfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJZEV2ZW50cyJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkltYWdlIiwic3R5bGUiLCJJZEV2ZW50cyIsImRhdGEiLCJpbnB1dEVtYWlsIiwicm91dGVyIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsVmFsdWUiLCJjdXJyZW50IiwidmFsdWUiLCJldmVudElkIiwicXVlcnkiLCJpZCIsInZhbGlkUmVnZXgiLCJtYXRjaCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWFpbCIsIm9rIiwiRXJyb3IiLCJzdGFydXMiLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWRFdmVudHMiLCJoMSIsInRpdGxlIiwicHJpb3JpdHkiLCJzcmMiLCJpbWFnZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibWluV2lkdGgiLCJwIiwiZGVzY3JpcHRpb24iLCJmb3JtIiwiZW1haWxfcmVnaXN0cmF0aW9uIiwibGFiZWwiLCJpbnB1dCIsInJlZiIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsImVycm9yTWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/eventsComponents/idEvents.jsx\n"));

/***/ })

});