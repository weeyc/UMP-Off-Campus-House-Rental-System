(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Registered_Property"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/EditProperty_Modal.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/EditProperty_Modal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageUploader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageUploader.vue */ "./resources/js/components/ManagePropertyList/ImageUploader.vue");
/* harmony import */ var _GoogleMap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoogleMap.vue */ "./resources/js/components/ManagePropertyList/GoogleMap.vue");
/* harmony import */ var vue_concise_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-concise-slider */ "./node_modules/vue-concise-slider/dist/module.js");
/* harmony import */ var vue_concise_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_concise_slider__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var Errors = /*#__PURE__*/function () {
  function Errors() {
    _classCallCheck(this, Errors);

    this.errors = {};
  }

  _createClass(Errors, [{
    key: "get",
    value: function get(field) {
      if (this.errors[field]) {
        return this.errors[field][0];
      }
    }
  }, {
    key: "record",
    value: function record(errors) {
      this.errors = errors.errors;
    }
  }]);

  return Errors;
}();




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    form: Object,
    property_id: Number,
    propertyPhoto: Array
  },
  components: {
    ImageUploader: _ImageUploader_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    GoogleMap: _GoogleMap_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    slider: vue_concise_slider__WEBPACK_IMPORTED_MODULE_2__["slider"],
    slideritem: vue_concise_slider__WEBPACK_IMPORTED_MODULE_2__["slideritem"]
  },
  data: function data() {
    return {
      errors: new Errors(),
      type: 'password',
      btnText: 'Show Password',
      isVisible: false,
      modalBackground: '',
      activePhase: 1,
      replace: false
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
    getCoordinates: function getCoordinates(lats, logs) {
      this.form.lat = lats;
      this.form.log = logs;
    },
    get_replace: function get_replace(param) {
      if (param == 0) {
        this.replace = true;
      } else this.replace = false;
    },
    editProperty: function editProperty() {
      var _this = this;

      axios.post('/api/update_property/' + this.property_id, this.form).then(function () {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Property update successfully!',
          showConfirmButton: false,
          timer: 1500
        });

        _this.closeModal();
      })["catch"](function (error) {
        return _this.errors.record(error.response.data);
      });
    },
    showPassword: function showPassword() {
      if (this.type === 'password') {
        this.type = 'text';
      } else {
        this.type = 'password';
      }

      this.isVisible = !this.isVisible;
    },
    getAvatar: function getAvatar(event) {
      this.form.pic = event;
    },
    closeModal: function closeModal() {
      this.$emit("closeModal");
    },
    getRole: function getRole() {
      if (this.role == 1) {
        this.modalBackground = 'bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400';
      } else if (this.role == 2) {
        this.modalBackground = 'bg-gradient-to-br from-sky-400 to-cyan-300';
      } else {
        this.modalBackground = 'bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400';
      }
    }
  },
  mounted: function mounted() {
    this.getRole();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/Property.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/Property.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PropertyCard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PropertyCard.vue */ "./resources/js/components/ManagePropertyList/PropertyCard.vue");
/* harmony import */ var vue_concise_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-concise-slider */ "./node_modules/vue-concise-slider/dist/module.js");
/* harmony import */ var vue_concise_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_concise_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GoogleMap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoogleMap.vue */ "./resources/js/components/ManagePropertyList/GoogleMap.vue");
/* harmony import */ var _EditProperty_Modal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditProperty_Modal.vue */ "./resources/js/components/ManagePropertyList/EditProperty_Modal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // import { VueperSlides, VueperSlide } from 'vueperslides'
// import 'vueperslides/dist/vueperslides.css'

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    propertyCard: _PropertyCard_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    GoogleMap: _GoogleMap_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    EditModal: _EditProperty_Modal_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    slider: vue_concise_slider__WEBPACK_IMPORTED_MODULE_1__["slider"],
    slideritem: vue_concise_slider__WEBPACK_IMPORTED_MODULE_1__["slideritem"] // VueperSlides,
    // VueperSlide

  },
  props: {
    user_id: Number,
    role: Number
  },
  data: function data() {
    return {
      toggleModal: false,
      property: [],
      property_id: this.$route.params.property_id,
      propertyPhoto: [],
      options: {
        currentPage: 0
      },
      form: {
        id: '',
        landlord_id: '',
        name: '',
        lat: '',
        log: '',
        address: '',
        postcode: '',
        des: '',
        campus: '',
        furnishing: '',
        status: '',
        photo: []
      }
    };
  },
  methods: {
    getProperty: function getProperty() {
      var _this = this;

      axios.get('/api/get_property/' + this.property_id).then(function (response) {
        _this.property = response.data.data;
        _this.propertyPhoto = response.data.data[0].photo;
        console.warn(_this.property.data);
      });
    },
    closeEditModal: function closeEditModal() {
      this.toggleModal = !this.toggleModal;
    },
    clickEdit: function clickEdit(house) {
      this.form.id = house.id, this.form.landlord_id = house.landlord_id, this.form.name = house.name, this.form.lat = house.lat, this.form.log = house.log, this.form.address = house.address, this.form.postcode = house.postcode, this.form.des = house.des, this.form.campus = house.campus, this.form.furnishing = house.furnishing, this.form.status = house.status, this.form.photo = house.photo;
    }
  },
  mounted: function mounted() {
    this.getProperty();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/PropertyCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/PropertyCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/EditProperty_Modal.vue?vue&type=template&id=568e9f2e&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/EditProperty_Modal.vue?vue&type=template&id=568e9f2e& ***!
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
            "rounded max-h-full overflow-y-auto shadow-lg max-w-5xl p-6 mx-auto min-w-full",
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
                _vm._v("Edit Property")
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
                  " max-w-4xl p-6 mx-auto bg-gray-200 rounded-md shadow-md",
                attrs: { id: "propertyDetail" }
              },
              [
                _c(
                  "h2",
                  {
                    staticClass:
                      " font-bold text-gray-700 capitalize text-center text-xl"
                  },
                  [_vm._v("Edit Property")]
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
                    {
                      staticClass: "grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2"
                    },
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
                              value: _vm.form.name,
                              expression: "form.name"
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
                          domProps: { value: _vm.form.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "name", $event.target.value)
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
                            placeholder:
                              "eg. Taman Sri Gambang, 26600 Pekan, Pahang",
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
                              _vm.$set(
                                _vm.form,
                                "postcode",
                                $event.target.value
                              )
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
                      " max-w-4xl p-6 mx-auto bg-gray-200 rounded-md shadow-md ",
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
                    _vm.replace == false
                      ? _c(
                          "button",
                          {
                            staticClass:
                              "px-6 py-2 justify-end mr-5 leading-5 text-white transition-colors\n                      duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.get_replace(0)
                              }
                            }
                          },
                          [_vm._v("Replace Images")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.replace == true
                      ? _c(
                          "button",
                          {
                            staticClass:
                              "px-6 py-2 justify-end mr-5 leading-5 text-white transition-colors\n                      duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.get_replace(1)
                              }
                            }
                          },
                          [_vm._v("Skip")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", [
                      _vm.replace == false
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "border-double border-4 border-light-blue-500",
                              staticStyle: {
                                width: "100%",
                                margin: "10px auto",
                                height: "250px"
                              }
                            },
                            [
                              _c(
                                "slider",
                                {
                                  ref: "slider",
                                  attrs: { options: _vm.options }
                                },
                                [
                                  _vm._l(_vm.propertyPhoto, function(
                                    item,
                                    index
                                  ) {
                                    return _c("slideritem", { key: index }, [
                                      _c("img", {
                                        staticClass: "h-70 w-full  relative",
                                        attrs: {
                                          src:
                                            "/images/Properties/" +
                                            item.photo_name,
                                          alt: "Avatar"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            " absolute bottom-0 text-xs text-black pt-5 bg-gray-200 w-full "
                                        },
                                        [_vm._v(_vm._s(item.photo_label))]
                                      )
                                    ])
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      attrs: { slot: "loading" },
                                      slot: "loading"
                                    },
                                    [_vm._v("loading...")]
                                  )
                                ],
                                2
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.replace == true
                        ? _c(
                            "div",
                            [
                              _c("ImageUploader", {
                                attrs: { editImage: true },
                                on: { getImage: _vm.getImages },
                                model: {
                                  value: _vm.form.photo,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "photo", $$v)
                                  },
                                  expression: "form.photo"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
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
                    ])
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.activePhase == 3
              ? _c(
                  "section",
                  {
                    staticClass:
                      "max-w-4xl p-6 mx-auto bg-gray-200 rounded-md shadow-md",
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
                        {
                          staticClass:
                            "grid grid-cols-3 gap-4 mt-4 sm:grid-cols-2"
                        },
                        [
                          _c(
                            "label",
                            {
                              staticClass:
                                "inline-flex items-center cursor-pointer"
                            },
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
                                    ? _vm._i(_vm.form.furnishing, "Internet") >
                                      -1
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
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
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
                                _vm._v("Internet")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass:
                                "inline-flex items-center cursor-pointer"
                            },
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
                                attrs: {
                                  type: "checkbox",
                                  value: "Washing Machine"
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.form.furnishing)
                                    ? _vm._i(
                                        _vm.form.furnishing,
                                        "Washing Machine"
                                      ) > -1
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
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
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
                            {
                              staticClass:
                                "inline-flex items-center cursor-pointer"
                            },
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
                                attrs: {
                                  type: "checkbox",
                                  value: "Dining Table"
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.form.furnishing)
                                    ? _vm._i(
                                        _vm.form.furnishing,
                                        "Dining Table"
                                      ) > -1
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
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
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
                            {
                              staticClass:
                                "inline-flex items-center cursor-pointer"
                            },
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
                                attrs: {
                                  type: "checkbox",
                                  value: "Refrigerator"
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.form.furnishing)
                                    ? _vm._i(
                                        _vm.form.furnishing,
                                        "Refrigerator"
                                      ) > -1
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
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
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
                              value: _vm.form.des,
                              expression: "form.des"
                            }
                          ],
                          staticClass:
                            "block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring",
                          domProps: { value: _vm.form.des },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "des", $event.target.value)
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
                      "max-w-4xl p-6 mx-auto bg-gray-200 rounded-md shadow-md ",
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
                                _vm.$set(
                                  _vm.form,
                                  "address",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "mt-5" }, [
                            _vm._v(
                              "Please drag the red marker for a accurate location"
                            )
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
                                return _vm.editProperty($event)
                              }
                            }
                          },
                          [_vm._v("Update Property")]
                        )
                      ])
                    ])
                  ]
                )
              : _vm._e()
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
                      return _vm.editProperty($event)
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/Property.vue?vue&type=template&id=bad7721e&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/Property.vue?vue&type=template&id=bad7721e& ***!
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
  return _c(
    "div",
    { staticClass: "max-w-5xl p-6 mx-auto mt-10 bg-gray-200 rounded-md mb-10" },
    [
      _vm._l(_vm.property, function(house) {
        return _c(
          "div",
          { key: house.id, staticClass: "flex justify-end items-center" },
          [
            _c(
              "button",
              {
                staticClass:
                  " bg-blue-600 shadow-lg hover:bg-blue-700 text-xs text-white px-4 py-3 rounded-md mb-2",
                on: {
                  click: function($event) {
                    _vm.clickEdit(house)
                    _vm.toggleModal = !_vm.toggleModal
                  }
                }
              },
              [_vm._v("\n            + Edit Property\n        ")]
            )
          ]
        )
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex justify-end items-center" },
        [
          _c(
            "router-link",
            {
              staticClass:
                " bg-blue-600 shadow-lg hover:bg-blue-700 text-xs text-white px-5 py-3 rounded-md",
              attrs: { to: { name: "add_property" } }
            },
            [_vm._v("\n            + Add Room\n        ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.property, function(house) {
        return _c(
          "div",
          {
            key: house.id,
            staticClass:
              "max-w-2xl px-8 py-4 mx-auto   overflow-hidden bg-white rounded-lg shadow-lg mt-5"
          },
          [
            _c("div", { staticClass: "w-full p-4 md:p-4" }, [
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
                    [_vm._v("Property Name: " + _vm._s(house.name))]
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
                          params: { property_id: house.id }
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                         " +
                          _vm._s(house.status) +
                          "\n                "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "border-double border-4 border-light-blue-500",
                  staticStyle: {
                    width: "100%",
                    margin: "10px auto",
                    height: "250px"
                  }
                },
                [
                  _c(
                    "slider",
                    {
                      ref: "slider",
                      refInFor: true,
                      attrs: { options: _vm.options }
                    },
                    [
                      _vm._l(_vm.propertyPhoto, function(item, index) {
                        return _c("slideritem", { key: index }, [
                          _c("img", {
                            staticClass: "h-70 w-full  relative",
                            attrs: {
                              src: "/images/Properties/" + item.photo_name,
                              alt: "Avatar"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass:
                                " absolute bottom-0 text-xs text-black pt-5 bg-gray-200 w-full "
                            },
                            [_vm._v(_vm._s(item.photo_label))]
                          )
                        ])
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { attrs: { slot: "loading" }, slot: "loading" },
                        [_vm._v("loading...")]
                      )
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 text-sm text-gray-600 " }, [
                _c("span", { staticClass: "font-black" }, [
                  _vm._v(" Address: ")
                ]),
                _vm._v("  " + _vm._s(house.address))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex mt-2 item-center" }, [
                _c("p", { staticClass: "mt-2 text-sm text-gray-600 " }, [
                  _c("span", { staticClass: "font-black" }, [
                    _vm._v(" Description:")
                  ]),
                  _vm._v(" " + _vm._s(house.des))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex item-center" }, [
                _c("p", { staticClass: "mt-2 text-sm text-gray-600" }, [
                  _c("span", { staticClass: "font-black" }, [
                    _vm._v(" Furnishing: ")
                  ]),
                  _vm._v(_vm._s(house.furnishing))
                ])
              ]),
              _vm._v(" "),
              _vm._m(0, true)
            ]),
            _vm._v(" "),
            _c("GoogleMap", {
              attrs: {
                latitude: parseFloat(house.lat),
                logitude: parseFloat(house.log),
                registered: true
              }
            })
          ],
          1
        )
      }),
      _vm._v(" "),
      _vm.toggleModal
        ? _c("EditModal", {
            attrs: {
              form: _vm.form,
              propertyPhoto: _vm.propertyPhoto,
              property_id: parseInt(_vm.property_id)
            },
            on: { refreshData: _vm.getProperty, closeModal: _vm.closeEditModal }
          })
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex item-center" }, [
      _c("p", { staticClass: "mt-2 text-sm text-gray-600" }, [
        _c("span", { staticClass: "font-black" }, [_vm._v(" Location: ")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/PropertyCard.vue?vue&type=template&id=49c549a1&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/PropertyCard.vue?vue&type=template&id=49c549a1& ***!
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

/***/ "./resources/js/components/ManagePropertyList/EditProperty_Modal.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/EditProperty_Modal.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditProperty_Modal_vue_vue_type_template_id_568e9f2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditProperty_Modal.vue?vue&type=template&id=568e9f2e& */ "./resources/js/components/ManagePropertyList/EditProperty_Modal.vue?vue&type=template&id=568e9f2e&");
/* harmony import */ var _EditProperty_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProperty_Modal.vue?vue&type=script&lang=js& */ "./resources/js/components/ManagePropertyList/EditProperty_Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditProperty_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditProperty_Modal_vue_vue_type_template_id_568e9f2e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditProperty_Modal_vue_vue_type_template_id_568e9f2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManagePropertyList/EditProperty_Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/EditProperty_Modal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/EditProperty_Modal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProperty_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProperty_Modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/EditProperty_Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProperty_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/EditProperty_Modal.vue?vue&type=template&id=568e9f2e&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/EditProperty_Modal.vue?vue&type=template&id=568e9f2e& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProperty_Modal_vue_vue_type_template_id_568e9f2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProperty_Modal.vue?vue&type=template&id=568e9f2e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/EditProperty_Modal.vue?vue&type=template&id=568e9f2e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProperty_Modal_vue_vue_type_template_id_568e9f2e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProperty_Modal_vue_vue_type_template_id_568e9f2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ManagePropertyList/Property.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/Property.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Property_vue_vue_type_template_id_bad7721e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Property.vue?vue&type=template&id=bad7721e& */ "./resources/js/components/ManagePropertyList/Property.vue?vue&type=template&id=bad7721e&");
/* harmony import */ var _Property_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Property.vue?vue&type=script&lang=js& */ "./resources/js/components/ManagePropertyList/Property.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Property_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Property_vue_vue_type_template_id_bad7721e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Property_vue_vue_type_template_id_bad7721e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManagePropertyList/Property.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/Property.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/Property.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Property.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/Property.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/Property.vue?vue&type=template&id=bad7721e&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/Property.vue?vue&type=template&id=bad7721e& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_vue_vue_type_template_id_bad7721e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Property.vue?vue&type=template&id=bad7721e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/Property.vue?vue&type=template&id=bad7721e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_vue_vue_type_template_id_bad7721e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_vue_vue_type_template_id_bad7721e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ManagePropertyList/PropertyCard.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/PropertyCard.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PropertyCard_vue_vue_type_template_id_49c549a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PropertyCard.vue?vue&type=template&id=49c549a1& */ "./resources/js/components/ManagePropertyList/PropertyCard.vue?vue&type=template&id=49c549a1&");
/* harmony import */ var _PropertyCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PropertyCard.vue?vue&type=script&lang=js& */ "./resources/js/components/ManagePropertyList/PropertyCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PropertyCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PropertyCard_vue_vue_type_template_id_49c549a1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PropertyCard_vue_vue_type_template_id_49c549a1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManagePropertyList/PropertyCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/PropertyCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/PropertyCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PropertyCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/PropertyCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/PropertyCard.vue?vue&type=template&id=49c549a1&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/PropertyCard.vue?vue&type=template&id=49c549a1& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCard_vue_vue_type_template_id_49c549a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PropertyCard.vue?vue&type=template&id=49c549a1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/PropertyCard.vue?vue&type=template&id=49c549a1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCard_vue_vue_type_template_id_49c549a1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCard_vue_vue_type_template_id_49c549a1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);