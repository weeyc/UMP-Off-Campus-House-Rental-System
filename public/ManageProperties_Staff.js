(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ManageProperties_Staff"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/ManageProperties_Staff.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/ManageProperties_Staff.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdateStatus_Modal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateStatus_Modal.vue */ "./resources/js/components/ManagePropertyList/UpdateStatus_Modal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    StatusModal: _UpdateStatus_Modal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    user_id: Number,
    role: Number
  },
  data: function data() {
    return {
      properties: [],
      page: 1,
      lastPage: '',
      filterStatus: '',
      top_btn_style: 'p-3 rounded bg-pink-100 text-pink-500 hover:bg-pink-500 hover:text-white :active:bg-pink-500 active:text-white active:outline-none transition duration-150 ease-in-out shadow-xl',
      getCampus: 'Gambang',
      toggleModal: false,
      property: {
        id: '',
        status: ''
      }
    };
  },
  computed: {
    Status: function Status() {
      var _this = this;

      return this.properties.filter(function (list) {
        //return user.gender.match(this.filterGender);
        if (_this.filterStatus == "") {
          return list;
        } else if (list.status == _this.filterStatus) {
          return list;
        }
      });
    }
  },
  mounted: function mounted() {
    this.getPropertiesList();
    this.getMeta();
  },
  methods: {
    getPropertiesList: function getPropertiesList() {
      var _this2 = this;

      axios.get('/api/get_properties_list/' + this.getCampus + '?land=1?page=' + this.page).then(function (response) {
        _this2.properties = response.data.data;
        console.warn(_this2.properties.data);
      });
    },
    getMeta: function getMeta() {
      var _this3 = this;

      axios.get('/api/get_properties_list/' + this.getCampus).then(function (response) {
        _this3.lastPage = response.data.meta.last_page;
        console.warn(response.data.meta.last_page);
      });
    },
    campus: function campus(cue) {
      if (cue == 0) {
        this.getCampus = 'Gambang';
        this.getPropertiesList();
      } else {
        this.getCampus = 'Pekan';
        this.getPropertiesList();
      }
    },
    firstPg: function firstPg() {
      this.page = 1;
      this.getPropertiesList();
    },
    currentPg: function currentPg() {
      this.page = this.page;
      this.getPropertiesList();
    },
    lastPg: function lastPg() {
      this.page = this.lastPage;
      this.getPropertiesList();
    },
    nextPg: function nextPg(pg) {
      if (pg >= this.lastPage) this.page = this.lastPage;else this.page = this.page + 1;
      this.getPropertiesList();
    },
    previousPg: function previousPg(pg) {
      if (pg <= 1) {
        this.page = 1;
      } else this.page = this.page - 1;

      this.getPropertiesList();
    },
    updateStatus: function updateStatus(prop) {
      this.property.id = prop.id;
      this.property.status = prop.status;
    },
    deleteUser: function deleteUser(id, name) {
      var _this4 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "Delete Student: " + name,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete this student!'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios["delete"]('/api/delete_property/' + id).then(function (response) {
            _this4.getPropertiesList();

            console.log(response);
            Swal.fire('Deleted!', 'Property has been deleted.', 'success');
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/UpdateStatus_Modal.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/UpdateStatus_Modal.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    form: Object,
    staff_id: Number
  },
  components: {},
  data: function data() {
    return {
      modalBackground: 'bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400'
    };
  },
  methods: {
    updateStatus: function updateStatus() {
      var _this = this;

      axios.post('/api/update_prop_status/' + this.staff_id, this.form).then(function () {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Status update successfully!',
          showConfirmButton: false,
          timer: 1500
        });

        _this.closeModal();

        _this.$emit("refreshData");
      })["catch"](function (error) {
        return _this.errors.record(error.response.data);
      });
    },
    closeModal: function closeModal() {
      this.$emit("closeModal");
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/ManageProperties_Staff.vue?vue&type=template&id=59ffc855&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/ManageProperties_Staff.vue?vue&type=template&id=59ffc855& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
              _c(
                "div",
                {
                  staticClass:
                    " grid-cols-3 gap-5 lg:w-1/5 w-full p-4 lg:p-8  flex flex-col lg:flex-row items-start lg:items-center"
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "px-5",
                      class: [_vm.top_btn_style],
                      attrs: { "exact-active-class": "exact-active" },
                      on: {
                        click: function($event) {
                          return _vm.campus(0)
                        }
                      }
                    },
                    [_vm._v("\n                    Gambang\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "px-5",
                      class: [_vm.top_btn_style],
                      attrs: { "exact-active-class": "exact-active" },
                      on: {
                        click: function($event) {
                          return _vm.campus(1)
                        }
                      }
                    },
                    [_vm._v("\n                    Pekan\n                ")]
                  )
                ]
              ),
              _vm._v(" "),
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
                              "h-8 w-8 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointe  shadow-lg hover:bg-pink-200"
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
                                  "w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full hover:bg-pink-200 ",
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
                                  "w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full hover:bg-pink-700 bg-pink-600 text-white ",
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
                                  "w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full hover:bg-pink-200",
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
                                  "w-8 h-8 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-pink-600 text-white hover:bg-pink-200"
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
                              "h-8 w-8 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer  shadow-lg hover:bg-pink-200"
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
                    "w-full lg:w-1/5 flex flex-col lg:flex-row items-start lg:items-center justify-center"
                },
                [
                  _c("div", { staticClass: "relative w-32" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.filterStatus,
                            expression: "filterStatus"
                          }
                        ],
                        staticClass:
                          "focus:outline-none border-transparent cursor-pointer focus:border-gray-800 hover:bg-pink-200 focus:shadow-outline-gray text-base form-select block w-full py-2 px-2 xl:px-3 rounded font-medium dark:text-gray-400 appearance-none bg-transparent",
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
                            _vm.filterStatus = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Status")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "unverified" } }, [
                          _vm._v("Unverified")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "processing" } }, [
                          _vm._v("Processing")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "verified" } }, [
                          _vm._v("Verified")
                        ])
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
            { staticClass: "w-full overflow-x-scroll xl:overflow-x-hidden" },
            [
              _c("table", { staticClass: "min-w-full shadow-lg border-b-2 " }, [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "tbody",
                  { staticClass: "text-dark-600 text-sm font-light" },
                  [
                    _vm._l(_vm.Status, function(prop, index) {
                      return _c(
                        "tr",
                        {
                          key: prop.id,
                          staticClass:
                            "border-b border-gray-200 hover:bg-pink-200"
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
                              _c("div", { staticClass: "flex items-center" }, [
                                _c("span", { staticClass: "font-medium" }, [
                                  _vm._v(_vm._s(prop.id))
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "py-3 px-6 text-left" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "flex items-center",
                                  attrs: {
                                    to: {
                                      name: "view_property",
                                      params: { property_id: prop.id }
                                    },
                                    target: "_blank"
                                  }
                                },
                                [_c("span", [_vm._v(_vm._s(prop.name))])]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "py-3 px-6 text-left" }, [
                            _c("div", { staticClass: "flex items-center" }, [
                              _c("span", [
                                _vm._v(_vm._s(prop.land.landlord_name))
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "py-3 px-6 text-left" }, [
                            _c("div", { staticClass: "flex items-center" }, [
                              _c("span", [_vm._v(_vm._s(prop.campus))])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "py-3 px-6 text-left" }, [
                            _c("div", { staticClass: "flex items-center" }, [
                              _c("span", [_vm._v(_vm._s(prop.created_at))])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "py-3 px-6 text-left" }, [
                            _c("div", { staticClass: "flex items-center" }, [
                              _c("span", [_vm._v(_vm._s(prop.status))])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "py-3 px-6 text-left" }, [
                            _c("div", { staticClass: "flex items-center" }, [
                              prop.verify_by == null
                                ? _c("span", [_vm._v("Not Assign Yet")])
                                : _c("span", [_vm._v(_vm._s(prop.verify_by))])
                            ])
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
                                            _vm.updateStatus(prop)
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
                                              prop.id,
                                              prop.name
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
                    _vm.filterStatus == null
                      ? _c("tr", [
                          _c("td", { attrs: { colspan: "9" } }, [
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
                                        "\n                                           No data found!\n                                    "
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
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm.toggleModal
        ? _c("StatusModal", {
            attrs: {
              form: _vm.property,
              staff_id: _vm.user_id,
              toggle: _vm.toggleModal
            },
            on: {
              refreshData: _vm.getPropertiesList,
              closeModal: _vm.closeReadModal
            }
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
            _vm._v("MANAGE PROPERTIES")
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
            "border-b bg-pink-400 text-gray-900 uppercase text-base leading-normal",
          staticStyle: { "background-image": "url(/images/BlueCoral.jpg)" }
        },
        [
          _c("th", { staticClass: "py-3 px-3 text-left" }, [_vm._v("No.")]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-left" }, [
            _vm._v("Property ID")
          ]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-left" }, [
            _vm._v("Property")
          ]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-left" }, [
            _vm._v("Landlord Name")
          ]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-left" }, [_vm._v("Campus")]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-left" }, [
            _vm._v("Registered At")
          ]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-left" }, [_vm._v("Status")]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-left" }, [
            _vm._v("Verify By")
          ]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/UpdateStatus_Modal.vue?vue&type=template&id=31b2b185&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/UpdateStatus_Modal.vue?vue&type=template&id=31b2b185& ***!
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
        "modal h-screen w-full  fixed left-0 top-0 flex justify-center z-10 items-center bg-black bg-opacity-50"
    },
    [
      _c(
        "div",
        {
          staticClass:
            "rounded max-h-full overflow-y-auto shadow-lg w-11/12 md:w-1/3",
          class: [_vm.modalBackground]
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
                _vm._v("Update Status")
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
              "h1",
              {
                staticClass:
                  "text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4"
              },
              [_vm._v("Property Details")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "flex items-center" }, [
              _c(
                "label",
                {
                  staticClass:
                    "inline-block w-20 mr-6 text-right font-bold text-gray-600",
                  attrs: { for: "name" }
                },
                [_vm._v("Property Id")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.id,
                    expression: "form.id"
                  }
                ],
                staticClass:
                  "flex-1 mr-5 py-2 border-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none",
                attrs: { type: "text", placeholder: "Name", readonly: "" },
                domProps: { value: _vm.form.id },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "id", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex items-center mb-5" }, [
              _c(
                "label",
                {
                  staticClass:
                    "inline-block w-20 mr-6 text-right font-bold text-gray-600",
                  attrs: { for: "gender" }
                },
                [_vm._v("Status")]
              ),
              _vm._v(" "),
              _c("label", { staticClass: "flex radio p-2 cursor-pointer" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.status,
                      expression: "form.status"
                    }
                  ],
                  staticClass: "my-auto transform scale-125",
                  attrs: { type: "radio", name: "status", value: "verified" },
                  domProps: { checked: _vm._q(_vm.form.status, "verified") },
                  on: {
                    change: function($event) {
                      return _vm.$set(_vm.form, "status", "verified")
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "title px-2" }, [_vm._v("verified")])
              ]),
              _vm._v(" "),
              _c("label", { staticClass: "flex radio p-2 cursor-pointer" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.status,
                      expression: "form.status"
                    }
                  ],
                  staticClass: "my-auto transform scale-125",
                  attrs: { type: "radio", name: "status", value: "processing" },
                  domProps: { checked: _vm._q(_vm.form.status, "processing") },
                  on: {
                    change: function($event) {
                      return _vm.$set(_vm.form, "status", "processing")
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "title px-2" }, [_vm._v("processing")])
              ]),
              _vm._v(" "),
              _c("label", { staticClass: "flex radio p-2 cursor-pointer" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.status,
                      expression: "form.status"
                    }
                  ],
                  staticClass: "my-auto transform scale-125",
                  attrs: { type: "radio", name: "status", value: "unverified" },
                  domProps: { checked: _vm._q(_vm.form.status, "unverified") },
                  on: {
                    change: function($event) {
                      return _vm.$set(_vm.form, "status", "unverified")
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "title px-2" }, [_vm._v("unverified")])
              ])
            ])
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
                    "bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal",
                  on: { click: _vm.closeModal }
                },
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white",
                  attrs: { type: "submit" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.updateStatus($event)
                    }
                  }
                },
                [_vm._v("Update")]
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

/***/ "./resources/js/components/ManagePropertyList/ManageProperties_Staff.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/ManageProperties_Staff.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ManageProperties_Staff_vue_vue_type_template_id_59ffc855___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManageProperties_Staff.vue?vue&type=template&id=59ffc855& */ "./resources/js/components/ManagePropertyList/ManageProperties_Staff.vue?vue&type=template&id=59ffc855&");
/* harmony import */ var _ManageProperties_Staff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManageProperties_Staff.vue?vue&type=script&lang=js& */ "./resources/js/components/ManagePropertyList/ManageProperties_Staff.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ManageProperties_Staff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ManageProperties_Staff_vue_vue_type_template_id_59ffc855___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ManageProperties_Staff_vue_vue_type_template_id_59ffc855___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManagePropertyList/ManageProperties_Staff.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/ManageProperties_Staff.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/ManageProperties_Staff.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageProperties_Staff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageProperties_Staff.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/ManageProperties_Staff.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageProperties_Staff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/ManageProperties_Staff.vue?vue&type=template&id=59ffc855&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/ManageProperties_Staff.vue?vue&type=template&id=59ffc855& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageProperties_Staff_vue_vue_type_template_id_59ffc855___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageProperties_Staff.vue?vue&type=template&id=59ffc855& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/ManageProperties_Staff.vue?vue&type=template&id=59ffc855&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageProperties_Staff_vue_vue_type_template_id_59ffc855___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageProperties_Staff_vue_vue_type_template_id_59ffc855___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ManagePropertyList/UpdateStatus_Modal.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/UpdateStatus_Modal.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdateStatus_Modal_vue_vue_type_template_id_31b2b185___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateStatus_Modal.vue?vue&type=template&id=31b2b185& */ "./resources/js/components/ManagePropertyList/UpdateStatus_Modal.vue?vue&type=template&id=31b2b185&");
/* harmony import */ var _UpdateStatus_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateStatus_Modal.vue?vue&type=script&lang=js& */ "./resources/js/components/ManagePropertyList/UpdateStatus_Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdateStatus_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateStatus_Modal_vue_vue_type_template_id_31b2b185___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpdateStatus_Modal_vue_vue_type_template_id_31b2b185___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManagePropertyList/UpdateStatus_Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/UpdateStatus_Modal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/UpdateStatus_Modal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateStatus_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateStatus_Modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/UpdateStatus_Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateStatus_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/UpdateStatus_Modal.vue?vue&type=template&id=31b2b185&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/UpdateStatus_Modal.vue?vue&type=template&id=31b2b185& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateStatus_Modal_vue_vue_type_template_id_31b2b185___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateStatus_Modal.vue?vue&type=template&id=31b2b185& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/UpdateStatus_Modal.vue?vue&type=template&id=31b2b185&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateStatus_Modal_vue_vue_type_template_id_31b2b185___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateStatus_Modal_vue_vue_type_template_id_31b2b185___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);