/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_header_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/header.jpg */ "./src/assets/header.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_header_jpg__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --main-color-1: rgba(247, 247, 247, 0.795);\n  --main-color-2: rgb(150, 111, 51);\n  --main-color-3: rgba(94, 40, 40, 0.795); }\n\n* {\n  margin: 0;\n  padding: 0; }\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nhtml {\n  font-size: 62.5%; }\n  @media only screen and (max-width: 100em) {\n    html {\n      font-size: 55%; } }\n  @media only screen and (max-width: 78.12em) {\n    html {\n      font-size: 50%; } }\n\nbody {\n  font-family: \"Bebas Neue\", cursive;\n  background-color: var(--main-color-2);\n  color: var(--main-color-1); }\n\n.container {\n  padding: 1rem; }\n  @media only screen and (max-width: 22.5em) {\n    .container {\n      padding: 0; } }\n\n.btn {\n  display: inline-block;\n  position: relative;\n  color: var(--main-color-1);\n  padding: 0 2rem; }\n  @media only screen and (max-width: 31.25em) {\n    .btn {\n      width: 90%;\n      text-align: center;\n      padding: 0; } }\n  .btn:hover::before {\n    border-color: var(--main-color-3);\n    border-width: 0.4rem; }\n  .btn::before {\n    content: \"\";\n    right: 0;\n    position: absolute;\n    margin: 0.3rem auto;\n    border: 0.2rem solid var(--main-color-1);\n    height: 80%;\n    width: 100%; }\n\n.navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  background-color: var(--main-color-2);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 1; }\n  @media only screen and (max-width: 31.25em) {\n    .navbar {\n      flex-direction: column;\n      position: relative;\n      justify-content: center;\n      align-items: center; } }\n  .navbar_logo {\n    height: 5rem;\n    margin-left: 5rem;\n    animation-name: fadein;\n    animation-duration: 1000ms;\n    backface-visibility: hidden;\n    animation-timing-function: ease-in-out; }\n    @media only screen and (max-width: 31.25em) {\n      .navbar_logo {\n        margin-left: 0; } }\n  .navbar_links {\n    display: flex;\n    font-size: 5rem;\n    justify-content: flex-end; }\n    @media only screen and (max-width: 31.25em) {\n      .navbar_links {\n        font-size: 4rem;\n        flex-direction: column;\n        justify-content: center;\n        width: 100%;\n        text-align: center; } }\n  .navbar_button {\n    padding-right: 3.5rem;\n    list-style: none; }\n    @media only screen and (max-width: 31.25em) {\n      .navbar_button {\n        width: 100%;\n        padding: 0; } }\n\n@keyframes fadein {\n  0% {\n    transform: translateY(-40%); }\n  100% {\n    transform: translateY(0); } }\n\n.footer {\n  height: 20rem;\n  margin: -1rem;\n  background-color: var(--main-color-3);\n  font-size: 3rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n  .footer_logo {\n    height: 5rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem; }\n  .footer_number {\n    font-size: 2rem; }\n\n.main {\n  height: 100vh;\n  background-image: linear-gradient(90deg, rgba(7, 7, 7, 0.877) 0%, rgba(7, 7, 7, 0.548) 38%, transparent 40%), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n  border-radius: 0.2rem;\n  display: flex;\n  align-items: center; }\n  @media only screen and (max-width: 59.37em) {\n    .main {\n      height: 98vh; } }\n  @media only screen and (max-width: 56.25em) {\n    .main {\n      justify-content: center;\n      background-image: linear-gradient(90deg, rgba(7, 7, 7, 0.877) 0%, rgba(7, 7, 7, 0.548) 100%, transparent 40%), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); } }\n  .main_header {\n    color: var(--main-color-1);\n    text-shadow: 0.1rem 0.4rem 1rem black;\n    margin-left: 2rem;\n    display: flex;\n    flex-direction: column;\n    height: 75vh;\n    padding: 2rem;\n    justify-content: space-evenly;\n    text-align: center;\n    border: 2rem var(--main-color-1) solid;\n    border-radius: 0.3rem;\n    font-size: 11.3rem; }\n    @media only screen and (max-width: 87.5em) {\n      .main_header {\n        font-size: 13rem; } }\n    @media only screen and (max-width: 78.12em) {\n      .main_header {\n        height: 63vh;\n        padding: 1rem;\n        font-size: 10rem; } }\n    @media only screen and (max-width: 59.37em) {\n      .main_header {\n        height: 55vh; } }\n    @media only screen and (max-width: 56.25em) {\n      .main_header {\n        margin-left: 0; } }\n    .main_header-name {\n      display: block; }\n    .main_header-shop {\n      display: block;\n      font-size: 14rem;\n      letter-spacing: 0.054em; }\n      @media only screen and (max-width: 87.5em) {\n        .main_header-shop {\n          font-size: 12rem; } }\n      @media only screen and (max-width: 78.12em) {\n        .main_header-shop {\n          font-size: 10rem; } }\n    .main_header-japanese {\n      font-size: 6rem;\n      display: block;\n      margin-top: -2rem;\n      display: none; }\n\n.home-page {\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  margin: 5rem;\n  margin-top: 35rem;\n  margin-bottom: 20rem;\n  font-size: 4rem; }\n  @media only screen and (max-width: 87.5em) {\n    .home-page {\n      margin-left: 2rem;\n      margin-right: 2rem; } }\n  @media only screen and (max-width: 68.75em) {\n    .home-page {\n      font-size: 3.8rem; } }\n  @media only screen and (max-width: 34.37em) {\n    .home-page {\n      margin-left: 1rem;\n      margin-right: 1rem; } }\n  .home-page_info {\n    background-color: rgba(94, 40, 40, 0.795);\n    width: 80%;\n    display: flex;\n    border-radius: 5px; }\n    @media only screen and (max-width: 65.62em) {\n      .home-page_info {\n        width: 90%; } }\n    @media only screen and (max-width: 50em) {\n      .home-page_info {\n        flex-direction: column-reverse;\n        align-items: center; } }\n    @media only screen and (max-width: 50em) {\n      .home-page_info-2 {\n        flex-direction: column; } }\n    @media only screen and (max-width: 34.37em) {\n      .home-page_info {\n        width: 99%; } }\n    .home-page_info_para-menu {\n      align-self: center;\n      width: 50%;\n      font-size: 4rem;\n      margin: 2rem; }\n      @media only screen and (max-width: 78.15em) {\n        .home-page_info_para-menu {\n          font-size: 3.5rem; } }\n      @media only screen and (max-width: 56.25em) {\n        .home-page_info_para-menu {\n          font-size: 3rem; } }\n      @media only screen and (max-width: 50em) {\n        .home-page_info_para-menu {\n          width: 100%;\n          text-align: center; } }\n      @media only screen and (max-width: 50em) {\n        .home-page_info_para-menu {\n          padding: 1rem; } }\n      @media only screen and (max-width: 34.37em) {\n        .home-page_info_para-menu {\n          font-size: 3.1rem; } }\n      .home-page_info_para-menu h2 {\n        margin-top: 1rem;\n        font-size: 9rem; }\n        @media only screen and (max-width: 78.15em) {\n          .home-page_info_para-menu h2 {\n            font-size: 8rem; } }\n        @media only screen and (max-width: 56.25em) {\n          .home-page_info_para-menu h2 {\n            font-size: 7rem; } }\n        @media only screen and (max-width: 34.37em) {\n          .home-page_info_para-menu h2 {\n            font-size: 6rem; } }\n      .home-page_info_para-menu p {\n        line-height: 8rem; }\n        @media only screen and (max-width: 78.15em) {\n          .home-page_info_para-menu p {\n            line-height: 7rem; } }\n        @media only screen and (max-width: 34.37em) {\n          .home-page_info_para-menu p {\n            line-height: 6rem; } }\n    .home-page_info_para-contact {\n      width: 50%;\n      font-size: 4rem;\n      margin: 2rem;\n      align-self: center;\n      margin-left: 0rem; }\n      @media only screen and (max-width: 78.15em) {\n        .home-page_info_para-contact {\n          font-size: 3.5rem; } }\n      @media only screen and (max-width: 56.25em) {\n        .home-page_info_para-contact {\n          font-size: 3rem; } }\n      @media only screen and (max-width: 50em) {\n        .home-page_info_para-contact {\n          width: 100%;\n          text-align: center; } }\n      @media only screen and (max-width: 50em) {\n        .home-page_info_para-contact {\n          padding: 1rem; } }\n      @media only screen and (max-width: 34.37em) {\n        .home-page_info_para-contact {\n          font-size: 3.1rem; } }\n      .home-page_info_para-contact h2 {\n        margin-top: 1rem;\n        font-size: 9rem; }\n        @media only screen and (max-width: 78.15em) {\n          .home-page_info_para-contact h2 {\n            font-size: 8rem; } }\n        @media only screen and (max-width: 56.25em) {\n          .home-page_info_para-contact h2 {\n            font-size: 7rem; } }\n        @media only screen and (max-width: 34.37em) {\n          .home-page_info_para-contact h2 {\n            font-size: 6rem; } }\n      .home-page_info_para-contact p {\n        line-height: 8rem; }\n        @media only screen and (max-width: 78.15em) {\n          .home-page_info_para-contact p {\n            line-height: 7rem; } }\n        @media only screen and (max-width: 34.37em) {\n          .home-page_info_para-contact p {\n            line-height: 6rem; } }\n      @media only screen and (max-width: 50em) {\n        .home-page_info_para-contact {\n          margin-left: 2rem; } }\n    .home-page_info_image {\n      position: relative;\n      border-radius: 5px; }\n      .home-page_info_image-menu {\n        max-width: 45%;\n        bottom: 0;\n        right: -8%;\n        margin: 2rem;\n        box-shadow: 0.2rem 0.8rem 0.5rem rgba(7, 7, 7, 0.425); }\n        @media only screen and (max-width: 68.75em) {\n          .home-page_info_image-menu {\n            bottom: 5%; } }\n        @media only screen and (max-width: 65.62em) {\n          .home-page_info_image-menu {\n            right: 0; } }\n        @media only screen and (max-width: 50em) {\n          .home-page_info_image-menu {\n            max-width: 50rem;\n            bottom: 20%;\n            margin-bottom: -25%; } }\n        @media only screen and (max-width: 34.37em) {\n          .home-page_info_image-menu {\n            max-width: 38rem; } }\n        @media only screen and (max-width: 29.37em) {\n          .home-page_info_image-menu {\n            margin-bottom: -37%; } }\n      .home-page_info_image-contact {\n        max-width: 40%;\n        bottom: 3%;\n        left: -8%;\n        margin-left: 0.8rem;\n        margin-bottom: 2rem;\n        box-shadow: -0.2rem 0.8rem 0.5rem rgba(7, 7, 7, 0.425); }\n        @media only screen and (max-width: 65.62em) {\n          .home-page_info_image-contact {\n            left: -2%; } }\n        @media only screen and (max-width: 50em) {\n          .home-page_info_image-contact {\n            max-width: 45rem;\n            left: 0;\n            bottom: 15%;\n            margin-bottom: -22%; } }\n        @media only screen and (max-width: 34.37em) {\n          .home-page_info_image-contact {\n            max-width: 33rem; } }\n        @media only screen and (max-width: 29.37em) {\n          .home-page_info_image-contact {\n            margin-bottom: -31%; } }\n\n.button_container {\n  margin-top: 4rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.button {\n  display: inline-block;\n  text-align: center;\n  color: var(--main-color-1);\n  padding: 1rem 2rem;\n  border: 0.4rem solid var(--main-color-1); }\n", "",{"version":3,"sources":["webpack://./src/scss/_initial.scss","webpack://./src/scss/pages/_home.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap\");\n:root {\n  --main-color-1: rgba(247, 247, 247, 0.795);\n  --main-color-2: rgb(150, 111, 51);\n  --main-color-3: rgba(94, 40, 40, 0.795);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n  @media only screen and (max-width: 100em) {\n    font-size: 55%;\n  }\n  @media only screen and (max-width: 78.12em) {\n    font-size: 50%;\n  }\n}\nbody {\n  font-family: \"Bebas Neue\", cursive;\n  background-color: var(--main-color-2);\n  color: var(--main-color-1);\n}\n.container {\n  padding: 1rem;\n  @media only screen and (max-width: 22.5em) {\n    padding: 0;\n  }\n}\n\n.btn {\n  display: inline-block;\n  position: relative;\n  color: var(--main-color-1);\n  padding: 0 2rem;\n  @media only screen and (max-width: 31.25em) {\n    width: 90%;\n    text-align: center;\n    padding: 0;\n  }\n  &:hover::before {\n    border-color: var(--main-color-3);\n    border-width: 0.4rem;\n  }\n\n  &::before {\n    content: \"\";\n    right: 0;\n    position: absolute;\n    margin: 0.3rem auto;\n    border: 0.2rem solid var(--main-color-1);\n    height: 80%;\n    width: 100%;\n  }\n}\n.navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  background-color: var(--main-color-2);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 1;\n  @media only screen and (max-width: 31.25em) {\n    flex-direction: column;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n  }\n  &_logo {\n    height: 5rem;\n    margin-left: 5rem;\n    animation-name: fadein;\n    animation-duration: 1000ms;\n    backface-visibility: hidden;\n    animation-timing-function: ease-in-out;\n    @media only screen and (max-width: 31.25em) {\n      margin-left: 0;\n    }\n  }\n  &_links {\n    display: flex;\n    font-size: 5rem;\n    justify-content: flex-end;\n    @media only screen and (max-width: 31.25em) {\n      font-size: 4rem;\n      flex-direction: column;\n      justify-content: center;\n      width: 100%;\n      text-align: center;\n    }\n  }\n  &_button {\n    padding-right: 3.5rem;\n    list-style: none;\n    @media only screen and (max-width: 31.25em) {\n      width: 100%;\n      padding: 0;\n    }\n  }\n}\n@keyframes fadein {\n  0% {\n    transform: translateY(-40%);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n.footer {\n  height: 20rem;\n  margin: -1rem;\n  background-color: var(--main-color-3);\n  font-size: 3rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  &_logo {\n    height: 5rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n  &_number {\n    font-size: 2rem;\n  }\n}\n","@mixin home-page-para {\n  width: 50%;\n  font-size: 4rem;\n  margin: 2rem;\n  @media only screen and (max-width: 78.15em) {\n    font-size: 3.5rem;\n  }\n  @media only screen and (max-width: 56.25em) {\n    font-size: 3rem;\n  }\n  @media only screen and (max-width: 50em) {\n    width: 100%;\n    text-align: center;\n  }\n  @media only screen and (max-width: 50em) {\n    padding: 1rem;\n  }\n  @media only screen and (max-width: 34.37em) {\n    font-size: 3.1rem;\n  }\n  & h2 {\n    margin-top: 1rem;\n    font-size: 9rem;\n    @media only screen and (max-width: 78.15em) {\n      font-size: 8rem;\n    }\n    @media only screen and (max-width: 56.25em) {\n      font-size: 7rem;\n    }\n    @media only screen and (max-width: 34.37em) {\n      font-size: 6rem;\n    }\n  }\n  & p {\n    line-height: 8rem;\n    @media only screen and (max-width: 78.15em) {\n      line-height: 7rem;\n    }\n    @media only screen and (max-width: 34.37em) {\n      line-height: 6rem;\n    }\n  }\n}\n\n.main {\n  height: 100vh;\n  background-image: linear-gradient(\n      90deg,\n      rgba(7, 7, 7, 0.877) 0%,\n      rgba(7, 7, 7, 0.548) 38%,\n      transparent 40%\n    ),\n    url(\"~header.jpg\");\n  background-position: center;\n  background-size: cover;\n  border-radius: 0.2rem;\n  display: flex;\n  align-items: center;\n  @media only screen and (max-width: 59.37em) {\n    height: 98vh;\n  }\n  @media only screen and (max-width: 56.25em) {\n    justify-content: center;\n    background-image: linear-gradient(\n        90deg,\n        rgba(7, 7, 7, 0.877) 0%,\n        rgba(7, 7, 7, 0.548) 100%,\n        transparent 40%\n      ),\n      url(\"~header.jpg\");\n  }\n  &_header {\n    color: var(--main-color-1);\n    text-shadow: 0.1rem 0.4rem 1rem black;\n    margin-left: 2rem;\n    display: flex;\n    flex-direction: column;\n    height: 75vh;\n    padding: 2rem;\n    justify-content: space-evenly;\n    text-align: center;\n    border: 2rem var(--main-color-1) solid;\n    border-radius: 0.3rem;\n    font-size: 11.3rem;\n    @media only screen and (max-width: 87.5em) {\n      font-size: 13rem;\n    }\n    @media only screen and (max-width: 78.12em) {\n      height: 63vh;\n      padding: 1rem;\n      font-size: 10rem;\n    }\n    @media only screen and (max-width: 59.37em) {\n      height: 55vh;\n    }\n    @media only screen and (max-width: 56.25em) {\n      margin-left: 0;\n    }\n    &-name {\n      display: block;\n    }\n    &-shop {\n      display: block;\n      font-size: 14rem;\n      letter-spacing: 0.054em;\n      @media only screen and (max-width: 87.5em) {\n        font-size: 12rem;\n      }\n      @media only screen and (max-width: 78.12em) {\n        font-size: 10rem;\n      }\n    }\n    &-japanese {\n      font-size: 6rem;\n      display: block;\n      margin-top: -2rem;\n      display: none;\n    }\n  }\n}\n\n.home-page {\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  margin: 5rem;\n  margin-top: 35rem;\n  margin-bottom: 20rem;\n  font-size: 4rem;\n\n  @media only screen and (max-width: 87.5em) {\n    margin-left: 2rem;\n    margin-right: 2rem;\n  }\n  @media only screen and (max-width: 68.75em) {\n    font-size: 3.8rem;\n  }\n  @media only screen and (max-width: 34.37em) {\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n  &_info {\n    background-color: rgba(94, 40, 40, 0.795);\n    width: 80%;\n    display: flex;\n    border-radius: 5px;\n\n    @media only screen and (max-width: 65.62em) {\n      width: 90%;\n    }\n    @media only screen and (max-width: 50em) {\n      flex-direction: column-reverse;\n      align-items: center;\n    }\n    &-2 {\n      @media only screen and (max-width: 50em) {\n        flex-direction: column;\n      }\n    }\n    @media only screen and (max-width: 34.37em) {\n      width: 99%;\n    }\n    &_para-menu {\n      align-self: center;\n      @include home-page-para;\n    }\n    &_para-contact {\n      @include home-page-para;\n      align-self: center;\n      margin-left: 0rem;\n      @media only screen and (max-width: 50em) {\n        margin-left: 2rem;\n      }\n    }\n    &_image {\n      position: relative;\n      border-radius: 5px;\n\n      &-menu {\n        max-width: 45%;\n        bottom: 0;\n        right: -8%;\n        margin: 2rem;\n        box-shadow: 0.2rem 0.8rem 0.5rem rgba(7, 7, 7, 0.425);\n        @media only screen and (max-width: 68.75em) {\n          bottom: 5%;\n        }\n        @media only screen and (max-width: 65.62em) {\n          right: 0;\n        }\n        @media only screen and (max-width: 50em) {\n          max-width: 50rem;\n          bottom: 20%;\n          margin-bottom: -25%;\n        }\n        @media only screen and (max-width: 34.37em) {\n          max-width: 38rem;\n        }\n        @media only screen and (max-width: 29.37em) {\n          margin-bottom: -37%;\n        }\n      }\n      &-contact {\n        max-width: 40%;\n        bottom: 3%;\n        left: -8%;\n        margin-left: 0.8rem;\n        margin-bottom: 2rem;\n        box-shadow: -0.2rem 0.8rem 0.5rem rgba(7, 7, 7, 0.425);\n        @media only screen and (max-width: 65.62em) {\n          left: -2%;\n        }\n        @media only screen and (max-width: 50em) {\n          max-width: 45rem;\n          left: 0;\n          bottom: 15%;\n          margin-bottom: -22%;\n        }\n        @media only screen and (max-width: 34.37em) {\n          max-width: 33rem;\n        }\n        @media only screen and (max-width: 29.37em) {\n          margin-bottom: -31%;\n        }\n      }\n    }\n  }\n}\n.button_container {\n  margin-top: 4rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.button {\n  display: inline-block;\n  text-align: center;\n  color: var(--main-color-1);\n  padding: 1rem 2rem;\n  border: 0.4rem solid var(--main-color-1);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/assets/header.jpg":
/*!*******************************!*\
  !*** ./src/assets/header.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/fcca4fb76587c7c1947bb4c946bf59fc.jpg");

/***/ }),

/***/ "./src/assets/home-contact.jpg":
/*!*************************************!*\
  !*** ./src/assets/home-contact.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/0de6f1ca2511f55285066451e418eeaa.jpg");

/***/ }),

/***/ "./src/assets/home-menu.jpg":
/*!**********************************!*\
  !*** ./src/assets/home-menu.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/62df691e402871f61b393cb242b30e95.jpg");

/***/ }),

/***/ "./src/assets/paper-lantern.svg":
/*!**************************************!*\
  !*** ./src/assets/paper-lantern.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/76ecab0dc613f12ee1cd71aa0fe6d5e1.svg");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/modules/executePage.js":
/*!************************************!*\
  !*** ./src/modules/executePage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_paper_lantern_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/paper-lantern.svg */ "./src/assets/paper-lantern.svg");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/modules/home.js");



function createNavbar() {
  let navbar = document.createElement("nav");
  navbar.classList.add("navbar");
  let logo = document.createElement("img");
  logo.src = _assets_paper_lantern_svg__WEBPACK_IMPORTED_MODULE_0__.default;
  logo.classList.add("navbar_logo");
  let btns = document.createElement("ul");
  btns.classList.add("navbar_links");
  let homeBtn = createBtn("Home");
  let MenuBtn = createBtn("Menu");
  let ContactBtn = createBtn("Contact");
  btns.appendChild(homeBtn);
  btns.appendChild(MenuBtn);
  btns.appendChild(ContactBtn);

  navbar.appendChild(logo);
  navbar.appendChild(btns);

  return navbar;
}

function createBtn(text) {
  let btn = document.createElement("li");
  btn.classList.add("navbar_button");
  let innerbtn = document.createElement("a");
  innerbtn.classList.add("btn");
  innerbtn.innerText = text;
  btn.appendChild(innerbtn);
  return btn;
}

function executePage() {
  let container = document.querySelector(".container");
  let nav = createNavbar();
  let homePage = (0,_home__WEBPACK_IMPORTED_MODULE_1__.default)();
  container.appendChild(nav);
  container.appendChild(homePage);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (executePage);


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_home_menu_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/home-menu.jpg */ "./src/assets/home-menu.jpg");
/* harmony import */ var _assets_home_contact_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/home-contact.jpg */ "./src/assets/home-contact.jpg");
/* harmony import */ var _assets_paper_lantern_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/paper-lantern.svg */ "./src/assets/paper-lantern.svg");




function createMainSec() {
  let main = document.createElement("div");
  main.classList.add("main");
  let header = createHeader(`A-Chan's`, `Shokudou`);
  main.appendChild(header);
  return main;
}

function createHeader(text1, text2) {
  let h1 = document.createElement("h1");
  h1.classList.add("main_header");
  let span1 = document.createElement("span");
  span1.classList.add("main_header-name");
  span1.textContent = text1;
  let span2 = document.createElement("span");
  span2.classList.add("main_header-shop");
  span2.textContent = text2;
  h1.appendChild(span1);
  h1.appendChild(span2);
  return h1;
}

function createSection(h2text, text, img) {
  let homepageContent = document.createElement("div");
  homepageContent.classList.add("home-page");
  let homepageInfo = document.createElement("div");
  homepageInfo.classList.add("home-page_info");
  let homepageInfoText = document.createElement("div");
  let h2 = document.createElement("h2");
  h2.textContent = h2text;
  let para = document.createElement("p");
  para.textContent = text;
  let btn = createButton("Go There!");
  let image = document.createElement("img");
  image.src = img;
  image.classList.add("home-page_info_image");

  if (h2text.toLowerCase() === "contact") {
    homepageInfo.classList.add("home-page_info-2");
    homepageInfoText.classList.add("home-page_info_para-contact");
    image.classList.add("home-page_info_image-contact");
    homepageInfoText.appendChild(h2);
    homepageInfoText.appendChild(para);
    homepageInfoText.appendChild(btn);

    homepageInfo.appendChild(image);
    homepageInfo.appendChild(homepageInfoText);
    homepageContent.appendChild(homepageInfo);
  } else {
    homepageInfoText.classList.add("home-page_info_para-menu");
    image.classList.add("home-page_info_image-menu");
    homepageInfoText.appendChild(h2);
    homepageInfoText.appendChild(para);
    homepageInfoText.appendChild(btn);

    homepageInfo.appendChild(homepageInfoText);
    homepageInfo.appendChild(image);
    homepageContent.appendChild(homepageInfo);
  }

  return homepageContent;
}

function createButton(text) {
  let btnContainer = document.createElement("div");
  btnContainer.classList.add("button_container");

  let btn = document.createElement("a");
  btn.classList.add("button");
  btn.textContent = text;
  btnContainer.appendChild(btn);
  return btnContainer;
}

function createFooter() {
  let footer = document.createElement("footer");
  footer.classList.add("footer");

  let restaurantName = document.createElement("p");
  restaurantName.classList.add("footer_para");
  restaurantName.textContent = `A-Chan's Shokudou`;

  let img = document.createElement("img");
  img.src = _assets_paper_lantern_svg__WEBPACK_IMPORTED_MODULE_2__.default;
  img.classList.add("footer_logo");

  let restaurantAdress = document.createElement("p");
  restaurantAdress.classList.add("footer_adress");
  restaurantAdress.textContent = `Tokyo, Japan`;

  let restaurantNumber = document.createElement("p");
  restaurantNumber.classList.add("footer_number");
  restaurantNumber.textContent = `5xx-xxx-xxx`;

  footer.appendChild(restaurantName);
  footer.appendChild(img);
  footer.appendChild(restaurantAdress);
  footer.appendChild(restaurantNumber);
  return footer;
}

function createHomePage() {
  let contents = document.createElement("div");
  contents.classList.add("content");
  let mainContent = createMainSec();
  let menuContent = createSection(
    `Menu`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
  quae, officia dolorem incidunt possimus eligendi, exercitationem,
  debitis!`,
    _assets_home_menu_jpg__WEBPACK_IMPORTED_MODULE_0__.default
  );
  let contactContent = createSection(
    `Contact`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
  quae, officia dolorem incidunt possimus eligendi, exercitationem,
  delectus aliquid in tenetur debitis!`,
    _assets_home_contact_jpg__WEBPACK_IMPORTED_MODULE_1__.default
  );

  let footer = createFooter();
  contents.appendChild(mainContent);
  contents.appendChild(menuContent);
  contents.appendChild(contactContent);
  contents.appendChild(footer);
  return contents;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _modules_executePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/executePage */ "./src/modules/executePage.js");



(0,_modules_executePage__WEBPACK_IMPORTED_MODULE_1__.default)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9hc3NldHMvaGVhZGVyLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvYXNzZXRzL2hvbWUtY29udGFjdC5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL2Fzc2V0cy9ob21lLW1lbnUuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9hc3NldHMvcGFwZXItbGFudGVybi5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL3Njc3MvbWFpbi5zY3NzPzZkMjUiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9tb2R1bGVzL2V4ZWN1dGVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDN0I7QUFDTztBQUNsQztBQUNqRSw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHdIQUF3SDtBQUN4SCx5Q0FBeUMsc0ZBQStCLENBQUMsdURBQTZCO0FBQ3RHO0FBQ0EsaURBQWlELCtDQUErQyxzQ0FBc0MsNENBQTRDLEVBQUUsT0FBTyxjQUFjLGVBQWUsRUFBRSw4QkFBOEIsMkJBQTJCLEVBQUUsVUFBVSxxQkFBcUIsRUFBRSwrQ0FBK0MsWUFBWSx1QkFBdUIsRUFBRSxFQUFFLGlEQUFpRCxZQUFZLHVCQUF1QixFQUFFLEVBQUUsVUFBVSx5Q0FBeUMsMENBQTBDLCtCQUErQixFQUFFLGdCQUFnQixrQkFBa0IsRUFBRSxnREFBZ0Qsa0JBQWtCLG1CQUFtQixFQUFFLEVBQUUsVUFBVSwwQkFBMEIsdUJBQXVCLCtCQUErQixvQkFBb0IsRUFBRSxpREFBaUQsWUFBWSxtQkFBbUIsMkJBQTJCLG1CQUFtQixFQUFFLEVBQUUsd0JB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RjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7Ozs7O0FDZjBCO0FBQ3NCOztBQUVoRCw2REFBVyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9hc3NldHMvaGVhZGVyLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmViYXMrTmV1ZSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1tYWluLWNvbG9yLTE6IHJnYmEoMjQ3LCAyNDcsIDI0NywgMC43OTUpO1xcbiAgLS1tYWluLWNvbG9yLTI6IHJnYigxNTAsIDExMSwgNTEpO1xcbiAgLS1tYWluLWNvbG9yLTM6IHJnYmEoOTQsIDQwLCA0MCwgMC43OTUpOyB9XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTsgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDBlbSkge1xcbiAgICBodG1sIHtcXG4gICAgICBmb250LXNpemU6IDU1JTsgfSB9XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4LjEyZW0pIHtcXG4gICAgaHRtbCB7XFxuICAgICAgZm9udC1zaXplOiA1MCU7IH0gfVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZWJhcyBOZXVlXFxcIiwgY3Vyc2l2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMik7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvci0xKTsgfVxcblxcbi5jb250YWluZXIge1xcbiAgcGFkZGluZzogMXJlbTsgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMi41ZW0pIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgcGFkZGluZzogMDsgfSB9XFxuXFxuLmJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvci0xKTtcXG4gIHBhZGRpbmc6IDAgMnJlbTsgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMS4yNWVtKSB7XFxuICAgIC5idG4ge1xcbiAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHBhZGRpbmc6IDA7IH0gfVxcbiAgLmJ0bjpob3Zlcjo6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTMpO1xcbiAgICBib3JkZXItd2lkdGg6IDAuNHJlbTsgfVxcbiAgLmJ0bjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbjogMC4zcmVtIGF1dG87XFxuICAgIGJvcmRlcjogMC4ycmVtIHNvbGlkIHZhcigtLW1haW4tY29sb3ItMSk7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcblxcbi5uYXZiYXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE7IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzEuMjVlbSkge1xcbiAgICAubmF2YmFyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9IH1cXG4gIC5uYXZiYXJfbG9nbyB7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDVyZW07XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlaW47XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyB9XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzEuMjVlbSkge1xcbiAgICAgIC5uYXZiYXJfbG9nbyB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMDsgfSB9XFxuICAubmF2YmFyX2xpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzEuMjVlbSkge1xcbiAgICAgIC5uYXZiYXJfbGlua3Mge1xcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH0gfVxcbiAgLm5hdmJhcl9idXR0b24ge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzLjVyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMS4yNWVtKSB7XFxuICAgICAgLm5hdmJhcl9idXR0b24ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAwOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDAlKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XFxuXFxuLmZvb3RlciB7XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgbWFyZ2luOiAtMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMyk7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgLmZvb3Rlcl9sb2dvIHtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XFxuICAuZm9vdGVyX251bWJlciB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTsgfVxcblxcbi5tYWluIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNywgNywgNywgMC44NzcpIDAlLCByZ2JhKDcsIDcsIDcsIDAuNTQ4KSAzOCUsIHRyYW5zcGFyZW50IDQwJSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTkuMzdlbSkge1xcbiAgICAubWFpbiB7XFxuICAgICAgaGVpZ2h0OiA5OHZoOyB9IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkge1xcbiAgICAubWFpbiB7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDcsIDcsIDcsIDAuODc3KSAwJSwgcmdiYSg3LCA3LCA3LCAwLjU0OCkgMTAwJSwgdHJhbnNwYXJlbnQgNDAlKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTsgfSB9XFxuICAubWFpbl9oZWFkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvci0xKTtcXG4gICAgdGV4dC1zaGFkb3c6IDAuMXJlbSAwLjRyZW0gMXJlbSBibGFjaztcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogNzV2aDtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycmVtIHZhcigtLW1haW4tY29sb3ItMSkgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gICAgZm9udC1zaXplOiAxMS4zcmVtOyB9XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODcuNWVtKSB7XFxuICAgICAgLm1haW5faGVhZGVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTNyZW07IH0gfVxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4LjEyZW0pIHtcXG4gICAgICAubWFpbl9oZWFkZXIge1xcbiAgICAgICAgaGVpZ2h0OiA2M3ZoO1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTByZW07IH0gfVxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5LjM3ZW0pIHtcXG4gICAgICAubWFpbl9oZWFkZXIge1xcbiAgICAgICAgaGVpZ2h0OiA1NXZoOyB9IH1cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XFxuICAgICAgLm1haW5faGVhZGVyIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwOyB9IH1cXG4gICAgLm1haW5faGVhZGVyLW5hbWUge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAgIC5tYWluX2hlYWRlci1zaG9wIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBmb250LXNpemU6IDE0cmVtO1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1NGVtOyB9XFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4Ny41ZW0pIHtcXG4gICAgICAgIC5tYWluX2hlYWRlci1zaG9wIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAxMnJlbTsgfSB9XFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OC4xMmVtKSB7XFxuICAgICAgICAubWFpbl9oZWFkZXItc2hvcCB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTByZW07IH0gfVxcbiAgICAubWFpbl9oZWFkZXItamFwYW5lc2Uge1xcbiAgICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBtYXJnaW4tdG9wOiAtMnJlbTtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmhvbWUtcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIG1hcmdpbjogNXJlbTtcXG4gIG1hcmdpbi10b3A6IDM1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMjByZW07XFxuICBmb250LXNpemU6IDRyZW07IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODcuNWVtKSB7XFxuICAgIC5ob21lLXBhZ2Uge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMnJlbTsgfSB9XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY4Ljc1ZW0pIHtcXG4gICAgLmhvbWUtcGFnZSB7XFxuICAgICAgZm9udC1zaXplOiAzLjhyZW07IH0gfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNC4zN2VtKSB7XFxuICAgIC5ob21lLXBhZ2Uge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTsgfSB9XFxuICAuaG9tZS1wYWdlX2luZm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk0LCA0MCwgNDAsIDAuNzk1KTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUuNjJlbSkge1xcbiAgICAgIC5ob21lLXBhZ2VfaW5mbyB7XFxuICAgICAgICB3aWR0aDogOTAlOyB9IH1cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MGVtKSB7XFxuICAgICAgLmhvbWUtcGFnZV9pbmZvIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH0gfVxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwZW0pIHtcXG4gICAgICAuaG9tZS1wYWdlX2luZm8tMiB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9IH1cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNC4zN2VtKSB7XFxuICAgICAgLmhvbWUtcGFnZV9pbmZvIHtcXG4gICAgICAgIHdpZHRoOiA5OSU7IH0gfVxcbiAgICAuaG9tZS1wYWdlX2luZm9fcGFyYS1tZW51IHtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICBmb250LXNpemU6IDRyZW07XFxuICAgICAgbWFyZ2luOiAycmVtOyB9XFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OC4xNWVtKSB7XFxuICAgICAgICAuaG9tZS1wYWdlX2luZm9fcGFyYS1tZW51IHtcXG4gICAgICAgICAgZm9udC1zaXplOiAzLjVyZW07IH0gfVxcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkge1xcbiAgICAgICAgLmhvbWUtcGFnZV9pbmZvX3BhcmEtbWVudSB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTsgfSB9XFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MGVtKSB7XFxuICAgICAgICAuaG9tZS1wYWdlX2luZm9fcGFyYS1tZW51IHtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfSB9XFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MGVtKSB7XFxuICAgICAgICAuaG9tZS1wYWdlX2luZm9fcGFyYS1tZW51IHtcXG4gICAgICAgICAgcGFkZGluZzogMXJlbTsgfSB9XFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNC4zN2VtKSB7XFxuICAgICAgICAuaG9tZS1wYWdlX2luZm9fcGFyYS1tZW51IHtcXG4gICAgICAgICAgZm9udC1zaXplOiAzLjFyZW07IH0gfVxcbiAgICAgIC5ob21lLXBhZ2VfaW5mb19wYXJhLW1lbnUgaDIge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogOXJlbTsgfVxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OC4xNWVtKSB7XFxuICAgICAgICAgIC5ob21lLXBhZ2VfaW5mb19wYXJhLW1lbnUgaDIge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHJlbTsgfSB9XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcXG4gICAgICAgICAgLmhvbWUtcGFnZV9pbmZvX3BhcmEtbWVudSBoMiB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiA3cmVtOyB9IH1cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQuMzdlbSkge1xcbiAgICAgICAgICAuaG9tZS1wYWdlX2luZm9fcGFyYS1tZW51IGgyIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDZyZW07IH0gfVxcbiAgICAgIC5ob21lLXBhZ2VfaW5mb19wYXJhLW1lbnUgcCB7XFxuICAgICAgICBsaW5lLWhlaWdodDogOHJlbTsgfVxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OC4xNWVtKSB7XFxuICAgICAgICAgIC5ob21lLXBhZ2VfaW5mb19wYXJhLW1lbnUgcCB7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDdyZW07IH0gfVxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNC4zN2VtKSB7XFxuICAgICAgICAgIC5ob21lLXBhZ2VfaW5mb19wYXJhLW1lbnUgcCB7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDZyZW07IH0gfVxcbiAgICAuaG9tZS1wYWdlX2luZm9fcGFyYS1jb250YWN0IHtcXG4gICAgICB3aWR0aDogNTAlO1xcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgICBtYXJnaW46IDJyZW07XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcmVtOyB9XFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OC4xNWVtKSB7XFxuICAgICAgICAuaG9tZS1wYWdlX2luZm9fcGFyYS1jb250YWN0IHtcXG4gICAgICAgICAgZm9udC1zaXplOiAzLjVyZW07IH0gfVxcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkge1xcbiAgICAgICAgLmhvbWUtcGFnZV9pbmZvX3BhcmEtY29udGFjdCB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTsgfSB9XFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MGVtKSB7XFxuICAgICAgICAuaG9tZS1wYWdlX2luZm9fcGFyYS1jb250YWN0IHtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfSB9XFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MGVtKSB7XFxuICAgICAgICAuaG9tZS1wYWdlX2luZm9fcGFyYS1jb250YWN0IHtcXG4gICAgICAgICAgcGFkZGluZzogMXJlbTsgfSB9XFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNC4zN2VtKSB7XFxuICAgICAgICAuaG9tZS1wYWdlX2luZm9fcGFyYS1jb250YWN0IHtcXG4gICAgICAgICAgZm9udC1zaXplOiAzLjFyZW07IH0gfVxcbiAgICAgIC5ob21lLXBhZ2VfaW5mb19wYXJhLWNvbnRhY3QgaDIge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogOXJlbTsgfVxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OC4xNWVtKSB7XFxuICAgICAgICAgIC5ob21lLXBhZ2VfaW5mb19wYXJhLWNvbnRhY3QgaDIge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHJlbTsgfSB9XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcXG4gICAgICAgICAgLmhvbWUtcGFnZV9pbmZvX3BhcmEtY29udGFjdCBoMiB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiA3cmVtOyB9IH1cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQuMzdlbSkge1xcbiAgICAgICAgICAuaG9tZS1wYWdlX2luZm9fcGFyYS1jb250YWN0IGgyIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDZyZW07IH0gfVxcbiAgICAgIC5ob21lLXBhZ2VfaW5mb19wYXJhLWNvbnRhY3QgcCB7XFxuICAgICAgICBsaW5lLWhlaWdodDogOHJlbTsgfVxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OC4xNWVtKSB7XFxuICAgICAgICAgIC5ob21lLXBhZ2VfaW5mb19wYXJhLWNvbnRhY3QgcCB7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDdyZW07IH0gfVxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNC4zN2VtKSB7XFxuICAgICAgICAgIC5ob21lLXBhZ2VfaW5mb19wYXJhLWNvbnRhY3QgcCB7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDZyZW07IH0gfVxcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTBlbSkge1xcbiAgICAgICAgLmhvbWUtcGFnZV9pbmZvX3BhcmEtY29udGFjdCB7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtOyB9IH1cXG4gICAgLmhvbWUtcGFnZV9pbmZvX2ltYWdlIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAgICAgLmhvbWUtcGFnZV9pbmZvX2ltYWdlLW1lbnUge1xcbiAgICAgICAgbWF4LXdpZHRoOiA0NSU7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICByaWdodDogLTglO1xcbiAgICAgICAgbWFyZ2luOiAycmVtO1xcbiAgICAgICAgYm94LXNoYWRvdzogMC4ycmVtIDAuOHJlbSAwLjVyZW0gcmdiYSg3LCA3LCA3LCAwLjQyNSk7IH1cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjguNzVlbSkge1xcbiAgICAgICAgICAuaG9tZS1wYWdlX2luZm9faW1hZ2UtbWVudSB7XFxuICAgICAgICAgICAgYm90dG9tOiA1JTsgfSB9XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1LjYyZW0pIHtcXG4gICAgICAgICAgLmhvbWUtcGFnZV9pbmZvX2ltYWdlLW1lbnUge1xcbiAgICAgICAgICAgIHJpZ2h0OiAwOyB9IH1cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTBlbSkge1xcbiAgICAgICAgICAuaG9tZS1wYWdlX2luZm9faW1hZ2UtbWVudSB7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MHJlbTtcXG4gICAgICAgICAgICBib3R0b206IDIwJTtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMjUlOyB9IH1cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQuMzdlbSkge1xcbiAgICAgICAgICAuaG9tZS1wYWdlX2luZm9faW1hZ2UtbWVudSB7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzOHJlbTsgfSB9XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI5LjM3ZW0pIHtcXG4gICAgICAgICAgLmhvbWUtcGFnZV9pbmZvX2ltYWdlLW1lbnUge1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0zNyU7IH0gfVxcbiAgICAgIC5ob21lLXBhZ2VfaW5mb19pbWFnZS1jb250YWN0IHtcXG4gICAgICAgIG1heC13aWR0aDogNDAlO1xcbiAgICAgICAgYm90dG9tOiAzJTtcXG4gICAgICAgIGxlZnQ6IC04JTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjhyZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICAgICAgYm94LXNoYWRvdzogLTAuMnJlbSAwLjhyZW0gMC41cmVtIHJnYmEoNywgNywgNywgMC40MjUpOyB9XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1LjYyZW0pIHtcXG4gICAgICAgICAgLmhvbWUtcGFnZV9pbmZvX2ltYWdlLWNvbnRhY3Qge1xcbiAgICAgICAgICAgIGxlZnQ6IC0yJTsgfSB9XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwZW0pIHtcXG4gICAgICAgICAgLmhvbWUtcGFnZV9pbmZvX2ltYWdlLWNvbnRhY3Qge1xcbiAgICAgICAgICAgIG1heC13aWR0aDogNDVyZW07XFxuICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICBib3R0b206IDE1JTtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMjIlOyB9IH1cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQuMzdlbSkge1xcbiAgICAgICAgICAuaG9tZS1wYWdlX2luZm9faW1hZ2UtY29udGFjdCB7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzM3JlbTsgfSB9XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI5LjM3ZW0pIHtcXG4gICAgICAgICAgLmhvbWUtcGFnZV9pbmZvX2ltYWdlLWNvbnRhY3Qge1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0zMSU7IH0gfVxcblxcbi5idXR0b25fY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDRyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTEpO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYm9yZGVyOiAwLjRyZW0gc29saWQgdmFyKC0tbWFpbi1jb2xvci0xKTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19pbml0aWFsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3BhZ2VzL19ob21lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSwwQ0FBZTtFQUNmLGlDQUFlO0VBQ2YsdUNBQWUsRUFBQTs7QUFHakI7RUFDRSxTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdaOzs7RUFHRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxnQkFBZ0IsRUFBQTtFQUNoQjtJQUZGO01BR0ksY0FBYyxFQUFBLEVBS2pCO0VBSEM7SUFMRjtNQU1JLGNBQWMsRUFBQSxFQUVqQjs7QUFDRDtFQUNFLGtDQUFrQztFQUNsQyxxQ0FBcUM7RUFDckMsMEJBQTBCLEVBQUE7O0FBRTVCO0VBQ0UsYUFBYSxFQUFBO0VBQ2I7SUFGRjtNQUdJLFVBQVUsRUFBQSxFQUViOztBQUVEO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZUFBZSxFQUFBO0VBQ2Y7SUFMRjtNQU1JLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsVUFBVSxFQUFBLEVBZ0JiO0VBeEJEO0lBV0ksaUNB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cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZWJhcytOZXVlJmRpc3BsYXk9c3dhcFxcXCIpO1xcbjpyb290IHtcXG4gIC0tbWFpbi1jb2xvci0xOiByZ2JhKDI0NywgMjQ3LCAyNDcsIDAuNzk1KTtcXG4gIC0tbWFpbi1jb2xvci0yOiByZ2IoMTUwLCAxMTEsIDUxKTtcXG4gIC0tbWFpbi1jb2xvci0zOiByZ2JhKDk0LCA0MCwgNDAsIDAuNzk1KTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMGVtKSB7XFxuICAgIGZvbnQtc2l6ZTogNTUlO1xcbiAgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OC4xMmVtKSB7XFxuICAgIGZvbnQtc2l6ZTogNTAlO1xcbiAgfVxcbn1cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmViYXMgTmV1ZVxcXCIsIGN1cnNpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTIpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3ItMSk7XFxufVxcbi5jb250YWluZXIge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjIuNWVtKSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVxcblxcbi5idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3ItMSk7XFxuICBwYWRkaW5nOiAwIDJyZW07XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMxLjI1ZW0pIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgJjpob3Zlcjo6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTMpO1xcbiAgICBib3JkZXItd2lkdGg6IDAuNHJlbTtcXG4gIH1cXG5cXG4gICY6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICByaWdodDogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW46IDAuM3JlbSBhdXRvO1xcbiAgICBib3JkZXI6IDAuMnJlbSBzb2xpZCB2YXIoLS1tYWluLWNvbG9yLTEpO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbi5uYXZiYXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMxLjI1ZW0pIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gICZfbG9nbyB7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDVyZW07XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlaW47XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMxLjI1ZW0pIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgfVxcbiAgfVxcbiAgJl9saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMS4yNWVtKSB7XFxuICAgICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICB9XFxuICAmX2J1dHRvbiB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMuNXJlbTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMS4yNWVtKSB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDAlKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxufVxcbi5mb290ZXIge1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIG1hcmdpbjogLTFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTMpO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAmX2xvZ28ge1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICB9XFxuICAmX251bWJlciB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG59XFxuXCIsXCJAbWl4aW4gaG9tZS1wYWdlLXBhcmEge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIG1hcmdpbjogMnJlbTtcXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzguMTVlbSkge1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gIH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwZW0pIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTBlbSkge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNC4zN2VtKSB7XFxuICAgIGZvbnQtc2l6ZTogMy4xcmVtO1xcbiAgfVxcbiAgJiBoMiB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogOXJlbTtcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OC4xNWVtKSB7XFxuICAgICAgZm9udC1zaXplOiA4cmVtO1xcbiAgICB9XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkge1xcbiAgICAgIGZvbnQtc2l6ZTogN3JlbTtcXG4gICAgfVxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0LjM3ZW0pIHtcXG4gICAgICBmb250LXNpemU6IDZyZW07XFxuICAgIH1cXG4gIH1cXG4gICYgcCB7XFxuICAgIGxpbmUtaGVpZ2h0OiA4cmVtO1xcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4LjE1ZW0pIHtcXG4gICAgICBsaW5lLWhlaWdodDogN3JlbTtcXG4gICAgfVxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0LjM3ZW0pIHtcXG4gICAgICBsaW5lLWhlaWdodDogNnJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ubWFpbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIDkwZGVnLFxcbiAgICAgIHJnYmEoNywgNywgNywgMC44NzcpIDAlLFxcbiAgICAgIHJnYmEoNywgNywgNywgMC41NDgpIDM4JSxcXG4gICAgICB0cmFuc3BhcmVudCA0MCVcXG4gICAgKSxcXG4gICAgdXJsKFxcXCJ+aGVhZGVyLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OS4zN2VtKSB7XFxuICAgIGhlaWdodDogOTh2aDtcXG4gIH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgOTBkZWcsXFxuICAgICAgICByZ2JhKDcsIDcsIDcsIDAuODc3KSAwJSxcXG4gICAgICAgIHJnYmEoNywgNywgNywgMC41NDgpIDEwMCUsXFxuICAgICAgICB0cmFuc3BhcmVudCA0MCVcXG4gICAgICApLFxcbiAgICAgIHVybChcXFwifmhlYWRlci5qcGdcXFwiKTtcXG4gIH1cXG4gICZfaGVhZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3ItMSk7XFxuICAgIHRleHQtc2hhZG93OiAwLjFyZW0gMC40cmVtIDFyZW0gYmxhY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDc1dmg7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnJlbSB2YXIoLS1tYWluLWNvbG9yLTEpIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICAgIGZvbnQtc2l6ZTogMTEuM3JlbTtcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4Ny41ZW0pIHtcXG4gICAgICBmb250LXNpemU6IDEzcmVtO1xcbiAgICB9XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzguMTJlbSkge1xcbiAgICAgIGhlaWdodDogNjN2aDtcXG4gICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgIGZvbnQtc2l6ZTogMTByZW07XFxuICAgIH1cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OS4zN2VtKSB7XFxuICAgICAgaGVpZ2h0OiA1NXZoO1xcbiAgICB9XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICB9XFxuICAgICYtbmFtZSB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgJi1zaG9wIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBmb250LXNpemU6IDE0cmVtO1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1NGVtO1xcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODcuNWVtKSB7XFxuICAgICAgICBmb250LXNpemU6IDEycmVtO1xcbiAgICAgIH1cXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4LjEyZW0pIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTByZW07XFxuICAgICAgfVxcbiAgICB9XFxuICAgICYtamFwYW5lc2Uge1xcbiAgICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBtYXJnaW4tdG9wOiAtMnJlbTtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5ob21lLXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBtYXJnaW46IDVyZW07XFxuICBtYXJnaW4tdG9wOiAzNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcmVtO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcblxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4Ny41ZW0pIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gIH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjguNzVlbSkge1xcbiAgICBmb250LXNpemU6IDMuOHJlbTtcXG4gIH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQuMzdlbSkge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgfVxcbiAgJl9pbmZvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NCwgNDAsIDQwLCAwLjc5NSk7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NS42MmVtKSB7XFxuICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwZW0pIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAmLTIge1xcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTBlbSkge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNC4zN2VtKSB7XFxuICAgICAgd2lkdGg6IDk5JTtcXG4gICAgfVxcbiAgICAmX3BhcmEtbWVudSB7XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgIEBpbmNsdWRlIGhvbWUtcGFnZS1wYXJhO1xcbiAgICB9XFxuICAgICZfcGFyYS1jb250YWN0IHtcXG4gICAgICBAaW5jbHVkZSBob21lLXBhZ2UtcGFyYTtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MGVtKSB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgJl9pbWFnZSB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgICAmLW1lbnUge1xcbiAgICAgICAgbWF4LXdpZHRoOiA0NSU7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICByaWdodDogLTglO1xcbiAgICAgICAgbWFyZ2luOiAycmVtO1xcbiAgICAgICAgYm94LXNoYWRvdzogMC4ycmVtIDAuOHJlbSAwLjVyZW0gcmdiYSg3LCA3LCA3LCAwLjQyNSk7XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY4Ljc1ZW0pIHtcXG4gICAgICAgICAgYm90dG9tOiA1JTtcXG4gICAgICAgIH1cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUuNjJlbSkge1xcbiAgICAgICAgICByaWdodDogMDtcXG4gICAgICAgIH1cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTBlbSkge1xcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwcmVtO1xcbiAgICAgICAgICBib3R0b206IDIwJTtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTI1JTtcXG4gICAgICAgIH1cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQuMzdlbSkge1xcbiAgICAgICAgICBtYXgtd2lkdGg6IDM4cmVtO1xcbiAgICAgICAgfVxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyOS4zN2VtKSB7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0zNyU7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgICYtY29udGFjdCB7XFxuICAgICAgICBtYXgtd2lkdGg6IDQwJTtcXG4gICAgICAgIGJvdHRvbTogMyU7XFxuICAgICAgICBsZWZ0OiAtOCU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMC44cmVtO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgICAgIGJveC1zaGFkb3c6IC0wLjJyZW0gMC44cmVtIDAuNXJlbSByZ2JhKDcsIDcsIDcsIDAuNDI1KTtcXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUuNjJlbSkge1xcbiAgICAgICAgICBsZWZ0OiAtMiU7XFxuICAgICAgICB9XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwZW0pIHtcXG4gICAgICAgICAgbWF4LXdpZHRoOiA0NXJlbTtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgYm90dG9tOiAxNSU7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0yMiU7XFxuICAgICAgICB9XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0LjM3ZW0pIHtcXG4gICAgICAgICAgbWF4LXdpZHRoOiAzM3JlbTtcXG4gICAgICAgIH1cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjkuMzdlbSkge1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMzElO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG4uYnV0dG9uX2NvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTEpO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYm9yZGVyOiAwLjRyZW0gc29saWQgdmFyKC0tbWFpbi1jb2xvci0xKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvZmNjYTRmYjc2NTg3YzdjMTk0N2JiNGM5NDZiZjU5ZmMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy8wZGU2ZjFjYTI1MTFmNTUyODUwNjY0NTFlNDE4ZWVhYS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzYyZGY2OTFlNDAyODcxZjYxYjM5M2NiMjQyYjMwZTk1LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvNzZlY2FiMGRjNjEzZjEyZWUxY2Q3MWFhMGZlNmQ1ZTEuc3ZnXCI7IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgbGF0ZXJuIGZyb20gXCIuLi9hc3NldHMvcGFwZXItbGFudGVybi5zdmdcIjtcbmltcG9ydCBjcmVhdGVIb21lUGFnZSBmcm9tIFwiLi9ob21lXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdmJhcigpIHtcbiAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xuICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGxvZ28uc3JjID0gbGF0ZXJuO1xuICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXJfbG9nb1wiKTtcbiAgbGV0IGJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGJ0bnMuY2xhc3NMaXN0LmFkZChcIm5hdmJhcl9saW5rc1wiKTtcbiAgbGV0IGhvbWVCdG4gPSBjcmVhdGVCdG4oXCJIb21lXCIpO1xuICBsZXQgTWVudUJ0biA9IGNyZWF0ZUJ0bihcIk1lbnVcIik7XG4gIGxldCBDb250YWN0QnRuID0gY3JlYXRlQnRuKFwiQ29udGFjdFwiKTtcbiAgYnRucy5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgYnRucy5hcHBlbmRDaGlsZChNZW51QnRuKTtcbiAgYnRucy5hcHBlbmRDaGlsZChDb250YWN0QnRuKTtcblxuICBuYXZiYXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChidG5zKTtcblxuICByZXR1cm4gbmF2YmFyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdG4odGV4dCkge1xuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBidG4uY2xhc3NMaXN0LmFkZChcIm5hdmJhcl9idXR0b25cIik7XG4gIGxldCBpbm5lcmJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBpbm5lcmJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuICBpbm5lcmJ0bi5pbm5lclRleHQgPSB0ZXh0O1xuICBidG4uYXBwZW5kQ2hpbGQoaW5uZXJidG4pO1xuICByZXR1cm4gYnRuO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlUGFnZSgpIHtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICBsZXQgbmF2ID0gY3JlYXRlTmF2YmFyKCk7XG4gIGxldCBob21lUGFnZSA9IGNyZWF0ZUhvbWVQYWdlKCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXYpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBleGVjdXRlUGFnZTtcbiIsImltcG9ydCBtZW51UGljIGZyb20gXCIuLi9hc3NldHMvaG9tZS1tZW51LmpwZ1wiO1xuaW1wb3J0IGNvbnRhY3RQaWMgZnJvbSBcIi4uL2Fzc2V0cy9ob21lLWNvbnRhY3QuanBnXCI7XG5pbXBvcnQgbGF0ZXJuIGZyb20gXCIuLi9hc3NldHMvcGFwZXItbGFudGVybi5zdmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlTWFpblNlYygpIHtcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICBsZXQgaGVhZGVyID0gY3JlYXRlSGVhZGVyKGBBLUNoYW4nc2AsIGBTaG9rdWRvdWApO1xuICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIodGV4dDEsIHRleHQyKSB7XG4gIGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaDEuY2xhc3NMaXN0LmFkZChcIm1haW5faGVhZGVyXCIpO1xuICBsZXQgc3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3BhbjEuY2xhc3NMaXN0LmFkZChcIm1haW5faGVhZGVyLW5hbWVcIik7XG4gIHNwYW4xLnRleHRDb250ZW50ID0gdGV4dDE7XG4gIGxldCBzcGFuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuMi5jbGFzc0xpc3QuYWRkKFwibWFpbl9oZWFkZXItc2hvcFwiKTtcbiAgc3BhbjIudGV4dENvbnRlbnQgPSB0ZXh0MjtcbiAgaDEuYXBwZW5kQ2hpbGQoc3BhbjEpO1xuICBoMS5hcHBlbmRDaGlsZChzcGFuMik7XG4gIHJldHVybiBoMTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VjdGlvbihoMnRleHQsIHRleHQsIGltZykge1xuICBsZXQgaG9tZXBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZXBhZ2VDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJob21lLXBhZ2VcIik7XG4gIGxldCBob21lcGFnZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lcGFnZUluZm8uY2xhc3NMaXN0LmFkZChcImhvbWUtcGFnZV9pbmZvXCIpO1xuICBsZXQgaG9tZXBhZ2VJbmZvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaDIudGV4dENvbnRlbnQgPSBoMnRleHQ7XG4gIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmEudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBsZXQgYnRuID0gY3JlYXRlQnV0dG9uKFwiR28gVGhlcmUhXCIpO1xuICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZS5zcmMgPSBpbWc7XG4gIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJob21lLXBhZ2VfaW5mb19pbWFnZVwiKTtcblxuICBpZiAoaDJ0ZXh0LnRvTG93ZXJDYXNlKCkgPT09IFwiY29udGFjdFwiKSB7XG4gICAgaG9tZXBhZ2VJbmZvLmNsYXNzTGlzdC5hZGQoXCJob21lLXBhZ2VfaW5mby0yXCIpO1xuICAgIGhvbWVwYWdlSW5mb1RleHQuY2xhc3NMaXN0LmFkZChcImhvbWUtcGFnZV9pbmZvX3BhcmEtY29udGFjdFwiKTtcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1wYWdlX2luZm9faW1hZ2UtY29udGFjdFwiKTtcbiAgICBob21lcGFnZUluZm9UZXh0LmFwcGVuZENoaWxkKGgyKTtcbiAgICBob21lcGFnZUluZm9UZXh0LmFwcGVuZENoaWxkKHBhcmEpO1xuICAgIGhvbWVwYWdlSW5mb1RleHQuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIGhvbWVwYWdlSW5mby5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgaG9tZXBhZ2VJbmZvLmFwcGVuZENoaWxkKGhvbWVwYWdlSW5mb1RleHQpO1xuICAgIGhvbWVwYWdlQ29udGVudC5hcHBlbmRDaGlsZChob21lcGFnZUluZm8pO1xuICB9IGVsc2Uge1xuICAgIGhvbWVwYWdlSW5mb1RleHQuY2xhc3NMaXN0LmFkZChcImhvbWUtcGFnZV9pbmZvX3BhcmEtbWVudVwiKTtcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1wYWdlX2luZm9faW1hZ2UtbWVudVwiKTtcbiAgICBob21lcGFnZUluZm9UZXh0LmFwcGVuZENoaWxkKGgyKTtcbiAgICBob21lcGFnZUluZm9UZXh0LmFwcGVuZENoaWxkKHBhcmEpO1xuICAgIGhvbWVwYWdlSW5mb1RleHQuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIGhvbWVwYWdlSW5mby5hcHBlbmRDaGlsZChob21lcGFnZUluZm9UZXh0KTtcbiAgICBob21lcGFnZUluZm8uYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGhvbWVwYWdlQ29udGVudC5hcHBlbmRDaGlsZChob21lcGFnZUluZm8pO1xuICB9XG5cbiAgcmV0dXJuIGhvbWVwYWdlQ29udGVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHRleHQpIHtcbiAgbGV0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uX2NvbnRhaW5lclwiKTtcblxuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuICBidG4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgcmV0dXJuIGJ0bkNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG5cbiAgbGV0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHJlc3RhdXJhbnROYW1lLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJfcGFyYVwiKTtcbiAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBgQS1DaGFuJ3MgU2hva3Vkb3VgO1xuXG4gIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuc3JjID0gbGF0ZXJuO1xuICBpbWcuY2xhc3NMaXN0LmFkZChcImZvb3Rlcl9sb2dvXCIpO1xuXG4gIGxldCByZXN0YXVyYW50QWRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHJlc3RhdXJhbnRBZHJlc3MuY2xhc3NMaXN0LmFkZChcImZvb3Rlcl9hZHJlc3NcIik7XG4gIHJlc3RhdXJhbnRBZHJlc3MudGV4dENvbnRlbnQgPSBgVG9reW8sIEphcGFuYDtcblxuICBsZXQgcmVzdGF1cmFudE51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICByZXN0YXVyYW50TnVtYmVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJfbnVtYmVyXCIpO1xuICByZXN0YXVyYW50TnVtYmVyLnRleHRDb250ZW50ID0gYDV4eC14eHgteHh4YDtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRBZHJlc3MpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE51bWJlcik7XG4gIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuICBsZXQgY29udGVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50cy5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbiAgbGV0IG1haW5Db250ZW50ID0gY3JlYXRlTWFpblNlYygpO1xuICBsZXQgbWVudUNvbnRlbnQgPSBjcmVhdGVTZWN0aW9uKFxuICAgIGBNZW51YCxcbiAgICBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRXhwbGljYWJvXG4gIHF1YWUsIG9mZmljaWEgZG9sb3JlbSBpbmNpZHVudCBwb3NzaW11cyBlbGlnZW5kaSwgZXhlcmNpdGF0aW9uZW0sXG4gIGRlYml0aXMhYCxcbiAgICBtZW51UGljXG4gICk7XG4gIGxldCBjb250YWN0Q29udGVudCA9IGNyZWF0ZVNlY3Rpb24oXG4gICAgYENvbnRhY3RgLFxuICAgIGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFeHBsaWNhYm9cbiAgcXVhZSwgb2ZmaWNpYSBkb2xvcmVtIGluY2lkdW50IHBvc3NpbXVzIGVsaWdlbmRpLCBleGVyY2l0YXRpb25lbSxcbiAgZGVsZWN0dXMgYWxpcXVpZCBpbiB0ZW5ldHVyIGRlYml0aXMhYCxcbiAgICBjb250YWN0UGljXG4gICk7XG5cbiAgbGV0IGZvb3RlciA9IGNyZWF0ZUZvb3RlcigpO1xuICBjb250ZW50cy5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG4gIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1lbnVDb250ZW50KTtcbiAgY29udGVudHMuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRlbnQpO1xuICBjb250ZW50cy5hcHBlbmRDaGlsZChmb290ZXIpO1xuICByZXR1cm4gY29udGVudHM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWVQYWdlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgXCIuL3Njc3MvbWFpbi5zY3NzXCI7XG5pbXBvcnQgZXhlY3V0ZVBhZ2UgZnJvbSBcIi4vbW9kdWxlcy9leGVjdXRlUGFnZVwiO1xuXG5leGVjdXRlUGFnZSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==