(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Manage_Landlord~Manage_Staff~Manage_Student"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
  props: {
    form: Object
  },
  data: function data() {
    return {};
  },
  methods: {
    closeModal: function closeModal() {
      this.$emit('closeModal');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=template&id=af4a24ae&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=template&id=af4a24ae& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass:
        "modal h-screen w-full fixed left-0 top-0 flex justify-center z-10 items-center bg-black bg-opacity-50"
    },
    [
      _c(
        "div",
        {
          staticClass:
            "bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400 rounded shadow-lg w-10/12 md:w-1/3"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "border-b px-4 py-2 flex justify-between items-center"
            },
            [
              _c("h3", { staticClass: "font-semibold text-lg" }, [
                _vm._v("View User Details")
              ]),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "text-black ", on: { click: _vm.closeModal } },
                [_vm._v("✗")]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "p-3" }, [
            _c(
              "table",
              { staticClass: "min-w-full px-3 py-3 bg-white dark:bg-gray-800" },
              [
                _c(
                  "tr",
                  { staticClass: "order-b border-gray-200 hover:bg-gray-100" },
                  [
                    _c(
                      "td",
                      {
                        staticClass: "place-items-center py-1",
                        attrs: { colspan: "2" }
                      },
                      [
                        _c("center", [
                          _c("img", {
                            staticClass:
                              "w-32 h-32 rounded-full hover:scale-150 hover:z-10 transform ease-in-out transition duration-500",
                            attrs: { src: "/images/Profile/" + _vm.form.pic }
                          })
                        ])
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "tr",
                  { staticClass: "border-b border-gray-200 hover:bg-gray-100" },
                  [
                    _c(
                      "td",
                      {
                        staticClass:
                          "py-3 px-3 bg-gray-200 text-gray-900 uppercase text-sm leading-normal "
                      },
                      [_vm._v("ID: ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "py-3 px-6 text-left whitespace-nowrap" },
                      [
                        _c("div", { staticClass: "flex items-center" }, [
                          _c("span", [_vm._v(_vm._s(_vm.form.id))])
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "tr",
                  { staticClass: "border-b border-gray-200 hover:bg-gray-100" },
                  [
                    _c(
                      "td",
                      {
                        staticClass:
                          "py-3 px-3 bg-gray-200 text-gray-900 uppercase text-sm leading-normal"
                      },
                      [_vm._v("Name: ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "py-3 px-6 text-left whitespace-nowrap" },
                      [
                        _c("div", { staticClass: "flex items-center" }, [
                          _c("span", [_vm._v(_vm._s(_vm.form.name))])
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "tr",
                  { staticClass: "border-b border-gray-200 hover:bg-gray-100" },
                  [
                    _c(
                      "td",
                      {
                        staticClass:
                          "py-3 px-3 bg-gray-200 text-gray-900 uppercase text-sm leading-normal"
                      },
                      [_vm._v("Email: ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "py-3 px-6 text-left whitespace-nowrap" },
                      [
                        _c("div", { staticClass: "flex items-center" }, [
                          _c("span", [_vm._v(_vm._s(_vm.form.email))])
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "tr",
                  { staticClass: "border-b border-gray-200 hover:bg-gray-100" },
                  [
                    _c(
                      "td",
                      {
                        staticClass:
                          "py-3 px-3 bg-gray-200 text-gray-900 uppercase text-sm leading-normal"
                      },
                      [_vm._v("Gender: ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "py-3 px-6 text-left whitespace-nowrap" },
                      [
                        _c("div", { staticClass: "flex items-center" }, [
                          _c("span", [_vm._v(_vm._s(_vm.form.gender))])
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "tr",
                  { staticClass: "border-b border-gray-200 hover:bg-gray-100" },
                  [
                    _c(
                      "td",
                      {
                        staticClass:
                          "py-3 px-3 bg-gray-200 text-gray-900 uppercase text-sm leading-normal"
                      },
                      [_vm._v("Phone: ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "py-3 px-6 text-left whitespace-nowrap" },
                      [
                        _c("div", { staticClass: "flex items-center" }, [
                          _c("span", [_vm._v(_vm._s(_vm.form.phone))])
                        ])
                      ]
                    )
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex justify-end items-center w-100 border-t p-3" },
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "bg-pink-600 hover:bg-pink-700 px-3 py-1 rounded text-white mr-1 close-modal",
                  attrs: {
                    to: {
                      name: "profile_view",
                      params: { role: _vm.form.role, id: _vm.form.id }
                    },
                    target: "_blank"
                  }
                },
                [_vm._v("View Profile")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white mr-1 close-modal",
                  on: { click: _vm.closeModal }
                },
                [_vm._v("Okay")]
              )
            ],
            1
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Modal_Student.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Modal_Student.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_Student_vue_vue_type_template_id_af4a24ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal_Student.vue?vue&type=template&id=af4a24ae& */ "./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=template&id=af4a24ae&");
/* harmony import */ var _Modal_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal_Student.vue?vue&type=script&lang=js& */ "./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Modal_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Modal_Student_vue_vue_type_template_id_af4a24ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Modal_Student_vue_vue_type_template_id_af4a24ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManageRegistrationUsers/Modal_Student.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Modal_Student.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=template&id=af4a24ae&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=template&id=af4a24ae& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_Student_vue_vue_type_template_id_af4a24ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Modal_Student.vue?vue&type=template&id=af4a24ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=template&id=af4a24ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_Student_vue_vue_type_template_id_af4a24ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_Student_vue_vue_type_template_id_af4a24ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);