(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PropertyList_landlord"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/PropertyList_landlord.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/PropertyList_landlord.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoomCard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoomCard.vue */ "./resources/js/components/ManagePropertyList/RoomCard.vue");
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
  components: {
    RoomCard: _RoomCard_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    user_id: Number,
    role: Number
  },
  data: function data() {
    return {
      properties: []
    };
  },
  methods: {
    getProperty: function getProperty() {
      var _this = this;

      axios.get('/api/get_properties/' + this.user_id).then(function (response) {
        _this.properties = response.data.data;
        console.warn(_this.properties.data);
      });
    }
  },
  mounted: function mounted() {
    this.getProperty();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/RoomCard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/RoomCard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: {},
  data: function data() {
    return {};
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/PropertyList_landlord.vue?vue&type=template&id=d3d447c0&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/PropertyList_landlord.vue?vue&type=template&id=d3d447c0& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "max-w-3xl p-6 mx-auto mt-10 bg-gray-200 rounded-md mb-10" },
    [
      _c(
        "div",
        { staticClass: "flex justify-end items-center" },
        [
          _c(
            "router-link",
            {
              staticClass:
                " bg-blue-600 shadow-lg hover:bg-blue-700 text-xs text-white px-3 py-3 rounded-md",
              attrs: { to: { name: "add_property" } }
            },
            [_vm._v("\n                  + Add Property\n            ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.properties, function(property) {
        return _c(
          "div",
          {
            key: property.id,
            staticClass:
              "max-w-2xl px-8 py-4 mx-auto flex  overflow-hidden bg-white rounded-lg shadow-lg mt-5"
          },
          [
            _c("div", { staticClass: "w-1/3 bg-cover" }, [
              _c("img", {
                staticClass: "rounded-full h-50 w-50 object-cover",
                attrs: {
                  src: "/images/Properties/" + property.cover.photo_name,
                  alt: "Avatar"
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "w-2/3 p-4 md:p-4" }, [
              _c(
                "div",
                { staticClass: "flex justify-between item-center" },
                [
                  _c(
                    "h1",
                    {
                      staticClass:
                        "text-2xl font-bold text-gray-800 dark:text-white"
                    },
                    [_vm._v(_vm._s(property.name))]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass:
                        "px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200\n                         transform bg-gray-800 rounded hover:bg-gray-700  focus:outline-none focus:bg-gray-700",
                      attrs: {
                        to: {
                          name: "property",
                          params: { property_id: property.id }
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                         View Details\n                "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass: "mt-2 text-sm text-gray-600 dark:text-gray-400"
                },
                [_vm._v(_vm._s(property.address))]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "flex mt-2 item-center" }, [
                _c(
                  "p",
                  {
                    staticClass: "mt-2 text-sm text-gray-600 dark:text-gray-400"
                  },
                  [_vm._v(_vm._s(property.status))]
                )
              ])
            ])
          ]
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/RoomCard.vue?vue&type=template&id=3a8eaeb2&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/RoomCard.vue?vue&type=template&id=3a8eaeb2& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {}, [
    _c(
      "div",
      {
        staticClass:
          "max-w-2xl px-8 py-4 mx-auto flex  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
      },
      [
        _c("div", {
          staticClass: "w-1/3 bg-cover",
          staticStyle: {
            "background-image":
              "url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')"
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "w-2/3 p-4 md:p-4" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "p",
            { staticClass: "mt-2 text-sm text-gray-600 dark:text-gray-400" },
            [
              _vm._v(
                "Lorem ipsum dolor sit amet consectetur adipisicing elit In odit"
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "flex mt-2 item-center" }, [
            _c(
              "svg",
              {
                staticClass:
                  "w-5 h-5 text-gray-700 fill-current dark:text-gray-300",
                attrs: { viewBox: "0 0 24 24" }
              },
              [
                _c("path", {
                  attrs: {
                    d:
                      "M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "svg",
              {
                staticClass:
                  "w-5 h-5 text-gray-700 fill-current dark:text-gray-300",
                attrs: { viewBox: "0 0 24 24" }
              },
              [
                _c("path", {
                  attrs: {
                    d:
                      "M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "svg",
              {
                staticClass:
                  "w-5 h-5 text-gray-700 fill-current dark:text-gray-300",
                attrs: { viewBox: "0 0 24 24" }
              },
              [
                _c("path", {
                  attrs: {
                    d:
                      "M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "svg",
              {
                staticClass: "w-5 h-5 text-gray-500 fill-current",
                attrs: { viewBox: "0 0 24 24" }
              },
              [
                _c("path", {
                  attrs: {
                    d:
                      "M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "svg",
              {
                staticClass: "w-5 h-5 text-gray-500 fill-current",
                attrs: { viewBox: "0 0 24 24" }
              },
              [
                _c("path", {
                  attrs: {
                    d:
                      "M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  }
                })
              ]
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex justify-between item-center" }, [
      _c(
        "h1",
        { staticClass: "text-2xl font-bold text-gray-800 dark:text-white" },
        [_vm._v("Taman Sri Petaling")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass:
            "px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
        },
        [_vm._v("View Details")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ManagePropertyList/PropertyList_landlord.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/PropertyList_landlord.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PropertyList_landlord_vue_vue_type_template_id_d3d447c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PropertyList_landlord.vue?vue&type=template&id=d3d447c0& */ "./resources/js/components/ManagePropertyList/PropertyList_landlord.vue?vue&type=template&id=d3d447c0&");
/* harmony import */ var _PropertyList_landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PropertyList_landlord.vue?vue&type=script&lang=js& */ "./resources/js/components/ManagePropertyList/PropertyList_landlord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PropertyList_landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PropertyList_landlord_vue_vue_type_template_id_d3d447c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PropertyList_landlord_vue_vue_type_template_id_d3d447c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManagePropertyList/PropertyList_landlord.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/PropertyList_landlord.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/PropertyList_landlord.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyList_landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PropertyList_landlord.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/PropertyList_landlord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyList_landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/PropertyList_landlord.vue?vue&type=template&id=d3d447c0&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/PropertyList_landlord.vue?vue&type=template&id=d3d447c0& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyList_landlord_vue_vue_type_template_id_d3d447c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PropertyList_landlord.vue?vue&type=template&id=d3d447c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/PropertyList_landlord.vue?vue&type=template&id=d3d447c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyList_landlord_vue_vue_type_template_id_d3d447c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyList_landlord_vue_vue_type_template_id_d3d447c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ManagePropertyList/RoomCard.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/RoomCard.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoomCard_vue_vue_type_template_id_3a8eaeb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoomCard.vue?vue&type=template&id=3a8eaeb2& */ "./resources/js/components/ManagePropertyList/RoomCard.vue?vue&type=template&id=3a8eaeb2&");
/* harmony import */ var _RoomCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoomCard.vue?vue&type=script&lang=js& */ "./resources/js/components/ManagePropertyList/RoomCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RoomCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoomCard_vue_vue_type_template_id_3a8eaeb2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoomCard_vue_vue_type_template_id_3a8eaeb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManagePropertyList/RoomCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/RoomCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/RoomCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/RoomCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/RoomCard.vue?vue&type=template&id=3a8eaeb2&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/RoomCard.vue?vue&type=template&id=3a8eaeb2& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomCard_vue_vue_type_template_id_3a8eaeb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomCard.vue?vue&type=template&id=3a8eaeb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/RoomCard.vue?vue&type=template&id=3a8eaeb2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomCard_vue_vue_type_template_id_3a8eaeb2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomCard_vue_vue_type_template_id_3a8eaeb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);