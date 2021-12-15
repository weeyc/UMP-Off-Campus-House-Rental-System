(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Manage_Staff"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/AvatarInput.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRegistrationUsers/AvatarInput.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ "./resources/js/components/ManageRegistrationUsers/Icon.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    value: File,
    defaultSrc: String
  },
  watch: {
    value: function value(file) {
      var _this = this;

      if (!file) {
        this.src = this.defaultSrc;
        this.$refs.file.value = "";
      } else {
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function (e) {
          _this.src = e.target.result;

          _this.$emit("getAva", _this.src);
        };
      }
    }
  },
  data: function data() {
    return {
      src: this.defaultSrc
    };
  },
  methods: {
    browse: function browse() {
      this.$refs.file.click();
    },
    remove: function remove() {
      this.$emit("input", null);
    },
    change: function change(e) {
      this.$emit("input", e.target.files[0]);
    }
  },
  components: {
    Icon: _Icon__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Create_Modal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRegistrationUsers/Create_Modal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AvatarInput_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvatarInput.vue */ "./resources/js/components/ManageRegistrationUsers/AvatarInput.vue");
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
  components: {
    AvatarInput: _AvatarInput_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        gender: 'male',
        phone_num: '',
        avatar: null,
        pic: ''
      },
      errors: new Errors()
    };
  },
  methods: {
    createUser: function createUser() {
      var _this = this;

      //  formData.set('image', this.form.avatar)
      axios.post('/api/create_staff', this.form).then(function () {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Staff created successfully!',
          showConfirmButton: false,
          timer: 1500
        });
        _this.form.name = '';
        _this.form.email = '';
        _this.form.gender = '';
        _this.form.password = '';
        _this.form.gender = '';
        _this.form.phone_num = '';
        _this.form.avatar = null;
        _this.form.pic = '', _this.closeModal();

        _this.$emit("refreshData");
      })["catch"](function (error) {
        return _this.errors.record(error.response.data);
      });
    },
    getAvatar: function getAvatar(event) {
      this.form.pic = event;
    },
    closeModal: function closeModal() {
      this.$emit("closeModal");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Icon.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRegistrationUsers/Icon.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    name: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Manage_Staff.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRegistrationUsers/Manage_Staff.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_Student_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal_Student.vue */ "./resources/js/components/ManageRegistrationUsers/Modal_Student.vue");
/* harmony import */ var _Create_Modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create_Modal.vue */ "./resources/js/components/ManageRegistrationUsers/Create_Modal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ReadModal: _Modal_Student_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    CreateModal: _Create_Modal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      staff: [],
      page: 1,
      lastPage: '',
      filterGender: '',
      filterName: '',
      toggleModal: false,
      toggleModalCreate: false,
      profile: {
        id: '',
        name: '',
        email: '',
        phone: '',
        gender: '',
        pic: '',
        role: '3'
      }
    };
  },
  computed: {
    filterUser: function filterUser() {
      var _this = this;

      return this.staff.filter(function (user) {
        //return user.gender.match(this.filterGender);
        if (_this.filterGender == "" && _this.filterName == "") {
          return user;
        } else if (user.gender == _this.filterGender && user.name.match(_this.filterName)) {
          return user;
        } else if (user.gender == _this.filterGender && _this.filterName == "") {
          return user;
        } else if (_this.filterGender == "" && user.name.toLowerCase().match(_this.filterName.toLowerCase())) return user.name.toLowerCase().match(_this.filterName.toLowerCase());
      });
    }
  },
  mounted: function mounted() {
    this.getStaff();
    this.getMeta();
  },
  methods: {
    getStaff: function getStaff() {
      var _this2 = this;

      axios.get('/api/get_staff?page=' + this.page).then(function (response) {
        _this2.staff = response.data.data;
        console.warn(_this2.staff.data);
      });
    },
    getMeta: function getMeta() {
      var _this3 = this;

      axios.get('/api/get_staff').then(function (response) {
        _this3.lastPage = response.data.meta.last_page;
        console.warn(response.data.meta.last_page);
      });
    },
    firstPg: function firstPg() {
      this.page = 1;
      this.getStaff();
    },
    currentPg: function currentPg() {
      this.page = this.page;
      this.getStaff();
    },
    lastPg: function lastPg() {
      this.page = this.lastPage;
      this.getStaff();
    },
    nextPg: function nextPg(pg) {
      if (pg >= this.lastPage) this.page = this.lastPage;else this.page = this.page + 1;
      this.getStaff();
    },
    previousPg: function previousPg(pg) {
      if (pg <= 1) {
        this.page = 1;
      } else this.page = this.page - 1;

      this.getStaff();
    },
    readUser: function readUser(user) {
      this.profile.id = user.id;
      this.profile.name = user.name;
      this.profile.email = user.email;
      this.profile.phone = user.phone_no;
      this.profile.gender = user.gender;
      this.profile.pic = user.pic;
    },
    deleteUser: function deleteUser(id, name) {
      var _this4 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "Delete Staff: " + name,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete this staff!'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios["delete"]('/api/delete_staff/' + id).then(function (response) {
            _this4.getStaff();

            console.log(response);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Staff deleted successfully!',
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
    },
    closeCreateModal: function closeCreateModal() {
      this.toggleModalCreate = !this.toggleModalCreate;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    form: Object
  },
  data: function data() {
    return {};
  },
  methods: {
    closeModal: function closeModal() {
      this.$emit('closeModal');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/AvatarInput.vue?vue&type=template&id=904519de&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRegistrationUsers/AvatarInput.vue?vue&type=template&id=904519de& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "relative inline-block overflow-hidden" }, [
    _c("input", {
      ref: "file",
      staticClass: "hidden",
      attrs: { type: "file", accept: "image/*" },
      on: { change: _vm.change },
    }),
    _vm._v(" "),
    _c("img", {
      staticClass: "h-full w-full object-cover",
      attrs: { src: _vm.src, alt: "Avatar" },
    }),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "absolute top-0 h-full w-full bg-black bg-opacity-25 flex items-center justify-center",
      },
      [
        _c(
          "button",
          {
            staticClass:
              "rounded-full hover:bg-white hover:bg-opacity-25 p-2 focus:outline-none text-white transition duration-200",
            attrs: { type: "button" },
            on: {
              click: function ($event) {
                return _vm.browse()
              },
            },
          },
          [_c("icon", { staticClass: "h-6 w-6", attrs: { name: "camera" } })],
          1
        ),
        _vm._v(" "),
        _vm.value
          ? _c(
              "button",
              {
                staticClass:
                  "rounded-full hover:bg-white hover:bg-opacity-25 p-2 focus:outline-none text-white transition duration-200",
                attrs: { type: "button" },
                on: {
                  click: function ($event) {
                    return _vm.remove()
                  },
                },
              },
              [_c("icon", { staticClass: "h-6 w-6", attrs: { name: "x" } })],
              1
            )
          : _vm._e(),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Create_Modal.vue?vue&type=template&id=4f06151a&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRegistrationUsers/Create_Modal.vue?vue&type=template&id=4f06151a& ***!
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
        "modal h-screen w-full fixed left-0 top-0 flex justify-center z-10 items-center bg-black bg-opacity-50",
    },
    [
      _c(
        "div",
        {
          staticClass:
            "bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 rounded max-h-full overflow-y-auto shadow-lg w-11/12 md:w-1/3",
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
                _vm._v("Create New Staff"),
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
              "h1",
              {
                staticClass:
                  "text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4",
              },
              [_vm._v("Enter Staff Details")]
            ),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "center",
                  [
                    _c("AvatarInput", {
                      staticClass: "w-32 h-32 rounded-full mb-5",
                      attrs: {
                        "default-src":
                          "https://thumbs.dreamstime.com/b/profile-picture-vector-perfect-social-media-other-web-use-125320944.jpg",
                      },
                      on: { getAva: _vm.getAvatar },
                      model: {
                        value: _vm.form.avatar,
                        callback: function ($$v) {
                          _vm.$set(_vm.form, "avatar", $$v)
                        },
                        expression: "form.avatar",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "flex items-center" }, [
              _c(
                "label",
                {
                  staticClass:
                    "inline-block w-20 mr-6 text-right font-bold text-gray-600",
                  attrs: { for: "name" },
                },
                [_vm._v("Name")]
              ),
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
                  "flex-1 mr-5 py-2 border-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none",
                attrs: { type: "text", name: "name", placeholder: "Name" },
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
            _c("div", { staticClass: " mb-5" }, [
              _c("span", { staticClass: "flex text-red-500 ml-24" }, [
                _vm._v(" " + _vm._s(_vm.errors.get("name"))),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex items-center" }, [
              _c(
                "label",
                {
                  staticClass:
                    "inline-block w-20 mr-6 text-right font-bold text-gray-600",
                  attrs: { for: "name" },
                },
                [_vm._v("Email")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.email,
                    expression: "form.email",
                  },
                ],
                staticClass:
                  "flex-1 mr-5 py-2 border-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none",
                attrs: { type: "email", name: "email", placeholder: "Email" },
                domProps: { value: _vm.form.email },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "email", $event.target.value)
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: " mb-5" }, [
              _c("span", { staticClass: "flex text-red-500 ml-24" }, [
                _vm._v(" " + _vm._s(_vm.errors.get("email"))),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex items-center" }, [
              _c(
                "label",
                {
                  staticClass:
                    "inline-block w-20 mr-6 text-right font-bold text-gray-600",
                  attrs: { for: "number" },
                },
                [_vm._v("Password")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.password,
                    expression: "form.password",
                  },
                ],
                staticClass:
                  "flex-1 mr-5 py-2 border-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none",
                attrs: {
                  type: "password",
                  id: "password",
                  name: "password",
                  placeholder: "password",
                },
                domProps: { value: _vm.form.password },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "password", $event.target.value)
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-5" }, [
              _c("span", { staticClass: "flex text-red-500 ml-24" }, [
                _vm._v(" " + _vm._s(_vm.errors.get("password"))),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex items-center" }, [
              _c(
                "label",
                {
                  staticClass:
                    "inline-block w-20 mr-6 text-right font-bold text-gray-600",
                  attrs: { for: "name" },
                },
                [_vm._v("Phone number")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.phone_num,
                    expression: "form.phone_num",
                  },
                ],
                staticClass:
                  "flex-1 mr-5 py-2 border-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none",
                attrs: {
                  type: "text",
                  name: "phone_num",
                  placeholder: "Phone number",
                },
                domProps: { value: _vm.form.phone_num },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "phone_num", $event.target.value)
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: " mb-5" }, [
              _c("span", { staticClass: "flex text-red-500 ml-24" }, [
                _vm._v(" " + _vm._s(_vm.errors.get("phone_num"))),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex items-center mb-5" }, [
              _c(
                "label",
                {
                  staticClass:
                    "inline-block w-20 mr-6 text-right font-bold text-gray-600",
                  attrs: { for: "gender" },
                },
                [_vm._v("Gender")]
              ),
              _vm._v(" "),
              _c("label", { staticClass: "flex radio p-2 cursor-pointer" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.gender,
                      expression: "form.gender",
                    },
                  ],
                  staticClass: "my-auto transform scale-125",
                  attrs: { type: "radio", name: "gender", value: "male" },
                  domProps: { checked: _vm._q(_vm.form.gender, "male") },
                  on: {
                    change: function ($event) {
                      return _vm.$set(_vm.form, "gender", "male")
                    },
                  },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "title px-2" }, [_vm._v("male")]),
              ]),
              _vm._v(" "),
              _c("label", { staticClass: "flex radio p-2 cursor-pointer" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.gender,
                      expression: "form.gender",
                    },
                  ],
                  staticClass: "my-auto transform scale-125",
                  attrs: { type: "radio", name: "gender", value: "female" },
                  domProps: { checked: _vm._q(_vm.form.gender, "female") },
                  on: {
                    change: function ($event) {
                      return _vm.$set(_vm.form, "gender", "female")
                    },
                  },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "title px-2" }, [_vm._v("female")]),
              ]),
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
                    "bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white",
                  attrs: { type: "submit" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.createUser.apply(null, arguments)
                    },
                  },
                },
                [_vm._v("Create")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Icon.vue?vue&type=template&id=68565889&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRegistrationUsers/Icon.vue?vue&type=template&id=68565889& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _vm.name === "x"
    ? _c(
        "svg",
        {
          staticClass: "bi bi-x",
          attrs: {
            viewBox: "0 0 16 16",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
          },
        },
        [
          _c("path", {
            attrs: {
              "fill-rule": "evenodd",
              d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z",
            },
          }),
        ]
      )
    : _vm.name === "camera"
    ? _c(
        "svg",
        {
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
              d: "M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z",
            },
          }),
          _vm._v(" "),
          _c("path", {
            attrs: {
              d: "M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z",
            },
          }),
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Manage_Staff.vue?vue&type=template&id=c3224e14&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRegistrationUsers/Manage_Staff.vue?vue&type=template&id=c3224e14& ***!
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
    { staticClass: "flex justify-center item-center pl-8 pb-10" },
    [
      _c(
        "div",
        {
          staticClass:
            "mx-auto container bg-white-500 dark:bg-gray-800 dark:bg-gray-800 shadow rounded ",
        },
        [
          _c(
            "div",
            {
              staticClass:
                "flex flex-col lg:flex-row p-2 lg:p-8 justify-between items-start lg:items-stretch w-full shadow-inner",
              staticStyle: { "background-image": "url(/images/BlueCoral.jpg)" },
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "w-full lg:w-1/5 flex flex-col lg:flex-row items-start lg:items-center ",
                },
                [
                  _c("div", { staticClass: "flex items-center" }, [
                    _c(
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
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "w-full lg:w-1/5 flex flex-col lg:flex-row items-start lg:items-center justify-end",
                },
                [
                  _c(
                    "div",
                    { staticClass: "flex flex-col items-center my-12" },
                    [
                      _c("div", { staticClass: "flex text-gray-700" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "h-8 w-8 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointe  shadow-lg hover:bg-pink-200",
                          },
                          [
                            _c(
                              "button",
                              {
                                on: {
                                  click: function ($event) {
                                    return _vm.previousPg(_vm.page)
                                  },
                                },
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass:
                                      "feather feather-chevron-left w-4 h-4",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "100%",
                                      height: "100%",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                      "stroke-width": "2",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                    },
                                  },
                                  [
                                    _c("polyline", {
                                      attrs: { points: "15 18 9 12 15 6" },
                                    }),
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
                              "flex h-8  font-medium rounded-full bg-gray-200  shadow-lg ",
                          },
                          [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full hover:bg-pink-200 ",
                                on: {
                                  click: function ($event) {
                                    return _vm.firstPg()
                                  },
                                },
                              },
                              [_vm._v("1")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  disabled ",
                              },
                              [_vm._v("...")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full hover:bg-pink-700 bg-pink-600 text-white ",
                                on: {
                                  click: function ($event) {
                                    return _vm.currentPg()
                                  },
                                },
                              },
                              [_vm._v(_vm._s(_vm.page))]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full   disabled",
                              },
                              [_vm._v("...")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full hover:bg-pink-200",
                                on: {
                                  click: function ($event) {
                                    return _vm.lastPg()
                                  },
                                },
                              },
                              [_vm._v(_vm._s(_vm.lastPage))]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "w-8 h-8 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-pink-600 text-white hover:bg-pink-200",
                              },
                              [_vm._v(_vm._s(_vm.page))]
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "h-8 w-8 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer  shadow-lg hover:bg-pink-200",
                          },
                          [
                            _c(
                              "button",
                              {
                                on: {
                                  click: function ($event) {
                                    return _vm.nextPg(_vm.page)
                                  },
                                },
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass:
                                      "feather feather-chevron-right w-4 h-4",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "100%",
                                      height: "100%",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                      "stroke-width": "2",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                    },
                                  },
                                  [
                                    _c("polyline", {
                                      attrs: { points: "9 18 15 12 9 6" },
                                    }),
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
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "w-full lg:w-1/5 flex flex-col lg:flex-row items-start lg:items-center  justify-center",
                },
                [
                  _c("div", { staticClass: "relative w-32 z-10" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.filterGender,
                            expression: "filterGender",
                          },
                        ],
                        staticClass:
                          "focus:outline-none border-transparent cursor-pointer focus:border-gray-800 hover:bg-pink-200 focus:shadow-outline-gray text-base form-select block w-full py-2 px-2 xl:px-3 rounded font-medium  appearance-none bg-transparent",
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
                            _vm.filterGender = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                        },
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Gender"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "male" } }, [
                          _vm._v("Male"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "female" } }, [
                          _vm._v("Female"),
                        ]),
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
                    "w-full lg:w-1/5 flex flex-col lg:flex-row  items-start lg:items-stretch lg:mt-12",
                },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "bg-gray-200   hover:bg-pink-200 rounded\n                    text-pink-700 px-5 h-8 shadow-lg ",
                      on: {
                        click: function ($event) {
                          _vm.toggleModalCreate = !_vm.toggleModalCreate
                        },
                      },
                    },
                    [_vm._v("Create Staff")]
                  ),
                ]
              ),
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "flex justify-center item-center mb-10" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.filterName,
                  expression: "filterName",
                },
              ],
              staticClass: "block w-5/12 py-2 px-2 text-lg rounded-lg",
              attrs: { type: "text", name: "name", placeholder: "Search Name" },
              domProps: { value: _vm.filterName },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.filterName = $event.target.value
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-full overflow-x-scroll xl:overflow-x-hidden" },
            [
              _c("table", { staticClass: "min-w-full shadow-lg border-b-2 " }, [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "tbody",
                  { staticClass: "text-dark-600 text-sm font-light" },
                  [
                    _vm._l(_vm.filterUser, function (user, index) {
                      return _c(
                        "tr",
                        {
                          key: user.id,
                          staticClass:
                            "border-b border-gray-200 hover:bg-pink-200",
                        },
                        [
                          _c(
                            "td",
                            {
                              staticClass:
                                "py-3 px-3 text-left whitespace-nowrap",
                            },
                            [_vm._v("  " + _vm._s(index + 1))]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass:
                                "py-3 px-6 text-left whitespace-nowrap",
                            },
                            [
                              _c("div", { staticClass: "flex items-center" }, [
                                _c("span", { staticClass: "font-medium" }, [
                                  _vm._v(_vm._s(user.id)),
                                ]),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "py-3 px-6 text-left" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "flex items-center",
                                  attrs: {
                                    to: {
                                      name: "profile_view",
                                      params: { role: 3, id: user.id },
                                    },
                                    target: "_blank",
                                  },
                                },
                                [
                                  _c("div", { staticClass: "mr-2" }, [
                                    _c("img", {
                                      staticClass:
                                        "w-6 h-6 rounded-full hover:scale-150 hover:z-10 transform ease-in-out transition duration-500",
                                      attrs: {
                                        src: "/images/Profile/" + user.pic,
                                      },
                                    }),
                                  ]),
                                  _vm._v(" "),
                                  _c("span", [_vm._v(_vm._s(user.name))]),
                                ]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "py-3 px-6 text-left" }, [
                            _c("div", { staticClass: "flex items-center" }, [
                              _c("span", [_vm._v(_vm._s(user.email))]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "py-3 px-6 text-left" }, [
                            _c("div", { staticClass: "flex items-center" }, [
                              _c("span", [_vm._v(_vm._s(user.phone_no))]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "py-3 px-6 text-left" }, [
                            user.gender === "male"
                              ? _c("span", [
                                  _vm._v("🧑 " + _vm._s(user.gender)),
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            user.gender === "female"
                              ? _c("span", [
                                  _vm._v("👩‍🦰  " + _vm._s(user.gender)),
                                ])
                              : _vm._e(),
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "py-3 px-6 text-center" }, [
                            _c(
                              "div",
                              {
                                staticClass: "flex item-center justify-center",
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
                                          click: function ($event) {
                                            _vm.readUser(user)
                                            _vm.toggleModal = !_vm.toggleModal
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
                                                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c("path", {
                                              attrs: {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                "stroke-width": "2",
                                                d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                                              },
                                            }),
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
                                          click: function ($event) {
                                            return _vm.deleteUser(
                                              user.id,
                                              user.name
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
                                                d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                              },
                                            }),
                                          ]
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
                    }),
                    _vm._v(" "),
                    _vm.filterUser.length == 0
                      ? _c("tr", [
                          _c("td", { attrs: { colspan: "7" } }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "bg-indigo-100 border-yellow-600 text-black-600  p-4",
                                attrs: { role: "alert" },
                              },
                              [
                                _c("center", [
                                  _c(
                                    "p",
                                    { staticClass: "font-bold text-xl" },
                                    [
                                      _vm._v(
                                        "\n                                        No data found!\n                                    "
                                      ),
                                    ]
                                  ),
                                ]),
                              ],
                              1
                            ),
                          ]),
                        ])
                      : _vm._e(),
                  ],
                  2
                ),
              ]),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _vm.toggleModal
        ? _c("ReadModal", {
            attrs: { form: _vm.profile, toggle: _vm.toggleModal },
            on: { closeModal: _vm.closeReadModal },
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.toggleModalCreate
        ? _c("CreateModal", {
            attrs: { toggle: _vm.toggleModalCreate },
            on: { refreshData: _vm.getStaff, closeModal: _vm.closeCreateModal },
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
    return _c(
      "div",
      {
        staticClass:
          "w-full lg:w-1/5 flex flex-col lg:flex-row items-start lg:items-center",
      },
      [
        _c("div", { staticClass: "flex items-center " }, [
          _c("span", { staticClass: "text-xl font-black" }, [
            _vm._v("MANAGE STAFF"),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c(
        "tr",
        {
          staticClass:
            "border-b bg-pink-400 text-gray-900 uppercase text-base leading-normal",
          staticStyle: { "background-image": "url(/images/BlueCoral.jpg)" },
        },
        [
          _c("th", { staticClass: "py-3 px-3 text-left" }, [_vm._v("No.")]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-left" }, [_vm._v("User ID")]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-left" }, [_vm._v("Name")]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-left" }, [_vm._v("Email")]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-left" }, [
            _vm._v("Phone No."),
          ]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-left" }, [_vm._v("Gender")]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-center" }, [
            _vm._v("Actions"),
          ]),
        ]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=template&id=af4a24ae&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=template&id=af4a24ae& ***!
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
        "modal h-screen w-full fixed left-0 top-0 flex justify-center z-10 items-center bg-black bg-opacity-50",
    },
    [
      _c(
        "div",
        {
          staticClass:
            "bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400 rounded shadow-lg w-10/12 md:w-1/3",
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
                _vm._v("View User Details"),
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
            _c("table", { staticClass: "min-w-full px-3 py-3 shadow-lg" }, [
              _c(
                "tr",
                { staticClass: "order-b border-blue-100 hover:bg-pink-100" },
                [
                  _c(
                    "td",
                    {
                      staticClass: "place-items-center py-1",
                      attrs: { colspan: "2" },
                    },
                    [
                      _c("center", [
                        _c("img", {
                          staticClass:
                            "w-32 h-32 rounded-full hover:scale-150 hover:z-10 transform ease-in-out transition duration-500",
                          attrs: { src: "/images/Profile/" + _vm.form.pic },
                        }),
                      ]),
                    ],
                    1
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "tr",
                { staticClass: "border-b border-blue-100 hover:bg-pink-100" },
                [
                  _c(
                    "td",
                    {
                      staticClass:
                        "py-3 px-3 bg-pink-200 text-gray-900 uppercase text-sm leading-normal ",
                    },
                    [_vm._v("ID: ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "py-3 px-6 text-left whitespace-nowrap" },
                    [
                      _c("div", { staticClass: "flex items-center" }, [
                        _c("span", [_vm._v(_vm._s(_vm.form.id))]),
                      ]),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "tr",
                { staticClass: "border-b border-blue-100 hover:bg-pink-100" },
                [
                  _c(
                    "td",
                    {
                      staticClass:
                        "py-3 px-3 bg-pink-200 text-gray-900 uppercase text-sm leading-normal",
                    },
                    [_vm._v("Name: ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "py-3 px-6 text-left whitespace-nowrap" },
                    [
                      _c("div", { staticClass: "flex items-center" }, [
                        _c("span", [_vm._v(_vm._s(_vm.form.name))]),
                      ]),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "tr",
                { staticClass: "border-b border-blue-100 hover:bg-pink-100" },
                [
                  _c(
                    "td",
                    {
                      staticClass:
                        "py-3 px-3 bg-pink-200 text-gray-900 uppercase text-sm leading-normal",
                    },
                    [_vm._v("Email: ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "py-3 px-6 text-left whitespace-nowrap" },
                    [
                      _c("div", { staticClass: "flex items-center" }, [
                        _c("span", [_vm._v(_vm._s(_vm.form.email))]),
                      ]),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "tr",
                { staticClass: "border-b border-blue-100 hover:bg-pink-100" },
                [
                  _c(
                    "td",
                    {
                      staticClass:
                        "py-3 px-3 bg-pink-200 text-gray-900 uppercase text-sm leading-normal",
                    },
                    [_vm._v("Gender: ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "py-3 px-6 text-left whitespace-nowrap" },
                    [
                      _c("div", { staticClass: "flex items-center" }, [
                        _c("span", [_vm._v(_vm._s(_vm.form.gender))]),
                      ]),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "tr",
                { staticClass: "border-b border-blue-100 hover:bg-pink-100" },
                [
                  _c(
                    "td",
                    {
                      staticClass:
                        "py-3 px-3 bg-pink-200 text-gray-900 uppercase text-sm leading-normal",
                    },
                    [_vm._v("Phone: ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "py-3 px-6 text-left whitespace-nowrap" },
                    [
                      _c("div", { staticClass: "flex items-center" }, [
                        _c("span", [_vm._v(_vm._s(_vm.form.phone))]),
                      ]),
                    ]
                  ),
                ]
              ),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex justify-end items-center w-100 border-t p-3" },
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "bg-pink-600 hover:bg-pink-700 px-3 py-1 rounded text-white mr-1 close-modal",
                  attrs: {
                    to: {
                      name: "profile_view",
                      params: { role: _vm.form.role, id: _vm.form.id },
                    },
                    target: "_blank",
                  },
                },
                [_vm._v("View Profile")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white mr-1 close-modal",
                  on: { click: _vm.closeModal },
                },
                [_vm._v("Okay")]
              ),
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

/***/ "./resources/js/components/ManageRegistrationUsers/AvatarInput.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/AvatarInput.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AvatarInput_vue_vue_type_template_id_904519de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvatarInput.vue?vue&type=template&id=904519de& */ "./resources/js/components/ManageRegistrationUsers/AvatarInput.vue?vue&type=template&id=904519de&");
/* harmony import */ var _AvatarInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AvatarInput.vue?vue&type=script&lang=js& */ "./resources/js/components/ManageRegistrationUsers/AvatarInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AvatarInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AvatarInput_vue_vue_type_template_id_904519de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AvatarInput_vue_vue_type_template_id_904519de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManageRegistrationUsers/AvatarInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/AvatarInput.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/AvatarInput.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AvatarInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/AvatarInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/AvatarInput.vue?vue&type=template&id=904519de&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/AvatarInput.vue?vue&type=template&id=904519de& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarInput_vue_vue_type_template_id_904519de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AvatarInput.vue?vue&type=template&id=904519de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/AvatarInput.vue?vue&type=template&id=904519de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarInput_vue_vue_type_template_id_904519de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarInput_vue_vue_type_template_id_904519de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Create_Modal.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Create_Modal.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_Modal_vue_vue_type_template_id_4f06151a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create_Modal.vue?vue&type=template&id=4f06151a& */ "./resources/js/components/ManageRegistrationUsers/Create_Modal.vue?vue&type=template&id=4f06151a&");
/* harmony import */ var _Create_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create_Modal.vue?vue&type=script&lang=js& */ "./resources/js/components/ManageRegistrationUsers/Create_Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_Modal_vue_vue_type_template_id_4f06151a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_Modal_vue_vue_type_template_id_4f06151a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManageRegistrationUsers/Create_Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Create_Modal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Create_Modal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create_Modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Create_Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Create_Modal.vue?vue&type=template&id=4f06151a&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Create_Modal.vue?vue&type=template&id=4f06151a& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_Modal_vue_vue_type_template_id_4f06151a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create_Modal.vue?vue&type=template&id=4f06151a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Create_Modal.vue?vue&type=template&id=4f06151a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_Modal_vue_vue_type_template_id_4f06151a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_Modal_vue_vue_type_template_id_4f06151a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Icon.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Icon.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icon_vue_vue_type_template_id_68565889___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon.vue?vue&type=template&id=68565889& */ "./resources/js/components/ManageRegistrationUsers/Icon.vue?vue&type=template&id=68565889&");
/* harmony import */ var _Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.vue?vue&type=script&lang=js& */ "./resources/js/components/ManageRegistrationUsers/Icon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Icon_vue_vue_type_template_id_68565889___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Icon_vue_vue_type_template_id_68565889___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManageRegistrationUsers/Icon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Icon.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Icon.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Icon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Icon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Icon.vue?vue&type=template&id=68565889&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Icon.vue?vue&type=template&id=68565889& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_template_id_68565889___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Icon.vue?vue&type=template&id=68565889& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Icon.vue?vue&type=template&id=68565889&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_template_id_68565889___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_template_id_68565889___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Manage_Staff.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Manage_Staff.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Manage_Staff_vue_vue_type_template_id_c3224e14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manage_Staff.vue?vue&type=template&id=c3224e14& */ "./resources/js/components/ManageRegistrationUsers/Manage_Staff.vue?vue&type=template&id=c3224e14&");
/* harmony import */ var _Manage_Staff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manage_Staff.vue?vue&type=script&lang=js& */ "./resources/js/components/ManageRegistrationUsers/Manage_Staff.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Manage_Staff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Manage_Staff_vue_vue_type_template_id_c3224e14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Manage_Staff_vue_vue_type_template_id_c3224e14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManageRegistrationUsers/Manage_Staff.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Manage_Staff.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Manage_Staff.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_Staff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Manage_Staff.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Manage_Staff.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_Staff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Manage_Staff.vue?vue&type=template&id=c3224e14&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Manage_Staff.vue?vue&type=template&id=c3224e14& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_Staff_vue_vue_type_template_id_c3224e14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Manage_Staff.vue?vue&type=template&id=c3224e14& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Manage_Staff.vue?vue&type=template&id=c3224e14&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_Staff_vue_vue_type_template_id_c3224e14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_Staff_vue_vue_type_template_id_c3224e14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Modal_Student.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Modal_Student.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_Student_vue_vue_type_template_id_af4a24ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal_Student.vue?vue&type=template&id=af4a24ae& */ "./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=template&id=af4a24ae&");
/* harmony import */ var _Modal_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal_Student.vue?vue&type=script&lang=js& */ "./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Modal_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Modal_Student_vue_vue_type_template_id_af4a24ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Modal_Student_vue_vue_type_template_id_af4a24ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManageRegistrationUsers/Modal_Student.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Modal_Student.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=template&id=af4a24ae&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=template&id=af4a24ae& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_Student_vue_vue_type_template_id_af4a24ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Modal_Student.vue?vue&type=template&id=af4a24ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRegistrationUsers/Modal_Student.vue?vue&type=template&id=af4a24ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_Student_vue_vue_type_template_id_af4a24ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_Student_vue_vue_type_template_id_af4a24ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);