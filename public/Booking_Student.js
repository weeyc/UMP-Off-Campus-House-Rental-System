(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Booking_Student"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePayment/Booking_Student.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePayment/Booking_Student.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
//import ReadModal from './Modal_Student.vue';

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {// ReadModal,
  },
  props: {
    user_id: Number,
    role: Number
  },
  data: function data() {
    return {
      data: [],
      moment: moment__WEBPACK_IMPORTED_MODULE_0___default.a,
      toggle: false,
      byID: '',
      bydate: '',
      showSize: 10,
      payments: [],
      toggleModal: false,
      isReady: false,
      updateDetails: {
        room_id: '',
        prop_id: '',
        std_id: ''
      }
    };
  },
  mounted: function mounted() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get('/api/get_bookings/' + this.user_id + '/' + this.role + '?land=1', {
        params: {
          byID: this.byID,
          bydate: this.bydate,
          showSize: this.showSize
        }
      }).then(function (response) {
        _this.data = response.data.data;
        _this.isReady = true;
        console.warn(_this.data.data);
      });
    },
    cancelBooking: function cancelBooking(id, date, item) {
      var _this2 = this;

      this.updateDetails.room_id = item.room.id;
      this.updateDetails.prop_id = item.property_id;
      this.updateDetails.std_id = item.student_id;
      Swal.fire({
        title: 'Are you sure?',
        text: "Cancel Book Room for entry at " + date + ". This action is unrefundable and irrevertible",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, cancel this booking!'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios.post('/api/cancel_booking/' + id, _this2.updateDetails).then(function (response) {
            _this2.getData();

            console.log(response);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Room booking cancelled!',
              showConfirmButton: false,
              timer: 1500
            });
          })["catch"](function (errors) {
            console.log(errors);
          });
        }
      });
    },
    deleteBooking: function deleteBooking(id) {
      var _this3 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "Delete cancelled booking record",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete this record!'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios["delete"]('/api/delete_booking/' + id).then(function (response) {
            _this3.getData();

            console.log(response);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Record deleted successfully!',
              showConfirmButton: false,
              timer: 1500
            });
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePayment/Booking_Student.vue?vue&type=template&id=65806de8&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePayment/Booking_Student.vue?vue&type=template&id=65806de8& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "ml-5 " }, [
    _c(
      "div",
      {
        staticClass:
          "overflow-x-auto max-w-6xl p-6 mx-auto  bg-gray-100 rounded-md shadow-xl mb-5 rounded-tl-none",
      },
      [
        _c(
          "h2",
          {
            staticClass:
              " font-bold text-gray-700 capitalize text-center text-xl",
          },
          [_vm._v("My Bookings")]
        ),
        _vm._v(" "),
        _vm.isReady == true
          ? _c("div", [
              _c(
                "div",
                {
                  staticClass:
                    "flex items-center justify-center w-full overflow-hidden",
                },
                [
                  _vm.data.length == 0
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "bg-yellow-200 border-yellow-600 text-gray-600  p-10 mt-3 w-full rounded-md ",
                          attrs: { role: "alert" },
                        },
                        [
                          _c("center", [
                            _c("p", { staticClass: "font-bold text-base" }, [
                              _vm._v("You don't having any booking yet."),
                            ]),
                          ]),
                        ],
                        1
                      )
                    : _c(
                        "div",
                        {
                          staticClass:
                            "grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-2 m-5 mb-10",
                        },
                        _vm._l(_vm.data, function (item) {
                          return _c("div", { key: item.id }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "bg-white rounded-lg shadow-lg h-full overflow-hidden hover:shadow-lg",
                              },
                              [
                                _c("img", {
                                  staticClass: "h-48 w-full object-cover",
                                  attrs: {
                                    src:
                                      "/images/Properties/" +
                                      item.room.photo_room[0].photo_name,
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
                                              item.room.property.land
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
                                                item.room.property.land
                                                  .landlord_name
                                              )
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: " flex justify-between " },
                                      [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "w-1/2 flex justify-start items-center text-base font-bold text-yellow-700",
                                          },
                                          [_vm._v(_vm._s(item.booking_status))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "w-1/2 flex justify-end text-base font-bold text-yellow-700",
                                          },
                                          [
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  _vm
                                                    .moment(item.booking_date)
                                                    .format("DD-MM-YYYY")
                                                )
                                            ),
                                          ]
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
                                            params: { id: item.room.id },
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
                                                _vm._s(item.room.listing_name)
                                            ),
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
                                      [_vm._v("Booking Details")]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "mx-5 my-5" }, [
                                      _c(
                                        "table",
                                        {
                                          staticClass: " text-gray-600 w-full",
                                        },
                                        [
                                          _c("tr", [
                                            _c(
                                              "td",
                                              { staticClass: "text-left " },
                                              [_vm._v("Move-in Date")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { staticClass: "text-right" },
                                              [
                                                _vm._v(
                                                  _vm._s(item.move_in_date)
                                                ),
                                              ]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("tr", [
                                            _c(
                                              "td",
                                              { staticClass: "text-left " },
                                              [_vm._v("Period Tenancy")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { staticClass: "text-right" },
                                              [
                                                _vm._v(
                                                  _vm._s(item.period_tenancy) +
                                                    " Months"
                                                ),
                                              ]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("tr", [
                                            _c(
                                              "td",
                                              { staticClass: "text-left " },
                                              [_vm._v("Monthly Rental / Room")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { staticClass: "text-right" },
                                              [
                                                _vm._v(
                                                  "RM " +
                                                    _vm._s(item.booking_fees)
                                                ),
                                              ]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("tr", [
                                            _c(
                                              "td",
                                              { staticClass: "text-left " },
                                              [_vm._v("Overdue Penalty")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { staticClass: "text-right" },
                                              [
                                                _vm._v(
                                                  "RM " +
                                                    _vm._s(
                                                      item.room.penalty_fees
                                                    )
                                                ),
                                              ]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("tr", [
                                            _c(
                                              "td",
                                              { staticClass: "text-left " },
                                              [_vm._v("Max Tenant / Room")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { staticClass: "text-right" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    item.room.number_of_tenant
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _vm._m(0, true),
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
                                                [_vm._v("Paid Booking Fees")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { staticClass: "text-right" },
                                                [
                                                  _vm._v(
                                                    "RM " +
                                                      _vm._s(item.booking_fees)
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._m(1, true),
                                    ]),
                                    _vm._v(" "),
                                    item.booking_status == "Booked"
                                      ? _c(
                                          "div",
                                          { staticClass: "flex mx-5 my-5" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "w-full text-center ",
                                              },
                                              [
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "p-3 font-bold rounded-full text-red-900 bg-red-200 hover:bg-red-500 hover:text-white transition duration-150 ease-in-out shadow-xl w-full",
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.cancelBooking(
                                                          item.booking_id,
                                                          item.move_in_date,
                                                          item
                                                        )
                                                      },
                                                    },
                                                  },
                                                  [_vm._v("Cancel")]
                                                ),
                                              ]
                                            ),
                                          ]
                                        )
                                      : _c(
                                          "div",
                                          { staticClass: "flex mx-5 my-5" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "w-full text-center ",
                                              },
                                              [
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "p-3 font-bold rounded-full text-black bg-gray-100 hover:bg-gray-500 hover:text-white transition duration-150 ease-in-out shadow-xl w-full",
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.deleteBooking(
                                                          item.booking_id
                                                        )
                                                      },
                                                    },
                                                  },
                                                  [_vm._v("Delete Record")]
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
                          ])
                        }),
                        0
                      ),
                ]
              ),
            ])
          : _c(
              "div",
              [
                _c("loader", {
                  attrs: {
                    object: "#dd7755",
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
      ]
    ),
  ])
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
            "\n                                  The booking fees counted as 1st month of rental\n                              "
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mt-2" }, [
          _vm._v(
            "\n                                  Monthly rental bills will be issues starting on 2nd months of rental\n                              "
          ),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ManagePayment/Booking_Student.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/ManagePayment/Booking_Student.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Booking_Student_vue_vue_type_template_id_65806de8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Booking_Student.vue?vue&type=template&id=65806de8& */ "./resources/js/components/ManagePayment/Booking_Student.vue?vue&type=template&id=65806de8&");
/* harmony import */ var _Booking_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Booking_Student.vue?vue&type=script&lang=js& */ "./resources/js/components/ManagePayment/Booking_Student.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Booking_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Booking_Student_vue_vue_type_template_id_65806de8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Booking_Student_vue_vue_type_template_id_65806de8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManagePayment/Booking_Student.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManagePayment/Booking_Student.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/ManagePayment/Booking_Student.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Booking_Student.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePayment/Booking_Student.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManagePayment/Booking_Student.vue?vue&type=template&id=65806de8&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/ManagePayment/Booking_Student.vue?vue&type=template&id=65806de8& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_Student_vue_vue_type_template_id_65806de8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Booking_Student.vue?vue&type=template&id=65806de8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePayment/Booking_Student.vue?vue&type=template&id=65806de8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_Student_vue_vue_type_template_id_65806de8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_Student_vue_vue_type_template_id_65806de8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);