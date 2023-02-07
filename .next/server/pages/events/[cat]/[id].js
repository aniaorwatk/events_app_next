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
exports.id = "pages/events/[cat]/[id]";
exports.ids = ["pages/events/[cat]/[id]"];
exports.modules = {

/***/ "./src/pages/events/[cat]/[id].js":
/*!****************************************!*\
  !*** ./src/pages/events/[cat]/[id].js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"getstaticPaths\": () => (/* binding */ getstaticPaths)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst EventPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Single Page\"\n    }, void 0, false, {\n        fileName: \"/Users/ania/Desktop/myProjects/events_app_next/src/pages/events/[cat]/[id].js\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventPage);\nasync function getstaticPaths() {\n    const { events_categories  } = await __webpack_require__.e(/*! import() */ \"data_data_json\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./../../../../data/data.json */ \"./data/data.json\", 19));\n    const allPaths = events_categories.map((ev)=>{\n        return {\n            params: {\n                cat: ev.id.toString()\n            }\n        };\n    });\n    return {\n        paths: allPaths,\n        fallback: false\n    };\n}\nasync function getServerSideProps(context) {\n    const id = context?.params.cat;\n    const { allEvents  } = await __webpack_require__.e(/*! import() */ \"data_data_json\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./../../../../data/data.json */ \"./data/data.json\", 19));\n    const data = allEvents.filter((ev)=>ev.city === id);\n    return {\n        props: {\n            data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZXZlbnRzL1tjYXRdL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsTUFBTUEsWUFBVyxJQUFJO0lBQ2pCLHFCQUNJLDhEQUFDQztrQkFBRzs7Ozs7O0FBRVo7QUFFQSxpRUFBZUQsU0FBU0EsRUFBQTtBQUVqQixlQUFlRSxpQkFBaUI7SUFDbkMsTUFBTSxFQUFFQyxrQkFBaUIsRUFBRSxHQUFHLE1BQU0seUtBQU87SUFDM0MsTUFBTUMsV0FBV0Qsa0JBQWtCRSxHQUFHLENBQUNDLENBQUFBLEtBQU07UUFDekMsT0FBTztZQUNIQyxRQUFRO2dCQUNKQyxLQUFLRixHQUFHRyxFQUFFLENBQUNDLFFBQVE7WUFDdkI7UUFDSjtJQUNKO0lBQ0EsT0FBTztRQUNIQyxPQUFPUDtRQUNQUSxVQUFVLEtBQUs7SUFDbkI7QUFDSixDQUFDO0FBRU0sZUFBZUMsbUJBQW1CQyxPQUFPLEVBQUU7SUFFOUMsTUFBTUwsS0FBS0ssU0FBU1AsT0FBT0MsR0FBRztJQUM5QixNQUFNLEVBQUVPLFVBQVMsRUFBRSxHQUFHLE1BQU0seUtBQU87SUFFbkMsTUFBTUMsT0FBT0QsVUFBVUUsTUFBTSxDQUFDWCxDQUFBQSxLQUFNQSxHQUFHWSxJQUFJLEtBQUtUO0lBRWhELE9BQU87UUFDSFUsT0FBTztZQUNISDtRQUNKO0lBQ0o7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXZlbnRzX2FwcF9uZXh0Ly4vc3JjL3BhZ2VzL2V2ZW50cy9bY2F0XS9baWRdLmpzP2U2ODkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRXZlbnRQYWdlID0oKT0+e1xuICAgIHJldHVybihcbiAgICAgICAgPGgxPlNpbmdsZSBQYWdlPC9oMT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50UGFnZVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0c3RhdGljUGF0aHMoKSB7XG4gICAgY29uc3QgeyBldmVudHNfY2F0ZWdvcmllcyB9ID0gYXdhaXQgaW1wb3J0KCcuLy4uLy4uLy4uLy4uL2RhdGEvZGF0YS5qc29uJyk7XG4gICAgY29uc3QgYWxsUGF0aHMgPSBldmVudHNfY2F0ZWdvcmllcy5tYXAoZXYgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgY2F0OiBldi5pZC50b1N0cmluZygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzOiBhbGxQYXRocyxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcblxuICAgIGNvbnN0IGlkID0gY29udGV4dD8ucGFyYW1zLmNhdDtcbiAgICBjb25zdCB7IGFsbEV2ZW50cyB9ID0gYXdhaXQgaW1wb3J0KCcuLy4uLy4uLy4uLy4uL2RhdGEvZGF0YS5qc29uJyk7XG5cbiAgICBjb25zdCBkYXRhID0gYWxsRXZlbnRzLmZpbHRlcihldiA9PiBldi5jaXR5ID09PSBpZClcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBkYXRhXG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOlsiRXZlbnRQYWdlIiwiaDEiLCJnZXRzdGF0aWNQYXRocyIsImV2ZW50c19jYXRlZ29yaWVzIiwiYWxsUGF0aHMiLCJtYXAiLCJldiIsInBhcmFtcyIsImNhdCIsImlkIiwidG9TdHJpbmciLCJwYXRocyIsImZhbGxiYWNrIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImFsbEV2ZW50cyIsImRhdGEiLCJmaWx0ZXIiLCJjaXR5IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/events/[cat]/[id].js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/events/[cat]/[id].js"));
module.exports = __webpack_exports__;

})();