/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./libs/connector.tsx":
/*!****************************!*\
  !*** ./libs/connector.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_zhenchao_workspace_imtoken_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_zhenchao_workspace_imtoken_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_zhenchao_workspace_imtoken_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_zhenchao_workspace_imtoken_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @geist-ui/react */ \"./node_modules/@geist-ui/react/esm/index.js\");\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3-react/injected-connector */ \"./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/zhenchao/workspace/imtoken-demo/libs/connector.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_6__.InjectedConnector({});\n\nvar Connector = function Connector() {\n  _s();\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React)(),\n      activate = _useWeb3React.activate,\n      active = _useWeb3React.active,\n      account = _useWeb3React.account,\n      library = _useWeb3React.library,\n      deactivate = _useWeb3React.deactivate;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      isConnected = _useState[0],\n      setIsConncted = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    setIsConncted(active && !!account);\n  }, [active, account]);\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    console.log(\"account changed\");\n  }, [account]);\n\n  var connectWallet = /*#__PURE__*/function () {\n    var _ref = (0,_Users_zhenchao_workspace_imtoken_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_zhenchao_workspace_imtoken_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      return _Users_zhenchao_workspace_imtoken_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n\n              if (!active) {\n                _context.next = 3;\n                break;\n              }\n\n              return _context.abrupt(\"return\", (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.default)('Already connected'));\n\n            case 3:\n              _context.next = 5;\n              return activate(injected, function (walletError) {\n                if (walletError.message.includes('user_canceled')) {\n                  return react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.default.error('Operation canceled, please refresh and try to reauthorize.');\n                }\n\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.default.error(\"Failed to connect: \".concat(walletError.message));\n              });\n\n            case 5:\n              _context.next = 11;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n              react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.default.error('Failed to connect Wallet.');\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function connectWallet() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var disconnect = function disconnect() {\n    setIsConncted(false);\n    deactivate();\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"jsx-3857235047\" + \" \" + 'header flex items-center',\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.Toaster, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this), isConnected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"jsx-3857235047\" + \" \" + 'flex items-center',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_geist_ui_react__WEBPACK_IMPORTED_MODULE_5__.Snippet, {\n        type: \"success\",\n        style: {\n          margin: '0 12px'\n        },\n        symbol: \"\\u2666\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"jsx-3857235047\",\n          children: account.slice(0, 4)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"jsx-3857235047\" + \" \" + 'hidden',\n          children: account.slice(4, -4)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"jsx-3857235047\" + \" \" + 'inline-flex mx-2',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            xmlns: \"http://www.w3.org/2000/svg\",\n            width: \"8\",\n            height: \"8\",\n            fill: \"currentColor\",\n            viewBox: \"0 0 16 16\",\n            className: \"jsx-3857235047\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n              d: \"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z\",\n              className: \"jsx-3857235047\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"jsx-3857235047\",\n          children: account.slice(-4)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_geist_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n        auto: true,\n        onClick: disconnect,\n        children: \"Disconnect\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_geist_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n      type: \"secondary-light\",\n      auto: true,\n      onClick: connectWallet,\n      children: \"Connect wallet\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default()), {\n      id: \"3857235047\",\n      children: \".header.jsx-3857235047{padding:16px;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96aGVuY2hhby93b3Jrc3BhY2UvaW10b2tlbi1kZW1vL2xpYnMvY29ubmVjdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRVMsQUFHMEIsYUFDWSxpR0FDM0IiLCJmaWxlIjoiL1VzZXJzL3poZW5jaGFvL3dvcmtzcGFjZS9pbXRva2VuLWRlbW8vbGlicy9jb25uZWN0b3IudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNuaXBwZXQsIEJ1dHRvbiB9IGZyb20gJ0BnZWlzdC11aS9yZWFjdCdcbmltcG9ydCB7IEluamVjdGVkQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yJ1xuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcbmltcG9ydCB7IFdlYjNQcm92aWRlciB9IGZyb20gJ0BldGhlcnNwcm9qZWN0L3Byb3ZpZGVycydcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSAncmVhY3QtaG90LXRvYXN0J1xuaW1wb3J0IHsgQmlnTnVtYmVyIH0gZnJvbSAnZXRoZXJzJ1xuXG5jb25zdCBpbmplY3RlZCA9IG5ldyBJbmplY3RlZENvbm5lY3Rvcih7fSlcblxuY29uc3QgQ29ubmVjdG9yOiBSZWFjdC5GQzx1bmtub3duPiA9ICgpID0+IHtcbiAgY29uc3QgeyBhY3RpdmF0ZSwgYWN0aXZlLCBhY2NvdW50LCBsaWJyYXJ5LCBkZWFjdGl2YXRlIH0gPSB1c2VXZWIzUmVhY3Q8V2ViM1Byb3ZpZGVyPigpXG4gIGNvbnN0IFtpc0Nvbm5lY3RlZCwgc2V0SXNDb25uY3RlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzQ29ubmN0ZWQoYWN0aXZlICYmICEhYWNjb3VudClcbiAgfSwgW2FjdGl2ZSwgYWNjb3VudF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImFjY291bnQgY2hhbmdlZFwiKVxuICB9LCBbYWNjb3VudF0pXG5cbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKGFjdGl2ZSkgcmV0dXJuIHRvYXN0KCdBbHJlYWR5IGNvbm5lY3RlZCcpXG4gICAgICBhd2FpdCBhY3RpdmF0ZShpbmplY3RlZCwgd2FsbGV0RXJyb3IgPT4ge1xuICAgICAgICBpZiAod2FsbGV0RXJyb3IubWVzc2FnZS5pbmNsdWRlcygndXNlcl9jYW5jZWxlZCcpKSB7XG4gICAgICAgICAgcmV0dXJuIHRvYXN0LmVycm9yKCdPcGVyYXRpb24gY2FuY2VsZWQsIHBsZWFzZSByZWZyZXNoIGFuZCB0cnkgdG8gcmVhdXRob3JpemUuJylcbiAgICAgICAgfVxuICAgICAgICB0b2FzdC5lcnJvcihgRmFpbGVkIHRvIGNvbm5lY3Q6ICR7d2FsbGV0RXJyb3IubWVzc2FnZX1gKVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgIHRvYXN0LmVycm9yKCdGYWlsZWQgdG8gY29ubmVjdCBXYWxsZXQuJylcbiAgICB9XG4gIH1cblxuICBjb25zdCBkaXNjb25uZWN0ID0gKCkgPT4ge1xuICAgIHNldElzQ29ubmN0ZWQoZmFsc2UpXG4gICAgZGVhY3RpdmF0ZSgpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXIgZmxleCBpdGVtcy1jZW50ZXInPlxuICAgICAgPFRvYXN0ZXIgLz5cbiAgICAgIHtpc0Nvbm5lY3RlZCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICA8U25pcHBldCB0eXBlPSdzdWNjZXNzJyBzdHlsZT17eyBtYXJnaW46ICcwIDEycHgnIH19IHN5bWJvbD0n4pmmJyA+XG4gICAgICAgICAgICA8c3Bhbj57YWNjb3VudC5zbGljZSgwLCA0KX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2hpZGRlbic+e2FjY291bnQuc2xpY2UoNCwgLTQpfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5saW5lLWZsZXggbXgtMic+XG4gICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiOFwiIGhlaWdodD1cIjhcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMyA5LjVhMS41IDEuNSAwIDEgMSAwLTMgMS41IDEuNSAwIDAgMSAwIDN6bTUgMGExLjUgMS41IDAgMSAxIDAtMyAxLjUgMS41IDAgMCAxIDAgM3ptNSAwYTEuNSAxLjUgMCAxIDEgMC0zIDEuNSAxLjUgMCAwIDEgMCAzelwiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+e2FjY291bnQuc2xpY2UoLTQpfTwvc3Bhbj5cbiAgICAgICAgICA8L1NuaXBwZXQ+XG4gICAgICAgICAgPEJ1dHRvbiBhdXRvIG9uQ2xpY2s9e2Rpc2Nvbm5lY3R9PlxuICAgICAgICAgICAgRGlzY29ubmVjdFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCdXR0b24gdHlwZT0nc2Vjb25kYXJ5LWxpZ2h0JyBhdXRvIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXR9PlxuICAgICAgICAgIENvbm5lY3Qgd2FsbGV0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RvclxuIl19 */\\n/*@ sourceURL=/Users/zhenchao/workspace/imtoken-demo/libs/connector.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Connector, \"WGrpy59wP6wJivLj2StuEqOhunw=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React];\n});\n\n_c = Connector;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Connector);\n\nvar _c;\n\n$RefreshReg$(_c, \"Connector\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGlicy9jb25uZWN0b3IudHN4PzIxMWYiXSwibmFtZXMiOlsiaW5qZWN0ZWQiLCJJbmplY3RlZENvbm5lY3RvciIsIkNvbm5lY3RvciIsInVzZVdlYjNSZWFjdCIsImFjdGl2YXRlIiwiYWN0aXZlIiwiYWNjb3VudCIsImxpYnJhcnkiLCJkZWFjdGl2YXRlIiwidXNlU3RhdGUiLCJpc0Nvbm5lY3RlZCIsInNldElzQ29ubmN0ZWQiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdFdhbGxldCIsInRvYXN0Iiwid2FsbGV0RXJyb3IiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJkaXNjb25uZWN0IiwibWFyZ2luIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQSxJQUFNQSxRQUFRLEdBQUcsSUFBSUMsNkVBQUosQ0FBc0IsRUFBdEIsQ0FBakI7O0FBRUEsSUFBTUMsU0FBNEIsR0FBRyxTQUEvQkEsU0FBK0IsR0FBTTtBQUFBOztBQUFBLHNCQUNrQkMsOERBQVksRUFEOUI7QUFBQSxNQUNqQ0MsUUFEaUMsaUJBQ2pDQSxRQURpQztBQUFBLE1BQ3ZCQyxNQUR1QixpQkFDdkJBLE1BRHVCO0FBQUEsTUFDZkMsT0FEZSxpQkFDZkEsT0FEZTtBQUFBLE1BQ05DLE9BRE0saUJBQ05BLE9BRE07QUFBQSxNQUNHQyxVQURILGlCQUNHQSxVQURIOztBQUFBLGtCQUVKQywrQ0FBUSxDQUFVLEtBQVYsQ0FGSjtBQUFBLE1BRWxDQyxXQUZrQztBQUFBLE1BRXJCQyxhQUZxQjs7QUFJekNDLGtEQUFTLENBQUMsWUFBTTtBQUNkRCxpQkFBYSxDQUFDTixNQUFNLElBQUksQ0FBQyxDQUFDQyxPQUFiLENBQWI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0QsTUFBRCxFQUFTQyxPQUFULENBRk0sQ0FBVDtBQUlBTSxrREFBUyxDQUFDLFlBQU07QUFDZEMsV0FB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LFNBQWYiLCJmaWxlIjoiLi9saWJzL2Nvbm5lY3Rvci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU25pcHBldCwgQnV0dG9uIH0gZnJvbSAnQGdlaXN0LXVpL3JlYWN0J1xuaW1wb3J0IHsgSW5qZWN0ZWRDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3InXG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xuaW1wb3J0IHsgV2ViM1Byb3ZpZGVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvcHJvdmlkZXJzJ1xuaW1wb3J0IHRvYXN0LCB7IFRvYXN0ZXIgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnXG5pbXBvcnQgeyBCaWdOdW1iZXIgfSBmcm9tICdldGhlcnMnXG5cbmNvbnN0IGluamVjdGVkID0gbmV3IEluamVjdGVkQ29ubmVjdG9yKHt9KVxuXG5jb25zdCBDb25uZWN0b3I6IFJlYWN0LkZDPHVua25vd24+ID0gKCkgPT4ge1xuICBjb25zdCB7IGFjdGl2YXRlLCBhY3RpdmUsIGFjY291bnQsIGxpYnJhcnksIGRlYWN0aXZhdGUgfSA9IHVzZVdlYjNSZWFjdDxXZWIzUHJvdmlkZXI+KClcbiAgY29uc3QgW2lzQ29ubmVjdGVkLCBzZXRJc0Nvbm5jdGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNDb25uY3RlZChhY3RpdmUgJiYgISFhY2NvdW50KVxuICB9LCBbYWN0aXZlLCBhY2NvdW50XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiYWNjb3VudCBjaGFuZ2VkXCIpXG4gIH0sIFthY2NvdW50XSlcblxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoYWN0aXZlKSByZXR1cm4gdG9hc3QoJ0FscmVhZHkgY29ubmVjdGVkJylcbiAgICAgIGF3YWl0IGFjdGl2YXRlKGluamVjdGVkLCB3YWxsZXRFcnJvciA9PiB7XG4gICAgICAgIGlmICh3YWxsZXRFcnJvci5tZXNzYWdlLmluY2x1ZGVzKCd1c2VyX2NhbmNlbGVkJykpIHtcbiAgICAgICAgICByZXR1cm4gdG9hc3QuZXJyb3IoJ09wZXJhdGlvbiBjYW5jZWxlZCwgcGxlYXNlIHJlZnJlc2ggYW5kIHRyeSB0byByZWF1dGhvcml6ZS4nKVxuICAgICAgICB9XG4gICAgICAgIHRvYXN0LmVycm9yKGBGYWlsZWQgdG8gY29ubmVjdDogJHt3YWxsZXRFcnJvci5tZXNzYWdlfWApXG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgdG9hc3QuZXJyb3IoJ0ZhaWxlZCB0byBjb25uZWN0IFdhbGxldC4nKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRpc2Nvbm5lY3QgPSAoKSA9PiB7XG4gICAgc2V0SXNDb25uY3RlZChmYWxzZSlcbiAgICBkZWFjdGl2YXRlKClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlciBmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICA8VG9hc3RlciAvPlxuICAgICAge2lzQ29ubmVjdGVkID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgIDxTbmlwcGV0IHR5cGU9J3N1Y2Nlc3MnIHN0eWxlPXt7IG1hcmdpbjogJzAgMTJweCcgfX0gc3ltYm9sPSfimaYnID5cbiAgICAgICAgICAgIDxzcGFuPnthY2NvdW50LnNsaWNlKDAsIDQpfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naGlkZGVuJz57YWNjb3VudC5zbGljZSg0LCAtNCl9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbmxpbmUtZmxleCBteC0yJz5cbiAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI4XCIgaGVpZ2h0PVwiOFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zIDkuNWExLjUgMS41IDAgMSAxIDAtMyAxLjUgMS41IDAgMCAxIDAgM3ptNSAwYTEuNSAxLjUgMCAxIDEgMC0zIDEuNSAxLjUgMCAwIDEgMCAzem01IDBhMS41IDEuNSAwIDEgMSAwLTMgMS41IDEuNSAwIDAgMSAwIDN6XCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj57YWNjb3VudC5zbGljZSgtNCl9PC9zcGFuPlxuICAgICAgICAgIDwvU25pcHBldD5cbiAgICAgICAgICA8QnV0dG9uIGF1dG8gb25DbGljaz17ZGlzY29ubmVjdH0+XG4gICAgICAgICAgICBEaXNjb25uZWN0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPEJ1dHRvbiB0eXBlPSdzZWNvbmRhcnktbGlnaHQnIGF1dG8gb25DbGljaz17Y29ubmVjdFdhbGxldH0+XG4gICAgICAgICAgQ29ubmVjdCB3YWxsZXRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdG9yXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libs/connector.tsx\n");

/***/ })

});