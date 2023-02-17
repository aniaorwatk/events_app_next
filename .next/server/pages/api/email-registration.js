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
exports.id = "pages/api/email-registration";
exports.ids = ["pages/api/email-registration"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./src/pages/api/email-registration.js":
/*!*********************************************!*\
  !*** ./src/pages/api/email-registration.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction buildPath() {\n    return path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"data\", \"data.json\");\n}\nfunction extractData(filePath) {\n    const jsonData = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePath);\n    const data = JSON.parse(jsonData);\n    return data;\n}\nfunction handler(req, res) {\n    const { method  } = req;\n    const filePath = buildPath();\n    const { events_categories , allEvents  } = extractData(filePath);\n    if (!allEvents) {\n        return res.status(404).json({\n            status: 404,\n            message: \"Events data not found\"\n        });\n    }\n    if (method === \"POST\") {\n        const { email , eventId  } = req.body;\n        if (!email | !email.includes(\"@\")) {\n            res.status(422).json({\n                message: \"Invalid email address\"\n            });\n        }\n        const newAllEvents = allEvents.map((ev)=>{\n            if (ev.id === eventId) {\n                if (ev.emails_registered.includes(email)) {\n                    res.status(409).json({\n                        message: \"This email has already been registered\"\n                    });\n                    return ev;\n                }\n                return {\n                    ...ev,\n                    emails_registered: [\n                        ...ev.emails_registered,\n                        email\n                    ]\n                };\n            }\n            return ev;\n        });\n        fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(filePath, JSON.stringify({\n            events_categories,\n            allEvents: newAllEvents\n        }));\n        res.status(201).json({\n            message: `You have been registered successfully with the email: ${email} for the event: ${eventId}`\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2VtYWlsLXJlZ2lzdHJhdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QjtBQUNKO0FBRXBCLFNBQVNFLFlBQVk7SUFDbkIsT0FBT0YsZ0RBQVMsQ0FBQ0ksUUFBUUMsR0FBRyxJQUFJLFFBQVE7QUFDMUM7QUFFQSxTQUFTQyxZQUFZQyxRQUFRLEVBQUU7SUFDN0IsTUFBTUMsV0FBV1Asc0RBQWUsQ0FBQ007SUFDakMsTUFBTUcsT0FBT0MsS0FBS0MsS0FBSyxDQUFDSjtJQUN4QixPQUFPRTtBQUNUO0FBRWUsU0FBU0csUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeEMsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0Y7SUFFbkIsTUFBTVAsV0FBV0w7SUFDakIsTUFBTSxFQUFFZSxrQkFBaUIsRUFBRUMsVUFBUyxFQUFFLEdBQUdaLFlBQVlDO0lBRXJELElBQUksQ0FBQ1csV0FBVztRQUNkLE9BQU9ILElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDMUJELFFBQVE7WUFDUkUsU0FBUztRQUNYO0lBQ0YsQ0FBQztJQUVELElBQUlMLFdBQVcsUUFBUTtRQUNyQixNQUFNLEVBQUVNLE1BQUssRUFBRUMsUUFBTyxFQUFFLEdBQUdULElBQUlVLElBQUk7UUFFbkMsSUFBSSxDQUFDRixRQUFRLENBQUNBLE1BQU1HLFFBQVEsQ0FBQyxNQUFNO1lBQ2pDVixJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQXdCO1FBQzFELENBQUM7UUFFRCxNQUFNSyxlQUFlUixVQUFVUyxHQUFHLENBQUMsQ0FBQ0MsS0FBTztZQUN6QyxJQUFJQSxHQUFHQyxFQUFFLEtBQUtOLFNBQVM7Z0JBQ3JCLElBQUlLLEdBQUdFLGlCQUFpQixDQUFDTCxRQUFRLENBQUNILFFBQVE7b0JBQ3hDUCxJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO3dCQUFFQyxTQUFTO29CQUF5QztvQkFDekUsT0FBT087Z0JBQ1QsQ0FBQztnQkFDRCxPQUFPO29CQUNMLEdBQUdBLEVBQUU7b0JBQ0xFLG1CQUFtQjsyQkFBSUYsR0FBR0UsaUJBQWlCO3dCQUFFUjtxQkFBTTtnQkFDckQ7WUFDRixDQUFDO1lBQ0QsT0FBT007UUFDVDtRQUVBM0IsdURBQWdCLENBQUNNLFVBQVVJLEtBQUtxQixTQUFTLENBQUM7WUFBRWY7WUFBbUJDLFdBQVdRO1FBQWE7UUFFdkZYLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDbkJDLFNBQVMsQ0FBQyxzREFBc0QsRUFBRUMsTUFBTSxnQkFBZ0IsRUFBRUMsUUFBUSxDQUFDO1FBQ3JHO0lBQ0YsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldmVudHNfYXBwX25leHQvLi9zcmMvcGFnZXMvYXBpL2VtYWlsLXJlZ2lzdHJhdGlvbi5qcz9lYTVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuZnVuY3Rpb24gYnVpbGRQYXRoKCkge1xuICByZXR1cm4gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhJywgJ2RhdGEuanNvbicpO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0RGF0YShmaWxlUGF0aCkge1xuICBjb25zdCBqc29uRGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCk7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGpzb25EYXRhKTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTtcblxuICBjb25zdCBmaWxlUGF0aCA9IGJ1aWxkUGF0aCgpO1xuICBjb25zdCB7IGV2ZW50c19jYXRlZ29yaWVzLCBhbGxFdmVudHMgfSA9IGV4dHJhY3REYXRhKGZpbGVQYXRoKTtcblxuICBpZiAoIWFsbEV2ZW50cykge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7XG4gICAgICBzdGF0dXM6IDQwNCxcbiAgICAgIG1lc3NhZ2U6ICdFdmVudHMgZGF0YSBub3QgZm91bmQnLFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgY29uc3QgeyBlbWFpbCwgZXZlbnRJZCB9ID0gcmVxLmJvZHk7XG5cbiAgICBpZiAoIWVtYWlsIHwgIWVtYWlsLmluY2x1ZGVzKCdAJykpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHsgbWVzc2FnZTogJ0ludmFsaWQgZW1haWwgYWRkcmVzcycgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3QWxsRXZlbnRzID0gYWxsRXZlbnRzLm1hcCgoZXYpID0+IHtcbiAgICAgIGlmIChldi5pZCA9PT0gZXZlbnRJZCkge1xuICAgICAgICBpZiAoZXYuZW1haWxzX3JlZ2lzdGVyZWQuaW5jbHVkZXMoZW1haWwpKSB7XG4gICAgICAgICAgcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBtZXNzYWdlOiAnVGhpcyBlbWFpbCBoYXMgYWxyZWFkeSBiZWVuIHJlZ2lzdGVyZWQnIH0pO1xuICAgICAgICAgIHJldHVybiBldjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmV2LFxuICAgICAgICAgIGVtYWlsc19yZWdpc3RlcmVkOiBbLi4uZXYuZW1haWxzX3JlZ2lzdGVyZWQsIGVtYWlsXSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBldjtcbiAgICB9KTtcblxuICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KHsgZXZlbnRzX2NhdGVnb3JpZXMsIGFsbEV2ZW50czogbmV3QWxsRXZlbnRzIH0pKTtcblxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHtcbiAgICAgIG1lc3NhZ2U6IGBZb3UgaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5IHdpdGggdGhlIGVtYWlsOiAke2VtYWlsfSBmb3IgdGhlIGV2ZW50OiAke2V2ZW50SWR9YCxcbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInBhdGgiLCJmcyIsImJ1aWxkUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZXh0cmFjdERhdGEiLCJmaWxlUGF0aCIsImpzb25EYXRhIiwicmVhZEZpbGVTeW5jIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJldmVudHNfY2F0ZWdvcmllcyIsImFsbEV2ZW50cyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZW1haWwiLCJldmVudElkIiwiYm9keSIsImluY2x1ZGVzIiwibmV3QWxsRXZlbnRzIiwibWFwIiwiZXYiLCJpZCIsImVtYWlsc19yZWdpc3RlcmVkIiwid3JpdGVGaWxlU3luYyIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/email-registration.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/email-registration.js"));
module.exports = __webpack_exports__;

})();