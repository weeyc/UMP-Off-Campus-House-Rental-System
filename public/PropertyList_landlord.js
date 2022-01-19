(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PropertyList_landlord"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/AddProperty_Modal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/AddProperty_Modal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        toilet_num: '',
        gender_preferences: '',
        furnishing: [],
        latitude: '',
        logitude: '',
        id: this.user_id
      },
      modalBackground: 'bg-gradient-to-br from-sky-400 to-cyan-300'
    };
  },
  methods: {
    goToNext: function goToNext(pg) {
      if (pg == 1) {
        this.activePhase = pg;
      } else if (pg == 2) {
        if (this.form.propertyName == '' || this.form.address == '' || this.form.postcode == '' || this.form.gender_preferences == '' || this.form.campus == '' || this.form.toilet_num == '') {
          this.$toaster.error('Please fill all  the required fields');
        } else {
          this.activePhase = pg;
        }
      } else if (pg == 3) {
        if (this.form.images.length <= 0 || this.form.imageLabel.length <= 0) {
          this.$toaster.error('Please upload some picture and label it');
        } else {
          this.activePhase = pg;
        }
      } else if (pg == 4) {
        this.activePhase = pg;
      }
    },
    getImages: function getImages(event, event2) {
      this.form.images = event;
      this.form.imageLabel = event2;
    },
    getCoordinates: function getCoordinates(lat, log) {
      this.form.latitude = lat;
      this.form.logitude = log;
    },
    closeModal: function closeModal() {
      this.$emit("closeModal");
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

        _this.closeModal();

        _this.$emit("refreshData");

        console.log(response.data);
      }).then(function (response) {
        console.log(response.data);
      }); // .catch(error =>this.errors.record(error.response.data));
    }
  },
  mounted: function mounted() {
    document.querySelector(".number").addEventListener("keypress", function (evt) {
      if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/PropertyList_landlord.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/PropertyList_landlord.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddProperty_Modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddProperty_Modal.vue */ "./resources/js/components/ManagePropertyList/AddProperty_Modal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AddPropertyModal: _AddProperty_Modal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    user_id: Number,
    role: Number
  },
  data: function data() {
    return {
      moment: moment__WEBPACK_IMPORTED_MODULE_0___default.a,
      isReady: false,
      properties: [],
      btn: 'hidden',
      toggleAddModal: false
    };
  },
  methods: {
    getProperty: function getProperty() {
      var _this = this;

      axios.get('/api/get_properties/' + this.user_id + '?imej=1').then(function (response) {
        _this.properties = response.data.data;
        _this.isReady = true;
        console.warn(_this.properties.data);
      });
    },
    closeAddModal: function closeAddModal() {
      this.toggleAddModal = !this.toggleAddModal;
    }
  },
  mounted: function mounted() {
    this.getProperty();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/AddProperty_Modal.vue?vue&type=template&id=f27a2a90&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/AddProperty_Modal.vue?vue&type=template&id=f27a2a90& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass:
        "modal h-screen w-full  fixed left-0 top-0 flex justify-center z-10 items-center bg-black bg-opacity-50",
    },
    [
      _c(
        "div",
        {
          staticClass:
            "rounded max-h-full overflow-y-auto shadow-lg  p-6 w-2/3 min-h-2/3",
          class: [_vm.modalBackground],
        },
        [
          _c(
            "div",
            { staticClass: "border-b px-4 flex justify-between items-center" },
            [
              _c("h3", { staticClass: "font-black text-2xl" }, [
                _vm._v("Add Property"),
              ]),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "text-black ", on: { click: _vm.closeModal } },
                [_vm._v("✗")]
              ),
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "p-3 min-w-1/2" }, [
            _c(
              "section",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.activePhase == 1,
                    expression: "activePhase == 1",
                  },
                ],
                staticClass:
                  "w-full p-6 mx-auto bg-transparent rounded-md shadow-md dark:bg-gray-800",
                attrs: { id: "propertyDetail" },
              },
              [
                _c(
                  "h2",
                  {
                    staticClass:
                      " font-bold text-gray-700 capitalize text-center text-xl",
                  },
                  [_vm._v("Property Application")]
                ),
                _vm._v(" "),
                _c(
                  "h2",
                  {
                    staticClass:
                      " font-bold text-gray-700 capitalize text-center text-base ",
                  },
                  [_vm._v("-Property Details-")]
                ),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "div",
                    {
                      staticClass: "grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2",
                    },
                    [
                      _c("div", [
                        _c("label", { staticClass: "text-gray-700" }, [
                          _vm._v("Property Name"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.propertyName,
                              expression: "form.propertyName",
                            },
                          ],
                          staticClass:
                            "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring",
                          attrs: {
                            type: "text",
                            placeholder: "eg. Taman Sri Gambang",
                            name: "name",
                            required: "",
                          },
                          domProps: { value: _vm.form.propertyName },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "propertyName",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("label", { staticClass: "text-gray-700" }, [
                          _vm._v("Campus"),
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
                                expression: "form.campus",
                              },
                            ],
                            staticClass:
                              "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md  focus:border-blue-500 focus:outline-none focus:ring",
                            attrs: { name: "campus", required: "" },
                            on: {
                              change: function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
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
                              },
                            },
                          },
                          [
                            _c(
                              "option",
                              {
                                staticClass: "text-gray-700 text-lg",
                                attrs: { value: "Gambang" },
                              },
                              [_vm._v(" Gambang")]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              {
                                staticClass: "text-gray-700 text-lg",
                                attrs: { value: "Pekan" },
                              },
                              [_vm._v(" Pekan")]
                            ),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("label", { staticClass: "text-gray-700" }, [
                          _vm._v("Address"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.address,
                              expression: "form.address",
                            },
                          ],
                          staticClass:
                            "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring",
                          attrs: {
                            type: "text",
                            name: "address",
                            placeholder:
                              "eg. Taman Sri Gambang, 26600 Pekan, Pahang",
                            required: "",
                          },
                          domProps: { value: _vm.form.address },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "address", $event.target.value)
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("label", { staticClass: "text-gray-700" }, [
                          _vm._v("Postcode"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.postcode,
                              expression: "form.postcode",
                            },
                          ],
                          staticClass:
                            "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring",
                          attrs: {
                            type: "text",
                            placeholder: "eg. 22600",
                            required: "",
                          },
                          domProps: { value: _vm.form.postcode },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "postcode",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("label", { staticClass: "text-gray-700" }, [
                          _vm._v("No. of toilet"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.toilet_num,
                              expression: "form.toilet_num",
                            },
                          ],
                          staticClass:
                            "number block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring",
                          attrs: {
                            type: "number",
                            min: "1",
                            max: "5",
                            placeholder: "eg. 2",
                            required: "",
                          },
                          domProps: { value: _vm.form.toilet_num },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "toilet_num",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("label", { staticClass: "text-gray-700" }, [
                          _vm._v("Gender Preferences"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.gender_preferences,
                                expression: "form.gender_preferences",
                              },
                            ],
                            staticClass:
                              "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md  focus:border-blue-500 focus:outline-none focus:ring",
                            attrs: { name: "gender", required: "" },
                            on: {
                              change: function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.form,
                                  "gender_preferences",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                            },
                          },
                          [
                            _c(
                              "option",
                              {
                                staticClass: "text-gray-700 text-lg",
                                attrs: { value: "Any" },
                              },
                              [_vm._v("Any")]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              {
                                staticClass: "text-gray-700 text-lg",
                                attrs: { value: "Male" },
                              },
                              [_vm._v("Male")]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              {
                                staticClass: "text-gray-700 text-lg",
                                attrs: { value: "Female" },
                              },
                              [_vm._v("Female")]
                            ),
                          ]
                        ),
                      ]),
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
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.goToNext(2)
                          },
                        },
                      },
                      [_vm._v("Next")]
                    ),
                  ]),
                ]),
              ]
            ),
            _vm._v(" "),
            _vm.activePhase == 2
              ? _c(
                  "section",
                  {
                    staticClass:
                      "w-full max-w-4xl p-6 mx-auto bg-transparent rounded-md shadow-md dark:bg-gray-800",
                    attrs: { id: "Uploader" },
                  },
                  [
                    _c(
                      "h2",
                      {
                        staticClass:
                          " font-bold text-gray-700 capitalize text-center text-xl",
                      },
                      [_vm._v("Add Photos")]
                    ),
                    _vm._v(" "),
                    _c(
                      "h2",
                      {
                        staticClass:
                          " font-bold text-gray-700 capitalize text-center text-base mb-5",
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
                              attrs: { editImage: true, hideLabel: false },
                              on: { getImage: _vm.getImages },
                            }),
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
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.goToNext(1)
                                },
                              },
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
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.goToNext(3)
                                },
                              },
                            },
                            [_vm._v("Next")]
                          ),
                        ]),
                      ],
                      1
                    ),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.activePhase == 3
              ? _c(
                  "section",
                  {
                    staticClass:
                      "w-full p-6 mx-auto bg-transparent rounded-md shadow-md dark:bg-gray-800",
                    attrs: { id: "Furnisher" },
                  },
                  [
                    _c(
                      "h2",
                      {
                        staticClass:
                          " font-bold text-gray-700 capitalize text-center text-xl",
                      },
                      [_vm._v("Furnishing and Description")]
                    ),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "h2",
                        {
                          staticClass:
                            " font-bold text-gray-700 capitalize text-center text-base mt-6",
                        },
                        [_vm._v("-Furnishing-")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "grid grid-cols-3 gap-4 mt-4 sm:grid-cols-2",
                        },
                        [
                          _c(
                            "label",
                            {
                              staticClass:
                                "inline-flex items-center cursor-pointer",
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.furnishing,
                                    expression: "form.furnishing",
                                  },
                                ],
                                attrs: { type: "checkbox", value: "Internet" },
                                domProps: {
                                  checked: Array.isArray(_vm.form.furnishing)
                                    ? _vm._i(_vm.form.furnishing, "Internet") >
                                      -1
                                    : _vm.form.furnishing,
                                },
                                on: {
                                  change: function ($event) {
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
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(_vm.form, "furnishing", $$c)
                                    }
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "ml-2" }, [
                                _vm._v("Internet"),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass:
                                "inline-flex items-center cursor-pointer",
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.furnishing,
                                    expression: "form.furnishing",
                                  },
                                ],
                                staticClass: "form-checkbox",
                                attrs: {
                                  type: "checkbox",
                                  value: "Washing Machine",
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.form.furnishing)
                                    ? _vm._i(
                                        _vm.form.furnishing,
                                        "Washing Machine"
                                      ) > -1
                                    : _vm.form.furnishing,
                                },
                                on: {
                                  change: function ($event) {
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
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(_vm.form, "furnishing", $$c)
                                    }
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "ml-2" }, [
                                _vm._v("Washing Machine"),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass:
                                "inline-flex items-center cursor-pointer",
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.furnishing,
                                    expression: "form.furnishing",
                                  },
                                ],
                                staticClass: "form-checkbox",
                                attrs: {
                                  type: "checkbox",
                                  value: "Dining Table",
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.form.furnishing)
                                    ? _vm._i(
                                        _vm.form.furnishing,
                                        "Dining Table"
                                      ) > -1
                                    : _vm.form.furnishing,
                                },
                                on: {
                                  change: function ($event) {
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
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(_vm.form, "furnishing", $$c)
                                    }
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "ml-2" }, [
                                _vm._v("Dining Table"),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass:
                                "inline-flex items-center cursor-pointer",
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.furnishing,
                                    expression: "form.furnishing",
                                  },
                                ],
                                staticClass: "form-checkbox",
                                attrs: {
                                  type: "checkbox",
                                  value: "Water Heater",
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.form.furnishing)
                                    ? _vm._i(
                                        _vm.form.furnishing,
                                        "Water Heater"
                                      ) > -1
                                    : _vm.form.furnishing,
                                },
                                on: {
                                  change: function ($event) {
                                    var $$a = _vm.form.furnishing,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = "Water Heater",
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
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(_vm.form, "furnishing", $$c)
                                    }
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "ml-2" }, [
                                _vm._v("Water Heater"),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass:
                                "inline-flex items-center cursor-pointer",
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.furnishing,
                                    expression: "form.furnishing",
                                  },
                                ],
                                staticClass: "form-checkbox",
                                attrs: {
                                  type: "checkbox",
                                  value: "Refrigerator",
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.form.furnishing)
                                    ? _vm._i(
                                        _vm.form.furnishing,
                                        "Refrigerator"
                                      ) > -1
                                    : _vm.form.furnishing,
                                },
                                on: {
                                  change: function ($event) {
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
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(_vm.form, "furnishing", $$c)
                                    }
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "ml-2" }, [
                                _vm._v("Refrigerator"),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass:
                                "inline-flex items-center cursor-pointer",
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.furnishing,
                                    expression: "form.furnishing",
                                  },
                                ],
                                staticClass: "form-checkbox",
                                attrs: { type: "checkbox", value: "Sofa" },
                                domProps: {
                                  checked: Array.isArray(_vm.form.furnishing)
                                    ? _vm._i(_vm.form.furnishing, "Sofa") > -1
                                    : _vm.form.furnishing,
                                },
                                on: {
                                  change: function ($event) {
                                    var $$a = _vm.form.furnishing,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = "Sofa",
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
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(_vm.form, "furnishing", $$c)
                                    }
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "ml-2" }, [
                                _vm._v("Sofa"),
                              ]),
                            ]
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "h2",
                        {
                          staticClass:
                            " font-bold text-gray-700 capitalize text-center text-base mt-6",
                        },
                        [_vm._v("-Property Description-")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-full mt-4" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200",
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
                              expression: "form.description",
                            },
                          ],
                          staticClass:
                            "block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring",
                          domProps: { value: _vm.form.description },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "description",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex justify-end mt-6" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "px-6 py-2  mr-5 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.goToNext(2)
                              },
                            },
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
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.goToNext(4)
                              },
                            },
                          },
                          [_vm._v("Next")]
                        ),
                      ]),
                    ]),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.activePhase == 4
              ? _c(
                  "section",
                  {
                    staticClass:
                      "w-full p-6 mx-auto bg-transparent rounded-md shadow-md dark:bg-gray-800",
                    attrs: { id: "gps" },
                  },
                  [
                    _c(
                      "h2",
                      {
                        staticClass:
                          " font-bold text-gray-700 capitalize text-center text-xl",
                      },
                      [_vm._v("Add Property Location ")]
                    ),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "h2",
                        {
                          staticClass:
                            " font-bold text-gray-700 capitalize text-center text-base mt-6",
                        },
                        [_vm._v("-GPS Coordinate-")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "w-full mt-4" },
                        [
                          _c("label", { staticClass: "text-gray-700" }, [
                            _vm._v("Address"),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.address,
                                expression: "form.address",
                              },
                            ],
                            staticClass:
                              "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring",
                            attrs: {
                              type: "text",
                              placeholder: "eg. Taman Sri Gambang",
                              name: "name",
                              readonly: "",
                            },
                            domProps: { value: _vm.form.address },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "address",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "mt-5" }, [
                            _vm._v(
                              "Please drag the red marker for a accurate location"
                            ),
                          ]),
                          _vm._v(" "),
                          _c("GoogleMap", {
                            attrs: { registered: false },
                            on: { getCoordinate: _vm.getCoordinates },
                          }),
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
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.goToNext(3)
                              },
                            },
                          },
                          [_vm._v("Back")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600",
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.submitProperty.apply(null, arguments)
                              },
                            },
                          },
                          [_vm._v("Submit Property")]
                        ),
                      ]),
                    ]),
                  ]
                )
              : _vm._e(),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex justify-end items-center  border-t" },
            [
              _c(
                "button",
                {
                  staticClass:
                    "bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg text-white mr-7 close-modal mt-2 ",
                  on: { click: _vm.closeModal },
                },
                [_vm._v("Cancel")]
              ),
            ]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



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
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "max-w-5xl p-6 mx-auto mt-5 bg-gray-100 rounded-md mb-5 shadow-inner",
    },
    [
      _c("div", { staticClass: "flex justify-end items-center" }, [
        _c(
          "button",
          {
            staticClass:
              "  focus:text-white hover:text-white bg-blue-600 shadow-lg hover:bg-blue-700 text-xs text-white px-3 py-3 rounded-md",
            on: {
              click: function ($event) {
                _vm.toggleAddModal = !_vm.toggleAddModal
              },
            },
          },
          [_vm._v("\n                    + Add Property\n             ")]
        ),
      ]),
      _vm._v(" "),
      _vm.isReady == true
        ? _c("div", [
            !_vm.properties.length
              ? _c("div", [
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-blue-200 border-yellow-600 text-gray-600  p-20 mt-3 ",
                      attrs: { role: "alert" },
                    },
                    [
                      _c("center", [
                        _c(
                          "p",
                          { staticClass: "font-bold text-base mt-48 mb-48" },
                          [
                            _vm._v(
                              "You don't have any property register yet. Please add property"
                            ),
                          ]
                        ),
                      ]),
                    ],
                    1
                  ),
                ])
              : _c(
                  "div",
                  _vm._l(_vm.properties, function (property) {
                    return _c(
                      "div",
                      { key: property.id, staticClass: "flex justify-start  " },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "flex justify-center w-full px-8 py-4 overflow-hidden bg-white rounded-lg shadow-lg mt-5 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200 hover:bg-blue-400 hover:shadow-2xl",
                            attrs: {
                              to: {
                                name: "property",
                                params: {
                                  property_id: property.id,
                                  role: _vm.role,
                                },
                              },
                            },
                          },
                          [
                            property.cover != null
                              ? _c("div", { staticClass: "w-1/3 bg-cover" }, [
                                  _c("img", {
                                    staticClass: "h-48 w-full object-cover",
                                    attrs: {
                                      src:
                                        "/images/Properties/" +
                                        property.cover.photo_name,
                                    },
                                  }),
                                ])
                              : _c("div", { staticClass: "w-1/3 bg-cover" }, [
                                  _c("img", {
                                    staticClass: "h-48 w-full object-cover",
                                    attrs: {
                                      src:
                                        "/images/Properties/" +
                                        property.photo[0].photo_name,
                                      alt: "Avatar",
                                    },
                                  }),
                                ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "w-2/3 p-4 md:p-4" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "flex justify-between item-center",
                                },
                                [
                                  _c(
                                    "h1",
                                    {
                                      staticClass:
                                        "text-2xl font-bold text-gray-800 dark:text-white",
                                    },
                                    [_vm._v(" " + _vm._s(property.name))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "h1",
                                    {
                                      staticClass:
                                        "capitalize text-2xl font-bold text-yellow-800 dark:text-white",
                                    },
                                    [_vm._v(_vm._s(property.status))]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "mt-2 text-sm text-gray-700 " },
                                [
                                  _vm._v(
                                    _vm._s(property.address) +
                                      " | " +
                                      _vm._s(property.campus)
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "flex mt-2 item-center" },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "mt-2 text-sm text-gray-700 ",
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(property.postcode) +
                                          " | " +
                                          _vm._s(property.gender_preferences)
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "flex mt-2 item-center" },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "mt-2 text-sm text-gray-700 ",
                                    },
                                    [_vm._v(_vm._s(property.furnishing))]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "flex mt-2 item-center" },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "mt-2 text-sm text-yellow-700 ",
                                    },
                                    [
                                      _vm._v(
                                        "Created at: " +
                                          _vm._s(
                                            _vm
                                              .moment(property.created_at)
                                              .format("DD-MMM-YYYY")
                                          )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  }),
                  0
                ),
          ])
        : _c(
            "div",
            [
              _c("loader", {
                attrs: {
                  object: "#4491ee",
                  color1: "#e3851c",
                  color2: "#e82dda",
                  size: "8",
                  speed: "1.3",
                  bg: "#1e2337",
                  objectbg: "#ff2d2d",
                  opacity: "90",
                  disableScrolling: "true",
                  name: "circular",
                },
              }),
            ],
            1
          ),
      _vm._v(" "),
      _vm.toggleAddModal
        ? _c("AddPropertyModal", {
            attrs: { role: _vm.role, user_id: _vm.user_id },
            on: { refreshData: _vm.getProperty, closeModal: _vm.closeAddModal },
          })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ManagePropertyList/AddProperty_Modal.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/AddProperty_Modal.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddProperty_Modal_vue_vue_type_template_id_f27a2a90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddProperty_Modal.vue?vue&type=template&id=f27a2a90& */ "./resources/js/components/ManagePropertyList/AddProperty_Modal.vue?vue&type=template&id=f27a2a90&");
/* harmony import */ var _AddProperty_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddProperty_Modal.vue?vue&type=script&lang=js& */ "./resources/js/components/ManagePropertyList/AddProperty_Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddProperty_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddProperty_Modal_vue_vue_type_template_id_f27a2a90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddProperty_Modal_vue_vue_type_template_id_f27a2a90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManagePropertyList/AddProperty_Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/AddProperty_Modal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/AddProperty_Modal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProperty_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProperty_Modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/AddProperty_Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProperty_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/AddProperty_Modal.vue?vue&type=template&id=f27a2a90&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/AddProperty_Modal.vue?vue&type=template&id=f27a2a90& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProperty_Modal_vue_vue_type_template_id_f27a2a90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProperty_Modal.vue?vue&type=template&id=f27a2a90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/AddProperty_Modal.vue?vue&type=template&id=f27a2a90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProperty_Modal_vue_vue_type_template_id_f27a2a90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProperty_Modal_vue_vue_type_template_id_f27a2a90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ })

}]);