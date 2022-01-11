(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Landing_Staff"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Dashboard_Landlord.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRegistrationUsers/Dashboard_Landlord.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    role: Number
  },
  data: function data() {
    return {
      rooms: [],
      properties: 0,
      tenants: 0,
      vacant: 0,
      totals: 0.00,
      isReady: false
    };
  },
  methods: {
    getRooms: function getRooms() {
      var _this = this;

      axios.get('/api/get_all_rooms/' + this.user_id).then(function (response) {
        _this.rooms = response.data.data;
        _this.isReady = true;
        console.warn(_this.rooms.data);
      });
    },
    getpropertiesCount: function getpropertiesCount() {
      var _this2 = this;

      axios.get('/api/getpropertiesCount/' + this.user_id).then(function (response) {
        _this2.properties = response.data;
      });
    },
    gettenantsCount: function gettenantsCount() {
      var _this3 = this;

      axios.get('/api/gettenantsCount/' + this.user_id).then(function (response) {
        _this3.tenants = response.data;
      });
    },
    getvacantCount: function getvacantCount() {
      var _this4 = this;

      axios.get('/api/getvacantCount/' + this.user_id).then(function (response) {
        _this4.vacant = response.data;
      });
    },
    gettotalsCount: function gettotalsCount() {
      var _this5 = this;

      axios.get('/api/gettotalsCount/' + this.user_id).then(function (response) {
        _this5.totals = response.data;
      });
    },
    theFormat: function theFormat(number) {
      return number.toFixed(2);
    },
    playAnimation1: function playAnimation1() {
      this.$refs.number1.play();
    },
    playAnimation2: function playAnimation2() {
      this.$refs.number2.play();
    },
    playAnimation3: function playAnimation3() {
      this.$refs.number3.play();
    },
    playAnimation4: function playAnimation4() {
      this.$refs.number4.play();
    }
  },
  mounted: function mounted() {
    this.getRooms();
    this.getpropertiesCount();
    this.gettenantsCount();
    this.getvacantCount();
    this.gettotalsCount();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Dashboard_Student.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRegistrationUsers/Dashboard_Student.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {},
  data: function data() {
    return {
      user: null
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Landing_Staff.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRegistrationUsers/Landing_Staff.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    role: Number
  },
  data: function data() {
    return {
      moment: moment__WEBPACK_IMPORTED_MODULE_0___default.a,
      properties: 0,
      tenants: 0,
      rooms: 0,
      landlords: 0,
      unverified: []
    };
  },
  methods: {
    getallpropertyCount: function getallpropertyCount() {
      var _this = this;

      axios.get('/api/getallpropertyCount').then(function (response) {
        _this.properties = response.data;
      });
    },
    getalltenantsCount: function getalltenantsCount() {
      var _this2 = this;

      axios.get('/api/getalltenantsCount').then(function (response) {
        _this2.tenants = response.data;
      });
    },
    getallroomCount: function getallroomCount() {
      var _this3 = this;

      axios.get('/api/getallroomCount').then(function (response) {
        _this3.rooms = response.data;
      });
    },
    getalllandlordCount: function getalllandlordCount() {
      var _this4 = this;

      axios.get('/api/getalllandlordCount').then(function (response) {
        _this4.landlords = response.data;
      });
    },
    get_properties_list_Unverified: function get_properties_list_Unverified() {
      var _this5 = this;

      axios.get('/api/get_properties_list_Unverified?land=1').then(function (response) {
        _this5.unverified = response.data.data;
      });
    },
    theFormat: function theFormat(number) {
      return number.toFixed(2);
    },
    playAnimation1: function playAnimation1() {
      this.$refs.number1.play();
    },
    playAnimation2: function playAnimation2() {
      this.$refs.number2.play();
    },
    playAnimation3: function playAnimation3() {
      this.$refs.number3.play();
    },
    playAnimation4: function playAnimation4() {
      this.$refs.number4.play();
    }
  },
  mounted: function mounted() {
    this.getallpropertyCount();
    this.getalltenantsCount();
    this.getallroomCount();
    this.getalllandlordCount();
    this.get_properties_list_Unverified();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Dashboard_Landlord.vue?vue&type=template&id=37228ddb&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRegistrationUsers/Dashboard_Landlord.vue?vue&type=template&id=37228ddb& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        staticClass:
          "grid mb-4 pb-10 px-8 mx-4 rounded-3xl bg-gray-100 shadow-lg mt-5",
      },
      [
        _c("div", { staticClass: "grid grid-cols-12 gap-6" }, [
          _c(
            "div",
            {
              staticClass: "grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9",
            },
            [
              _c("div", { staticClass: "col-span-12 mt-8" }, [
                _c(
                  "div",
                  { staticClass: "flex items-center h-10 intro-y" },
                  [
                    _c("center", [
                      _c("h2", { staticClass: "text-2xl font-bold truncate" }, [
                        _vm._v("Dashboard"),
                      ]),
                    ]),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "grid grid-cols-12 gap-6 mt-5" }, [
                  _c(
                    "a",
                    {
                      staticClass:
                        "transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white",
                      on: { click: _vm.playAnimation1 },
                    },
                    [
                      _c("div", { staticClass: "p-5" }, [
                        _c("div", { staticClass: "flex justify-between" }, [
                          _c(
                            "svg",
                            {
                              staticClass: "h-7 w-7 text-green-400",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                              },
                            },
                            [
                              _c("path", {
                                attrs: {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
                                },
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(0),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ml-2 w-full flex-1" }, [
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mt-3 text-3xl font-bold leading-8",
                              },
                              [
                                _c("number", {
                                  ref: "number1",
                                  attrs: {
                                    from: 0,
                                    to: _vm.properties,
                                    duration: 1,
                                    easing: "Power1.easeOut",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mt-1 text-base text-gray-600" },
                              [_vm._v("units")]
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white",
                      on: { click: _vm.playAnimation2 },
                    },
                    [
                      _c("div", { staticClass: "p-5" }, [
                        _c("div", { staticClass: "flex justify-between" }, [
                          _c(
                            "svg",
                            {
                              staticClass: "h-7 w-7 text-yellow-400",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                              },
                            },
                            [
                              _c("path", {
                                attrs: {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                                },
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(1),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ml-2 w-full flex-1" }, [
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mt-3 text-3xl font-bold leading-8",
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "mt-3 text-3xl font-bold leading-8",
                                  },
                                  [
                                    _c("number", {
                                      ref: "number2",
                                      attrs: {
                                        from: 0,
                                        to: _vm.tenants,
                                        duration: 0.5,
                                        easing: "Power1.easeOut",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mt-1 text-base text-gray-600" },
                              [_vm._v("students")]
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white",
                      on: { click: _vm.playAnimation3 },
                    },
                    [
                      _c("div", { staticClass: "p-5" }, [
                        _c("div", { staticClass: "flex justify-between" }, [
                          _c(
                            "svg",
                            {
                              staticClass: "h-7 w-7 text-pink-600",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                              },
                            },
                            [
                              _c("path", {
                                attrs: {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
                                },
                              }),
                              _vm._v(" "),
                              _c("path", {
                                attrs: {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z",
                                },
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(2),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ml-2 w-full flex-1" }, [
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mt-3 text-3xl font-bold leading-8",
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "mt-3 text-3xl font-bold leading-8",
                                  },
                                  [
                                    _c("number", {
                                      ref: "number3",
                                      attrs: {
                                        from: 0,
                                        to: _vm.vacant,
                                        duration: 0.5,
                                        easing: "Power1.easeOut",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mt-1 text-base text-gray-600" },
                              [_vm._v("rooms")]
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white",
                      on: { click: _vm.playAnimation4 },
                    },
                    [
                      _c("div", { staticClass: "p-5" }, [
                        _c("div", { staticClass: "flex justify-between" }, [
                          _c(
                            "svg",
                            {
                              staticClass: "h-7 w-7 text-blue-400",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                              },
                            },
                            [
                              _c("path", {
                                attrs: {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
                                },
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(3),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ml-2 w-full flex-1" }, [
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mt-3 text-3xl font-bold leading-8",
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "mt-3 text-3xl font-bold leading-8",
                                  },
                                  [
                                    _c("number", {
                                      ref: "number4",
                                      attrs: {
                                        from: 0,
                                        to: _vm.totals,
                                        format: _vm.theFormat,
                                        duration: 0.5,
                                        easing: "Power1.easeOut",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mt-1 text-base text-gray-600" },
                              [_vm._v("MYR")]
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-span-12 mt-5" }, [
                _c(
                  "div",
                  { staticClass: "grid gap-2 grid-cols-1 lg:grid-cols-1" },
                  [
                    _c(
                      "div",
                      { staticClass: "bg-white p-4 shadow-lg rounded-lg" },
                      [
                        _c("h1", { staticClass: "font-bold text-base" }, [
                          _vm._v("My Rooms Listings"),
                        ]),
                        _vm._v(" "),
                        _vm.isReady == true
                          ? _c("div", [
                              _c("div", { staticClass: "mt-4" }, [
                                _c("div", { staticClass: "flex flex-col" }, [
                                  _c(
                                    "div",
                                    { staticClass: "-my-2 overflow-x-auto" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "py-2 align-middle inline-block min-w-full",
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white",
                                            },
                                            [
                                              _c(
                                                "table",
                                                {
                                                  staticClass:
                                                    "min-w-full divide-y divide-gray-200",
                                                },
                                                [
                                                  _vm._m(4),
                                                  _vm._v(" "),
                                                  _c(
                                                    "tbody",
                                                    {
                                                      staticClass:
                                                        "bg-white divide-y divide-gray-200",
                                                    },
                                                    [
                                                      _vm._l(
                                                        _vm.rooms,
                                                        function (room) {
                                                          return _c(
                                                            "tr",
                                                            { key: room.id },
                                                            [
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticClass:
                                                                    "flex px-6 py-4 whitespace-no-wrap text-sm leading-5 ",
                                                                },
                                                                [
                                                                  _c("img", {
                                                                    staticClass:
                                                                      "mr-2 w-6 h-6 rounded-full",
                                                                    attrs: {
                                                                      src:
                                                                        "/images/Properties/" +
                                                                        room
                                                                          .photo_room[0]
                                                                          .photo_name,
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "router-link",
                                                                    {
                                                                      staticClass:
                                                                        "cursor-pointer hover:underline",
                                                                      attrs: {
                                                                        to: {
                                                                          name: "view_room_list",
                                                                          params:
                                                                            {
                                                                              id: room.id,
                                                                            },
                                                                        },
                                                                      },
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          room.listing_name
                                                                        ) +
                                                                          "\n                                                                "
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticClass:
                                                                    "px-6 py-4 whitespace-no-wrap text-sm leading-5",
                                                                },
                                                                [
                                                                  _c("p", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        room.room_type
                                                                      )
                                                                    ),
                                                                  ]),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticClass:
                                                                    "px-6 py-4 whitespace-no-wrap text-sm leading-5",
                                                                },
                                                                [
                                                                  _c("p", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        room.campus
                                                                      )
                                                                    ),
                                                                  ]),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticClass:
                                                                    "px-6 py-4 whitespace-no-wrap text-sm leading-5",
                                                                },
                                                                [
                                                                  _c("p", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        room.property_id
                                                                      )
                                                                    ),
                                                                  ]),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticClass:
                                                                    "px-6 py-4 whitespace-no-wrap text-sm leading-5 capitalize",
                                                                },
                                                                [
                                                                  _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "flex text-green-500",
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "svg",
                                                                        {
                                                                          staticClass:
                                                                            "w-5 h-5 mr-1",
                                                                          attrs:
                                                                            {
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
                                                                                  d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                                                                                },
                                                                            }
                                                                          ),
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c("p", [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            room.room_status
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
                                                                    "px-6 py-4 whitespace-no-wrap text-sm leading-5",
                                                                },
                                                                [
                                                                  _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "flex space-x-4",
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "router-link",
                                                                        {
                                                                          staticClass:
                                                                            "text-blue-500 hover:text-blue-600",
                                                                          attrs:
                                                                            {
                                                                              to: {
                                                                                name: "room_landlord",
                                                                                params:
                                                                                  {
                                                                                    room_id:
                                                                                      room.id,
                                                                                  },
                                                                              },
                                                                            },
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "svg",
                                                                            {
                                                                              staticClass:
                                                                                "w-5 h-5 mr-1",
                                                                              attrs:
                                                                                {
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
                                                                                      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                                                                                    },
                                                                                }
                                                                              ),
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "p",
                                                                            [
                                                                              _vm._v(
                                                                                "View"
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
                                                          )
                                                        }
                                                      ),
                                                      _vm._v(" "),
                                                      _vm.rooms.length == 0
                                                        ? _c("tr", [
                                                            _c(
                                                              "td",
                                                              {
                                                                attrs: {
                                                                  colspan: "6",
                                                                },
                                                              },
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
                                                                    _c(
                                                                      "center",
                                                                      [
                                                                        _c(
                                                                          "p",
                                                                          {
                                                                            staticClass:
                                                                              "font-bold text-base",
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "\n                                                                   You have not register any property's room yet.\n                                                                "
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
                                                        : _vm._e(),
                                                    ],
                                                    2
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
                              ]),
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
                      ]
                    ),
                  ]
                ),
              ]),
            ]
          ),
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
    return _c(
      "div",
      {
        staticClass:
          "bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm",
      },
      [
        _c("span", { staticClass: "flex items-center" }, [
          _vm._v("Registered Properties"),
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
        staticClass:
          "bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm",
      },
      [
        _c("span", { staticClass: "flex items-center" }, [
          _vm._v("Total Tenants"),
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
        staticClass:
          "bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm",
      },
      [
        _c("span", { staticClass: "flex items-center" }, [
          _vm._v("Vacant Rooms"),
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
        staticClass:
          "bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm",
      },
      [
        _c("span", { staticClass: "flex items-center" }, [
          _vm._v("Rent Collected"),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",
          },
          [
            _c("div", { staticClass: "flex cursor-pointer" }, [
              _c("span", { staticClass: "mr-2" }, [_vm._v("ROOMS LIST")]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",
          },
          [
            _c("div", { staticClass: "flex cursor-pointer" }, [
              _c("span", { staticClass: "mr-2" }, [_vm._v("ROOMS TYPE")]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",
          },
          [
            _c("div", { staticClass: "flex cursor-pointer" }, [
              _c("span", { staticClass: "mr-2" }, [_vm._v("CAMPUS")]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",
          },
          [
            _c("div", { staticClass: "flex cursor-pointer" }, [
              _c("span", { staticClass: "mr-2" }, [_vm._v("PROPERTY ID")]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",
          },
          [
            _c("div", { staticClass: "flex cursor-pointer" }, [
              _c("span", { staticClass: "mr-2" }, [_vm._v("STATUS")]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",
          },
          [
            _c("div", { staticClass: "flex cursor-pointer" }, [
              _c("span", { staticClass: "mr-2" }, [_vm._v("ACTION")]),
            ]),
          ]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Dashboard_Student.vue?vue&type=template&id=c45b11e0&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRegistrationUsers/Dashboard_Student.vue?vue&type=template&id=c45b11e0& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", {}, [
        _vm._v(
          "\n\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore sit, repellendus sunt laboriosam animi neque tempore similique autem laudantium maxime, consequatur corrupti magnam nulla velit nihil tempora sapiente reprehenderit veritatis, optio odio aut nemo porro necessitatibus? Quae consequatur corrupti modi ipsum veniam quasi. Delectus labore incidunt facere eligendi id provident magnam nemo obcaecati quo. Illo ducimus autem explicabo vel. Maiores id sunt dolore nihil voluptate cupiditate voluptatibus non magni quae voluptatum modi quas, iure perspiciatis? Laudantium sequi quod vel totam explicabo porro? Ullam, consequatur consequuntur dolorum, sed sit eaque nulla quod ab natus in ea labore, voluptatem asperiores nam quidem exercitationem maxime! Esse a nisi cumque, omnis, incidunt nesciunt, est quam veniam deserunt soluta quos nostrum alias aut odio sunt dolores minus deleniti qui! In eveniet dicta error, harum enim sit aut eos molestias delectus quam consequatur quod consectetur reiciendis ipsum nam et magni architecto, cum repudiandae vitae. Expedita omnis perferendis tenetur ad inventore ab obcaecati iure accusantium facere neque deleniti, atque earum est consequuntur laborum sint exercitationem ut culpa vitae quisquam veniam asperiores quibusdam? Provident deserunt reiciendis dolor facere eos ad quo molestias sequi vel ut, in, illum quas sit. Ipsa facere facilis, officiis nisi at nesciunt suscipit alias voluptatibus beatae aspernatur ex, atque nihil fugiat et, totam blanditiis necessitatibus esse perferendis vitae sed earum libero rem doloribus. Asperiores, cupiditate nobis repellat error omnis perspiciatis labore fuga suscipit obcaecati praesentium laudantium deleniti molestiae aut officia qui, corrupti nulla? Explicabo dolorem beatae veniam! Iure perspiciatis doloremque dolor repudiandae illum provident maiores voluptas tempore ratione nulla. Officiis provident magni necessitatibus vitae aut, veritatis sequi quam corrupti voluptate nostrum. Doloribus, sapiente! Commodi expedita facilis hic error alias reiciendis unde eaque ullam praesentium minima eum laudantium illo, dolores magnam nostrum! Sequi, recusandae eius? Odit accusamus nobis reiciendis dolores, molestias itaque numquam cupiditate non facere. Voluptate, vero illum, sit magnam ea nostrum earum numquam dignissimos labore tempore consequatur. At rem dolore deleniti aliquam adipisci nobis cumque laudantium perspiciatis, officiis odit omnis molestias, ab fugit sit dolor voluptatum, tenetur ducimus corrupti error natus quas hic? Consequatur quae iure itaque reprehenderit nemo eligendi mollitia delectus suscipit dolor voluptate cupiditate id officia quos beatae, soluta excepturi rem esse tempore sed odio ratione quis! Vel blanditiis explicabo dolore perspiciatis ullam doloremque fugit minima harum a, nesciunt commodi, maiores quos officiis fuga laudantium odit ducimus obcaecati tempore eum tempora quaerat architecto quisquam. Fugit reprehenderit eum itaque, sunt enim ad harum. Culpa soluta voluptates vel consectetur voluptate commodi libero laborum dolorem aperiam labore aut est quasi accusantium cupiditate dolore, ipsam consequatur necessitatibus praesentium cum blanditiis earum sint quidem dolorum alias. Enim error, molestias sint quidem, ducimus quaerat commodi architecto sequi vitae reiciendis maiores corrupti nam? Eius ad molestiae exercitationem, ab asperiores odio cupiditate corrupti veniam, beatae ut temporibus alias? Aliquid illum cumque qui voluptates excepturi laborum necessitatibus, culpa odit eius magni eveniet non mollitia saepe ipsa molestias? Ea a soluta at repellat unde sit numquam tempora, optio nihil laborum nostrum! Aspernatur dolor iusto, libero culpa similique in nam vitae quis voluptate ipsa illo. Tenetur voluptatibus necessitatibus numquam atque doloremque expedita debitis? Sunt, dicta. Iste eum ratione excepturi omnis dolorem ex consequuntur nostrum obcaecati provident, minima, ipsam explicabo non, fuga quo. Commodi id libero, corrupti, praesentium nemo ducimus asperiores deleniti distinctio eaque ratione tenetur fugiat sit ad iure ex cupiditate. Repudiandae, aperiam tempore fuga recusandae dolore eum consequuntur exercitationem suscipit veniam dolorem perspiciatis ipsa est earum. Tempore rem nesciunt alias recusandae quo nihil. Eligendi voluptatum vitae inventore accusamus rerum, ea nemo ipsa temporibus nam nobis velit mollitia eaque sunt dolores similique! Eveniet, soluta expedita. Recusandae, delectus ab vitae minus facilis officiis dolore saepe ipsam. Quisquam officia tempore aspernatur nam amet reiciendis quis consectetur! Perspiciatis aut possimus repudiandae nesciunt ab! Quae id, aperiam dolorum quaerat incidunt blanditiis repellendus? Esse magnam, id officiis error iure ad animi sunt nam placeat explicabo sequi. Nihil, voluptates, pariatur ipsam aut facilis quibusdam sapiente nostrum ad dignissimos provident, earum quod. Quod atque, nobis nostrum aliquam dignissimos laudantium, nemo quibusdam, voluptates consectetur velit inventore! Nobis atque iste provident consequuntur quam ullam, harum earum alias doloremque odit quisquam inventore deleniti accusantium, amet aspernatur unde dolorem corporis, consectetur mollitia adipisci nisi nulla ratione. Veritatis similique ducimus deserunt aut necessitatibus, vero commodi hic consequuntur numquam, eligendi ut pariatur dolore exercitationem? Distinctio exercitationem non magnam recusandae fugit ullam quasi adipisci praesentium quis obcaecati, unde error numquam pariatur nostrum rerum ipsum? Modi, alias rerum. Iusto corporis saepe est iste sed nulla doloremque qui omnis delectus unde, sequi veritatis animi! Reprehenderit, excepturi. In molestias tenetur omnis error, sapiente repudiandae dolores, quia iste autem eum laudantium officia a? Cumque quo error expedita voluptate sint facere hic corporis unde? Commodi temporibus soluta, in ex suscipit tempora alias, recusandae consectetur asperiores amet odit animi dolorem at quia beatae laborum accusamus optio. Non, blanditiis repellat. Delectus reprehenderit, atque dolores officiis doloribus obcaecati non id deleniti ut, at accusamus impedit vitae enim dolorum possimus, modi iste nulla earum laborum saepe optio. Molestias vitae repellat suscipit a voluptatem perspiciatis, cupiditate quae asperiores laboriosam praesentium harum, non distinctio maiores modi maxime quasi ipsam! Nobis blanditiis quidem unde velit dolores repellendus corrupti molestias suscipit iure praesentium ipsam est ex doloremque, numquam magni non in recusandae eius quo. Ut numquam cumque voluptate exercitationem beatae. Autem ex tenetur vel nisi voluptatum odit, repudiandae unde repellat iure optio pariatur animi adipisci? Nulla vero, cupiditate maxime delectus nesciunt deleniti nostrum mollitia nisi assumenda. Doloremque ducimus voluptatem, dolor expedita ea cumque facere voluptatibus sed voluptas corrupti repellat nihil aperiam impedit nostrum vel repudiandae officia labore quis. Quis repellat aut incidunt a facilis, aliquam possimus nostrum accusantium harum enim ea commodi odit magnam sed soluta doloribus quos voluptates consequatur inventore adipisci unde nesciunt iure itaque. Architecto itaque quo aperiam cupiditate possimus sunt autem odit veritatis reprehenderit eaque distinctio obcaecati dolores quisquam, porro totam debitis placeat dicta alias esse! Labore hic nisi sit quibusdam animi incidunt vel reiciendis explicabo nam officiis magnam perferendis, enim modi, quisquam recusandae libero quidem, assumenda facere vero impedit. Vitae doloribus ducimus rem aliquam nobis.\n\n    "
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Landing_Staff.vue?vue&type=template&id=5490d238&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRegistrationUsers/Landing_Staff.vue?vue&type=template&id=5490d238& ***!
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
  return _c("div", [
    _c(
      "div",
      {
        staticClass:
          "grid mb-4 pb-10 px-8 mx-4 rounded-3xl bg-transparent shadow-2xl",
      },
      [
        _c("div", { staticClass: "grid grid-cols-12 gap-6" }, [
          _c(
            "div",
            {
              staticClass: "grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9",
            },
            [
              _c("div", { staticClass: "col-span-12 mt-8" }, [
                _c(
                  "div",
                  { staticClass: "flex items-center h-10 intro-y" },
                  [
                    _c("center", [
                      _c("h2", { staticClass: "text-2xl font-bold truncate" }, [
                        _vm._v("Dashboard"),
                      ]),
                    ]),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "grid grid-cols-12 gap-6 mt-5" }, [
                  _c(
                    "a",
                    {
                      staticClass:
                        "transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white",
                      on: { click: _vm.playAnimation1 },
                    },
                    [
                      _c("div", { staticClass: "p-5" }, [
                        _c("div", { staticClass: "flex justify-between" }, [
                          _c(
                            "svg",
                            {
                              staticClass: "h-8 w-8 text-green-400",
                              attrs: {
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                              },
                            },
                            [
                              _c("path", {
                                attrs: {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                                },
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(0),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ml-2 w-full flex-1" }, [
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mt-3 text-3xl font-bold leading-8",
                              },
                              [
                                _c("number", {
                                  ref: "number1",
                                  attrs: {
                                    from: 0,
                                    to: _vm.properties,
                                    duration: 1,
                                    easing: "Power1.easeOut",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mt-1 text-base text-gray-600" },
                              [_vm._v("units")]
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white",
                      on: { click: _vm.playAnimation2 },
                    },
                    [
                      _c("div", { staticClass: "p-5" }, [
                        _c("div", { staticClass: "flex justify-between" }, [
                          _c(
                            "svg",
                            {
                              staticClass: "h-8 w-8 text-yellow-400",
                              attrs: {
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                              },
                            },
                            [
                              _c("path", {
                                attrs: {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                                },
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(1),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ml-2 w-full flex-1" }, [
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mt-3 text-3xl font-bold leading-8",
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "mt-3 text-3xl font-bold leading-8",
                                  },
                                  [
                                    _c("number", {
                                      ref: "number2",
                                      attrs: {
                                        from: 0,
                                        to: _vm.tenants,
                                        duration: 1,
                                        easing: "Power1.easeOut",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mt-1 text-base text-gray-600" },
                              [_vm._v("students")]
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white",
                      on: { click: _vm.playAnimation3 },
                    },
                    [
                      _c("div", { staticClass: "p-5" }, [
                        _c("div", { staticClass: "flex justify-between" }, [
                          _c(
                            "svg",
                            {
                              staticClass: "h-8 w-8 text-pink-400",
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
                                attrs: {
                                  x1: "3",
                                  y1: "21",
                                  x2: "21",
                                  y2: "21",
                                },
                              }),
                              _vm._v(" "),
                              _c("path", {
                                attrs: {
                                  d: "M4 21v-15a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v15",
                                },
                              }),
                              _vm._v(" "),
                              _c("path", {
                                attrs: { d: "M9 21v-8a3 3 0 0 1 6 0v8" },
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(2),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ml-2 w-full flex-1" }, [
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mt-3 text-3xl font-bold leading-8",
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "mt-3 text-3xl font-bold leading-8",
                                  },
                                  [
                                    _c("number", {
                                      ref: "number3",
                                      attrs: {
                                        from: 0,
                                        to: _vm.rooms,
                                        duration: 1,
                                        easing: "Power1.easeOut",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mt-1 text-base text-gray-600" },
                              [_vm._v("rooms")]
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white",
                      on: { click: _vm.playAnimation4 },
                    },
                    [
                      _c("div", { staticClass: "p-5" }, [
                        _c("div", { staticClass: "flex justify-between" }, [
                          _c(
                            "svg",
                            {
                              staticClass: "h-8 w-8 text-blue-400",
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
                              _c("circle", {
                                attrs: { cx: "9", cy: "7", r: "4" },
                              }),
                              _vm._v(" "),
                              _c("path", {
                                attrs: {
                                  d: "M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",
                                },
                              }),
                              _vm._v(" "),
                              _c("path", {
                                attrs: { d: "M16 3.13a4 4 0 0 1 0 7.75" },
                              }),
                              _vm._v(" "),
                              _c("path", {
                                attrs: { d: "M21 21v-2a4 4 0 0 0 -3 -3.85" },
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(3),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ml-2 w-full flex-1" }, [
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mt-3 text-3xl font-bold leading-8",
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "mt-3 text-3xl font-bold leading-8",
                                  },
                                  [
                                    _c("number", {
                                      ref: "number4",
                                      attrs: {
                                        from: 0,
                                        to: _vm.landlords,
                                        duration: 1,
                                        easing: "Power1.easeOut",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mt-1 text-base text-gray-600" },
                              [_vm._v("landlords")]
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-span-12 mt-5" }, [
                _c(
                  "div",
                  { staticClass: "grid gap-2 grid-cols-1 lg:grid-cols-1" },
                  [
                    _c(
                      "div",
                      { staticClass: "bg-white p-4 shadow-lg rounded-lg" },
                      [
                        _c("h1", { staticClass: "font-bold text-base" }, [
                          _vm._v("Landlord's Property Applications"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mt-4" }, [
                          _c("div", { staticClass: "flex flex-col" }, [
                            _c(
                              "div",
                              { staticClass: "-my-2 overflow-x-auto" },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "py-2 align-middle inline-block min-w-full",
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white",
                                      },
                                      [
                                        _c(
                                          "table",
                                          {
                                            staticClass:
                                              "min-w-full divide-y divide-gray-200",
                                          },
                                          [
                                            _vm._m(4),
                                            _vm._v(" "),
                                            _c(
                                              "tbody",
                                              {
                                                staticClass:
                                                  "bg-white divide-y divide-gray-200",
                                              },
                                              [
                                                _vm._l(
                                                  _vm.unverified,
                                                  function (room) {
                                                    return _c(
                                                      "tr",
                                                      { key: room.id },
                                                      [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "flex px-6 py-4 whitespace-no-wrap text-sm leading-5 ",
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                                    " +
                                                                _vm._s(
                                                                  room.name
                                                                ) +
                                                                "\n                                                            "
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "px-6 py-4 whitespace-no-wrap text-sm leading-5",
                                                          },
                                                          [
                                                            _c("p", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  room.land
                                                                    .landlord_name
                                                                )
                                                              ),
                                                            ]),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "px-6 py-4 whitespace-no-wrap text-sm leading-5",
                                                          },
                                                          [
                                                            _c("p", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  room.campus
                                                                )
                                                              ),
                                                            ]),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "px-6 py-4 whitespace-no-wrap text-sm leading-5",
                                                          },
                                                          [
                                                            _c("p", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm
                                                                    .moment(
                                                                      room.created_at
                                                                    )
                                                                    .format(
                                                                      "DD-MM-YYYY, h:mm a"
                                                                    )
                                                                )
                                                              ),
                                                            ]),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "px-6 py-4 whitespace-no-wrap text-sm leading-5 capitalize",
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "flex text-red-500",
                                                              },
                                                              [
                                                                _c(
                                                                  "svg",
                                                                  {
                                                                    staticClass:
                                                                      "w-5 h-5 mr-1",
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
                                                                        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                                                                      },
                                                                    }),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c("p", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      room.status
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
                                                              "px-6 py-4 whitespace-no-wrap text-sm leading-5",
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "flex space-x-4",
                                                              },
                                                              [
                                                                _c(
                                                                  "router-link",
                                                                  {
                                                                    staticClass:
                                                                      "text-blue-500 hover:text-blue-600",
                                                                    attrs: {
                                                                      to: {
                                                                        name: "view_property",
                                                                        params:
                                                                          {
                                                                            property_id:
                                                                              room.id,
                                                                          },
                                                                      },
                                                                      target:
                                                                        "_blank",
                                                                    },
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "svg",
                                                                      {
                                                                        staticClass:
                                                                          "w-5 h-5 mr-1",
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
                                                                                d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                                                                              },
                                                                          }
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c("p", [
                                                                      _vm._v(
                                                                        "View"
                                                                      ),
                                                                    ]),
                                                                  ]
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    )
                                                  }
                                                ),
                                                _vm._v(" "),
                                                _vm.unverified.length == 0
                                                  ? _c("tr", [
                                                      _c(
                                                        "td",
                                                        {
                                                          attrs: {
                                                            colspan: "6",
                                                          },
                                                        },
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
                                                                      "font-bold text-xl",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                                   There are no latest applications\n                                                                "
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
                                              ],
                                              2
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
                        ]),
                      ]
                    ),
                  ]
                ),
              ]),
            ]
          ),
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
    return _c(
      "div",
      {
        staticClass:
          "bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm",
      },
      [
        _c("span", { staticClass: "flex items-center" }, [
          _vm._v("Registered Properties"),
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
        staticClass:
          "bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm",
      },
      [
        _c("span", { staticClass: "flex items-center" }, [
          _vm._v("Total Tenants"),
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
        staticClass:
          "bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm",
      },
      [
        _c("span", { staticClass: "flex items-center" }, [
          _vm._v("Total Rooms"),
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
        staticClass:
          "bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm",
      },
      [
        _c("span", { staticClass: "flex items-center" }, [
          _vm._v("Total Landlord"),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",
          },
          [
            _c("div", { staticClass: "flex cursor-pointer" }, [
              _c("span", { staticClass: "mr-2" }, [_vm._v("PROPERTY")]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",
          },
          [
            _c("div", { staticClass: "flex cursor-pointer" }, [
              _c("span", { staticClass: "mr-2" }, [_vm._v("LANDLORD")]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",
          },
          [
            _c("div", { staticClass: "flex cursor-pointer" }, [
              _c("span", { staticClass: "mr-2" }, [_vm._v("CAMPUS")]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",
          },
          [
            _c("div", { staticClass: "flex cursor-pointer" }, [
              _c("span", { staticClass: "mr-2" }, [_vm._v("APPLICATION DATE")]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",
          },
          [
            _c("div", { staticClass: "flex cursor-pointer" }, [
              _c("span", { staticClass: "mr-2" }, [_vm._v("STATUS")]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",
          },
          [
            _c("div", { staticClass: "flex cursor-pointer" }, [
              _c("span", { staticClass: "mr-2" }, [_vm._v("ACTION")]),
            ]),
          ]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Dashboard_Landlord.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Dashboard_Landlord.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_Landlord_vue_vue_type_template_id_37228ddb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard_Landlord.vue?vue&type=template&id=37228ddb& */ "./resources/js/components/ManageRegistrationUsers/Dashboard_Landlord.vue?vue&type=template&id=37228ddb&");
/* harmony import */ var _Dashboard_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard_Landlord.vue?vue&type=script&lang=js& */ "./resources/js/components/ManageRegistrationUsers/Dashboard_Landlord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_Landlord_vue_vue_type_template_id_37228ddb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_Landlord_vue_vue_type_template_id_37228ddb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManageRegistrationUsers/Dashboard_Landlord.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Dashboard_Landlord.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Dashboard_Landlord.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard_Landlord.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Dashboard_Landlord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_Landlord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Dashboard_Landlord.vue?vue&type=template&id=37228ddb&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Dashboard_Landlord.vue?vue&type=template&id=37228ddb& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_Landlord_vue_vue_type_template_id_37228ddb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard_Landlord.vue?vue&type=template&id=37228ddb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Dashboard_Landlord.vue?vue&type=template&id=37228ddb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_Landlord_vue_vue_type_template_id_37228ddb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_Landlord_vue_vue_type_template_id_37228ddb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Dashboard_Student.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Dashboard_Student.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_Student_vue_vue_type_template_id_c45b11e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard_Student.vue?vue&type=template&id=c45b11e0& */ "./resources/js/components/ManageRegistrationUsers/Dashboard_Student.vue?vue&type=template&id=c45b11e0&");
/* harmony import */ var _Dashboard_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard_Student.vue?vue&type=script&lang=js& */ "./resources/js/components/ManageRegistrationUsers/Dashboard_Student.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_Student_vue_vue_type_template_id_c45b11e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_Student_vue_vue_type_template_id_c45b11e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManageRegistrationUsers/Dashboard_Student.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Dashboard_Student.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Dashboard_Student.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard_Student.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Dashboard_Student.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Dashboard_Student.vue?vue&type=template&id=c45b11e0&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Dashboard_Student.vue?vue&type=template&id=c45b11e0& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_Student_vue_vue_type_template_id_c45b11e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard_Student.vue?vue&type=template&id=c45b11e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Dashboard_Student.vue?vue&type=template&id=c45b11e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_Student_vue_vue_type_template_id_c45b11e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_Student_vue_vue_type_template_id_c45b11e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Landing_Staff.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Landing_Staff.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Landing_Staff_vue_vue_type_template_id_5490d238___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Landing_Staff.vue?vue&type=template&id=5490d238& */ "./resources/js/components/ManageRegistrationUsers/Landing_Staff.vue?vue&type=template&id=5490d238&");
/* harmony import */ var _Landing_Staff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Landing_Staff.vue?vue&type=script&lang=js& */ "./resources/js/components/ManageRegistrationUsers/Landing_Staff.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Landing_Staff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Landing_Staff_vue_vue_type_template_id_5490d238___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Landing_Staff_vue_vue_type_template_id_5490d238___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManageRegistrationUsers/Landing_Staff.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Landing_Staff.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Landing_Staff.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_Staff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Landing_Staff.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Landing_Staff.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_Staff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Landing_Staff.vue?vue&type=template&id=5490d238&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Landing_Staff.vue?vue&type=template&id=5490d238& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_Staff_vue_vue_type_template_id_5490d238___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Landing_Staff.vue?vue&type=template&id=5490d238& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Landing_Staff.vue?vue&type=template&id=5490d238&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_Staff_vue_vue_type_template_id_5490d238___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_Staff_vue_vue_type_template_id_5490d238___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);