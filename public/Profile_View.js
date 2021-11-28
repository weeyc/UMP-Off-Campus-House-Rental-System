(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Profile_View"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Profile_View.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRegistrationUsers/Profile_View.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_Modal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit_Modal.vue */ "./resources/js/components/ManageRegistrationUsers/Edit_Modal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    EditModal: _Edit_Modal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  //   props: {
  //         user_id: Number,
  //         role: Number
  //     },
  data: function data() {
    return {
      userProfile: [],
      route_id: this.$route.params.id,
      route_role: this.$route.params.role,
      form: {
        id: '',
        name: '',
        email: '',
        password: '',
        gender: '',
        phone_num: '',
        avatar: null,
        pic: '',
        des: ''
      },
      toggleModal: false
    };
  },
  methods: {
    getProfile: function getProfile() {
      var _this = this;

      axios.get('/api/get_profile/' + this.route_id + '/' + this.route_role).then(function (response) {
        _this.userProfile = response.data.data;
        console.warn(_this.userProfile.data);
      })["catch"](function (errors) {
        console.log(errors);
      });
    },
    closeEditModal: function closeEditModal() {
      this.toggleModal = !this.toggleModal;
    },
    clickEdit: function clickEdit(user) {
      this.form.id = user.id;
      this.form.name = user.name;
      this.form.email = user.email;
      this.form.password = user.password;
      this.form.gender = user.gender;
      this.form.phone_num = user.phone_no;
      this.form.pic = user.pic;
      this.form.des = user.des;
    },
    getRole: function getRole() {
      if (this.route_role == 1) {
        this.userRole = 'Student';
      } else if (this.route_role == 2) {
        this.userRole = 'Landlord';
      } else this.userRole = 'Staff';
    }
  },
  mounted: function mounted() {
    this.getProfile();
    this.getRole();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Profile_View.vue?vue&type=template&id=0dbec2ab&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRegistrationUsers/Profile_View.vue?vue&type=template&id=0dbec2ab& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "profile-page" },
    [
      _c("section", { staticClass: "relative block h-500-px" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px",
            staticStyle: { transform: "translateZ(0px)" }
          },
          [
            _c(
              "svg",
              {
                staticClass: "absolute bottom-0 overflow-hidden",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  preserveAspectRatio: "none",
                  version: "1.1",
                  viewBox: "0 0 2560 100",
                  x: "0",
                  y: "0"
                }
              },
              [
                _c("polygon", {
                  staticClass: "text-blueGray-200 fill-current",
                  attrs: { points: "2560 0 2560 100 0 100" }
                })
              ]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "relative py-16 bg-blueGray-200" }, [
        _c("div", { staticClass: "container mx-auto px-4" }, [
          _c(
            "div",
            {
              staticClass:
                "relative flex flex-col min-w-0 break-words bg-pink-200 w-full mb-6 shadow-xl rounded-lg -mt-64"
            },
            [
              _c(
                "div",
                { staticClass: "px-6" },
                [
                  _c("div", { staticClass: "flex flex-wrap justify-center" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "w-full px-4 lg:order-1 flex justify-center"
                      },
                      _vm._l(_vm.userProfile, function(user) {
                        return _c(
                          "div",
                          { key: user.id, staticClass: "relative" },
                          [
                            _c("img", {
                              staticClass:
                                "shadow-xl rounded-full h-44  align-middle border-4 border-pink-400 absolute -m-16 -ml-20 lg:-ml-16 max-w-200-px",
                              attrs: { src: "/images/Profile/" + user.pic }
                            })
                          ]
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "w-full px-4 lg:order-2 lg:text-right lg:self-center"
                      },
                      _vm._l(_vm.userProfile, function(user) {
                        return _c(
                          "div",
                          {
                            key: user.id,
                            staticClass: "py-6 px-3 mt-32 sm:mt-0"
                          },
                          [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-base px-6 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    _vm.clickEdit(user)
                                    _vm.toggleModal = !_vm.toggleModal
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                  Chat\n                "
                                )
                              ]
                            )
                          ]
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _vm._m(1)
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-center mt-12" },
                    [
                      _c(
                        "h3",
                        {
                          staticClass:
                            "text-4xl font-semibold leading-normal text-blueGray-700 mb-2"
                        },
                        _vm._l(_vm.userProfile, function(user, i) {
                          return _c("div", { key: i }, [
                            _vm._v(
                              "\n                      " +
                                _vm._s(user.name) +
                                "\n                    "
                            )
                          ])
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
                        },
                        [
                          _c("i", {
                            staticClass:
                              "fas fa-user-cog mr-2 text-lg text-blueGray-400"
                          }),
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.userRole) +
                              "\n            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.userProfile, function(user, i) {
                        return _c(
                          "div",
                          {
                            key: "A" + i,
                            staticClass: " px-4 mb-2 text-blueGray-600 mt-10"
                          },
                          [
                            _c("i", {
                              staticClass:
                                "fas fa-id-card mr-2 text-lg text-blueGray-400"
                            }),
                            _vm._v("  " + _vm._s(user.id) + "\n            ")
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.userProfile, function(user, i) {
                        return _c(
                          "div",
                          {
                            key: "B" + i,
                            staticClass: "  mb-2 text-blueGray-600"
                          },
                          [
                            _c("i", {
                              staticClass:
                                "fas fa-venus-mars mr-2 text-lg text-blueGray-400"
                            }),
                            _vm._v(
                              "  " + _vm._s(user.gender) + "\n            "
                            )
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.userProfile, function(user, i) {
                        return _c(
                          "div",
                          {
                            key: "C" + i,
                            staticClass: " mb-2 text-blueGray-600"
                          },
                          [
                            _c("i", {
                              staticClass:
                                "fas fa-phone-alt mr-2 text-lg text-blueGray-400"
                            }),
                            _vm._v(_vm._s(user.phone_no) + "\n            ")
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.userProfile, function(user, i) {
                        return _c(
                          "div",
                          {
                            key: "D" + i,
                            staticClass: "mb-2 text-blueGray-600"
                          },
                          [
                            _c("i", {
                              staticClass:
                                "fas fa-envelope mr-2 text-lg text-blueGray-400"
                            }),
                            _vm._v(_vm._s(user.email) + "\n            ")
                          ]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.userProfile, function(user, i) {
                    return _c(
                      "div",
                      {
                        key: "E" + i,
                        staticClass:
                          "mt-3 py-5 border-t border-blueGray-200 text-center"
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "flex flex-wrap justify-center" },
                          [
                            _c(
                              "div",
                              { staticClass: "w-full lg:w-9/12 px-4" },
                              [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "mb-4 text-lg leading-relaxed text-blueGray-700"
                                  },
                                  [
                                    _vm._v(
                                      "\n                     " +
                                        _vm._s(user.des) +
                                        "\n                "
                                    )
                                  ]
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  })
                ],
                2
              )
            ]
          )
        ]),
        _vm._v(" "),
        _vm._m(2)
      ]),
      _vm._v(" "),
      _vm.toggleModal
        ? _c("EditModal", {
            attrs: {
              toggle: _vm.toggleModal,
              form: _vm.form,
              user_id: _vm.user_id,
              role: _vm.role
            },
            on: { refreshData: _vm.getProfile, closeModal: _vm.closeEditModal }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "absolute top-0 w-full h-full bg-center bg-cover",
        staticStyle: {
          "background-image":
            "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
        }
      },
      [
        _c("span", {
          staticClass: "w-full h-full absolute opacity-50 bg-black",
          attrs: { id: "blackOverlay" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "w-full lg:w-4/12 px-4 lg:order-1 hidden" },
      [
        _c("div", { staticClass: "flex justify-center py-4 lg:pt-4 pt-8" }, [
          _c("div", { staticClass: "mr-4 p-3 text-center" }, [
            _c(
              "span",
              {
                staticClass:
                  "text-xl font-bold block uppercase tracking-wide text-blueGray-600"
              },
              [_vm._v("22")]
            ),
            _c("span", { staticClass: "text-sm text-blueGray-400" }, [
              _vm._v("Friends")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mr-4 p-3 text-center" }, [
            _c(
              "span",
              {
                staticClass:
                  "text-xl font-bold block uppercase tracking-wide text-blueGray-600"
              },
              [_vm._v("1")]
            ),
            _c("span", { staticClass: "text-sm text-blueGray-400" }, [
              _vm._v("Rental House")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "lg:mr-4 p-3 text-center" }, [
            _c(
              "span",
              {
                staticClass:
                  "text-xl font-bold block uppercase tracking-wide text-blueGray-600"
              },
              [_vm._v("4")]
            ),
            _c("span", { staticClass: "text-sm text-blueGray-400" }, [
              _vm._v("Student Year")
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "footer",
      { staticClass: "relative bg-blueGray-200 pt-8 pb-6 mt-8" },
      [
        _c("div", { staticClass: "container mx-auto px-4" }, [
          _c(
            "div",
            {
              staticClass:
                "flex flex-wrap items-center md:justify-between justify-center"
            },
            [
              _c(
                "div",
                { staticClass: "w-full md:w-6/12 px-4 mx-auto text-center" },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "text-sm text-blueGray-500 font-semibold py-1"
                    },
                    [
                      _vm._v(
                        "\n          If I were you, I would adore me.\n        "
                      )
                    ]
                  )
                ]
              )
            ]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Profile_View.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Profile_View.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_View_vue_vue_type_template_id_0dbec2ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile_View.vue?vue&type=template&id=0dbec2ab& */ "./resources/js/components/ManageRegistrationUsers/Profile_View.vue?vue&type=template&id=0dbec2ab&");
/* harmony import */ var _Profile_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile_View.vue?vue&type=script&lang=js& */ "./resources/js/components/ManageRegistrationUsers/Profile_View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_View_vue_vue_type_template_id_0dbec2ab___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_View_vue_vue_type_template_id_0dbec2ab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManageRegistrationUsers/Profile_View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Profile_View.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Profile_View.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile_View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Profile_View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Profile_View.vue?vue&type=template&id=0dbec2ab&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Profile_View.vue?vue&type=template&id=0dbec2ab& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_View_vue_vue_type_template_id_0dbec2ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile_View.vue?vue&type=template&id=0dbec2ab& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Profile_View.vue?vue&type=template&id=0dbec2ab&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_View_vue_vue_type_template_id_0dbec2ab___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_View_vue_vue_type_template_id_0dbec2ab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);