(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Room_Landlord"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/EditRoom_Modal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/EditRoom_Modal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    room_id: Number,
    property_id: Number,
    roomPhoto: Array
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
      modalBackground: 'bg-gradient-to-br from-sky-400 to-cyan-300',
      activePhase: 1,
      replace: false,
      chgPic: 0
    };
  },
  methods: {
    goToNext: function goToNext(pg) {
      this.activePhase = pg;
    },
    getImages: function getImages(event) {
      this.form.photo_room = event;
    },
    getCoordinates: function getCoordinates(lats, logs) {
      this.form.lat = lats;
      this.form.log = logs;
    },
    get_replace: function get_replace(param) {
      if (param == 0) {
        this.replace = true;
        this.chgPic = 1;
      } else {
        this.replace = false;
        this.chgPic = 0;
      }
    },
    editProperty: function editProperty() {
      var _this = this;

      axios.post('/api/update_room/' + this.room_id + '/' + this.chgPic, this.form).then(function () {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Room update successfully!',
          showConfirmButton: false,
          timer: 1500
        });

        _this.closeModal();

        _this.$emit("refreshData");
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
    }
  },
  mounted: function mounted() {
    this.form.furnishing = this.form.furnishing.split(',');
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/Room_Landlord.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/Room_Landlord.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoomCard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoomCard.vue */ "./resources/js/components/ManagePropertyList/RoomCard.vue");
/* harmony import */ var vue_concise_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-concise-slider */ "./node_modules/vue-concise-slider/dist/module.js");
/* harmony import */ var vue_concise_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_concise_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GoogleMap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoogleMap.vue */ "./resources/js/components/ManagePropertyList/GoogleMap.vue");
/* harmony import */ var _EditRoom_Modal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditRoom_Modal.vue */ "./resources/js/components/ManagePropertyList/EditRoom_Modal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    RoomCard: _RoomCard_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    GoogleMap: _GoogleMap_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    EditRoomModal: _EditRoom_Modal_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    slider: vue_concise_slider__WEBPACK_IMPORTED_MODULE_1__["slider"],
    slideritem: vue_concise_slider__WEBPACK_IMPORTED_MODULE_1__["slideritem"] // VueperSlides,
    // VueperSlide

  },
  props: {},
  data: function data() {
    return {
      toggleModal: false,
      toggleAddModal: false,
      property: [],
      landlord_id: '',
      rooms: [],
      room: [],
      property_id: this.$route.params.property_id,
      room_id: this.$route.params.room_id,
      roomPhoto: [],
      options: {
        currentPage: 0
      },
      form: {
        id: '',
        list_name: '',
        name: '',
        photo_room: [],
        booking_key: '',
        des: '',
        furnishing: [],
        room_type: '',
        penalty_fees: '',
        number_of_tenant: '',
        monthly_rent: '',
        property_id: ''
      }
    };
  },
  methods: {
    getProperty: function getProperty() {
      var _this = this;

      axios.get('/api/get_property/' + this.property_id).then(function (response) {
        _this.property = response.data.data;
        _this.propertyPhoto = response.data.data[0].photo;
        _this.landlord_id = response.data.data[0].landlord_id;
        console.warn(_this.property.data);
      });
    },
    getRoom: function getRoom() {
      var _this2 = this;

      axios.get('/api/get_room/' + this.room_id).then(function (response) {
        _this2.room = response.data.data;
        _this2.roomPhoto = response.data.data[0].photo_room;
        _this2.landlord_id = response.data.data[0].landlord_id;
        console.warn(_this2.rooms.data);
      });
    },
    closeEditModal: function closeEditModal() {
      this.toggleModal = !this.toggleModal;
    },
    closeAddModal: function closeAddModal() {
      this.toggleAddModal = !this.toggleAddModal;
    },
    clickEdit: function clickEdit(list) {
      this.form.id = list.id, this.form.list_name = list.listing_name, this.form.name = list.room_name, this.form.des = list.room_description, this.form.furnishing = list.room_furnishing, this.form.room_type = list.room_type;
      this.form.photo_room = list.photo_room;
      this.form.monthly_rent = list.monthly_rent;
      this.form.penalty_fees = list.penalty_fees;
      this.form.booking_key = list.booking_key;
      this.form.number_of_tenant = list.number_of_tenant;
      this.form.property_id = this.property_id;
    }
  },
  mounted: function mounted() {
    this.getRoom();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/EditRoom_Modal.vue?vue&type=template&id=7d786a22&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/EditRoom_Modal.vue?vue&type=template&id=7d786a22& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
            "rounded max-h-full overflow-y-auto shadow-lg max-w-5xl p-6 mx-auto min-w-2/3",
          class: [_vm.modalBackground],
        },
        [
          _c(
            "div",
            {
              staticClass:
                "border-b px-4 py-2 flex justify-between items-center",
            },
            [
              _c("h3", { staticClass: "font-semibold text-lg" }, [
                _vm._v("Edit Room"),
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
          _c("div", { staticClass: "p-3" }, [
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
                  " w-full p-6 mx-auto bg-gray-200 rounded-md shadow-md",
                attrs: { id: "propertyDetail" },
              },
              [
                _c(
                  "h2",
                  {
                    staticClass:
                      " font-bold text-gray-700 capitalize text-center text-xl",
                  },
                  [_vm._v("Edit Room")]
                ),
                _vm._v(" "),
                _c(
                  "h2",
                  {
                    staticClass:
                      " font-bold text-gray-700 capitalize text-center text-base ",
                  },
                  [_vm._v("-Room Details-")]
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
                          _vm._v("Listing Name"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.list_name,
                              expression: "form.list_name",
                            },
                          ],
                          staticClass:
                            "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring",
                          attrs: {
                            type: "text",
                            placeholder: "Single room at Gambang",
                            required: "",
                          },
                          domProps: { value: _vm.form.list_name },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "list_name",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("label", { staticClass: "text-gray-700" }, [
                          _vm._v("Room Name"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.name,
                              expression: "form.name",
                            },
                          ],
                          staticClass:
                            "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring",
                          attrs: {
                            type: "text",
                            placeholder: "Room 1",
                            required: "",
                          },
                          domProps: { value: _vm.form.name },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "name", $event.target.value)
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("label", { staticClass: "text-gray-700" }, [
                          _vm._v("Room Type"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.room_type,
                                expression: "form.room_type",
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
                                  "room_type",
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
                                attrs: { value: "Single" },
                              },
                              [_vm._v(" Single")]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              {
                                staticClass: "text-gray-700 text-lg",
                                attrs: { value: "Shared" },
                              },
                              [_vm._v(" Shared")]
                            ),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("label", { staticClass: "text-gray-700" }, [
                          _vm._v("Max no of tenants per room"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.number_of_tenant,
                              expression: "form.number_of_tenant",
                            },
                          ],
                          staticClass:
                            "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring",
                          attrs: {
                            type: "number",
                            placeholder: "2",
                            min: "1",
                            required: "",
                          },
                          domProps: { value: _vm.form.number_of_tenant },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "number_of_tenant",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("label", { staticClass: "text-gray-700" }, [
                          _vm._v("Monthly Rent (RM)"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.monthly_rent,
                              expression: "form.monthly_rent",
                            },
                          ],
                          staticClass:
                            "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring",
                          attrs: {
                            type: "number",
                            step: "any",
                            min: "0",
                            placeholder: "300",
                            required: "",
                          },
                          domProps: { value: _vm.form.monthly_rent },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "monthly_rent",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("label", { staticClass: "text-gray-700" }, [
                          _vm._v("Penalty Fees (Overdue)"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.penalty_fees,
                              expression: "form.penalty_fees",
                            },
                          ],
                          staticClass:
                            "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring",
                          attrs: {
                            type: "number",
                            step: "any",
                            min: "0",
                            placeholder: "20",
                            required: "",
                          },
                          domProps: { value: _vm.form.penalty_fees },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "penalty_fees",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("label", { staticClass: "text-gray-700" }, [
                          _vm._v("Booking Key"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.booking_key,
                              expression: "form.booking_key",
                            },
                          ],
                          staticClass:
                            "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring",
                          attrs: {
                            type: "text",
                            minlength: "6",
                            maxlength: "6",
                            placeholder: "6 character eg. Tkeis7",
                            required: "",
                          },
                          domProps: { value: _vm.form.booking_key },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "booking_key",
                                $event.target.value
                              )
                            },
                          },
                        }),
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
                      " w-full p-6 mx-auto bg-gray-200 rounded-md shadow-md ",
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
                    _vm.replace == false
                      ? _c(
                          "button",
                          {
                            staticClass:
                              "px-6 py-2 justify-end mr-5 leading-5 text-white transition-colors\n                      duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.get_replace(0)
                              },
                            },
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
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.get_replace(1)
                              },
                            },
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
                                height: "250px",
                              },
                            },
                            [
                              _c(
                                "slider",
                                {
                                  ref: "slider",
                                  attrs: { options: _vm.options },
                                },
                                [
                                  _vm._l(_vm.roomPhoto, function (item, index) {
                                    return _c("slideritem", { key: index }, [
                                      _c("img", {
                                        staticClass: "h-70 w-full  relative",
                                        attrs: {
                                          src:
                                            "/images/Properties/" +
                                            item.photo_name,
                                          alt: "Avatar",
                                        },
                                      }),
                                    ])
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      attrs: { slot: "loading" },
                                      slot: "loading",
                                    },
                                    [_vm._v("loading...")]
                                  ),
                                ],
                                2
                              ),
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
                                attrs: { hideLabel: true, editImage: true },
                                on: { getImage: _vm.getImages },
                                model: {
                                  value: _vm.form.photo_room,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "photo_room", $$v)
                                  },
                                  expression: "form.photo_room",
                                },
                              }),
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
                    ]),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.activePhase == 3
              ? _c(
                  "section",
                  {
                    staticClass:
                      "mt-10 w-full p-6 mx-auto bg-gray-200 rounded-md shadow-md dark:bg-gray-800",
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
                    _c("div", { staticClass: "w-full" }, [
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
                                attrs: { type: "checkbox", value: "Wardrobes" },
                                domProps: {
                                  checked: Array.isArray(_vm.form.furnishing)
                                    ? _vm._i(_vm.form.furnishing, "Wardrobes") >
                                      -1
                                    : _vm.form.furnishing,
                                },
                                on: {
                                  change: function ($event) {
                                    var $$a = _vm.form.furnishing,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = "Wardrobes",
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
                                _vm._v("Wardrobes "),
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
                                attrs: { type: "checkbox", value: "Fan" },
                                domProps: {
                                  checked: Array.isArray(_vm.form.furnishing)
                                    ? _vm._i(_vm.form.furnishing, "Fan") > -1
                                    : _vm.form.furnishing,
                                },
                                on: {
                                  change: function ($event) {
                                    var $$a = _vm.form.furnishing,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = "Fan",
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
                                _vm._v("Fan"),
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
                                attrs: {
                                  type: "checkbox",
                                  value: "Study Table",
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.form.furnishing)
                                    ? _vm._i(
                                        _vm.form.furnishing,
                                        "Study Table"
                                      ) > -1
                                    : _vm.form.furnishing,
                                },
                                on: {
                                  change: function ($event) {
                                    var $$a = _vm.form.furnishing,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = "Study Table",
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
                                _vm._v("Study Table"),
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
                                attrs: { type: "checkbox", value: "A/C" },
                                domProps: {
                                  checked: Array.isArray(_vm.form.furnishing)
                                    ? _vm._i(_vm.form.furnishing, "A/C") > -1
                                    : _vm.form.furnishing,
                                },
                                on: {
                                  change: function ($event) {
                                    var $$a = _vm.form.furnishing,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = "A/C",
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
                                _vm._v("A/C"),
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
                        [_vm._v("-Room Description-")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-full mt-4" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200",
                          },
                          [_vm._v("Room Description")]
                        ),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.des,
                              expression: "form.des",
                            },
                          ],
                          staticClass:
                            "block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring",
                          domProps: { value: _vm.form.des },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "des", $event.target.value)
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
                                return _vm.editProperty.apply(null, arguments)
                              },
                            },
                          },
                          [_vm._v("Update Room")]
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
            { staticClass: "flex justify-end items-center w-100 border-t p-3" },
            [
              _c(
                "button",
                {
                  staticClass:
                    "bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal",
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
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {}, [
    _c(
      "div",
      {
        staticClass:
          "max-w-2xl px-8 py-4 mx-auto flex  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800",
      },
      [
        _c("div", {
          staticClass: "w-1/3 bg-cover",
          staticStyle: {
            "background-image":
              "url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')",
          },
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
              ),
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "flex mt-2 item-center" }, [
            _c(
              "svg",
              {
                staticClass:
                  "w-5 h-5 text-gray-700 fill-current dark:text-gray-300",
                attrs: { viewBox: "0 0 24 24" },
              },
              [
                _c("path", {
                  attrs: {
                    d: "M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z",
                  },
                }),
              ]
            ),
            _vm._v(" "),
            _c(
              "svg",
              {
                staticClass:
                  "w-5 h-5 text-gray-700 fill-current dark:text-gray-300",
                attrs: { viewBox: "0 0 24 24" },
              },
              [
                _c("path", {
                  attrs: {
                    d: "M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z",
                  },
                }),
              ]
            ),
            _vm._v(" "),
            _c(
              "svg",
              {
                staticClass:
                  "w-5 h-5 text-gray-700 fill-current dark:text-gray-300",
                attrs: { viewBox: "0 0 24 24" },
              },
              [
                _c("path", {
                  attrs: {
                    d: "M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z",
                  },
                }),
              ]
            ),
            _vm._v(" "),
            _c(
              "svg",
              {
                staticClass: "w-5 h-5 text-gray-500 fill-current",
                attrs: { viewBox: "0 0 24 24" },
              },
              [
                _c("path", {
                  attrs: {
                    d: "M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z",
                  },
                }),
              ]
            ),
            _vm._v(" "),
            _c(
              "svg",
              {
                staticClass: "w-5 h-5 text-gray-500 fill-current",
                attrs: { viewBox: "0 0 24 24" },
              },
              [
                _c("path", {
                  attrs: {
                    d: "M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z",
                  },
                }),
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
            "px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600",
        },
        [_vm._v("View Details")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/Room_Landlord.vue?vue&type=template&id=0ddf8078&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/Room_Landlord.vue?vue&type=template&id=0ddf8078& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "max-w-5xl p-6 mx-auto mt-10 bg-gray-200 rounded-md mb-10" },
    [
      _vm._l(_vm.room, function (list) {
        return _c(
          "div",
          { key: list.id, staticClass: "flex justify-end items-center" },
          [
            _c(
              "button",
              {
                staticClass:
                  " bg-blue-600 shadow-lg hover:bg-blue-700 text-xs text-white px-4 py-3 rounded-md mb-2",
                on: {
                  click: function ($event) {
                    _vm.clickEdit(list)
                    _vm.toggleModal = !_vm.toggleModal
                  },
                },
              },
              [_vm._v("\n            + Edit Room\n        ")]
            ),
          ]
        )
      }),
      _vm._v(" "),
      _vm._l(_vm.room, function (list) {
        return _c(
          "div",
          {
            key: list.id,
            staticClass:
              "p-5 overflow-hidden bg-white rounded-lg shadow-lg mt-5",
          },
          [
            _c("div", { staticClass: "w-full p-4 md:p-4" }, [
              _c("div", { staticClass: "flex justify-between item-center" }, [
                _c(
                  "h1",
                  {
                    staticClass:
                      "text-2xl font-bold text-gray-800 dark:text-white",
                  },
                  [_vm._v("Listing Room Name: " + _vm._s(list.listing_name))]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200\n                         transform bg-gray-800 rounded hover:bg-gray-700",
                  },
                  [
                    _vm._v(
                      "\n                         " +
                        _vm._s(list.room_status) +
                        "\n                "
                    ),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "border-double border-4 border-light-blue-500",
                  staticStyle: {
                    width: "100%",
                    margin: "10px auto",
                    height: "300px",
                  },
                },
                [
                  _c(
                    "slider",
                    {
                      ref: "slider",
                      refInFor: true,
                      attrs: { options: _vm.options },
                    },
                    [
                      _vm._l(_vm.roomPhoto, function (item, index) {
                        return _c("slideritem", { key: index }, [
                          _c("img", {
                            staticClass: "h-70 w-full  relative",
                            attrs: {
                              src: "/images/Properties/" + item.photo_name,
                              alt: "Avatar",
                            },
                          }),
                        ])
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { attrs: { slot: "loading" }, slot: "loading" },
                        [_vm._v("loading...")]
                      ),
                    ],
                    2
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "flex mt-2 item-center" }, [
                _c("p", { staticClass: "mt-2 text-sm text-gray-600 " }, [
                  _c("span", { staticClass: "font-black" }, [
                    _vm._v(" Room Type: "),
                  ]),
                  _vm._v("  " + _vm._s(list.room_name)),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex mt-2 item-center" }, [
                _c("p", { staticClass: "mt-2 text-sm text-gray-600 " }, [
                  _c("span", { staticClass: "font-black" }, [
                    _vm._v(" Room Type: "),
                  ]),
                  _vm._v("  " + _vm._s(list.room_type)),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex mt-2 item-center" }, [
                _c("p", { staticClass: "mt-2 text-sm text-gray-600 " }, [
                  _c("span", { staticClass: "font-black" }, [
                    _vm._v(" Room Description:"),
                  ]),
                  _vm._v(" " + _vm._s(list.room_description)),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex item-center" }, [
                _c("p", { staticClass: "mt-2 text-sm text-gray-600" }, [
                  _c("span", { staticClass: "font-black" }, [
                    _vm._v("Room Furnishing: "),
                  ]),
                  _vm._v(_vm._s(list.room_furnishing)),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex item-center" }, [
                _c("p", { staticClass: "mt-2 text-sm text-gray-600" }, [
                  _c("span", { staticClass: "font-black" }, [
                    _vm._v(" Room Max. Tenant: "),
                  ]),
                  _vm._v(_vm._s(list.number_of_tenant)),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex item-center" }, [
                _c("p", { staticClass: "mt-2 text-sm text-gray-600" }, [
                  _c("span", { staticClass: "font-black" }, [
                    _vm._v(" Room Monthly Rent: RM "),
                  ]),
                  _vm._v(_vm._s(list.monthly_rent)),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex item-center" }, [
                _c("p", { staticClass: "mt-2 text-sm text-gray-600" }, [
                  _c("span", { staticClass: "font-black" }, [
                    _vm._v(" Booking Key: "),
                  ]),
                  _vm._v(_vm._s(list.booking_key)),
                ]),
              ]),
            ]),
          ]
        )
      }),
      _vm._v(" "),
      _vm.toggleModal
        ? _c("EditRoomModal", {
            attrs: {
              form: _vm.form,
              roomPhoto: _vm.roomPhoto,
              property_id: parseInt(_vm.property_id),
              room_id: parseInt(_vm.room_id),
            },
            on: { refreshData: _vm.getRoom, closeModal: _vm.closeEditModal },
          })
        : _vm._e(),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ManagePropertyList/EditRoom_Modal.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/EditRoom_Modal.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditRoom_Modal_vue_vue_type_template_id_7d786a22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditRoom_Modal.vue?vue&type=template&id=7d786a22& */ "./resources/js/components/ManagePropertyList/EditRoom_Modal.vue?vue&type=template&id=7d786a22&");
/* harmony import */ var _EditRoom_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditRoom_Modal.vue?vue&type=script&lang=js& */ "./resources/js/components/ManagePropertyList/EditRoom_Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditRoom_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditRoom_Modal_vue_vue_type_template_id_7d786a22___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditRoom_Modal_vue_vue_type_template_id_7d786a22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManagePropertyList/EditRoom_Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/EditRoom_Modal.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/EditRoom_Modal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRoom_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditRoom_Modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/EditRoom_Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRoom_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/EditRoom_Modal.vue?vue&type=template&id=7d786a22&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/EditRoom_Modal.vue?vue&type=template&id=7d786a22& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRoom_Modal_vue_vue_type_template_id_7d786a22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditRoom_Modal.vue?vue&type=template&id=7d786a22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/EditRoom_Modal.vue?vue&type=template&id=7d786a22&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRoom_Modal_vue_vue_type_template_id_7d786a22___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRoom_Modal_vue_vue_type_template_id_7d786a22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/components/ManagePropertyList/Room_Landlord.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/Room_Landlord.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Room_Landlord_vue_vue_type_template_id_0ddf8078___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Room_Landlord.vue?vue&type=template&id=0ddf8078& */ "./resources/js/components/ManagePropertyList/Room_Landlord.vue?vue&type=template&id=0ddf8078&");
/* harmony import */ var _Room_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Room_Landlord.vue?vue&type=script&lang=js& */ "./resources/js/components/ManagePropertyList/Room_Landlord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Room_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Room_Landlord_vue_vue_type_template_id_0ddf8078___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Room_Landlord_vue_vue_type_template_id_0ddf8078___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManagePropertyList/Room_Landlord.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/Room_Landlord.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/Room_Landlord.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Room_Landlord.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/Room_Landlord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/Room_Landlord.vue?vue&type=template&id=0ddf8078&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/Room_Landlord.vue?vue&type=template&id=0ddf8078& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_Landlord_vue_vue_type_template_id_0ddf8078___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Room_Landlord.vue?vue&type=template&id=0ddf8078& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/Room_Landlord.vue?vue&type=template&id=0ddf8078&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_Landlord_vue_vue_type_template_id_0ddf8078___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_Landlord_vue_vue_type_template_id_0ddf8078___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);