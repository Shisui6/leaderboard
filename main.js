/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* All */\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Sono', sans-serif;\\r\\n}\\r\\n\\r\\n/* Body */\\r\\nbody {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 50px;\\r\\n  text-align: center;\\r\\n  position: absolute;\\r\\n  width: 100%;\\r\\n  padding-left: 25px;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  font-size: 25px;\\r\\n}\\r\\n\\r\\n.white {\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.copy {\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.black {\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n/* Main grid */\\r\\n.score-cont {\\r\\n  display: grid;\\r\\n  height: 100vh;\\r\\n  grid-template-columns: 1fr 1fr;\\r\\n  padding: 127px 80px 0;\\r\\n  gap: 100px;\\r\\n  background:\\r\\n    linear-gradient(\\r\\n      to right,\\r\\n      #1e0253 0%,\\r\\n      #631447 50%,\\r\\n      #fff 50%,\\r\\n      #fff 100%\\r\\n    );\\r\\n}\\r\\n\\r\\n/* Leaderboard Section */\\r\\n.score-header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#refresh {\\r\\n  position: relative;\\r\\n  top: 5px;\\r\\n  padding: 5px 15px;\\r\\n  background: none;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n  -moz-transition: all 0.8s linear;\\r\\n  -webkit-transition: all 0.8s linear;\\r\\n  transition: all 0.8s linear;\\r\\n}\\r\\n\\r\\n#refresh.down {\\r\\n  -ms-transform: rotate(180deg);\\r\\n  -moz-transform: rotate(180deg);\\r\\n  -webkit-transform: rotate(180deg);\\r\\n  transform: rotate(180deg);\\r\\n}\\r\\n\\r\\n.empty {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  height: 320px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.empty img {\\r\\n  height: 100px;\\r\\n  width: 100px;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.leaderboard {\\r\\n  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2);\\r\\n  border-radius: 35px;\\r\\n  padding: 20px;\\r\\n  height: 370px;\\r\\n  background-color: #fff;\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\n/* Scrollbar */\\r\\n::-webkit-scrollbar {\\r\\n  width: 10px;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-track {\\r\\n  background: none;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb {\\r\\n  background: #dcdcdc;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb:hover {\\r\\n  background: #555;\\r\\n}\\r\\n\\r\\n/* Loading skeleton */\\r\\n.skeleton {\\r\\n  opacity: 0.7;\\r\\n  animation: skeleton-loading 1s linear infinite alternate;\\r\\n}\\r\\n\\r\\n@keyframes skeleton-loading {\\r\\n  0% {\\r\\n    background-color: hsl(200, 20%, 70%);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    background-color: hsl(200, 20%, 95%);\\r\\n  }\\r\\n}\\r\\n\\r\\n.skeleton-cont {\\r\\n  padding: 10px;\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.skeleton-image {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  border-radius: 100%;\\r\\n}\\r\\n\\r\\n.skeleton-text {\\r\\n  width: 80%;\\r\\n  height: 20px;\\r\\n  border-radius: 15px;\\r\\n}\\r\\n\\r\\n/* Form Section */\\r\\n.score {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding: 10px 5px;\\r\\n  border-bottom: 1px solid rgba(204, 204, 204, 0.5);\\r\\n}\\r\\n\\r\\n.score span {\\r\\n  margin-right: 15px;\\r\\n}\\r\\n\\r\\n.profile {\\r\\n  height: 50px;\\r\\n  width: 50px;\\r\\n  margin-right: 20px;\\r\\n}\\r\\n\\r\\n.user {\\r\\n  width: 60%;\\r\\n  margin-right: 30px;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.score-number {\\r\\n  font-weight: 700;\\r\\n  color: #10121f;\\r\\n}\\r\\n\\r\\n.form-cont {\\r\\n  text-align: center;\\r\\n  padding: 70px 100px 0;\\r\\n}\\r\\n\\r\\n#success {\\r\\n  width: 75%;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  padding: 10px 20px;\\r\\n  background-color: #aeeabc;\\r\\n  border-radius: 15px;\\r\\n  margin-bottom: 20px;\\r\\n  font-size: 12px;\\r\\n  opacity: 0;\\r\\n  animation: fadeIn 0.8s;\\r\\n  animation-fill-mode: forwards;\\r\\n}\\r\\n\\r\\n@keyframes fadeIn {\\r\\n  100% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#scorecard {\\r\\n  height: 50px;\\r\\n  width: 50px;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  width: 100%;\\r\\n  margin-bottom: 25px;\\r\\n  border: none;\\r\\n  background-color: #ededed;\\r\\n  padding: 10px;\\r\\n  border-radius: 15px;\\r\\n}\\r\\n\\r\\n#submit-btn {\\r\\n  padding: 8px 20px;\\r\\n  background-color: #1e0253;\\r\\n  color: #fff;\\r\\n  cursor: pointer;\\r\\n  border-radius: 15px;\\r\\n  border: none;\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\\r\\n#submit-btn:hover {\\r\\n  background-color: #555;\\r\\n}\\r\\n\\r\\n/* Footer */\\r\\nfooter {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding-right: 200px;\\r\\n  padding-left: 160px;\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  position: absolute;\\r\\n  bottom: 0;\\r\\n}\\r\\n\\r\\n/* Media Queries */\\r\\n@media only screen and (max-width: 768px) {\\r\\n  .score-cont {\\r\\n    height: 100%;\\r\\n    grid-template-columns: 100%;\\r\\n    grid-template-rows: 500px 380px;\\r\\n    padding: 100px 40px 0;\\r\\n    gap: 100px;\\r\\n    background:\\r\\n      linear-gradient(\\r\\n        to bottom,\\r\\n        #1e0253 0%,\\r\\n        #631447 55%,\\r\\n        #fff 55%,\\r\\n        #fff 100%\\r\\n      );\\r\\n  }\\r\\n\\r\\n  h1 {\\r\\n    font-size: 38px;\\r\\n    text-align: center;\\r\\n    position: absolute;\\r\\n    width: 100%;\\r\\n    padding-left: 0;\\r\\n    color: #fff;\\r\\n  }\\r\\n\\r\\n  .form-cont {\\r\\n    padding: 0 10px 0;\\r\\n    margin-top: 0;\\r\\n  }\\r\\n\\r\\n  footer {\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    margin: 0 auto;\\r\\n    padding-right: 0;\\r\\n    padding-left: 0;\\r\\n    width: 95%;\\r\\n    text-align: center;\\r\\n    position: static;\\r\\n  }\\r\\n\\r\\n  footer p {\\r\\n    margin-top: 5px;\\r\\n  }\\r\\n\\r\\n  .copy {\\r\\n    color: #000;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-config/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-config/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-config/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-config/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-config/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-config/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-config/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-config/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-config/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-config/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_score_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/score.png */ \"./src/images/score.png\");\n/* harmony import */ var _images_trophy_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/trophy.png */ \"./src/images/trophy.png\");\n/* harmony import */ var _modules_leaderboard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/leaderboard.js */ \"./src/modules/leaderboard.js\");\n// Imports\n\n\n\n\n\n// Get relevant elements from the DOM\nconst form = document.querySelector('form');\nconst name = document.getElementById('name');\nconst score = document.getElementById('score');\nconst scores = document.getElementById('scores');\nconst refreshBtn = document.getElementById('refresh');\nconst success = document.getElementById('success');\nconst loader = document.getElementById('skeleton-loader');\nconst scoreCard = document.getElementById('scorecard');\nconst trophy = document.getElementById('trophy');\nconst empty = document.getElementById('empty-id');\n\n// Call refresh function on page load to display leaderboard scores\nscoreCard.src = _images_score_png__WEBPACK_IMPORTED_MODULE_1__;\ntrophy.src = _images_trophy_png__WEBPACK_IMPORTED_MODULE_2__;\nloader.classList.toggle('hide');\nempty.classList.replace('empty', 'hide');\n(0,_modules_leaderboard_js__WEBPACK_IMPORTED_MODULE_3__.refresh)();\n\n// Add event listener to form to call the save function with form input on submit\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  (0,_modules_leaderboard_js__WEBPACK_IMPORTED_MODULE_3__.save)(name.value, score.value);\n  form.reset();\n  success.classList.toggle('hide');\n  setTimeout(() => {\n    success.classList.toggle('hide');\n  }, 2500);\n});\n\n// Add event listener to refresh button to call the refresh function\nrefreshBtn.addEventListener('click', () => {\n  refreshBtn.classList.toggle('down');\n  scores.innerHTML = '';\n  loader.classList.toggle('hide');\n  empty.classList.replace('empty', 'hide');\n  (0,_modules_leaderboard_js__WEBPACK_IMPORTED_MODULE_3__.refresh)();\n});\n\n\n//# sourceURL=webpack://webpack-config/./src/index.js?");

/***/ }),

/***/ "./src/modules/leaderboard.js":
/*!************************************!*\
  !*** ./src/modules/leaderboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"refresh\": () => (/* binding */ refresh),\n/* harmony export */   \"save\": () => (/* binding */ save)\n/* harmony export */ });\n/* harmony import */ var _images_profile1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/profile1.png */ \"./src/images/profile1.png\");\n/* harmony import */ var _images_profile2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/profile2.png */ \"./src/images/profile2.png\");\n/* harmony import */ var _images_profile3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/profile3.png */ \"./src/images/profile3.png\");\n/* harmony import */ var _images_profile4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/profile4.png */ \"./src/images/profile4.png\");\n\n\n\n\n\n// Get relevant elements from the DOM\nconst scores = document.getElementById('scores');\nconst loader = document.getElementById('skeleton-loader');\nconst empty = document.getElementById('empty-id');\n\n// URL to be used in fetch requests\nconst URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${\"YX3FAxZbc6Axod9Pj1Ng\"}/scores/`;\n\n// Array of profile images\nconst imageArr = [_images_profile1_png__WEBPACK_IMPORTED_MODULE_0__, _images_profile2_png__WEBPACK_IMPORTED_MODULE_1__, _images_profile3_png__WEBPACK_IMPORTED_MODULE_2__, _images_profile4_png__WEBPACK_IMPORTED_MODULE_3__];\n\n/*\nAsync function to fetch all scores from leaderboard API and sort in descending order.\nScores are then appended to the DOM\n*/\nconst refresh = async () => {\n  try {\n    const response = await fetch(URL);\n    if (response.ok) {\n      const json = await response.json();\n      if (!json.result.length) {\n        empty.classList.replace('hide', 'empty');\n      } else {\n        empty.classList.toggle('empty', 'hide');\n      }\n      let sortedScores = json.result.sort((s1, s2) => {\n        if (s1.score < s2.score) {\n          return 1;\n        }\n        if (s1.score > s2.score) {\n          return -1;\n        }\n\n        return 0;\n      });\n      loader.classList.toggle('hide');\n      let count = 0;\n      sortedScores = sortedScores.map((item) => {\n        count += 1;\n        return {\n          ...item,\n          rank: count,\n        };\n      });\n      sortedScores.forEach((item) => {\n        const scoreElem = document.createElement('div');\n        scoreElem.className = 'score';\n        scoreElem.innerHTML = `\n          <span>${item.rank}</span>\n          <img alt='profile' class='profile'/>\n          <p class=\"user\">${item.user}</p>\n          <p class=\"score-number\">${item.score}</p>\n        `;\n        scoreElem.children[1].src = imageArr[Math.floor(Math.random() * 4)];\n        scores.appendChild(scoreElem);\n      });\n    }\n  } catch (error) {\n    throw new Error(error);\n  }\n};\n\n// Async function to send form data to leaderboard api\nconst save = async (user, score) => {\n  const data = JSON.stringify({\n    user,\n    score,\n  });\n\n  try {\n    await fetch(URL, {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: data,\n    });\n  } catch (error) {\n    throw new Error(error);\n  }\n};\n\n\n//# sourceURL=webpack://webpack-config/./src/modules/leaderboard.js?");

/***/ }),

/***/ "./src/images/profile1.png":
/*!*********************************!*\
  !*** ./src/images/profile1.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5faf09a7795d28bf5a2b.png\";\n\n//# sourceURL=webpack://webpack-config/./src/images/profile1.png?");

/***/ }),

/***/ "./src/images/profile2.png":
/*!*********************************!*\
  !*** ./src/images/profile2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ba422ca13bb76ae93687.png\";\n\n//# sourceURL=webpack://webpack-config/./src/images/profile2.png?");

/***/ }),

/***/ "./src/images/profile3.png":
/*!*********************************!*\
  !*** ./src/images/profile3.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7592b515db23ff41b4dc.png\";\n\n//# sourceURL=webpack://webpack-config/./src/images/profile3.png?");

/***/ }),

/***/ "./src/images/profile4.png":
/*!*********************************!*\
  !*** ./src/images/profile4.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"03961758fc894ce1fd2d.png\";\n\n//# sourceURL=webpack://webpack-config/./src/images/profile4.png?");

/***/ }),

/***/ "./src/images/score.png":
/*!******************************!*\
  !*** ./src/images/score.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c81456c28f5fca64305a.png\";\n\n//# sourceURL=webpack://webpack-config/./src/images/score.png?");

/***/ }),

/***/ "./src/images/trophy.png":
/*!*******************************!*\
  !*** ./src/images/trophy.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"16e6df06d5ae2e4ee3f4.png\";\n\n//# sourceURL=webpack://webpack-config/./src/images/trophy.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;