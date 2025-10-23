"use strict";
exports.id = 306;
exports.ids = [306];
exports.modules = {

/***/ 306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ ThemeProvider),
/* harmony export */   "F": () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    theme: "light",
    toggleTheme: ()=>{}
});
const STORAGE_KEY = "interactive-cv-theme";
const getPreferredTheme = ()=>{
    if (true) {
        return "light";
    }
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    if (storedTheme === "light" || storedTheme === "dark") {
        return storedTheme;
    }
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    return media.matches ? "dark" : "light";
};
const ThemeProvider = ({ children  })=>{
    const { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("light");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTheme(getPreferredTheme());
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (typeof document === "undefined") {
            return;
        }
        document.documentElement.dataset.theme = theme;
        window.localStorage.setItem(STORAGE_KEY, theme);
    }, [
        theme
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (true) {
            return;
        }
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (event)=>{
            setTheme(event.matches ? "dark" : "light");
        };
        media.addEventListener("change", handleChange);
        return ()=>media.removeEventListener("change", handleChange)
        ;
    }, []);
    const toggleTheme = ()=>{
        setTheme((previous)=>previous === "light" ? "dark" : "light"
        );
    };
    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            theme,
            toggleTheme
        })
    , [
        theme
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeContext.Provider, {
        value: value,
        children: children
    }));
};
const useTheme = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext)
;


/***/ })

};
;