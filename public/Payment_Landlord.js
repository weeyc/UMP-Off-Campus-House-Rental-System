(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Payment_Landlord"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePayment/Payment_Landlord.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePayment/Payment_Landlord.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Receipt_Modal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Receipt_Modal.vue */ "./resources/js/components/ManagePayment/Receipt_Modal.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ReceiptModal: _Receipt_Modal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    user_id: Number,
    role: Number
  },
  data: function data() {
    return {
      moment: moment__WEBPACK_IMPORTED_MODULE_1___default.a,
      page: 1,
      lastPage: '',
      filterGender: '',
      filterName: '',
      pageInfo: '',
      toggle: false,
      byID: '',
      bydate: '',
      showSize: 10,
      payments: [],
      toggleModal: false,
      isReady: false,
      form: {
        id: '',
        details: '',
        status: '',
        total: '',
        date: ''
      }
    };
  },
  mounted: function mounted() {
    this.getPayment();
  },
  methods: {
    getPayment: function getPayment() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('/api/get_payments/' + this.user_id + '/' + this.role + '?page=' + page, {
        params: {
          byID: this.byID,
          bydate: this.bydate,
          showSize: this.showSize
        }
      }).then(function (response) {
        _this.payments = response.data.data;
        _this.pageInfo = response.data.meta;
        _this.lastPage = response.data.meta.last_page;
        _this.isReady = true;
        console.warn(_this.payments.data);
      });
    },
    sorting: function sorting(q) {
      if (q == 1) {
        this.toggle = !this.toggle;

        if (this.toggle == true) {
          this.byID = 'desc';
          this.getPayment();
        } else if (this.toggle == false) {
          this.byID = 'asc';
          this.getPayment();
        }

        this.byID = '';
      } else if (q == 2) {
        this.toggle = !this.toggle;

        if (this.toggle == true) {
          this.bydate = 'desc';
          this.getPayment();
        } else if (this.toggle == false) {
          this.bydate = 'asc';
          this.getPayment();
        }

        this.bydate = '';
      }
    },
    read: function read(data) {
      this.form.id = data.payment_id;
      this.form.details = data.payment_details;
      this.form.status = data.payment_status;
      this.form.total = data.total_payment;
      this.form.date = data.payment_date;
    },
    closeModal: function closeModal() {
      this.toggleModal = !this.toggleModal;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePayment/Receipt_Modal.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePayment/Receipt_Modal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    form: Object,
    user_id: Number,
    role: Number
  },
  components: {},
  data: function data() {
    return {
      modalBackground: '',
      output: null,
      moment: moment__WEBPACK_IMPORTED_MODULE_0___default.a
    };
  },
  methods: {
    print: function print() {
      // Pass the element id here
      this.$htmlToPaper('printMe');
    },
    editUser: function editUser() {
      var _this = this;

      axios.post('/api/update_profile/' + this.user_id + '/' + this.role, this.form).then(function () {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Profile update successfully!',
          showConfirmButton: false,
          timer: 1500
        });

        _this.closeModal();

        _this.$emit("refreshData");

        _this.$root.$emit("refreshData", _this.user_id);
      })["catch"](function (error) {
        return _this.errors.record(error.response.data);
      });
    },
    closeModal: function closeModal() {
      this.$emit("closeModal");
    },
    getRole: function getRole() {
      if (this.role == 1) {
        this.modalBackground = 'bg-gradient-to-bl from-yellow-200 via-yellow-300 to-yellow-400';
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePayment/Payment_Landlord.vue?vue&type=template&id=bc2b9a5c&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePayment/Payment_Landlord.vue?vue&type=template&id=bc2b9a5c& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "ml-5" },
    [
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
            [_vm._v("Payment for Me")]
          ),
          _vm._v(" "),
          _vm.isReady == true
            ? _c("div", [
                _vm.payments.length == 0
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "bg-blue-200 border-yellow-600 text-gray-600  p-10 mt-3 w-full rounded-md ",
                        attrs: { role: "alert" },
                      },
                      [
                        _c("center", [
                          _c("p", { staticClass: "font-bold text-base" }, [
                            _vm._v(
                              " There are no any payment transact to you yet."
                            ),
                          ]),
                        ]),
                      ],
                      1
                    )
                  : _c(
                      "div",
                      {
                        staticClass:
                          "py-2 align-middle inline-block min-w-full",
                      },
                      [
                        _vm.pageInfo
                          ? _c("div", { staticClass: "items-center" }, [
                              _vm.page == "[object MouseEvent]"
                                ? _c(
                                    "p",
                                    {
                                      staticClass:
                                        "font-medium text-dark-600 dark:text-gray-400",
                                    },
                                    [
                                      _vm._v(
                                        "  Showing Page 1 of " +
                                          _vm._s(_vm.lastPage)
                                      ),
                                    ]
                                  )
                                : _c(
                                    "p",
                                    {
                                      staticClass:
                                        "font-medium text-dark-600 dark:text-gray-400",
                                    },
                                    [
                                      _vm._v(
                                        "  Showing Page " +
                                          _vm._s(_vm.page) +
                                          " of " +
                                          _vm._s(_vm.lastPage)
                                      ),
                                    ]
                                  ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              " shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",
                          },
                          [
                            _c(
                              "table",
                              {
                                staticClass:
                                  "min-w-full divide-y divide-gray-200",
                              },
                              [
                                _c("thead", { staticClass: "bg-gray-50" }, [
                                  _c("tr", [
                                    _c(
                                      "th",
                                      {
                                        staticClass:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        attrs: { scope: "col" },
                                      },
                                      [
                                        _vm._v(
                                          "\n                 No.\n               "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        on: {
                                          click: function ($event) {
                                            return _vm.sorting(2)
                                          },
                                        },
                                      },
                                      [
                                        _c(
                                          "th",
                                          {
                                            staticClass:
                                              "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            attrs: { scope: "col" },
                                          },
                                          [
                                            _vm._v(
                                              "\n                 payment date\n               "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      {
                                        staticClass:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        attrs: { scope: "col" },
                                      },
                                      [
                                        _vm._v(
                                          "\n                  Student name\n               "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      {
                                        staticClass:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        attrs: { scope: "col" },
                                      },
                                      [
                                        _vm._v(
                                          "\n                 Room ID\n               "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      {
                                        staticClass:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        attrs: { scope: "col" },
                                      },
                                      [
                                        _vm._v(
                                          "\n                 payment details\n               "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      {
                                        staticClass:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        attrs: { scope: "col" },
                                      },
                                      [
                                        _vm._v(
                                          "\n                 total payment\n               "
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  {
                                    staticClass:
                                      "bg-white divide-y divide-gray-200",
                                  },
                                  _vm._l(_vm.payments, function (data, index) {
                                    return _c("tr", { key: data.id }, [
                                      _c(
                                        "td",
                                        {
                                          staticClass:
                                            "px-6 py-4 whitespace-nowrap",
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "text-sm text-gray-900",
                                            },
                                            [_vm._v(_vm._s(index + 1))]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticClass:
                                            "px-6 py-4 whitespace-nowrap",
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "text-sm text-gray-900",
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm
                                                    .moment(data.payment_date)
                                                    .format(
                                                      "DD-MM-YYYY, h:mm a"
                                                    )
                                                )
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticClass:
                                            "px-6 py-4 whitespace-nowrap",
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "text-sm text-gray-900",
                                            },
                                            [_vm._v(_vm._s(data.student.name))]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticClass:
                                            "px-6 py-4 whitespace-nowrap",
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "text-sm text-gray-900",
                                            },
                                            [_vm._v(_vm._s(data.room_id))]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticClass:
                                            "px-6 py-4 whitespace-nowrap",
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "text-sm text-gray-900",
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(data.payment_details)
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticClass:
                                            "px-6 py-4 whitespace-nowrap",
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "text-sm text-gray-900",
                                            },
                                            [
                                              _vm._v(
                                                "RM " +
                                                  _vm._s(
                                                    data.total_payment.toFixed(
                                                      2
                                                    )
                                                  )
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ])
                                  }),
                                  0
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _vm.pageInfo
                              ? _c(
                                  "div",
                                  {
                                    staticClass:
                                      "mt-5 mb-5 flex justify-between ",
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "w-1/2 flex justify-start ",
                                      },
                                      [
                                        _c(
                                          "select",
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.showSize,
                                                expression: "showSize",
                                              },
                                            ],
                                            staticClass:
                                              "focus:outline-none border-transparent cursor-pointer focus:border-gray-800 hover:bg-blue-200 focus:shadow-outline-gray text-base py-2 px-8 w-1/2 xl:px-3 rounded font-medium  appearance-none bg-transparent",
                                            on: {
                                              change: function ($event) {
                                                var $$selectedVal =
                                                  Array.prototype.filter
                                                    .call(
                                                      $event.target.options,
                                                      function (o) {
                                                        return o.selected
                                                      }
                                                    )
                                                    .map(function (o) {
                                                      var val =
                                                        "_value" in o
                                                          ? o._value
                                                          : o.value
                                                      return val
                                                    })
                                                _vm.showSize = $event.target
                                                  .multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              },
                                            },
                                          },
                                          [
                                            _c(
                                              "option",
                                              {
                                                attrs: { value: "10" },
                                                on: { click: _vm.getPayment },
                                              },
                                              [_vm._v("Show Entries")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              {
                                                attrs: { value: "10" },
                                                on: { click: _vm.getPayment },
                                              },
                                              [_vm._v("10")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              {
                                                attrs: { value: "20" },
                                                on: { click: _vm.getPayment },
                                              },
                                              [_vm._v("20")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              {
                                                attrs: { value: "100000" },
                                                on: { click: _vm.getPayment },
                                              },
                                              [_vm._v("All")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "w-1/2 flex justify-end ",
                                      },
                                      [
                                        _c("Page", {
                                          attrs: {
                                            current: _vm.pageInfo.current_page,
                                            total: _vm.pageInfo.total,
                                            "page-size": parseInt(
                                              _vm.pageInfo.per_page
                                            ),
                                          },
                                          on: { "on-change": _vm.getPayment },
                                        }),
                                      ],
                                      1
                                    ),
                                  ]
                                )
                              : _vm._e(),
                          ]
                        ),
                      ]
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
                      name: "dots",
                    },
                  }),
                ],
                1
              ),
        ]
      ),
      _vm._v(" "),
      _vm.toggleModal
        ? _c("ReceiptModal", {
            attrs: { form: _vm.form, user_id: _vm.user_id, role: _vm.role },
            on: { closeModal: _vm.closeModal },
          })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePayment/Receipt_Modal.vue?vue&type=template&id=161e9c46&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePayment/Receipt_Modal.vue?vue&type=template&id=161e9c46& ***!
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
            "rounded min-h-min overflow-y-auto shadow-lg w-11/12 md:w-1/3",
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
                _vm._v("View Receipt"),
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
          _c("div", { staticClass: "min-72 bg-gray-100 space-y-12 py-10" }, [
            _c(
              "div",
              { staticClass: "container mx-auto", attrs: { id: "printMe" } },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer",
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "h-20 flex items-center justify-between",
                        staticStyle: { "background-color": "#2b2a33" },
                      },
                      [
                        _c("img", {
                          staticClass: "ml-5",
                          attrs: {
                            src: "https://img.icons8.com/nolan/64/cottage.png",
                          },
                        }),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass:
                              "mr-20  text-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text ",
                          },
                          [_vm._v("UOCA Payment Receipt")]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass:
                              "mr-5 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text  font-thin text-lg",
                          },
                          [_vm._v("ID-0" + _vm._s(_vm.form.id))]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "py-6 text-lg tracking-wide ml-16" },
                      [
                        _vm._v(_vm._s(_vm.form.details) + " "),
                        _c("span", { staticClass: "text-green-500" }, [
                          _vm._v(" (" + _vm._s(_vm.form.status) + ") "),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "flex justify-between px-5 mb-2 text-base",
                      },
                      [
                        _c("p", { staticClass: "text-yellow-500" }, [
                          _vm._v("MYR " + _vm._s(_vm.form.total)),
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-blue-500" }, [
                          _vm._v(
                            _vm._s(
                              _vm
                                .moment(_vm.form.date)
                                .format("DD-MM-YYYY, h:mm a")
                            )
                          ),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]
            ),
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
                [_vm._v("Okay")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white",
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.print.apply(null, arguments)
                    },
                  },
                },
                [_vm._v("Print")]
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

/***/ "./resources/js/components/ManagePayment/Payment_Landlord.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/ManagePayment/Payment_Landlord.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Payment_Landlord_vue_vue_type_template_id_bc2b9a5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Payment_Landlord.vue?vue&type=template&id=bc2b9a5c& */ "./resources/js/components/ManagePayment/Payment_Landlord.vue?vue&type=template&id=bc2b9a5c&");
/* harmony import */ var _Payment_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Payment_Landlord.vue?vue&type=script&lang=js& */ "./resources/js/components/ManagePayment/Payment_Landlord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Payment_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Payment_Landlord_vue_vue_type_template_id_bc2b9a5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Payment_Landlord_vue_vue_type_template_id_bc2b9a5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManagePayment/Payment_Landlord.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManagePayment/Payment_Landlord.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/ManagePayment/Payment_Landlord.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Payment_Landlord.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePayment/Payment_Landlord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManagePayment/Payment_Landlord.vue?vue&type=template&id=bc2b9a5c&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/ManagePayment/Payment_Landlord.vue?vue&type=template&id=bc2b9a5c& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_Landlord_vue_vue_type_template_id_bc2b9a5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Payment_Landlord.vue?vue&type=template&id=bc2b9a5c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePayment/Payment_Landlord.vue?vue&type=template&id=bc2b9a5c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_Landlord_vue_vue_type_template_id_bc2b9a5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_Landlord_vue_vue_type_template_id_bc2b9a5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ManagePayment/Receipt_Modal.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/ManagePayment/Receipt_Modal.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Receipt_Modal_vue_vue_type_template_id_161e9c46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Receipt_Modal.vue?vue&type=template&id=161e9c46& */ "./resources/js/components/ManagePayment/Receipt_Modal.vue?vue&type=template&id=161e9c46&");
/* harmony import */ var _Receipt_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Receipt_Modal.vue?vue&type=script&lang=js& */ "./resources/js/components/ManagePayment/Receipt_Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Receipt_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Receipt_Modal_vue_vue_type_template_id_161e9c46___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Receipt_Modal_vue_vue_type_template_id_161e9c46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManagePayment/Receipt_Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManagePayment/Receipt_Modal.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/ManagePayment/Receipt_Modal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Receipt_Modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePayment/Receipt_Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManagePayment/Receipt_Modal.vue?vue&type=template&id=161e9c46&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/ManagePayment/Receipt_Modal.vue?vue&type=template&id=161e9c46& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_Modal_vue_vue_type_template_id_161e9c46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Receipt_Modal.vue?vue&type=template&id=161e9c46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePayment/Receipt_Modal.vue?vue&type=template&id=161e9c46&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_Modal_vue_vue_type_template_id_161e9c46___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_Modal_vue_vue_type_template_id_161e9c46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);