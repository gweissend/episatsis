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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PrimaryFeatures: function() { return /* binding */ PrimaryFeatures; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/tabs/tabs.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Container */ \"(app-pages-browser)/./src/components/Container.tsx\");\n/* harmony import */ var _images_background_features_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/images/background-features.jpg */ \"(app-pages-browser)/./src/images/background-features.jpg\");\n/* harmony import */ var _images_screenshots_expenses_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/images/screenshots/expenses.png */ \"(app-pages-browser)/./src/images/screenshots/expenses.png\");\n/* harmony import */ var _images_screenshots_payroll_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/images/screenshots/payroll.png */ \"(app-pages-browser)/./src/images/screenshots/payroll.png\");\n/* harmony import */ var _images_screenshots_reporting_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/images/screenshots/reporting.png */ \"(app-pages-browser)/./src/images/screenshots/reporting.png\");\n/* harmony import */ var _images_screenshots_vat_returns_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/images/screenshots/vat-returns.png */ \"(app-pages-browser)/./src/images/screenshots/vat-returns.png\");\n/* __next_internal_client_entry_do_not_use__ PrimaryFeatures auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst features = [\n    {\n        title: \"Meditation\",\n        description: \"Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.\",\n        image: _images_screenshots_payroll_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    },\n    {\n        title: \"Breathwork\",\n        description: \"All of your receipts organized into one place, as long as you don't mind typing in the data by hand.\",\n        image: _images_screenshots_expenses_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    {\n        title: \"Yoga\",\n        description: \"We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.\",\n        image: _images_screenshots_vat_returns_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    },\n    {\n        title: \"Sound\",\n        description: \"Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.\",\n        image: _images_screenshots_reporting_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    }\n];\nfunction PrimaryFeatures() {\n    _s();\n    let [tabOrientation, setTabOrientation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"horizontal\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let lgMediaQuery = window.matchMedia(\"(min-width: 1024px)\");\n        function onMediaQueryChange(param) {\n            let { matches } = param;\n            setTabOrientation(matches ? \"vertical\" : \"horizontal\");\n        }\n        onMediaQueryChange(lgMediaQuery);\n        lgMediaQuery.addEventListener(\"change\", onMediaQueryChange);\n        return ()=>{\n            lgMediaQuery.removeEventListener(\"change\", onMediaQueryChange);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"features\",\n        \"aria-label\": \"Features for running your books\",\n        className: \"relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: \"absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]\",\n                src: _images_background_features_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                alt: \"\",\n                width: 2245,\n                height: 1636,\n                unoptimized: true\n            }, void 0, false, {\n                fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-2xl md:mx-auto md:text-center xl:max-w-none\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl\",\n                                children: [\n                                    \"Integrating ancient practices with \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 46\n                                    }, this),\n                                    \"modern scientific findings\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-6 text-lg tracking-tight text-blue-100\",\n                                children: \"Many tools, one place, all supported by clinical evidence\"\n                            }, void 0, false, {\n                                fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.Group, {\n                        as: \"div\",\n                        className: \"mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0\",\n                        vertical: tabOrientation === \"vertical\",\n                        children: (param)=>/*#__PURE__*/ {\n                            let { selectedIndex } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.List, {\n                                            className: \"relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal\",\n                                            children: features.map((feature, featureIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6\", selectedIndex === featureIndex ? \"bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10\" : \"hover:bg-white/10 lg:hover:bg-white/5\"),\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab, {\n                                                                className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"font-display text-lg ui-not-focus-visible:outline-none\", selectedIndex === featureIndex ? \"text-blue-600 lg:text-white\" : \"text-blue-100 hover:text-white lg:text-white\"),\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                        className: \"absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                                                        lineNumber: 114,\n                                                                        columnNumber: 27\n                                                                    }, this),\n                                                                    feature.title\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                                                lineNumber: 106,\n                                                                columnNumber: 25\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                                            lineNumber: 105,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"mt-2 hidden text-sm lg:block\", selectedIndex === featureIndex ? \"text-white\" : \"text-blue-100 group-hover:text-white\"),\n                                                            children: feature.description\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                                            lineNumber: 118,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, feature.title, true, {\n                                                    fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 21\n                                                }, this))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.Panels, {\n                                        className: \"lg:col-span-7\",\n                                        children: features.map((feature)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.Panel, {\n                                                unmount: false,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"relative sm:px-6 lg:hidden\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                                                lineNumber: 136,\n                                                                columnNumber: 23\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                className: \"relative mx-auto max-w-2xl text-base text-white sm:text-center\",\n                                                                children: feature.description\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                                                lineNumber: 137,\n                                                                columnNumber: 23\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                                        lineNumber: 135,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                            className: \"w-full\",\n                                                            src: feature.image,\n                                                            alt: \"\",\n                                                            priority: true,\n                                                            sizes: \"(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                                            lineNumber: 142,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                                        lineNumber: 141,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, feature.title, true, {\n                                                fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                                lineNumber: 134,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                                        lineNumber: 132,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/grey/WebAppsd/epigenesis/src/components/PrimaryFeatures.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(PrimaryFeatures, \"PA0UdhBatJoZrK3UQwLJY5ZxHuI=\");\n_c = PrimaryFeatures;\nvar _c;\n$RefreshReg$(_c, \"PrimaryFeatures\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1ByaW1hcnlGZWF0dXJlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUyQztBQUNiO0FBQ1M7QUFDaEI7QUFFMkI7QUFDWTtBQUNJO0FBQ0Y7QUFDSTtBQUNHO0FBRXZFLE1BQU1XLFdBQVc7SUFDZjtRQUNFQyxPQUFPO1FBQ1BDLGFBQ0U7UUFDRkMsT0FBT04sdUVBQWlCQTtJQUMxQjtJQUNBO1FBQ0VJLE9BQU87UUFDUEMsYUFDRTtRQUNGQyxPQUFPUCx3RUFBa0JBO0lBQzNCO0lBQ0E7UUFDRUssT0FBTztRQUNQQyxhQUNFO1FBQ0ZDLE9BQU9KLDJFQUFvQkE7SUFDN0I7SUFDQTtRQUNFRSxPQUFPO1FBQ1BDLGFBQ0U7UUFDRkMsT0FBT0wseUVBQW1CQTtJQUM1QjtDQUNEO0FBRU0sU0FBU007O0lBQ2QsSUFBSSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHaEIsK0NBQVFBLENBQ2hEO0lBR0ZELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSWtCLGVBQWVDLE9BQU9DLFVBQVUsQ0FBQztRQUVyQyxTQUFTQyxtQkFBbUIsS0FBaUM7Z0JBQWpDLEVBQUVDLE9BQU8sRUFBd0IsR0FBakM7WUFDMUJMLGtCQUFrQkssVUFBVSxhQUFhO1FBQzNDO1FBRUFELG1CQUFtQkg7UUFDbkJBLGFBQWFLLGdCQUFnQixDQUFDLFVBQVVGO1FBRXhDLE9BQU87WUFDTEgsYUFBYU0sbUJBQW1CLENBQUMsVUFBVUg7UUFDN0M7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0k7UUFDQ0MsSUFBRztRQUNIQyxjQUFXO1FBQ1hDLFdBQVU7OzBCQUVWLDhEQUFDMUIsbURBQUtBO2dCQUNKMEIsV0FBVTtnQkFDVkMsS0FBS3ZCLHVFQUFlQTtnQkFDcEJ3QixLQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxXQUFXOzs7Ozs7MEJBRWIsOERBQUM1Qiw0REFBU0E7Z0JBQUN1QixXQUFVOztrQ0FDbkIsOERBQUNNO3dCQUFJTixXQUFVOzswQ0FDYiw4REFBQ087Z0NBQUdQLFdBQVU7O29DQUEwRTtrREFDckQsOERBQUNROzs7OztvQ0FBSzs7Ozs7OzswQ0FHekMsOERBQUNDO2dDQUFFVCxXQUFVOzBDQUE0Qzs7Ozs7Ozs7Ozs7O2tDQUkzRCw4REFBQ3pCLG1EQUFHQSxDQUFDbUMsS0FBSzt3QkFDUkMsSUFBRzt3QkFDSFgsV0FBVTt3QkFDVlksVUFBVXhCLG1CQUFtQjtrQ0FFNUI7Z0NBQUMsRUFBRXlCLGFBQWEsRUFBRTttQ0FDakI7O2tEQUNFLDhEQUFDUDt3Q0FBSU4sV0FBVTtrREFDYiw0RUFBQ3pCLG1EQUFHQSxDQUFDdUMsSUFBSTs0Q0FBQ2QsV0FBVTtzREFDakJqQixTQUFTZ0MsR0FBRyxDQUFDLENBQUNDLFNBQVNDLDZCQUN0Qiw4REFBQ1g7b0RBRUNOLFdBQVd4QixnREFBSUEsQ0FDYixrRkFDQXFDLGtCQUFrQkksZUFDZCxxRUFDQTs7c0VBR04sOERBQUNDO3NFQUNDLDRFQUFDM0MsbURBQUdBO2dFQUNGeUIsV0FBV3hCLGdEQUFJQSxDQUNiLDBEQUNBcUMsa0JBQWtCSSxlQUNkLGdDQUNBOztrRkFHTiw4REFBQ0U7d0VBQUtuQixXQUFVOzs7Ozs7b0VBQ2ZnQixRQUFRaEMsS0FBSzs7Ozs7Ozs7Ozs7O3NFQUdsQiw4REFBQ3lCOzREQUNDVCxXQUFXeEIsZ0RBQUlBLENBQ2IsZ0NBQ0FxQyxrQkFBa0JJLGVBQ2QsZUFDQTtzRUFHTEQsUUFBUS9CLFdBQVc7Ozs7Ozs7bURBN0JqQitCLFFBQVFoQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7a0RBbUMxQiw4REFBQ1QsbURBQUdBLENBQUM2QyxNQUFNO3dDQUFDcEIsV0FBVTtrREFDbkJqQixTQUFTZ0MsR0FBRyxDQUFDLENBQUNDLHdCQUNiLDhEQUFDekMsbURBQUdBLENBQUM4QyxLQUFLO2dEQUFxQkMsU0FBUzs7a0VBQ3RDLDhEQUFDaEI7d0RBQUlOLFdBQVU7OzBFQUNiLDhEQUFDTTtnRUFBSU4sV0FBVTs7Ozs7OzBFQUNmLDhEQUFDUztnRUFBRVQsV0FBVTswRUFDVmdCLFFBQVEvQixXQUFXOzs7Ozs7Ozs7Ozs7a0VBR3hCLDhEQUFDcUI7d0RBQUlOLFdBQVU7a0VBQ2IsNEVBQUMxQixtREFBS0E7NERBQ0owQixXQUFVOzREQUNWQyxLQUFLZSxRQUFROUIsS0FBSzs0REFDbEJnQixLQUFJOzREQUNKcUIsUUFBUTs0REFDUkMsT0FBTTs7Ozs7Ozs7Ozs7OytDQWJJUixRQUFRaEMsS0FBSzs7Ozs7Ozs7Ozs7O3dCQW1CakM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1kO0dBckhnQkc7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJpbWFyeUZlYXR1cmVzLnRzeD9lZWJlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IFRhYiB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQC9jb21wb25lbnRzL0NvbnRhaW5lcidcbmltcG9ydCBiYWNrZ3JvdW5kSW1hZ2UgZnJvbSAnQC9pbWFnZXMvYmFja2dyb3VuZC1mZWF0dXJlcy5qcGcnXG5pbXBvcnQgc2NyZWVuc2hvdEV4cGVuc2VzIGZyb20gJ0AvaW1hZ2VzL3NjcmVlbnNob3RzL2V4cGVuc2VzLnBuZydcbmltcG9ydCBzY3JlZW5zaG90UGF5cm9sbCBmcm9tICdAL2ltYWdlcy9zY3JlZW5zaG90cy9wYXlyb2xsLnBuZydcbmltcG9ydCBzY3JlZW5zaG90UmVwb3J0aW5nIGZyb20gJ0AvaW1hZ2VzL3NjcmVlbnNob3RzL3JlcG9ydGluZy5wbmcnXG5pbXBvcnQgc2NyZWVuc2hvdFZhdFJldHVybnMgZnJvbSAnQC9pbWFnZXMvc2NyZWVuc2hvdHMvdmF0LXJldHVybnMucG5nJ1xuXG5jb25zdCBmZWF0dXJlcyA9IFtcbiAge1xuICAgIHRpdGxlOiAnTWVkaXRhdGlvbicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIktlZXAgdHJhY2sgb2YgZXZlcnlvbmUncyBzYWxhcmllcyBhbmQgd2hldGhlciBvciBub3QgdGhleSd2ZSBiZWVuIHBhaWQuIERpcmVjdCBkZXBvc2l0IG5vdCBzdXBwb3J0ZWQuXCIsXG4gICAgaW1hZ2U6IHNjcmVlbnNob3RQYXlyb2xsLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdCcmVhdGh3b3JrJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQWxsIG9mIHlvdXIgcmVjZWlwdHMgb3JnYW5pemVkIGludG8gb25lIHBsYWNlLCBhcyBsb25nIGFzIHlvdSBkb24ndCBtaW5kIHR5cGluZyBpbiB0aGUgZGF0YSBieSBoYW5kLlwiLFxuICAgIGltYWdlOiBzY3JlZW5zaG90RXhwZW5zZXMsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1lvZ2EnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJXZSBvbmx5IHNlbGwgb3VyIHNvZnR3YXJlIHRvIGNvbXBhbmllcyB3aG8gZG9uJ3QgZGVhbCB3aXRoIFZBVCBhdCBhbGwsIHNvIHRlY2huaWNhbGx5IHdlIGRvIGFsbCB0aGUgVkFUIHN0dWZmIHRoZXkgbmVlZC5cIixcbiAgICBpbWFnZTogc2NyZWVuc2hvdFZhdFJldHVybnMsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1NvdW5kJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdFYXNpbHkgZXhwb3J0IHlvdXIgZGF0YSBpbnRvIGFuIEV4Y2VsIHNwcmVhZHNoZWV0IHdoZXJlIHlvdSBjYW4gZG8gd2hhdGV2ZXIgdGhlIGhlbGwgeW91IHdhbnQgd2l0aCBpdC4nLFxuICAgIGltYWdlOiBzY3JlZW5zaG90UmVwb3J0aW5nLFxuICB9LFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gUHJpbWFyeUZlYXR1cmVzKCkge1xuICBsZXQgW3RhYk9yaWVudGF0aW9uLCBzZXRUYWJPcmllbnRhdGlvbl0gPSB1c2VTdGF0ZTwnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnPihcbiAgICAnaG9yaXpvbnRhbCcsXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBsZ01lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTAyNHB4KScpXG5cbiAgICBmdW5jdGlvbiBvbk1lZGlhUXVlcnlDaGFuZ2UoeyBtYXRjaGVzIH06IHsgbWF0Y2hlczogYm9vbGVhbiB9KSB7XG4gICAgICBzZXRUYWJPcmllbnRhdGlvbihtYXRjaGVzID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJylcbiAgICB9XG5cbiAgICBvbk1lZGlhUXVlcnlDaGFuZ2UobGdNZWRpYVF1ZXJ5KVxuICAgIGxnTWVkaWFRdWVyeS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBvbk1lZGlhUXVlcnlDaGFuZ2UpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbGdNZWRpYVF1ZXJ5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIG9uTWVkaWFRdWVyeUNoYW5nZSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIGlkPVwiZmVhdHVyZXNcIlxuICAgICAgYXJpYS1sYWJlbD1cIkZlYXR1cmVzIGZvciBydW5uaW5nIHlvdXIgYm9va3NcIlxuICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGJnLWJsdWUtNjAwIHBiLTI4IHB0LTIwIHNtOnB5LTMyXCJcbiAgICA+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0xLzIgdG9wLTEvMiBtYXgtdy1ub25lIHRyYW5zbGF0ZS14LVstNDQlXSB0cmFuc2xhdGUteS1bLTQyJV1cIlxuICAgICAgICBzcmM9e2JhY2tncm91bmRJbWFnZX1cbiAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgd2lkdGg9ezIyNDV9XG4gICAgICAgIGhlaWdodD17MTYzNn1cbiAgICAgICAgdW5vcHRpbWl6ZWRcbiAgICAgIC8+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctMnhsIG1kOm14LWF1dG8gbWQ6dGV4dC1jZW50ZXIgeGw6bWF4LXctbm9uZVwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWRpc3BsYXkgdGV4dC0zeGwgdHJhY2tpbmctdGlnaHQgdGV4dC13aGl0ZSBzbTp0ZXh0LTR4bCBtZDp0ZXh0LTV4bFwiPlxuICAgICAgICAgIEludGVncmF0aW5nIGFuY2llbnQgcHJhY3RpY2VzIHdpdGggPGJyIC8+XG4gICAgICAgICAgbW9kZXJuIHNjaWVudGlmaWMgZmluZGluZ3NcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTYgdGV4dC1sZyB0cmFja2luZy10aWdodCB0ZXh0LWJsdWUtMTAwXCI+XG4gICAgICAgICAgIE1hbnkgdG9vbHMsIG9uZSBwbGFjZSwgYWxsIHN1cHBvcnRlZCBieSBjbGluaWNhbCBldmlkZW5jZVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxUYWIuR3JvdXBcbiAgICAgICAgICBhcz1cImRpdlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtMTYgZ3JpZCBncmlkLWNvbHMtMSBpdGVtcy1jZW50ZXIgZ2FwLXktMiBwdC0xMCBzbTpnYXAteS02IG1kOm10LTIwIGxnOmdyaWQtY29scy0xMiBsZzpwdC0wXCJcbiAgICAgICAgICB2ZXJ0aWNhbD17dGFiT3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCd9XG4gICAgICAgID5cbiAgICAgICAgICB7KHsgc2VsZWN0ZWRJbmRleCB9KSA9PiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1teC00IGZsZXggb3ZlcmZsb3cteC1hdXRvIHBiLTQgc206bXgtMCBzbTpvdmVyZmxvdy12aXNpYmxlIHNtOnBiLTAgbGc6Y29sLXNwYW4tNVwiPlxuICAgICAgICAgICAgICAgIDxUYWIuTGlzdCBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIGZsZXggZ2FwLXgtNCB3aGl0ZXNwYWNlLW5vd3JhcCBweC00IHNtOm14LWF1dG8gc206cHgtMCBsZzpteC0wIGxnOmJsb2NrIGxnOmdhcC14LTAgbGc6Z2FwLXktMSBsZzp3aGl0ZXNwYWNlLW5vcm1hbFwiPlxuICAgICAgICAgICAgICAgICAge2ZlYXR1cmVzLm1hcCgoZmVhdHVyZSwgZmVhdHVyZUluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ZlYXR1cmUudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2dyb3VwIHJlbGF0aXZlIHJvdW5kZWQtZnVsbCBweC00IHB5LTEgbGc6cm91bmRlZC1sLXhsIGxnOnJvdW5kZWQtci1ub25lIGxnOnAtNicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4ID09PSBmZWF0dXJlSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctd2hpdGUgbGc6Ymctd2hpdGUvMTAgbGc6cmluZy0xIGxnOnJpbmctaW5zZXQgbGc6cmluZy13aGl0ZS8xMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnaG92ZXI6Ymctd2hpdGUvMTAgbGc6aG92ZXI6Ymctd2hpdGUvNScsXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmb250LWRpc3BsYXkgdGV4dC1sZyB1aS1ub3QtZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW5vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggPT09IGZlYXR1cmVJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAndGV4dC1ibHVlLTYwMCBsZzp0ZXh0LXdoaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndGV4dC1ibHVlLTEwMCBob3Zlcjp0ZXh0LXdoaXRlIGxnOnRleHQtd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHJvdW5kZWQtZnVsbCBsZzpyb3VuZGVkLWwteGwgbGc6cm91bmRlZC1yLW5vbmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmVhdHVyZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ210LTIgaGlkZGVuIHRleHQtc20gbGc6YmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4ID09PSBmZWF0dXJlSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICd0ZXh0LXdoaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3RleHQtYmx1ZS0xMDAgZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmZWF0dXJlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1RhYi5MaXN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFRhYi5QYW5lbHMgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tN1wiPlxuICAgICAgICAgICAgICAgIHtmZWF0dXJlcy5tYXAoKGZlYXR1cmUpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZWwga2V5PXtmZWF0dXJlLnRpdGxlfSB1bm1vdW50PXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgc206cHgtNiBsZzpoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC1pbnNldC14LTQgYm90dG9tLVstNC4yNXJlbV0gdG9wLVstNi41cmVtXSBiZy13aGl0ZS8xMCByaW5nLTEgcmluZy1pbnNldCByaW5nLXdoaXRlLzEwIHNtOmluc2V0LXgtMCBzbTpyb3VuZGVkLXQteGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJlbGF0aXZlIG14LWF1dG8gbWF4LXctMnhsIHRleHQtYmFzZSB0ZXh0LXdoaXRlIHNtOnRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmVhdHVyZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIHctWzQ1cmVtXSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC14bCBiZy1zbGF0ZS01MCBzaGFkb3cteGwgc2hhZG93LWJsdWUtOTAwLzIwIHNtOnctYXV0byBsZzptdC0wIGxnOnctWzY3LjgxMjVyZW1dXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtmZWF0dXJlLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplcz1cIihtaW4td2lkdGg6IDEwMjRweCkgNjcuODEyNXJlbSwgKG1pbi13aWR0aDogNjQwcHgpIDEwMHZ3LCA0NXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lbD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9UYWIuUGFuZWxzPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9UYWIuR3JvdXA+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiVGFiIiwiY2xzeCIsIkNvbnRhaW5lciIsImJhY2tncm91bmRJbWFnZSIsInNjcmVlbnNob3RFeHBlbnNlcyIsInNjcmVlbnNob3RQYXlyb2xsIiwic2NyZWVuc2hvdFJlcG9ydGluZyIsInNjcmVlbnNob3RWYXRSZXR1cm5zIiwiZmVhdHVyZXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJQcmltYXJ5RmVhdHVyZXMiLCJ0YWJPcmllbnRhdGlvbiIsInNldFRhYk9yaWVudGF0aW9uIiwibGdNZWRpYVF1ZXJ5Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm9uTWVkaWFRdWVyeUNoYW5nZSIsIm1hdGNoZXMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNlY3Rpb24iLCJpZCIsImFyaWEtbGFiZWwiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInVub3B0aW1pemVkIiwiZGl2IiwiaDIiLCJiciIsInAiLCJHcm91cCIsImFzIiwidmVydGljYWwiLCJzZWxlY3RlZEluZGV4IiwiTGlzdCIsIm1hcCIsImZlYXR1cmUiLCJmZWF0dXJlSW5kZXgiLCJoMyIsInNwYW4iLCJQYW5lbHMiLCJQYW5lbCIsInVubW91bnQiLCJwcmlvcml0eSIsInNpemVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/PrimaryFeatures.tsx\n"));

/***/ })

});