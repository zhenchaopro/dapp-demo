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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_zhenchao_workspace_imtoken_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_zhenchao_workspace_imtoken_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_zhenchao_workspace_imtoken_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_zhenchao_workspace_imtoken_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @geist-ui/react */ \"./node_modules/@geist-ui/react/esm/index.js\");\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3-react/injected-connector */ \"./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ \"./utils.ts\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/zhenchao/workspace/imtoken-demo/libs/connector.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_6__.InjectedConnector();\nvar BIG_NUBMER_ZERO = ethers__WEBPACK_IMPORTED_MODULE_10__.BigNumber.from(0);\n\nvar Connector = function Connector() {\n  _s();\n\n  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React)(),\n      activate = _useWeb3React.activate,\n      active = _useWeb3React.active,\n      account = _useWeb3React.account,\n      library = _useWeb3React.library,\n      deactivate = _useWeb3React.deactivate;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      isConnected = _useState[0],\n      setIsConncted = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(BIG_NUBMER_ZERO),\n      balance = _useState2[0],\n      setBalance = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    setIsConncted(active && !!account);\n  }, [active, account]);\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    if (account) {\n      library.getSigner().getBalance().then(function (b) {\n        return setBalance(function (_) {\n          return b;\n        });\n      });\n    }\n  }, [account, library]);\n\n  var connectWallet = /*#__PURE__*/function () {\n    var _ref = (0,_Users_zhenchao_workspace_imtoken_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_zhenchao_workspace_imtoken_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      return _Users_zhenchao_workspace_imtoken_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n\n              if (!active) {\n                _context.next = 3;\n                break;\n              }\n\n              return _context.abrupt(\"return\", alert('Already linked'));\n\n            case 3:\n              _context.next = 5;\n              return activate(injected, function (walletError) {\n                if (walletError.message.includes('user_canceled')) {\n                  return alert('Operation canceled, please refresh and try to reauthorize.');\n                }\n\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_9__.default.error(\"Failed to connect: \".concat(walletError.message));\n              });\n\n            case 5:\n              _context.next = 11;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n              react_hot_toast__WEBPACK_IMPORTED_MODULE_9__.default.error('Failed to connect Wallet.');\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function connectWallet() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var disconnect = function disconnect() {\n    setIsConncted(false);\n    deactivate();\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"jsx-1028140353\" + \" \" + 'header flex items-center',\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_9__.Toaster, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this), isConnected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"jsx-1028140353\" + \" \" + 'flex items-center',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-1028140353\" + \" \" + 'balance',\n        children: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.formatBalance)(balance)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_geist_ui_react__WEBPACK_IMPORTED_MODULE_5__.Snippet, {\n        type: \"success\",\n        style: {\n          margin: '0 12px'\n        },\n        symbol: \"\\u2666\",\n        children: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.formatEthAddress)(account)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_geist_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n        auto: true,\n        onClick: disconnect,\n        children: \"Disconnect\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_geist_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n      type: \"secondary-light\",\n      auto: true,\n      onClick: connectWallet,\n      children: \"Connect wallet\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default()), {\n      id: \"1028140353\",\n      children: \".header.jsx-1028140353{padding:16px;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.balance.jsx-1028140353{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96aGVuY2hhby93b3Jrc3BhY2UvaW10b2tlbi1kZW1vL2xpYnMvY29ubmVjdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RVMsQUFHMEIsQUFLTyxhQUpLLHlGQUtOLFFBSnJCLHFGQUtBIiwiZmlsZSI6Ii9Vc2Vycy96aGVuY2hhby93b3Jrc3BhY2UvaW10b2tlbi1kZW1vL2xpYnMvY29ubmVjdG9yLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTbmlwcGV0LCBHcmlkLCBCdXR0b24sIERlc2NyaXB0aW9uLCBTcGFjZXIsIFRleHQgfSBmcm9tICdAZ2Vpc3QtdWkvcmVhY3QnXG5pbXBvcnQgeyBJbmplY3RlZENvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvcidcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXG5pbXBvcnQgeyBXZWIzUHJvdmlkZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC9wcm92aWRlcnMnXG5pbXBvcnQgeyBmb3JtYXRCYWxhbmNlLCBmb3JtYXRFdGhBZGRyZXNzIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCdcbmltcG9ydCB7IEJpZ051bWJlciB9IGZyb20gJ2V0aGVycydcbmltcG9ydCB7IGRpc2Nvbm5lY3QgfSBmcm9tICdwcm9jZXNzJ1xuXG5jb25zdCBpbmplY3RlZCA9IG5ldyBJbmplY3RlZENvbm5lY3RvcigpXG5cbmNvbnN0IEJJR19OVUJNRVJfWkVSTyA9IEJpZ051bWJlci5mcm9tKDApXG5cbmNvbnN0IENvbm5lY3RvcjogUmVhY3QuRkM8dW5rbm93bj4gPSAoKSA9PiB7XG4gIGNvbnN0IHsgYWN0aXZhdGUsIGFjdGl2ZSwgYWNjb3VudCwgbGlicmFyeSwgZGVhY3RpdmF0ZSB9ID0gdXNlV2ViM1JlYWN0PFdlYjNQcm92aWRlcj4oKVxuICBjb25zdCBbaXNDb25uZWN0ZWQsIHNldElzQ29ubmN0ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlPEJpZ051bWJlcj4oQklHX05VQk1FUl9aRVJPKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNDb25uY3RlZChhY3RpdmUgJiYgISFhY2NvdW50KVxuICB9LCBbYWN0aXZlLCBhY2NvdW50XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhY2NvdW50KSB7XG4gICAgICBsaWJyYXJ5XG4gICAgICAgIC5nZXRTaWduZXIoKVxuICAgICAgICAuZ2V0QmFsYW5jZSgpXG4gICAgICAgIC50aGVuKGIgPT4gc2V0QmFsYW5jZShfID0+IGIpKVxuICAgIH1cbiAgfSwgW2FjY291bnQsIGxpYnJhcnldKVxuXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChhY3RpdmUpIHJldHVybiBhbGVydCgnQWxyZWFkeSBsaW5rZWQnKVxuICAgICAgYXdhaXQgYWN0aXZhdGUoaW5qZWN0ZWQsIHdhbGxldEVycm9yID0+IHtcbiAgICAgICAgaWYgKHdhbGxldEVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ3VzZXJfY2FuY2VsZWQnKSkge1xuICAgICAgICAgIHJldHVybiBhbGVydCgnT3BlcmF0aW9uIGNhbmNlbGVkLCBwbGVhc2UgcmVmcmVzaCBhbmQgdHJ5IHRvIHJlYXV0aG9yaXplLicpXG4gICAgICAgIH1cbiAgICAgICAgdG9hc3QuZXJyb3IoYEZhaWxlZCB0byBjb25uZWN0OiAke3dhbGxldEVycm9yLm1lc3NhZ2V9YClcbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICB0b2FzdC5lcnJvcignRmFpbGVkIHRvIGNvbm5lY3QgV2FsbGV0LicpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGlzY29ubmVjdCA9ICgpID0+IHtcbiAgICBzZXRJc0Nvbm5jdGVkKGZhbHNlKVxuICAgIGRlYWN0aXZhdGUoKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyIGZsZXggaXRlbXMtY2VudGVyJz5cbiAgICAgIDxUb2FzdGVyIC8+XG4gICAgICB7aXNDb25uZWN0ZWQgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JhbGFuY2UnPntmb3JtYXRCYWxhbmNlKGJhbGFuY2UpfTwvZGl2PlxuICAgICAgICAgIDxTbmlwcGV0IHR5cGU9J3N1Y2Nlc3MnIHN0eWxlPXt7IG1hcmdpbjogJzAgMTJweCcgfX0gc3ltYm9sPSfimaYnPlxuICAgICAgICAgICAge2Zvcm1hdEV0aEFkZHJlc3MoYWNjb3VudCl9XG4gICAgICAgICAgPC9TbmlwcGV0PlxuICAgICAgICAgIDxCdXR0b24gYXV0byBvbkNsaWNrPXtkaXNjb25uZWN0fT5cbiAgICAgICAgICAgIERpc2Nvbm5lY3RcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8QnV0dG9uIHR5cGU9J3NlY29uZGFyeS1saWdodCcgYXV0byBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fT5cbiAgICAgICAgICBDb25uZWN0IHdhbGxldFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJhbGFuY2Uge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdG9yXG4iXX0= */\\n/*@ sourceURL=/Users/zhenchao/workspace/imtoken-demo/libs/connector.tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Connector, \"HV9QEmGt0ffHn7z9/kLb7cP7Mj0=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_7__.useWeb3React];\n});\n\n_c = Connector;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Connector);\n\nvar _c;\n\n$RefreshReg$(_c, \"Connector\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGlicy9jb25uZWN0b3IudHN4PzIxMWYiXSwibmFtZXMiOlsiaW5qZWN0ZWQiLCJJbmplY3RlZENvbm5lY3RvciIsIkJJR19OVUJNRVJfWkVSTyIsIkJpZ051bWJlciIsIkNvbm5lY3RvciIsInVzZVdlYjNSZWFjdCIsImFjdGl2YXRlIiwiYWN0aXZlIiwiYWNjb3VudCIsImxpYnJhcnkiLCJkZWFjdGl2YXRlIiwidXNlU3RhdGUiLCJpc0Nvbm5lY3RlZCIsInNldElzQ29ubmN0ZWQiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsInVzZUVmZmVjdCIsImdldFNpZ25lciIsImdldEJhbGFuY2UiLCJ0aGVuIiwiYiIsIl8iLCJjb25uZWN0V2FsbGV0IiwiYWxlcnQiLCJ3YWxsZXRFcnJvciIsIm1lc3NhZ2UiLCJpbmNsdWRlcyIsInRvYXN0IiwiY29uc29sZSIsImxvZyIsImRpc2Nvbm5lY3QiLCJmb3JtYXRCYWxhbmNlIiwibWFyZ2luIiwiZm9ybWF0RXRoQWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFFBQVEsR0FBRyxJQUFJQyw2RUFBSixFQUFqQjtBQUVBLElBQU1DLGVBQWUsR0FBR0MsbURBQUEsQ0FBZSxDQUFmLENBQXhCOztBQUVBLElBQU1DLFNBQTRCLEdBQUcsU0FBL0JBLFNBQStCLEdBQU07QUFBQTs7QUFBQSxzQkFDa0JDLDhEQUFZLEVBRDlCO0FBQUEsTUFDakNDLFFBRGlDLGlCQUNqQ0EsUUFEaUM7QUFBQSxNQUN2QkMsTUFEdUIsaUJBQ3ZCQSxNQUR1QjtBQUFBLE1BQ2ZDLE9BRGUsaUJBQ2ZBLE9BRGU7QUFBQSxNQUNOQyxPQURNLGlCQUNOQSxPQURNO0FBQUEsTUFDR0MsVUFESCxpQkFDR0EsVUFESDs7QUFBQSxrQkFFSkMsK0NBQVEsQ0FBVSxLQUFWLENBRko7QUFBQSxNQUVsQ0MsV0FG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dCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTbmlwcGV0LCBHcmlkLCBCdXR0b24sIERlc2NyaXB0aW9uLCBTcGFjZXIsIFRleHQgfSBmcm9tICdAZ2Vpc3QtdWkvcmVhY3QnXG5pbXBvcnQgeyBJbmplY3RlZENvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvcidcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXG5pbXBvcnQgeyBXZWIzUHJvdmlkZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC9wcm92aWRlcnMnXG5pbXBvcnQgeyBmb3JtYXRCYWxhbmNlLCBmb3JtYXRFdGhBZGRyZXNzIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCdcbmltcG9ydCB7IEJpZ051bWJlciB9IGZyb20gJ2V0aGVycydcbmltcG9ydCB7IGRpc2Nvbm5lY3QgfSBmcm9tICdwcm9jZXNzJ1xuXG5jb25zdCBpbmplY3RlZCA9IG5ldyBJbmplY3RlZENvbm5lY3RvcigpXG5cbmNvbnN0IEJJR19OVUJNRVJfWkVSTyA9IEJpZ051bWJlci5mcm9tKDApXG5cbmNvbnN0IENvbm5lY3RvcjogUmVhY3QuRkM8dW5rbm93bj4gPSAoKSA9PiB7XG4gIGNvbnN0IHsgYWN0aXZhdGUsIGFjdGl2ZSwgYWNjb3VudCwgbGlicmFyeSwgZGVhY3RpdmF0ZSB9ID0gdXNlV2ViM1JlYWN0PFdlYjNQcm92aWRlcj4oKVxuICBjb25zdCBbaXNDb25uZWN0ZWQsIHNldElzQ29ubmN0ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlPEJpZ051bWJlcj4oQklHX05VQk1FUl9aRVJPKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNDb25uY3RlZChhY3RpdmUgJiYgISFhY2NvdW50KVxuICB9LCBbYWN0aXZlLCBhY2NvdW50XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhY2NvdW50KSB7XG4gICAgICBsaWJyYXJ5XG4gICAgICAgIC5nZXRTaWduZXIoKVxuICAgICAgICAuZ2V0QmFsYW5jZSgpXG4gICAgICAgIC50aGVuKGIgPT4gc2V0QmFsYW5jZShfID0+IGIpKVxuICAgIH1cbiAgfSwgW2FjY291bnQsIGxpYnJhcnldKVxuXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChhY3RpdmUpIHJldHVybiBhbGVydCgnQWxyZWFkeSBsaW5rZWQnKVxuICAgICAgYXdhaXQgYWN0aXZhdGUoaW5qZWN0ZWQsIHdhbGxldEVycm9yID0+IHtcbiAgICAgICAgaWYgKHdhbGxldEVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ3VzZXJfY2FuY2VsZWQnKSkge1xuICAgICAgICAgIHJldHVybiBhbGVydCgnT3BlcmF0aW9uIGNhbmNlbGVkLCBwbGVhc2UgcmVmcmVzaCBhbmQgdHJ5IHRvIHJlYXV0aG9yaXplLicpXG4gICAgICAgIH1cbiAgICAgICAgdG9hc3QuZXJyb3IoYEZhaWxlZCB0byBjb25uZWN0OiAke3dhbGxldEVycm9yLm1lc3NhZ2V9YClcbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICB0b2FzdC5lcnJvcignRmFpbGVkIHRvIGNvbm5lY3QgV2FsbGV0LicpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGlzY29ubmVjdCA9ICgpID0+IHtcbiAgICBzZXRJc0Nvbm5jdGVkKGZhbHNlKVxuICAgIGRlYWN0aXZhdGUoKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyIGZsZXggaXRlbXMtY2VudGVyJz5cbiAgICAgIDxUb2FzdGVyIC8+XG4gICAgICB7aXNDb25uZWN0ZWQgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JhbGFuY2UnPntmb3JtYXRCYWxhbmNlKGJhbGFuY2UpfTwvZGl2PlxuICAgICAgICAgIDxTbmlwcGV0IHR5cGU9J3N1Y2Nlc3MnIHN0eWxlPXt7IG1hcmdpbjogJzAgMTJweCcgfX0gc3ltYm9sPSfimaYnPlxuICAgICAgICAgICAge2Zvcm1hdEV0aEFkZHJlc3MoYWNjb3VudCl9XG4gICAgICAgICAgPC9TbmlwcGV0PlxuICAgICAgICAgIDxCdXR0b24gYXV0byBvbkNsaWNrPXtkaXNjb25uZWN0fT5cbiAgICAgICAgICAgIERpc2Nvbm5lY3RcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8QnV0dG9uIHR5cGU9J3NlY29uZGFyeS1saWdodCcgYXV0byBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fT5cbiAgICAgICAgICBDb25uZWN0IHdhbGxldFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJhbGFuY2Uge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdG9yXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libs/connector.tsx\n");

/***/ })

});