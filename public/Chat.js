(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Chat"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageMessenger/Chat.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageMessenger/Chat.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: {
    user_id: Number,
    role: Number
  },
  data: function data() {
    return {
      moment: moment__WEBPACK_IMPORTED_MODULE_0___default.a,
      properties: [],
      btn: 'hidden'
    };
  },
  methods: {
    getProperty: function getProperty() {
      var _this = this;

      axios.get('/api/get_properties/' + this.user_id + '?imej=1').then(function (response) {
        _this.properties = response.data.data;
        console.warn(_this.properties.data);
      });
    }
  },
  mounted: function mounted() {// this.getProperty();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageMessenger/Chat.vue?vue&type=template&id=3b2b1224&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageMessenger/Chat.vue?vue&type=template&id=3b2b1224& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass:
          "max-w-5xl p-6 mx-auto mt-5 bg-gray-100 rounded-md mb-5 shadow-inner ",
      },
      [
        _c(
          "h2",
          {
            staticClass:
              " font-bold text-gray-700 capitalize text-center text-xl mb-2 -mt-2",
          },
          [_vm._v("My Chat Messenger")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "w-full" }, [
          _c(
            "div",
            { staticClass: "grid grid-cols-3 min-w-full border rounded" },
            [
              _c(
                "div",
                { staticClass: "col-span-1 bg-white border-r border-gray-300" },
                [
                  _c("div", { staticClass: "my-3 mx-3 " }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "relative text-gray-600 focus-within:text-gray-400",
                      },
                      [
                        _c(
                          "span",
                          {
                            staticClass:
                              "absolute inset-y-0 left-0 flex items-center pl-2",
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "w-6 h-6 text-gray-500",
                                attrs: {
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  viewBox: "0 0 24 24",
                                },
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                                  },
                                }),
                              ]
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          staticClass:
                            "py-2 pl-10 block w-full rounded bg-gray-100 outline-none focus:text-gray-700",
                          attrs: {
                            "aria-placeholder":
                              "Busca tus amigos o contacta nuevos",
                            placeholder: "Busca tus amigos",
                            type: "search",
                            name: "search",
                            required: "",
                            autocomplete: "search",
                          },
                        }),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _vm._m(0),
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-span-2 bg-white" }, [
                _c("div", { staticClass: "w-full" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex items-center border-b border-gray-300 pl-3 py-3",
                    },
                    [
                      _c("img", {
                        staticClass: "h-10 w-10 rounded-full object-cover",
                        attrs: {
                          src: "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                          alt: "username",
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "block ml-2 font-bold text-base text-gray-600",
                        },
                        [_vm._v("Eduard")]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "connected text-green-500 ml-2" },
                        [
                          _c("svg", { attrs: { width: "6", height: "6" } }, [
                            _c("circle", {
                              attrs: {
                                cx: "3",
                                cy: "3",
                                r: "3",
                                fill: "currentColor",
                              },
                            }),
                          ]),
                        ]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      ref: "toolbarChat",
                      staticClass: "w-full overflow-y-auto p-10 relative",
                      staticStyle: { height: "400px" },
                      attrs: { id: "chat" },
                    },
                    [_vm._m(1)]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "w-full py-3 px-3 flex items-center justify-between border-t border-gray-300",
                    },
                    [
                      _c(
                        "button",
                        { staticClass: "outline-none focus:outline-none" },
                        [
                          _c(
                            "svg",
                            {
                              staticClass: "text-gray-400 h-6 w-6",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                              },
                            },
                            [
                              _c("path", {
                                attrs: {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        { staticClass: "outline-none focus:outline-none ml-1" },
                        [
                          _c(
                            "svg",
                            {
                              staticClass: "text-gray-400 h-6 w-6",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                              },
                            },
                            [
                              _c("path", {
                                attrs: {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13",
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        staticClass:
                          "py-2 mx-3 pl-5 block w-full rounded-full bg-gray-100 outline-none focus:text-gray-700",
                        attrs: {
                          "aria-placeholder": "Escribe un mensaje aquí",
                          placeholder: "Escribe un mensaje aquí",
                          type: "text",
                          name: "message",
                          required: "",
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "outline-none focus:outline-none",
                          attrs: { type: "submit" },
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass:
                                "text-gray-400 h-7 w-7 origin-center transform rotate-90",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                              },
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d: "M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z",
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                ]),
              ]),
            ]
          ),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "overflow-auto", staticStyle: { height: "400px" } },
      [
        _c("h2", { staticClass: "ml-2 mb-2 text-gray-600 text-lg my-2" }, [
          _vm._v("Chats"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            {
              staticClass:
                "hover:bg-gray-100 border-b border-gray-300 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out",
            },
            [
              _c("img", {
                staticClass: "h-10 w-10 rounded-full object-cover",
                attrs: {
                  src: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                  alt: "username",
                },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "w-full pb-2" }, [
                _c("div", { staticClass: "flex justify-between" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "block ml-2 font-semibold text-base text-gray-600 ",
                    },
                    [_vm._v("Jhon C")]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "block ml-2 text-sm text-gray-600" },
                    [_vm._v("5 minutes")]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "block ml-2 text-sm text-gray-600" },
                  [_vm._v("Hello world!!")]
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "bg-gray-100 border-b border-gray-300 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out",
            },
            [
              _c("img", {
                staticClass: "h-10 w-10 rounded-full object-cover",
                attrs: {
                  src: "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                  alt: "username",
                },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "w-full pb-2" }, [
                _c("div", { staticClass: "flex justify-between" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "block ml-2 font-semibold text-base text-gray-600 ",
                    },
                    [_vm._v("Eduard")]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "block ml-2 text-sm text-gray-600" },
                    [_vm._v("15 minutes")]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "block ml-2 text-sm text-gray-600" },
                  [_vm._v("I am fine")]
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "hover:bg-gray-100 border-b border-gray-300 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out",
            },
            [
              _c("img", {
                staticClass: "h-10 w-10 rounded-full object-cover",
                attrs: {
                  src: "https://images.pexels.com/photos/6238133/pexels-photo-6238133.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                  alt: "username",
                },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "w-full pb-2" }, [
                _c("div", { staticClass: "flex justify-between" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "block ml-2 font-semibold text-base text-gray-600 ",
                    },
                    [_vm._v("Celia")]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "block ml-2 text-sm text-gray-600" },
                    [_vm._v("1 hour")]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "block ml-2 text-sm text-gray-600" },
                  [_vm._v("Last message")]
                ),
              ]),
            ]
          ),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", { staticClass: "clearfix2" }, [
        _c("div", { staticClass: "w-full flex justify-start" }, [
          _c(
            "div",
            {
              staticClass:
                "bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative",
              staticStyle: { "max-width": "300px" },
            },
            [
              _c("span", { staticClass: "block" }, [_vm._v("Hello bro")]),
              _vm._v(" "),
              _c("span", { staticClass: "block text-xs text-right" }, [
                _vm._v("10:30pm"),
              ]),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-full flex justify-end" }, [
          _c(
            "div",
            {
              staticClass:
                "bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative",
              staticStyle: { "max-width": "300px" },
            },
            [
              _c("span", { staticClass: "block" }, [_vm._v("Hello")]),
              _vm._v(" "),
              _c("span", { staticClass: "block text-xs text-left" }, [
                _vm._v("10:32pm"),
              ]),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-full flex justify-end" }, [
          _c(
            "div",
            {
              staticClass:
                "bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative",
              staticStyle: { "max-width": "300px" },
            },
            [
              _c("span", { staticClass: "block" }, [_vm._v("how are you?")]),
              _vm._v(" "),
              _c("span", { staticClass: "block text-xs text-left" }, [
                _vm._v("10:32pm"),
              ]),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-full flex justify-start" }, [
          _c(
            "div",
            {
              staticClass:
                "bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative",
              staticStyle: { "max-width": "300px" },
            },
            [
              _c("span", { staticClass: "block" }, [_vm._v("I am fine")]),
              _vm._v(" "),
              _c("span", { staticClass: "block text-xs text-right" }, [
                _vm._v("10:42pm"),
              ]),
            ]
          ),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ManageMessenger/Chat.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/ManageMessenger/Chat.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chat_vue_vue_type_template_id_3b2b1224___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=3b2b1224& */ "./resources/js/components/ManageMessenger/Chat.vue?vue&type=template&id=3b2b1224&");
/* harmony import */ var _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&lang=js& */ "./resources/js/components/ManageMessenger/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chat_vue_vue_type_template_id_3b2b1224___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chat_vue_vue_type_template_id_3b2b1224___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManageMessenger/Chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManageMessenger/Chat.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ManageMessenger/Chat.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageMessenger/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManageMessenger/Chat.vue?vue&type=template&id=3b2b1224&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/ManageMessenger/Chat.vue?vue&type=template&id=3b2b1224& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_3b2b1224___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=template&id=3b2b1224& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageMessenger/Chat.vue?vue&type=template&id=3b2b1224&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_3b2b1224___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_3b2b1224___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);