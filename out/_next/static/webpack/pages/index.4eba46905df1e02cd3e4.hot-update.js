/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./constants.ts":
/*!**********************!*\
  !*** ./constants.ts ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BUILTIN_NETWORKS\": function() { return /* binding */ BUILTIN_NETWORKS; },\n/* harmony export */   \"CHAIN_ID_MAX\": function() { return /* binding */ CHAIN_ID_MAX; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar BUILTIN_NETWORKS = [{\n  chainId: 1,\n  chainName: 'Ethereum main network',\n  nativeCurrency: {\n    symbol: 'ETH',\n    decimals: 8\n  },\n  rpcUrls: ['https://mainnet.infura.io/v3/c4075c0c4d044d7ab858b17f97c6b209'],\n  blockExplorerUrls: ['https://etherscan.io']\n}, {\n  chainId: 5,\n  chainName: 'Goerli test network',\n  nativeCurrency: {\n    symbol: 'GeerliETH',\n    decimals: 18\n  },\n  rpcUrls: ['https://goerli.infura.io/v3/c4075c0c4d044d7ab858b17f97c6b209'],\n  blockExplorerUrls: ['https://goerli.etherscan.io']\n}, {\n  chainId: 56,\n  chainName: 'Binance Smart Chain',\n  nativeCurrency: {\n    symbol: 'BNB',\n    decimals: 8\n  },\n  rpcUrls: ['https://goerli.infura.io/v3/c4075c0c4d044d7ab858b17f97c6b209'],\n  blockExplorerUrls: ['https://goerli.etherscan.io']\n}, {\n  chainId: 57,\n  chainName: 'BSCCOPY',\n  nativeCurrency: {\n    symbol: 'BNB',\n    decimals: 8\n  },\n  rpcUrls: ['https://goerli.infura.io/v3/c4075c0c4d044d7ab858b17f97c6b209'],\n  blockExplorerUrls: ['https://goerli.etherscan.io']\n}, {\n  chainId: 10,\n  chainName: 'Optimism',\n  nativeCurrency: {\n    symbol: 'ETH',\n    decimals: 18\n  },\n  rpcUrls: ['https://mainnet.optimism.io/'],\n  blockExplorerUrls: ['https://optimistic.etherscan.io']\n}, {\n  chainId: 10899999,\n  chainName: 'NonExist Network',\n  nativeCurrency: {\n    symbol: 'NonExistNetwork',\n    decimals: 18\n  },\n  rpcUrls: ['https://mainnet.infura.io/v3/c4075c0c4d044d7ab858b17f97c6b209'],\n  blockExplorerUrls: ['https://etherscan.io/']\n}]; // TODO: get the exact definition of the chain ID\n// ??? https://github.com/ethereum/EIPs/issues/2294\n\nvar CHAIN_ID_MAX = 18446744073709551616; // 2^64\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzLnRzPzM3N2YiXSwibmFtZXMiOlsiQlVJTFRJTl9ORVRXT1JLUyIsImNoYWluSWQiLCJjaGFpbk5hbWUiLCJuYXRpdmVDdXJyZW5jeSIsInN5bWJvbCIsImRlY2ltYWxzIiwicnBjVXJscyIsImJsb2NrRXhwbG9yZXJVcmxzIiwiQ0hBSU5fSURfTUFYIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUEyQ08sSUFBTUEsZ0JBQWdCLEdBQUcsQ0FDOUI7QUFDRUMsU0FBTyxFQUFFLENBRFg7QUFFRUMsV0FBUyxFQUFFLHVCQUZiO0FBR0VDLGdCQUFjLEVBQUU7QUFDZEMsVUFBTSxFQUFFLEtBRE07QUFFZEMsWUFBUSxFQUFFO0FBRkksR0FIbEI7QUFPRUMsU0FBTyxFQUFFLENBQUMsK0RBQUQsQ0FQWDtBQVFFQyxtQkFBaUIsRUFBRSxDQUFDLHNCQUFEO0FBUnJCLENBRDhCLEVBVzlCO0FBQ0VOLFNBQU8sRUFBRSxDQURYO0FBRUVDLFdBQVMsRUFBRSxxQkFGYjtBQUdFQyxnQkFBYyxFQUFFO0FBQ2RDLFVBQU0sRUFBRSxXQURNO0FBRWRDLFlBQVEsRUFBRTtBQUZJLEdBSGxCO0FBT0VDLFNBQU8sRUFBRSxDQUFDLDhEQUFELENBUFg7QUFRRUMsbUJBQWlCLEVBQUUsQ0FBQyw2QkFBRDtBQVJyQixDQVg4QixFQXFCOUI7QUFDRU4sU0FBTyxFQUFFLEVBRFg7QUFFRUMsV0FBUyxFQUFFLHFCQUZiO0FBR0VDLGdCQUFjLEVBQUU7QUFDZEMsVUFBTSxFQUFFLEtBRE07QUFFZEMsWUFBUSxFQUFFO0FBRkksR0FIbEI7QUFPRUMsU0FBTyxFQUFFLENBQUMsOERBQUQsQ0FQWDtBQVFFQyxtQkFBaUIsRUFBRSxDQUFDLDZCQUFEO0FBUnJCLENBckI4QixFQStCOUI7QUFDRU4sU0FBTyxFQUFFLEVBRFg7QUFFRUMsV0FBUyxFQUFFLFNBRmI7QUFHRUMsZ0JBQWMsRUFBRTtBQUNkQyxVQUFNLEVBQUUsS0FETTtBQUVkQyxZQUFRLEVBQUU7QUFGSSxHQUhsQjtBQU9FQyxTQUFPLEVBQUUsQ0FBQyw4REFBRCxDQVBYO0FBUUVDLG1CQUFpQixFQUFFLENBQUMsNkJBQUQ7QUFSckIsQ0EvQjhCLEVBeUM5QjtBQUNFTixTQUFPLEVBQUUsRUFEWDtBQUVFQyxXQUFTLEVBQUUsVUFGYjtBQUdFQyxnQkFBYyxFQUFFO0FBQ2RDLFVBQU0sRUFBRSxLQURNO0FBRWRDLFlBQVEsRUFBRTtBQUZJLEdBSGxCO0FBT0VDLFNBQU8sRUFBRSxDQUFDLDhCQUFELENBUFg7QUFRRUMsbUJBQWlCLEVBQUUsQ0FBQyxpQ0FBRDtBQVJyQixDQXpDOEIsRUFtRDlCO0FBQ0VOLFNBQU8sRUFBRSxRQURYO0FBRUVDLFdBQVMsRUFBRSxrQkFGYjtBQUdFQyxnQkFBYyxFQUFFO0FBQ2RDLFVBQU0sRUFBRSxpQkFETTtBQUVkQyxZQUFRLEVBQUU7QUFGSSxHQUhsQjtBQU9FQyxTQUFPLEVBQUUsQ0FBQywrREFBRCxDQVBYO0FBUUVDLG1CQUFpQixFQUFFLENBQUMsdUJBQUQ7QUFSckIsQ0FuRDhCLENBQXpCLEMsQ0ErRFA7QUFDQTs7QUFDTyxJQUFNQyxZQUFZLEdBQUcsb0JBQXJCLEMsQ0FBMkMiLCJmaWxlIjoiLi9jb25zdGFudHMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCaWdOdW1iZXIgfSBmcm9tIFwiZXRoZXJzXCJcbmltcG9ydCB7IFRyYW5zYWN0aW9uUmVzcG9uc2UgfSBmcm9tICdAZXRoZXJzcHJvamVjdC9hYnN0cmFjdC1wcm92aWRlcidcblxuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVDdXJyZW5jeSB7XG4gIG5hbWU/OiBzdHJpbmdcbiAgc3ltYm9sOiBzdHJpbmdcbiAgZGVjaW1hbHM/OiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrIHtcbiAgY2hhaW5JZDogbnVtYmVyXG4gIGNoYWluTmFtZTogc3RyaW5nXG4gIG5hdGl2ZUN1cnJlbmN5OiBOYXRpdmVDdXJyZW5jeVxuICBycGNVcmxzOiBzdHJpbmdbXVxuICBibG9ja0V4cGxvcmVyVXJsczogc3RyaW5nW11cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrcyB7XG4gIFtrZXk6IG51bWJlcl06IGFueVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYWluSW5mbyB7XG4gIGNoYWluSWQ6IHN0cmluZyxcbiAgY2hhaW5OYW1lOiBzdHJpbmdcbiAgbmF0aXZlQ3VycmVuY3k6IE5hdGl2ZUN1cnJlbmN5XG4gIHJwY1VybHM6IHN0cmluZ1tdXG4gIGJsb2NrRXhwbG9yZXJVcmxzOiBzdHJpbmdbXVxufVxuXG5leHBvcnQgdHlwZSBJbVRva2VuVHJhbnNhY3Rpb25QYXlsb2FkID0ge1xuICBmcm9tOiBzdHJpbmcsXG4gIHRvOiBzdHJpbmcsXG4gIHZhbHVlOiBCaWdOdW1iZXIsXG4gIG5vbmNlOiBzdHJpbmcsXG4gIG1heEZlZVBlckdhczogQmlnTnVtYmVyLFxuICBtYXhQcmlvcml0eUZlZVBlckdhczogQmlnTnVtYmVyLFxuICBnYXNMaW1pdDogQmlnTnVtYmVyLFxuICBoYXNoPzogc3RyaW5nLFxufVxuXG5cbmV4cG9ydCB0eXBlIFBlbmRpbmdUcmFuc2FjdGlvbiA9IFRyYW5zYWN0aW9uUmVzcG9uc2UgfCBJbVRva2VuVHJhbnNhY3Rpb25QYXlsb2FkXG5cbmV4cG9ydCBjb25zdCBCVUlMVElOX05FVFdPUktTID0gW1xuICB7XG4gICAgY2hhaW5JZDogMSxcbiAgICBjaGFpbk5hbWU6ICdFdGhlcmV1bSBtYWluIG5ldHdvcmsnLFxuICAgIG5hdGl2ZUN1cnJlbmN5OiB7XG4gICAgICBzeW1ib2w6ICdFVEgnLFxuICAgICAgZGVjaW1hbHM6IDgsXG4gICAgfSxcbiAgICBycGNVcmxzOiBbJ2h0dHBzOi8vbWFpbm5ldC5pbmZ1cmEuaW8vdjMvYzQwNzVjMGM0ZDA0NGQ3YWI4NThiMTdmOTdjNmIyMDknXSxcbiAgICBibG9ja0V4cGxvcmVyVXJsczogWydodHRwczovL2V0aGVyc2Nhbi5pbyddLFxuICB9LFxuICB7XG4gICAgY2hhaW5JZDogNSxcbiAgICBjaGFpbk5hbWU6ICdHb2VybGkgdGVzdCBuZXR3b3JrJyxcbiAgICBuYXRpdmVDdXJyZW5jeToge1xuICAgICAgc3ltYm9sOiAnR2VlcmxpRVRIJyxcbiAgICAgIGRlY2ltYWxzOiAxOCxcbiAgICB9LFxuICAgIHJwY1VybHM6IFsnaHR0cHM6Ly9nb2VybGkuaW5mdXJhLmlvL3YzL2M0MDc1YzBjNGQwNDRkN2FiODU4YjE3Zjk3YzZiMjA5J10sXG4gICAgYmxvY2tFeHBsb3JlclVybHM6IFsnaHR0cHM6Ly9nb2VybGkuZXRoZXJzY2FuLmlvJ10sXG4gIH0sXG4gIHtcbiAgICBjaGFpbklkOiA1NixcbiAgICBjaGFpbk5hbWU6ICdCaW5hbmNlIFNtYXJ0IENoYWluJyxcbiAgICBuYXRpdmVDdXJyZW5jeToge1xuICAgICAgc3ltYm9sOiAnQk5CJyxcbiAgICAgIGRlY2ltYWxzOiA4LFxuICAgIH0sXG4gICAgcnBjVXJsczogWydodHRwczovL2dvZXJsaS5pbmZ1cmEuaW8vdjMvYzQwNzVjMGM0ZDA0NGQ3YWI4NThiMTdmOTdjNmIyMDknXSxcbiAgICBibG9ja0V4cGxvcmVyVXJsczogWydodHRwczovL2dvZXJsaS5ldGhlcnNjYW4uaW8nXSxcbiAgfSxcbiAge1xuICAgIGNoYWluSWQ6IDU3LFxuICAgIGNoYWluTmFtZTogJ0JTQ0NPUFknLFxuICAgIG5hdGl2ZUN1cnJlbmN5OiB7XG4gICAgICBzeW1ib2w6ICdCTkInLFxuICAgICAgZGVjaW1hbHM6IDgsXG4gICAgfSxcbiAgICBycGNVcmxzOiBbJ2h0dHBzOi8vZ29lcmxpLmluZnVyYS5pby92My9jNDA3NWMwYzRkMDQ0ZDdhYjg1OGIxN2Y5N2M2YjIwOSddLFxuICAgIGJsb2NrRXhwbG9yZXJVcmxzOiBbJ2h0dHBzOi8vZ29lcmxpLmV0aGVyc2Nhbi5pbyddLFxuICB9LFxuICB7XG4gICAgY2hhaW5JZDogMTAsXG4gICAgY2hhaW5OYW1lOiAnT3B0aW1pc20nLFxuICAgIG5hdGl2ZUN1cnJlbmN5OiB7XG4gICAgICBzeW1ib2w6ICdFVEgnLFxuICAgICAgZGVjaW1hbHM6IDE4LFxuICAgIH0sXG4gICAgcnBjVXJsczogWydodHRwczovL21haW5uZXQub3B0aW1pc20uaW8vJ10sXG4gICAgYmxvY2tFeHBsb3JlclVybHM6IFsnaHR0cHM6Ly9vcHRpbWlzdGljLmV0aGVyc2Nhbi5pbyddLFxuICB9LFxuICB7XG4gICAgY2hhaW5JZDogMTA4OTk5OTksXG4gICAgY2hhaW5OYW1lOiAnTm9uRXhpc3QgTmV0d29yaycsXG4gICAgbmF0aXZlQ3VycmVuY3k6IHtcbiAgICAgIHN5bWJvbDogJ05vbkV4aXN0TmV0d29yaycsXG4gICAgICBkZWNpbWFsczogMTgsXG4gICAgfSxcbiAgICBycGNVcmxzOiBbJ2h0dHBzOi8vbWFpbm5ldC5pbmZ1cmEuaW8vdjMvYzQwNzVjMGM0ZDA0NGQ3YWI4NThiMTdmOTdjNmIyMDknXSxcbiAgICBibG9ja0V4cGxvcmVyVXJsczogWydodHRwczovL2V0aGVyc2Nhbi5pby8nXSxcbiAgfSxcbl1cblxuLy8gVE9ETzogZ2V0IHRoZSBleGFjdCBkZWZpbml0aW9uIG9mIHRoZSBjaGFpbiBJRFxuLy8gPz8/IGh0dHBzOi8vZ2l0aHViLmNvbS9ldGhlcmV1bS9FSVBzL2lzc3Vlcy8yMjk0XG5leHBvcnQgY29uc3QgQ0hBSU5fSURfTUFYID0gMTg0NDY3NDQwNzM3MDk1NTE2MTY7IC8vIDJeNjRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./constants.ts\n");

/***/ })

});