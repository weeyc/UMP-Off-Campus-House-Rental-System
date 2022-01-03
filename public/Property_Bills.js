(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Property_Bills"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePayment/Property_Bills.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePayment/Property_Bills.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    user_id: Number,
    role: Number
  },
  data: function data() {
    return {
      info: [],
      housemates: [],
      moment: moment__WEBPACK_IMPORTED_MODULE_0___default.a,
      prop_id: this.$route.params.id,
      top_btn_style: 'p-3 rounded bg-yellow-100 text-yellow-500 hover:bg-yellow-500 hover:text-white :active:bg-yellow-500 active:text-white active:outline-none transition duration-150 ease-in-out shadow-xl'
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get('/api/get_HousePlatform/' + this.prop_id + '?land=1&imej=1').then(function (response) {
        _this.info = response.data.data[0];
        console.warn(_this.info.data);
      });
    },
    getTenantBills: function getTenantBills() {
      var _this2 = this;

      axios.get('/api/get_Property_Tenants_Bills/' + this.prop_id + '?land=1&imej=1').then(function (response) {
        _this2.housemates = response.data.data;
        console.warn(_this2.info.data);
      });
    }
  },
  watch: {
    $route: function $route() {}
  },
  mounted: function mounted() {
    this.getData();
    this.getTenantBills();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePayment/Property_Bills.vue?vue&type=template&id=ea70e18a&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePayment/Property_Bills.vue?vue&type=template&id=ea70e18a& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "p-6 ml-5" }, [
    _c(
      "div",
      {
        staticClass:
          "max-w-6xl p-6 mx-auto mt-3  bg-gray-100 rounded-md shadow-xl mb-5",
      },
      [
        _c(
          "h2",
          {
            staticClass:
              " font-bold text-gray-700 capitalize text-center text-xl",
          },
          [_vm._v("Property Bills")]
        ),
        _vm._v(" "),
        _vm.info.length == 0
          ? _c("div", [_vm._v(" You don't have any verified property yet.")])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { attrs: { else: "" } }, [
          _c(
            "section",
            {
              staticClass:
                "mt-5 rounded-lg top w-full bg-blue-600 overflow-hidden relative block h-1/3",
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "top-0 bg-center bg-cover bg w-full h-full object-cover object-center absolute z-0",
                },
                [
                  _c("img", {
                    staticClass:
                      "top-0 bg-center bg-cover bg w-full h-full object-cover object-center rounded-lg absolute z-0",
                    attrs: {
                      src:
                        "/images/Properties/" +
                        _vm.info.property.cover.photo_name,
                      alt: "Avatar",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex flex-col justify-center items-center relative h-full bg-black bg-opacity-20 text-white mt-2",
                    },
                    [
                      _c("img", {
                        staticClass: "h-20 w-20 object-cover rounded-full",
                        attrs: {
                          src:
                            "/images/Profile/" +
                            _vm.info.property.land.landlord_pic,
                        },
                      }),
                      _vm._v(" "),
                      _c("h1", { staticClass: "text-2xl font-semibold" }, [
                        _vm._v(
                          "(ID: " +
                            _vm._s(_vm.info.property.id) +
                            ") " +
                            _vm._s(_vm.info.property.address)
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "land_profile_view",
                              params: { role: 2, id: _vm.info.landlord_id },
                            },
                            target: "_blank",
                          },
                        },
                        [
                          _c(
                            "h4",
                            {
                              staticClass:
                                "text-sm font-semibold hover:underline hover:text-yellow-500",
                            },
                            [
                              _vm._v(
                                " " +
                                  _vm._s(_vm.info.property.land.landlord_name)
                              ),
                            ]
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ]
              ),
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "flex mt-32 container w-full px-4 " }, [
            _c(
              "div",
              { staticClass: "w-full mb-6 shadow-xl rounded-lg -mt-36" },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "p-5", attrs: { id: "Tenants" } },
                  _vm._l(_vm.housemates, function (item) {
                    return _c(
                      "div",
                      {
                        key: item.id,
                        staticClass:
                          "bg-white w-full mx-auto rounded-2xl overflow-hidden shadow-lg mb-10",
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "h-14 flex justify-center items-center p-5",
                            staticStyle: { "background-color": "#2b2a33" },
                          },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "flex justify-center items-center",
                                attrs: {
                                  to: {
                                    name: "view_room_list_land",
                                    params: { id: item.id },
                                  },
                                  target: "_blank",
                                },
                              },
                              [
                                _c("img", {
                                  staticClass:
                                    "h-7 w-7 mr-3 object-cover rounded-full",
                                  attrs: {
                                    src:
                                      "/images/Properties/" +
                                      item.photo_room[0].photo_name,
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text hover:underline ",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(item.room_name) +
                                        " | ID: " +
                                        _vm._s(item.id)
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",
                          },
                          [
                            _c(
                              "table",
                              {
                                staticClass:
                                  "min-w-full divide-y divide-gray-200",
                              },
                              [
                                _vm._m(1, true),
                                _vm._v(" "),
                                _vm._l(item.tenants, function (mate) {
                                  return _c(
                                    "tbody",
                                    {
                                      key: mate.index,
                                      staticClass:
                                        "bg-white divide-y divide-gray-200",
                                    },
                                    [
                                      _c(
                                        "tr",
                                        [
                                          _c(
                                            "td",
                                            { staticClass: "px-6 py-4" },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "text-sm text-gray-900",
                                                },
                                                [_vm._v(_vm._s(mate.tenant_id))]
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "router-link",
                                            {
                                              staticClass: "flex items-center",
                                              attrs: {
                                                to: {
                                                  name: "land_profile_view",
                                                  params: {
                                                    role: 1,
                                                    id: mate.student_id,
                                                  },
                                                },
                                                target: "_blank",
                                              },
                                            },
                                            [
                                              _c(
                                                "td",
                                                {
                                                  staticClass: "flex px-6 py-4",
                                                },
                                                [
                                                  _c("img", {
                                                    staticClass:
                                                      "mr-2 w-6 h-6 rounded-full hover:scale-150 hover:z-10 transform ease-in-out transition duration-500",
                                                    attrs: {
                                                      src:
                                                        "/images/Profile/" +
                                                        mate.student.pic,
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c("span", [
                                                    _vm._v(
                                                      _vm._s(mate.student.name)
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass:
                                                "px-6 py-4 whitespace-nowrap",
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "text-sm text-gray-900",
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      mate.student.phone_no
                                                    )
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass:
                                                "px-6 py-4 whitespace-nowrap",
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "text-sm text-gray-900",
                                                },
                                                [
                                                  _vm._v(
                                                    " " +
                                                      _vm._s(mate.move_in_date)
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass:
                                                "px-6 py-4 whitespace-nowrap",
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "text-sm text-gray-900",
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      mate.tenancy_period
                                                    ) + " Months"
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass:
                                                "px-6 py-4 whitespace-nowrap",
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "text-sm text-gray-900",
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(mate.tenant_status)
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass:
                                                "py-3 px-2 text-center",
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "flex item-center justify-center",
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "w-4 mr-2 transform hover:text-purple-500 hover:scale-110",
                                                    },
                                                    [
                                                      _c(
                                                        "button",
                                                        {
                                                          on: {
                                                            click: function (
                                                              $event
                                                            ) {
                                                              return _vm.kickTenant(
                                                                mate.room_id,
                                                                mate.tenant_id
                                                              )
                                                            },
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "svg",
                                                            {
                                                              attrs: {
                                                                width: "18",
                                                                height: "18",
                                                                viewBox:
                                                                  "0 0 24 24",
                                                                fill: "none",
                                                                xmlns:
                                                                  "http://www.w3.org/2000/svg",
                                                              },
                                                            },
                                                            [
                                                              _c("path", {
                                                                attrs: {
                                                                  d: "M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16",
                                                                  stroke:
                                                                    "currentColor",
                                                                  "stroke-width":
                                                                    "1.5",
                                                                  "stroke-linecap":
                                                                    "round",
                                                                  "stroke-linejoin":
                                                                    "round",
                                                                },
                                                              }),
                                                              _vm._v(" "),
                                                              _c("path", {
                                                                attrs: {
                                                                  d: "M7 12H21M21 12L18 9M21 12L18 15",
                                                                  stroke:
                                                                    "currentColor",
                                                                  "stroke-width":
                                                                    "1.5",
                                                                  "stroke-linecap":
                                                                    "round",
                                                                  "stroke-linejoin":
                                                                    "round",
                                                                },
                                                              }),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ]
                                  )
                                }),
                              ],
                              2
                            ),
                          ]
                        ),
                      ]
                    )
                  }),
                  0
                ),
              ]
            ),
          ]),
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
      "div",
      {
        staticClass: "px-72 mt-10 flex items-center justify-between",
        attrs: { id: "line" },
      },
      [
        _c("hr", { staticClass: "w-full" }),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass:
              "focus:outline-none text-2xl font-semibold flex flex-shrink-0 leading-normal px-3 py-2 text-gray-500",
          },
          [_vm._v("My Tenants")]
        ),
        _vm._v(" "),
        _c("hr", { staticClass: "w-full" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "bg-gray-50" }, [
      _c("tr", [
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            attrs: { scope: "col" },
          },
          [
            _vm._v(
              "\n                          Tenant ID\n                          "
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            attrs: { scope: "col" },
          },
          [
            _vm._v(
              "\n                          Name\n                          "
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            attrs: { scope: "col" },
          },
          [
            _vm._v(
              "\n                          Phone No.\n                          "
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            attrs: { scope: "col" },
          },
          [
            _vm._v(
              "\n                          Move Date\n                          "
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            attrs: { scope: "col" },
          },
          [
            _vm._v(
              "\n                          Tenancy Period\n                          "
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            attrs: { scope: "col" },
          },
          [
            _vm._v(
              "\n                          Tenancy Status\n                          "
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            attrs: { scope: "col" },
          },
          [
            _vm._v(
              "\n                          Kick Tenant\n                          "
            ),
          ]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ManagePayment/Property_Bills.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/ManagePayment/Property_Bills.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Property_Bills_vue_vue_type_template_id_ea70e18a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Property_Bills.vue?vue&type=template&id=ea70e18a& */ "./resources/js/components/ManagePayment/Property_Bills.vue?vue&type=template&id=ea70e18a&");
/* harmony import */ var _Property_Bills_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Property_Bills.vue?vue&type=script&lang=js& */ "./resources/js/components/ManagePayment/Property_Bills.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Property_Bills_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Property_Bills_vue_vue_type_template_id_ea70e18a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Property_Bills_vue_vue_type_template_id_ea70e18a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManagePayment/Property_Bills.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManagePayment/Property_Bills.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/ManagePayment/Property_Bills.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_Bills_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Property_Bills.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePayment/Property_Bills.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_Bills_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManagePayment/Property_Bills.vue?vue&type=template&id=ea70e18a&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/ManagePayment/Property_Bills.vue?vue&type=template&id=ea70e18a& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_Bills_vue_vue_type_template_id_ea70e18a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Property_Bills.vue?vue&type=template&id=ea70e18a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePayment/Property_Bills.vue?vue&type=template&id=ea70e18a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_Bills_vue_vue_type_template_id_ea70e18a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_Bills_vue_vue_type_template_id_ea70e18a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);