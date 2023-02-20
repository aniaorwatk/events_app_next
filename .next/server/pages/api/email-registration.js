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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction buildPath() {\n    return path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"data\", \"data.json\");\n}\nfunction extractData(filePath) {\n    const jsonData = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePath);\n    const data = JSON.parse(jsonData);\n    return data;\n}\nfunction handler(req, res) {\n    const { method  } = req;\n    const filePath = buildPath();\n    const { events_categories , allEvents  } = extractData(filePath);\n    if (!allEvents) {\n        return res.status(404).json({\n            status: 404,\n            message: \"Events data not found\"\n        });\n    }\n    if (method === \"POST\") {\n        const { email , eventId  } = req.body;\n        if (!email | !email.includes(\"@\")) {\n            res.status(422).json({\n                message: \"Invalid email address\"\n            });\n            return;\n        }\n        const newAllEvents = allEvents.map((ev)=>{\n            if (ev.id === eventId) {\n                if (ev.emails_registered.includes(email)) {\n                    res.status(409).json({\n                        message: \"This email has already been registered\"\n                    });\n                    return ev;\n                }\n                return {\n                    ...ev,\n                    emails_registered: [\n                        ...ev.emails_registered,\n                        email\n                    ]\n                };\n            }\n            return ev;\n        });\n        fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(filePath, JSON.stringify({\n            events_categories,\n            allEvents: newAllEvents\n        }));\n        res.status(201).json({\n            message: `You have been registered successfully with the email: ${email} for the event: ${eventId}`\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2VtYWlsLXJlZ2lzdHJhdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QjtBQUNKO0FBRXBCLFNBQVNFLFlBQVk7SUFDbkIsT0FBT0YsZ0RBQVMsQ0FBQ0ksUUFBUUMsR0FBRyxJQUFJLFFBQVE7QUFDMUM7QUFFQSxTQUFTQyxZQUFZQyxRQUFRLEVBQUU7SUFDN0IsTUFBTUMsV0FBV1Asc0RBQWUsQ0FBQ007SUFDakMsTUFBTUcsT0FBT0MsS0FBS0MsS0FBSyxDQUFDSjtJQUN4QixPQUFPRTtBQUNUO0FBRWUsU0FBU0csUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeEMsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0Y7SUFFbkIsTUFBTVAsV0FBV0w7SUFDakIsTUFBTSxFQUFFZSxrQkFBaUIsRUFBRUMsVUFBUyxFQUFFLEdBQUdaLFlBQVlDO0lBRXJELElBQUksQ0FBQ1csV0FBVztRQUNkLE9BQU9ILElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDMUJELFFBQVE7WUFDUkUsU0FBUztRQUNYO0lBQ0YsQ0FBQztJQUVELElBQUlMLFdBQVcsUUFBUTtRQUNyQixNQUFNLEVBQUVNLE1BQUssRUFBRUMsUUFBTyxFQUFFLEdBQUdULElBQUlVLElBQUk7UUFFbkMsSUFBSSxDQUFDRixRQUFRLENBQUNBLE1BQU1HLFFBQVEsQ0FBQyxNQUFNO1lBQ2pDVixJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQXdCO1lBQ3hEO1FBQ0YsQ0FBQztRQUVELE1BQU1LLGVBQWVSLFVBQVVTLEdBQUcsQ0FBQyxDQUFDQyxLQUFPO1lBQ3pDLElBQUlBLEdBQUdDLEVBQUUsS0FBS04sU0FBUztnQkFDckIsSUFBSUssR0FBR0UsaUJBQWlCLENBQUNMLFFBQVEsQ0FBQ0gsUUFBUTtvQkFDeENQLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7d0JBQUVDLFNBQVM7b0JBQXlDO29CQUN6RSxPQUFPTztnQkFDVCxDQUFDO2dCQUNELE9BQU87b0JBQ0wsR0FBR0EsRUFBRTtvQkFDTEUsbUJBQW1COzJCQUFJRixHQUFHRSxpQkFBaUI7d0JBQUVSO3FCQUFNO2dCQUNyRDtZQUNGLENBQUM7WUFDRCxPQUFPTTtRQUNUO1FBRUEzQix1REFBZ0IsQ0FBQ00sVUFBVUksS0FBS3FCLFNBQVMsQ0FBQztZQUFFZjtZQUFtQkMsV0FBV1E7UUFBYTtRQUV2RlgsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNuQkMsU0FBUyxDQUFDLHNEQUFzRCxFQUFFQyxNQUFNLGdCQUFnQixFQUFFQyxRQUFRLENBQUM7UUFDckc7SUFDRixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V2ZW50c19hcHBfbmV4dC8uL3NyYy9wYWdlcy9hcGkvZW1haWwtcmVnaXN0cmF0aW9uLmpzP2VhNWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG5mdW5jdGlvbiBidWlsZFBhdGgoKSB7XG4gIHJldHVybiBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2RhdGEnLCAnZGF0YS5qc29uJyk7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3REYXRhKGZpbGVQYXRoKSB7XG4gIGNvbnN0IGpzb25EYXRhID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKTtcbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoanNvbkRhdGEpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xuXG4gIGNvbnN0IGZpbGVQYXRoID0gYnVpbGRQYXRoKCk7XG4gIGNvbnN0IHsgZXZlbnRzX2NhdGVnb3JpZXMsIGFsbEV2ZW50cyB9ID0gZXh0cmFjdERhdGEoZmlsZVBhdGgpO1xuXG4gIGlmICghYWxsRXZlbnRzKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtcbiAgICAgIHN0YXR1czogNDA0LFxuICAgICAgbWVzc2FnZTogJ0V2ZW50cyBkYXRhIG5vdCBmb3VuZCcsXG4gICAgfSk7XG4gIH1cblxuICBpZiAobWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBjb25zdCB7IGVtYWlsLCBldmVudElkIH0gPSByZXEuYm9keTtcblxuICAgIGlmICghZW1haWwgfCAhZW1haWwuaW5jbHVkZXMoJ0AnKSkge1xuICAgICAgcmVzLnN0YXR1cyg0MjIpLmpzb24oeyBtZXNzYWdlOiAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJyB9KTtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG5ld0FsbEV2ZW50cyA9IGFsbEV2ZW50cy5tYXAoKGV2KSA9PiB7XG4gICAgICBpZiAoZXYuaWQgPT09IGV2ZW50SWQpIHtcbiAgICAgICAgaWYgKGV2LmVtYWlsc19yZWdpc3RlcmVkLmluY2x1ZGVzKGVtYWlsKSkge1xuICAgICAgICAgIHJlcy5zdGF0dXMoNDA5KS5qc29uKHsgbWVzc2FnZTogJ1RoaXMgZW1haWwgaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkJyB9KTtcbiAgICAgICAgICByZXR1cm4gZXY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5ldixcbiAgICAgICAgICBlbWFpbHNfcmVnaXN0ZXJlZDogWy4uLmV2LmVtYWlsc19yZWdpc3RlcmVkLCBlbWFpbF0sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gZXY7XG4gICAgfSk7XG5cbiAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeSh7IGV2ZW50c19jYXRlZ29yaWVzLCBhbGxFdmVudHM6IG5ld0FsbEV2ZW50cyB9KSk7XG5cbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7XG4gICAgICBtZXNzYWdlOiBgWW91IGhhdmUgYmVlbiByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseSB3aXRoIHRoZSBlbWFpbDogJHtlbWFpbH0gZm9yIHRoZSBldmVudDogJHtldmVudElkfWAsXG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJwYXRoIiwiZnMiLCJidWlsZFBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImV4dHJhY3REYXRhIiwiZmlsZVBhdGgiLCJqc29uRGF0YSIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZXZlbnRzX2NhdGVnb3JpZXMiLCJhbGxFdmVudHMiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVtYWlsIiwiZXZlbnRJZCIsImJvZHkiLCJpbmNsdWRlcyIsIm5ld0FsbEV2ZW50cyIsIm1hcCIsImV2IiwiaWQiLCJlbWFpbHNfcmVnaXN0ZXJlZCIsIndyaXRlRmlsZVN5bmMiLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/email-registration.js\n");

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