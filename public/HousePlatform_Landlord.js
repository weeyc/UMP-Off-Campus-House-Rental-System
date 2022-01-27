(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HousePlatform_Landlord"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRentalProperty/Bill_Modal.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRentalProperty/Bill_Modal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
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
    user_id: Number,
    role: Number,
    tenant: Object
  },
  components: {},
  data: function data() {
    return {
      data: [],
      months: [],
      moment: moment__WEBPACK_IMPORTED_MODULE_0___default.a,
      bydate: '',
      form: {
        std_id: this.user_id,
        bills_id: '',
        tenant_id: '',
        property_id: '',
        landlord_id: '',
        payment_details: '',
        total_payment: ''
      },
      student_info: {
        std_id: this.tenant.student_id,
        pic: this.tenant.student.pic,
        name: this.tenant.student.name,
        email: this.tenant.student.email
      },
      isReady: false
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get('/api/get_bills/' + this.user_id + '/' + this.role, {
        params: {
          date: this.bydate
        }
      }).then(function (response) {
        _this.data = response.data;
        _this.form.bills_id = _this.data.bills_id;
        _this.form.tenant_id = _this.data.tenant_id;
        _this.form.property_id = _this.data.property_id;
        _this.form.payment_details = 'UOCA Bills (ID: ' + _this.data.bills_id + ') Payment - Room ID: ' + _this.data.room_id;
        _this.form.total_payment = _this.data.total_bills;
        _this.isReady = true;
        console.warn(_this.data);
      });
    },
    getMonths: function getMonths() {
      var _this2 = this;

      axios.get('/api/get_bills_months/' + this.user_id + '/' + this.role, {
        params: {
          date: this.bydate
        }
      }).then(function (response) {
        _this2.months = response.data;
        console.warn(_this2.months);
      });
    },
    closeModal: function closeModal() {
      this.$emit("closeModal");
    }
  },
  mounted: function mounted() {
    this.getData();
    this.getMonths();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRentalProperty/HousePlatform_Landlord.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRentalProperty/HousePlatform_Landlord.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Post_Modal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post_Modal.vue */ "./resources/js/components/ManageRentalProperty/Post_Modal.vue");
/* harmony import */ var _Bill_Modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bill_Modal.vue */ "./resources/js/components/ManageRentalProperty/Bill_Modal.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    PostModal: _Post_Modal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    BillModal: _Bill_Modal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    user_id: Number,
    role: Number
  },
  data: function data() {
    return {
      isReady: false,
      info: [],
      moment: moment__WEBPACK_IMPORTED_MODULE_2___default.a,
      prop_id: this.$route.params.id,
      toggleModal: false,
      toggleRModal: false,
      data: [],
      posts: [],
      bills: [],
      bydate: '',
      tenant_bills: [],
      tenant_id: '',
      tenant: {},
      room_id: '',
      housemates: [],
      form: {
        property_id: '',
        room_id: '',
        tenancy_period: '',
        move_in_date: '',
        student_id: this.user_id
      }
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get('/api/get_HousePlatform/' + this.prop_id + '?land=1&imej=1').then(function (response) {
        _this.info = response.data.data[0];
        _this.housemates = response.data.data;

        _this.getPost();

        console.warn(_this.info.data);
      });
    },
    getPost: function getPost() {
      var _this2 = this;

      axios.get('/api/get_post/' + this.user_id + '/' + this.prop_id + '?land=1&imej=1').then(function (response) {
        _this2.posts = response.data.data;
        _this2.isReady = true;
        console.warn(_this2.post.data);
      });
    },
    kickTenant: function kickTenant(room_id, tenant_id) {
      var _this3 = this;

      this.room_id = room_id;
      this.tenant_id = tenant_id;
      axios.get('/api/get_tenant_payment_status/' + room_id + '/' + tenant_id).then(function (response) {
        _this3.tenant_bills = response.data;

        if (_this3.tenant_bills.payment_status == "Unpaid") {
          //this.$toaster.error('This tenant have not yet pay bills');
          Swal.fire({
            title: 'This Tenant have not yet pay bills. Are you sure you want to kick this tenant?!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, kick the tenant'
          }).then(function (result) {
            if (result.isConfirmed) {
              Swal.fire({
                title: 'Confirm Kick Tenant?!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Confirm'
              }).then(function (results) {
                if (results.isConfirmed) {
                  axios["delete"]('/api/kick_tenant/' + tenant_id).then(function (response) {
                    _this3.getData();

                    setTimeout(function () {
                      return _this3.$toaster.success('Tenant kicked');
                    }, 1000);
                  })["catch"](function (errors) {
                    console.log(errors);
                  });
                }
              });
            }
          });
        } else if (_this3.tenant_bills.payment_status == 'Paid' || _this3.tenant_bills == [] || _this3.tenant_bills == "Pending") {
          Swal.fire({
            title: 'Kick tenant from this room?!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, kick the tenant'
          }).then(function (result) {
            if (result.isConfirmed) {
              Swal.fire({
                title: 'Confirm Kick Tenant?!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Confirm'
              }).then(function (results) {
                if (results.isConfirmed) {
                  axios["delete"]('/api/kick_tenant/' + tenant_id).then(function (response) {
                    _this3.getData();

                    setTimeout(function () {
                      return _this3.$toaster.success('Tenant kicked');
                    }, 1000);
                  })["catch"](function (errors) {
                    console.log(errors);
                  });
                }
              });
            }
          });
        }

        console.warn(_this3.tenant_bills);
      });
    },
    deletePost: function deletePost(id) {
      var _this4 = this;

      Swal.fire({
        title: 'Delete this post?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios["delete"]('/api/delete_post/' + id).then(function (response) {
            _this4.getData();

            setTimeout(function () {
              return _this4.$toaster.success('Post deleted');
            }, 1000);
          })["catch"](function (errors) {
            console.log(errors);
          });
        }
      });
    },
    closeModal: function closeModal() {
      this.toggleModal = !this.toggleModal;
    },
    closeRModal: function closeRModal() {
      this.toggleRModal = !this.toggleRModal;
    },
    getBills: function getBills() {
      var _this5 = this;

      axios.get('/api/get_property_bills_total/' + this.user_id + '/' + this.prop_id).then(function (response) {
        _this5.bills = response.data;
        console.warn(_this5.bills);
      });
    },
    checkBill: function checkBill() {
      this.$router.push({
        name: 'payment_land'
      });
    },
    checkTenantBill: function checkTenantBill(student_id, mate) {
      this.tenant_id = student_id;
      this.tenant = mate;
      this.toggleRModal = !this.toggleRModal;
    }
  },
  watch: {
    $route: function $route() {}
  },
  mounted: function mounted() {
    var _this6 = this;

    this.getData();
    this.getBills();
    Echo["private"]('App.Models.Landlord.' + this.user_id).notification(function (notification) {
      console.log(notification);

      _this6.getPost();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRentalProperty/Post_Modal.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRentalProperty/Post_Modal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    role: Number,
    prop_id: Number
  },
  data: function data() {
    return {
      errors: new Errors(),
      modalBackground: '',
      form: {
        post: ''
      }
    };
  },
  methods: {
    posting: function posting() {
      var _this = this;

      axios.post('/api/post_bulletin/' + this.user_id + '/' + this.role + '/' + this.prop_id, this.form).then(function () {
        setTimeout(function () {
          return _this.$toaster.success('Posted');
        }, 1000);

        _this.closeModal();

        _this.$emit("refreshData");
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRentalProperty/Bill_Modal.vue?vue&type=template&id=1002b6ab&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRentalProperty/Bill_Modal.vue?vue&type=template&id=1002b6ab& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
            "rounded max-h-full overflow-y-auto shadow-lg  p-6 w-2/3 min-h-2/3 bg-gradient-to-r from-sky-400 to-cyan-300",
        },
        [
          _vm.isReady == true
            ? _c("div", [
                _c(
                  "div",
                  {
                    staticClass:
                      "border-b px-4 py-2 flex justify-between items-center",
                  },
                  [
                    _c("h3", { staticClass: "font-semibold text-lg" }, [
                      _vm._v("Tenant Bills Details"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "text-black ",
                        on: { click: _vm.closeModal },
                      },
                      [_vm._v("✗")]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "p-6 ml-5" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "max-w-6xl p-6 mx-auto mt-3  bg-transparent rounded-md shadow-xl mb-5",
                    },
                    [
                      _c(
                        "h2",
                        {
                          staticClass:
                            " font-bold text-gray-700 capitalize text-center text-xl",
                        },
                        [_vm._v("Tenant Bills")]
                      ),
                      _vm._v(" "),
                      _vm.data.length == 0
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "bg-blue-200 border-yellow-600 text-gray-600  p-10 mt-7 ",
                              attrs: { role: "alert" },
                            },
                            [
                              _c("center", [
                                _c(
                                  "p",
                                  { staticClass: "font-bold text-base" },
                                  [
                                    _vm._v(
                                      " This tenant doesn't have any bills issued yet."
                                    ),
                                  ]
                                ),
                              ]),
                            ],
                            1
                          )
                        : _c("div", { staticClass: " m-5 mb-10" }, [
                            _c(
                              "div",
                              {
                                staticClass: "w-full flex justify-center mb-3 ",
                              },
                              [
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.bydate,
                                        expression: "bydate",
                                      },
                                    ],
                                    staticClass:
                                      "w-2/4 focus:outline-none border-transparent cursor-pointer focus:border-gray-800 hover:bg-blue-200 focus:shadow-outline-gray text-base py-2 px-8  xl:px-3 rounded font-medium  appearance-none bg-transparent",
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
                                        _vm.bydate = $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      },
                                    },
                                  },
                                  [
                                    _c(
                                      "option",
                                      {
                                        attrs: {
                                          value: "",
                                          selected: "",
                                          disabled: "",
                                          hidden: "",
                                        },
                                      },
                                      [_vm._v("Choose month")]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(_vm.months, function (d) {
                                      return _c(
                                        "option",
                                        { key: d, on: { click: _vm.getData } },
                                        [_vm._v(_vm._s(d) + " ")]
                                      )
                                    }),
                                  ],
                                  2
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "min-h-screen p-5 bg-transparent  rounded-lg border-collapse flex flex-col justify-center w-full h-full bg-no-repeat bg-cover",
                                staticStyle: {
                                  "background-image":
                                    "url(/images/UMP/clock.jpg)",
                                },
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "flex max-h-full sm:max-w-xl sm:mx-auto",
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "flex  max-h-full  bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-80 border border-gray-200",
                                        staticStyle: {
                                          "backdrop-filter": "blur(20px)",
                                        },
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "max-w-md mx-auto " },
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "w-full focus:outline-none focus:text-white  flex justify-between sm:w-auto items-center space-x-10 text-white mx-6 p-3 rounded focus:bg-yellow-600 bg-yellow-500 hover:bg-yellow-600",
                                                attrs: {
                                                  to: {
                                                    name: "land_profile_view",
                                                    params: {
                                                      role: 1,
                                                      id: _vm.student_info
                                                        .std_id,
                                                    },
                                                  },
                                                  target: "_blank",
                                                },
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "flex justify-start sm:w-auto items-center space-x-2",
                                                  },
                                                  [
                                                    _c("div", [
                                                      _c("img", {
                                                        staticClass:
                                                          "rounded-full h-10 w-10 object-cover",
                                                        attrs: {
                                                          src:
                                                            "/images/Profile/" +
                                                            _vm.student_info
                                                              .pic,
                                                          alt: "Avatar",
                                                        },
                                                      }),
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "flex flex-col justify-items-start text-left space-y-1",
                                                      },
                                                      [
                                                        _c(
                                                          "p",
                                                          {
                                                            staticClass:
                                                              "text-base leading-4 text-white",
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.student_info
                                                                  .name
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "p",
                                                          {
                                                            staticClass:
                                                              "text-xs leading-3 text-white",
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.student_info
                                                                  .email
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                      ]
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
                                                  "py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7",
                                              },
                                              [
                                                _c(
                                                  "p",
                                                  { staticClass: "text-sm" },
                                                  [
                                                    _vm._v(
                                                      "Here’s a summary of tenant's " +
                                                        _vm._s(
                                                          _vm
                                                            .moment(
                                                              _vm.data
                                                                .bills_date
                                                            )
                                                            .format("MMM-YYYY")
                                                        ) +
                                                        "  UOCA rental bill " +
                                                        _vm._s(
                                                          _vm.data.bills_id
                                                        ) +
                                                        ":"
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "shadow-md rounded my-6",
                                                  },
                                                  [
                                                    _c(
                                                      "table",
                                                      {
                                                        staticClass:
                                                          "text-center w-full border-2 rounded-lg ",
                                                      },
                                                      [
                                                        _c("thead", [
                                                          _c("tr", [
                                                            _c(
                                                              "th",
                                                              {
                                                                staticClass:
                                                                  "py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-r  border-grey-light ",
                                                                attrs: {
                                                                  colspan: "2",
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Bills Date "
                                                                ),
                                                                _c(
                                                                  "p",
                                                                  {
                                                                    staticClass:
                                                                      "font-extrabold",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm
                                                                          .moment(
                                                                            _vm
                                                                              .data
                                                                              .bills_date
                                                                          )
                                                                          .format(
                                                                            "MMM-YYYY"
                                                                          )
                                                                      ) + "  "
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
                                                                  "py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-r border-grey-light",
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Tenant ID"
                                                                ),
                                                                _c(
                                                                  "p",
                                                                  {
                                                                    staticClass:
                                                                      "font-extrabold",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.data
                                                                          .tenant_id
                                                                      ) + " "
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                          ]),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tbody", [
                                                          _c(
                                                            "tr",
                                                            {
                                                              staticClass:
                                                                "hover:bg-grey-lighter text-sm",
                                                            },
                                                            [
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticClass:
                                                                    "py-4 px-6 border-b border-grey-light border-r ",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Outstanding"
                                                                  ),
                                                                  _c(
                                                                    "p",
                                                                    {
                                                                      staticClass:
                                                                        "font-bold text-red-500",
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "RM " +
                                                                          _vm._s(
                                                                            _vm.data.outstanding_bills.toFixed(
                                                                              2
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
                                                                    "py-4 px-6 border-b border-grey-light border-r ",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Bills Status"
                                                                  ),
                                                                  _c(
                                                                    "p",
                                                                    {
                                                                      staticClass:
                                                                        "font-bold",
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          _vm
                                                                            .data
                                                                            .bills_status
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
                                                                    "py-4 px-6 border-b border-grey-light border-r ",
                                                                  attrs: {
                                                                    rowspan:
                                                                      "2",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Total Amount"
                                                                  ),
                                                                  _c(
                                                                    "p",
                                                                    {
                                                                      staticClass:
                                                                        "font-black text-xl text-ump-green",
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "RM " +
                                                                          _vm._s(
                                                                            _vm.data.total_bills.toFixed(
                                                                              2
                                                                            )
                                                                          )
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _vm.data
                                                                    .bills_status ==
                                                                  "Overdue"
                                                                    ? _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "mb-5 ",
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "center",
                                                                            [
                                                                              _c(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "mx-auto bg-red-500 px-4 py-1 rounded-full text-white",
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    "\n                                         Overdue\n                                    "
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        ],
                                                                        1
                                                                      )
                                                                    : _vm._e(),
                                                                  _vm._v(" "),
                                                                  _vm.data
                                                                    .payment_status ==
                                                                  "Paid"
                                                                    ? _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "mb-5 ",
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "center",
                                                                            [
                                                                              _c(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "mx-auto bg-green-400 px-4 py-1 rounded-full text-white",
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    "\n                                         Paid\n                                    "
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        ],
                                                                        1
                                                                      )
                                                                    : _vm._e(),
                                                                  _vm._v(" "),
                                                                  _vm.data
                                                                    .payment_status ==
                                                                  "Unpaid"
                                                                    ? _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "mb-5 ",
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "center",
                                                                            [
                                                                              _c(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "mx-auto bg-yellow-400 px-4 py-1 rounded-full text-white",
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    "\n                                         Unpaid\n                                    "
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        ],
                                                                        1
                                                                      )
                                                                    : _vm._e(),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "tr",
                                                            {
                                                              staticClass:
                                                                "hover:bg-grey-lighter text-sm",
                                                            },
                                                            [
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticClass:
                                                                    "py-4 px-6 border-b border-grey-light border-r ",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Penalty Fees "
                                                                  ),
                                                                  _c(
                                                                    "p",
                                                                    {
                                                                      staticClass:
                                                                        "font-bold text-red-500",
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "RM " +
                                                                          _vm._s(
                                                                            _vm.data.penalty_fees.toFixed(
                                                                              2
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
                                                                    "py-4 px-6 border-b border-grey-light border-r ",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Bill Due "
                                                                  ),
                                                                  _c(
                                                                    "p",
                                                                    {
                                                                      staticClass:
                                                                        "font-bold",
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          _vm
                                                                            .moment(
                                                                              _vm
                                                                                .data
                                                                                .due_date
                                                                            )
                                                                            .format(
                                                                              "d-MMM-YYYY"
                                                                            )
                                                                        ) + " "
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ]),
                                                      ]
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
                                  ]
                                ),
                              ]
                            ),
                          ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "flex justify-end items-center w-100 border-t p-3",
                  },
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
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRentalProperty/HousePlatform_Landlord.vue?vue&type=template&id=542fa73c&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRentalProperty/HousePlatform_Landlord.vue?vue&type=template&id=542fa73c& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm.isReady == true
      ? _c(
          "div",
          [
            _c(
              "section",
              {
                staticClass:
                  "top w-full bg-blue-600 overflow-hidden relative block h-1/2",
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "top-0 bg-center bg-cover bg w-full h-full object-cover object-center absolute z-0",
                  },
                  [
                    _c("img", {
                      staticClass:
                        "top-0 bg-center bg-cover bg w-full h-full object-cover object-center absolute z-0",
                      attrs: {
                        src:
                          "/images/Properties/" +
                          _vm.info.property.cover.photo_name,
                        alt: "Avatar",
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white -mt-10",
                      },
                      [
                        _c("img", {
                          staticClass: "h-20 w-20 object-cover rounded-full",
                          attrs: {
                            src:
                              "/images/Profile/" +
                              _vm.info.property.land.landlord_pic,
                          },
                        }),
                        _vm._v(" "),
                        _c("h1", { staticClass: "text-2xl font-semibold" }, [
                          _vm._v(
                            "(Property ID: " +
                              _vm._s(_vm.info.property_id) +
                              ") " +
                              _vm._s(_vm.info.property.address)
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: { name: "profile_landlord" },
                              target: "_blank",
                            },
                          },
                          [
                            _c(
                              "h4",
                              {
                                staticClass:
                                  "text-sm font-semibold hover:underline hover:text-blue-700",
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.info.property.land.landlord_name)
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
              ]
            ),
            _vm._v(" "),
            _c(
              "section",
              {
                staticClass:
                  "relative py-16  bg-conic-to-t from-orange-900 via-amber-100 to-orange-900",
              },
              [
                _c("div", { staticClass: "container mx-auto px-4" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "w-full mb-5 bg-transparent shadow-xl rounded-lg -mt-36",
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "flex w-full",
                          attrs: { id: "Board and bills" },
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: " flex-1 w-2/3",
                              attrs: { id: "Board" },
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "bg-gradient-to-br from-cool-gray-100 to-cool-gray-300       mx-auto rounded-lg overflow-hidden rounded-tr-none rounded-br-none shadow-lg",
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "h-14 grid grid-cols-3 p-5",
                                      staticStyle: {
                                        "background-color": "#2b2a33",
                                      },
                                    },
                                    [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "text-lg font-semibold text-yellow-500 col-span-2 justify-self-end",
                                        },
                                        [_vm._v("House Bulletin Board")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "px-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 justify-self-end",
                                          on: {
                                            click: function ($event) {
                                              _vm.toggleModal = !_vm.toggleModal
                                            },
                                          },
                                        },
                                        [_vm._v("Create Post")]
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "overflow-y-auto  h-48 p-5 resize-y",
                                      attrs: { id: "bulletin" },
                                    },
                                    _vm._l(_vm.posts, function (item) {
                                      return _c("div", { key: item.id }, [
                                        item.student != null
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "bg-conic-to-l from-yellow-200 via-red-500 to-fuchsia-500 rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4",
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "flex flex-row justify-center mr-2",
                                                  },
                                                  [
                                                    _c("img", {
                                                      staticClass:
                                                        "rounded-full w-5 h-5 shadow-lg mb-4",
                                                      attrs: {
                                                        alt: "avatar",
                                                        src:
                                                          "/images/Profile/" +
                                                          item.student.pic,
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "p",
                                                      {
                                                        staticClass:
                                                          "text-purple-800 font-semibold ml-2 text-sm text-center md:text-left ",
                                                      },
                                                      [
                                                        _c(
                                                          "router-link",
                                                          {
                                                            staticClass:
                                                              "text-purple-800 hover:underline hover:text-purple-900",
                                                            attrs: {
                                                              to: {
                                                                name: "land_profile_view",
                                                                params: {
                                                                  role: 1,
                                                                  id: item
                                                                    .student.id,
                                                                },
                                                              },
                                                              target: "_blank",
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              " " +
                                                                _vm._s(
                                                                  item.student
                                                                    .name
                                                                ) +
                                                                " "
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" (Tenant) "),
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "text-xs ml-2 text-gray-700",
                                                          },
                                                          [
                                                            _vm._v(
                                                              " " +
                                                                _vm._s(
                                                                  _vm
                                                                    .moment(
                                                                      item.created_at
                                                                    )
                                                                    .format(
                                                                      "DD-MM-YYYY, h:mm a"
                                                                    )
                                                                ) +
                                                                " "
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "p",
                                                  {
                                                    staticClass:
                                                      "text-gray-800 text-base text-center md:text-left ",
                                                    staticStyle: {
                                                      width: "90%",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(item.post) + "   "
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        item.landlord != null
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "bg-conic-to-r from-indigo-200 via-blue-gray-600 to-indigo-200 rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4",
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "flex-row  mr-2  w-full flex justify-end",
                                                  },
                                                  [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "justify-self-end w-4 h-4",
                                                        on: {
                                                          click: function (
                                                            $event
                                                          ) {
                                                            return _vm.deletePost(
                                                              item.id
                                                            )
                                                          },
                                                        },
                                                      },
                                                      [
                                                        _c(
                                                          "svg",
                                                          {
                                                            staticClass:
                                                              "text-gray-700 ",
                                                            attrs: {
                                                              xmlns:
                                                                "http://www.w3.org/2000/svg",
                                                              fill: "none",
                                                              viewBox:
                                                                "0 0 24 24",
                                                              stroke:
                                                                "currentColor",
                                                            },
                                                          },
                                                          [
                                                            _c("path", {
                                                              attrs: {
                                                                "stroke-linecap":
                                                                  "round",
                                                                "stroke-linejoin":
                                                                  "round",
                                                                "stroke-width":
                                                                  "2",
                                                                d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                                              },
                                                            }),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "p",
                                                      {
                                                        staticClass:
                                                          "justify-self-start text-blue-800 font-semibold ml-2 mr-5 text-sm text-center md:text-left ",
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "text-xs ml-2 text-gray-700",
                                                          },
                                                          [
                                                            _vm._v(
                                                              " " +
                                                                _vm._s(
                                                                  _vm
                                                                    .moment(
                                                                      item.created_at
                                                                    )
                                                                    .format(
                                                                      "DD-MM-YYYY, h:mm a"
                                                                    )
                                                                ) +
                                                                " "
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(
                                                          " " +
                                                            _vm._s(
                                                              item.landlord.name
                                                            ) +
                                                            " "
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("img", {
                                                      staticClass:
                                                        "justify-self-start rounded-full w-5 h-5 shadow-lg mb-4",
                                                      attrs: {
                                                        alt: "avatar",
                                                        src:
                                                          "/images/Profile/" +
                                                          item.landlord.pic,
                                                      },
                                                    }),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "p",
                                                  {
                                                    staticClass:
                                                      "text-gray-800 text-base text-center md:text-left ",
                                                    staticStyle: {
                                                      width: "90%",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(item.post) + "   "
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            )
                                          : _vm._e(),
                                      ])
                                    }),
                                    0
                                  ),
                                ]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: " flex w-1/3",
                              attrs: { id: "Bills" },
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "mx-auto w-full rounded-lg rounded-tl-none rounded-bl-none overflow-hidden shadow-lg  bg-gradient-to-br from-emerald-500 to-lime-600",
                                },
                                [
                                  _vm._m(0),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "overflow-y-auto h-48 p-5",
                                      attrs: { id: "bulletin" },
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "grid grid-rows-2 text-center md:text-left",
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "text-white text-center text-2xl",
                                            },
                                            [_vm._v("Total Rent Collected:")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "text-white text-center text-2xl",
                                            },
                                            [
                                              _vm._v(
                                                "RM " +
                                                  _vm._s(_vm.bills.toFixed(2))
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "p-2 w-1/2 mt-5 rounded-md bg-blue-500 text-white hover:bg-blue-600 justify-self-center",
                                              on: { click: _vm.checkBill },
                                            },
                                            [_vm._v("Check")]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
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
                  { staticClass: "flex mt-40 container mx-auto px-4" },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "w-full mb-6 shadow-xl rounded-lg -mt-36",
                      },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "p-5", attrs: { id: "Housemates" } },
                          _vm._l(_vm.housemates, function (item) {
                            return _c(
                              "div",
                              {
                                key: item.id,
                                staticClass:
                                  "bg-white w-full mx-auto rounded-2xl overflow-hidden shadow-lg mb-10",
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "h-14 flex justify-center items-center p-5 bg-indigo-800",
                                  },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass:
                                          "flex justify-center items-center",
                                        attrs: {
                                          to: {
                                            name: "view_room_list_land",
                                            params: { id: item.id },
                                          },
                                          target: "_blank",
                                        },
                                      },
                                      [
                                        _c("img", {
                                          staticClass:
                                            "h-7 w-7 mr-3 object-cover rounded-md",
                                          attrs: {
                                            src:
                                              "/images/Properties/" +
                                              item.photo_room[0].photo_name,
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "text-lg text-white hover:underline ",
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(item.room_name) +
                                                " | ID: " +
                                                _vm._s(item.id)
                                            ),
                                          ]
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
                                      "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",
                                  },
                                  [
                                    _c(
                                      "table",
                                      {
                                        staticClass:
                                          "min-w-full divide-y divide-gray-200",
                                      },
                                      [
                                        _vm._m(2, true),
                                        _vm._v(" "),
                                        _vm._l(item.tenants, function (mate) {
                                          return _c(
                                            "tbody",
                                            {
                                              key: mate.index,
                                              staticClass:
                                                "bg-white divide-y divide-gray-200",
                                            },
                                            [
                                              _c(
                                                "tr",
                                                [
                                                  _c(
                                                    "td",
                                                    {
                                                      staticClass: "px-6 py-4",
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
                                                              mate.tenant_id
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
                                                      staticClass:
                                                        "flex items-center",
                                                      attrs: {
                                                        to: {
                                                          name: "land_profile_view",
                                                          params: {
                                                            role: 1,
                                                            id: mate.student_id,
                                                          },
                                                        },
                                                        target: "_blank",
                                                      },
                                                    },
                                                    [
                                                      _c(
                                                        "td",
                                                        {
                                                          staticClass:
                                                            "flex px-6 py-4",
                                                        },
                                                        [
                                                          _c("img", {
                                                            staticClass:
                                                              "mr-2 w-6 h-6 rounded-full hover:scale-150 hover:z-10 transform ease-in-out transition duration-500",
                                                            attrs: {
                                                              src:
                                                                "/images/Profile/" +
                                                                mate.student
                                                                  .pic,
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c("span", [
                                                            _vm._v(
                                                              _vm._s(
                                                                mate.student
                                                                  .name
                                                              )
                                                            ),
                                                          ]),
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
                                                            _vm._s(
                                                              mate.student
                                                                .phone_no
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
                                                        [
                                                          _vm._v(
                                                            " " +
                                                              _vm._s(
                                                                mate.move_in_date
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
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              mate.tenancy_period
                                                            ) + " Months"
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
                                                            _vm._s(
                                                              mate.tenant_status
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
                                                        "py-3 px-2 text-center",
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "flex item-center justify-center",
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "w-4 mr-2 transform hover:text-purple-500 hover:scale-110",
                                                            },
                                                            [
                                                              _c(
                                                                "button",
                                                                {
                                                                  on: {
                                                                    click:
                                                                      function (
                                                                        $event
                                                                      ) {
                                                                        return _vm.checkTenantBill(
                                                                          mate.student_id,
                                                                          mate
                                                                        )
                                                                      },
                                                                  },
                                                                },
                                                                [
                                                                  _c(
                                                                    "svg",
                                                                    {
                                                                      attrs: {
                                                                        xmlns:
                                                                          "http://www.w3.org/2000/svg",
                                                                        fill: "none",
                                                                        viewBox:
                                                                          "0 0 24 24",
                                                                        stroke:
                                                                          "currentColor",
                                                                      },
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "path",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              "stroke-linecap":
                                                                                "round",
                                                                              "stroke-linejoin":
                                                                                "round",
                                                                              "stroke-width":
                                                                                "2",
                                                                              d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                                                                            },
                                                                        }
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "path",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              "stroke-linecap":
                                                                                "round",
                                                                              "stroke-linejoin":
                                                                                "round",
                                                                              "stroke-width":
                                                                                "2",
                                                                              d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                                                                            },
                                                                        }
                                                                      ),
                                                                    ]
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
                                                                "w-4 mr-2 transform hover:text-purple-500 hover:scale-110",
                                                            },
                                                            [
                                                              _c(
                                                                "button",
                                                                {
                                                                  on: {
                                                                    click:
                                                                      function (
                                                                        $event
                                                                      ) {
                                                                        return _vm.kickTenant(
                                                                          mate.room_id,
                                                                          mate.tenant_id
                                                                        )
                                                                      },
                                                                  },
                                                                },
                                                                [
                                                                  _c(
                                                                    "svg",
                                                                    {
                                                                      attrs: {
                                                                        width:
                                                                          "18",
                                                                        height:
                                                                          "18",
                                                                        viewBox:
                                                                          "0 0 24 24",
                                                                        fill: "none",
                                                                        xmlns:
                                                                          "http://www.w3.org/2000/svg",
                                                                      },
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "path",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              d: "M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16",
                                                                              stroke:
                                                                                "currentColor",
                                                                              "stroke-width":
                                                                                "1.5",
                                                                              "stroke-linecap":
                                                                                "round",
                                                                              "stroke-linejoin":
                                                                                "round",
                                                                            },
                                                                        }
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "path",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              d: "M7 12H21M21 12L18 9M21 12L18 15",
                                                                              stroke:
                                                                                "currentColor",
                                                                              "stroke-width":
                                                                                "1.5",
                                                                              "stroke-linecap":
                                                                                "round",
                                                                              "stroke-linejoin":
                                                                                "round",
                                                                            },
                                                                        }
                                                                      ),
                                                                    ]
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
                                              ),
                                            ]
                                          )
                                        }),
                                        _vm._v(" "),
                                        _c("tbody", [
                                          item.tenants.length == 0
                                            ? _c("tr", [
                                                _c(
                                                  "td",
                                                  { attrs: { colspan: "7" } },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "bg-indigo-100 border-yellow-600 text-black-600  p-4",
                                                        attrs: {
                                                          role: "alert",
                                                        },
                                                      },
                                                      [
                                                        _c("center", [
                                                          _c(
                                                            "p",
                                                            {
                                                              staticClass:
                                                                "font-bold text-base",
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\r\n                                    No tenant occupy this room yet\r\n                                    "
                                                              ),
                                                            ]
                                                          ),
                                                        ]),
                                                      ],
                                                      1
                                                    ),
                                                  ]
                                                ),
                                              ])
                                            : _vm._e(),
                                        ]),
                                      ],
                                      2
                                    ),
                                  ]
                                ),
                              ]
                            )
                          }),
                          0
                        ),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _vm._m(3),
              ]
            ),
            _vm._v(" "),
            _vm.toggleModal
              ? _c("PostModal", {
                  attrs: {
                    prop_id: _vm.prop_id,
                    user_id: _vm.user_id,
                    role: _vm.role,
                  },
                  on: { refreshData: _vm.getData, closeModal: _vm.closeModal },
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.toggleRModal
              ? _c("BillModal", {
                  attrs: {
                    user_id: _vm.tenant_id,
                    role: 1,
                    tenant: _vm.tenant,
                  },
                  on: { closeModal: _vm.closeRModal },
                })
              : _vm._e(),
          ],
          1
        )
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
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "h-14 flex justify-center items-center p-5 bg-gray-800" },
      [
        _c("p", { staticClass: "text-lg font-semibold  text-green-500 " }, [
          _vm._v("Property Rent"),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "px-72 mt-10 flex items-center justify-between",
        attrs: { id: "line" },
      },
      [
        _c("hr", { staticClass: "w-full" }),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass:
              "focus:outline-none text-2xl font-semibold flex flex-shrink-0 leading-normal px-3 py-2 text-gray-500",
          },
          [_vm._v("My Tenants")]
        ),
        _vm._v(" "),
        _c("hr", { staticClass: "w-full" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "bg-gray-50" }, [
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
              "\r\n                            Tenant ID\r\n                            "
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
              "\r\n                            Name\r\n                            "
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
              "\r\n                            Phone No.\r\n                            "
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
              "\r\n                            Move Date\r\n                            "
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
              "\r\n                            Tenancy Period\r\n                            "
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
              "\r\n                            Tenancy Status\r\n                            "
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
              "\r\n                            Check Bills / Kick\r\n                            "
            ),
          ]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "footer",
      { staticClass: "relative bg-transparent pt-8 pb-6 mt-8" },
      [
        _c("div", { staticClass: "container mx-auto px-4" }, [
          _c(
            "div",
            {
              staticClass:
                "flex flex-wrap items-center md:justify-between justify-center",
            },
            [
              _c(
                "div",
                { staticClass: "w-full md:w-6/12 px-4 mx-auto text-center" },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "text-sm text-blueGray-500 font-semibold py-1",
                    },
                    [
                      _vm._v(
                        "\r\n                    Home is where the heart is\r\n                "
                      ),
                    ]
                  ),
                ]
              ),
            ]
          ),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRentalProperty/Post_Modal.vue?vue&type=template&id=4391fff8&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRentalProperty/Post_Modal.vue?vue&type=template&id=4391fff8& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
            "rounded max-h-full overflow-y-auto shadow-lg w-11/12 md:w-1/3",
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
              _c(
                "h3",
                { staticClass: "font-semibold text-lg text-gray-800 " },
                [_vm._v("Write a Post")]
              ),
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
            _c("div", { staticClass: "flex items-center mb-5" }, [
              _c(
                "label",
                {
                  staticClass:
                    "inline-block w-20 mr-6 text-right font-bold text-gray-600",
                  attrs: { for: "name" },
                },
                [_vm._v("Post")]
              ),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.post,
                    expression: "form.post",
                  },
                ],
                staticClass:
                  "flex-1 mr-5 px-3 py-2 border-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none",
                attrs: {
                  name: "des",
                  rows: "4",
                  cols: "20",
                  placeholder: "Write post to bulletin board",
                },
                domProps: { value: _vm.form.post },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "post", $event.target.value)
                  },
                },
              }),
            ]),
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
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "bg-green-600 hover:bg-green-700 px-5 py-1 rounded text-white",
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.posting.apply(null, arguments)
                    },
                  },
                },
                [_vm._v("Post")]
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

/***/ "./resources/js/components/ManageRentalProperty/Bill_Modal.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/ManageRentalProperty/Bill_Modal.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bill_Modal_vue_vue_type_template_id_1002b6ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bill_Modal.vue?vue&type=template&id=1002b6ab& */ "./resources/js/components/ManageRentalProperty/Bill_Modal.vue?vue&type=template&id=1002b6ab&");
/* harmony import */ var _Bill_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bill_Modal.vue?vue&type=script&lang=js& */ "./resources/js/components/ManageRentalProperty/Bill_Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Bill_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Bill_Modal_vue_vue_type_template_id_1002b6ab___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Bill_Modal_vue_vue_type_template_id_1002b6ab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManageRentalProperty/Bill_Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManageRentalProperty/Bill_Modal.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/ManageRentalProperty/Bill_Modal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bill_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Bill_Modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRentalProperty/Bill_Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bill_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManageRentalProperty/Bill_Modal.vue?vue&type=template&id=1002b6ab&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/ManageRentalProperty/Bill_Modal.vue?vue&type=template&id=1002b6ab& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bill_Modal_vue_vue_type_template_id_1002b6ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Bill_Modal.vue?vue&type=template&id=1002b6ab& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRentalProperty/Bill_Modal.vue?vue&type=template&id=1002b6ab&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bill_Modal_vue_vue_type_template_id_1002b6ab___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bill_Modal_vue_vue_type_template_id_1002b6ab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ManageRentalProperty/HousePlatform_Landlord.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/ManageRentalProperty/HousePlatform_Landlord.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HousePlatform_Landlord_vue_vue_type_template_id_542fa73c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HousePlatform_Landlord.vue?vue&type=template&id=542fa73c& */ "./resources/js/components/ManageRentalProperty/HousePlatform_Landlord.vue?vue&type=template&id=542fa73c&");
/* harmony import */ var _HousePlatform_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HousePlatform_Landlord.vue?vue&type=script&lang=js& */ "./resources/js/components/ManageRentalProperty/HousePlatform_Landlord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HousePlatform_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HousePlatform_Landlord_vue_vue_type_template_id_542fa73c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HousePlatform_Landlord_vue_vue_type_template_id_542fa73c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManageRentalProperty/HousePlatform_Landlord.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManageRentalProperty/HousePlatform_Landlord.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/ManageRentalProperty/HousePlatform_Landlord.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HousePlatform_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./HousePlatform_Landlord.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRentalProperty/HousePlatform_Landlord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HousePlatform_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManageRentalProperty/HousePlatform_Landlord.vue?vue&type=template&id=542fa73c&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/ManageRentalProperty/HousePlatform_Landlord.vue?vue&type=template&id=542fa73c& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HousePlatform_Landlord_vue_vue_type_template_id_542fa73c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./HousePlatform_Landlord.vue?vue&type=template&id=542fa73c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRentalProperty/HousePlatform_Landlord.vue?vue&type=template&id=542fa73c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HousePlatform_Landlord_vue_vue_type_template_id_542fa73c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HousePlatform_Landlord_vue_vue_type_template_id_542fa73c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ManageRentalProperty/Post_Modal.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/ManageRentalProperty/Post_Modal.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Post_Modal_vue_vue_type_template_id_4391fff8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post_Modal.vue?vue&type=template&id=4391fff8& */ "./resources/js/components/ManageRentalProperty/Post_Modal.vue?vue&type=template&id=4391fff8&");
/* harmony import */ var _Post_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post_Modal.vue?vue&type=script&lang=js& */ "./resources/js/components/ManageRentalProperty/Post_Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Post_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Post_Modal_vue_vue_type_template_id_4391fff8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Post_Modal_vue_vue_type_template_id_4391fff8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManageRentalProperty/Post_Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManageRentalProperty/Post_Modal.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/ManageRentalProperty/Post_Modal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Post_Modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRentalProperty/Post_Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManageRentalProperty/Post_Modal.vue?vue&type=template&id=4391fff8&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/ManageRentalProperty/Post_Modal.vue?vue&type=template&id=4391fff8& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_Modal_vue_vue_type_template_id_4391fff8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Post_Modal.vue?vue&type=template&id=4391fff8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRentalProperty/Post_Modal.vue?vue&type=template&id=4391fff8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_Modal_vue_vue_type_template_id_4391fff8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_Modal_vue_vue_type_template_id_4391fff8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);