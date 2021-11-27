(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Manage_Landlord"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Manage_Landlord.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRegistrationUsers/Manage_Landlord.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_Student_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal_Student.vue */ "./resources/js/components/ManageRegistrationUsers/Modal_Student.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ReadModal: _Modal_Student_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      landlords: [],
      page: 1,
      lastPage: '',
      filterGender: '',
      filterName: '',
      toggleModal: false,
      toggleModalCreate: false,
      toggleModalEdit: false,
      profile: {
        id: '',
        name: '',
        email: '',
        phone: '',
        gender: '',
        pic: ''
      }
    };
  },
  computed: {
    filterUser: function filterUser() {
      var _this = this;

      return this.landlords.filter(function (user) {
        //return user.gender.match(this.filterGender);
        if (_this.filterGender == "" && _this.filterName == "") {
          return user;
        } else if (user.landlord_gender == _this.filterGender && user.landlord_name.match(_this.filterName)) {
          return user;
        } else if (user.landlord_gender == _this.filterGender && _this.filterName == "") {
          return user;
        } else if (_this.filterGender == "" && user.landlord_name.toLowerCase().match(_this.filterName.toLowerCase())) return user.landlord_name.toLowerCase().match(_this.filterName.toLowerCase());
      });
    }
  },
  mounted: function mounted() {
    this.getLandlord();
    this.getMeta();
  },
  methods: {
    getLandlord: function getLandlord() {
      var _this2 = this;

      axios.get('/api/get_landlord?page=' + this.page).then(function (response) {
        _this2.landlords = response.data.data;
        console.warn(_this2.landlords.data);
      });
    },
    getMeta: function getMeta() {
      var _this3 = this;

      axios.get('/api/get_landlord').then(function (response) {
        _this3.lastPage = response.data.meta.last_page;
        console.warn(response.data.meta.last_page);
      });
    },
    firstPg: function firstPg() {
      this.page = 1;
      this.getLandlord();
    },
    currentPg: function currentPg() {
      this.page = this.page;
      this.getLandlord();
    },
    lastPg: function lastPg() {
      this.page = this.lastPage;
      this.getLandlord();
    },
    nextPg: function nextPg(pg) {
      if (pg >= this.lastPage) this.page = this.lastPage;else this.page = this.page + 1;
      this.getLandlord();
    },
    previousPg: function previousPg(pg) {
      if (pg <= 1) {
        this.page = 1;
      } else this.page = this.page - 1;

      this.getLandlord();
    },
    readUser: function readUser(user) {
      this.profile.id = user.landlord_id;
      this.profile.name = user.landlord_name;
      this.profile.email = user.landlord_email;
      this.profile.phone = user.landlord_phone_no;
      this.profile.gender = user.landlord_gender;
      this.profile.pic = user.landlord_pic;
    },
    deleteUser: function deleteUser(id, name) {
      var _this4 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "Delete Landlord: " + name,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete this landlord!'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios["delete"]('/api/delete_landlord/' + id).then(function (response) {
            _this4.getLandlord();

            console.log(response);
            Swal.fire('Deleted!', 'Landlord has been deleted.', 'success');
          })["catch"](function (errors) {
            console.log(errors);
          });
        }
      });
    },
    closeReadModal: function closeReadModal() {
      this.toggleModal = !this.toggleModal;
    }
  }
});

/***/ }),

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Manage_Landlord.vue?vue&type=template&id=509dfc8c&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRegistrationUsers/Manage_Landlord.vue?vue&type=template&id=509dfc8c& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "flex justify-center item-center pl-8 pb-10" },
    [
      _c(
        "div",
        {
          staticClass:
            "mx-auto container bg-white-500 dark:bg-gray-800 dark:bg-gray-800 shadow rounded "
        },
        [
          _c(
            "div",
            {
              staticClass:
                "flex flex-col lg:flex-row p-2 lg:p-8 justify-between items-start lg:items-stretch w-full shadow-inner",
              staticStyle: { "background-image": "url(/images/BlueCoral.jpg)" }
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "w-full lg:w-1/5 flex flex-col lg:flex-row items-start lg:items-center "
                },
                [
                  _c("div", { staticClass: "flex items-center" }, [
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-medium text-dark-600 dark:text-gray-400"
                      },
                      [
                        _vm._v(
                          "  Showing Page " +
                            _vm._s(_vm.page) +
                            " of " +
                            _vm._s(_vm.lastPage)
                        )
                      ]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "w-full lg:w-1/5 flex flex-col lg:flex-row items-start lg:items-center justify-end"
                },
                [
                  _c(
                    "div",
                    { staticClass: "flex flex-col items-center my-12" },
                    [
                      _c("div", { staticClass: "flex text-gray-700" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "h-8 w-8 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointe  shadow-lg hover:bg-blue-200"
                          },
                          [
                            _c(
                              "button",
                              {
                                on: {
                                  click: function($event) {
                                    return _vm.previousPg(_vm.page)
                                  }
                                }
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass:
                                      "feather feather-chevron-left w-4 h-4",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "100%",
                                      height: "100%",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                      "stroke-width": "2",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round"
                                    }
                                  },
                                  [
                                    _c("polyline", {
                                      attrs: { points: "15 18 9 12 15 6" }
                                    })
                                  ]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "flex h-8  font-medium rounded-full bg-gray-200  shadow-lg "
                          },
                          [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full hover:bg-blue-200 ",
                                on: {
                                  click: function($event) {
                                    return _vm.firstPg()
                                  }
                                }
                              },
                              [_vm._v("1")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  disabled "
                              },
                              [_vm._v("...")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full hover:bg-blue-700 bg-blue-600 text-white ",
                                on: {
                                  click: function($event) {
                                    return _vm.currentPg()
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.page))]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full   disabled"
                              },
                              [_vm._v("...")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full hover:bg-blue-200",
                                on: {
                                  click: function($event) {
                                    return _vm.lastPg()
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.lastPage))]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "w-8 h-8 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-blue-600 text-white hover:bg-green-200"
                              },
                              [_vm._v(_vm._s(_vm.page))]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "h-8 w-8 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer  shadow-lg hover:bg-blue-200"
                          },
                          [
                            _c(
                              "button",
                              {
                                on: {
                                  click: function($event) {
                                    return _vm.nextPg(_vm.page)
                                  }
                                }
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass:
                                      "feather feather-chevron-right w-4 h-4",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "100%",
                                      height: "100%",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                      "stroke-width": "2",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round"
                                    }
                                  },
                                  [
                                    _c("polyline", {
                                      attrs: { points: "9 18 15 12 9 6" }
                                    })
                                  ]
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "w-full lg:w-1/5 flex flex-col lg:flex-row items-start lg:items-center justify-center "
                },
                [
                  _c("div", { staticClass: "relative w-32 z-10" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.filterGender,
                            expression: "filterGender"
                          }
                        ],
                        staticClass:
                          "focus:outline-none border-transparent cursor-pointer focus:border-gray-800 hover:bg-blue-200 focus:shadow-outline-gray text-base form-select block w-full py-2 px-2 xl:px-3 rounded font-medium dark:text-gray-400 appearance-none bg-transparent",
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.filterGender = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Gender")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "male" } }, [
                          _vm._v("Male")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "female" } }, [
                          _vm._v("Female")
                        ])
                      ]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "w-full lg:w-1/5 flex flex-col lg:flex-row  items-start lg:items-stretch lg:mt-12"
                },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "bg-gray-200   hover:bg-blue-200 rounded\n                    text-indigo-700 px-5 h-8 shadow-lg ",
                      on: {
                        click: function($event) {
                          _vm.toggleModalCreate = !_vm.toggleModalCreate
                        }
                      }
                    },
                    [_vm._v("Create User")]
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "flex justify-center item-center mb-10" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.filterName,
                  expression: "filterName"
                }
              ],
              staticClass: "block w-5/12 py-2 px-2 text-lg rounded-lg",
              attrs: { type: "text", name: "name", placeholder: "Search Name" },
              domProps: { value: _vm.filterName },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.filterName = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-full overflow-x-scroll xl:overflow-x-hidden" },
            [
              _c(
                "table",
                {
                  staticClass: "min-w-full shadow-lg border-b-2 ",
                  staticStyle: {
                    "background-image": "url(/images/BlueCoral.jpg)"
                  }
                },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    { staticClass: "text-dark-600 text-sm font-light" },
                    [
                      _vm._l(_vm.filterUser, function(landlord, index) {
                        return _c(
                          "tr",
                          {
                            key: landlord.landlord_id,
                            staticClass:
                              "border-b border-gray-200 hover:bg-green-200"
                          },
                          [
                            _c(
                              "td",
                              {
                                staticClass:
                                  "py-3 px-3 text-left whitespace-nowrap"
                              },
                              [_vm._v("  " + _vm._s(index + 1))]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass:
                                  "py-3 px-6 text-left whitespace-nowrap"
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "flex items-center" },
                                  [
                                    _c("span", { staticClass: "font-medium" }, [
                                      _vm._v(_vm._s(landlord.landlord_id))
                                    ])
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("td", { staticClass: "py-3 px-6 text-left" }, [
                              _c("div", { staticClass: "flex items-center" }, [
                                _c("div", { staticClass: "mr-2" }, [
                                  _c("img", {
                                    staticClass:
                                      "w-6 h-6 rounded-full hover:scale-150 hover:z-10 transform ease-in-out transition duration-500",
                                    attrs: {
                                      src:
                                        "/images/Profile/" +
                                        landlord.landlord_pic
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("span", [
                                  _vm._v(_vm._s(landlord.landlord_name))
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "py-3 px-6 text-left" }, [
                              _c("div", { staticClass: "flex items-center" }, [
                                _c("span", [
                                  _vm._v(_vm._s(landlord.landlord_email))
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "py-3 px-6 text-left" }, [
                              _c("div", { staticClass: "flex items-center" }, [
                                _c("span", [
                                  _vm._v(_vm._s(landlord.landlord_phone_no))
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "py-3 px-6 text-left" }, [
                              landlord.landlord_gender === "male"
                                ? _c("span", [
                                    _vm._v(
                                      "🧑 " + _vm._s(landlord.landlord_gender)
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              landlord.landlord_gender === "female"
                                ? _c("span", [
                                    _vm._v(
                                      "👩‍🦰  " + _vm._s(landlord.landlord_gender)
                                    )
                                  ])
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "py-3 px-6 text-center" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "flex item-center justify-center"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                                    },
                                    [
                                      _c(
                                        "button",
                                        {
                                          on: {
                                            click: function($event) {
                                              _vm.readUser(landlord)
                                              _vm.toggleModal = !_vm.toggleModal
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "svg",
                                            {
                                              attrs: {
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor"
                                              }
                                            },
                                            [
                                              _c("path", {
                                                attrs: {
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                  "stroke-width": "2",
                                                  d:
                                                    "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("path", {
                                                attrs: {
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                  "stroke-width": "2",
                                                  d:
                                                    "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                                    },
                                    [
                                      _c(
                                        "button",
                                        {
                                          on: {
                                            click: function($event) {
                                              return _vm.deleteUser(
                                                landlord.landlord_id,
                                                landlord.landlord_name
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "svg",
                                            {
                                              attrs: {
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor"
                                              }
                                            },
                                            [
                                              _c("path", {
                                                attrs: {
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                  "stroke-width": "2",
                                                  d:
                                                    "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                }
                                              })
                                            ]
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
                      }),
                      _vm._v(" "),
                      _vm.filterUser.length == 0
                        ? _c("tr", [
                            _c("td", { attrs: { colspan: "7" } }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "bg-indigo-100 border-yellow-600 text-black-600  p-4",
                                  attrs: { role: "alert" }
                                },
                                [
                                  _c("center", [
                                    _c(
                                      "p",
                                      { staticClass: "font-bold text-xl" },
                                      [
                                        _vm._v(
                                          "\n                                        No data found!\n                                    "
                                        )
                                      ]
                                    )
                                  ])
                                ],
                                1
                              )
                            ])
                          ])
                        : _vm._e()
                    ],
                    2
                  )
                ]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm.toggleModal
        ? _c("ReadModal", {
            attrs: { form: _vm.profile, toggle: _vm.toggleModal },
            on: { closeModal: _vm.closeReadModal }
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
        staticClass:
          "w-full lg:w-1/5 flex flex-col lg:flex-row items-start lg:items-center"
      },
      [
        _c("div", { staticClass: "flex items-center " }, [
          _c("span", { staticClass: "text-xl font-black" }, [
            _vm._v("MANAGE LANDLORD")
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c(
        "tr",
        {
          staticClass:
            "border-b bg-blue-400 text-gray-900 uppercase text-base leading-normal",
          staticStyle: { "background-image": "url(/images/BlueCoral.jpg)" }
        },
        [
          _c("th", { staticClass: "py-3 px-3 text-left" }, [_vm._v("No.")]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-left" }, [_vm._v("User ID")]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-left" }, [_vm._v("Name")]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-left" }, [_vm._v("Email")]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-left" }, [
            _vm._v("Phone No.")
          ]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-left" }, [_vm._v("Gender")]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-center" }, [
            _vm._v("Actions")
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



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
        { staticClass: "bg-white rounded shadow-lg w-10/12 md:w-1/3" },
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
                "button",
                {
                  staticClass:
                    "bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white mr-1 close-modal",
                  on: { click: _vm.closeModal }
                },
                [_vm._v("Okay")]
              )
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Manage_Landlord.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Manage_Landlord.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Manage_Landlord_vue_vue_type_template_id_509dfc8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manage_Landlord.vue?vue&type=template&id=509dfc8c& */ "./resources/js/components/ManageRegistrationUsers/Manage_Landlord.vue?vue&type=template&id=509dfc8c&");
/* harmony import */ var _Manage_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manage_Landlord.vue?vue&type=script&lang=js& */ "./resources/js/components/ManageRegistrationUsers/Manage_Landlord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Manage_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Manage_Landlord_vue_vue_type_template_id_509dfc8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Manage_Landlord_vue_vue_type_template_id_509dfc8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManageRegistrationUsers/Manage_Landlord.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Manage_Landlord.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Manage_Landlord.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Manage_Landlord.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Manage_Landlord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Manage_Landlord.vue?vue&type=template&id=509dfc8c&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Manage_Landlord.vue?vue&type=template&id=509dfc8c& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_Landlord_vue_vue_type_template_id_509dfc8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Manage_Landlord.vue?vue&type=template&id=509dfc8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Manage_Landlord.vue?vue&type=template&id=509dfc8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_Landlord_vue_vue_type_template_id_509dfc8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_Landlord_vue_vue_type_template_id_509dfc8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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