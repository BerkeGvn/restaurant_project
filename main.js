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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --main-color-1: rgba(247, 247, 247, 0.795);\n  --main-color-2: rgb(150, 111, 51);\n  --main-color-3: rgba(94, 40, 40, 0.795); }\n\n* {\n  margin: 0;\n  padding: 0; }\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nhtml {\n  font-size: 62.5%; }\n  @media only screen and (max-width: 100em) {\n    html {\n      font-size: 55%; } }\n  @media only screen and (max-width: 78.12em) {\n    html {\n      font-size: 50%; } }\n\nbody {\n  font-family: \"Bebas Neue\", cursive;\n  background-color: var(--main-color-2);\n  color: var(--main-color-1); }\n\n.container {\n  padding: 1rem; }\n  @media only screen and (max-width: 22.5em) {\n    .container {\n      padding: 0; } }\n\n.btn {\n  display: inline-block;\n  position: relative;\n  color: var(--main-color-1);\n  padding: 0 2rem; }\n  @media only screen and (max-width: 31.25em) {\n    .btn {\n      width: 90%;\n      text-align: center;\n      padding: 0; } }\n  .btn:hover::before {\n    border-color: var(--main-color-3);\n    border-width: 0.4rem; }\n  .btn::before {\n    content: \"\";\n    right: 0;\n    position: absolute;\n    margin: 0.3rem auto;\n    border: 0.2rem solid var(--main-color-1);\n    height: 80%;\n    width: 100%; }\n\n.navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  background-color: var(--main-color-2);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 10; }\n  @media only screen and (max-width: 31.25em) {\n    .navbar {\n      flex-direction: column;\n      position: relative;\n      justify-content: center;\n      align-items: center; } }\n  .navbar_logo {\n    height: 5rem;\n    margin-left: 5rem;\n    animation-name: fadein;\n    animation-duration: 1000ms;\n    backface-visibility: hidden;\n    animation-timing-function: ease-in-out; }\n    @media only screen and (max-width: 31.25em) {\n      .navbar_logo {\n        margin-left: 0; } }\n  .navbar_links {\n    display: flex;\n    font-size: 5rem;\n    justify-content: flex-end; }\n    @media only screen and (max-width: 31.25em) {\n      .navbar_links {\n        font-size: 4rem;\n        flex-direction: column;\n        justify-content: center;\n        width: 100%;\n        text-align: center; } }\n  .navbar_button {\n    padding-right: 3.5rem;\n    list-style: none; }\n    @media only screen and (max-width: 31.25em) {\n      .navbar_button {\n        width: 100%;\n        padding: 0; } }\n\n@keyframes fadein {\n  0% {\n    transform: translateY(-40%); }\n  100% {\n    transform: translateY(0); } }\n\n.footer {\n  height: 20rem;\n  margin: 15rem -1rem -1rem -1rem;\n  background-color: var(--main-color-3);\n  font-size: 3rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n  .footer_logo {\n    height: 5rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem; }\n  .footer_number {\n    font-size: 2rem; }\n\n.main {\n  height: 100vh;\n  background-image: linear-gradient(90deg, rgba(7, 7, 7, 0.877) 0%, rgba(7, 7, 7, 0.548) 38%, transparent 40%), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n  border-radius: 0.2rem;\n  display: flex;\n  align-items: center; }\n  @media only screen and (max-width: 59.37em) {\n    .main {\n      height: 98vh; } }\n  @media only screen and (max-width: 56.25em) {\n    .main {\n      justify-content: center;\n      background-image: linear-gradient(90deg, rgba(7, 7, 7, 0.877) 0%, rgba(7, 7, 7, 0.548) 100%, transparent 40%), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); } }\n  .main_header {\n    color: var(--main-color-1);\n    text-shadow: 0.1rem 0.4rem 1rem black;\n    margin-left: 2rem;\n    display: flex;\n    flex-direction: column;\n    height: 75vh;\n    padding: 2rem;\n    justify-content: space-evenly;\n    text-align: center;\n    border: 2rem var(--main-color-1) solid;\n    border-radius: 0.3rem;\n    font-size: 11.3rem; }\n    @media only screen and (max-width: 87.5em) {\n      .main_header {\n        font-size: 13rem; } }\n    @media only screen and (max-width: 78.12em) {\n      .main_header {\n        height: 63vh;\n        padding: 1rem;\n        font-size: 10rem; } }\n    @media only screen and (max-width: 59.37em) {\n      .main_header {\n        height: 55vh; } }\n    @media only screen and (max-width: 56.25em) {\n      .main_header {\n        margin-left: 0; } }\n    .main_header-name {\n      display: block; }\n    .main_header-shop {\n      display: block;\n      font-size: 14rem;\n      letter-spacing: 0.054em; }\n      @media only screen and (max-width: 87.5em) {\n        .main_header-shop {\n          font-size: 12rem; } }\n      @media only screen and (max-width: 78.12em) {\n        .main_header-shop {\n          font-size: 10rem; } }\n    .main_header-japanese {\n      font-size: 6rem;\n      display: block;\n      margin-top: -2rem;\n      display: none; }\n\n.home-page {\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  margin: 5rem;\n  margin-top: 35rem;\n  margin-bottom: 20rem;\n  font-size: 4rem; }\n  @media only screen and (max-width: 87.5em) {\n    .home-page {\n      margin-left: 2rem;\n      margin-right: 2rem; } }\n  @media only screen and (max-width: 68.75em) {\n    .home-page {\n      font-size: 3.8rem; } }\n  @media only screen and (max-width: 34.37em) {\n    .home-page {\n      margin-left: 1rem;\n      margin-right: 1rem; } }\n  .home-page_info {\n    background-color: rgba(94, 40, 40, 0.795);\n    width: 80%;\n    display: flex;\n    border-radius: 5px; }\n    @media only screen and (max-width: 65.62em) {\n      .home-page_info {\n        width: 90%; } }\n    @media only screen and (max-width: 50em) {\n      .home-page_info {\n        flex-direction: column-reverse;\n        align-items: center; } }\n    @media only screen and (max-width: 50em) {\n      .home-page_info-2 {\n        flex-direction: column; } }\n    @media only screen and (max-width: 34.37em) {\n      .home-page_info {\n        width: 99%; } }\n    .home-page_info_para-menu {\n      align-self: center;\n      width: 50%;\n      font-size: 4rem;\n      margin: 2rem; }\n      @media only screen and (max-width: 78.15em) {\n        .home-page_info_para-menu {\n          font-size: 3.5rem; } }\n      @media only screen and (max-width: 56.25em) {\n        .home-page_info_para-menu {\n          font-size: 3rem; } }\n      @media only screen and (max-width: 50em) {\n        .home-page_info_para-menu {\n          width: 100%;\n          text-align: center; } }\n      @media only screen and (max-width: 50em) {\n        .home-page_info_para-menu {\n          padding: 1rem; } }\n      @media only screen and (max-width: 34.37em) {\n        .home-page_info_para-menu {\n          font-size: 3.1rem; } }\n      .home-page_info_para-menu h2 {\n        margin-top: 1rem;\n        font-size: 9rem; }\n        @media only screen and (max-width: 78.15em) {\n          .home-page_info_para-menu h2 {\n            font-size: 8rem; } }\n        @media only screen and (max-width: 56.25em) {\n          .home-page_info_para-menu h2 {\n            font-size: 7rem; } }\n        @media only screen and (max-width: 34.37em) {\n          .home-page_info_para-menu h2 {\n            font-size: 6rem; } }\n      .home-page_info_para-menu p {\n        line-height: 8rem; }\n        @media only screen and (max-width: 78.15em) {\n          .home-page_info_para-menu p {\n            line-height: 7rem; } }\n        @media only screen and (max-width: 34.37em) {\n          .home-page_info_para-menu p {\n            line-height: 6rem; } }\n    .home-page_info_para-contact {\n      width: 50%;\n      font-size: 4rem;\n      margin: 2rem;\n      align-self: center;\n      margin-left: 0rem; }\n      @media only screen and (max-width: 78.15em) {\n        .home-page_info_para-contact {\n          font-size: 3.5rem; } }\n      @media only screen and (max-width: 56.25em) {\n        .home-page_info_para-contact {\n          font-size: 3rem; } }\n      @media only screen and (max-width: 50em) {\n        .home-page_info_para-contact {\n          width: 100%;\n          text-align: center; } }\n      @media only screen and (max-width: 50em) {\n        .home-page_info_para-contact {\n          padding: 1rem; } }\n      @media only screen and (max-width: 34.37em) {\n        .home-page_info_para-contact {\n          font-size: 3.1rem; } }\n      .home-page_info_para-contact h2 {\n        margin-top: 1rem;\n        font-size: 9rem; }\n        @media only screen and (max-width: 78.15em) {\n          .home-page_info_para-contact h2 {\n            font-size: 8rem; } }\n        @media only screen and (max-width: 56.25em) {\n          .home-page_info_para-contact h2 {\n            font-size: 7rem; } }\n        @media only screen and (max-width: 34.37em) {\n          .home-page_info_para-contact h2 {\n            font-size: 6rem; } }\n      .home-page_info_para-contact p {\n        line-height: 8rem; }\n        @media only screen and (max-width: 78.15em) {\n          .home-page_info_para-contact p {\n            line-height: 7rem; } }\n        @media only screen and (max-width: 34.37em) {\n          .home-page_info_para-contact p {\n            line-height: 6rem; } }\n      @media only screen and (max-width: 50em) {\n        .home-page_info_para-contact {\n          margin-left: 2rem; } }\n    .home-page_info_image {\n      position: relative;\n      border-radius: 5px; }\n      .home-page_info_image-menu {\n        max-width: 45%;\n        bottom: 0;\n        right: -8%;\n        margin: 2rem;\n        box-shadow: 0.2rem 0.8rem 0.5rem rgba(7, 7, 7, 0.425); }\n        @media only screen and (max-width: 68.75em) {\n          .home-page_info_image-menu {\n            bottom: 5%; } }\n        @media only screen and (max-width: 65.62em) {\n          .home-page_info_image-menu {\n            right: 0; } }\n        @media only screen and (max-width: 50em) {\n          .home-page_info_image-menu {\n            max-width: 50rem;\n            bottom: 20%;\n            margin-bottom: -25%; } }\n        @media only screen and (max-width: 34.37em) {\n          .home-page_info_image-menu {\n            max-width: 38rem; } }\n        @media only screen and (max-width: 29.37em) {\n          .home-page_info_image-menu {\n            margin-bottom: -37%; } }\n      .home-page_info_image-contact {\n        max-width: 40%;\n        bottom: 3%;\n        left: -8%;\n        margin-left: 0.8rem;\n        margin-bottom: 2rem;\n        box-shadow: -0.2rem 0.8rem 0.5rem rgba(7, 7, 7, 0.425); }\n        @media only screen and (max-width: 65.62em) {\n          .home-page_info_image-contact {\n            left: -2%; } }\n        @media only screen and (max-width: 50em) {\n          .home-page_info_image-contact {\n            max-width: 45rem;\n            left: 0;\n            bottom: 15%;\n            margin-bottom: -22%; } }\n        @media only screen and (max-width: 34.37em) {\n          .home-page_info_image-contact {\n            max-width: 33rem; } }\n        @media only screen and (max-width: 29.37em) {\n          .home-page_info_image-contact {\n            margin-bottom: -31%; } }\n\n.button_container {\n  margin-top: 4rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.button {\n  display: inline-block;\n  text-align: center;\n  color: var(--main-color-1);\n  padding: 1rem 2rem;\n  border: 0.4rem solid var(--main-color-1);\n  cursor: pointer; }\n\n.menu {\n  position: relative;\n  top: 8rem; }\n  .menu_food {\n    display: flex;\n    margin-bottom: 10rem; }\n    @media only screen and (max-width: 56.25em) {\n      .menu_food {\n        flex-direction: column; } }\n    .menu_food_header {\n      position: relative;\n      font-size: 8rem;\n      color: var(--main-color-1); }\n      .menu_food_header::after {\n        content: \"\";\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        background-color: var(--main-color-1);\n        height: 1rem;\n        animation-name: underlined;\n        animation-duration: 1s;\n        width: 84%; }\n    .menu_food_img {\n      margin-top: 8rem;\n      margin-left: 10rem;\n      width: 100%;\n      border: 2rem solid var(--main-color-3);\n      border-radius: 5px;\n      transition: all 1s; }\n      @media only screen and (max-width: 56.25em) {\n        .menu_food_img {\n          margin: 0;\n          width: 90%; } }\n      .menu_food_img:hover {\n        transform: scale(1.1); }\n      .menu_food_img-cap {\n        font-size: 4rem;\n        margin-left: 10rem;\n        letter-spacing: 0.2rem;\n        transition: all 1s; }\n        @media only screen and (max-width: 56.25em) {\n          .menu_food_img-cap {\n            margin: 0; } }\n      .menu_food_img:hover ~ .menu_food_img-cap {\n        transform: translateY(2.4rem); }\n    .menu_food_img-small {\n      width: 50%;\n      border: 1rem solid var(--main-color-3);\n      border-radius: 5px;\n      margin-top: 4rem;\n      margin-left: 6rem;\n      transition: all 1s; }\n      @media only screen and (max-width: 56.25em) {\n        .menu_food_img-small {\n          flex-direction: column;\n          margin-left: 0;\n          width: 90%; } }\n      .menu_food_img-small:hover {\n        transform: scale(1.1); }\n      .menu_food_img-small-cap-small {\n        font-size: 3rem;\n        margin-left: 6rem;\n        letter-spacing: 0.1rem;\n        transition: all 1s; }\n        @media only screen and (max-width: 56.25em) {\n          .menu_food_img-small-cap-small {\n            margin: 0; } }\n      .menu_food_img-small:hover ~ .menu_food_img-small-cap-small {\n        transform: translateY(1.4rem); }\n\n.menu_food_main_sub {\n  text-align: center; }\n  @media only screen and (max-width: 56.25em) {\n    .menu_food_main_sub {\n      display: flex; } }\n\n.menu_food_main {\n  text-align: center; }\n  @media only screen and (max-width: 56.25em) {\n    .menu_food_main {\n      margin-top: 10rem; } }\n\n@keyframes underlined {\n  0% {\n    width: 0%; }\n  100% {\n    width: 84%; } }\n\n.ContactPage {\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  @media only screen and (max-width: 31.25em) {\n    .ContactPage {\n      padding: 2rem 0.8rem; } }\n\n.btn {\n  display: inline-block;\n  position: relative;\n  color: var(--main-color-1);\n  padding: 0 2rem; }\n  @media only screen and (max-width: 31.25em) {\n    .btn {\n      width: 90%;\n      text-align: center;\n      padding: 0; } }\n  .btn:hover::before {\n    border-color: var(--main-color-3);\n    border-width: 0.4rem; }\n  .btn::before {\n    content: \"\";\n    right: 0;\n    position: absolute;\n    margin: 0.3rem auto;\n    border: 0.2rem solid var(--main-color-1);\n    height: 80%;\n    width: 100%; }\n\n.contact {\n  margin-top: 8rem;\n  display: flex;\n  width: 70%;\n  font-size: 2.5rem; }\n  @media only screen and (max-width: 93.7em) {\n    .contact {\n      width: 80%; } }\n  @media only screen and (max-width: 75em) {\n    .contact {\n      width: 90%;\n      font-size: 2rem; } }\n  @media only screen and (max-width: 50em) {\n    .contact {\n      flex-direction: column; } }\n  @media only screen and (max-width: 31.25em) {\n    .contact {\n      width: 100%;\n      margin-top: 22rem; } }\n  .contact_image {\n    display: block;\n    height: 90vh;\n    border-radius: 5px;\n    z-index: 1;\n    position: relative;\n    top: 50%;\n    transform: translateY(-50%);\n    right: -2%;\n    border: 1rem solid #1a1a1a; }\n    @media only screen and (max-width: 63.5em) {\n      .contact_image {\n        height: 75vh; } }\n    @media only screen and (max-width: 50em) {\n      .contact_image {\n        display: none; } }\n  .contact_info {\n    background-color: var(--main-color-2);\n    flex: 1;\n    border-radius: 5px;\n    margin-left: -0.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n    .contact_info_header {\n      font-size: 5rem;\n      text-decoration: underline;\n      margin-bottom: 1.5rem;\n      letter-spacing: 0.4rem; }\n    .contact_info_adress {\n      text-align: center;\n      margin-top: 8rem; }\n      @media only screen and (max-width: 75em) {\n        .contact_info_adress {\n          margin-top: 5rem; } }\n      .contact_info_adress_icon {\n        font-size: 5rem;\n        margin-bottom: 0.5rem; }\n      .contact_info_adress_text-location {\n        display: block; }\n    .contact_info_phone {\n      display: flex;\n      align-items: center;\n      font-size: 3rem;\n      letter-spacing: 0.4rem; }\n      .contact_info_phone_icon {\n        font-size: 4rem;\n        margin-right: 2rem; }\n    .contact_info_form {\n      z-index: 1;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      width: 100%;\n      text-align: center; }\n      .contact_info_form_text-flex {\n        display: flex;\n        margin-top: 6rem; }\n      .contact_info_form_icon {\n        font-size: 4rem;\n        margin-right: 0.8rem; }\n      .contact_info_form_text {\n        font-size: 4rem; }\n      .contact_info_form_input {\n        margin: 1.5rem;\n        display: inline-block;\n        width: 80%;\n        height: 3rem;\n        border: none;\n        background-color: var(--main-color-2);\n        color: var(--main-color-1);\n        font-size: 2.5rem;\n        border-bottom: solid 0.2rem var(--main-color-1); }\n        .contact_info_form_input-message {\n          height: 6rem; }\n        .contact_info_form_input:focus {\n          outline: none; }\n        .contact_info_form_input_btn {\n          font-size: 4rem; }\n\n.logo {\n  height: 5rem;\n  margin-bottom: 1rem; }\n", "",{"version":3,"sources":["webpack://./src/scss/_initial.scss","webpack://./src/scss/pages/_home.scss","webpack://./src/scss/pages/_menu.scss","webpack://./src/scss/pages/_contact.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap\");\n:root {\n  --main-color-1: rgba(247, 247, 247, 0.795);\n  --main-color-2: rgb(150, 111, 51);\n  --main-color-3: rgba(94, 40, 40, 0.795);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n  @media only screen and (max-width: 100em) {\n    font-size: 55%;\n  }\n  @media only screen and (max-width: 78.12em) {\n    font-size: 50%;\n  }\n}\nbody {\n  font-family: \"Bebas Neue\", cursive;\n  background-color: var(--main-color-2);\n  color: var(--main-color-1);\n}\n.container {\n  padding: 1rem;\n  @media only screen and (max-width: 22.5em) {\n    padding: 0;\n  }\n}\n\n.btn {\n  display: inline-block;\n  position: relative;\n  color: var(--main-color-1);\n  padding: 0 2rem;\n  @media only screen and (max-width: 31.25em) {\n    width: 90%;\n    text-align: center;\n    padding: 0;\n  }\n  &:hover::before {\n    border-color: var(--main-color-3);\n    border-width: 0.4rem;\n  }\n\n  &::before {\n    content: \"\";\n    right: 0;\n    position: absolute;\n    margin: 0.3rem auto;\n    border: 0.2rem solid var(--main-color-1);\n    height: 80%;\n    width: 100%;\n  }\n}\n.navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  background-color: var(--main-color-2);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 10;\n  @media only screen and (max-width: 31.25em) {\n    flex-direction: column;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n  }\n  &_logo {\n    height: 5rem;\n    margin-left: 5rem;\n    animation-name: fadein;\n    animation-duration: 1000ms;\n    backface-visibility: hidden;\n    animation-timing-function: ease-in-out;\n    @media only screen and (max-width: 31.25em) {\n      margin-left: 0;\n    }\n  }\n  &_links {\n    display: flex;\n    font-size: 5rem;\n    justify-content: flex-end;\n    @media only screen and (max-width: 31.25em) {\n      font-size: 4rem;\n      flex-direction: column;\n      justify-content: center;\n      width: 100%;\n      text-align: center;\n    }\n  }\n  &_button {\n    padding-right: 3.5rem;\n    list-style: none;\n    @media only screen and (max-width: 31.25em) {\n      width: 100%;\n      padding: 0;\n    }\n  }\n}\n@keyframes fadein {\n  0% {\n    transform: translateY(-40%);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n.footer {\n  height: 20rem;\n  margin: 15rem -1rem -1rem -1rem;\n  background-color: var(--main-color-3);\n  font-size: 3rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  &_logo {\n    height: 5rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n  &_number {\n    font-size: 2rem;\n  }\n}\n","@mixin home-page-para {\n  width: 50%;\n  font-size: 4rem;\n  margin: 2rem;\n  @media only screen and (max-width: 78.15em) {\n    font-size: 3.5rem;\n  }\n  @media only screen and (max-width: 56.25em) {\n    font-size: 3rem;\n  }\n  @media only screen and (max-width: 50em) {\n    width: 100%;\n    text-align: center;\n  }\n  @media only screen and (max-width: 50em) {\n    padding: 1rem;\n  }\n  @media only screen and (max-width: 34.37em) {\n    font-size: 3.1rem;\n  }\n  & h2 {\n    margin-top: 1rem;\n    font-size: 9rem;\n    @media only screen and (max-width: 78.15em) {\n      font-size: 8rem;\n    }\n    @media only screen and (max-width: 56.25em) {\n      font-size: 7rem;\n    }\n    @media only screen and (max-width: 34.37em) {\n      font-size: 6rem;\n    }\n  }\n  & p {\n    line-height: 8rem;\n    @media only screen and (max-width: 78.15em) {\n      line-height: 7rem;\n    }\n    @media only screen and (max-width: 34.37em) {\n      line-height: 6rem;\n    }\n  }\n}\n\n.main {\n  height: 100vh;\n  background-image: linear-gradient(\n      90deg,\n      rgba(7, 7, 7, 0.877) 0%,\n      rgba(7, 7, 7, 0.548) 38%,\n      transparent 40%\n    ),\n    url(\"~header.jpg\");\n  background-position: center;\n  background-size: cover;\n  border-radius: 0.2rem;\n  display: flex;\n  align-items: center;\n  @media only screen and (max-width: 59.37em) {\n    height: 98vh;\n  }\n  @media only screen and (max-width: 56.25em) {\n    justify-content: center;\n    background-image: linear-gradient(\n        90deg,\n        rgba(7, 7, 7, 0.877) 0%,\n        rgba(7, 7, 7, 0.548) 100%,\n        transparent 40%\n      ),\n      url(\"~header.jpg\");\n  }\n  &_header {\n    color: var(--main-color-1);\n    text-shadow: 0.1rem 0.4rem 1rem black;\n    margin-left: 2rem;\n    display: flex;\n    flex-direction: column;\n    height: 75vh;\n    padding: 2rem;\n    justify-content: space-evenly;\n    text-align: center;\n    border: 2rem var(--main-color-1) solid;\n    border-radius: 0.3rem;\n    font-size: 11.3rem;\n    @media only screen and (max-width: 87.5em) {\n      font-size: 13rem;\n    }\n    @media only screen and (max-width: 78.12em) {\n      height: 63vh;\n      padding: 1rem;\n      font-size: 10rem;\n    }\n    @media only screen and (max-width: 59.37em) {\n      height: 55vh;\n    }\n    @media only screen and (max-width: 56.25em) {\n      margin-left: 0;\n    }\n    &-name {\n      display: block;\n    }\n    &-shop {\n      display: block;\n      font-size: 14rem;\n      letter-spacing: 0.054em;\n      @media only screen and (max-width: 87.5em) {\n        font-size: 12rem;\n      }\n      @media only screen and (max-width: 78.12em) {\n        font-size: 10rem;\n      }\n    }\n    &-japanese {\n      font-size: 6rem;\n      display: block;\n      margin-top: -2rem;\n      display: none;\n    }\n  }\n}\n\n.home-page {\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  margin: 5rem;\n  margin-top: 35rem;\n  margin-bottom: 20rem;\n  font-size: 4rem;\n\n  @media only screen and (max-width: 87.5em) {\n    margin-left: 2rem;\n    margin-right: 2rem;\n  }\n  @media only screen and (max-width: 68.75em) {\n    font-size: 3.8rem;\n  }\n  @media only screen and (max-width: 34.37em) {\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n  &_info {\n    background-color: rgba(94, 40, 40, 0.795);\n    width: 80%;\n    display: flex;\n    border-radius: 5px;\n\n    @media only screen and (max-width: 65.62em) {\n      width: 90%;\n    }\n    @media only screen and (max-width: 50em) {\n      flex-direction: column-reverse;\n      align-items: center;\n    }\n    &-2 {\n      @media only screen and (max-width: 50em) {\n        flex-direction: column;\n      }\n    }\n    @media only screen and (max-width: 34.37em) {\n      width: 99%;\n    }\n    &_para-menu {\n      align-self: center;\n      @include home-page-para;\n    }\n    &_para-contact {\n      @include home-page-para;\n      align-self: center;\n      margin-left: 0rem;\n      @media only screen and (max-width: 50em) {\n        margin-left: 2rem;\n      }\n    }\n    &_image {\n      position: relative;\n      border-radius: 5px;\n\n      &-menu {\n        max-width: 45%;\n        bottom: 0;\n        right: -8%;\n        margin: 2rem;\n        box-shadow: 0.2rem 0.8rem 0.5rem rgba(7, 7, 7, 0.425);\n        @media only screen and (max-width: 68.75em) {\n          bottom: 5%;\n        }\n        @media only screen and (max-width: 65.62em) {\n          right: 0;\n        }\n        @media only screen and (max-width: 50em) {\n          max-width: 50rem;\n          bottom: 20%;\n          margin-bottom: -25%;\n        }\n        @media only screen and (max-width: 34.37em) {\n          max-width: 38rem;\n        }\n        @media only screen and (max-width: 29.37em) {\n          margin-bottom: -37%;\n        }\n      }\n      &-contact {\n        max-width: 40%;\n        bottom: 3%;\n        left: -8%;\n        margin-left: 0.8rem;\n        margin-bottom: 2rem;\n        box-shadow: -0.2rem 0.8rem 0.5rem rgba(7, 7, 7, 0.425);\n        @media only screen and (max-width: 65.62em) {\n          left: -2%;\n        }\n        @media only screen and (max-width: 50em) {\n          max-width: 45rem;\n          left: 0;\n          bottom: 15%;\n          margin-bottom: -22%;\n        }\n        @media only screen and (max-width: 34.37em) {\n          max-width: 33rem;\n        }\n        @media only screen and (max-width: 29.37em) {\n          margin-bottom: -31%;\n        }\n      }\n    }\n  }\n}\n.button_container {\n  margin-top: 4rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.button {\n  display: inline-block;\n  text-align: center;\n  color: var(--main-color-1);\n  padding: 1rem 2rem;\n  border: 0.4rem solid var(--main-color-1);\n  cursor: pointer;\n}\n","@mixin underlined {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: var(--main-color-1);\n  height: 1rem;\n  animation-name: underlined;\n  animation-duration: 1s;\n  width: 84%;\n}\n\n.menu {\n  position: relative;\n  top: 8rem;\n\n  &_food {\n    display: flex;\n    margin-bottom: 10rem;\n    @media only screen and (max-width: 56.25em) {\n      flex-direction: column;\n    }\n\n    &_header {\n      position: relative;\n      font-size: 8rem;\n      color: var(--main-color-1);\n      &::after {\n        @include underlined;\n      }\n    }\n\n    &_img {\n      margin-top: 8rem;\n      margin-left: 10rem;\n      width: 100%;\n      border: 2rem solid var(--main-color-3);\n      border-radius: 5px;\n      transition: all 1s;\n      @media only screen and (max-width: 56.25em) {\n        margin: 0;\n        width: 90%;\n      }\n      &:hover {\n        transform: scale(1.1);\n      }\n      &-cap {\n        font-size: 4rem;\n        margin-left: 10rem;\n        letter-spacing: 0.2rem;\n        transition: all 1s;\n        @media only screen and (max-width: 56.25em) {\n          margin: 0;\n        }\n      }\n      &:hover ~ &-cap {\n        transform: translateY(2.4rem);\n      }\n    }\n    &_img-small {\n      width: 50%;\n      border: 1rem solid var(--main-color-3);\n      border-radius: 5px;\n      margin-top: 4rem;\n      margin-left: 6rem;\n      transition: all 1s;\n      @media only screen and (max-width: 56.25em) {\n        flex-direction: column;\n        margin-left: 0;\n        width: 90%;\n      }\n      &:hover {\n        transform: scale(1.1);\n      }\n      &-cap-small {\n        font-size: 3rem;\n        margin-left: 6rem;\n        letter-spacing: 0.1rem;\n        transition: all 1s;\n        @media only screen and (max-width: 56.25em) {\n          margin: 0;\n        }\n      }\n      &:hover ~ &-cap-small {\n        transform: translateY(1.4rem);\n      }\n    }\n  }\n}\n.menu_food_main_sub {\n  text-align: center;\n  @media only screen and (max-width: 56.25em) {\n    display: flex;\n  }\n}\n.menu_food_main {\n  text-align: center;\n  @media only screen and (max-width: 56.25em) {\n    margin-top: 10rem;\n  }\n}\n@keyframes underlined {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 84%;\n  }\n}\n",".ContactPage {\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  @media only screen and (max-width: 31.25em) {\n    padding: 2rem 0.8rem;\n  }\n}\n\n.btn {\n  display: inline-block;\n  position: relative;\n  color: var(--main-color-1);\n  padding: 0 2rem;\n  @media only screen and (max-width: 31.25em) {\n    width: 90%;\n    text-align: center;\n    padding: 0;\n  }\n  &:hover::before {\n    border-color: var(--main-color-3);\n    border-width: 0.4rem;\n  }\n\n  &::before {\n    content: \"\";\n    right: 0;\n    position: absolute;\n    margin: 0.3rem auto;\n    border: 0.2rem solid var(--main-color-1);\n    height: 80%;\n    width: 100%;\n  }\n}\n\n.contact {\n  margin-top: 8rem;\n  display: flex;\n  width: 70%;\n  font-size: 2.5rem;\n  @media only screen and (max-width: 93.7em) {\n    width: 80%;\n  }\n  @media only screen and (max-width: 75em) {\n    width: 90%;\n    font-size: 2rem;\n  }\n  @media only screen and (max-width: 50em) {\n    flex-direction: column;\n  }\n  @media only screen and (max-width: 31.25em) {\n    width: 100%;\n    margin-top: 22rem;\n  }\n\n  &_image {\n    display: block;\n    height: 90vh;\n    border-radius: 5px;\n    z-index: 1;\n    position: relative;\n    top: 50%;\n    transform: translateY(-50%);\n    right: -2%;\n    border: 1rem solid #1a1a1a;\n    @media only screen and (max-width: 63.5em) {\n      height: 75vh;\n    }\n    @media only screen and (max-width: 50em) {\n      display: none;\n    }\n  }\n  &_info {\n    background-color: var(--main-color-2);\n    flex: 1;\n    border-radius: 5px;\n    margin-left: -0.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    &_header {\n      font-size: 5rem;\n      text-decoration: underline;\n      margin-bottom: 1.5rem;\n      letter-spacing: 0.4rem;\n    }\n    &_adress {\n      text-align: center;\n      margin-top: 8rem;\n      @media only screen and (max-width: 75em) {\n        margin-top: 5rem;\n      }\n      &_icon {\n        font-size: 5rem;\n        margin-bottom: 0.5rem;\n      }\n      &_text {\n        &-location {\n          display: block;\n        }\n      }\n    }\n\n    &_phone {\n      display: flex;\n      align-items: center;\n      font-size: 3rem;\n      letter-spacing: 0.4rem;\n      &_icon {\n        font-size: 4rem;\n        margin-right: 2rem;\n      }\n    }\n\n    &_form {\n      z-index: 1;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      width: 100%;\n      text-align: center;\n      &_text-flex {\n        display: flex;\n        margin-top: 6rem;\n      }\n      &_icon {\n        font-size: 4rem;\n        margin-right: 0.8rem;\n      }\n      &_text {\n        font-size: 4rem;\n      }\n      &_input {\n        margin: 1.5rem;\n        display: inline-block;\n        width: 80%;\n        height: 3rem;\n        border: none;\n        background-color: var(--main-color-2);\n        color: var(--main-color-1);\n        font-size: 2.5rem;\n        border-bottom: solid 0.2rem var(--main-color-1);\n        &-message {\n          height: 6rem;\n        }\n        &:focus {\n          outline: none;\n        }\n        &_btn {\n          font-size: 4rem;\n        }\n      }\n    }\n  }\n}\n.logo {\n  height: 5rem;\n  margin-bottom: 1rem;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/Soba.jpg":
/*!*****************************!*\
  !*** ./src/assets/Soba.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/74cb95d89005a2bdd73a2601f99f745d.jpg");

/***/ }),

/***/ "./src/assets/Tempura.jpg":
/*!********************************!*\
  !*** ./src/assets/Tempura.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/52d482c9206ebb89fffcd8875e9bb6be.jpg");

/***/ }),

/***/ "./src/assets/contact-lantern.jpg":
/*!****************************************!*\
  !*** ./src/assets/contact-lantern.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/3ccc36deaef5da2ef4296c5fd5112021.jpg");

/***/ }),

/***/ "./src/assets/gyoza.jpg":
/*!******************************!*\
  !*** ./src/assets/gyoza.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/df76338c6a2a76aefcdbfb90f8fb5b23.jpg");

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

/***/ "./src/assets/natto.jpg":
/*!******************************!*\
  !*** ./src/assets/natto.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/127f32e3befd2132f4146e75ffec5f2f.jpg");

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

/***/ "./src/assets/ramen.jpg":
/*!******************************!*\
  !*** ./src/assets/ramen.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/949ae1fd91a78606b1b4534e0b271470.jpg");

/***/ }),

/***/ "./src/assets/sushi1.jpg":
/*!*******************************!*\
  !*** ./src/assets/sushi1.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/7d6c1945a0b2bf1f2f6ea9f5543e144a.jpg");

/***/ }),

/***/ "./src/assets/sushi2.jpg":
/*!*******************************!*\
  !*** ./src/assets/sushi2.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/8c10d10a2abcc45a26f8b2ab0abace71.jpg");

/***/ }),

/***/ "./src/assets/sushi3.jpg":
/*!*******************************!*\
  !*** ./src/assets/sushi3.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/ca52681940238c30dbb3805e9f718a54.jpg");

/***/ }),

/***/ "./src/assets/udon.jpg":
/*!*****************************!*\
  !*** ./src/assets/udon.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/b8152a9fca942e9adfc1176e7026864e.jpg");

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

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_contact_lantern_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/contact-lantern.jpg */ "./src/assets/contact-lantern.jpg");
/* harmony import */ var _assets_paper_lantern_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/paper-lantern.svg */ "./src/assets/paper-lantern.svg");


function createFormDiv() {
  let formDiv = document.createElement("div");
  formDiv.classList.add("contact_info_form");

  let formFlex = document.createElement("div");
  formFlex.classList.add("contact_info_form_text-flex");

  let icon1 = document.createElement("i");
  icon1.className = "far fa-comment contact_info_form_icon";

  let messageText = document.createElement("p");
  messageText.classList.add("contact_info_form_text");
  messageText.textContent = "Message Us!";

  formFlex.appendChild(icon1);
  formFlex.appendChild(messageText);

  let form = createFrom();

  formDiv.appendChild(formFlex);
  formDiv.appendChild(form);

  return formDiv;
}

function createFrom() {
  let form = document.createElement("form");

  let textInput = document.createElement("input");
  textInput.classList.add("contact_info_form_input");
  textInput.type = "text";
  textInput.placeholder = "Name";

  let numberInput = document.createElement("input");
  numberInput.classList.add("contact_info_form_input");
  numberInput.type = "tel";
  numberInput.placeholder = "Number";

  let emailInput = document.createElement("input");
  emailInput.classList.add("contact_info_form_input");
  emailInput.type = "email";
  emailInput.placeholder = "Email";

  let message = document.createElement("textarea");
  message.classList.add("contact_info_form_input");
  message.classList.add("contact_info_form_input-message");
  message.placeholder = "Message";

  let btn = document.createElement("a");
  btn.classList.add("btn");
  btn.classList.add("contact_info_form_input_btn");
  btn.textContent = "Send Message";

  form.appendChild(textInput);
  form.appendChild(numberInput);
  form.appendChild(emailInput);
  form.appendChild(message);
  form.appendChild(btn);

  return form;
}

function createPhoneNum(text) {
  let phoneNum = document.createElement("div");
  phoneNum.classList.add("contact_info_phone");
  let i1 = document.createElement("i");
  i1.className = "fas fa-phone-alt contact_info_phone_icon";

  let number = document.createElement("p");
  number.classList.add("contact_info_phone_number");
  number.textContent = text;

  phoneNum.appendChild(i1);
  phoneNum.appendChild(number);
  return phoneNum;
}

function createAdress(location, city) {
  let adress = document.createElement("div");
  adress.classList.add("contact_info_adress");
  let i2 = document.createElement("i");
  i2.className = "fas fa-map-marker-alt contact_info_adress_icon";

  let adressPara = document.createElement("p");
  adressPara.classList.add("contact_info_adress_text");
  adressPara.textContent = location;

  let cityLoc = document.createElement("span");
  cityLoc.classList.add("contact_info_adress_text-location");
  cityLoc.textContent = city;

  adressPara.appendChild(cityLoc);

  adress.appendChild(i2);
  adress.appendChild(adressPara);
  return adress;
}

function createContactSec() {
  let contactSection = document.createElement("div");
  contactSection.classList.add("contact_Sec");

  let h2 = document.createElement("h2");
  h2.classList.add("contact_info_header");
  h2.textContent = "Contact Us!";

  let phoneNumber = createPhoneNum("5XX-XXX-XXX");
  let adress = createAdress(`Lorem, ipsum dolor sit amet .`, `Tokyo, Japan`);

  contactSection.appendChild(h2);
  contactSection.appendChild(phoneNumber);
  contactSection.appendChild(adress);

  return contactSection;
}

function createContactInfo() {
  let contactInfo = document.createElement("div");
  contactInfo.classList.add("contact_info");

  let contactSection = createContactSec();
  let form = createFormDiv();

  contactInfo.appendChild(contactSection);
  contactInfo.appendChild(form);

  let logo = document.createElement("img");
  logo.src = _assets_paper_lantern_svg__WEBPACK_IMPORTED_MODULE_1__.default;
  logo.classList.add("logo");

  return contactInfo;
}

function createContactImg(image) {
  let imgDiv = document.createElement("div");
  imgDiv.classList.add("image_cont");
  let img = document.createElement("img");
  img.classList.add("contact_image");
  img.src = image;
  imgDiv.appendChild(img);
  return imgDiv;
}

function createContactPage() {
  let ContactPage = document.createElement("div");
  ContactPage.classList.add("ContactPage");

  let contact = document.createElement("div");
  contact.classList.add("contact");
  let img = createContactImg(_assets_contact_lantern_jpg__WEBPACK_IMPORTED_MODULE_0__.default);
  let contactInfo = createContactInfo();
  contact.appendChild(img);
  contact.appendChild(contactInfo);

  ContactPage.appendChild(contact);
  return ContactPage;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);


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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/modules/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/modules/contact.js");





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

function createFooter() {
  let footer = document.createElement("footer");
  footer.classList.add("footer");

  let restaurantName = document.createElement("p");
  restaurantName.classList.add("footer_para");
  restaurantName.textContent = `A-Chan's Shokudou`;

  let img = document.createElement("img");
  img.src = _assets_paper_lantern_svg__WEBPACK_IMPORTED_MODULE_0__.default;
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
  let menuPage = (0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)();
  let contactPage = (0,_contact__WEBPACK_IMPORTED_MODULE_3__.default)();
  container.appendChild(nav);
  container.appendChild(homePage);
  let footer = createFooter();
  let btn = document.querySelectorAll(".btn");
  let button = document.querySelectorAll(".button");

  btn[0].addEventListener("click", () => {
    container.removeChild(container.lastChild);
    container.removeChild(container.lastChild);
    container.appendChild(homePage);
    document.body.style.backgroundColor = "rgb(150, 111, 51)";
    container.appendChild(footer);
    return (document.body.scrollTop = document.documentElement.scrollTop = 0);
  });
  btn[1].addEventListener("click", () => {
    container.removeChild(container.lastChild);
    container.removeChild(container.lastChild);
    container.appendChild(menuPage);
    document.body.style.backgroundColor = "rgb(150, 111, 51)";
    container.appendChild(footer);
    return (document.body.scrollTop = document.documentElement.scrollTop = 0);
  });
  btn[2].addEventListener("click", () => {
    container.removeChild(container.lastChild);
    container.removeChild(container.lastChild);
    container.appendChild(contactPage);
    document.body.style.backgroundColor = "rgb(94, 40, 40)";
    container.appendChild(footer);
    return (document.body.scrollTop = document.documentElement.scrollTop = 0);
  });
  button[0].addEventListener("click", () => {
    container.removeChild(container.lastChild);
    container.removeChild(container.lastChild);
    container.appendChild(menuPage);
    container.appendChild(footer);
    return (document.body.scrollTop = document.documentElement.scrollTop = 0);
  });
  button[1].addEventListener("click", () => {
    container.removeChild(container.lastChild);
    container.removeChild(container.lastChild);
    container.appendChild(contactPage);
    document.body.style.backgroundColor = "rgb(94, 40, 40)";
    container.appendChild(footer);
    return (document.body.scrollTop = document.documentElement.scrollTop = 0);
  });
  container.appendChild(footer);
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

  contents.appendChild(mainContent);
  contents.appendChild(menuContent);
  contents.appendChild(contactContent);
  return contents;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);


/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_ramen_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/ramen.jpg */ "./src/assets/ramen.jpg");
/* harmony import */ var _assets_Soba_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/Soba.jpg */ "./src/assets/Soba.jpg");
/* harmony import */ var _assets_udon_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/udon.jpg */ "./src/assets/udon.jpg");
/* harmony import */ var _assets_sushi1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/sushi1.jpg */ "./src/assets/sushi1.jpg");
/* harmony import */ var _assets_sushi2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/sushi2.jpg */ "./src/assets/sushi2.jpg");
/* harmony import */ var _assets_sushi3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/sushi3.jpg */ "./src/assets/sushi3.jpg");
/* harmony import */ var _assets_Tempura_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/Tempura.jpg */ "./src/assets/Tempura.jpg");
/* harmony import */ var _assets_gyoza_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/gyoza.jpg */ "./src/assets/gyoza.jpg");
/* harmony import */ var _assets_natto_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/natto.jpg */ "./src/assets/natto.jpg");










function createMainFood(text, image) {
  let mainDiv = document.createElement("div");
  mainDiv.classList.add("menu_food_main");
  let figure = document.createElement("figure");
  let figCap = document.createElement("figcaption");
  figCap.classList.add("menu_food_img-cap");
  figCap.textContent = text;
  let img = document.createElement("img");
  img.classList.add("menu_food_img");
  img.src = image;

  figure.appendChild(img);
  figure.appendChild(figCap);
  mainDiv.appendChild(figure);
  return mainDiv;
}
function createSubfood(text1, image1, text2, image2) {
  let subDiv = document.createElement("div");
  subDiv.classList.add("menu_food_main_sub");
  let figure = document.createElement("figure");
  let figCap = document.createElement("figcaption");
  figCap.classList.add("menu_food_img-small-cap-small");
  figCap.textContent = text1;
  let img = document.createElement("img");
  img.classList.add("menu_food_img-small");
  img.src = image1;

  let figure2 = document.createElement("figure");
  let figCap2 = document.createElement("figcaption");
  figCap2.classList.add("menu_food_img-small-cap-small");
  figCap2.textContent = text2;
  let img2 = document.createElement("img");
  img2.classList.add("menu_food_img-small");
  img2.src = image2;

  figure.appendChild(img);
  figure.appendChild(figCap);
  subDiv.appendChild(figure);

  figure.appendChild(img2);
  figure.appendChild(figCap2);
  subDiv.appendChild(figure2);
  return subDiv;
}

function createFoodDiv(food) {
  let foodSec = document.createElement("div");
  foodSec.classList.add("foodsec");
  let foodType = food.toLowerCase();
  let foodMenu = document.createElement("div");
  foodMenu.classList.add("menu_food");
  let foodMain;
  let foodSub1;
  let header;
  if (foodType === "noodle") {
    header = createFoodHeader("Noodles");
    foodMain = createMainFood("Ramen", _assets_ramen_jpg__WEBPACK_IMPORTED_MODULE_0__.default);
    foodSub1 = createSubfood("Udon", _assets_udon_jpg__WEBPACK_IMPORTED_MODULE_2__.default, "Soba", _assets_Soba_jpg__WEBPACK_IMPORTED_MODULE_1__.default);
  } else if (foodType === "sushi") {
    header = createFoodHeader("Sushi");
    foodMain = createMainFood("Sushi", _assets_sushi1_jpg__WEBPACK_IMPORTED_MODULE_3__.default);
    foodSub1 = createSubfood("Sushi", _assets_sushi2_jpg__WEBPACK_IMPORTED_MODULE_4__.default, "Sushi", _assets_sushi3_jpg__WEBPACK_IMPORTED_MODULE_5__.default);
  } else {
    header = createFoodHeader("Other Foods");
    foodMain = createMainFood("Tempura", _assets_Tempura_jpg__WEBPACK_IMPORTED_MODULE_6__.default);
    foodSub1 = createSubfood("Gyoza", _assets_gyoza_jpg__WEBPACK_IMPORTED_MODULE_7__.default, "Natto", _assets_natto_jpg__WEBPACK_IMPORTED_MODULE_8__.default);
  }

  foodMenu.appendChild(foodMain);
  foodMenu.appendChild(foodSub1);
  foodSec.appendChild(header);
  foodSec.appendChild(foodMenu);
  return foodSec;
}

function createFoodHeader(text) {
  let h2 = document.createElement("h2");
  h2.classList.add("menu_food_header");
  h2.textContent = text;
  return h2;
}

function createMenu() {
  let menu = document.createElement("div");
  menu.classList.add("menu");

  let noodles = createFoodDiv("noodle");

  let sushi = createFoodDiv("sushi");

  let other = createFoodDiv("other");

  menu.appendChild(noodles);
  menu.appendChild(sushi);
  menu.appendChild(other);

  return menu;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9hc3NldHMvU29iYS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL2Fzc2V0cy9UZW1wdXJhLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvYXNzZXRzL2NvbnRhY3QtbGFudGVybi5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL2Fzc2V0cy9neW96YS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL2Fzc2V0cy9oZWFkZXIuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9hc3NldHMvaG9tZS1jb250YWN0LmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvYXNzZXRzL2hvbWUtbWVudS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL2Fzc2V0cy9uYXR0by5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL2Fzc2V0cy9wYXBlci1sYW50ZXJuLnN2ZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvYXNzZXRzL3JhbWVuLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvYXNzZXRzL3N1c2hpMS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL2Fzc2V0cy9zdXNoaTIuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9hc3NldHMvc3VzaGkzLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvYXNzZXRzL3Vkb24uanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9zY3NzL21haW4uc2Nzcz82ZDI1Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9tb2R1bGVzL2V4ZWN1dGVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUNPO0FBQ2xDO0FBQ2pFLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Ysd0hBQXdIO0FBQ3hILHlDQUF5QyxzRkFBK0IsQ0FBQyx1REFBNkI7QUFDdEc7QUFDQSxpREFBaUQsK0NBQStDLHNDQUFzQyw0Q0FBNEMsRUFBRSxPQUFPLGNBQWMsZUFBZSxFQUFFLDhCQUE4QiwyQkFBMkIsRUFBRSxVQUFVLHFCQUFxQixFQUFFLCtDQUErQyxZQUFZLHVCQUF1QixFQUFFLEVBQUUsaURBQWlELFlBQVksdUJBQXVCLEVBQUUsRUFBRSxVQUFVLHlDQUF5QywwQ0FBMEMsK0JBQStCLEVBQUUsZ0JBQWdCLGtCQUFrQixFQUFFLGdEQUFnRCxrQkFBa0IsbUJBQW1CLEVBQUUsRUFBRSxVQUFVLDBCQUEwQix1QkFBdUIsK0JBQStCLG9CQUFvQixFQUFFLGlEQUFpRCxZQUFZLG1CQUFtQiwyQkFBMkIsbUJBQW1CLEVBQUUsRUFBRSx3QkFBd0Isd0NBQXdDLDJCQUEyQixFQUFFLGtCQUFrQixvQkFBb0IsZUFBZSx5QkFBeUIsMEJBQTBCLCtDQUErQyxrQkFBa0Isa0JBQWtCLEVBQUUsYUFBYSxvQkFBb0IsV0FBVyxZQUFZLGlCQUFpQiwwQ0FBMEMsa0JBQWtCLG1DQUFtQyx3QkFBd0IsZ0JBQWdCLEVBQUUsaURBQWlELGVBQWUsK0JBQStCLDJCQUEyQixnQ0FBZ0MsNEJBQTRCLEVBQUUsRUFBRSxrQkFBa0IsbUJBQW1CLHdCQUF3Qiw2QkFBNkIsaUNBQWlDLGtD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Qzs7Ozs7OztVQzVHMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7OztBQ2YwQjtBQUNzQjs7QUFFaEQsNkRBQVciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vYXNzZXRzL2hlYWRlci5qcGdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlYmFzK05ldWUmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tbWFpbi1jb2xvci0xOiByZ2JhKDI0NywgMjQ3LCAyNDcsIDAuNzk1KTtcXG4gIC0tbWFpbi1jb2xvci0yOiByZ2IoMTUwLCAxMTEsIDUxKTtcXG4gIC0tbWFpbi1jb2xvci0zOiByZ2JhKDk0LCA0MCwgNDAsIDAuNzk1KTsgfVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwZW0pIHtcXG4gICAgaHRtbCB7XFxuICAgICAgZm9udC1zaXplOiA1NSU7IH0gfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OC4xMmVtKSB7XFxuICAgIGh0bWwge1xcbiAgICAgIGZvbnQtc2l6ZTogNTAlOyB9IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmViYXMgTmV1ZVxcXCIsIGN1cnNpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTIpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3ItMSk7IH1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDFyZW07IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjIuNWVtKSB7XFxuICAgIC5jb250YWluZXIge1xcbiAgICAgIHBhZGRpbmc6IDA7IH0gfVxcblxcbi5idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3ItMSk7XFxuICBwYWRkaW5nOiAwIDJyZW07IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzEuMjVlbSkge1xcbiAgICAuYnRuIHtcXG4gICAgICB3aWR0aDogOTAlO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBwYWRkaW5nOiAwOyB9IH1cXG4gIC5idG46aG92ZXI6OmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0zKTtcXG4gICAgYm9yZGVyLXdpZHRoOiAwLjRyZW07IH1cXG4gIC5idG46OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICByaWdodDogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW46IDAuM3JlbSBhdXRvO1xcbiAgICBib3JkZXI6IDAuMnJlbSBzb2xpZCB2YXIoLS1tYWluLWNvbG9yLTEpO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ubmF2YmFyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAxMDsgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMS4yNWVtKSB7XFxuICAgIC5uYXZiYXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH0gfVxcbiAgLm5hdmJhcl9sb2dvIHtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogNXJlbTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XFxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IH1cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMS4yNWVtKSB7XFxuICAgICAgLm5hdmJhcl9sb2dvIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwOyB9IH1cXG4gIC5uYXZiYXJfbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMS4yNWVtKSB7XFxuICAgICAgLm5hdmJhcl9saW5rcyB7XFxuICAgICAgICBmb250LXNpemU6IDRyZW07XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfSB9XFxuICAubmF2YmFyX2J1dHRvbiB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMuNXJlbTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTsgfVxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMxLjI1ZW0pIHtcXG4gICAgICAubmF2YmFyX2J1dHRvbiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDA7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZWluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MCUpOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cXG5cXG4uZm9vdGVyIHtcXG4gIGhlaWdodDogMjByZW07XFxuICBtYXJnaW46IDE1cmVtIC0xcmVtIC0xcmVtIC0xcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0zKTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAuZm9vdGVyX2xvZ28ge1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXG4gIC5mb290ZXJfbnVtYmVyIHtcXG4gICAgZm9udC1zaXplOiAycmVtOyB9XFxuXFxuLm1haW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg3LCA3LCA3LCAwLjg3NykgMCUsIHJnYmEoNywgNywgNywgMC41NDgpIDM4JSwgdHJhbnNwYXJlbnQgNDAlKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OS4zN2VtKSB7XFxuICAgIC5tYWluIHtcXG4gICAgICBoZWlnaHQ6IDk4dmg7IH0gfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XFxuICAgIC5tYWluIHtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNywgNywgNywgMC44NzcpIDAlLCByZ2JhKDcsIDcsIDcsIDAuNTQ4KSAxMDAlLCB0cmFuc3BhcmVudCA0MCUpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyB9IH1cXG4gIC5tYWluX2hlYWRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTEpO1xcbiAgICB0ZXh0LXNoYWRvdzogMC4xcmVtIDAuNHJlbSAxcmVtIGJsYWNrO1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiA3NXZoO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDJyZW0gdmFyKC0tbWFpbi1jb2xvci0xKSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgICBmb250LXNpemU6IDExLjNyZW07IH1cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4Ny41ZW0pIHtcXG4gICAgICAubWFpbl9oZWFkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAxM3JlbTsgfSB9XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzguMTJlbSkge1xcbiAgICAgIC5tYWluX2hlYWRlciB7XFxuICAgICAgICBoZWlnaHQ6IDYzdmg7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgICAgZm9udC1zaXplOiAxMHJlbTsgfSB9XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTkuMzdlbSkge1xcbiAgICAgIC5tYWluX2hlYWRlciB7XFxuICAgICAgICBoZWlnaHQ6IDU1dmg7IH0gfVxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcXG4gICAgICAubWFpbl9oZWFkZXIge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7IH0gfVxcbiAgICAubWFpbl9oZWFkZXItbmFtZSB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gICAgLm1haW5faGVhZGVyLXNob3Age1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIGZvbnQtc2l6ZTogMTRyZW07XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDU0ZW07IH1cXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg3LjVlbSkge1xcbiAgICAgICAgLm1haW5faGVhZGVyLXNob3Age1xcbiAgICAgICAgICBmb250LXNpemU6IDEycmVtOyB9IH1cXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4LjEyZW0pIHtcXG4gICAgICAgIC5tYWluX2hlYWRlci1zaG9wIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAxMHJlbTsgfSB9XFxuICAgIC5tYWluX2hlYWRlci1qYXBhbmVzZSB7XFxuICAgICAgZm9udC1zaXplOiA2cmVtO1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIG1hcmdpbi10b3A6IC0ycmVtO1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uaG9tZS1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgbWFyZ2luOiA1cmVtO1xcbiAgbWFyZ2luLXRvcDogMzVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAyMHJlbTtcXG4gIGZvbnQtc2l6ZTogNHJlbTsgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4Ny41ZW0pIHtcXG4gICAgLmhvbWUtcGFnZSB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtOyB9IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjguNzVlbSkge1xcbiAgICAuaG9tZS1wYWdlIHtcXG4gICAgICBmb250LXNpemU6IDMuOHJlbTsgfSB9XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0LjM3ZW0pIHtcXG4gICAgLmhvbWUtcGFnZSB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtOyB9IH1cXG4gIC5ob21lLXBhZ2VfaW5mbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTQsIDQwLCA0MCwgMC43OTUpO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NS42MmVtKSB7XFxuICAgICAgLmhvbWUtcGFnZV9pbmZvIHtcXG4gICAgICAgIHdpZHRoOiA5MCU7IH0gfVxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwZW0pIHtcXG4gICAgICAuaG9tZS1wYWdlX2luZm8ge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfSB9XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTBlbSkge1xcbiAgICAgIC5ob21lLXBhZ2VfaW5mby0yIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH0gfVxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0LjM3ZW0pIHtcXG4gICAgICAuaG9tZS1wYWdlX2luZm8ge1xcbiAgICAgICAgd2lkdGg6IDk5JTsgfSB9XFxuICAgIC5ob21lLXBhZ2VfaW5mb19wYXJhLW1lbnUge1xcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICB3aWR0aDogNTAlO1xcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgICBtYXJnaW46IDJyZW07IH1cXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4LjE1ZW0pIHtcXG4gICAgICAgIC5ob21lLXBhZ2VfaW5mb19wYXJhLW1lbnUge1xcbiAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTsgfSB9XFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XFxuICAgICAgICAuaG9tZS1wYWdlX2luZm9fcGFyYS1tZW51IHtcXG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtOyB9IH1cXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwZW0pIHtcXG4gICAgICAgIC5ob21lLXBhZ2VfaW5mb19wYXJhLW1lbnUge1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9IH1cXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwZW0pIHtcXG4gICAgICAgIC5ob21lLXBhZ2VfaW5mb19wYXJhLW1lbnUge1xcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtOyB9IH1cXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0LjM3ZW0pIHtcXG4gICAgICAgIC5ob21lLXBhZ2VfaW5mb19wYXJhLW1lbnUge1xcbiAgICAgICAgICBmb250LXNpemU6IDMuMXJlbTsgfSB9XFxuICAgICAgLmhvbWUtcGFnZV9pbmZvX3BhcmEtbWVudSBoMiB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICAgICAgZm9udC1zaXplOiA5cmVtOyB9XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4LjE1ZW0pIHtcXG4gICAgICAgICAgLmhvbWUtcGFnZV9pbmZvX3BhcmEtbWVudSBoMiB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiA4cmVtOyB9IH1cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkge1xcbiAgICAgICAgICAuaG9tZS1wYWdlX2luZm9fcGFyYS1tZW51IGgyIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDdyZW07IH0gfVxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNC4zN2VtKSB7XFxuICAgICAgICAgIC5ob21lLXBhZ2VfaW5mb19wYXJhLW1lbnUgaDIge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNnJlbTsgfSB9XFxuICAgICAgLmhvbWUtcGFnZV9pbmZvX3BhcmEtbWVudSBwIHtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA4cmVtOyB9XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4LjE1ZW0pIHtcXG4gICAgICAgICAgLmhvbWUtcGFnZV9pbmZvX3BhcmEtbWVudSBwIHtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogN3JlbTsgfSB9XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0LjM3ZW0pIHtcXG4gICAgICAgICAgLmhvbWUtcGFnZV9pbmZvX3BhcmEtbWVudSBwIHtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNnJlbTsgfSB9XFxuICAgIC5ob21lLXBhZ2VfaW5mb19wYXJhLWNvbnRhY3Qge1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICAgIG1hcmdpbjogMnJlbTtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDByZW07IH1cXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4LjE1ZW0pIHtcXG4gICAgICAgIC5ob21lLXBhZ2VfaW5mb19wYXJhLWNvbnRhY3Qge1xcbiAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTsgfSB9XFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XFxuICAgICAgICAuaG9tZS1wYWdlX2luZm9fcGFyYS1jb250YWN0IHtcXG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtOyB9IH1cXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwZW0pIHtcXG4gICAgICAgIC5ob21lLXBhZ2VfaW5mb19wYXJhLWNvbnRhY3Qge1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9IH1cXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwZW0pIHtcXG4gICAgICAgIC5ob21lLXBhZ2VfaW5mb19wYXJhLWNvbnRhY3Qge1xcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtOyB9IH1cXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0LjM3ZW0pIHtcXG4gICAgICAgIC5ob21lLXBhZ2VfaW5mb19wYXJhLWNvbnRhY3Qge1xcbiAgICAgICAgICBmb250LXNpemU6IDMuMXJlbTsgfSB9XFxuICAgICAgLmhvbWUtcGFnZV9pbmZvX3BhcmEtY29udGFjdCBoMiB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICAgICAgZm9udC1zaXplOiA5cmVtOyB9XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4LjE1ZW0pIHtcXG4gICAgICAgICAgLmhvbWUtcGFnZV9pbmZvX3BhcmEtY29udGFjdCBoMiB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiA4cmVtOyB9IH1cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkge1xcbiAgICAgICAgICAuaG9tZS1wYWdlX2luZm9fcGFyYS1jb250YWN0IGgyIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDdyZW07IH0gfVxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNC4zN2VtKSB7XFxuICAgICAgICAgIC5ob21lLXBhZ2VfaW5mb19wYXJhLWNvbnRhY3QgaDIge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNnJlbTsgfSB9XFxuICAgICAgLmhvbWUtcGFnZV9pbmZvX3BhcmEtY29udGFjdCBwIHtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA4cmVtOyB9XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4LjE1ZW0pIHtcXG4gICAgICAgICAgLmhvbWUtcGFnZV9pbmZvX3BhcmEtY29udGFjdCBwIHtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogN3JlbTsgfSB9XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0LjM3ZW0pIHtcXG4gICAgICAgICAgLmhvbWUtcGFnZV9pbmZvX3BhcmEtY29udGFjdCBwIHtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNnJlbTsgfSB9XFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MGVtKSB7XFxuICAgICAgICAuaG9tZS1wYWdlX2luZm9fcGFyYS1jb250YWN0IHtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07IH0gfVxcbiAgICAuaG9tZS1wYWdlX2luZm9faW1hZ2Uge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG4gICAgICAuaG9tZS1wYWdlX2luZm9faW1hZ2UtbWVudSB7XFxuICAgICAgICBtYXgtd2lkdGg6IDQ1JTtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIHJpZ2h0OiAtOCU7XFxuICAgICAgICBtYXJnaW46IDJyZW07XFxuICAgICAgICBib3gtc2hhZG93OiAwLjJyZW0gMC44cmVtIDAuNXJlbSByZ2JhKDcsIDcsIDcsIDAuNDI1KTsgfVxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2OC43NWVtKSB7XFxuICAgICAgICAgIC5ob21lLXBhZ2VfaW5mb19pbWFnZS1tZW51IHtcXG4gICAgICAgICAgICBib3R0b206IDUlOyB9IH1cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUuNjJlbSkge1xcbiAgICAgICAgICAuaG9tZS1wYWdlX2luZm9faW1hZ2UtbWVudSB7XFxuICAgICAgICAgICAgcmlnaHQ6IDA7IH0gfVxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MGVtKSB7XFxuICAgICAgICAgIC5ob21lLXBhZ2VfaW5mb19pbWFnZS1tZW51IHtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwcmVtO1xcbiAgICAgICAgICAgIGJvdHRvbTogMjAlO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0yNSU7IH0gfVxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNC4zN2VtKSB7XFxuICAgICAgICAgIC5ob21lLXBhZ2VfaW5mb19pbWFnZS1tZW51IHtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDM4cmVtOyB9IH1cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjkuMzdlbSkge1xcbiAgICAgICAgICAuaG9tZS1wYWdlX2luZm9faW1hZ2UtbWVudSB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTM3JTsgfSB9XFxuICAgICAgLmhvbWUtcGFnZV9pbmZvX2ltYWdlLWNvbnRhY3Qge1xcbiAgICAgICAgbWF4LXdpZHRoOiA0MCU7XFxuICAgICAgICBib3R0b206IDMlO1xcbiAgICAgICAgbGVmdDogLTglO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuOHJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgICAgICBib3gtc2hhZG93OiAtMC4ycmVtIDAuOHJlbSAwLjVyZW0gcmdiYSg3LCA3LCA3LCAwLjQyNSk7IH1cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUuNjJlbSkge1xcbiAgICAgICAgICAuaG9tZS1wYWdlX2luZm9faW1hZ2UtY29udGFjdCB7XFxuICAgICAgICAgICAgbGVmdDogLTIlOyB9IH1cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTBlbSkge1xcbiAgICAgICAgICAuaG9tZS1wYWdlX2luZm9faW1hZ2UtY29udGFjdCB7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0NXJlbTtcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgIGJvdHRvbTogMTUlO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0yMiU7IH0gfVxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNC4zN2VtKSB7XFxuICAgICAgICAgIC5ob21lLXBhZ2VfaW5mb19pbWFnZS1jb250YWN0IHtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMzcmVtOyB9IH1cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjkuMzdlbSkge1xcbiAgICAgICAgICAuaG9tZS1wYWdlX2luZm9faW1hZ2UtY29udGFjdCB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTMxJTsgfSB9XFxuXFxuLmJ1dHRvbl9jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogNHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5idXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3ItMSk7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBib3JkZXI6IDAuNHJlbSBzb2xpZCB2YXIoLS1tYWluLWNvbG9yLTEpO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLm1lbnUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA4cmVtOyB9XFxuICAubWVudV9mb29kIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTByZW07IH1cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XFxuICAgICAgLm1lbnVfZm9vZCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9IH1cXG4gICAgLm1lbnVfZm9vZF9oZWFkZXIge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBmb250LXNpemU6IDhyZW07XFxuICAgICAgY29sb3I6IHZhcigtLW1haW4tY29sb3ItMSk7IH1cXG4gICAgICAubWVudV9mb29kX2hlYWRlcjo6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0xKTtcXG4gICAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiB1bmRlcmxpbmVkO1xcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgICAgIHdpZHRoOiA4NCU7IH1cXG4gICAgLm1lbnVfZm9vZF9pbWcge1xcbiAgICAgIG1hcmdpbi10b3A6IDhyZW07XFxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcmVtO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGJvcmRlcjogMnJlbSBzb2xpZCB2YXIoLS1tYWluLWNvbG9yLTMpO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7IH1cXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcXG4gICAgICAgIC5tZW51X2Zvb2RfaW1nIHtcXG4gICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICB3aWR0aDogOTAlOyB9IH1cXG4gICAgICAubWVudV9mb29kX2ltZzpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cXG4gICAgICAubWVudV9mb29kX2ltZy1jYXAge1xcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcmVtO1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxczsgfVxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XFxuICAgICAgICAgIC5tZW51X2Zvb2RfaW1nLWNhcCB7XFxuICAgICAgICAgICAgbWFyZ2luOiAwOyB9IH1cXG4gICAgICAubWVudV9mb29kX2ltZzpob3ZlciB+IC5tZW51X2Zvb2RfaW1nLWNhcCB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMi40cmVtKTsgfVxcbiAgICAubWVudV9mb29kX2ltZy1zbWFsbCB7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICBib3JkZXI6IDFyZW0gc29saWQgdmFyKC0tbWFpbi1jb2xvci0zKTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgbWFyZ2luLXRvcDogNHJlbTtcXG4gICAgICBtYXJnaW4tbGVmdDogNnJlbTtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7IH1cXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcXG4gICAgICAgIC5tZW51X2Zvb2RfaW1nLXNtYWxsIHtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgICAgIHdpZHRoOiA5MCU7IH0gfVxcbiAgICAgIC5tZW51X2Zvb2RfaW1nLXNtYWxsOmhvdmVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxcbiAgICAgIC5tZW51X2Zvb2RfaW1nLXNtYWxsLWNhcC1zbWFsbCB7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICBtYXJnaW4tbGVmdDogNnJlbTtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7IH1cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkge1xcbiAgICAgICAgICAubWVudV9mb29kX2ltZy1zbWFsbC1jYXAtc21hbGwge1xcbiAgICAgICAgICAgIG1hcmdpbjogMDsgfSB9XFxuICAgICAgLm1lbnVfZm9vZF9pbWctc21hbGw6aG92ZXIgfiAubWVudV9mb29kX2ltZy1zbWFsbC1jYXAtc21hbGwge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEuNHJlbSk7IH1cXG5cXG4ubWVudV9mb29kX21haW5fc3ViIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XFxuICAgIC5tZW51X2Zvb2RfbWFpbl9zdWIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7IH0gfVxcblxcbi5tZW51X2Zvb2RfbWFpbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkge1xcbiAgICAubWVudV9mb29kX21haW4ge1xcbiAgICAgIG1hcmdpbi10b3A6IDEwcmVtOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHVuZGVybGluZWQge1xcbiAgMCUge1xcbiAgICB3aWR0aDogMCU7IH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogODQlOyB9IH1cXG5cXG4uQ29udGFjdFBhZ2Uge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMS4yNWVtKSB7XFxuICAgIC5Db250YWN0UGFnZSB7XFxuICAgICAgcGFkZGluZzogMnJlbSAwLjhyZW07IH0gfVxcblxcbi5idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3ItMSk7XFxuICBwYWRkaW5nOiAwIDJyZW07IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzEuMjVlbSkge1xcbiAgICAuYnRuIHtcXG4gICAgICB3aWR0aDogOTAlO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBwYWRkaW5nOiAwOyB9IH1cXG4gIC5idG46aG92ZXI6OmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0zKTtcXG4gICAgYm9yZGVyLXdpZHRoOiAwLjRyZW07IH1cXG4gIC5idG46OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICByaWdodDogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW46IDAuM3JlbSBhdXRvO1xcbiAgICBib3JkZXI6IDAuMnJlbSBzb2xpZCB2YXIoLS1tYWluLWNvbG9yLTEpO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uY29udGFjdCB7XFxuICBtYXJnaW4tdG9wOiA4cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA3MCU7XFxuICBmb250LXNpemU6IDIuNXJlbTsgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5My43ZW0pIHtcXG4gICAgLmNvbnRhY3Qge1xcbiAgICAgIHdpZHRoOiA4MCU7IH0gfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XFxuICAgIC5jb250YWN0IHtcXG4gICAgICB3aWR0aDogOTAlO1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTsgfSB9XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwZW0pIHtcXG4gICAgLmNvbnRhY3Qge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH0gfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMS4yNWVtKSB7XFxuICAgIC5jb250YWN0IHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBtYXJnaW4tdG9wOiAyMnJlbTsgfSB9XFxuICAuY29udGFjdF9pbWFnZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICByaWdodDogLTIlO1xcbiAgICBib3JkZXI6IDFyZW0gc29saWQgIzFhMWExYTsgfVxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzLjVlbSkge1xcbiAgICAgIC5jb250YWN0X2ltYWdlIHtcXG4gICAgICAgIGhlaWdodDogNzV2aDsgfSB9XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTBlbSkge1xcbiAgICAgIC5jb250YWN0X2ltYWdlIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcbiAgLmNvbnRhY3RfaW5mbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMik7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0wLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgLmNvbnRhY3RfaW5mb19oZWFkZXIge1xcbiAgICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHJlbTsgfVxcbiAgICAuY29udGFjdF9pbmZvX2FkcmVzcyB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIG1hcmdpbi10b3A6IDhyZW07IH1cXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcXG4gICAgICAgIC5jb250YWN0X2luZm9fYWRyZXNzIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogNXJlbTsgfSB9XFxuICAgICAgLmNvbnRhY3RfaW5mb19hZHJlc3NfaWNvbiB7XFxuICAgICAgICBmb250LXNpemU6IDVyZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07IH1cXG4gICAgICAuY29udGFjdF9pbmZvX2FkcmVzc190ZXh0LWxvY2F0aW9uIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAgIC5jb250YWN0X2luZm9fcGhvbmUge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHJlbTsgfVxcbiAgICAgIC5jb250YWN0X2luZm9fcGhvbmVfaWNvbiB7XFxuICAgICAgICBmb250LXNpemU6IDRyZW07XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07IH1cXG4gICAgLmNvbnRhY3RfaW5mb19mb3JtIHtcXG4gICAgICB6LWluZGV4OiAxO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAgIC5jb250YWN0X2luZm9fZm9ybV90ZXh0LWZsZXgge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDZyZW07IH1cXG4gICAgICAuY29udGFjdF9pbmZvX2Zvcm1faWNvbiB7XFxuICAgICAgICBmb250LXNpemU6IDRyZW07XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuOHJlbTsgfVxcbiAgICAgIC5jb250YWN0X2luZm9fZm9ybV90ZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTsgfVxcbiAgICAgIC5jb250YWN0X2luZm9fZm9ybV9pbnB1dCB7XFxuICAgICAgICBtYXJnaW46IDEuNXJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBoZWlnaHQ6IDNyZW07XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTIpO1xcbiAgICAgICAgY29sb3I6IHZhcigtLW1haW4tY29sb3ItMSk7XFxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDAuMnJlbSB2YXIoLS1tYWluLWNvbG9yLTEpOyB9XFxuICAgICAgICAuY29udGFjdF9pbmZvX2Zvcm1faW5wdXQtbWVzc2FnZSB7XFxuICAgICAgICAgIGhlaWdodDogNnJlbTsgfVxcbiAgICAgICAgLmNvbnRhY3RfaW5mb19mb3JtX2lucHV0OmZvY3VzIHtcXG4gICAgICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAgICAgLmNvbnRhY3RfaW5mb19mb3JtX2lucHV0X2J0biB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTsgfVxcblxcbi5sb2dvIHtcXG4gIGhlaWdodDogNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9faW5pdGlhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9wYWdlcy9faG9tZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9wYWdlcy9fbWVudS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9wYWdlcy9fY29udGFjdC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsMENBQWU7RUFDZixpQ0FBZTtFQUNmLHVDQUFlLEVBQUE7O0FBR2pCO0VBQ0UsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHWjs7O0VBR0Usc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsZ0JBQWdCLEVBQUE7RUFDaEI7SUFGRjtNQUdJLGNBQWMsRUFBQSxFQUtqQjtFQUhDO0lBTEY7TUFNSSxjQUFjLEVBQUEsRUFFakI7O0FBQ0Q7RUFDRSxrQ0FBa0M7RUFDbEMscUNBQXFDO0VBQ3JDLDBCQUEwQixFQUFBOztBQUU1QjtFQUNFLGFBQWEsRUFBQTtFQUNiO0lBRkY7TUFHSSxVQUFVLEVBQUEsRUFFYjs7QUFFRDtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGVBQWUsRUFBQTtFQUNmO0lBTEY7TUFNSSxVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLFVBQVUsRUFBQSxFQWdCYjtFQXhCRDtJQVdJLGlDQUFpQztJQUNqQyxvQkFBb0IsRUFBQTtFQVp4QjtJQWdCSSxXQUFXO0lBQ1gsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLFdBQVc7SUFDWCxXQUFXLEVBQUE7O0FBR2Y7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTtFQUNYO0lBVkY7TUFXSSxzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLHVCQUF1QjtNQUN2QixtQkFBbUIsRUFBQSxFQWlDdEI7RUEvQkM7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLHNDQUFzQyxFQUFBO0lBQ3RDO01BUEY7UUFRSSxjQUFjLEVBQUEs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QjtRQUNFLGVBQWUsRUFBQTtNQUVqQjtRQUNFLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsVUFBVTtRQUNWLFlBQVk7UUFDWixZQUFZO1FBQ1oscUNBQXFDO1FBQ3JDLDBCQUEwQjtRQUMxQixpQkFBaUI7UUFDakIsK0NBQStDLEVBQUE7UUFDL0M7VUFDRSxZQUFZLEVBQUE7UUFYZjtVQWNHLGFBQWEsRUFBQTtRQUVmO1VBQ0UsZUFBZSxFQUFBOztBQU16QjtFQUNFLFlBQVk7RUFDWixtQkFBbUIsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZWJhcytOZXVlJmRpc3BsYXk9c3dhcFxcXCIpO1xcbjpyb290IHtcXG4gIC0tbWFpbi1jb2xvci0xOiByZ2JhKDI0NywgMjQ3LCAyNDcsIDAuNzk1KTtcXG4gIC0tbWFpbi1jb2xvci0yOiByZ2IoMTUwLCAxMTEsIDUxKTtcXG4gIC0tbWFpbi1jb2xvci0zOiByZ2JhKDk0LCA0MCwgNDAsIDAuNzk1KTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMGVtKSB7XFxuICAgIGZvbnQtc2l6ZTogNTUlO1xcbiAgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OC4xMmVtKSB7XFxuICAgIGZvbnQtc2l6ZTogNTAlO1xcbiAgfVxcbn1cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmViYXMgTmV1ZVxcXCIsIGN1cnNpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTIpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3ItMSk7XFxufVxcbi5jb250YWluZXIge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjIuNWVtKSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVxcblxcbi5idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3ItMSk7XFxuICBwYWRkaW5nOiAwIDJyZW07XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMxLjI1ZW0pIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgJjpob3Zlcjo6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTMpO1xcbiAgICBib3JkZXItd2lkdGg6IDAuNHJlbTtcXG4gIH1cXG5cXG4gICY6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICByaWdodDogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW46IDAuM3JlbSBhdXRvO1xcbiAgICBib3JkZXI6IDAuMnJlbSBzb2xpZCB2YXIoLS1tYWluLWNvbG9yLTEpO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbi5uYXZiYXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDEwO1xcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMS4yNWVtKSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAmX2xvZ28ge1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZWluO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMS4yNWVtKSB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIH1cXG4gIH1cXG4gICZfbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzEuMjVlbSkge1xcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgfVxcbiAgJl9idXR0b24ge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzLjVyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzEuMjVlbSkge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlaW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbn1cXG4uZm9vdGVyIHtcXG4gIGhlaWdodDogMjByZW07XFxuICBtYXJnaW46IDE1cmVtIC0xcmVtIC0xcmVtIC0xcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0zKTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgJl9sb2dvIHtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgfVxcbiAgJl9udW1iZXIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxufVxcblwiLFwiQG1peGluIGhvbWUtcGFnZS1wYXJhIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBtYXJnaW46IDJyZW07XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4LjE1ZW0pIHtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICB9XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MGVtKSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwZW0pIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gIH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQuMzdlbSkge1xcbiAgICBmb250LXNpemU6IDMuMXJlbTtcXG4gIH1cXG4gICYgaDIge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDlyZW07XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzguMTVlbSkge1xcbiAgICAgIGZvbnQtc2l6ZTogOHJlbTtcXG4gICAgfVxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcXG4gICAgICBmb250LXNpemU6IDdyZW07XFxuICAgIH1cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNC4zN2VtKSB7XFxuICAgICAgZm9udC1zaXplOiA2cmVtO1xcbiAgICB9XFxuICB9XFxuICAmIHAge1xcbiAgICBsaW5lLWhlaWdodDogOHJlbTtcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OC4xNWVtKSB7XFxuICAgICAgbGluZS1oZWlnaHQ6IDdyZW07XFxuICAgIH1cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNC4zN2VtKSB7XFxuICAgICAgbGluZS1oZWlnaHQ6IDZyZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLm1haW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICA5MGRlZyxcXG4gICAgICByZ2JhKDcsIDcsIDcsIDAuODc3KSAwJSxcXG4gICAgICByZ2JhKDcsIDcsIDcsIDAuNTQ4KSAzOCUsXFxuICAgICAgdHJhbnNwYXJlbnQgNDAlXFxuICAgICksXFxuICAgIHVybChcXFwifmhlYWRlci5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTkuMzdlbSkge1xcbiAgICBoZWlnaHQ6IDk4dmg7XFxuICB9XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIDkwZGVnLFxcbiAgICAgICAgcmdiYSg3LCA3LCA3LCAwLjg3NykgMCUsXFxuICAgICAgICByZ2JhKDcsIDcsIDcsIDAuNTQ4KSAxMDAlLFxcbiAgICAgICAgdHJhbnNwYXJlbnQgNDAlXFxuICAgICAgKSxcXG4gICAgICB1cmwoXFxcIn5oZWFkZXIuanBnXFxcIik7XFxuICB9XFxuICAmX2hlYWRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTEpO1xcbiAgICB0ZXh0LXNoYWRvdzogMC4xcmVtIDAuNHJlbSAxcmVtIGJsYWNrO1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiA3NXZoO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDJyZW0gdmFyKC0tbWFpbi1jb2xvci0xKSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgICBmb250LXNpemU6IDExLjNyZW07XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODcuNWVtKSB7XFxuICAgICAgZm9udC1zaXplOiAxM3JlbTtcXG4gICAgfVxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4LjEyZW0pIHtcXG4gICAgICBoZWlnaHQ6IDYzdmg7XFxuICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICBmb250LXNpemU6IDEwcmVtO1xcbiAgICB9XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTkuMzdlbSkge1xcbiAgICAgIGhlaWdodDogNTV2aDtcXG4gICAgfVxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgfVxcbiAgICAmLW5hbWUge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICAgICYtc2hvcCB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgZm9udC1zaXplOiAxNHJlbTtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wNTRlbTtcXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg3LjVlbSkge1xcbiAgICAgICAgZm9udC1zaXplOiAxMnJlbTtcXG4gICAgICB9XFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OC4xMmVtKSB7XFxuICAgICAgICBmb250LXNpemU6IDEwcmVtO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAmLWphcGFuZXNlIHtcXG4gICAgICBmb250LXNpemU6IDZyZW07XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgbWFyZ2luLXRvcDogLTJyZW07XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uaG9tZS1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgbWFyZ2luOiA1cmVtO1xcbiAgbWFyZ2luLXRvcDogMzVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAyMHJlbTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG5cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODcuNWVtKSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICB9XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY4Ljc1ZW0pIHtcXG4gICAgZm9udC1zaXplOiAzLjhyZW07XFxuICB9XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0LjM3ZW0pIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIH1cXG4gICZfaW5mbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTQsIDQwLCA0MCwgMC43OTUpO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUuNjJlbSkge1xcbiAgICAgIHdpZHRoOiA5MCU7XFxuICAgIH1cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MGVtKSB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgJi0yIHtcXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwZW0pIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgfVxcbiAgICB9XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQuMzdlbSkge1xcbiAgICAgIHdpZHRoOiA5OSU7XFxuICAgIH1cXG4gICAgJl9wYXJhLW1lbnUge1xcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICBAaW5jbHVkZSBob21lLXBhZ2UtcGFyYTtcXG4gICAgfVxcbiAgICAmX3BhcmEtY29udGFjdCB7XFxuICAgICAgQGluY2x1ZGUgaG9tZS1wYWdlLXBhcmE7XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTBlbSkge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICAgICAgfVxcbiAgICB9XFxuICAgICZfaW1hZ2Uge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgICAgJi1tZW51IHtcXG4gICAgICAgIG1heC13aWR0aDogNDUlO1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgcmlnaHQ6IC04JTtcXG4gICAgICAgIG1hcmdpbjogMnJlbTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAuMnJlbSAwLjhyZW0gMC41cmVtIHJnYmEoNywgNywgNywgMC40MjUpO1xcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2OC43NWVtKSB7XFxuICAgICAgICAgIGJvdHRvbTogNSU7XFxuICAgICAgICB9XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1LjYyZW0pIHtcXG4gICAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICB9XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwZW0pIHtcXG4gICAgICAgICAgbWF4LXdpZHRoOiA1MHJlbTtcXG4gICAgICAgICAgYm90dG9tOiAyMCU7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0yNSU7XFxuICAgICAgICB9XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0LjM3ZW0pIHtcXG4gICAgICAgICAgbWF4LXdpZHRoOiAzOHJlbTtcXG4gICAgICAgIH1cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjkuMzdlbSkge1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMzclO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICAmLWNvbnRhY3Qge1xcbiAgICAgICAgbWF4LXdpZHRoOiA0MCU7XFxuICAgICAgICBib3R0b206IDMlO1xcbiAgICAgICAgbGVmdDogLTglO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuOHJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgICAgICBib3gtc2hhZG93OiAtMC4ycmVtIDAuOHJlbSAwLjVyZW0gcmdiYSg3LCA3LCA3LCAwLjQyNSk7XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1LjYyZW0pIHtcXG4gICAgICAgICAgbGVmdDogLTIlO1xcbiAgICAgICAgfVxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MGVtKSB7XFxuICAgICAgICAgIG1heC13aWR0aDogNDVyZW07XFxuICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgIGJvdHRvbTogMTUlO1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMjIlO1xcbiAgICAgICAgfVxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNC4zN2VtKSB7XFxuICAgICAgICAgIG1heC13aWR0aDogMzNyZW07XFxuICAgICAgICB9XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI5LjM3ZW0pIHtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTMxJTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuLmJ1dHRvbl9jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogNHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvci0xKTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIGJvcmRlcjogMC40cmVtIHNvbGlkIHZhcigtLW1haW4tY29sb3ItMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLFwiQG1peGluIHVuZGVybGluZWQge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0xKTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGFuaW1hdGlvbi1uYW1lOiB1bmRlcmxpbmVkO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIHdpZHRoOiA4NCU7XFxufVxcblxcbi5tZW51IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogOHJlbTtcXG5cXG4gICZfZm9vZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcmVtO1xcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgICZfaGVhZGVyIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgZm9udC1zaXplOiA4cmVtO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTEpO1xcbiAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgIEBpbmNsdWRlIHVuZGVybGluZWQ7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfaW1nIHtcXG4gICAgICBtYXJnaW4tdG9wOiA4cmVtO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHJlbTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBib3JkZXI6IDJyZW0gc29saWQgdmFyKC0tbWFpbi1jb2xvci0zKTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICB9XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgICAgfVxcbiAgICAgICYtY2FwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHJlbTtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcXG4gICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICAmOmhvdmVyIH4gJi1jYXAge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIuNHJlbSk7XFxuICAgICAgfVxcbiAgICB9XFxuICAgICZfaW1nLXNtYWxsIHtcXG4gICAgICB3aWR0aDogNTAlO1xcbiAgICAgIGJvcmRlcjogMXJlbSBzb2xpZCB2YXIoLS1tYWluLWNvbG9yLTMpO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA2cmVtO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgfVxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICAgIH1cXG4gICAgICAmLWNhcC1zbWFsbCB7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICBtYXJnaW4tbGVmdDogNnJlbTtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcXG4gICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICAmOmhvdmVyIH4gJi1jYXAtc21hbGwge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEuNHJlbSk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcbi5tZW51X2Zvb2RfbWFpbl9zdWIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxufVxcbi5tZW51X2Zvb2RfbWFpbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcXG4gICAgbWFyZ2luLXRvcDogMTByZW07XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgdW5kZXJsaW5lZCB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogODQlO1xcbiAgfVxcbn1cXG5cIixcIi5Db250YWN0UGFnZSB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMS4yNWVtKSB7XFxuICAgIHBhZGRpbmc6IDJyZW0gMC44cmVtO1xcbiAgfVxcbn1cXG5cXG4uYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTEpO1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMS4yNWVtKSB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG4gICY6aG92ZXI6OmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0zKTtcXG4gICAgYm9yZGVyLXdpZHRoOiAwLjRyZW07XFxuICB9XFxuXFxuICAmOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luOiAwLjNyZW0gYXV0bztcXG4gICAgYm9yZGVyOiAwLjJyZW0gc29saWQgdmFyKC0tbWFpbi1jb2xvci0xKTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4uY29udGFjdCB7XFxuICBtYXJnaW4tdG9wOiA4cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA3MCU7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTMuN2VtKSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MGVtKSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMxLjI1ZW0pIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDIycmVtO1xcbiAgfVxcblxcbiAgJl9pbWFnZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICByaWdodDogLTIlO1xcbiAgICBib3JkZXI6IDFyZW0gc29saWQgIzFhMWExYTtcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2My41ZW0pIHtcXG4gICAgICBoZWlnaHQ6IDc1dmg7XFxuICAgIH1cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MGVtKSB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgfVxcbiAgJl9pbmZvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0yKTtcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgJl9oZWFkZXIge1xcbiAgICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHJlbTtcXG4gICAgfVxcbiAgICAmX2FkcmVzcyB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIG1hcmdpbi10b3A6IDhyZW07XFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XFxuICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgICAgIH1cXG4gICAgICAmX2ljb24ge1xcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICAgIH1cXG4gICAgICAmX3RleHQge1xcbiAgICAgICAgJi1sb2NhdGlvbiB7XFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX3Bob25lIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjRyZW07XFxuICAgICAgJl9pY29uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9mb3JtIHtcXG4gICAgICB6LWluZGV4OiAxO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAmX3RleHQtZmxleCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogNnJlbTtcXG4gICAgICB9XFxuICAgICAgJl9pY29uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC44cmVtO1xcbiAgICAgIH1cXG4gICAgICAmX3RleHQge1xcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICAgIH1cXG4gICAgICAmX2lucHV0IHtcXG4gICAgICAgIG1hcmdpbjogMS41cmVtO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIGhlaWdodDogM3JlbTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMik7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvci0xKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC4ycmVtIHZhcigtLW1haW4tY29sb3ItMSk7XFxuICAgICAgICAmLW1lc3NhZ2Uge1xcbiAgICAgICAgICBoZWlnaHQ6IDZyZW07XFxuICAgICAgICB9XFxuICAgICAgICAmOmZvY3VzIHtcXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICAgICZfYnRuIHtcXG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG4ubG9nbyB7XFxuICBoZWlnaHQ6IDVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy83NGNiOTVkODkwMDVhMmJkZDczYTI2MDFmOTlmNzQ1ZC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzUyZDQ4MmM5MjA2ZWJiODlmZmZjZDg4NzVlOWJiNmJlLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvM2NjYzM2ZGVhZWY1ZGEyZWY0Mjk2YzVmZDUxMTIwMjEuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9kZjc2MzM4YzZhMmE3NmFlZmNkYmZiOTBmOGZiNWIyMy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2ZjY2E0ZmI3NjU4N2M3YzE5NDdiYjRjOTQ2YmY1OWZjLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvMGRlNmYxY2EyNTExZjU1Mjg1MDY2NDUxZTQxOGVlYWEuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy82MmRmNjkxZTQwMjg3MWY2MWIzOTNjYjI0MmIzMGU5NS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzEyN2YzMmUzYmVmZDIxMzJmNDE0NmU3NWZmZWM1ZjJmLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvNzZlY2FiMGRjNjEzZjEyZWUxY2Q3MWFhMGZlNmQ1ZTEuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy85NDlhZTFmZDkxYTc4NjA2YjFiNDUzNGUwYjI3MTQ3MC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzdkNmMxOTQ1YTBiMmJmMWYyZjZlYTlmNTU0M2UxNDRhLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvOGMxMGQxMGEyYWJjYzQ1YTI2ZjhiMmFiMGFiYWNlNzEuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9jYTUyNjgxOTQwMjM4YzMwZGJiMzgwNWU5ZjcxOGE1NC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2I4MTUyYTlmY2E5NDJlOWFkZmMxMTc2ZTcwMjY4NjRlLmpwZ1wiOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IENvbnRhY3RMYW50ZXJuIGZyb20gXCIuLi9hc3NldHMvY29udGFjdC1sYW50ZXJuLmpwZ1wiO1xuaW1wb3J0IGxhdGVybiBmcm9tIFwiLi4vYXNzZXRzL3BhcGVyLWxhbnRlcm4uc3ZnXCI7XG5mdW5jdGlvbiBjcmVhdGVGb3JtRGl2KCkge1xuICBsZXQgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvcm1EaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RfaW5mb19mb3JtXCIpO1xuXG4gIGxldCBmb3JtRmxleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvcm1GbGV4LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0X2luZm9fZm9ybV90ZXh0LWZsZXhcIik7XG5cbiAgbGV0IGljb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGljb24xLmNsYXNzTmFtZSA9IFwiZmFyIGZhLWNvbW1lbnQgY29udGFjdF9pbmZvX2Zvcm1faWNvblwiO1xuXG4gIGxldCBtZXNzYWdlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBtZXNzYWdlVGV4dC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdF9pbmZvX2Zvcm1fdGV4dFwiKTtcbiAgbWVzc2FnZVRleHQudGV4dENvbnRlbnQgPSBcIk1lc3NhZ2UgVXMhXCI7XG5cbiAgZm9ybUZsZXguYXBwZW5kQ2hpbGQoaWNvbjEpO1xuICBmb3JtRmxleC5hcHBlbmRDaGlsZChtZXNzYWdlVGV4dCk7XG5cbiAgbGV0IGZvcm0gPSBjcmVhdGVGcm9tKCk7XG5cbiAgZm9ybURpdi5hcHBlbmRDaGlsZChmb3JtRmxleCk7XG4gIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgcmV0dXJuIGZvcm1EaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyb20oKSB7XG4gIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgbGV0IHRleHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGV4dElucHV0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0X2luZm9fZm9ybV9pbnB1dFwiKTtcbiAgdGV4dElucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgdGV4dElucHV0LnBsYWNlaG9sZGVyID0gXCJOYW1lXCI7XG5cbiAgbGV0IG51bWJlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBudW1iZXJJbnB1dC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdF9pbmZvX2Zvcm1faW5wdXRcIik7XG4gIG51bWJlcklucHV0LnR5cGUgPSBcInRlbFwiO1xuICBudW1iZXJJbnB1dC5wbGFjZWhvbGRlciA9IFwiTnVtYmVyXCI7XG5cbiAgbGV0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGVtYWlsSW5wdXQuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RfaW5mb19mb3JtX2lucHV0XCIpO1xuICBlbWFpbElucHV0LnR5cGUgPSBcImVtYWlsXCI7XG4gIGVtYWlsSW5wdXQucGxhY2Vob2xkZXIgPSBcIkVtYWlsXCI7XG5cbiAgbGV0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RfaW5mb19mb3JtX2lucHV0XCIpO1xuICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0X2luZm9fZm9ybV9pbnB1dC1tZXNzYWdlXCIpO1xuICBtZXNzYWdlLnBsYWNlaG9sZGVyID0gXCJNZXNzYWdlXCI7XG5cbiAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBidG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0X2luZm9fZm9ybV9pbnB1dF9idG5cIik7XG4gIGJ0bi50ZXh0Q29udGVudCA9IFwiU2VuZCBNZXNzYWdlXCI7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZCh0ZXh0SW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKG51bWJlcklucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChlbWFpbElucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChidG4pO1xuXG4gIHJldHVybiBmb3JtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQaG9uZU51bSh0ZXh0KSB7XG4gIGxldCBwaG9uZU51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBob25lTnVtLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0X2luZm9fcGhvbmVcIik7XG4gIGxldCBpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBpMS5jbGFzc05hbWUgPSBcImZhcyBmYS1waG9uZS1hbHQgY29udGFjdF9pbmZvX3Bob25lX2ljb25cIjtcblxuICBsZXQgbnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG51bWJlci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdF9pbmZvX3Bob25lX251bWJlclwiKTtcbiAgbnVtYmVyLnRleHRDb250ZW50ID0gdGV4dDtcblxuICBwaG9uZU51bS5hcHBlbmRDaGlsZChpMSk7XG4gIHBob25lTnVtLmFwcGVuZENoaWxkKG51bWJlcik7XG4gIHJldHVybiBwaG9uZU51bTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWRyZXNzKGxvY2F0aW9uLCBjaXR5KSB7XG4gIGxldCBhZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZHJlc3MuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RfaW5mb19hZHJlc3NcIik7XG4gIGxldCBpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBpMi5jbGFzc05hbWUgPSBcImZhcyBmYS1tYXAtbWFya2VyLWFsdCBjb250YWN0X2luZm9fYWRyZXNzX2ljb25cIjtcblxuICBsZXQgYWRyZXNzUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBhZHJlc3NQYXJhLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0X2luZm9fYWRyZXNzX3RleHRcIik7XG4gIGFkcmVzc1BhcmEudGV4dENvbnRlbnQgPSBsb2NhdGlvbjtcblxuICBsZXQgY2l0eUxvYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjaXR5TG9jLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0X2luZm9fYWRyZXNzX3RleHQtbG9jYXRpb25cIik7XG4gIGNpdHlMb2MudGV4dENvbnRlbnQgPSBjaXR5O1xuXG4gIGFkcmVzc1BhcmEuYXBwZW5kQ2hpbGQoY2l0eUxvYyk7XG5cbiAgYWRyZXNzLmFwcGVuZENoaWxkKGkyKTtcbiAgYWRyZXNzLmFwcGVuZENoaWxkKGFkcmVzc1BhcmEpO1xuICByZXR1cm4gYWRyZXNzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0U2VjKCkge1xuICBsZXQgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdF9TZWNcIik7XG5cbiAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoMi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdF9pbmZvX2hlYWRlclwiKTtcbiAgaDIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXMhXCI7XG5cbiAgbGV0IHBob25lTnVtYmVyID0gY3JlYXRlUGhvbmVOdW0oXCI1WFgtWFhYLVhYWFwiKTtcbiAgbGV0IGFkcmVzcyA9IGNyZWF0ZUFkcmVzcyhgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IC5gLCBgVG9reW8sIEphcGFuYCk7XG5cbiAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoaDIpO1xuICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG4gIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGFkcmVzcyk7XG5cbiAgcmV0dXJuIGNvbnRhY3RTZWN0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0SW5mbygpIHtcbiAgbGV0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdEluZm8uY2xhc3NMaXN0LmFkZChcImNvbnRhY3RfaW5mb1wiKTtcblxuICBsZXQgY29udGFjdFNlY3Rpb24gPSBjcmVhdGVDb250YWN0U2VjKCk7XG4gIGxldCBmb3JtID0gY3JlYXRlRm9ybURpdigpO1xuXG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGNvbnRhY3RTZWN0aW9uKTtcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBsb2dvLnNyYyA9IGxhdGVybjtcbiAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcblxuICByZXR1cm4gY29udGFjdEluZm87XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RJbWcoaW1hZ2UpIHtcbiAgbGV0IGltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGltZ0Rpdi5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VfY29udFwiKTtcbiAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZy5jbGFzc0xpc3QuYWRkKFwiY29udGFjdF9pbWFnZVwiKTtcbiAgaW1nLnNyYyA9IGltYWdlO1xuICBpbWdEaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgcmV0dXJuIGltZ0Rpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdFBhZ2UoKSB7XG4gIGxldCBDb250YWN0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIENvbnRhY3RQYWdlLmNsYXNzTGlzdC5hZGQoXCJDb250YWN0UGFnZVwiKTtcblxuICBsZXQgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG4gIGxldCBpbWcgPSBjcmVhdGVDb250YWN0SW1nKENvbnRhY3RMYW50ZXJuKTtcbiAgbGV0IGNvbnRhY3RJbmZvID0gY3JlYXRlQ29udGFjdEluZm8oKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChpbWcpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKTtcblxuICBDb250YWN0UGFnZS5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgcmV0dXJuIENvbnRhY3RQYWdlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0UGFnZTtcbiIsImltcG9ydCBsYXRlcm4gZnJvbSBcIi4uL2Fzc2V0cy9wYXBlci1sYW50ZXJuLnN2Z1wiO1xuaW1wb3J0IGNyZWF0ZUhvbWVQYWdlIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBjcmVhdGVDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdmJhcigpIHtcbiAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xuICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGxvZ28uc3JjID0gbGF0ZXJuO1xuICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXJfbG9nb1wiKTtcbiAgbGV0IGJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGJ0bnMuY2xhc3NMaXN0LmFkZChcIm5hdmJhcl9saW5rc1wiKTtcbiAgbGV0IGhvbWVCdG4gPSBjcmVhdGVCdG4oXCJIb21lXCIpO1xuICBsZXQgTWVudUJ0biA9IGNyZWF0ZUJ0bihcIk1lbnVcIik7XG4gIGxldCBDb250YWN0QnRuID0gY3JlYXRlQnRuKFwiQ29udGFjdFwiKTtcbiAgYnRucy5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgYnRucy5hcHBlbmRDaGlsZChNZW51QnRuKTtcbiAgYnRucy5hcHBlbmRDaGlsZChDb250YWN0QnRuKTtcblxuICBuYXZiYXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChidG5zKTtcblxuICByZXR1cm4gbmF2YmFyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcblxuICBsZXQgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcmVzdGF1cmFudE5hbWUuY2xhc3NMaXN0LmFkZChcImZvb3Rlcl9wYXJhXCIpO1xuICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IGBBLUNoYW4ncyBTaG9rdWRvdWA7XG5cbiAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZy5zcmMgPSBsYXRlcm47XG4gIGltZy5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX2xvZ29cIik7XG5cbiAgbGV0IHJlc3RhdXJhbnRBZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcmVzdGF1cmFudEFkcmVzcy5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX2FkcmVzc1wiKTtcbiAgcmVzdGF1cmFudEFkcmVzcy50ZXh0Q29udGVudCA9IGBUb2t5bywgSmFwYW5gO1xuXG4gIGxldCByZXN0YXVyYW50TnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHJlc3RhdXJhbnROdW1iZXIuY2xhc3NMaXN0LmFkZChcImZvb3Rlcl9udW1iZXJcIik7XG4gIHJlc3RhdXJhbnROdW1iZXIudGV4dENvbnRlbnQgPSBgNXh4LXh4eC14eHhgO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChpbWcpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudEFkcmVzcyk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TnVtYmVyKTtcbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnRuKHRleHQpIHtcbiAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXJfYnV0dG9uXCIpO1xuICBsZXQgaW5uZXJidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgaW5uZXJidG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbiAgaW5uZXJidG4uaW5uZXJUZXh0ID0gdGV4dDtcbiAgYnRuLmFwcGVuZENoaWxkKGlubmVyYnRuKTtcbiAgcmV0dXJuIGJ0bjtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVBhZ2UoKSB7XG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgbGV0IG5hdiA9IGNyZWF0ZU5hdmJhcigpO1xuICBsZXQgaG9tZVBhZ2UgPSBjcmVhdGVIb21lUGFnZSgpO1xuICBsZXQgbWVudVBhZ2UgPSBjcmVhdGVNZW51KCk7XG4gIGxldCBjb250YWN0UGFnZSA9IGNyZWF0ZUNvbnRhY3RQYWdlKCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXYpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UpO1xuICBsZXQgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XG4gIGxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0blwiKTtcbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnV0dG9uXCIpO1xuXG4gIGJ0blswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVQYWdlKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDE1MCwgMTExLCA1MSlcIjtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgICByZXR1cm4gKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDApO1xuICB9KTtcbiAgYnRuWzFdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVBhZ2UpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMTUwLCAxMTEsIDUxKVwiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIHJldHVybiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMCk7XG4gIH0pO1xuICBidG5bMl0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0UGFnZSk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYig5NCwgNDAsIDQwKVwiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIHJldHVybiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMCk7XG4gIH0pO1xuICBidXR0b25bMF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51UGFnZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgcmV0dXJuIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwKTtcbiAgfSk7XG4gIGJ1dHRvblsxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RQYWdlKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDk0LCA0MCwgNDApXCI7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgcmV0dXJuIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwKTtcbiAgfSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBleGVjdXRlUGFnZTtcbiIsImltcG9ydCBtZW51UGljIGZyb20gXCIuLi9hc3NldHMvaG9tZS1tZW51LmpwZ1wiO1xuaW1wb3J0IGNvbnRhY3RQaWMgZnJvbSBcIi4uL2Fzc2V0cy9ob21lLWNvbnRhY3QuanBnXCI7XG5pbXBvcnQgbGF0ZXJuIGZyb20gXCIuLi9hc3NldHMvcGFwZXItbGFudGVybi5zdmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlTWFpblNlYygpIHtcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICBsZXQgaGVhZGVyID0gY3JlYXRlSGVhZGVyKGBBLUNoYW4nc2AsIGBTaG9rdWRvdWApO1xuICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIodGV4dDEsIHRleHQyKSB7XG4gIGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaDEuY2xhc3NMaXN0LmFkZChcIm1haW5faGVhZGVyXCIpO1xuICBsZXQgc3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3BhbjEuY2xhc3NMaXN0LmFkZChcIm1haW5faGVhZGVyLW5hbWVcIik7XG4gIHNwYW4xLnRleHRDb250ZW50ID0gdGV4dDE7XG4gIGxldCBzcGFuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuMi5jbGFzc0xpc3QuYWRkKFwibWFpbl9oZWFkZXItc2hvcFwiKTtcbiAgc3BhbjIudGV4dENvbnRlbnQgPSB0ZXh0MjtcbiAgaDEuYXBwZW5kQ2hpbGQoc3BhbjEpO1xuICBoMS5hcHBlbmRDaGlsZChzcGFuMik7XG4gIHJldHVybiBoMTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VjdGlvbihoMnRleHQsIHRleHQsIGltZykge1xuICBsZXQgaG9tZXBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZXBhZ2VDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJob21lLXBhZ2VcIik7XG4gIGxldCBob21lcGFnZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lcGFnZUluZm8uY2xhc3NMaXN0LmFkZChcImhvbWUtcGFnZV9pbmZvXCIpO1xuICBsZXQgaG9tZXBhZ2VJbmZvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaDIudGV4dENvbnRlbnQgPSBoMnRleHQ7XG4gIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmEudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBsZXQgYnRuID0gY3JlYXRlQnV0dG9uKFwiR28gVGhlcmUhXCIpO1xuICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZS5zcmMgPSBpbWc7XG4gIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJob21lLXBhZ2VfaW5mb19pbWFnZVwiKTtcblxuICBpZiAoaDJ0ZXh0LnRvTG93ZXJDYXNlKCkgPT09IFwiY29udGFjdFwiKSB7XG4gICAgaG9tZXBhZ2VJbmZvLmNsYXNzTGlzdC5hZGQoXCJob21lLXBhZ2VfaW5mby0yXCIpO1xuICAgIGhvbWVwYWdlSW5mb1RleHQuY2xhc3NMaXN0LmFkZChcImhvbWUtcGFnZV9pbmZvX3BhcmEtY29udGFjdFwiKTtcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1wYWdlX2luZm9faW1hZ2UtY29udGFjdFwiKTtcbiAgICBob21lcGFnZUluZm9UZXh0LmFwcGVuZENoaWxkKGgyKTtcbiAgICBob21lcGFnZUluZm9UZXh0LmFwcGVuZENoaWxkKHBhcmEpO1xuICAgIGhvbWVwYWdlSW5mb1RleHQuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIGhvbWVwYWdlSW5mby5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgaG9tZXBhZ2VJbmZvLmFwcGVuZENoaWxkKGhvbWVwYWdlSW5mb1RleHQpO1xuICAgIGhvbWVwYWdlQ29udGVudC5hcHBlbmRDaGlsZChob21lcGFnZUluZm8pO1xuICB9IGVsc2Uge1xuICAgIGhvbWVwYWdlSW5mb1RleHQuY2xhc3NMaXN0LmFkZChcImhvbWUtcGFnZV9pbmZvX3BhcmEtbWVudVwiKTtcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1wYWdlX2luZm9faW1hZ2UtbWVudVwiKTtcbiAgICBob21lcGFnZUluZm9UZXh0LmFwcGVuZENoaWxkKGgyKTtcbiAgICBob21lcGFnZUluZm9UZXh0LmFwcGVuZENoaWxkKHBhcmEpO1xuICAgIGhvbWVwYWdlSW5mb1RleHQuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIGhvbWVwYWdlSW5mby5hcHBlbmRDaGlsZChob21lcGFnZUluZm9UZXh0KTtcbiAgICBob21lcGFnZUluZm8uYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGhvbWVwYWdlQ29udGVudC5hcHBlbmRDaGlsZChob21lcGFnZUluZm8pO1xuICB9XG5cbiAgcmV0dXJuIGhvbWVwYWdlQ29udGVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHRleHQpIHtcbiAgbGV0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uX2NvbnRhaW5lclwiKTtcblxuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuICBidG4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgcmV0dXJuIGJ0bkNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZVBhZ2UoKSB7XG4gIGxldCBjb250ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnRzLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuICBsZXQgbWFpbkNvbnRlbnQgPSBjcmVhdGVNYWluU2VjKCk7XG4gIGxldCBtZW51Q29udGVudCA9IGNyZWF0ZVNlY3Rpb24oXG4gICAgYE1lbnVgLFxuICAgIGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFeHBsaWNhYm9cbiAgcXVhZSwgb2ZmaWNpYSBkb2xvcmVtIGluY2lkdW50IHBvc3NpbXVzIGVsaWdlbmRpLCBleGVyY2l0YXRpb25lbSxcbiAgZGViaXRpcyFgLFxuICAgIG1lbnVQaWNcbiAgKTtcbiAgbGV0IGNvbnRhY3RDb250ZW50ID0gY3JlYXRlU2VjdGlvbihcbiAgICBgQ29udGFjdGAsXG4gICAgYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEV4cGxpY2Fib1xuICBxdWFlLCBvZmZpY2lhIGRvbG9yZW0gaW5jaWR1bnQgcG9zc2ltdXMgZWxpZ2VuZGksIGV4ZXJjaXRhdGlvbmVtLFxuICBkZWxlY3R1cyBhbGlxdWlkIGluIHRlbmV0dXIgZGViaXRpcyFgLFxuICAgIGNvbnRhY3RQaWNcbiAgKTtcblxuICBjb250ZW50cy5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG4gIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1lbnVDb250ZW50KTtcbiAgY29udGVudHMuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRlbnQpO1xuICByZXR1cm4gY29udGVudHM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWVQYWdlO1xuIiwiaW1wb3J0IHJhbWVuIGZyb20gXCIuLi9hc3NldHMvcmFtZW4uanBnXCI7XG5pbXBvcnQgc29iYSBmcm9tIFwiLi4vYXNzZXRzL1NvYmEuanBnXCI7XG5pbXBvcnQgdWRvbiBmcm9tIFwiLi4vYXNzZXRzL3Vkb24uanBnXCI7XG5pbXBvcnQgc3VzaGkxIGZyb20gXCIuLi9hc3NldHMvc3VzaGkxLmpwZ1wiO1xuaW1wb3J0IHN1c2hpMiBmcm9tIFwiLi4vYXNzZXRzL3N1c2hpMi5qcGdcIjtcbmltcG9ydCBzdXNoaTMgZnJvbSBcIi4uL2Fzc2V0cy9zdXNoaTMuanBnXCI7XG5pbXBvcnQgdGVtcHVyYSBmcm9tIFwiLi4vYXNzZXRzL1RlbXB1cmEuanBnXCI7XG5pbXBvcnQgZ3lvemEgZnJvbSBcIi4uL2Fzc2V0cy9neW96YS5qcGdcIjtcbmltcG9ydCBuYXR0byBmcm9tIFwiLi4vYXNzZXRzL25hdHRvLmpwZ1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVNYWluRm9vZCh0ZXh0LCBpbWFnZSkge1xuICBsZXQgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5EaXYuY2xhc3NMaXN0LmFkZChcIm1lbnVfZm9vZF9tYWluXCIpO1xuICBsZXQgZmlndXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ3VyZVwiKTtcbiAgbGV0IGZpZ0NhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWdjYXB0aW9uXCIpO1xuICBmaWdDYXAuY2xhc3NMaXN0LmFkZChcIm1lbnVfZm9vZF9pbWctY2FwXCIpO1xuICBmaWdDYXAudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nLmNsYXNzTGlzdC5hZGQoXCJtZW51X2Zvb2RfaW1nXCIpO1xuICBpbWcuc3JjID0gaW1hZ2U7XG5cbiAgZmlndXJlLmFwcGVuZENoaWxkKGltZyk7XG4gIGZpZ3VyZS5hcHBlbmRDaGlsZChmaWdDYXApO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKGZpZ3VyZSk7XG4gIHJldHVybiBtYWluRGl2O1xufVxuZnVuY3Rpb24gY3JlYXRlU3ViZm9vZCh0ZXh0MSwgaW1hZ2UxLCB0ZXh0MiwgaW1hZ2UyKSB7XG4gIGxldCBzdWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdWJEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnVfZm9vZF9tYWluX3N1YlwiKTtcbiAgbGV0IGZpZ3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XG4gIGxldCBmaWdDYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlnY2FwdGlvblwiKTtcbiAgZmlnQ2FwLmNsYXNzTGlzdC5hZGQoXCJtZW51X2Zvb2RfaW1nLXNtYWxsLWNhcC1zbWFsbFwiKTtcbiAgZmlnQ2FwLnRleHRDb250ZW50ID0gdGV4dDE7XG4gIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuY2xhc3NMaXN0LmFkZChcIm1lbnVfZm9vZF9pbWctc21hbGxcIik7XG4gIGltZy5zcmMgPSBpbWFnZTE7XG5cbiAgbGV0IGZpZ3VyZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xuICBsZXQgZmlnQ2FwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWdjYXB0aW9uXCIpO1xuICBmaWdDYXAyLmNsYXNzTGlzdC5hZGQoXCJtZW51X2Zvb2RfaW1nLXNtYWxsLWNhcC1zbWFsbFwiKTtcbiAgZmlnQ2FwMi50ZXh0Q29udGVudCA9IHRleHQyO1xuICBsZXQgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZzIuY2xhc3NMaXN0LmFkZChcIm1lbnVfZm9vZF9pbWctc21hbGxcIik7XG4gIGltZzIuc3JjID0gaW1hZ2UyO1xuXG4gIGZpZ3VyZS5hcHBlbmRDaGlsZChpbWcpO1xuICBmaWd1cmUuYXBwZW5kQ2hpbGQoZmlnQ2FwKTtcbiAgc3ViRGl2LmFwcGVuZENoaWxkKGZpZ3VyZSk7XG5cbiAgZmlndXJlLmFwcGVuZENoaWxkKGltZzIpO1xuICBmaWd1cmUuYXBwZW5kQ2hpbGQoZmlnQ2FwMik7XG4gIHN1YkRpdi5hcHBlbmRDaGlsZChmaWd1cmUyKTtcbiAgcmV0dXJuIHN1YkRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vZERpdihmb29kKSB7XG4gIGxldCBmb29kU2VjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vZFNlYy5jbGFzc0xpc3QuYWRkKFwiZm9vZHNlY1wiKTtcbiAgbGV0IGZvb2RUeXBlID0gZm9vZC50b0xvd2VyQ2FzZSgpO1xuICBsZXQgZm9vZE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb29kTWVudS5jbGFzc0xpc3QuYWRkKFwibWVudV9mb29kXCIpO1xuICBsZXQgZm9vZE1haW47XG4gIGxldCBmb29kU3ViMTtcbiAgbGV0IGhlYWRlcjtcbiAgaWYgKGZvb2RUeXBlID09PSBcIm5vb2RsZVwiKSB7XG4gICAgaGVhZGVyID0gY3JlYXRlRm9vZEhlYWRlcihcIk5vb2RsZXNcIik7XG4gICAgZm9vZE1haW4gPSBjcmVhdGVNYWluRm9vZChcIlJhbWVuXCIsIHJhbWVuKTtcbiAgICBmb29kU3ViMSA9IGNyZWF0ZVN1YmZvb2QoXCJVZG9uXCIsIHVkb24sIFwiU29iYVwiLCBzb2JhKTtcbiAgfSBlbHNlIGlmIChmb29kVHlwZSA9PT0gXCJzdXNoaVwiKSB7XG4gICAgaGVhZGVyID0gY3JlYXRlRm9vZEhlYWRlcihcIlN1c2hpXCIpO1xuICAgIGZvb2RNYWluID0gY3JlYXRlTWFpbkZvb2QoXCJTdXNoaVwiLCBzdXNoaTEpO1xuICAgIGZvb2RTdWIxID0gY3JlYXRlU3ViZm9vZChcIlN1c2hpXCIsIHN1c2hpMiwgXCJTdXNoaVwiLCBzdXNoaTMpO1xuICB9IGVsc2Uge1xuICAgIGhlYWRlciA9IGNyZWF0ZUZvb2RIZWFkZXIoXCJPdGhlciBGb29kc1wiKTtcbiAgICBmb29kTWFpbiA9IGNyZWF0ZU1haW5Gb29kKFwiVGVtcHVyYVwiLCB0ZW1wdXJhKTtcbiAgICBmb29kU3ViMSA9IGNyZWF0ZVN1YmZvb2QoXCJHeW96YVwiLCBneW96YSwgXCJOYXR0b1wiLCBuYXR0byk7XG4gIH1cblxuICBmb29kTWVudS5hcHBlbmRDaGlsZChmb29kTWFpbik7XG4gIGZvb2RNZW51LmFwcGVuZENoaWxkKGZvb2RTdWIxKTtcbiAgZm9vZFNlYy5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBmb29kU2VjLmFwcGVuZENoaWxkKGZvb2RNZW51KTtcbiAgcmV0dXJuIGZvb2RTZWM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb2RIZWFkZXIodGV4dCkge1xuICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGgyLmNsYXNzTGlzdC5hZGQoXCJtZW51X2Zvb2RfaGVhZGVyXCIpO1xuICBoMi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBoMjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gIGxldCBub29kbGVzID0gY3JlYXRlRm9vZERpdihcIm5vb2RsZVwiKTtcblxuICBsZXQgc3VzaGkgPSBjcmVhdGVGb29kRGl2KFwic3VzaGlcIik7XG5cbiAgbGV0IG90aGVyID0gY3JlYXRlRm9vZERpdihcIm90aGVyXCIpO1xuXG4gIG1lbnUuYXBwZW5kQ2hpbGQobm9vZGxlcyk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoc3VzaGkpO1xuICBtZW51LmFwcGVuZENoaWxkKG90aGVyKTtcblxuICByZXR1cm4gbWVudTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBcIi4vc2Nzcy9tYWluLnNjc3NcIjtcbmltcG9ydCBleGVjdXRlUGFnZSBmcm9tIFwiLi9tb2R1bGVzL2V4ZWN1dGVQYWdlXCI7XG5cbmV4ZWN1dGVQYWdlKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9