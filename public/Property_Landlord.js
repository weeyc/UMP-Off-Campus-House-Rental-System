(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Property_Landlord"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/AddRoom_Modal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/AddRoom_Modal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageUploader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageUploader.vue */ "./resources/js/components/ManagePropertyList/ImageUploader.vue");
/* harmony import */ var vue_concise_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-concise-slider */ "./node_modules/vue-concise-slider/dist/module.js");
/* harmony import */ var vue_concise_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_concise_slider__WEBPACK_IMPORTED_MODULE_1__);
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
    property_id: Number,
    landlord_id: Number,
    role: Number
  },
  components: {
    ImageUploader: _ImageUploader_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    slider: vue_concise_slider__WEBPACK_IMPORTED_MODULE_1__["slider"],
    slideritem: vue_concise_slider__WEBPACK_IMPORTED_MODULE_1__["slideritem"]
  },
  data: function data() {
    return {
      errors: new Errors(),
      type: 'password',
      btnText: 'Show Password',
      isVisible: false,
      modalBackground: '',
      activePhase: 1,
      replace: false,
      form: {
        listingName: '',
        roomName: '',
        images: [],
        //imageLabel: [],
        description: '',
        furnishing: [],
        room_type: '',
        penalty_fees: '',
        number_tenants: '',
        monthly_rent: '',
        prop_id: this.property_id,
        land_id: this.landlord_id
      }
    };
  },
  methods: {
    goToNext: function goToNext(pg) {
      this.activePhase = pg;
      var section1 = this.$refs.section1;
      var section2 = this.$refs.section2;
      var section3 = this.$refs.section3;

      if (this.activePhase == 1) {
        section1.classList.remove("hidden");
        section2.classList.add("hidden");
        section3.classList.add("hidden");
      } else if (this.activePhase == 2) {
        if (this.form.listingName == '' || this.form.monthly_rent == '' || this.form.number_tenants == '' || this.form.penalty_fees == '' || this.form.room_type == '' || this.form.roomName == '') {
          this.$toaster.error('Please fill all  the required fields');
        } else {
          section1.classList.add("hidden");
          section2.classList.remove("hidden");
          section3.classList.add("hidden");
        }
      } else if (this.activePhase == 3) {
        if (this.form.images.length <= 0) {
          this.$toaster.error('Please  upload some picture');
        } else {
          section1.classList.add("hidden");
          section2.classList.add("hidden");
          section3.classList.remove("hidden");
        }
      }
    },
    getImages: function getImages(event, event2) {
      this.form.images = event; //this.form.imageLabel = event2
    },
    submitRoom: function submitRoom() {
      var _this = this;

      axios.post('/api/create_room', this.form).then(function () {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Room added successfully!',
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
    },
    hideElement: function hideElement() {
      var section1 = this.$refs.section1;
      var checdiv = this.$refs.chec;

      if (!flag) {
        notification.classList.add("translate-x-full");
        notification.classList.remove("translate-x-0");
      }
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
    this.getRole(); //this.form.furnishing = this.form.furnishing.split(',');

    document.querySelector(".number").addEventListener("keypress", function (evt) {
      if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    });
    document.querySelector(".number2").addEventListener("keypress", function (evt) {
      if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    });
    document.querySelector(".number3").addEventListener("keypress", function (evt) {
      if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    });
  }
});

/***/ }),

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    propertyPhoto: Array,
    role: Number
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
      if (pg == 1) {
        this.activePhase = pg;
      } else if (pg == 2) {
        if (this.form.propertyName == '' || this.form.address == '' || this.form.postcode == '' || this.form.gender_preferences == '' || this.form.campus == '' || this.form.toilet_num == '') {
          this.$toaster.error('Please fill all  the required fields');
        } else {
          this.activePhase = pg;
        }
      } else if (pg == 3) {
        if (this.replace == true) {
          if (this.form.images.length <= 0 || this.form.imageLabel.length <= 0) {
            this.$toaster.error('Please upload and label the picture');
          } else {
            this.activePhase = pg;
          }
        } else {
          this.activePhase = pg;
        }

        ;
      } else if (pg == 4) {
        this.activePhase = pg;
      }
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
    },
    getRole: function getRole() {
      if (this.role == 1) {
        this.modalBackground = 'bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400';
      } else if (this.role == 2) {
        this.modalBackground = 'bg-gradient-to-r from-sky-400 to-cyan-300';
      } else {
        this.modalBackground = 'bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400';
      }
    }
  },
  mounted: function mounted() {
    this.getRole();
    this.form.furnishing = this.form.furnishing.split(',');
    document.querySelector(".number").addEventListener("keypress", function (evt) {
      if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/Property_Landlord.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/Property_Landlord.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_concise_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-concise-slider */ "./node_modules/vue-concise-slider/dist/module.js");
/* harmony import */ var vue_concise_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_concise_slider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GoogleMap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoogleMap.vue */ "./resources/js/components/ManagePropertyList/GoogleMap.vue");
/* harmony import */ var _EditProperty_Modal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditProperty_Modal.vue */ "./resources/js/components/ManagePropertyList/EditProperty_Modal.vue");
/* harmony import */ var _AddRoom_Modal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddRoom_Modal.vue */ "./resources/js/components/ManagePropertyList/AddRoom_Modal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    GoogleMap: _GoogleMap_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    EditModal: _EditProperty_Modal_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AddRoomModal: _AddRoom_Modal_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    slider: vue_concise_slider__WEBPACK_IMPORTED_MODULE_0__["slider"],
    slideritem: vue_concise_slider__WEBPACK_IMPORTED_MODULE_0__["slideritem"] // VueperSlides,
    // VueperSlide

  },
  props: {
    role: Number
  },
  data: function data() {
    return {
      toggleModal: false,
      toggleAddModal: false,
      isReady: false,
      property: [],
      landlord_id: '',
      rooms: [],
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
        gender_preferences: '',
        toilet_num: '',
        furnishing: '',
        status: '',
        photo: []
      },
      margin: '',
      object: '',
      route: ''
    };
  },
  methods: {
    getProperty: function getProperty() {
      var _this = this;

      axios.get('/api/get_property/' + this.property_id + '?imej=1').then(function (response) {
        _this.property = response.data.data;
        _this.propertyPhoto = response.data.data[0].photo;
        _this.landlord_id = response.data.data[0].landlord_id;
        console.warn(_this.property.data);
      });
    },
    getRooms: function getRooms() {
      var _this2 = this;

      axios.get('/api/get_rooms/' + this.property_id).then(function (response) {
        _this2.rooms = response.data.data;
        _this2.isReady = true;
        console.warn(_this2.rooms.data);
      });
    },
    closeEditModal: function closeEditModal() {
      this.toggleModal = !this.toggleModal;
    },
    closeAddModal: function closeAddModal() {
      this.toggleAddModal = !this.toggleAddModal;
    },
    clickEdit: function clickEdit(house) {
      this.form.id = house.id, this.form.landlord_id = house.landlord_id, this.form.name = house.name, this.form.lat = house.lat, this.form.log = house.log, this.form.address = house.address, this.form.postcode = house.postcode, this.form.des = house.des, this.form.campus = house.campus, this.form.furnishing = house.furnishing, this.form.status = house.status, this.form.photo = house.photo;
      this.form.gender_preferences = house.gender_preferences;
      this.form.toilet_num = house.toilet_num;
    },
    getRole: function getRole() {
      if (this.role == 1) {
        this.object = '#dd7755';
      } else if (this.role == 2) {
        this.margin = 'mt-5 mb-5 mb-10';
        this.object = '#4491ee';
        this.route = 'room_landlord';
      } else {
        this.object = '#dc4ae8';
        this.route = 'room_staff';
      }
    }
  },
  mounted: function mounted() {
    this.getProperty();
    this.getRooms();
    this.getRole();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/AddRoom_Modal.vue?vue&type=template&id=756d84be&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/AddRoom_Modal.vue?vue&type=template&id=756d84be& ***!
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
                _vm._v("Add Room"),
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
                ref: "section1",
                staticClass:
                  " w-full p-6 mx-auto h-full bg-transparent rounded-md shadow-md ",
              },
              [
                _c(
                  "h2",
                  {
                    staticClass:
                      " font-bold text-gray-700 capitalize text-center text-xl",
                  },
                  [_vm._v("Room Listing")]
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
                              value: _vm.form.listingName,
                              expression: "form.listingName",
                            },
                          ],
                          staticClass:
                            "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring",
                          attrs: {
                            type: "text",
                            placeholder: "Single room at Gambang",
                            required: "",
                          },
                          domProps: { value: _vm.form.listingName },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "listingName",
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
                              value: _vm.form.roomName,
                              expression: "form.roomName",
                            },
                          ],
                          staticClass:
                            "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring",
                          attrs: {
                            type: "text",
                            placeholder: "Room 1",
                            required: "",
                          },
                          domProps: { value: _vm.form.roomName },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "roomName",
                                $event.target.value
                              )
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
                              value: _vm.form.number_tenants,
                              expression: "form.number_tenants",
                            },
                          ],
                          staticClass:
                            "number block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring",
                          attrs: {
                            type: "number",
                            placeholder: "2",
                            min: "1",
                            max: "10",
                            required: "",
                          },
                          domProps: { value: _vm.form.number_tenants },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "number_tenants",
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
                            "number2 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring",
                          attrs: {
                            type: "number",
                            step: "any",
                            min: "0",
                            max: "5000",
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
                            "number3 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring",
                          attrs: {
                            type: "number",
                            step: "any",
                            min: "0",
                            max: "5000",
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
            _c(
              "section",
              {
                ref: "section2",
                staticClass:
                  " w-full p-6 bg-transparent rounded-md shadow-md h-full hidden",
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
                  [_vm._v("-Room Images-")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c(
                      "keep-alive",
                      [
                        _c("ImageUploader", {
                          attrs: { hideLabel: true, editImage: false },
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
            ),
            _vm._v(" "),
            _c(
              "section",
              {
                ref: "section3",
                staticClass:
                  "w-full p-6  bg-transparent rounded-md shadow-md h-full hidden",
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
                      staticClass: "grid grid-cols-3 gap-4 mt-4 sm:grid-cols-2",
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
                                ? _vm._i(_vm.form.furnishing, "Wardrobes") > -1
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
                          _c("span", { staticClass: "ml-2" }, [_vm._v("Fan")]),
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
                            attrs: { type: "checkbox", value: "Study Table" },
                            domProps: {
                              checked: Array.isArray(_vm.form.furnishing)
                                ? _vm._i(_vm.form.furnishing, "Study Table") >
                                  -1
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
                          _c("span", { staticClass: "ml-2" }, [_vm._v("A/C")]),
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
                          _vm.$set(_vm.form, "description", $event.target.value)
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
                          "px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none ",
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.submitRoom.apply(null, arguments)
                          },
                        },
                      },
                      [_vm._v("Submit List")]
                    ),
                  ]),
                ]),
              ]
            ),
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
                    "bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg text-white mr-3 close-modal mt-2 ",
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
            {
              staticClass:
                "border-b px-4 py-2 flex justify-between items-center",
            },
            [
              _c("h3", { staticClass: "font-black text-2xl" }, [
                _vm._v("Edit Property"),
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
                  " w-full  p-6 mx-auto bg-transparent rounded-md shadow-md",
                attrs: { id: "propertyDetail" },
              },
              [
                _c(
                  "h2",
                  {
                    staticClass:
                      " font-bold text-gray-700 capitalize text-center text-xl",
                  },
                  [_vm._v("Edit Property")]
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
                              value: _vm.form.name,
                              expression: "form.name",
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
                      " max-w-4xl p-6 mx-auto bg-transparent rounded-md shadow-md ",
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
                              "px-6 py-2 justify-end mr-5 leading-5 text-white transition-colors\n                      duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mb-2",
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
                                  _vm._l(
                                    _vm.propertyPhoto,
                                    function (item, index) {
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
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              " absolute bottom-0 text-xs text-black pt-5 bg-transparent w-full ",
                                          },
                                          [_vm._v(_vm._s(item.photo_label))]
                                        ),
                                      ])
                                    }
                                  ),
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
                                attrs: { editImage: true },
                                on: { getImage: _vm.getImages },
                                model: {
                                  value: _vm.form.photo,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "photo", $$v)
                                  },
                                  expression: "form.photo",
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
                      "max-w-4xl p-6 mx-auto bg-transparent rounded-md shadow-md",
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
                      "max-w-4xl p-6 mx-auto bg-transparent rounded-md shadow-md ",
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
                          _c(
                            "keep-alive",
                            [
                              _c("GoogleMap", {
                                attrs: { registered: false },
                                on: { getCoordinate: _vm.getCoordinates },
                              }),
                            ],
                            1
                          ),
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
                              "px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600",
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.editProperty.apply(null, arguments)
                              },
                            },
                          },
                          [_vm._v("Update Property")]
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
            { staticClass: "flex justify-end items-center w-100 border-t p-1" },
            [
              _c(
                "button",
                {
                  staticClass:
                    "bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white  close-modal mr-3",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/Property_Landlord.vue?vue&type=template&id=3f5b2884&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/Property_Landlord.vue?vue&type=template&id=3f5b2884& ***!
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
        "max-w-5xl pt-5 pb-8 pl-8 pr-8   mx-auto  bg-gray-200 rounded-md ",
    },
    [
      _vm.role === 2
        ? _c(
            "div",
            _vm._l(_vm.property, function (house) {
              return _c(
                "div",
                { key: house.id, staticClass: "flex justify-end items-center" },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        " bg-teal-500 shadow-lg hover:bg-teal-500 text-xs text-white px-4 py-3 rounded-md mb-2 mr-auto flex items-center",
                      on: {
                        click: function ($event) {
                          return _vm.$router.go(-1)
                        },
                      },
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "h-5 w-5 mr-2 fill-current",
                          staticStyle: {
                            "enable-background": "new -49 141 512 512",
                          },
                          attrs: {
                            version: "1.1",
                            id: "Layer_1",
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink",
                            x: "0px",
                            y: "0px",
                            viewBox: "-49 141 512 512",
                            "xml:space": "preserve",
                          },
                        },
                        [
                          _c("path", {
                            attrs: {
                              id: "XMLID_10_",
                              d: "M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z",
                            },
                          }),
                        ]
                      ),
                      _vm._v("\n                  Back\n              "),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        " flex items-center bg-blue-600 shadow-lg hover:bg-blue-700 text-xs text-white px-4 py-3 rounded-md mb-2",
                      on: {
                        click: function ($event) {
                          _vm.clickEdit(house)
                          _vm.toggleModal = !_vm.toggleModal
                        },
                      },
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "bi bi-pencil-square mr-1",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "14",
                            height: "14",
                            fill: "currentColor",
                            viewBox: "0 0 16 16",
                          },
                        },
                        [
                          _c("path", {
                            attrs: {
                              d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z",
                            },
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z",
                            },
                          }),
                        ]
                      ),
                      _vm._v("\n               Edit Property\n          "),
                    ]
                  ),
                ]
              )
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.isReady == true
        ? _c(
            "div",
            _vm._l(_vm.property, function (house) {
              return _c(
                "div",
                {
                  key: house.id,
                  staticClass:
                    "overflow-hidden bg-white rounded-lg shadow-lg mt-3 p-8",
                },
                [
                  _c(
                    "div",
                    { staticClass: "w-full p-4 md:p-4" },
                    [
                      _c(
                        "div",
                        { staticClass: "flex justify-between item-center" },
                        [
                          _c(
                            "h1",
                            {
                              staticClass:
                                "text-2xl font-bold text-gray-800 dark:text-white",
                            },
                            [_vm._v("Property Name: " + _vm._s(house.name))]
                          ),
                          _vm._v(" "),
                          house.status == "verified"
                            ? _c(
                                "div",
                                {
                                  staticClass:
                                    "capitalize px-3 py-2 text-xs font-bold text-white  flex items-center  bg-green-500 rounded  hover:text-white ",
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass: "bi bi-check-circle-fill",
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        fill: "currentColor",
                                        viewBox: "0 0 16 16",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z",
                                        },
                                      }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "mx-1 text-sm sm:text-base",
                                    },
                                    [_vm._v(_vm._s(house.status))]
                                  ),
                                ]
                              )
                            : _vm._e(),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "border-double border-4 border-light-blue-500",
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
                              _vm._l(_vm.propertyPhoto, function (item, index) {
                                return _c("slideritem", { key: index }, [
                                  _c("img", {
                                    staticClass: "h-70 w-full  relative",
                                    attrs: {
                                      src:
                                        "/images/Properties/" + item.photo_name,
                                      alt: "Avatar",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        " absolute bottom-0 text-xs text-black pt-5 bg-gray-200 w-full ",
                                    },
                                    [_vm._v(_vm._s(item.photo_label))]
                                  ),
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
                      _c("p", { staticClass: "mt-2 text-sm text-gray-600 " }, [
                        _c("span", { staticClass: "font-black" }, [
                          _vm._v(" Address: "),
                        ]),
                        _vm._v("  " + _vm._s(house.address)),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex mt-2 item-center" }, [
                        _c(
                          "p",
                          { staticClass: "mt-2 text-sm text-gray-600 " },
                          [
                            _c("span", { staticClass: "font-black" }, [
                              _vm._v(" Description:"),
                            ]),
                            _vm._v(" " + _vm._s(house.des)),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex item-center" }, [
                        _c("p", { staticClass: "mt-2 text-sm text-gray-600" }, [
                          _c("span", { staticClass: "font-black" }, [
                            _vm._v(" Furnishing: "),
                          ]),
                          _vm._v(_vm._s(house.furnishing)),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex item-center" }, [
                        _c("p", { staticClass: "mt-2 text-sm text-gray-600" }, [
                          _c("span", { staticClass: "font-black" }, [
                            _vm._v(" No. of Toilet: "),
                          ]),
                          _vm._v(_vm._s(house.toilet_num)),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex item-center" }, [
                        _c("p", { staticClass: "mt-2 text-sm text-gray-600" }, [
                          _c("span", { staticClass: "font-black" }, [
                            _vm._v(" Gender Preferences: "),
                          ]),
                          _vm._v(_vm._s(house.gender_preferences)),
                        ]),
                      ]),
                      _vm._v(" "),
                      _vm._m(0, true),
                      _vm._v(" "),
                      _c("GoogleMap", {
                        attrs: {
                          latitude: parseFloat(house.lat),
                          logitude: parseFloat(house.log),
                          registered: true,
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "flex item-center mt-10  justify-between w-full p-6 items-center",
                        },
                        [
                          _vm._m(1, true),
                          _vm._v(" "),
                          _vm.role === 2
                            ? _c(
                                "div",
                                {
                                  staticClass: "flex justify-end items-center",
                                },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        " bg-blue-600 shadow-lg hover:bg-blue-700 text-xs text-white px-5 py-3 rounded-md",
                                      on: {
                                        click: function ($event) {
                                          _vm.toggleAddModal =
                                            !_vm.toggleAddModal
                                        },
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                          + Add Room\n                      "
                                      ),
                                    ]
                                  ),
                                ]
                              )
                            : _vm._e(),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  !_vm.rooms.length
                    ? _c("div", [
                        _c(
                          "div",
                          {
                            staticClass:
                              "bg-blue-200 border-yellow-600 text-gray-600  p-10 mt-3 ",
                            attrs: { role: "alert" },
                          },
                          [
                            _c("center", [
                              _c("p", { staticClass: "font-bold text-lg" }, [
                                _vm._v("No room is added yet"),
                              ]),
                            ]),
                          ],
                          1
                        ),
                      ])
                    : _c(
                        "div",
                        _vm._l(_vm.rooms, function (room) {
                          return _c(
                            "div",
                            {
                              key: room.id,
                              staticClass: "flex justify-start  ",
                            },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass:
                                    "flex justify-center w-full px-8 py-4 overflow-hidden bg-blue-100 rounded-lg shadow-lg mt-5 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200 hover:bg-blue-400 hover:shadow-2xl",
                                  attrs: {
                                    to: {
                                      name: _vm.route,
                                      params: { room_id: room.id },
                                    },
                                  },
                                },
                                [
                                  room.photo_room != null
                                    ? _c(
                                        "div",
                                        { staticClass: "w-1/3 bg-cover" },
                                        [
                                          _c("img", {
                                            staticClass:
                                              "h-48 w-full object-cover",
                                            attrs: {
                                              src:
                                                "/images/Properties/" +
                                                room.photo_room[0].photo_name,
                                            },
                                          }),
                                        ]
                                      )
                                    : _c(
                                        "div",
                                        { staticClass: "w-1/3 bg-cover" },
                                        [
                                          _c("img", {
                                            staticClass:
                                              "h-48 w-full object-cover",
                                            attrs: { alt: "Avatar" },
                                          }),
                                        ]
                                      ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "w-2/3 p-4 md:p-4" },
                                    [
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
                                            [
                                              _vm._v(
                                                " " + _vm._s(room.listing_name)
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "h1",
                                            {
                                              staticClass:
                                                "text-2xl font-bold text-yellow-800 dark:text-white",
                                            },
                                            [_vm._v(_vm._s(room.room_status))]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "mt-2 text-sm text-gray-600 dark:text-gray-400",
                                        },
                                        [
                                          _vm._v(
                                            "Room Name " +
                                              _vm._s(room.room_name)
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "flex mt-2 item-center",
                                        },
                                        [
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "mt-2 text-sm text-gray-600 dark:text-gray-400",
                                            },
                                            [
                                              _vm._v(
                                                "Room Type: " +
                                                  _vm._s(room.room_type) +
                                                  "Room Type: " +
                                                  _vm._s(room.room_type)
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "flex mt-2 item-center",
                                        },
                                        [
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "mt-2 text-sm text-gray-600 dark:text-gray-400",
                                            },
                                            [
                                              _vm._v(
                                                "Monthly Rent: RM " +
                                                  _vm._s(room.monthly_rent)
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
                          )
                        }),
                        0
                      ),
                ]
              )
            }),
            0
          )
        : _c(
            "div",
            [
              _c("loader", {
                attrs: {
                  object: [_vm.object],
                  color1: "#e3851c",
                  color2: "#e82dda",
                  size: "8",
                  speed: "1.3",
                  bg: "#1e2337",
                  objectbg: "#ff2d2d",
                  opacity: "90",
                  disableScrolling: "true",
                  name: "dots",
                },
              }),
            ],
            1
          ),
      _vm._v(" "),
      _vm.toggleModal
        ? _c("EditModal", {
            attrs: {
              form: _vm.form,
              propertyPhoto: _vm.propertyPhoto,
              role: _vm.role,
              property_id: parseInt(_vm.property_id),
            },
            on: {
              refreshData: _vm.getProperty,
              closeModal: _vm.closeEditModal,
            },
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.toggleAddModal
        ? _c("AddRoomModal", {
            attrs: {
              property_id: parseInt(_vm.property_id),
              landlord_id: parseInt(_vm.landlord_id),
              role: _vm.role,
            },
            on: { refreshData: _vm.getRooms, closeModal: _vm.closeAddModal },
          })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex item-center" }, [
      _c("p", { staticClass: "mt-2 text-sm text-gray-600" }, [
        _c("span", { staticClass: "font-black" }, [_vm._v(" Location: ")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      {
        staticClass:
          "mt-2 text-sm text-gray-600 flex justify-start items-center",
      },
      [_c("span", { staticClass: "font-black" }, [_vm._v(" Rooms Listing: ")])]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ManagePropertyList/AddRoom_Modal.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/AddRoom_Modal.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddRoom_Modal_vue_vue_type_template_id_756d84be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddRoom_Modal.vue?vue&type=template&id=756d84be& */ "./resources/js/components/ManagePropertyList/AddRoom_Modal.vue?vue&type=template&id=756d84be&");
/* harmony import */ var _AddRoom_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddRoom_Modal.vue?vue&type=script&lang=js& */ "./resources/js/components/ManagePropertyList/AddRoom_Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddRoom_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddRoom_Modal_vue_vue_type_template_id_756d84be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddRoom_Modal_vue_vue_type_template_id_756d84be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManagePropertyList/AddRoom_Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/AddRoom_Modal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/AddRoom_Modal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRoom_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddRoom_Modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/AddRoom_Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRoom_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/AddRoom_Modal.vue?vue&type=template&id=756d84be&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/AddRoom_Modal.vue?vue&type=template&id=756d84be& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRoom_Modal_vue_vue_type_template_id_756d84be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddRoom_Modal.vue?vue&type=template&id=756d84be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/AddRoom_Modal.vue?vue&type=template&id=756d84be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRoom_Modal_vue_vue_type_template_id_756d84be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRoom_Modal_vue_vue_type_template_id_756d84be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/components/ManagePropertyList/Property_Landlord.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/Property_Landlord.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Property_Landlord_vue_vue_type_template_id_3f5b2884___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Property_Landlord.vue?vue&type=template&id=3f5b2884& */ "./resources/js/components/ManagePropertyList/Property_Landlord.vue?vue&type=template&id=3f5b2884&");
/* harmony import */ var _Property_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Property_Landlord.vue?vue&type=script&lang=js& */ "./resources/js/components/ManagePropertyList/Property_Landlord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Property_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Property_Landlord_vue_vue_type_template_id_3f5b2884___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Property_Landlord_vue_vue_type_template_id_3f5b2884___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManagePropertyList/Property_Landlord.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/Property_Landlord.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/Property_Landlord.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Property_Landlord.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/Property_Landlord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/Property_Landlord.vue?vue&type=template&id=3f5b2884&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/Property_Landlord.vue?vue&type=template&id=3f5b2884& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_Landlord_vue_vue_type_template_id_3f5b2884___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Property_Landlord.vue?vue&type=template&id=3f5b2884& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/Property_Landlord.vue?vue&type=template&id=3f5b2884&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_Landlord_vue_vue_type_template_id_3f5b2884___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_Landlord_vue_vue_type_template_id_3f5b2884___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);