(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["View_Room_List"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/Booking_Modal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/Booking_Modal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
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
    user_id: Number,
    roomDetails: Object
  },
  components: {},
  data: function data() {
    return {
      errors: new Errors(),
      //modalBackground: 'bg-gradient-to-bl from-yellow-200 via-yellow-300 to-yellow-400',
      isVisible: false,
      modalBackground: '',
      activePhase: 1,
      replace: false,
      student: [],
      product: {
        price: this.roomDetails.booking_fees,
        description: 'UOCA Booking Payment - Room ID: ' + this.roomDetails.id
      },
      form: {
        move_in_date: '',
        tenancy_period: '',
        name: '',
        phone_no: '',
        std_id: this.user_id,
        b_key: '',
        landlord_id: this.roomDetails.landlord_id,
        property_id: this.roomDetails.property_id,
        room_id: this.roomDetails.id,
        booking_fees: this.roomDetails.booking_fees,
        details: 'UOCA Booking Payment - Room ID: ' + this.roomDetails.id
      }
    };
  },
  methods: {
    goToNext: function goToNext(pg) {
      this.activePhase = pg;
    },
    getStudent: function getStudent() {
      var _this = this;

      axios.get('/api/get_profile/' + this.user_id + '/' + 1).then(function (response) {
        _this.student = response.data.data[0];
        _this.form.name = _this.student.name;
        _this.form.phone_no = _this.student.phone_no;
        console.warn(_this.userProfile.data);
      })["catch"](function (errors) {
        console.log(errors);
      });
    },
    submitBooking: function submitBooking() {
      var _this2 = this;

      axios.post('/api/create_booking', this.form).then(function () {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Payment successful!',
          showConfirmButton: false,
          timer: 1500
        });

        _this2.closeModal();

        setTimeout(function () {
          return _this2.$router.push({
            name: 'RentalRoom_student'
          });
        }, 1900);
      })["catch"](function (error) {
        return _this2.errors.record(error.response.data);
      });
    },
    closeModal: function closeModal() {
      this.$emit("closeModal");
    },
    checkKey: function checkKey() {
      if (this.form.b_key === this.roomDetails.booking_key) {
        this.goToNext(2);
        this.getPayPal();
      } else {
        this.$toaster.info('Booking key not matched!');
      }
    },
    setLoaded: function setLoaded(resp) {
      var _this3 = this;

      this.loaded = true;
      window.paypal.Buttons({
        createOrder: function createOrder(data, actions) {
          return actions.order.create({
            purchase_units: [{
              description: _this3.product.description,
              amount: {
                currency_code: "MYR",
                value: _this3.product.price
              }
            }]
          });
        },
        style: {
          size: 'medium',
          color: 'blue',
          shape: 'pill'
        },
        onApprove: function () {
          var _onApprove = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data, actions, resp) {
            var order;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _this3.loadding = true;
                    _context.next = 3;
                    return actions.order.capture();

                  case 3:
                    order = _context.sent;
                    _this3.data;
                    _this3.paidFor = true;
                    _this3.loadding = false;

                    _this3.submitBooking(); //this.$router.push({ name: "Dashboard"});


                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function onApprove(_x, _x2, _x3) {
            return _onApprove.apply(this, arguments);
          }

          return onApprove;
        }(),
        onError: function onError(err) {
          console.log(err);
        }
      }).render(this.$refs.paypal);
    },
    getPayPal: function getPayPal() {
      var script = document.createElement("script");
      script.src = "https://www.paypal.com/sdk/js?client-id=AQhqPjoZfsUmu5_yLMiug7vrWEBke2_EvnwUaVQRCYgpIxFj4DiWVkpCNPgOlwv3csIYXVFWa_cXEdZI&currency=MYR&disable-funding=credit,card";
      script.addEventListener("load", this.setLoaded);
      document.body.appendChild(script);
    }
  },
  watch: {
    activePhase: function activePhase(newValue, oldValue) {
      if (this.activePhase == 2) {}
    }
  },
  mounted: function mounted() {
    this.getStudent();
    document.getElementById("myDate").min = new Date().getFullYear() + "-" + parseInt(new Date().getMonth() + 1) + "-" + new Date().getDate();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/GoogleMap.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/GoogleMap.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AddGoogleMap",
  props: {
    latitude: Number,
    logitude: Number,
    registered: Boolean
  },
  data: function data() {
    return {
      center: {
        lat: 39.7837304,
        lng: -100.4458825
      },
      locationMarkers: [],
      locPlaces: [],
      existingPlace: null,
      lat: null,
      lng: null,
      drag: true,
      viewOnly: true,
      option: {}
    };
  },
  mounted: function mounted() {
    if (this.registered) {
      this.getRegisteredPosition();
      this.drag = false;
      this.viewOnly = false;
    } else {
      this.locateGeoLocation();
      this.drag = true;
      this.activate();
    }
  },
  methods: {
    updateCoordinates: function updateCoordinates(location) {
      this.lat = location.latLng.lat(), this.lng = location.latLng.lng(), this.$emit('getCoordinate', this.lat, this.lng);
    },
    getRegisteredPosition: function getRegisteredPosition() {
      if (this.latitude != null) {
        this.center = {
          lat: this.latitude,
          lng: this.logitude
        };
      }
    },
    activate: function activate() {
      var _this = this;

      setTimeout(function () {
        return _this.$emit('getCoordinate', _this.lat, _this.lng);
      }, 10000);
    },
    initMarker: function initMarker(loc) {
      this.existingPlace = loc;
    },
    addLocationMarker: function addLocationMarker() {
      if (this.existingPlace) {
        var marker = {
          lat: this.existingPlace.geometry.location.lat(),
          lng: this.existingPlace.geometry.location.lng()
        };
        this.locationMarkers.push({
          position: marker
        });
        this.locPlaces.push(this.existingPlace);
        this.center = marker;
        this.existingPlace = null;
      }
    },
    locateGeoLocation: function locateGeoLocation() {
      var _this2 = this;

      navigator.geolocation.getCurrentPosition(function (res) {
        _this2.center = {
          lat: res.coords.latitude,
          lng: res.coords.longitude
        };
        _this2.lat = res.coords.latitude, _this2.lng = res.coords.longitude;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/View_Room_List.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/View_Room_List.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_concise_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-concise-slider */ "./node_modules/vue-concise-slider/dist/module.js");
/* harmony import */ var vue_concise_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_concise_slider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GoogleMap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoogleMap.vue */ "./resources/js/components/ManagePropertyList/GoogleMap.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Booking_Modal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Booking_Modal.vue */ "./resources/js/components/ManagePropertyList/Booking_Modal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    slider: vue_concise_slider__WEBPACK_IMPORTED_MODULE_0__["slider"],
    slideritem: vue_concise_slider__WEBPACK_IMPORTED_MODULE_0__["slideritem"],
    BookingModal: _Booking_Modal_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    user_id: Number,
    role: Number
  },
  data: function data() {
    return {
      lists: [],
      recomendations: [],
      moment: moment__WEBPACK_IMPORTED_MODULE_2___default.a,
      campus: 'Gambang',
      options: {
        currentPage: 0
      },
      landlord_id: '',
      location: '',
      price: '',
      gender: '',
      room: '',
      minPrice: '',
      maxPrice: '',
      toggleModal: false,
      propertyPhoto: [],
      roomPhoto: [],
      room_id: this.$route.params.id,
      top_btn_style: 'p-3 rounded text-yellow-900 bg-yellow-100 hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out shadow-xl'
    };
  },
  methods: {
    getList: function getList() {
      var _this = this;

      axios.get('/api/get_room_list/' + this.room_id + '?imej=1&land=1').then(function (response) {
        _this.lists = response.data.data[0];
        _this.location = _this.lists.property.name;
        _this.price = _this.lists.monthly_rent;
        _this.room = _this.lists.room_type;
        _this.gender = _this.lists.property.gender_preferences;
        _this.landlord_id = _this.lists.landlord_id;
        _this.propertyPhoto = response.data.data[0].property.photo;
        _this.roomPhoto = response.data.data[0].photo_room;
        console.warn(_this.lists.data);
      });
    },
    toastBook: function toastBook() {
      this.$toaster.info('This Room is Rented Out');
    },
    getRecommendation: function getRecommendation() {
      var _this2 = this;

      if (this.price >= 0 && this.price <= 200) {
        this.minPrice = 0;
        this.maxPrice = 200;
      } else if (this.price >= 200 && this.price <= 500) {
        this.minPrice = 200;
        this.maxPrice = 500;
      } else if (this.price >= 500 && this.price <= 800) {
        this.minPrice = 500;
        this.maxPrice = 800;
      } else if (this.price >= 800 && this.price <= 2000) {
        this.minPrice = 800;
        this.maxPrice = 2000;
      }

      axios.get('/api/get_Recommendation/' + this.campus + '?land=1', {
        params: {
          location: this.location,
          minPrice: this.minPrice,
          maxPrice: this.maxPrice,
          gender: this.gender,
          room: this.room,
          room_id: this.room_id
        }
      }).then(function (response) {
        _this2.recomendations = response.data.data;
        console.warn(_this2.recomendations.data);
      });
    },
    closeModal: function closeModal() {
      this.toggleModal = !this.toggleModal;
    }
  },
  watch: {
    $route: function $route() {}
  },
  mounted: function mounted() {
    var _this3 = this;

    this.getList();
    setTimeout(function () {
      return _this3.getRecommendation();
    }, 2000);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/GoogleMap.vue?vue&type=style&index=0&id=329938f7&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/GoogleMap.vue?vue&type=style&index=0&id=329938f7&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".centerMarker[data-v-329938f7]{\n  position:absolute;\n  /*url of the marker*/\n  background:url(http://maps.gstatic.com/mapfiles/markers2/marker.png) no-repeat;\n  /*center the marker*/\n  top:50%;\n  left:50%;\n  z-index:1;\n  /*fix offset when needed*/\n  margin-left:-10px;\n  margin-top:-34px;\n  /*size of the image*/\n  height:34px;\n  width:20px;\n  cursor:pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/GoogleMap.vue?vue&type=style&index=0&id=329938f7&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/GoogleMap.vue?vue&type=style&index=0&id=329938f7&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./GoogleMap.vue?vue&type=style&index=0&id=329938f7&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/GoogleMap.vue?vue&type=style&index=0&id=329938f7&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/Booking_Modal.vue?vue&type=template&id=46522fbb&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/Booking_Modal.vue?vue&type=template&id=46522fbb& ***!
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
            "rounded max-h-full overflow-y-auto shadow-lg max-w-5xl p-6 mx-auto min-w-full bg-gradient-to-bl from-yellow-200 via-yellow-300 to-yellow-400",
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
                _vm._v("Booking Detail"),
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
          _c("div", { staticClass: "p-3 " }, [
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
                  " max-w-4xl p-6 mx-auto bg-gray-200 rounded-md shadow-md",
                attrs: { id: "bookingDetail" },
              },
              [
                _c(
                  "h2",
                  {
                    staticClass:
                      " font-bold text-gray-700 capitalize text-center text-xl",
                  },
                  [_vm._v("Enter details")]
                ),
                _vm._v(" "),
                _c(
                  "h2",
                  {
                    staticClass:
                      " font-bold text-gray-700 capitalize text-center text-base ",
                  },
                  [_vm._v("-Booking Details-")]
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
                          _vm._v("Move-In Date"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.move_in_date,
                              expression: "form.move_in_date",
                            },
                          ],
                          staticClass:
                            "cursor-pointer block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md focus:border-blue-500 focus:outline-none focus:ring",
                          attrs: {
                            type: "date",
                            id: "myDate",
                            name: "date",
                            min: "2015-10-28",
                            required: "",
                          },
                          domProps: { value: _vm.form.move_in_date },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "move_in_date",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("label", { staticClass: "text-gray-700" }, [
                          _vm._v("Tenancy Period"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.tenancy_period,
                                expression: "form.tenancy_period",
                              },
                            ],
                            staticClass:
                              "block w-full px-4 py-2 cursor-pointer mt-2 text-gray-700 bg-white border border-black rounded-md  focus:border-blue-500 focus:outline-none focus:ring",
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
                                  "tenancy_period",
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
                                attrs: { value: "3" },
                              },
                              [_vm._v(" 3 Months")]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              {
                                staticClass: "text-gray-700 text-lg",
                                attrs: { value: "4" },
                              },
                              [_vm._v(" 4 Months")]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              {
                                staticClass: "text-gray-700 text-lg",
                                attrs: { value: "5" },
                              },
                              [_vm._v(" 5 Months")]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              {
                                staticClass: "text-gray-700 text-lg",
                                attrs: { selected: "", value: "6" },
                              },
                              [_vm._v(" 6 Months")]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              {
                                staticClass: "text-gray-700 text-lg",
                                attrs: { value: "7" },
                              },
                              [_vm._v(" 7 Months")]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              {
                                staticClass: "text-gray-700 text-lg",
                                attrs: { value: "8" },
                              },
                              [_vm._v(" 8 Months")]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              {
                                staticClass: "text-gray-700 text-lg",
                                attrs: { value: "9" },
                              },
                              [_vm._v(" 9 Months")]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              {
                                staticClass: "text-gray-700 text-lg",
                                attrs: { value: "10" },
                              },
                              [_vm._v(" 10 Months")]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              {
                                staticClass: "text-gray-700 text-lg",
                                attrs: { value: "11" },
                              },
                              [_vm._v(" 11 Months")]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              {
                                staticClass: "text-gray-700 text-lg",
                                attrs: { value: "12" },
                              },
                              [_vm._v(" 12 Months")]
                            ),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("label", { staticClass: "text-gray-700" }, [
                          _vm._v("Student Name"),
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
                            "cursor-pointer block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md focus:border-blue-500 focus:outline-none focus:ring",
                          attrs: {
                            type: "text",
                            placeholder: "Alif Iskandar",
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
                          _vm._v("Phone Number"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.phone_no,
                              expression: "form.phone_no",
                            },
                          ],
                          staticClass:
                            "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring",
                          attrs: {
                            type: "text",
                            placeholder: "0109181410",
                            required: "",
                          },
                          domProps: { value: _vm.form.phone_no },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "phone_no",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("label", { staticClass: "text-gray-700" }, [
                          _vm._v("Booking Key (obtain from landlord)"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.b_key,
                              expression: "form.b_key",
                            },
                          ],
                          staticClass:
                            "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black rounded-md   focus:border-blue-500 focus:outline-none focus:ring",
                          attrs: {
                            type: "text",
                            placeholder: "eg. 242112",
                            minlength: "6",
                            maxlength: "6",
                            required: "",
                          },
                          domProps: { value: _vm.form.b_key },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "b_key", $event.target.value)
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
                            return _vm.checkKey.apply(null, arguments)
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
                  "div",
                  {
                    staticClass:
                      "mt-10 max-w-4xl p-6 mx-auto bg-transparent rounded-md shadow-inner",
                  },
                  [
                    _c(
                      "h2",
                      {
                        staticClass:
                          " font-bold text-gray-700 capitalize text-center text-xl",
                      },
                      [_vm._v("Booking Summary")]
                    ),
                    _vm._v(" "),
                    _c(
                      "h2",
                      {
                        staticClass:
                          " font-bold text-gray-700 capitalize text-center text-base mb-5",
                      },
                      [_vm._v("-Room Details-")]
                    ),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "div",
                        {
                          staticClass:
                            "bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-lg",
                        },
                        [
                          _c("img", {
                            staticClass: "h-48 w-full object-cover",
                            attrs: {
                              src:
                                "/images/Properties/" +
                                _vm.roomDetails.photo_room[0].photo_name,
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "m-2 text-justify text-sm" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "flex flex-wrap items-center -mt-8 pb-3 ",
                                },
                                [
                                  _c("img", {
                                    staticClass:
                                      "block h-8 w-8 rounded-full bg-white mt-1 mr-2 ml-3 border-2 border-white",
                                    attrs: {
                                      src:
                                        "/images/Profile/" +
                                        _vm.roomDetails.property.land
                                          .landlord_pic,
                                      alt: "Profile",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "block text-sm font-bold text-white bg-black bg-opacity-30",
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.roomDetails.property.land
                                            .landlord_name
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "text-right text-base font-bold text-yellow-700",
                                },
                                [
                                  _vm._v(
                                    "RM" +
                                      _vm._s(_vm.roomDetails.monthly_rent) +
                                      "/Months"
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "view_room_list",
                                      params: { id: _vm.roomDetails.id },
                                    },
                                    target: "_blank",
                                  },
                                },
                                [
                                  _c(
                                    "h2",
                                    {
                                      staticClass:
                                        " font-bold mb-5 mt-2 text-lg text-center hover:underline hover:text-blue-500",
                                    },
                                    [
                                      _vm._v(
                                        " " +
                                          _vm._s(_vm.roomDetails.listing_name)
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "text-base text-left text-gray-600 mb-5",
                                },
                                [
                                  _c("p", { staticClass: "mt-2 px-3" }, [
                                    _vm._v(
                                      _vm._s(_vm.roomDetails.property.name) +
                                        " | " +
                                        _vm._s(_vm.roomDetails.campus)
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "flex mt-2 px-3" }, [
                                    _c("p", { staticClass: "mt-2 " }, [
                                      _vm._v(
                                        _vm._s(_vm.roomDetails.room_type) +
                                          " | " +
                                          _vm._s(
                                            _vm.roomDetails.property
                                              .gender_preferences
                                          ) +
                                          " "
                                      ),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "flex mt-2  px-3" },
                                    [
                                      _c("p", { staticClass: "mt-2" }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm.roomDetails.property.furnishing
                                          ) +
                                            " | " +
                                            _vm._s(
                                              _vm.roomDetails.room_furnishing
                                            )
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("hr", {
                                staticClass: "border-gray-500  mt-5",
                              }),
                              _vm._v(" "),
                              _c(
                                "h2",
                                {
                                  staticClass:
                                    " font-bold mb-5 mt-2 text-lg text-center",
                                },
                                [_vm._v("Booking Summary")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "mx-5 my-5" }, [
                                _c(
                                  "table",
                                  { staticClass: " text-gray-600 w-full" },
                                  [
                                    _c("tr", [
                                      _c("td", { staticClass: "text-left " }, [
                                        _vm._v("Tenant Name"),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-right" }, [
                                        _vm._v(_vm._s(_vm.form.name)),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", { staticClass: "text-left " }, [
                                        _vm._v("Move-in Date"),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-right" }, [
                                        _vm._v(_vm._s(_vm.form.move_in_date)),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", { staticClass: "text-left " }, [
                                        _vm._v("Period Tenancy"),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-right" }, [
                                        _vm._v(
                                          _vm._s(_vm.form.tenancy_period) +
                                            " Months"
                                        ),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", { staticClass: "text-left " }, [
                                        _vm._v("Monthly Rental / Room"),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-right" }, [
                                        _vm._v(
                                          "RM " +
                                            _vm._s(_vm.roomDetails.monthly_rent)
                                        ),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", { staticClass: "text-left " }, [
                                        _vm._v("Overdue Penalty"),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-right" }, [
                                        _vm._v(
                                          "RM " +
                                            _vm._s(_vm.roomDetails.penalty_fees)
                                        ),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", { staticClass: "text-left " }, [
                                        _vm._v("Max Tenant / Room"),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-right" }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm.roomDetails.number_of_tenant
                                          )
                                        ),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _vm._m(0),
                                    _vm._v(" "),
                                    _c(
                                      "tr",
                                      {
                                        staticClass:
                                          "border-yellow-500 font-bold text-green-400 border-t-2 border-b-2  mt-5",
                                      },
                                      [
                                        _c(
                                          "td",
                                          { staticClass: "text-left " },
                                          [_vm._v("Booking Fees")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-right" },
                                          [
                                            _vm._v(
                                              "RM " +
                                                _vm._s(
                                                  _vm.roomDetails.booking_fees
                                                )
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(1),
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "mb-5" },
                                [
                                  _c("center", [
                                    _c("div", {
                                      ref: "paypal",
                                      staticClass: "mx-auto w-50",
                                    }),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ]
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
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticClass: "text-left " }, [_vm._v("Utilities")]),
      _vm._v(" "),
      _c("td", { staticClass: "text-right" }, [_vm._v("Included")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "border-2 border-blue-500 p-2 mt-5 text-gray-500" },
      [
        _c("div", { staticClass: "mt-2" }, [
          _vm._v(
            "\n                                    The booking fees counted as 1st month of rental\n                                "
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mt-2" }, [
          _vm._v(
            "\n                                    Monthly rental bills will be issues starting on 2nd months of rental\n                                "
          ),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/GoogleMap.vue?vue&type=template&id=329938f7&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/GoogleMap.vue?vue&type=template&id=329938f7&scoped=true& ***!
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
    [
      _c("div", { staticClass: "hidden" }, [
        _c("h2", [_vm._v("Vue Js Search and Add Marker")]),
        _vm._v(" "),
        _c(
          "label",
          [
            _c("gmap-autocomplete", { on: { place_changed: _vm.initMarker } }),
            _vm._v(" "),
            _c("button", { on: { click: _vm.addLocationMarker } }, [
              _vm._v("Add"),
            ]),
          ],
          1
        ),
        _vm._v(" "),
        _c("br"),
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "gmap-map",
        {
          staticStyle: { width: "100%", height: "250px" },
          attrs: { zoom: 16, center: _vm.center },
        },
        [
          _c("gmap-marker", {
            attrs: { position: _vm.center, draggable: _vm.drag },
            on: { drag: _vm.updateCoordinates },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/View_Room_List.vue?vue&type=template&id=4376cd04&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/View_Room_List.vue?vue&type=template&id=4376cd04& ***!
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
    [
      _c(
        "div",
        {
          staticClass:
            "max-w-6xl p-5 mx-auto mt-3 bg-gray-100 rounded-md mb-5 shadow-xl",
        },
        [
          _c("div", { staticClass: "bg-white rounded-md  shadow-xl" }, [
            _c("div", { staticClass: "mx-5 p-5" }, [
              _c("div", { staticClass: "flex justify-between item-center" }, [
                _c("h1", { staticClass: "text-2xl font-black text-gray-800" }, [
                  _vm._v(" " + _vm._s(_vm.lists.listing_name)),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "text-xl bg-yellow-500 px-5 py-1 rounded-md shadow-sm font-bold text-white",
                  },
                  [_vm._v(_vm._s(_vm.lists.room_status))]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex items-center" }, [
                _c(
                  "svg",
                  {
                    staticClass: "h-6 w-6 text-yellow-500",
                    attrs: {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      "stroke-width": "2",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                    },
                  },
                  [
                    _c("path", {
                      attrs: { stroke: "none", d: "M0 0h24v24H0z" },
                    }),
                    _vm._v(" "),
                    _c("line", {
                      attrs: { x1: "18", y1: "6", x2: "18", y2: "6.01" },
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: { d: "M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" },
                    }),
                    _vm._v(" "),
                    _c("polyline", {
                      attrs: {
                        points: "10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15",
                      },
                    }),
                    _vm._v(" "),
                    _c("line", {
                      attrs: { x1: "9", y1: "4", x2: "9", y2: "17" },
                    }),
                    _vm._v(" "),
                    _c("line", {
                      attrs: { x1: "15", y1: "15", x2: "15", y2: "20" },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "ml-2 font-bold " }, [
                  _vm._v(_vm._s(_vm.lists.property.name)),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex items-center" }, [
                _c(
                  "svg",
                  {
                    staticClass: "h-6 w-6 text-yellow-700",
                    attrs: {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      "stroke-width": "2",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                    },
                  },
                  [
                    _c("path", {
                      attrs: { stroke: "none", d: "M0 0h24v24H0z" },
                    }),
                    _vm._v(" "),
                    _c("line", {
                      attrs: { x1: "3", y1: "21", x2: "21", y2: "21" },
                    }),
                    _vm._v(" "),
                    _c("line", {
                      attrs: { x1: "3", y1: "10", x2: "21", y2: "10" },
                    }),
                    _vm._v(" "),
                    _c("polyline", { attrs: { points: "5 6 12 3 19 6" } }),
                    _vm._v(" "),
                    _c("line", {
                      attrs: { x1: "4", y1: "10", x2: "4", y2: "21" },
                    }),
                    _vm._v(" "),
                    _c("line", {
                      attrs: { x1: "20", y1: "10", x2: "20", y2: "21" },
                    }),
                    _vm._v(" "),
                    _c("line", {
                      attrs: { x1: "8", y1: "14", x2: "8", y2: "17" },
                    }),
                    _vm._v(" "),
                    _c("line", {
                      attrs: { x1: "12", y1: "14", x2: "12", y2: "17" },
                    }),
                    _vm._v(" "),
                    _c("line", {
                      attrs: { x1: "16", y1: "14", x2: "16", y2: "17" },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "ml-2 font-bold" }, [
                  _vm._v("   " + _vm._s(_vm.lists.campus)),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex items-center" }, [
                _c(
                  "svg",
                  {
                    staticClass: "h-6 w-6 text-yellow-700",
                    attrs: {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      "stroke-width": "2",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                    },
                  },
                  [
                    _c("path", {
                      attrs: { stroke: "none", d: "M0 0h24v24H0z" },
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6",
                      },
                    }),
                    _vm._v(" "),
                    _c("circle", { attrs: { cx: "7", cy: "10", r: "1" } }),
                  ]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "ml-2 font-bold" }, [
                  _vm._v(
                    "   " +
                      _vm._s(_vm.lists.room_type) +
                      " | Preferable " +
                      _vm._s(_vm.lists.property.gender_preferences)
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "flex items-center justify-center h-80 w-full overflow-hidden bg-gradient-to-b from-green-200 to-green-500",
                },
                [
                  _c(
                    "section",
                    {
                      staticClass: "flex items-stretch h-80 w-full text-white ",
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "relative items-center w-1/2 bg-gray-500 lg:flex",
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "border-double border-4 border-light-blue-500",
                              staticStyle: {
                                width: "100%",
                                margin: "10px auto",
                                height: "320px",
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
                                              " absolute bottom-0 text-xs text-black pt-5 bg-gray-200 w-full ",
                                          },
                                          [_vm._v(_vm._s(item.photo_label))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              " absolute top-0 text-base text-black pt-5 bg-gray-200 w-full ",
                                          },
                                          [_vm._v("House Photos:")]
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
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "relative items-center w-1/2 bg-gray-500 lg:flex",
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "border-double border-4 border-light-blue-500",
                              staticStyle: {
                                width: "100%",
                                margin: "10px auto",
                                height: "320px",
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
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            " absolute top-0 text-base text-black pt-5 bg-gray-200 w-full ",
                                        },
                                        [_vm._v("Room Photos:")]
                                      ),
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
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "max-w-6xl p-6 mx-auto mt-3  mb-5 bg-gray-100 rounded-md shadow-xl",
        },
        [
          _c("div", { staticClass: "body" }, [
            _c(
              "div",
              { staticClass: "flex flex-col lg:grid lg:gap-4 lg:grid-cols-3" },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "bg-white lg:order-1 lg:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0",
                  },
                  [
                    _c("div", { staticClass: "mx-5 my-5 " }, [
                      _c("div", { staticClass: "flex mt-2 item-center" }, [
                        _c("span", { staticClass: "text-2xl font-bold" }, [
                          _vm._v(
                            "RM" + _vm._s(_vm.lists.monthly_rent) + "/Months"
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex mt-2 item-center" }, [
                        _c(
                          "p",
                          { staticClass: "mt-2 text-base text-blue-500" },
                          [_vm._v(_vm._s(_vm.lists.property.address))]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("hr", { staticClass: "border-gray-500   mt-5" }),
                      _vm._v(" "),
                      _vm._m(0),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex mt-2 item-center" }, [
                        _c(
                          "p",
                          {
                            staticClass:
                              "mt-2 whitespace-pre-wrap text-base text-gray-600 dark:text-gray-400",
                          },
                          [_vm._v(_vm._s(_vm.lists.property.des))]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex mt-2 item-center" }, [
                        _c(
                          "p",
                          {
                            staticClass:
                              "mt-2 whitespace-pre-wrap text-base text-gray-600 dark:text-gray-400",
                          },
                          [_vm._v(_vm._s(_vm.lists.room_description))]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("hr", { staticClass: "border-gray-500   mt-5 " }),
                      _vm._v(" "),
                      _vm._m(1),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex mt-2 item-center" }, [
                        _c(
                          "p",
                          {
                            staticClass:
                              "mt-2 text-base text-gray-600 dark:text-gray-400",
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.lists.property.furnishing) +
                                "| " +
                                _vm._s(_vm.lists.room_furnishing)
                            ),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex mt-2 item-center" }, [
                        _c(
                          "p",
                          {
                            staticClass:
                              "mt-2 text-base text-gray-600 dark:text-gray-400",
                          },
                          [
                            _vm._v(
                              "Toilet: " + _vm._s(_vm.lists.property.toilet_num)
                            ),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex mt-2 item-center" }, [
                        _c(
                          "p",
                          {
                            staticClass:
                              "mt-2 text-sm text-gray-600 dark:text-gray-400",
                          },
                          [_vm._v(_vm._s(_vm.lists.number_of_tenant))]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex mt-2 item-center" }, [
                        _c(
                          "p",
                          {
                            staticClass:
                              "mt-2 text-sm text-gray-600 dark:text-gray-400",
                          },
                          [_vm._v(_vm._s(_vm.lists.penalty_fees))]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("hr", { staticClass: "border-gray-500 mt-5" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex mt-2 item-center" }, [
                        _c(
                          "p",
                          { staticClass: "mt-2 text-sm text-gray-600 " },
                          [
                            _vm._v(
                              "Posted at: " +
                                _vm._s(
                                  _vm
                                    .moment(_vm.lists.created_at)
                                    .format("DD-MM-YYYY HH:mm:ss")
                                )
                            ),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex item-center" }, [
                        _c(
                          "p",
                          { staticClass: "mt-2 text-sm text-gray-600 " },
                          [
                            _vm._v(
                              "Last updated at: " +
                                _vm._s(
                                  _vm
                                    .moment(_vm.lists.updated_at)
                                    .format("DD-MM-YYYY HH:mm:ss")
                                )
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "bg-white lg:order-1 lg:row-span-2 lg:col-span-1 rounded-lg shadow-xl pb-4 mb-5 lg:mb-0 ",
                  },
                  [
                    _c("div", { staticClass: "mx-5 my-5" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "w-full flex flex-row justify-center items-center",
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "card w-96 mx-autorounded-md shadow-xl hover:shadow rounded-sm bg-gradient-to-br from-cool-gray-900 to-blue-gray-600",
                            },
                            [
                              _c("img", {
                                staticClass:
                                  " h-28 w-28 object-cover mx-auto rounded-full -mt-14 border-2 border-blue-500  ",
                                attrs: {
                                  src:
                                    "/images/Profile/" +
                                    _vm.lists.property.land.landlord_pic,
                                  alt: "Avatar",
                                },
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "text-center mt-2 text-3xl cursor-pointer text-yellow-500 font-medium hover:underline hover:text-blue-500",
                                },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "std_profile_view",
                                          params: {
                                            role: 2,
                                            id: _vm.lists.landlord_id,
                                          },
                                        },
                                        target: "_blank",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.lists.property.land.landlord_name
                                        )
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
                                    "text-center font-normal text-lg text-white",
                                },
                                [_vm._v("Landlord")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "flex p-3" }, [
                                _c(
                                  "div",
                                  { staticClass: "w-full text-center" },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "w-full font-bold rounded-full",
                                        class: [_vm.top_btn_style],
                                      },
                                      [_vm._v("Chat Now")]
                                    ),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "relative mx-5 my-5" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "w-full flex flex-row justify-center items-center",
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "mb-40 card w-96 mx-autorounded-md shadow-xl hover:shadow rounded-sm",
                              staticStyle: { "background-color": "#2b2a33" },
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "mt-2 text-center text-xl text-yellow-500 font-bold",
                                },
                                [
                                  _vm._v(
                                    "\n                                Room Rental Details\n                            "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "mx-5 my-5" }, [
                                _c(
                                  "table",
                                  { staticClass: " text-white w-full" },
                                  [
                                    _c("tr", [
                                      _c("td", { staticClass: "text-left " }, [
                                        _vm._v("Monthly Rental / Room"),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-right" }, [
                                        _vm._v(
                                          "RM " + _vm._s(_vm.lists.monthly_rent)
                                        ),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", { staticClass: "text-left " }, [
                                        _vm._v("Overdue Penalty"),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-right" }, [
                                        _vm._v(
                                          "RM " + _vm._s(_vm.lists.penalty_fees)
                                        ),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", { staticClass: "text-left " }, [
                                        _vm._v("Max Tenant / Room"),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-right" }, [
                                        _vm._v(
                                          _vm._s(_vm.lists.number_of_tenant)
                                        ),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _vm._m(2),
                                    _vm._v(" "),
                                    _c(
                                      "tr",
                                      {
                                        staticClass:
                                          "border-yellow-500 font-bold text-yellow-200 border-t-2 mt-5",
                                      },
                                      [
                                        _c(
                                          "td",
                                          { staticClass: "text-left " },
                                          [_vm._v("Booking Fees")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-right" },
                                          [
                                            _vm._v(
                                              "RM " +
                                                _vm._s(_vm.lists.booking_fees)
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(3),
                              ]),
                              _vm._v(" "),
                              _vm.lists.room_status != "rented"
                                ? _c("div", { staticClass: "flex mx-5 my-5" }, [
                                    _c(
                                      "div",
                                      { staticClass: "w-full text-center " },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "p-3 font-bold rounded-full text-green-900 bg-green-100 hover:bg-green-500 hover:text-white transition duration-150 ease-in-out shadow-xl w-full",
                                            on: {
                                              click: function ($event) {
                                                _vm.toggleModal =
                                                  !_vm.toggleModal
                                              },
                                            },
                                          },
                                          [_vm._v("Book Room Now")]
                                        ),
                                      ]
                                    ),
                                  ])
                                : _c("div", { staticClass: "flex mx-5 my-5" }, [
                                    _c(
                                      "div",
                                      { staticClass: "w-full text-center " },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "p-3 font-bold rounded-full text-black bg-gray-100 hover:bg-gray-500 hover:text-white transition duration-150 ease-in-out shadow-xl w-full",
                                            on: { click: _vm.toastBook },
                                          },
                                          [_vm._v("Book Room Now")]
                                        ),
                                      ]
                                    ),
                                  ]),
                            ]
                          ),
                        ]
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "bg-white lg:order-1 lg:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 p-2 lg:mb-0",
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "mx-5 my-5 " },
                      [
                        _vm._m(4),
                        _vm._v(" "),
                        _c("GoogleMap", {
                          staticClass: "h-72",
                          attrs: {
                            latitude: parseFloat(_vm.lists.property.lat),
                            logitude: parseFloat(_vm.lists.property.log),
                            registered: true,
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "max-w-6xl p-6 mx-auto mt-3  bg-gray-100 rounded-md shadow-xl mb-5",
        },
        [
          _c("div", { staticClass: "flex justify-between item-center" }, [
            _c("button", { on: { click: _vm.getRecommendation } }, [
              _c(
                "h1",
                {
                  staticClass:
                    "text-2xl font-black text-gray-800 dark:text-white",
                },
                [_vm._v("Recommended Rooms")]
              ),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "flex items-center justify-center w-full overflow-hidden",
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-2 m-5 mb-10",
                },
                _vm._l(_vm.recomendations, function (similar, index) {
                  return _c(
                    "div",
                    {
                      key: index.id,
                      staticClass:
                        "bg-white rounded-lg shadow-lg overflow-hidden  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 hover:bg-yellow-400 hover:shadow-2xl",
                    },
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "view_room_list",
                              params: { id: similar.id },
                            },
                            target: "_blank",
                          },
                        },
                        [
                          _c("img", {
                            staticClass: "h-48 w-full object-cover",
                            attrs: {
                              src:
                                "/images/Properties/" +
                                similar.photo_room[0].photo_name,
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "m-2 text-justify text-sm" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "flex flex-wrap items-center -mt-8 pb-3 ",
                                },
                                [
                                  _c("img", {
                                    staticClass:
                                      "block h-8 w-8 rounded-full bg-white mt-1 mr-2 ml-3 border-2 border-white",
                                    attrs: {
                                      src:
                                        "/images/Profile/" +
                                        similar.property.land.landlord_pic,
                                      alt: "Profile",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "block text-sm font-bold text-white bg-black bg-opacity-30",
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          similar.property.land.landlord_name
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "text-right text-base font-bold text-yellow-700",
                                },
                                [
                                  _vm._v(
                                    "RM" +
                                      _vm._s(similar.monthly_rent) +
                                      "/Months"
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "h2",
                                {
                                  staticClass:
                                    " font-bold mb-5 mt-2 text-lg text-center",
                                },
                                [_vm._v(" " + _vm._s(similar.listing_name))]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "text-base text-left text-gray-600 mb-5",
                                },
                                [
                                  _c("p", { staticClass: "mt-2 px-3" }, [
                                    _vm._v(
                                      _vm._s(similar.property.name) +
                                        " | " +
                                        _vm._s(similar.campus)
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "flex mt-2 px-3" }, [
                                    _c("p", { staticClass: "mt-2 " }, [
                                      _vm._v(
                                        _vm._s(similar.room_type) +
                                          " | " +
                                          _vm._s(
                                            similar.property.gender_preferences
                                          ) +
                                          " "
                                      ),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "flex mt-2  px-3" },
                                    [
                                      _c("p", { staticClass: "mt-2" }, [
                                        _vm._v(
                                          _vm._s(similar.property.furnishing) +
                                            " | " +
                                            _vm._s(similar.room_furnishing)
                                        ),
                                      ]),
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
          ),
        ]
      ),
      _vm._v(" "),
      _vm.toggleModal
        ? _c("BookingModal", {
            attrs: { roomDetails: _vm.lists, user_id: parseInt(_vm.user_id) },
            on: { closeModal: _vm.closeModal },
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
    return _c("div", { staticClass: "flex mt-2 item-center" }, [
      _c("span", { staticClass: "text-xl font-bold" }, [_vm._v("Description")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex mt-2 item-center" }, [
      _c("span", { staticClass: "text-xl font-bold" }, [_vm._v("Furnishing")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticClass: "text-left " }, [_vm._v("Utilities")]),
      _vm._v(" "),
      _c("td", { staticClass: "text-right" }, [_vm._v("Included")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-sm text-indigo-200 font-light" }, [
      _c("div", { staticClass: "mt-5" }, [
        _vm._v(
          "\n                                    The booking fees counted as 1st month of rental\n                                "
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-5" }, [
        _vm._v(
          "\n                                    Monthly rental bills will be issues starting on 2nd months of rental\n                                "
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "border-2 border-blue-500 p-2 mt-5 text-yellow-200" },
        [
          _c("span", {}, [
            _vm._v("Chat with landlord to request for booking key"),
          ]),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex mt-2 item-center" }, [
      _c("span", { staticClass: "text-xl font-bold" }, [
        _vm._v("Location Map"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ManagePropertyList/Booking_Modal.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/Booking_Modal.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Booking_Modal_vue_vue_type_template_id_46522fbb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Booking_Modal.vue?vue&type=template&id=46522fbb& */ "./resources/js/components/ManagePropertyList/Booking_Modal.vue?vue&type=template&id=46522fbb&");
/* harmony import */ var _Booking_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Booking_Modal.vue?vue&type=script&lang=js& */ "./resources/js/components/ManagePropertyList/Booking_Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Booking_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Booking_Modal_vue_vue_type_template_id_46522fbb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Booking_Modal_vue_vue_type_template_id_46522fbb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManagePropertyList/Booking_Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/Booking_Modal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/Booking_Modal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Booking_Modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/Booking_Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/Booking_Modal.vue?vue&type=template&id=46522fbb&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/Booking_Modal.vue?vue&type=template&id=46522fbb& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_Modal_vue_vue_type_template_id_46522fbb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Booking_Modal.vue?vue&type=template&id=46522fbb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/Booking_Modal.vue?vue&type=template&id=46522fbb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_Modal_vue_vue_type_template_id_46522fbb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_Modal_vue_vue_type_template_id_46522fbb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ManagePropertyList/GoogleMap.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/GoogleMap.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GoogleMap_vue_vue_type_template_id_329938f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoogleMap.vue?vue&type=template&id=329938f7&scoped=true& */ "./resources/js/components/ManagePropertyList/GoogleMap.vue?vue&type=template&id=329938f7&scoped=true&");
/* harmony import */ var _GoogleMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoogleMap.vue?vue&type=script&lang=js& */ "./resources/js/components/ManagePropertyList/GoogleMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GoogleMap_vue_vue_type_style_index_0_id_329938f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoogleMap.vue?vue&type=style&index=0&id=329938f7&scoped=true&lang=css& */ "./resources/js/components/ManagePropertyList/GoogleMap.vue?vue&type=style&index=0&id=329938f7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GoogleMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GoogleMap_vue_vue_type_template_id_329938f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GoogleMap_vue_vue_type_template_id_329938f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "329938f7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManagePropertyList/GoogleMap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/GoogleMap.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/GoogleMap.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GoogleMap.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/GoogleMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/GoogleMap.vue?vue&type=style&index=0&id=329938f7&scoped=true&lang=css&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/GoogleMap.vue?vue&type=style&index=0&id=329938f7&scoped=true&lang=css& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMap_vue_vue_type_style_index_0_id_329938f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./GoogleMap.vue?vue&type=style&index=0&id=329938f7&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/GoogleMap.vue?vue&type=style&index=0&id=329938f7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMap_vue_vue_type_style_index_0_id_329938f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMap_vue_vue_type_style_index_0_id_329938f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMap_vue_vue_type_style_index_0_id_329938f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMap_vue_vue_type_style_index_0_id_329938f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/ManagePropertyList/GoogleMap.vue?vue&type=template&id=329938f7&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/GoogleMap.vue?vue&type=template&id=329938f7&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMap_vue_vue_type_template_id_329938f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GoogleMap.vue?vue&type=template&id=329938f7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/GoogleMap.vue?vue&type=template&id=329938f7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMap_vue_vue_type_template_id_329938f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMap_vue_vue_type_template_id_329938f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ManagePropertyList/View_Room_List.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/View_Room_List.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_Room_List_vue_vue_type_template_id_4376cd04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View_Room_List.vue?vue&type=template&id=4376cd04& */ "./resources/js/components/ManagePropertyList/View_Room_List.vue?vue&type=template&id=4376cd04&");
/* harmony import */ var _View_Room_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View_Room_List.vue?vue&type=script&lang=js& */ "./resources/js/components/ManagePropertyList/View_Room_List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_Room_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_Room_List_vue_vue_type_template_id_4376cd04___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_Room_List_vue_vue_type_template_id_4376cd04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManagePropertyList/View_Room_List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/View_Room_List.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/View_Room_List.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_Room_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./View_Room_List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/View_Room_List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_Room_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/View_Room_List.vue?vue&type=template&id=4376cd04&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/View_Room_List.vue?vue&type=template&id=4376cd04& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_Room_List_vue_vue_type_template_id_4376cd04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./View_Room_List.vue?vue&type=template&id=4376cd04& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/View_Room_List.vue?vue&type=template&id=4376cd04&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_Room_List_vue_vue_type_template_id_4376cd04___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_Room_List_vue_vue_type_template_id_4376cd04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);