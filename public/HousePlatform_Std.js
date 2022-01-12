(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HousePlatform_Std"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRentalProperty/AddRoommate_Modal.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRentalProperty/AddRoommate_Modal.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    prop_id: Number,
    former: Object
  },
  data: function data() {
    return {
      errors: new Errors(),
      modalBackground: '',
      id: '',
      mate: null,
      noresult: false
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get('/api/get_mate/' + this.id).then(function (response) {
        _this.mate = response.data.data[0];

        if (_this.mate == null || _this.mate == undefined || _this.mate.length == 0) {
          _this.noresult = true;
        } else {
          _this.noresult = false;
        }

        console.warn(_this.mate.data);
      });
    },
    addMate: function addMate(id, name) {
      var _this2 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "Send a roommate request to: " + name,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, send request!'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios.post('/api/send_requestRoommate/' + id, _this2.former).then(function (response) {
            _this2.closeModal();

            _this2.$emit("refreshData");

            console.log(response);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Roommate request sent!',
              showConfirmButton: false,
              timer: 1500
            });
          })["catch"](function (errors) {
            console.log(errors);
          });
        }
      });
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
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRentalProperty/HousePlatform_Std.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRentalProperty/HousePlatform_Std.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Post_Modal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post_Modal.vue */ "./resources/js/components/ManageRentalProperty/Post_Modal.vue");
/* harmony import */ var _AddRoommate_Modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddRoommate_Modal.vue */ "./resources/js/components/ManageRentalProperty/AddRoommate_Modal.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    RMModal: _AddRoommate_Modal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
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
      room_id: this.$route.params.id,
      toggleModal: false,
      toggleRModal: false,
      prop_id: '',
      posts: [],
      housemates: [],
      bills: [],
      bydate: '',
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

      axios.get('/api/get_roomPlatform/' + this.user_id + '/' + this.room_id + '?land=1&imej=1', {
        params: {
          location: this.location
        }
      }).then(function (response) {
        _this.info = response.data.data[0];
        _this.prop_id = _this.info.property_id;
        _this.form.property_id = _this.info.property_id;
        _this.form.room_id = _this.info.id;
        _this.form.tenancy_period = _this.info.tenants[0].tenancy_period;
        _this.form.move_in_date = _this.info.tenants[0].move_in_date;

        _this.getPost();

        _this.getHouseMate();

        console.warn(_this.info.data);
      });
    },
    getPost: function getPost() {
      var _this2 = this;

      axios.get('/api/get_post/' + this.user_id + '/' + this.prop_id + '?land=1&imej=1').then(function (response) {
        _this2.posts = response.data.data;
        console.warn(_this2.post.data);
      });
    },
    getHouseMate: function getHouseMate() {
      var _this3 = this;

      axios.get('/api/get_housemate/' + this.room_id + '/' + this.prop_id).then(function (response) {
        _this3.housemates = response.data.data;
        _this3.isReady = true;
        console.warn(_this3.housemates.data);
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

      axios.get('/api/get_bills/' + this.user_id + '/' + this.role, {
        params: {
          date: this.bydate
        }
      }).then(function (response) {
        _this5.bills = response.data;
        console.warn(_this5.data);
      });
    },
    checkBill: function checkBill() {
      this.$router.push({
        name: 'std_bills'
      });
    }
  },
  watch: {
    $route: function $route() {}
  },
  mounted: function mounted() {
    this.getData();
    this.getBills();
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRentalProperty/AddRoommate_Modal.vue?vue&type=template&id=ea2ecbee&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRentalProperty/AddRoommate_Modal.vue?vue&type=template&id=ea2ecbee& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
            "bg-gradient-to-bl from-yellow-200 via-yellow-300 to-yellow-400 rounded max-h-full overflow-y-auto shadow-lg w-11/12 md:w-1/3",
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
                _vm._v("Add Roommate"),
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
              "div",
              {
                staticClass:
                  "flex justify-center bg-white rounded-xl border-2 overflow-hidden",
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.id,
                      expression: "id",
                    },
                  ],
                  staticClass:
                    "block rounded-md border-0 focus:outline-none focus:ring-0 focus:border-blue-500 flex-grow p-2 px-3",
                  attrs: {
                    type: "Number",
                    min: "1",
                    required: "",
                    placeholder: "Search by student id",
                  },
                  domProps: { value: _vm.id },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.id = $event.target.value
                    },
                  },
                }),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.getData.apply(null, arguments)
                      },
                    },
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "h-6 w-6 my-auto m-2",
                        staticStyle: { color: "blue" },
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
                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                          },
                        }),
                      ]
                    ),
                  ]
                ),
              ]
            ),
            _vm._v(" "),
            _vm.mate != null
              ? _c("div", { staticClass: "max-w-3xl w-full mx-auto z-10" }, [
                  _c("div", { staticClass: "flex flex-col" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "bg-white border border-white shadow-lg  rounded-3xl p-4 m-4",
                      },
                      [
                        _c("div", { staticClass: "flex-none sm:flex" }, [
                          _c(
                            "div",
                            { staticClass: " relative h-28 w-32   sm:mb-0" },
                            [
                              _c("img", {
                                staticClass:
                                  " w-32 h-28 object-cover rounded-2xl",
                                attrs: {
                                  src: "/images/Profile/" + _vm.mate.pic,
                                  alt: "Avatar",
                                },
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "flex-auto sm:ml-5 justify-evenly" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "flex items-center justify-between sm:mt-2",
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "flex items-center" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "flex flex-col" },
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              staticClass:
                                                "w-full flex-none text-lg text-gray-800 font-bold leading-none hover:underline",
                                              attrs: {
                                                to: {
                                                  name: "std_profile_view",
                                                  params: {
                                                    role: 1,
                                                    id: _vm.mate.id,
                                                  },
                                                },
                                                target: "_blank",
                                              },
                                            },
                                            [_vm._v(_vm._s(_vm.mate.name))]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "flex-auto text-gray-500 my-1",
                                            },
                                            [
                                              _c(
                                                "span",
                                                { staticClass: "mr-3 " },
                                                [_vm._v(" Student")]
                                              ),
                                              _c("span", {
                                                staticClass:
                                                  "mr-3 border-r border-gray-200  max-h-0",
                                              }),
                                              _c("span", [
                                                _vm._v(
                                                  "ID: " + _vm._s(_vm.mate.id)
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
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "flex pt-2  text-sm text-gray-500",
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "flex-1 inline-flex items-center",
                                    },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          staticClass: "h-5 w-5 mr-2",
                                          attrs: {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                          },
                                        },
                                        [
                                          _c("path", {
                                            attrs: {
                                              d: "M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z",
                                            },
                                          }),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("p", {}, [
                                        _vm._v(" " + _vm._s(_vm.mate.gender)),
                                      ]),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "flex-1 inline-flex items-center",
                                    },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          staticClass: "h-5 w-5 mr-2",
                                          attrs: {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                          },
                                        },
                                        [
                                          _c("path", {
                                            attrs: {
                                              "fill-rule": "evenodd",
                                              d: "M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z",
                                              "clip-rule": "evenodd",
                                            },
                                          }),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("p", {}, [
                                        _vm._v(_vm._s(_vm.mate.phone_no)),
                                      ]),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "flex-no-shrink bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg\n                                ont-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300",
                                      on: {
                                        click: function ($event) {
                                          return _vm.addMate(
                                            _vm.mate.id,
                                            _vm.mate.name
                                          )
                                        },
                                      },
                                    },
                                    [_vm._v("ADD")]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]),
                      ]
                    ),
                  ]),
                ])
              : _vm.mate == undefined && _vm.noresult == true
              ? _c("div", [
                  _c(
                    "div",
                    { staticClass: "w-full text-white bg-blue-500 mt-5 mb-3" },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "container flex items-center justify-between px-6 py-4 mx-auto",
                        },
                        [
                          _c("div", { staticClass: "flex" }, [
                            _c(
                              "svg",
                              {
                                staticClass: "w-6 h-6 fill-current",
                                attrs: { viewBox: "0 0 40 40" },
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    d: "M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z",
                                  },
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c("p", { staticClass: "mx-3" }, [
                              _vm._v("No Result Found"),
                            ]),
                          ]),
                        ]
                      ),
                    ]
                  ),
                ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRentalProperty/HousePlatform_Std.vue?vue&type=template&id=502e0e91&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRentalProperty/HousePlatform_Std.vue?vue&type=template&id=502e0e91& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "profile-page" }, [
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
                          _vm._v(_vm._s(_vm.info.property.address)),
                        ]),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "std_profile_view",
                                params: { role: 2, id: _vm.info.landlord_id },
                              },
                              target: "_blank",
                            },
                          },
                          [
                            _c(
                              "h4",
                              {
                                staticClass:
                                  "text-sm font-semibold hover:underline hover:text-yellow-700 text-yellow-500",
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
                  "relative py-16  bg-conic-to-t from-gray-900 via-gray-100 to-gray-900",
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
                                        "overflow-y-auto h-48 p-5 resize-y",
                                      attrs: { id: "bulletin" },
                                    },
                                    _vm._l(_vm.posts, function (item) {
                                      return _c("div", { key: item.id }, [
                                        item.landlord != null
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "bg-conic-to-l from-yellow-200 via-red-500 to-fuchsia-500 rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-2",
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
                                                          item.landlord.pic,
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
                                                              "hover:underline text-purple-800 hover:text-purple-900",
                                                            attrs: {
                                                              to: {
                                                                name: "std_profile_view",
                                                                params: {
                                                                  role: 2,
                                                                  id: item
                                                                    .landlord
                                                                    .id,
                                                                },
                                                              },
                                                              target: "_blank",
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              " " +
                                                                _vm._s(
                                                                  item.landlord
                                                                    .name
                                                                ) +
                                                                " "
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" (Landlord) "),
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "text-xs ml-5 text-gray-700",
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
                                        item.student != null
                                          ? _c("div", [
                                              item.student.id != _vm.user_id
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "bg-conic-to-l from-yellow-200 via-red-500 to-fuchsia-500 rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-2 ",
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
                                                                item.student
                                                                  .pic,
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
                                                                    "hover:underline text-purple-800 hover:text-purple-900",
                                                                  attrs: {
                                                                    to: {
                                                                      name: "std_profile_view",
                                                                      params: {
                                                                        role: 1,
                                                                        id: item
                                                                          .student
                                                                          .id,
                                                                      },
                                                                    },
                                                                    target:
                                                                      "_blank",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    " " +
                                                                      _vm._s(
                                                                        item
                                                                          .student
                                                                          .name
                                                                      ) +
                                                                      " "
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-xs ml-5 text-gray-700",
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
                                                            _vm._s(item.post) +
                                                              "   "
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              item.student.id == _vm.user_id
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "bg-conic-to-r from-indigo-200 via-blue-gray-600 to-indigo-200 rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-2",
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            " flex-row  mr-2  w-full flex justify-end",
                                                        },
                                                        [
                                                          _c(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "justify-self-end w-4 h-4",
                                                              on: {
                                                                click:
                                                                  function (
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
                                                                    "text-gray-700  ml-auto",
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
                                                                "justify-self-start text-blue-800 font-semibold ml-5 mr-5 text-sm text-center md:text-left ",
                                                            },
                                                            [
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-xs ml-auto text-gray-700",
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
                                                                    item.student
                                                                      .name
                                                                  ) +
                                                                  "  "
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
                                                                item.student
                                                                  .pic,
                                                            },
                                                          }),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "p",
                                                        {
                                                          staticClass:
                                                            "text-gray-800 text-base md:text-left text-right justify-end ",
                                                          staticStyle: {
                                                            width: "90%",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(item.post) +
                                                              "   "
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  )
                                                : _vm._e(),
                                            ])
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
                                            [_vm._v("Rent This Month:")]
                                          ),
                                          _vm._v(" "),
                                          _vm.bills.payment_status == "Unpaid"
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-white text-center text-2xl",
                                                },
                                                [
                                                  _vm._v(
                                                    "RM " +
                                                      _vm._s(
                                                        _vm.bills.total_bills
                                                      )
                                                  ),
                                                ]
                                              )
                                            : _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-white text-center text-2xl",
                                                },
                                                [_vm._v(" Paid")]
                                              ),
                                          _vm._v(" "),
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "p-2 mt-5 w-1/2 rounded-md bg-blue-500 text-white hover:bg-blue-600 justify-self-center",
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
                          { staticClass: "p-5", attrs: { id: "My Rooms" } },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "bg-white w-full mx-auto rounded-2xl overflow-hidden shadow-lg",
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "h-14 flex justify-center items-center p-5",
                                    staticStyle: {
                                      "background-color": "#2b2a33",
                                    },
                                  },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass:
                                          "flex justify-center items-center",
                                        attrs: {
                                          to: {
                                            name: "view_room_list",
                                            params: { id: _vm.info.id },
                                          },
                                          target: "_blank",
                                        },
                                      },
                                      [
                                        _c("img", {
                                          staticClass:
                                            "h-7 w-7 mr-3 object-cover rounded-full",
                                          attrs: {
                                            src:
                                              "/images/Properties/" +
                                              _vm.info.photo_room[0].photo_name,
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "text-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text hover:underline ",
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.info.room_name) +
                                                " | ID: " +
                                                _vm._s(_vm.info.id)
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm.info.tenants.length <
                                    _vm.info.number_of_tenant
                                      ? _c(
                                          "button",
                                          {
                                            staticClass:
                                              "ml-48 px-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 grow-0 justify-self-end",
                                            on: {
                                              click: function ($event) {
                                                _vm.toggleRModal =
                                                  !_vm.toggleRModal
                                              },
                                            },
                                          },
                                          [_vm._v("Add Roommate")]
                                        )
                                      : _vm._e(),
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
                                        _vm._m(2),
                                        _vm._v(" "),
                                        _vm._l(
                                          _vm.info.tenants,
                                          function (item, index) {
                                            return _c(
                                              "tbody",
                                              {
                                                key: index,
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
                                                        staticClass:
                                                          "px-6 py-4",
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
                                                                item.student_id
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
                                                            name: "std_profile_view",
                                                            params: {
                                                              role: 1,
                                                              id: item.student_id,
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
                                                                  item.student
                                                                    .pic,
                                                              },
                                                            }),
                                                            _vm._v(" "),
                                                            _c("span", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item.student
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
                                                                item.student
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
                                                                  item.move_in_date
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
                                                                item.tenancy_period
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
                                                                item.tenant_status
                                                              )
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
                                          }
                                        ),
                                      ],
                                      2
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _vm._m(3),
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
                                      "h-14 flex justify-center items-center p-5",
                                    staticStyle: {
                                      "background-color": "#2b2a33",
                                    },
                                  },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass:
                                          "flex justify-center items-center",
                                        attrs: {
                                          to: {
                                            name: "view_room_list",
                                            params: { id: item.id },
                                          },
                                          target: "_blank",
                                        },
                                      },
                                      [
                                        _c("img", {
                                          staticClass:
                                            "h-7 w-7 mr-3 object-cover rounded-full",
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
                                              "text-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text hover:underline ",
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
                                        _vm._m(4, true),
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
                                                              mate.student_id
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
                                                          name: "std_profile_view",
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
                                                  { attrs: { colspan: "6" } },
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
                                                                "\n                                    No tenant occupy this room yet\n                                    "
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
                _vm._m(5),
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
              ? _c("RMModal", {
                  attrs: {
                    prop_id: _vm.prop_id,
                    former: _vm.form,
                    user_id: _vm.user_id,
                    role: _vm.role,
                  },
                  on: { refreshData: _vm.getData, closeModal: _vm.closeRModal },
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
          _vm._v("My Bills"),
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
          [_vm._v("My Rooms")]
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
              "\n                            Student ID\n                            "
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
              "\n                            Name\n                            "
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
              "\n                            Phone No.\n                            "
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
              "\n                            Move Date\n                            "
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
              "\n                            Tenancy Period\n                            "
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
              "\n                            Tenancy Status\n                            "
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
          [_vm._v("My Housemates")]
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
              "\n                            Student ID\n                            "
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
              "\n                            Name\n                            "
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
              "\n                            Phone No.\n                            "
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
              "\n                            Move Date\n                            "
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
              "\n                            Tenancy Period\n                            "
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
              "\n                            Tenancy Status\n                            "
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
                        "\n                    Home is where the heart is\n                "
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
              _c("h3", { staticClass: "font-semibold text-lg" }, [
                _vm._v("Write a Post"),
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
                  placeholder: "Profile descriptions",
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
                    "bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white",
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

/***/ "./resources/js/components/ManageRentalProperty/AddRoommate_Modal.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/ManageRentalProperty/AddRoommate_Modal.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddRoommate_Modal_vue_vue_type_template_id_ea2ecbee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddRoommate_Modal.vue?vue&type=template&id=ea2ecbee& */ "./resources/js/components/ManageRentalProperty/AddRoommate_Modal.vue?vue&type=template&id=ea2ecbee&");
/* harmony import */ var _AddRoommate_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddRoommate_Modal.vue?vue&type=script&lang=js& */ "./resources/js/components/ManageRentalProperty/AddRoommate_Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddRoommate_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddRoommate_Modal_vue_vue_type_template_id_ea2ecbee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddRoommate_Modal_vue_vue_type_template_id_ea2ecbee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManageRentalProperty/AddRoommate_Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManageRentalProperty/AddRoommate_Modal.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/ManageRentalProperty/AddRoommate_Modal.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRoommate_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddRoommate_Modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRentalProperty/AddRoommate_Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRoommate_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManageRentalProperty/AddRoommate_Modal.vue?vue&type=template&id=ea2ecbee&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/ManageRentalProperty/AddRoommate_Modal.vue?vue&type=template&id=ea2ecbee& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRoommate_Modal_vue_vue_type_template_id_ea2ecbee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddRoommate_Modal.vue?vue&type=template&id=ea2ecbee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRentalProperty/AddRoommate_Modal.vue?vue&type=template&id=ea2ecbee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRoommate_Modal_vue_vue_type_template_id_ea2ecbee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRoommate_Modal_vue_vue_type_template_id_ea2ecbee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ManageRentalProperty/HousePlatform_Std.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/ManageRentalProperty/HousePlatform_Std.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HousePlatform_Std_vue_vue_type_template_id_502e0e91___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HousePlatform_Std.vue?vue&type=template&id=502e0e91& */ "./resources/js/components/ManageRentalProperty/HousePlatform_Std.vue?vue&type=template&id=502e0e91&");
/* harmony import */ var _HousePlatform_Std_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HousePlatform_Std.vue?vue&type=script&lang=js& */ "./resources/js/components/ManageRentalProperty/HousePlatform_Std.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HousePlatform_Std_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HousePlatform_Std_vue_vue_type_template_id_502e0e91___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HousePlatform_Std_vue_vue_type_template_id_502e0e91___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManageRentalProperty/HousePlatform_Std.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManageRentalProperty/HousePlatform_Std.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/ManageRentalProperty/HousePlatform_Std.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HousePlatform_Std_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./HousePlatform_Std.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRentalProperty/HousePlatform_Std.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HousePlatform_Std_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManageRentalProperty/HousePlatform_Std.vue?vue&type=template&id=502e0e91&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/ManageRentalProperty/HousePlatform_Std.vue?vue&type=template&id=502e0e91& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HousePlatform_Std_vue_vue_type_template_id_502e0e91___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./HousePlatform_Std.vue?vue&type=template&id=502e0e91& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRentalProperty/HousePlatform_Std.vue?vue&type=template&id=502e0e91&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HousePlatform_Std_vue_vue_type_template_id_502e0e91___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HousePlatform_Std_vue_vue_type_template_id_502e0e91___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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