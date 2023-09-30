"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/PrimaryFeatures.tsx":
/*!********************************************!*\
  !*** ./src/components/PrimaryFeatures.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PrimaryFeatures: function() { return /* binding */ PrimaryFeatures; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/tabs/tabs.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Container */ \"(app-pages-browser)/./src/components/Container.tsx\");\n/* harmony import */ var _images_background_features_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/images/background-features.jpg */ \"(app-pages-browser)/./src/images/background-features.jpg\");\n/* harmony import */ var _images_screenshots_expenses_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/images/screenshots/expenses.png */ \"(app-pages-browser)/./src/images/screenshots/expenses.png\");\n/* harmony import */ var _images_screenshots_payroll_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/images/screenshots/payroll.png */ \"(app-pages-browser)/./src/images/screenshots/payroll.png\");\n/* harmony import */ var _images_screenshots_reporting_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/images/screenshots/reporting.png */ \"(app-pages-browser)/./src/images/screenshots/reporting.png\");\n/* harmony import */ var _images_screenshots_vat_returns_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/images/screenshots/vat-returns.png */ \"(app-pages-browser)/./src/images/screenshots/vat-returns.png\");\n/* __next_internal_client_entry_do_not_use__ PrimaryFeatures auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst features = [\n    {\n        title: \"Meditation\",\n        description: \"Quiet your mind through stillness, focus inward, and recognize the changes within\",\n        image: _images_screenshots_payroll_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    },\n    {\n        title: \"Breathwork\",\n        description: \"All of your receipts organized into one place, as long as you don't mind typing in the data by hand.\",\n        image: _images_screenshots_expenses_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    {\n        title: \"Yoga\",\n        description: \"We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.\",\n        image: _images_screenshots_vat_returns_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    },\n    {\n        title: \"Sound\",\n        description: \"Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.\",\n        image: _images_screenshots_reporting_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    }\n];\nfunction PrimaryFeatures() {\n    _s();\n    let [tabOrientation, setTabOrientation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"horizontal\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let lgMediaQuery = window.matchMedia(\"(min-width: 1024px)\");\n        function onMediaQueryChange(param) {\n            let { matches } = param;\n            setTabOrientation(matches ? \"vertical\" : \"horizontal\");\n        }\n        onMediaQueryChange(lgMediaQuery);\n        lgMediaQuery.addEventListener(\"change\", onMediaQueryChange);\n        return ()=>{\n            lgMediaQuery.removeEventListener(\"change\", onMediaQueryChange);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"features\",\n        \"aria-label\": \"Features for running your books\",\n        className: \"relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: \"absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]\",\n                src: _images_background_features_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                alt: \"\",\n                width: 2245,\n                height: 1636,\n                unoptimized: true\n            }, void 0, false, {\n                fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-2xl md:mx-auto md:text-center xl:max-w-none\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl\",\n                                children: [\n                                    \"Integrating ancient practices with \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 46\n                                    }, this),\n                                    \"modern scientific findings\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-6 text-lg tracking-tight text-blue-100\",\n                                children: \"Many tools, one place, all backed by clinical evidence to support holistic well-being and emotional health\"\n                            }, void 0, false, {\n                                fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.Group, {\n                        as: \"div\",\n                        className: \"mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0\",\n                        vertical: tabOrientation === \"vertical\",\n                        children: (param)=>/*#__PURE__*/ {\n                            let { selectedIndex } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.List, {\n                                            className: \"relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal\",\n                                            children: features.map((feature, featureIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6\", selectedIndex === featureIndex ? \"bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10\" : \"hover:bg-white/10 lg:hover:bg-white/5\"),\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab, {\n                                                                className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"font-display text-lg ui-not-focus-visible:outline-none\", selectedIndex === featureIndex ? \"text-blue-600 lg:text-white\" : \"text-blue-100 hover:text-white lg:text-white\"),\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                        className: \"absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                                                        lineNumber: 114,\n                                                                        columnNumber: 27\n                                                                    }, this),\n                                                                    feature.title\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                                                lineNumber: 106,\n                                                                columnNumber: 25\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                                            lineNumber: 105,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"mt-2 hidden text-sm lg:block\", selectedIndex === featureIndex ? \"text-white\" : \"text-blue-100 group-hover:text-white\"),\n                                                            children: feature.description\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                                            lineNumber: 118,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, feature.title, true, {\n                                                    fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 21\n                                                }, this))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.Panels, {\n                                        className: \"lg:col-span-7\",\n                                        children: features.map((feature)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.Panel, {\n                                                unmount: false,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"relative sm:px-6 lg:hidden\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                                                lineNumber: 136,\n                                                                columnNumber: 23\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                className: \"relative mx-auto max-w-2xl text-base text-white sm:text-center\",\n                                                                children: feature.description\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                                                lineNumber: 137,\n                                                                columnNumber: 23\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                                        lineNumber: 135,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                            className: \"w-full\",\n                                                            src: feature.image,\n                                                            alt: \"\",\n                                                            priority: true,\n                                                            sizes: \"(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                                            lineNumber: 142,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                                        lineNumber: 141,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, feature.title, true, {\n                                                fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                                lineNumber: 134,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                        lineNumber: 132,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(PrimaryFeatures, \"PA0UdhBatJoZrK3UQwLJY5ZxHuI=\");\n_c = PrimaryFeatures;\nvar _c;\n$RefreshReg$(_c, \"PrimaryFeatures\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1ByaW1hcnlGZWF0dXJlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUyQztBQUNiO0FBQ1M7QUFDaEI7QUFFMkI7QUFDWTtBQUNJO0FBQ0Y7QUFDSTtBQUNHO0FBRXZFLE1BQU1XLFdBQVc7SUFDZjtRQUNFQyxPQUFPO1FBQ1BDLGFBQ0U7UUFDRkMsT0FBT04sdUVBQWlCQTtJQUMxQjtJQUNBO1FBQ0VJLE9BQU87UUFDUEMsYUFDRTtRQUNGQyxPQUFPUCx3RUFBa0JBO0lBQzNCO0lBQ0E7UUFDRUssT0FBTztRQUNQQyxhQUNFO1FBQ0ZDLE9BQU9KLDJFQUFvQkE7SUFDN0I7SUFDQTtRQUNFRSxPQUFPO1FBQ1BDLGFBQ0U7UUFDRkMsT0FBT0wseUVBQW1CQTtJQUM1QjtDQUNEO0FBRU0sU0FBU007O0lBQ2QsSUFBSSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHaEIsK0NBQVFBLENBQ2hEO0lBR0ZELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSWtCLGVBQWVDLE9BQU9DLFVBQVUsQ0FBQztRQUVyQyxTQUFTQyxtQkFBbUIsS0FBaUM7Z0JBQWpDLEVBQUVDLE9BQU8sRUFBd0IsR0FBakM7WUFDMUJMLGtCQUFrQkssVUFBVSxhQUFhO1FBQzNDO1FBRUFELG1CQUFtQkg7UUFDbkJBLGFBQWFLLGdCQUFnQixDQUFDLFVBQVVGO1FBRXhDLE9BQU87WUFDTEgsYUFBYU0sbUJBQW1CLENBQUMsVUFBVUg7UUFDN0M7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0k7UUFDQ0MsSUFBRztRQUNIQyxjQUFXO1FBQ1hDLFdBQVU7OzBCQUVWLDhEQUFDMUIsbURBQUtBO2dCQUNKMEIsV0FBVTtnQkFDVkMsS0FBS3ZCLHVFQUFlQTtnQkFDcEJ3QixLQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxXQUFXOzs7Ozs7MEJBRWIsOERBQUM1Qiw0REFBU0E7Z0JBQUN1QixXQUFVOztrQ0FDbkIsOERBQUNNO3dCQUFJTixXQUFVOzswQ0FDYiw4REFBQ087Z0NBQUdQLFdBQVU7O29DQUEwRTtrREFDckQsOERBQUNROzs7OztvQ0FBSzs7Ozs7OzswQ0FHekMsOERBQUNDO2dDQUFFVCxXQUFVOzBDQUE0Qzs7Ozs7Ozs7Ozs7O2tDQUkzRCw4REFBQ3pCLG1EQUFHQSxDQUFDbUMsS0FBSzt3QkFDUkMsSUFBRzt3QkFDSFgsV0FBVTt3QkFDVlksVUFBVXhCLG1CQUFtQjtrQ0FFNUI7Z0NBQUMsRUFBRXlCLGFBQWEsRUFBRTttQ0FDakI7O2tEQUNFLDhEQUFDUDt3Q0FBSU4sV0FBVTtrREFDYiw0RUFBQ3pCLG1EQUFHQSxDQUFDdUMsSUFBSTs0Q0FBQ2QsV0FBVTtzREFDakJqQixTQUFTZ0MsR0FBRyxDQUFDLENBQUNDLFNBQVNDLDZCQUN0Qiw4REFBQ1g7b0RBRUNOLFdBQVd4QixnREFBSUEsQ0FDYixrRkFDQXFDLGtCQUFrQkksZUFDZCxxRUFDQTs7c0VBR04sOERBQUNDO3NFQUNDLDRFQUFDM0MsbURBQUdBO2dFQUNGeUIsV0FBV3hCLGdEQUFJQSxDQUNiLDBEQUNBcUMsa0JBQWtCSSxlQUNkLGdDQUNBOztrRkFHTiw4REFBQ0U7d0VBQUtuQixXQUFVOzs7Ozs7b0VBQ2ZnQixRQUFRaEMsS0FBSzs7Ozs7Ozs7Ozs7O3NFQUdsQiw4REFBQ3lCOzREQUNDVCxXQUFXeEIsZ0RBQUlBLENBQ2IsZ0NBQ0FxQyxrQkFBa0JJLGVBQ2QsZUFDQTtzRUFHTEQsUUFBUS9CLFdBQVc7Ozs7Ozs7bURBN0JqQitCLFFBQVFoQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7a0RBbUMxQiw4REFBQ1QsbURBQUdBLENBQUM2QyxNQUFNO3dDQUFDcEIsV0FBVTtrREFDbkJqQixTQUFTZ0MsR0FBRyxDQUFDLENBQUNDLHdCQUNiLDhEQUFDekMsbURBQUdBLENBQUM4QyxLQUFLO2dEQUFxQkMsU0FBUzs7a0VBQ3RDLDhEQUFDaEI7d0RBQUlOLFdBQVU7OzBFQUNiLDhEQUFDTTtnRUFBSU4sV0FBVTs7Ozs7OzBFQUNmLDhEQUFDUztnRUFBRVQsV0FBVTswRUFDVmdCLFFBQVEvQixXQUFXOzs7Ozs7Ozs7Ozs7a0VBR3hCLDhEQUFDcUI7d0RBQUlOLFdBQVU7a0VBQ2IsNEVBQUMxQixtREFBS0E7NERBQ0owQixXQUFVOzREQUNWQyxLQUFLZSxRQUFROUIsS0FBSzs0REFDbEJnQixLQUFJOzREQUNKcUIsUUFBUTs0REFDUkMsT0FBTTs7Ozs7Ozs7Ozs7OytDQWJJUixRQUFRaEMsS0FBSzs7Ozs7Ozs7Ozs7O3dCQW1CakM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1kO0dBckhnQkc7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJpbWFyeUZlYXR1cmVzLnRzeD9lZWJlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IFRhYiB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQC9jb21wb25lbnRzL0NvbnRhaW5lcidcbmltcG9ydCBiYWNrZ3JvdW5kSW1hZ2UgZnJvbSAnQC9pbWFnZXMvYmFja2dyb3VuZC1mZWF0dXJlcy5qcGcnXG5pbXBvcnQgc2NyZWVuc2hvdEV4cGVuc2VzIGZyb20gJ0AvaW1hZ2VzL3NjcmVlbnNob3RzL2V4cGVuc2VzLnBuZydcbmltcG9ydCBzY3JlZW5zaG90UGF5cm9sbCBmcm9tICdAL2ltYWdlcy9zY3JlZW5zaG90cy9wYXlyb2xsLnBuZydcbmltcG9ydCBzY3JlZW5zaG90UmVwb3J0aW5nIGZyb20gJ0AvaW1hZ2VzL3NjcmVlbnNob3RzL3JlcG9ydGluZy5wbmcnXG5pbXBvcnQgc2NyZWVuc2hvdFZhdFJldHVybnMgZnJvbSAnQC9pbWFnZXMvc2NyZWVuc2hvdHMvdmF0LXJldHVybnMucG5nJ1xuXG5jb25zdCBmZWF0dXJlcyA9IFtcbiAge1xuICAgIHRpdGxlOiAnTWVkaXRhdGlvbicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlF1aWV0IHlvdXIgbWluZCB0aHJvdWdoIHN0aWxsbmVzcywgZm9jdXMgaW53YXJkLCBhbmQgcmVjb2duaXplIHRoZSBjaGFuZ2VzIHdpdGhpblwiLFxuICAgIGltYWdlOiBzY3JlZW5zaG90UGF5cm9sbCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQnJlYXRod29yaycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkFsbCBvZiB5b3VyIHJlY2VpcHRzIG9yZ2FuaXplZCBpbnRvIG9uZSBwbGFjZSwgYXMgbG9uZyBhcyB5b3UgZG9uJ3QgbWluZCB0eXBpbmcgaW4gdGhlIGRhdGEgYnkgaGFuZC5cIixcbiAgICBpbWFnZTogc2NyZWVuc2hvdEV4cGVuc2VzLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdZb2dhJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiV2Ugb25seSBzZWxsIG91ciBzb2Z0d2FyZSB0byBjb21wYW5pZXMgd2hvIGRvbid0IGRlYWwgd2l0aCBWQVQgYXQgYWxsLCBzbyB0ZWNobmljYWxseSB3ZSBkbyBhbGwgdGhlIFZBVCBzdHVmZiB0aGV5IG5lZWQuXCIsXG4gICAgaW1hZ2U6IHNjcmVlbnNob3RWYXRSZXR1cm5zLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdTb3VuZCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnRWFzaWx5IGV4cG9ydCB5b3VyIGRhdGEgaW50byBhbiBFeGNlbCBzcHJlYWRzaGVldCB3aGVyZSB5b3UgY2FuIGRvIHdoYXRldmVyIHRoZSBoZWxsIHlvdSB3YW50IHdpdGggaXQuJyxcbiAgICBpbWFnZTogc2NyZWVuc2hvdFJlcG9ydGluZyxcbiAgfSxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIFByaW1hcnlGZWF0dXJlcygpIHtcbiAgbGV0IFt0YWJPcmllbnRhdGlvbiwgc2V0VGFiT3JpZW50YXRpb25dID0gdXNlU3RhdGU8J2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJz4oXG4gICAgJ2hvcml6b250YWwnLFxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgbGdNZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDEwMjRweCknKVxuXG4gICAgZnVuY3Rpb24gb25NZWRpYVF1ZXJ5Q2hhbmdlKHsgbWF0Y2hlcyB9OiB7IG1hdGNoZXM6IGJvb2xlYW4gfSkge1xuICAgICAgc2V0VGFiT3JpZW50YXRpb24obWF0Y2hlcyA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCcpXG4gICAgfVxuXG4gICAgb25NZWRpYVF1ZXJ5Q2hhbmdlKGxnTWVkaWFRdWVyeSlcbiAgICBsZ01lZGlhUXVlcnkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgb25NZWRpYVF1ZXJ5Q2hhbmdlKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGxnTWVkaWFRdWVyeS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBvbk1lZGlhUXVlcnlDaGFuZ2UpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBpZD1cImZlYXR1cmVzXCJcbiAgICAgIGFyaWEtbGFiZWw9XCJGZWF0dXJlcyBmb3IgcnVubmluZyB5b3VyIGJvb2tzXCJcbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBiZy1ibHVlLTYwMCBwYi0yOCBwdC0yMCBzbTpweS0zMlwiXG4gICAgPlxuICAgICAgPEltYWdlXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMS8yIHRvcC0xLzIgbWF4LXctbm9uZSB0cmFuc2xhdGUteC1bLTQ0JV0gdHJhbnNsYXRlLXktWy00MiVdXCJcbiAgICAgICAgc3JjPXtiYWNrZ3JvdW5kSW1hZ2V9XG4gICAgICAgIGFsdD1cIlwiXG4gICAgICAgIHdpZHRoPXsyMjQ1fVxuICAgICAgICBoZWlnaHQ9ezE2MzZ9XG4gICAgICAgIHVub3B0aW1pemVkXG4gICAgICAvPlxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTJ4bCBtZDpteC1hdXRvIG1kOnRleHQtY2VudGVyIHhsOm1heC13LW5vbmVcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1kaXNwbGF5IHRleHQtM3hsIHRyYWNraW5nLXRpZ2h0IHRleHQtd2hpdGUgc206dGV4dC00eGwgbWQ6dGV4dC01eGxcIj5cbiAgICAgICAgICBJbnRlZ3JhdGluZyBhbmNpZW50IHByYWN0aWNlcyB3aXRoIDxiciAvPlxuICAgICAgICAgIG1vZGVybiBzY2llbnRpZmljIGZpbmRpbmdzXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC02IHRleHQtbGcgdHJhY2tpbmctdGlnaHQgdGV4dC1ibHVlLTEwMFwiPlxuICAgICAgICAgICBNYW55IHRvb2xzLCBvbmUgcGxhY2UsIGFsbCBiYWNrZWQgYnkgY2xpbmljYWwgZXZpZGVuY2UgdG8gc3VwcG9ydCBob2xpc3RpYyB3ZWxsLWJlaW5nIGFuZCBlbW90aW9uYWwgaGVhbHRoXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFRhYi5Hcm91cFxuICAgICAgICAgIGFzPVwiZGl2XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xNiBncmlkIGdyaWQtY29scy0xIGl0ZW1zLWNlbnRlciBnYXAteS0yIHB0LTEwIHNtOmdhcC15LTYgbWQ6bXQtMjAgbGc6Z3JpZC1jb2xzLTEyIGxnOnB0LTBcIlxuICAgICAgICAgIHZlcnRpY2FsPXt0YWJPcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJ31cbiAgICAgICAgPlxuICAgICAgICAgIHsoeyBzZWxlY3RlZEluZGV4IH0pID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW14LTQgZmxleCBvdmVyZmxvdy14LWF1dG8gcGItNCBzbTpteC0wIHNtOm92ZXJmbG93LXZpc2libGUgc206cGItMCBsZzpjb2wtc3Bhbi01XCI+XG4gICAgICAgICAgICAgICAgPFRhYi5MaXN0IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgZmxleCBnYXAteC00IHdoaXRlc3BhY2Utbm93cmFwIHB4LTQgc206bXgtYXV0byBzbTpweC0wIGxnOm14LTAgbGc6YmxvY2sgbGc6Z2FwLXgtMCBsZzpnYXAteS0xIGxnOndoaXRlc3BhY2Utbm9ybWFsXCI+XG4gICAgICAgICAgICAgICAgICB7ZmVhdHVyZXMubWFwKChmZWF0dXJlLCBmZWF0dXJlSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGtleT17ZmVhdHVyZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICAgICAgICAgICAnZ3JvdXAgcmVsYXRpdmUgcm91bmRlZC1mdWxsIHB4LTQgcHktMSBsZzpyb3VuZGVkLWwteGwgbGc6cm91bmRlZC1yLW5vbmUgbGc6cC02JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggPT09IGZlYXR1cmVJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy13aGl0ZSBsZzpiZy13aGl0ZS8xMCBsZzpyaW5nLTEgbGc6cmluZy1pbnNldCBsZzpyaW5nLXdoaXRlLzEwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdob3ZlcjpiZy13aGl0ZS8xMCBsZzpob3ZlcjpiZy13aGl0ZS81JyxcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtZGlzcGxheSB0ZXh0LWxnIHVpLW5vdC1mb2N1cy12aXNpYmxlOm91dGxpbmUtbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCA9PT0gZmVhdHVyZUluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICd0ZXh0LWJsdWUtNjAwIGxnOnRleHQtd2hpdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd0ZXh0LWJsdWUtMTAwIGhvdmVyOnRleHQtd2hpdGUgbGc6dGV4dC13aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgcm91bmRlZC1mdWxsIGxnOnJvdW5kZWQtbC14bCBsZzpyb3VuZGVkLXItbm9uZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtmZWF0dXJlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnbXQtMiBoaWRkZW4gdGV4dC1zbSBsZzpibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggPT09IGZlYXR1cmVJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3RleHQtd2hpdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndGV4dC1ibHVlLTEwMCBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2ZlYXR1cmUuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvVGFiLkxpc3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8VGFiLlBhbmVscyBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi03XCI+XG4gICAgICAgICAgICAgICAge2ZlYXR1cmVzLm1hcCgoZmVhdHVyZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lbCBrZXk9e2ZlYXR1cmUudGl0bGV9IHVubW91bnQ9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBzbTpweC02IGxnOmhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWluc2V0LXgtNCBib3R0b20tWy00LjI1cmVtXSB0b3AtWy02LjVyZW1dIGJnLXdoaXRlLzEwIHJpbmctMSByaW5nLWluc2V0IHJpbmctd2hpdGUvMTAgc206aW5zZXQteC0wIHNtOnJvdW5kZWQtdC14bFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXgtYXV0byBtYXgtdy0yeGwgdGV4dC1iYXNlIHRleHQtd2hpdGUgc206dGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmZWF0dXJlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgdy1bNDVyZW1dIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLXhsIGJnLXNsYXRlLTUwIHNoYWRvdy14bCBzaGFkb3ctYmx1ZS05MDAvMjAgc206dy1hdXRvIGxnOm10LTAgbGc6dy1bNjcuODEyNXJlbV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ZlYXR1cmUuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemVzPVwiKG1pbi13aWR0aDogMTAyNHB4KSA2Ny44MTI1cmVtLCAobWluLXdpZHRoOiA2NDBweCkgMTAwdncsIDQ1cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmVsPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1RhYi5QYW5lbHM+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1RhYi5Hcm91cD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJUYWIiLCJjbHN4IiwiQ29udGFpbmVyIiwiYmFja2dyb3VuZEltYWdlIiwic2NyZWVuc2hvdEV4cGVuc2VzIiwic2NyZWVuc2hvdFBheXJvbGwiLCJzY3JlZW5zaG90UmVwb3J0aW5nIiwic2NyZWVuc2hvdFZhdFJldHVybnMiLCJmZWF0dXJlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsIlByaW1hcnlGZWF0dXJlcyIsInRhYk9yaWVudGF0aW9uIiwic2V0VGFiT3JpZW50YXRpb24iLCJsZ01lZGlhUXVlcnkiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwib25NZWRpYVF1ZXJ5Q2hhbmdlIiwibWF0Y2hlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2VjdGlvbiIsImlkIiwiYXJpYS1sYWJlbCIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwidW5vcHRpbWl6ZWQiLCJkaXYiLCJoMiIsImJyIiwicCIsIkdyb3VwIiwiYXMiLCJ2ZXJ0aWNhbCIsInNlbGVjdGVkSW5kZXgiLCJMaXN0IiwibWFwIiwiZmVhdHVyZSIsImZlYXR1cmVJbmRleCIsImgzIiwic3BhbiIsIlBhbmVscyIsIlBhbmVsIiwidW5tb3VudCIsInByaW9yaXR5Iiwic2l6ZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/PrimaryFeatures.tsx\n"));

/***/ })

});