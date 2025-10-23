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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/ThemeContext.js":
/*!*********************************!*\
  !*** ./context/ThemeContext.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeProvider\": () => (/* binding */ ThemeProvider),\n/* harmony export */   \"useTheme\": () => (/* binding */ useTheme)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    theme: \"light\",\n    toggleTheme: ()=>{}\n});\nconst STORAGE_KEY = \"interactive-cv-theme\";\nconst getPreferredTheme = ()=>{\n    if (true) {\n        return \"light\";\n    }\n    const storedTheme = window.localStorage.getItem(STORAGE_KEY);\n    if (storedTheme === \"light\" || storedTheme === \"dark\") {\n        return storedTheme;\n    }\n    return \"light\";\n};\nconst ThemeProvider = ({ children  })=>{\n    const { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"light\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTheme(getPreferredTheme());\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (typeof document === \"undefined\") {\n            return;\n        }\n        if (theme === \"light\") {\n            delete document.documentElement.dataset.theme;\n        } else {\n            document.documentElement.dataset.theme = theme;\n        }\n        window.localStorage.setItem(STORAGE_KEY, theme);\n    }, [\n        theme\n    ]);\n    const toggleTheme = ()=>{\n        setTheme((previous)=>previous === \"light\" ? \"dark\" : \"light\"\n        );\n    };\n    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            theme,\n            toggleTheme\n        })\n    , [\n        theme\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/kerimhalilovic/Documents/GitHub/CV-Kerim/context/ThemeContext.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined));\n};\nconst useTheme = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext)\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1RoZW1lQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStFO0FBRS9FLEtBQUssQ0FBQ0ssWUFBWSxpQkFBR0wsb0RBQWEsQ0FBQyxDQUFDO0lBQ2xDTSxLQUFLLEVBQUUsQ0FBTztJQUNkQyxXQUFXLE1BQVEsQ0FBQyxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxLQUFLLENBQUNDLFdBQVcsR0FBRyxDQUFzQjtBQUUxQyxLQUFLLENBQUNDLGlCQUFpQixPQUFTLENBQUM7SUFDL0IsRUFBRSxFQUFFLElBQTZCLEVBQUUsQ0FBQztRQUNsQyxNQUFNLENBQUMsQ0FBTztJQUNoQixDQUFDO0lBRUQsS0FBSyxDQUFDQyxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUNMLFdBQVc7SUFDM0QsRUFBRSxFQUFFRSxXQUFXLEtBQUssQ0FBTyxVQUFJQSxXQUFXLEtBQUssQ0FBTSxPQUFFLENBQUM7UUFDdEQsTUFBTSxDQUFDQSxXQUFXO0lBQ3BCLENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBTztBQUNoQixDQUFDO0FBRU0sS0FBSyxDQUFDSSxhQUFhLElBQUksQ0FBQyxDQUFDQyxRQUFRLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDOUMsS0FBSyxNQUFFVCxLQUFLLE1BQUVVLFFBQVEsTUFBSVosK0NBQVEsQ0FBQyxDQUFPO0lBRTFDRixnREFBUyxLQUFPLENBQUM7UUFDZmMsUUFBUSxDQUFDUCxpQkFBaUI7SUFDNUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMUCxnREFBUyxLQUFPLENBQUM7UUFDZixFQUFFLEVBQUUsTUFBTSxDQUFDZSxRQUFRLEtBQUssQ0FBVyxZQUFFLENBQUM7WUFDcEMsTUFBTTtRQUNSLENBQUM7UUFFRCxFQUFFLEVBQUVYLEtBQUssS0FBSyxDQUFPLFFBQUUsQ0FBQztZQUN0QixNQUFNLENBQUNXLFFBQVEsQ0FBQ0MsZUFBZSxDQUFDQyxPQUFPLENBQUNiLEtBQUs7UUFDL0MsQ0FBQyxNQUFNLENBQUM7WUFDTlcsUUFBUSxDQUFDQyxlQUFlLENBQUNDLE9BQU8sQ0FBQ2IsS0FBSyxHQUFHQSxLQUFLO1FBQ2hELENBQUM7UUFDREssTUFBTSxDQUFDQyxZQUFZLENBQUNRLE9BQU8sQ0FBQ1osV0FBVyxFQUFFRixLQUFLO0lBQ2hELENBQUMsRUFBRSxDQUFDQTtRQUFBQSxLQUFLO0lBQUEsQ0FBQztJQUVWLEtBQUssQ0FBQ0MsV0FBVyxPQUFTLENBQUM7UUFDekJTLFFBQVEsRUFBRUssUUFBUSxHQUFNQSxRQUFRLEtBQUssQ0FBTyxTQUFHLENBQU0sUUFBRyxDQUFPOztJQUNqRSxDQUFDO0lBRUQsS0FBSyxDQUFDQyxLQUFLLEdBQUduQiw4Q0FBTyxNQUFRLENBQUM7WUFBQ0csS0FBSztZQUFFQyxXQUFXO1FBQUMsQ0FBQztNQUFHLENBQUNEO1FBQUFBLEtBQUs7SUFBQSxDQUFDO0lBRTdELE1BQU0sNkVBQ0hELFlBQVksQ0FBQ2tCLFFBQVE7UUFBQ0QsS0FBSyxFQUFFQSxLQUFLO2tCQUFHUCxRQUFROzs7Ozs7QUFFbEQsQ0FBQztBQUVNLEtBQUssQ0FBQ1MsUUFBUSxPQUFTdkIsaURBQVUsQ0FBQ0ksWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVyYWN0aXZlLWN2Ly4vY29udGV4dC9UaGVtZUNvbnRleHQuanM/NjYzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuICB0aGVtZTogXCJsaWdodFwiLFxuICB0b2dnbGVUaGVtZTogKCkgPT4ge30sXG59KTtcblxuY29uc3QgU1RPUkFHRV9LRVkgPSBcImludGVyYWN0aXZlLWN2LXRoZW1lXCI7XG5cbmNvbnN0IGdldFByZWZlcnJlZFRoZW1lID0gKCkgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBcImxpZ2h0XCI7XG4gIH1cblxuICBjb25zdCBzdG9yZWRUaGVtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX0tFWSk7XG4gIGlmIChzdG9yZWRUaGVtZSA9PT0gXCJsaWdodFwiIHx8IHN0b3JlZFRoZW1lID09PSBcImRhcmtcIikge1xuICAgIHJldHVybiBzdG9yZWRUaGVtZTtcbiAgfVxuXG4gIHJldHVybiBcImxpZ2h0XCI7XG59O1xuXG5leHBvcnQgY29uc3QgVGhlbWVQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShcImxpZ2h0XCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGhlbWUoZ2V0UHJlZmVycmVkVGhlbWUoKSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhlbWUgPT09IFwibGlnaHRcIikge1xuICAgICAgZGVsZXRlIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0LnRoZW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldC50aGVtZSA9IHRoZW1lO1xuICAgIH1cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9LRVksIHRoZW1lKTtcbiAgfSwgW3RoZW1lXSk7XG5cbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XG4gICAgc2V0VGhlbWUoKHByZXZpb3VzKSA9PiAocHJldmlvdXMgPT09IFwibGlnaHRcIiA/IFwiZGFya1wiIDogXCJsaWdodFwiKSk7XG4gIH07XG5cbiAgY29uc3QgdmFsdWUgPSB1c2VNZW1vKCgpID0+ICh7IHRoZW1lLCB0b2dnbGVUaGVtZSB9KSwgW3RoZW1lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVRoZW1lID0gKCkgPT4gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiVGhlbWVDb250ZXh0IiwidGhlbWUiLCJ0b2dnbGVUaGVtZSIsIlNUT1JBR0VfS0VZIiwiZ2V0UHJlZmVycmVkVGhlbWUiLCJzdG9yZWRUaGVtZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJUaGVtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRUaGVtZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiZGF0YXNldCIsInNldEl0ZW0iLCJwcmV2aW91cyIsInZhbHVlIiwiUHJvdmlkZXIiLCJ1c2VUaGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/ThemeContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ThemeContext */ \"./context/ThemeContext.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/kerimhalilovic/Documents/GitHub/CV-Kerim/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kerimhalilovic/Documents/GitHub/CV-Kerim/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDeUI7U0FFOUNDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sNkVBQ0hILGdFQUFhOzhGQUNYRSxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCLENBQUM7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtY3YvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvVGhlbWVDb250ZXh0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiVGhlbWVQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();