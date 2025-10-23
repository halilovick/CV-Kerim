"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 437:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(197);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Education = ({ education  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "section",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaGraduationCap, {}),
                    " Education"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "skill-group",
                children: education.map((edu, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.article, {
                        className: "education-card",
                        initial: {
                            opacity: 0,
                            y: 24
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.5,
                            delay: index * 0.1
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                style: {
                                    marginTop: 0
                                },
                                children: edu.degree
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    marginBottom: "0.4rem",
                                    fontWeight: 600
                                },
                                children: edu.school
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "0.75rem",
                                    color: "var(--text-muted)"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        style: {
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "0.4rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiCalendar, {}),
                                            " ",
                                            edu.dates
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        style: {
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "0.4rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiMapPin, {}),
                                            " ",
                                            edu.location
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, `${edu.school}-${edu.degree}-${index}`)
                )
            })
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Education);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 693:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(197);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Experience = ({ experience  })=>{
    const { 0: activeIndex , 1: setActiveIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const toggleIndex = (index)=>{
        setActiveIndex((current)=>current === index ? null : index
        );
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "section",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Work Experience"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "timeline",
                children: experience.map((job, index)=>{
                    const isActive = activeIndex === index;
                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        className: "timeline-item",
                        initial: {
                            opacity: 0,
                            x: -30
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.45,
                            delay: index * 0.08
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "timeline-dot"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "timeline-content",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "timeline-header",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: job.title
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        style: {
                                                            margin: "0.35rem 0 0",
                                                            color: "var(--text-muted)"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                            children: job.company
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "timeline-meta",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: job.dates
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: job.location
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {
                                        type: "button",
                                        className: "timeline-toggle",
                                        onClick: ()=>toggleIndex(index)
                                        ,
                                        "aria-expanded": isActive,
                                        "aria-controls": `experience-details-${index}`,
                                        whileTap: {
                                            scale: 0.96
                                        },
                                        children: [
                                            isActive ? "Hide Impact" : "View Impact",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {
                                                style: {
                                                    display: "inline-flex",
                                                    marginLeft: "0.5rem"
                                                },
                                                animate: {
                                                    rotate: isActive ? 180 : 0
                                                },
                                                children: isActive ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiChevronUp, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiChevronDown, {})
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
                                        initial: false,
                                        children: isActive && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.ul, {
                                            id: `experience-details-${index}`,
                                            className: "timeline-responsibilities",
                                            initial: {
                                                height: 0,
                                                opacity: 0
                                            },
                                            animate: {
                                                height: "auto",
                                                opacity: 1
                                            },
                                            exit: {
                                                height: 0,
                                                opacity: 0
                                            },
                                            transition: {
                                                duration: 0.3
                                            },
                                            children: job.responsibilities.map((item, responsibilityIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {
                                                    initial: {
                                                        opacity: 0,
                                                        x: -8
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        x: 0
                                                    },
                                                    transition: {
                                                        duration: 0.2,
                                                        delay: responsibilityIndex * 0.05
                                                    },
                                                    children: item
                                                }, `${job.company}-responsibility-${responsibilityIndex}`)
                                            )
                                        })
                                    })
                                ]
                            })
                        ]
                    }, `${job.company}-${job.title}-${index}`));
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Experience);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 673:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(197);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(306);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Header = ({ name , title , contact , profilePicture , stats =[] , summarySnippet ,  })=>{
    const { theme , toggleTheme  } = (0,_context_ThemeContext__WEBPACK_IMPORTED_MODULE_3__/* .useTheme */ .F)();
    const isDark = theme === "dark";
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.header, {
        className: "card hero-header",
        initial: {
            opacity: 0,
            y: -30
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.55,
            ease: "easeOut"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    justifySelf: "end",
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    className: "theme-toggle",
                    type: "button",
                    onClick: toggleTheme,
                    "aria-label": `Switch to ${isDark ? "light" : "dark"} mode`,
                    children: [
                        isDark ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiSun, {
                            size: 18
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiMoon, {
                            size: 18
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            children: [
                                isDark ? "Light" : "Dark",
                                " Mode"
                            ]
                        })
                    ]
                })
            }),
            profilePicture && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.img, {
                src: profilePicture,
                alt: `${name} profile`,
                className: "profile-picture",
                initial: {
                    scale: 0.9,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                transition: {
                    duration: 0.6,
                    delay: 0.1
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.h1, {
                style: {
                    margin: 0,
                    fontSize: "2.75rem",
                    letterSpacing: "-0.03em",
                    color: "var(--text-color)"
                },
                initial: {
                    opacity: 0,
                    y: 15
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.5,
                    delay: 0.15
                },
                children: name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.p, {
                style: {
                    fontSize: "1.15rem",
                    margin: "0.4rem 0 1.2rem",
                    color: "var(--text-muted)",
                    maxWidth: "560px"
                },
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.5,
                    delay: 0.25
                },
                children: title
            }),
            summarySnippet && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.p, {
                style: {
                    margin: 0,
                    color: "var(--text-muted)",
                    maxWidth: "700px"
                },
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.55,
                    delay: 0.35
                },
                children: summarySnippet
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                className: "contact-links",
                initial: {
                    opacity: 0,
                    scale: 0.95
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 0.45,
                    delay: 0.35
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "contact-link",
                        href: `mailto:${contact.email}`,
                        title: contact.email,
                        "aria-label": `Email ${name}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiMail, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "contact-link",
                        href: contact.linkedin,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        title: "LinkedIn",
                        "aria-label": "LinkedIn Profile",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiLinkedin, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "contact-link",
                        href: contact.github,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        title: "GitHub",
                        "aria-label": "GitHub Profile",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiGithub, {})
                    }),
                    contact.website && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "contact-link",
                        href: contact.website,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        title: "Portfolio",
                        "aria-label": "Portfolio Website",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiGlobe, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                className: "hero-actions",
                initial: {
                    opacity: 0,
                    y: 12
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.45,
                    delay: 0.4
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "primary-btn",
                        href: "/CV-Kerim-Halilovic-2025.pdf",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiDownload, {}),
                            "Download CV"
                        ]
                    }),
                    contact.website && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "ghost-btn",
                        href: contact.website,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiGlobe, {}),
                            "Visit Portfolio"
                        ]
                    })
                ]
            }),
            stats.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "stats-grid",
                children: stats.map((stat)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                        className: "stat-card",
                        initial: {
                            opacity: 0,
                            y: 12
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.4,
                            delay: 0.45
                        },
                        whileHover: {
                            scale: 1.03
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "stat-value",
                                children: stat.value
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "stat-label",
                                children: stat.label
                            })
                        ]
                    }, stat.label)
                )
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 433:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(197);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Projects = ({ projects  })=>{
    const { 0: selectedTech , 1: setSelectedTech  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const allTechnologies = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const techSet = new Set();
        projects.forEach((project)=>{
            project.technologies.forEach((tech)=>techSet.add(tech)
            );
        });
        return Array.from(techSet);
    }, [
        projects
    ]);
    const toggleTechnology = (tech)=>{
        setSelectedTech((current)=>current.includes(tech) ? current.filter((item)=>item !== tech
            ) : [
                ...current,
                tech
            ]
        );
    };
    const clearFilters = ()=>setSelectedTech([])
    ;
    const filteredProjects = selectedTech.length === 0 ? projects : projects.filter((project)=>selectedTech.every((tech)=>project.technologies.includes(tech)
        )
    );
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "section",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Projects"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "filter-bar",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        style: {
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.35rem",
                            fontWeight: 600,
                            color: "var(--text-muted)",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            fontSize: "0.75rem"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiFilter, {}),
                            " Filter by Tech"
                        ]
                    }),
                    allTechnologies.map((tech)=>{
                        const isActive = selectedTech.includes(tech);
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            className: `filter-chip${isActive ? " active" : ""}`,
                            onClick: ()=>toggleTechnology(tech)
                            ,
                            children: tech
                        }, tech));
                    }),
                    selectedTech.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        type: "button",
                        className: "filter-chip active",
                        onClick: clearFilters,
                        style: {
                            background: "var(--accent-gradient)",
                            color: "white",
                            borderColor: "transparent"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiX, {}),
                            "Clear"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
                children: filteredProjects.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "project-grid",
                    children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.article, {
                            className: "project-card",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -10
                            },
                            transition: {
                                duration: 0.3
                            },
                            whileHover: {
                                y: -6
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "project-meta",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: project.technologies.slice(0, 2).join(" • ")
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: project.link,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            "aria-label": `Open ${project.name}`,
                                            style: {
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "0.3rem"
                                            },
                                            children: [
                                                "View ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiExternalLink, {})
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: project.name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: {
                                        color: "var(--text-muted)"
                                    },
                                    children: project.description
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        marginTop: "1rem"
                                    },
                                    children: project.technologies.map((tech)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "tag",
                                            children: tech
                                        }, `${project.name}-${tech}`)
                                    )
                                })
                            ]
                        }, `${project.name}-${index}`)
                    )
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: "empty-state",
                    initial: {
                        opacity: 0,
                        scale: 0.9
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    children: "No projects match that tech stack just yet. Try clearing the filters."
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 257:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(197);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const SKILL_DETAILS = {
    "JavaScript (ES6+)": {
        category: "Frontend",
        level: 92
    },
    TypeScript: {
        category: "Frontend",
        level: 88
    },
    React: {
        category: "Frontend",
        level: 90
    },
    "Next.js": {
        category: "Frontend",
        level: 87
    },
    "Node.js": {
        category: "Backend",
        level: 84
    },
    HTML5: {
        category: "Frontend",
        level: 93
    },
    "CSS3 / SASS": {
        category: "Frontend",
        level: 85
    },
    GraphQL: {
        category: "Backend",
        level: 78
    },
    "REST APIs": {
        category: "Backend",
        level: 83
    },
    Git: {
        category: "Tooling",
        level: 90
    },
    Docker: {
        category: "Tooling",
        level: 80
    },
    "CI/CD": {
        category: "Tooling",
        level: 82
    }
};
const Skills = ({ skills  })=>{
    const { 0: activeCategory , 1: setActiveCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("All");
    const groupedSkills = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return skills.reduce((acc, skill)=>{
            const detail = SKILL_DETAILS[skill] || {
                category: "Other",
                level: 70
            };
            if (!acc[detail.category]) {
                acc[detail.category] = [];
            }
            acc[detail.category].push({
                name: skill,
                level: detail.level
            });
            return acc;
        }, {});
    }, [
        skills
    ]);
    const categories = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[
            "All",
            ...Object.keys(groupedSkills)
        ]
    , [
        groupedSkills
    ]);
    const visibleGroups = activeCategory === "All" ? Object.entries(groupedSkills) : [
        [
            activeCategory,
            groupedSkills[activeCategory] || []
        ]
    ];
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "section card",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaCogs, {}),
                    " Skills Matrix"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "skills-layout",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "skills-tabs",
                        children: categories.map((category)=>{
                            const isActive = activeCategory === category;
                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: `skills-tab${isActive ? " active" : ""}`,
                                onClick: ()=>setActiveCategory(category)
                                ,
                                children: category
                            }, category));
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
                        initial: false,
                        mode: "wait",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            initial: {
                                opacity: 0,
                                y: 12
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -12
                            },
                            transition: {
                                duration: 0.35
                            },
                            className: "skill-group",
                            children: visibleGroups.map(([category, skillSet])=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                    className: "skill-cluster",
                                    initial: {
                                        opacity: 0,
                                        y: 12
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.3
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                                fontWeight: 600,
                                                marginBottom: "1rem",
                                                color: "var(--primary-color)",
                                                letterSpacing: "0.05em",
                                                textTransform: "uppercase",
                                                fontSize: "0.75rem"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiLayers, {}),
                                                category
                                            ]
                                        }),
                                        skillSet.map((skill)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                style: {
                                                    marginBottom: "1rem"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "skill-bar",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                                            className: "skill-bar-fill",
                                                            style: {
                                                                width: `${skill.level}%`
                                                            },
                                                            initial: {
                                                                width: 0
                                                            },
                                                            animate: {
                                                                width: `${skill.level}%`
                                                            },
                                                            transition: {
                                                                duration: 0.6,
                                                                ease: "easeOut"
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "skill-bar-label",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: skill.name
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                children: [
                                                                    skill.level,
                                                                    "%"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, skill.name)
                                        )
                                    ]
                                }, category)
                            )
                        }, activeCategory)
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 923:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(197);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const FOCUS_KEYWORDS = [
    {
        label: "AI-Powered Products",
        terms: [
            "ai-powered",
            "machine learning"
        ]
    },
    {
        label: "Fullstack Engineering",
        terms: [
            "full-stack",
            "fullstack",
            "next.js"
        ]
    },
    {
        label: "Product Leadership",
        terms: [
            "founded",
            "developed",
            "built"
        ]
    },
    {
        label: "Data-Driven Decisions",
        terms: [
            "data-driven",
            "predict"
        ]
    },
    {
        label: "Scalable Systems",
        terms: [
            "scalable",
            "deployed",
            "production"
        ]
    }, 
];
const Summary = ({ summary  })=>{
    const { 0: expanded , 1: setExpanded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const snippet = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const maxLength = 260;
        if (summary.length <= maxLength) {
            return summary;
        }
        const trimmed = summary.slice(0, maxLength);
        const lastSpace = trimmed.lastIndexOf(" ");
        return `${trimmed.slice(0, lastSpace)}…`;
    }, [
        summary
    ]);
    const focusAreas = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const lowerSummary = summary.toLowerCase();
        const matched = FOCUS_KEYWORDS.filter((keyword)=>keyword.terms.some((term)=>lowerSummary.includes(term)
            )
        ).map((keyword)=>keyword.label
        );
        if (matched.length > 0) {
            return matched;
        }
        return [
            "Impactful Web Experiences",
            "User-Centric Development",
            "Continuous Learning"
        ];
    }, [
        summary
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.section, {
        className: "section card",
        initial: {
            opacity: 0,
            y: 24
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.45
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaUser, {}),
                    " Summary"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
                initial: false,
                mode: "wait",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.p, {
                    initial: {
                        opacity: 0,
                        y: 8
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -8
                    },
                    transition: {
                        duration: 0.25
                    },
                    style: {
                        color: "var(--text-muted)"
                    },
                    children: expanded ? summary : snippet
                }, expanded ? "expanded" : "collapsed")
            }),
            summary.length > snippet.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {
                type: "button",
                className: "timeline-toggle",
                onClick: ()=>setExpanded((current)=>!current
                    )
                ,
                whileTap: {
                    scale: 0.96
                },
                style: {
                    marginTop: "0.75rem"
                },
                children: expanded ? "Show Less" : "Read Full Story"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    marginTop: "1.4rem"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            color: "var(--text-muted)",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            fontSize: "0.75rem",
                            marginBottom: "0.6rem"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiZap, {}),
                            " Focus Areas"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.5rem"
                        },
                        children: focusAreas.map((area)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {
                                className: "tag",
                                whileHover: {
                                    scale: 1.05
                                },
                                transition: {
                                    duration: 0.2
                                },
                                children: area
                            }, area)
                        )
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Summary);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_cv_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(848);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(673);
/* harmony import */ var _components_Summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(923);
/* harmony import */ var _components_Experience__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(693);
/* harmony import */ var _components_Education__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(437);
/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(257);
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(433);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_3__, _components_Summary__WEBPACK_IMPORTED_MODULE_4__, _components_Experience__WEBPACK_IMPORTED_MODULE_5__, _components_Education__WEBPACK_IMPORTED_MODULE_6__, _components_Skills__WEBPACK_IMPORTED_MODULE_7__, _components_Projects__WEBPACK_IMPORTED_MODULE_8__]);
([_components_Header__WEBPACK_IMPORTED_MODULE_3__, _components_Summary__WEBPACK_IMPORTED_MODULE_4__, _components_Experience__WEBPACK_IMPORTED_MODULE_5__, _components_Education__WEBPACK_IMPORTED_MODULE_6__, _components_Skills__WEBPACK_IMPORTED_MODULE_7__, _components_Projects__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const getSummarySnippet = (summary)=>{
    if (!summary) {
        return "";
    }
    const sentences = summary.split(". ");
    const snippet = sentences.slice(0, 2).join(". ");
    return snippet.endsWith(".") ? snippet : `${snippet}.`;
};
const getUniqueCountries = (experience = [])=>{
    const toCountry = (location)=>{
        if (!location) return null;
        const parts = location.split(",");
        return parts[parts.length - 1].trim();
    };
    return experience.reduce((acc, job)=>{
        const country = toCountry(job.location);
        if (country) {
            acc.add(country);
        }
        return acc;
    }, new Set());
};
function Home({ cv  }) {
    const summarySnippet = getSummarySnippet(cv.summary);
    const uniqueCountries = getUniqueCountries(cv.experience);
    const teachingRoles = cv.experience.filter((job)=>job.title.toLowerCase().includes("assistant")
    ).length;
    const stats = [
        {
            label: "Products Shipped",
            value: `${cv.projects.length}+`
        },
        {
            label: "Core Technologies",
            value: cv.skills.length
        },
        {
            label: "Teaching Roles",
            value: teachingRoles
        },
        {
            label: "Countries Collaborated",
            value: uniqueCountries.size
        }, 
    ];
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            cv.name,
                            " | ",
                            cv.title
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: `Interactive CV for ${cv.name}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        name: cv.name,
                        title: cv.title,
                        contact: cv.contact,
                        profilePicture: cv.profilePicture,
                        stats: stats,
                        summarySnippet: summarySnippet
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "main-content-grid",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                                className: "sidebar-column",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Summary__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        summary: cv.summary
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Skills__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        skills: cv.skills
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "main-column",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Experience__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        experience: cv.experience
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        projects: cv.projects
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Education__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        education: cv.education
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
async function getStaticProps() {
    return {
        props: {
            cv: _data_cv_json__WEBPACK_IMPORTED_MODULE_2__
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 848:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Kerim Halilović","title":"Data Science Master\'s Student & Junior Fullstack Developer","profilePicture":"images/profile.jpg","contact":{"email":"khalilovic02@gmail.com","phone":"","linkedin":"https://linkedin.com/in/kerimhalilovic","github":"https://github.com/kerimhalilovic","website":"https://kerim.dev"},"summary":"I’m a Master’s student in Data Science at TU Wien and a Junior Fullstack Developer with hands-on experience in full-stack web development and applied machine learning. I’ve built and deployed several production-grade applications, including Cifra, an AI-powered vehicle valuation platform I founded and developed, using Python, FastAPI, and Next.js to predict real-time vehicle prices across Bosnia & Herzegovina. I’m passionate about building scalable, data-driven systems that solve real-world problems.","experience":[{"company":"TU Wien","title":"Graduate Teaching Assistant","dates":"Oct 2025 - Present","location":"Vienna, Austria","responsibilities":["Assisting in tutoring graduate-level \\"Machine Learning\\" course, covering key topics such as supervised learning, model evaluation, and neural networks.","Collaborated with lecturers in designing and reviewing assignments, providing feedback, and helping maintain the academic quality of the course."]},{"company":"Web Innovators","title":"Software Engineer","dates":"Jun 2017 - Dec 2019","location":"Boston, MA","responsibilities":["Developed and shipped multiple user-facing features for a large-scale e-commerce platform.","Collaborated with designers and product managers to create a seamless user experience.","Improved website performance by optimizing assets and implementing server-side rendering."]},{"company":"University of Sarajevo","title":"Undergraduate Teaching Assistant","dates":"Mar 2023 - Jun 2023","location":"Sarajevo, Bosnia and Herzegovina","responsibilities":["Assisted in tutoring the course \\"Programming Techniques\\", focusing on key aspects of C++ programming.","Provided support to students through guided lab sessions, coding exercises, and one-on-one assistance.","Collaborated with faculty members in preparing course materials and grading assignments."]}],"education":[{"school":"Technische Universität Wien","degree":"Master\'s degree, Data Science","dates":"2024 - 2026","location":"Vienna, Austria"},{"school":"University of Sarajevo","degree":"Bachelor\'s degree, Computer Science and Informatics","dates":"2021 - 2024","location":"Sarajevo, Bosnia and Herzegovina"}],"skills":["JavaScript (ES6+)","TypeScript","React","Next.js","Node.js","HTML5","CSS3 / SASS","GraphQL","REST APIs","Git","Docker","CI/CD"],"projects":[{"name":"Interactive Data Dashboard","description":"A web application for visualizing complex datasets with interactive charts and filters. Built with Next.js and D3.js.","technologies":["Next.js","React","D3.js","TypeScript"],"link":"https://github.com/your-username/project-one"},{"name":"E-commerce Storefront","description":"A modern, fast, and responsive e-commerce site with a full-featured shopping cart and checkout process.","technologies":["React","Redux","Node.js","Express"],"link":"https://github.com/your-username/project-two"}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [306], () => (__webpack_exec__(678)));
module.exports = __webpack_exports__;

})();