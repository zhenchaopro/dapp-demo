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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_zhenchao_workspace_imtoken_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_zhenchao_workspace_imtoken_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_zhenchao_workspace_imtoken_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_zhenchao_workspace_imtoken_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @geist-ui/react */ \"./node_modules/@geist-ui/react/esm/index.js\");\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3-react/injected-connector */ \"./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/zhenchao/workspace/imtoken-demo/libs/connector.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_6__.InjectedConnector({});\n\nvar Connector = function Connector() {\n  _s();\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React)(),\n      activate = _useWeb3React.activate,\n      active = _useWeb3React.active,\n      account = _useWeb3React.account,\n      deactivate = _useWeb3React.deactivate;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      isConnected = _useState[0],\n      setIsConncted = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    setIsConncted(active && !!account);\n  }, [active, account]);\n\n  var connectWallet = /*#__PURE__*/function () {\n    var _ref = (0,_Users_zhenchao_workspace_imtoken_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_zhenchao_workspace_imtoken_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      return _Users_zhenchao_workspace_imtoken_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n\n              if (!active) {\n                _context.next = 3;\n                break;\n              }\n\n              return _context.abrupt(\"return\", (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.default)('Already connected'));\n\n            case 3:\n              _context.next = 5;\n              return activate(injected, function (walletError) {\n                if (walletError.message.includes('user_canceled')) {\n                  return react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.default.error('Operation canceled, please refresh and try to reauthorize.');\n                }\n\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.default.error(\"Failed to connect: \".concat(walletError.message));\n              });\n\n            case 5:\n              _context.next = 11;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n              react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.default.error('Failed to connect Wallet.');\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function connectWallet() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var disconnect = function disconnect() {\n    setIsConncted(false);\n    deactivate(); // force a page refresh? \n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"jsx-3857235047\" + \" \" + 'header flex items-center',\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.Toaster, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this), isConnected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"jsx-3857235047\" + \" \" + 'flex items-center',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_geist_ui_react__WEBPACK_IMPORTED_MODULE_5__.Snippet, {\n        type: \"success\",\n        style: {\n          margin: '0 12px'\n        },\n        symbol: \"\\u2666\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"jsx-3857235047\",\n          children: account.slice(0, 4)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"jsx-3857235047\" + \" \" + 'hidden',\n          children: account.slice(4, -4)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"jsx-3857235047\" + \" \" + 'inline-flex mx-2',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            xmlns: \"http://www.w3.org/2000/svg\",\n            width: \"8\",\n            height: \"8\",\n            fill: \"currentColor\",\n            viewBox: \"0 0 16 16\",\n            className: \"jsx-3857235047\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n              d: \"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z\",\n              className: \"jsx-3857235047\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"jsx-3857235047\",\n          children: account.slice(-4)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }, _this)]\n      }, account, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_geist_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n        auto: true,\n        onClick: disconnect,\n        children: \"Disconnect\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_geist_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n      type: \"secondary-light\",\n      auto: true,\n      onClick: connectWallet,\n      children: \"Connect wallet\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default()), {\n      id: \"3857235047\",\n      children: \".header.jsx-3857235047{padding:16px;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96aGVuY2hhby93b3Jrc3BhY2UvaW10b2tlbi1kZW1vL2xpYnMvY29ubmVjdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRFMsQUFHMEIsYUFDWSxpR0FDM0IiLCJmaWxlIjoiL1VzZXJzL3poZW5jaGFvL3dvcmtzcGFjZS9pbXRva2VuLWRlbW8vbGlicy9jb25uZWN0b3IudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNuaXBwZXQsIEJ1dHRvbiB9IGZyb20gJ0BnZWlzdC11aS9yZWFjdCdcbmltcG9ydCB7IEluamVjdGVkQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yJ1xuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcbmltcG9ydCB7IFdlYjNQcm92aWRlciB9IGZyb20gJ0BldGhlcnNwcm9qZWN0L3Byb3ZpZGVycydcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSAncmVhY3QtaG90LXRvYXN0J1xuXG5jb25zdCBpbmplY3RlZCA9IG5ldyBJbmplY3RlZENvbm5lY3Rvcih7fSlcblxuY29uc3QgQ29ubmVjdG9yOiBSZWFjdC5GQzx1bmtub3duPiA9ICgpID0+IHtcbiAgY29uc3QgeyBhY3RpdmF0ZSwgYWN0aXZlLCBhY2NvdW50LCBkZWFjdGl2YXRlIH0gPSB1c2VXZWIzUmVhY3Q8V2ViM1Byb3ZpZGVyPigpXG4gIGNvbnN0IFtpc0Nvbm5lY3RlZCwgc2V0SXNDb25uY3RlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzQ29ubmN0ZWQoYWN0aXZlICYmICEhYWNjb3VudClcbiAgfSwgW2FjdGl2ZSwgYWNjb3VudF0pXG5cbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKGFjdGl2ZSkgcmV0dXJuIHRvYXN0KCdBbHJlYWR5IGNvbm5lY3RlZCcpXG4gICAgICBhd2FpdCBhY3RpdmF0ZShpbmplY3RlZCwgd2FsbGV0RXJyb3IgPT4ge1xuICAgICAgICBpZiAod2FsbGV0RXJyb3IubWVzc2FnZS5pbmNsdWRlcygndXNlcl9jYW5jZWxlZCcpKSB7XG4gICAgICAgICAgcmV0dXJuIHRvYXN0LmVycm9yKCdPcGVyYXRpb24gY2FuY2VsZWQsIHBsZWFzZSByZWZyZXNoIGFuZCB0cnkgdG8gcmVhdXRob3JpemUuJylcbiAgICAgICAgfVxuICAgICAgICB0b2FzdC5lcnJvcihgRmFpbGVkIHRvIGNvbm5lY3Q6ICR7d2FsbGV0RXJyb3IubWVzc2FnZX1gKVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgIHRvYXN0LmVycm9yKCdGYWlsZWQgdG8gY29ubmVjdCBXYWxsZXQuJylcbiAgICB9XG4gIH1cblxuICBjb25zdCBkaXNjb25uZWN0ID0gKCkgPT4ge1xuICAgIHNldElzQ29ubmN0ZWQoZmFsc2UpXG4gICAgZGVhY3RpdmF0ZSgpXG4gICAgLy8gZm9yY2UgYSBwYWdlIHJlZnJlc2g/IFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyIGZsZXggaXRlbXMtY2VudGVyJz5cbiAgICAgIDxUb2FzdGVyIC8+XG4gICAgICB7aXNDb25uZWN0ZWQgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgPFNuaXBwZXQgdHlwZT0nc3VjY2Vzcycga2V5PXthY2NvdW50fSBzdHlsZT17eyBtYXJnaW46ICcwIDEycHgnIH19IHN5bWJvbD0n4pmmJyA+XG4gICAgICAgICAgICA8c3Bhbj57YWNjb3VudC5zbGljZSgwLCA0KX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2hpZGRlbic+e2FjY291bnQuc2xpY2UoNCwgLTQpfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5saW5lLWZsZXggbXgtMic+XG4gICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiOFwiIGhlaWdodD1cIjhcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMyA5LjVhMS41IDEuNSAwIDEgMSAwLTMgMS41IDEuNSAwIDAgMSAwIDN6bTUgMGExLjUgMS41IDAgMSAxIDAtMyAxLjUgMS41IDAgMCAxIDAgM3ptNSAwYTEuNSAxLjUgMCAxIDEgMC0zIDEuNSAxLjUgMCAwIDEgMCAzelwiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+e2FjY291bnQuc2xpY2UoLTQpfTwvc3Bhbj5cbiAgICAgICAgICA8L1NuaXBwZXQ+XG4gICAgICAgICAgPEJ1dHRvbiBhdXRvIG9uQ2xpY2s9e2Rpc2Nvbm5lY3R9PlxuICAgICAgICAgICAgRGlzY29ubmVjdFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCdXR0b24gdHlwZT0nc2Vjb25kYXJ5LWxpZ2h0JyBhdXRvIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXR9PlxuICAgICAgICAgIENvbm5lY3Qgd2FsbGV0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RvclxuIl19 */\\n/*@ sourceURL=/Users/zhenchao/workspace/imtoken-demo/libs/connector.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Connector, \"azaKiMnM35x4vwg0wYVcTA5hZMg=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React];\n});\n\n_c = Connector;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Connector);\n\nvar _c;\n\n$RefreshReg$(_c, \"Connector\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGlicy9jb25uZWN0b3IudHN4PzIxMWYiXSwibmFtZXMiOlsiaW5qZWN0ZWQiLCJJbmplY3RlZENvbm5lY3RvciIsIkNvbm5lY3RvciIsInVzZVdlYjNSZWFjdCIsImFjdGl2YXRlIiwiYWN0aXZlIiwiYWNjb3VudCIsImRlYWN0aXZhdGUiLCJ1c2VTdGF0ZSIsImlzQ29ubmVjdGVkIiwic2V0SXNDb25uY3RlZCIsInVzZUVmZmVjdCIsImNvbm5lY3RXYWxsZXQiLCJ0b2FzdCIsIndhbGxldEVycm9yIiwibWVzc2FnZSIsImluY2x1ZGVzIiwiY29uc29sZSIsImxvZyIsImRpc2Nvbm5lY3QiLCJtYXJnaW4iLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxJQUFJQyw2RUFBSixDQUFzQixFQUF0QixDQUFqQjs7QUFFQSxJQUFNQyxTQUE0QixHQUFHLFNBQS9CQSxTQUErQixHQUFNO0FBQUE7O0FBQUEsc0JBQ1NDLDhEQUFZLEVBRHJCO0FBQUEsTUFDakNDLFFBRGlDLGlCQUNqQ0EsUUFEaUM7QUFBQSxNQUN2QkMsTUFEdUIsaUJBQ3ZCQSxNQUR1QjtBQUFBLE1BQ2ZDLE9BRGUsaUJBQ2ZBLE9BRGU7QUFBQSxNQUNOQyxVQURNLGlCQUNOQSxVQURNOztBQUFBLGtCQUVKQywrQ0FBUSxDQUFVLEtBQVYsQ0FGSjtBQUFBLE1BRWxDQyxXQUZrQztBQUFBLE1BRXJCQyxhQUZxQjs7QUFJekNDLGtEQUFTLENBQUMsWUFBTTtBQUNkRCxpQkFBYSxDQUFDTCxNQUFNLElBQUksQ0FBQyxDQUFDQyxPQUFiLENBQWI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0QsTUFBRCxFQUFTQyxPQUFULENBRk0sQ0FBVDs7QUFJQSxNQUFNTSxhQUFhO0FBQUEsK1JBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLG1CQUVkUCxNQUZjO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQUVDUSx3REFBSyxDQUFDLG1CQUFELENBRk47O0FBQUE7QUFBQTtBQUFBLHFCQUdaVCxRQUFRLENBQUNKLFFBQUQsRUFBVyxVQUFBYyxXQUFXLEVBQUk7QUFDdEMsb0JBQUlBLFdBQVcsQ0FBQ0MsT0FBWixDQUFvQkMsUUFBcEIsQ0FBNkIsZUFBN0IsQ0FBSixFQUFtRDtBQUNqRCx5QkFBT0gsMERBQUEsQ0FBWSw0REFBWixDQUFQO0FBQ0Q7O0FBQ0RBLDBFQUFBLDhCQUFrQ0MsV0FBVyxDQUFDQyxPQUE5QztBQUNELGVBTGEsQ0FISTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBVWxCRSxxQkFBTyxDQUFDQyxHQUFSO0FBQ0FMLHdFQUFBLENBQVksMkJBQVo7O0FBWGtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWJELGFBQWE7QUFBQTtBQUFBO0FBQUEsS0FBbkI7O0FBZUEsTUFBTU8sVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QlQsaUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDQUgsY0FBVSxHQUZhLENBR3ZCO0FBQ0QsR0FKRDs7QUFNQSxzQkFDRTtBQUFBLHdDQUFlLDBCQUFmO0FBQUEsNEJBQ0UsOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUdFLFdBQVcsZ0JBQ1Y7QUFBQSwwQ0FBZSxtQkFBZjtBQUFBLDhCQUNFLDhEQUFDLG9EQUFEO0FBQVMsWUFBSSxFQUFDLFNBQWQ7QUFBc0MsYUFBSyxFQUFFO0FBQUVXLGdCQUFNLEVBQUU7QUFBVixTQUE3QztBQUFtRSxjQUFNLEVBQUMsUUFBMUU7QUFBQSxnQ0FDRTtBQUFBO0FBQUEsb0JBQU9kLE9BQU8sQ0FBQ2UsS0FBUixDQUFjLENBQWQsRUFBaUIsQ0FBakI7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSw4Q0FBZ0IsUUFBaEI7QUFBQSxvQkFBMEJmLE9BQU8sQ0FBQ2UsS0FBUixDQUFjLENBQWQsRUFBaUIsQ0FBQyxDQUFsQjtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBQSw4Q0FBZ0Isa0JBQWhCO0FBQUEsaUNBQ0U7QUFBSyxpQkFBSyxFQUFDLDRCQUFYO0FBQXdDLGlCQUFLLEVBQUMsR0FBOUM7QUFBa0Qsa0JBQU0sRUFBQyxHQUF6RDtBQUE2RCxnQkFBSSxFQUFDLGNBQWxFO0FBQWlGLG1CQUFPLEVBQUMsV0FBekY7QUFBQTtBQUFBLG1DQUNFO0FBQU0sZUFBQyxFQUFDLCtIQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFRRTtBQUFBO0FBQUEsb0JBQU9mLE9BQU8sQ0FBQ2UsS0FBUixDQUFjLENBQUMsQ0FBZjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkY7QUFBQSxTQUE2QmYsT0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBV0UsOERBQUMsbURBQUQ7QUFBUSxZQUFJLE1BQVo7QUFBYSxlQUFPLEVBQUVhLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFUsZ0JBaUJWLDhEQUFDLG1EQUFEO0FBQVEsVUFBSSxFQUFDLGlCQUFiO0FBQStCLFVBQUksTUFBbkM7QUFBb0MsYUFBTyxFQUFFUCxhQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtDRCxDQS9ERDs7R0FBTVYsUztVQUM4Q0MsMEQ7OztLQUQ5Q0QsUztBQWlFTiwrREFBZUEsU0FBZiIsImZpbGUiOiIuL2xpYnMvY29ubmVjdG9yLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTbmlwcGV0LCBCdXR0b24gfSBmcm9tICdAZ2Vpc3QtdWkvcmVhY3QnXG5pbXBvcnQgeyBJbmplY3RlZENvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvcidcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXG5pbXBvcnQgeyBXZWIzUHJvdmlkZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC9wcm92aWRlcnMnXG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCdcblxuY29uc3QgaW5qZWN0ZWQgPSBuZXcgSW5qZWN0ZWRDb25uZWN0b3Ioe30pXG5cbmNvbnN0IENvbm5lY3RvcjogUmVhY3QuRkM8dW5rbm93bj4gPSAoKSA9PiB7XG4gIGNvbnN0IHsgYWN0aXZhdGUsIGFjdGl2ZSwgYWNjb3VudCwgZGVhY3RpdmF0ZSB9ID0gdXNlV2ViM1JlYWN0PFdlYjNQcm92aWRlcj4oKVxuICBjb25zdCBbaXNDb25uZWN0ZWQsIHNldElzQ29ubmN0ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0Nvbm5jdGVkKGFjdGl2ZSAmJiAhIWFjY291bnQpXG4gIH0sIFthY3RpdmUsIGFjY291bnRdKVxuXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChhY3RpdmUpIHJldHVybiB0b2FzdCgnQWxyZWFkeSBjb25uZWN0ZWQnKVxuICAgICAgYXdhaXQgYWN0aXZhdGUoaW5qZWN0ZWQsIHdhbGxldEVycm9yID0+IHtcbiAgICAgICAgaWYgKHdhbGxldEVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ3VzZXJfY2FuY2VsZWQnKSkge1xuICAgICAgICAgIHJldHVybiB0b2FzdC5lcnJvcignT3BlcmF0aW9uIGNhbmNlbGVkLCBwbGVhc2UgcmVmcmVzaCBhbmQgdHJ5IHRvIHJlYXV0aG9yaXplLicpXG4gICAgICAgIH1cbiAgICAgICAgdG9hc3QuZXJyb3IoYEZhaWxlZCB0byBjb25uZWN0OiAke3dhbGxldEVycm9yLm1lc3NhZ2V9YClcbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICB0b2FzdC5lcnJvcignRmFpbGVkIHRvIGNvbm5lY3QgV2FsbGV0LicpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGlzY29ubmVjdCA9ICgpID0+IHtcbiAgICBzZXRJc0Nvbm5jdGVkKGZhbHNlKVxuICAgIGRlYWN0aXZhdGUoKVxuICAgIC8vIGZvcmNlIGEgcGFnZSByZWZyZXNoPyBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlciBmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICA8VG9hc3RlciAvPlxuICAgICAge2lzQ29ubmVjdGVkID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgIDxTbmlwcGV0IHR5cGU9J3N1Y2Nlc3MnIGtleT17YWNjb3VudH0gc3R5bGU9e3sgbWFyZ2luOiAnMCAxMnB4JyB9fSBzeW1ib2w9J+KZpicgPlxuICAgICAgICAgICAgPHNwYW4+e2FjY291bnQuc2xpY2UoMCwgNCl9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdoaWRkZW4nPnthY2NvdW50LnNsaWNlKDQsIC00KX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1mbGV4IG14LTInPlxuICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjhcIiBoZWlnaHQ9XCI4XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMgOS41YTEuNSAxLjUgMCAxIDEgMC0zIDEuNSAxLjUgMCAwIDEgMCAzem01IDBhMS41IDEuNSAwIDEgMSAwLTMgMS41IDEuNSAwIDAgMSAwIDN6bTUgMGExLjUgMS41IDAgMSAxIDAtMyAxLjUgMS41IDAgMCAxIDAgM3pcIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPnthY2NvdW50LnNsaWNlKC00KX08L3NwYW4+XG4gICAgICAgICAgPC9TbmlwcGV0PlxuICAgICAgICAgIDxCdXR0b24gYXV0byBvbkNsaWNrPXtkaXNjb25uZWN0fT5cbiAgICAgICAgICAgIERpc2Nvbm5lY3RcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8QnV0dG9uIHR5cGU9J3NlY29uZGFyeS1saWdodCcgYXV0byBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fT5cbiAgICAgICAgICBDb25uZWN0IHdhbGxldFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0b3JcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./libs/connector.tsx\n");

/***/ })

});