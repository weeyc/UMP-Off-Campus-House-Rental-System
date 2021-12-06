(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Add_Property"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/Add_Property.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/Add_Property.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageUploader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageUploader.vue */ "./resources/js/components/ManagePropertyList/ImageUploader.vue");
/* harmony import */ var _GoogleMap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoogleMap.vue */ "./resources/js/components/ManagePropertyList/GoogleMap.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ImageUploader: _ImageUploader_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    GoogleMap: _GoogleMap_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    user_id: Number,
    role: Number
  },
  data: function data() {
    return {
      activePhase: 1,
      form: {
        propertyName: '',
        campus: 'Gambang',
        address: '',
        postcode: '',
        images: [],
        imageLabel: [],
        description: '',
        furnishing: [],
        latitude: '',
        logitude: '',
        id: this.user_id
      }
    };
  },
  methods: {
    goToNext: function goToNext(pg) {
      this.activePhase = pg;
    },
    getImages: function getImages(event, event2) {
      this.form.images = event;
      this.form.imageLabel = event2;
    },
    getCoordinates: function getCoordinates(lat, log) {
      this.form.latitude = lat;
      this.form.logitude = log;
    },
    submitProperty: function submitProperty() {
      var _this = this;

      axios.post('/api/create_property', this.form).then(function () {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Property Submitted!',
          showConfirmButton: false,
          timer: 1500
        });
        _this.form.propertyName = '';
        _this.form.campus = 'Gambang';
        _this.form.address = '';
        _this.form.postcode = '';
        _this.form.images = [];
        _this.form.imageLabel = [];
        _this.form.description = '';

        _this.$router.push({
          name: 'property_list'
        });

        console.log(response.data);
      }).then(function (response) {
        console.log(response.data);
      }); // .catch(error =>this.errors.record(error.response.data));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/Add_Property.vue?vue&type=template&id=535837ef&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/Add_Property.vue?vue&type=template&id=535837ef& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "section",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.activePhase == 1,
            expression: "activePhase == 1"
          }
        ],
        staticClass:
          "mt-10 max-w-4xl p-6 mx-auto bg-gray-200 rounded-md shadow-md dark:bg-gray-800",
        attrs: { id: "propertyDetail" }
      },
      [
        _c(
          "h2",
          {
            staticClass:
              " font-bold text-gray-700 capitalize text-center text-xl"
          },
          [_vm._v("Add Property")]
        ),
        _vm._v(" "),
        _c(
          "h2",
          {
            staticClass:
              " font-bold text-gray-700 capitalize text-center text-base "
          },
          [_vm._v("-Property Details-")]
        ),
        _vm._v(" "),
        _c("div", [
          _c(
            "div",
            { staticClass: "grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2" },
            [
              _c("div", [
                _c("label", { staticClass: "text-gray-700" }, [
                  _vm._v("Property Name")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.propertyName,
                      expression: "form.propertyName"
                    }
                  ],
                  staticClass:
                    "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring",
                  attrs: {
                    type: "text",
                    placeholder: "eg. Taman Sri Gambang",
                    name: "name",
                    required: ""
                  },
                  domProps: { value: _vm.form.propertyName },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "propertyName", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", [
                _c("label", { staticClass: "text-gray-700" }, [
                  _vm._v("Campus")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.campus,
                        expression: "form.campus"
                      }
                    ],
                    staticClass:
                      "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md  focus:border-blue-500 focus:outline-none focus:ring",
                    attrs: { name: "campus", required: "" },
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
                        _vm.$set(
                          _vm.form,
                          "campus",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c(
                      "option",
                      {
                        staticClass: "text-gray-700 text-lg",
                        attrs: { value: "Gambang" }
                      },
                      [_vm._v(" Gambang")]
                    ),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        staticClass: "text-gray-700 text-lg",
                        attrs: { value: "Pekan" }
                      },
                      [_vm._v(" Pekan")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c("label", { staticClass: "text-gray-700" }, [
                  _vm._v("Address")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.address,
                      expression: "form.address"
                    }
                  ],
                  staticClass:
                    "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring",
                  attrs: {
                    type: "text",
                    name: "address",
                    placeholder: "eg. Taman Sri Gambang, 26600 Pekan, Pahang",
                    required: ""
                  },
                  domProps: { value: _vm.form.address },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "address", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", [
                _c("label", { staticClass: "text-gray-700" }, [
                  _vm._v("Postcode")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.postcode,
                      expression: "form.postcode"
                    }
                  ],
                  staticClass:
                    "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring",
                  attrs: {
                    type: "text",
                    placeholder: "eg. 22600",
                    required: ""
                  },
                  domProps: { value: _vm.form.postcode },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "postcode", $event.target.value)
                    }
                  }
                })
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "flex justify-end mt-6" }, [
            _c(
              "button",
              {
                staticClass:
                  "px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.goToNext(2)
                  }
                }
              },
              [_vm._v("Next")]
            )
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _vm.activePhase == 2
      ? _c(
          "section",
          {
            staticClass:
              "mt-10 max-w-4xl p-6 mx-auto bg-gray-200 rounded-md shadow-md dark:bg-gray-800",
            attrs: { id: "Uploader" }
          },
          [
            _c(
              "h2",
              {
                staticClass:
                  " font-bold text-gray-700 capitalize text-center text-xl"
              },
              [_vm._v("Add Photos")]
            ),
            _vm._v(" "),
            _c(
              "h2",
              {
                staticClass:
                  " font-bold text-gray-700 capitalize text-center text-base mb-5"
              },
              [_vm._v("-Property Image-")]
            ),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "keep-alive",
                  [
                    _c("ImageUploader", {
                      attrs: { editImage: true },
                      on: { getImage: _vm.getImages }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "flex justify-end mt-6" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "px-6 py-2  mr-5 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.goToNext(1)
                        }
                      }
                    },
                    [_vm._v("Back")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.goToNext(3)
                        }
                      }
                    },
                    [_vm._v("Next")]
                  )
                ])
              ],
              1
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.activePhase == 3
      ? _c(
          "section",
          {
            staticClass:
              "mt-10 max-w-4xl p-6 mx-auto bg-gray-200 rounded-md shadow-md dark:bg-gray-800",
            attrs: { id: "Furnisher" }
          },
          [
            _c(
              "h2",
              {
                staticClass:
                  " font-bold text-gray-700 capitalize text-center text-xl"
              },
              [_vm._v("Furnishing and Description")]
            ),
            _vm._v(" "),
            _c("div", [
              _c(
                "h2",
                {
                  staticClass:
                    " font-bold text-gray-700 capitalize text-center text-base mt-6"
                },
                [_vm._v("-Furnishing-")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "grid grid-cols-3 gap-4 mt-4 sm:grid-cols-2" },
                [
                  _c(
                    "label",
                    { staticClass: "inline-flex items-center cursor-pointer" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.furnishing,
                            expression: "form.furnishing"
                          }
                        ],
                        attrs: { type: "checkbox", value: "Internet" },
                        domProps: {
                          checked: Array.isArray(_vm.form.furnishing)
                            ? _vm._i(_vm.form.furnishing, "Internet") > -1
                            : _vm.form.furnishing
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.form.furnishing,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = "Internet",
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.form,
                                    "furnishing",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.form,
                                    "furnishing",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.form, "furnishing", $$c)
                            }
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "ml-2" }, [_vm._v("Internet")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "label",
                    { staticClass: "inline-flex items-center cursor-pointer" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.furnishing,
                            expression: "form.furnishing"
                          }
                        ],
                        staticClass: "form-checkbox",
                        attrs: { type: "checkbox", value: "Washing Machine" },
                        domProps: {
                          checked: Array.isArray(_vm.form.furnishing)
                            ? _vm._i(_vm.form.furnishing, "Washing Machine") >
                              -1
                            : _vm.form.furnishing
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.form.furnishing,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = "Washing Machine",
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.form,
                                    "furnishing",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.form,
                                    "furnishing",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.form, "furnishing", $$c)
                            }
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "ml-2" }, [
                        _vm._v("Washing Machine")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "label",
                    { staticClass: "inline-flex items-center cursor-pointer" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.furnishing,
                            expression: "form.furnishing"
                          }
                        ],
                        staticClass: "form-checkbox",
                        attrs: { type: "checkbox", value: "Dining Table" },
                        domProps: {
                          checked: Array.isArray(_vm.form.furnishing)
                            ? _vm._i(_vm.form.furnishing, "Dining Table") > -1
                            : _vm.form.furnishing
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.form.furnishing,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = "Dining Table",
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.form,
                                    "furnishing",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.form,
                                    "furnishing",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.form, "furnishing", $$c)
                            }
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "ml-2" }, [
                        _vm._v("Dining Table")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "label",
                    { staticClass: "inline-flex items-center cursor-pointer" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.furnishing,
                            expression: "form.furnishing"
                          }
                        ],
                        staticClass: "form-checkbox",
                        attrs: { type: "checkbox", value: "Refrigerator" },
                        domProps: {
                          checked: Array.isArray(_vm.form.furnishing)
                            ? _vm._i(_vm.form.furnishing, "Refrigerator") > -1
                            : _vm.form.furnishing
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.form.furnishing,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = "Refrigerator",
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.form,
                                    "furnishing",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.form,
                                    "furnishing",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.form, "furnishing", $$c)
                            }
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "ml-2" }, [
                        _vm._v("Refrigerator")
                      ])
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _c(
                "h2",
                {
                  staticClass:
                    " font-bold text-gray-700 capitalize text-center text-base mt-6"
                },
                [_vm._v("-Property Description-")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "w-full mt-4" }, [
                _c(
                  "label",
                  {
                    staticClass:
                      "block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  },
                  [_vm._v("Property Description")]
                ),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.description,
                      expression: "form.description"
                    }
                  ],
                  staticClass:
                    "block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring",
                  domProps: { value: _vm.form.description },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "description", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex justify-end mt-6" }, [
                _c(
                  "button",
                  {
                    staticClass:
                      "px-6 py-2  mr-5 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.goToNext(2)
                      }
                    }
                  },
                  [_vm._v("Back")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.goToNext(4)
                      }
                    }
                  },
                  [_vm._v("Next")]
                )
              ])
            ])
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.activePhase == 4
      ? _c(
          "section",
          {
            staticClass:
              "max-w-4xl p-6 mx-auto bg-gray-200 rounded-md shadow-md dark:bg-gray-800",
            attrs: { id: "gps" }
          },
          [
            _c(
              "h2",
              {
                staticClass:
                  " font-bold text-gray-700 capitalize text-center text-xl"
              },
              [_vm._v("Add Property Location ")]
            ),
            _vm._v(" "),
            _c("div", [
              _c(
                "h2",
                {
                  staticClass:
                    " font-bold text-gray-700 capitalize text-center text-base mt-6"
                },
                [_vm._v("-GPS Coordinate-")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "w-full mt-4" },
                [
                  _c("label", { staticClass: "text-gray-700" }, [
                    _vm._v("Address")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.address,
                        expression: "form.address"
                      }
                    ],
                    staticClass:
                      "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring",
                    attrs: {
                      type: "text",
                      placeholder: "eg. Taman Sri Gambang",
                      name: "name",
                      readonly: ""
                    },
                    domProps: { value: _vm.form.address },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "address", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "mt-5" }, [
                    _vm._v("Please drag the red marker for a accurate location")
                  ]),
                  _vm._v(" "),
                  _c(
                    "keep-alive",
                    [
                      _c("GoogleMap", {
                        attrs: { registered: false },
                        on: { getCoordinate: _vm.getCoordinates }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "flex justify-end mt-6" }, [
                _c(
                  "button",
                  {
                    staticClass:
                      "px-6 py-2  mr-5 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.goToNext(3)
                      }
                    }
                  },
                  [_vm._v("Back")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.submitProperty($event)
                      }
                    }
                  },
                  [_vm._v("Submit Property")]
                )
              ])
            ])
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ManagePropertyList/Add_Property.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/Add_Property.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_Property_vue_vue_type_template_id_535837ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add_Property.vue?vue&type=template&id=535837ef& */ "./resources/js/components/ManagePropertyList/Add_Property.vue?vue&type=template&id=535837ef&");
/* harmony import */ var _Add_Property_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add_Property.vue?vue&type=script&lang=js& */ "./resources/js/components/ManagePropertyList/Add_Property.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_Property_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_Property_vue_vue_type_template_id_535837ef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_Property_vue_vue_type_template_id_535837ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManagePropertyList/Add_Property.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/Add_Property.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/Add_Property.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_Property_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Add_Property.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/Add_Property.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_Property_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/Add_Property.vue?vue&type=template&id=535837ef&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/Add_Property.vue?vue&type=template&id=535837ef& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_Property_vue_vue_type_template_id_535837ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Add_Property.vue?vue&type=template&id=535837ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/Add_Property.vue?vue&type=template&id=535837ef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_Property_vue_vue_type_template_id_535837ef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_Property_vue_vue_type_template_id_535837ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);