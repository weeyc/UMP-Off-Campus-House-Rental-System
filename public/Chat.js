(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Chat"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageMessenger/Chat.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageMessenger/Chat.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: {
    user_id: Number,
    role: Number,
    user_role: String,
    id: Number,
    name: String,
    photo: String,
    path: String
  },
  data: function data() {
    return {
      moment: moment__WEBPACK_IMPORTED_MODULE_0___default.a,
      conversations: [],
      messages: [],
      enter_msg: '',
      margin: '',
      name: '',
      photo: '',
      filterName: '',
      checkContact: false,
      convertedRole: '',
      totalNotifications: '',
      text: '',
      object: '',
      contact_hover: '',
      chat: {
        id: '',
        avatar: '',
        name: '',
        u_id: '',
        u_role: ''
      },
      form: {
        enter_msg: '',
        receiver_id: this.id,
        receiver_role: ''
      },
      formSend: {
        id: '',
        put_msg: '',
        receiver_id: '',
        receiver_role: ''
      },
      isReady: false
    };
  },
  methods: {
    getConverstations: function getConverstations() {
      var _this = this;

      axios.get('/api/getConverstations/' + this.user_id + '/' + this.role).then(function (response) {
        _this.conversations = response.data;

        _this.counttotalNotifications();

        console.warn(_this.conversations.data);
      });
    },
    send: function send() {
      var _this2 = this;

      axios.post('/api/send_msg/' + this.user_id + '/' + this.role, this.formSend).then(function () {
        _this2.formSend.put_msg = '';

        _this2.getConverstations();

        setTimeout(function () {
          _this2.getFirstConversation();
        }, 1000);

        _this2.scrollToBottom();
      })["catch"](function (error) {
        return _this2.errors.record(error.response.data);
      });
    },
    scrollToTop: function scrollToTop() {
      //this.$refs.section.scrollTo(0, 0);
      this.$root.$emit("scroll", this.user_id);
    },
    sendNew: function sendNew() {
      var _this3 = this;

      if (this.user_role == "student") {
        this.form.receiver_role = 1;
      } else if (this.user_role == "landlord") {
        this.form.receiver_role = 2;
      } else if (this.user_role == "staff") {
        this.form.receiver_role = 3;
      }

      axios.post('/api/send_msg_new/' + this.user_id + '/' + this.role, this.form).then(function () {
        _this3.form.enter_msg = '';
        _this3.checkContact = false;

        _this3.getConverstations();

        setTimeout(function () {
          _this3.getFirstConversation();
        }, 1000); // if(this.conversations.length>0){
        //     this.getMessages(this.chat.id);
        // }

        _this3.scrollToBottom();
      })["catch"](error);
    },
    scrollToBottom: function scrollToBottom() {
      var _this4 = this;

      setTimeout(function () {
        _this4.$refs.feed.scrollTop = _this4.$refs.feed.scrollHeight;
      }, 50);
    },
    viewProfile: function viewProfile(id, role) {
      if (this.role == 1) {
        // let routeData = this.$router.resolve({ name: 'std_profile_view', params: { role: role, id:id }});
        // window.open(routeData.href, '_blank');
        this.$router.push({
          name: 'std_profile_view',
          params: {
            role: role,
            id: id
          }
        });
      } else if (this.role == 2) {
        var routeData = this.$router.resolve({
          name: 'land_profile_view',
          params: {
            role: role,
            id: id
          }
        });
        window.open(routeData.href, '_blank');
      } else if (this.role == 3) {
        var _routeData = this.$router.resolve({
          name: 'profile_view',
          params: {
            role: role,
            id: id
          }
        });

        window.open(_routeData.href, '_blank');
      }
    },
    getMessages: function getMessages(id) {
      var _this5 = this;

      axios.get('/api/get_messages/' + id).then(function (response) {
        _this5.messages = response.data;
        console.warn(_this5.messages.data);
      });
    },
    getFirstConversation: function getFirstConversation() {
      if (this.conversations[0].user1_role == this.role && this.conversations[0].user1_id == this.user_id) {
        this.chat.id = this.conversations[0].id;
        this.chat.avatar = this.conversations[0].user2_photo;
        this.chat.name = this.conversations[0].user2_name;
        this.chat.u_id = this.conversations[0].user2_id;
        this.chat.u_role = this.conversations[0].user2_role;
        this.formSend.id = this.conversations[0].id;
        this.formSend.receiver_id = this.conversations[0].user2_id;
        this.formSend.receiver_role = this.conversations[0].user2_role;
        this.getMessages(this.conversations[0].id);
      } else if (this.conversations[0].user2_role == this.role && this.conversations[0].user2_id == this.user_id) {
        this.chat.id = this.conversations[0].id;
        this.chat.avatar = this.conversations[0].user1_photo;
        this.chat.name = this.conversations[0].user1_name;
        this.chat.u_id = this.conversations[0].user1_id;
        this.chat.u_role = this.conversations[0].user1_role;
        this.formSend.receiver_id = this.conversations[0].user1_id;
        this.formSend.receiver_role = this.conversations[0].user1_role;
        this.getMessages(this.conversations[0].id);
      }
    },
    selectConversations: function selectConversations(list, u_id, u_name, u_photo, u_role) {
      this.chat.id = list.id;
      this.chat.u_id = u_id;
      this.chat.avatar = u_photo;
      this.chat.name = u_name;
      this.chat.u_role = u_role;
      this.formSend.receiver_id = u_id;
      this.formSend.id = list.id;
      this.formSend.receiver_role = u_role;
      this.getConverstations();
      this.checkContact = false;
      this.scrollToBottom();
      this.mark_msg_read(list.id);
    },
    mark_msg_read: function mark_msg_read(chat_id) {
      var _this6 = this;

      axios.get('/api/mark_msg_read/' + this.user_id + '/' + this.role + '/' + chat_id).then(function (response) {
        _this6.getConverstations();

        _this6.$root.$emit("getCount", _this6.user_id);
      })["catch"](function (errors) {
        console.log(errors);
      });
    },
    getRole: function getRole() {
      if (this.role == 1) {
        this.margin = 'mt-5 mb-5';
        this.text = 'bg-yellow-200';
        this.object = '#dd7755';
      } else if (this.role == 2) {
        this.margin = 'mt-5 mb-5';
        this.text = 'bg-blue-200';
        this.object = '#4491ee';
        this.contact_hover = '';
      } else {
        this.text = 'bg-pink-200';
        this.margin = 'w-full';
        this.object = '#dc4ae8';
      }
    },
    convertRole: function convertRole() {
      if (this.user_role == 'student') {
        this.convertedRole = 1;
      } else if (this.user_role == 'landlord') {
        this.convertedRole = 2;
      } else if (this.user_role == 'staff') {
        this.convertedRole = 3;
      }
    },
    counttotalNotifications: function counttotalNotifications() {
      var sum = 0;

      for (var i = 0; i < this.conversations.length; i++) {
        sum += this.conversations[i].get_msg_relation_count;
      }

      this.totalNotifications = sum;
      this.isReady = true;
    },
    checkNewContact: function checkNewContact() {
      var _this7 = this;

      if (this.conversations.some(function (data) {
        return data.user1_role === _this7.convertedRole && data.user1_id === _this7.id;
      })) {
        this.checkContact = false;
      } else if (this.conversations.some(function (data) {
        return data.user2_role === _this7.convertedRole && data.user2_id === _this7.id;
      })) {
        this.checkContact = false;
      } else {
        this.checkContact = true;
      }
    },
    handleIncomming: function handleIncomming(message) {}
  },
  watch: {
    messages: function messages(_messages) {
      this.scrollToBottom();
    }
  },
  computed: {
    filterContact: function filterContact() {
      var _this8 = this;

      return this.conversations.filter(function (user) {
        //return user.gender.match(this.filterGender);
        if (user.user1_role == _this8.role && user.user1_id == _this8.user_id) {
          if (user.user2_name.toLowerCase().match(_this8.filterName.toLowerCase())) {
            return user;
          }
        } else if (user.user2_role == _this8.role && user.user2_id == _this8.user_id) {
          if (user.user1_name.toLowerCase().match(_this8.filterName.toLowerCase())) {
            return user;
          }
        }
      });
    }
  },
  mounted: function mounted() {
    var _this9 = this;

    // this.getProperty();
    this.getRole();
    this.scrollToTop();
    this.getConverstations();
    this.convertRole();

    if (this.conversations.length > 0) {
      setTimeout(function () {
        _this9.getFirstConversation();
      }, 2000);
    }

    if (this.user_role != undefined) {
      setTimeout(function () {
        _this9.checkNewContact();
      }, 2000);
    }

    if (this.role == 1) {
      Echo["private"]("messages_to_std.".concat(this.user_id)).listen('NewMessageToStudent', function (e) {
        _this9.getConverstations();

        if (_this9.chat.id != '') {
          setTimeout(function () {
            if (_this9.conversations[0].id === _this9.chat.id) {
              _this9.getMessages(_this9.conversations[0].id); // this.mark_msg_read(this.conversations[0].id)

            }
          }, 2000);
        }
      });
    } else if (this.role == 2) {
      Echo["private"]("messages_to_landlord.".concat(this.user_id)).listen('NewMessageToLandlord', function (e) {
        _this9.getConverstations();

        if (_this9.chat.id != '') {
          setTimeout(function () {
            if (_this9.conversations[0].id === _this9.chat.id) {
              _this9.getMessages(_this9.conversations[0].id); // this.mark_msg_read(this.conversations[0].id)

            }
          }, 2000);
        }
      });
    } else if (this.role == 3) {
      Echo["private"]("messages_to_staff.".concat(this.user_id)).listen('NewMessageToStaff', function (e) {
        _this9.getConverstations();

        if (_this9.chat.id != '') {
          setTimeout(function () {
            if (_this9.conversations[0].id === _this9.chat.id) {
              _this9.getMessages(_this9.conversations[0].id); // this.mark_msg_read(this.conversations[0].id)

            }
          }, 2000);
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageMessenger/Chat.vue?vue&type=style&index=0&id=3b2b1224&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageMessenger/Chat.vue?vue&type=style&index=0&id=3b2b1224&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".msg[data-v-3b2b1224] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1; /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n.nama[data-v-3b2b1224] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1; /* number of lines to show */\n  -webkit-box-orient: horizontal;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageMessenger/Chat.vue?vue&type=style&index=0&id=3b2b1224&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageMessenger/Chat.vue?vue&type=style&index=0&id=3b2b1224&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=0&id=3b2b1224&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageMessenger/Chat.vue?vue&type=style&index=0&id=3b2b1224&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageMessenger/Chat.vue?vue&type=template&id=3b2b1224&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageMessenger/Chat.vue?vue&type=template&id=3b2b1224&scoped=true& ***!
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
  return _c("div", [
    _c(
      "div",
      {
        staticClass:
          "max-w-6xl p-6 mx-auto bg-gray-100 rounded-md shadow-inner ",
        class: [_vm.margin],
      },
      [
        _c(
          "h2",
          {
            staticClass:
              " font-bold text-gray-700 capitalize text-center text-xl mb-2 -mt-2",
          },
          [_vm._v("My Chat Messenger")]
        ),
        _vm._v(" "),
        _vm.isReady == true
          ? _c("div", [
              _c("div", { staticClass: "w-full" }, [
                _c(
                  "div",
                  { staticClass: "grid grid-cols-3 min-w-full border rounded" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-span-1 bg-gray-800 border-r border-gray-300",
                      },
                      [
                        _c("div", { staticClass: "my-3 mx-3 " }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "relative text-gray-600 focus-within:text-gray-400",
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "absolute inset-y-0 left-0 flex items-center pl-2",
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass: "w-6 h-6 text-gray-500",
                                      attrs: {
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        viewBox: "0 0 24 24",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.filterName,
                                    expression: "filterName",
                                  },
                                ],
                                staticClass:
                                  "py-2 pl-10 block w-full text-white rounded bg-gray-500 outline-none focus:text-white",
                                attrs: {
                                  "aria-placeholder": "Search contact",
                                  placeholder: "Search contact",
                                  type: "search",
                                  name: "search",
                                  required: "",
                                  autocomplete: "search",
                                },
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
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "ul",
                          {
                            staticClass: "overflow-auto",
                            staticStyle: { height: "400px" },
                          },
                          [
                            _c(
                              "h2",
                              {
                                staticClass:
                                  "ml-5 mb-2 text-white text-lg my-2",
                              },
                              [_vm._v("Chats")]
                            ),
                            _vm._v(" "),
                            _c("li", [
                              _vm.filterContact.length > 0
                                ? _c(
                                    "div",
                                    _vm._l(
                                      _vm.filterContact,
                                      function (list, index) {
                                        return _c("div", { key: index }, [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "hover:bg-gray-700 border-b border-blue-300 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out",
                                            },
                                            [
                                              list.user1_role == _vm.role &&
                                              list.user1_id == _vm.user_id
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass: "w-full",
                                                      on: {
                                                        click: function (
                                                          $event
                                                        ) {
                                                          _vm.selectConversations(
                                                            list,
                                                            list.user2_id,
                                                            list.user2_name,
                                                            list.user2_photo,
                                                            list.user2_role
                                                          )
                                                          _vm.getMessages(
                                                            list.id
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [
                                                      _c("img", {
                                                        staticClass:
                                                          "h-10 w-10 ml-2 rounded-full object-cover",
                                                        attrs: {
                                                          src:
                                                            "/images/Profile/" +
                                                            list.user2_photo,
                                                          alt: "Avatar",
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "w-full pb-2",
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "flex justify-between",
                                                            },
                                                            [
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "msg block ml-2 font-semibold text-base text-white ",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      list.user2_name
                                                                    )
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              list
                                                                .get_msg_relation
                                                                .length != 0
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "ml-32  block text-sm text-ump-green",
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          _vm
                                                                            .moment(
                                                                              list
                                                                                .get_msg_relation[0]
                                                                                .created_at
                                                                            )
                                                                            .format(
                                                                              "h:mm a"
                                                                            )
                                                                        )
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
                                                                "flex justify-between",
                                                              attrs: {
                                                                id: "msg",
                                                              },
                                                            },
                                                            [
                                                              list
                                                                .get_msg_relation
                                                                .length != 0
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "msg block ml-2 text-sm text-gray-200",
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          list
                                                                            .get_msg_relation[0]
                                                                            .msg
                                                                        )
                                                                      ),
                                                                    ]
                                                                  )
                                                                : _vm._e(),
                                                              _vm._v(" "),
                                                              list.get_msg_relation_count >
                                                              0
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "badge mb-3 bg-red-800 shrink-0 grow-0 rounded-full px-3 py-1 text-center object-right-top text-white text-sm mr-1",
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          list.get_msg_relation_count
                                                                        )
                                                                      ),
                                                                    ]
                                                                  )
                                                                : _vm._e(),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              list.user2_role == _vm.role &&
                                              list.user2_id == _vm.user_id
                                                ? _c(
                                                    "div",
                                                    {
                                                      on: {
                                                        click: function (
                                                          $event
                                                        ) {
                                                          _vm.selectConversations(
                                                            list,
                                                            list.user1_id,
                                                            list.user1_name,
                                                            list.user1_photo,
                                                            list.user1_role
                                                          )
                                                          _vm.getMessages(
                                                            list.id
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [
                                                      _c("img", {
                                                        staticClass:
                                                          "h-10 w-10 ml-2 rounded-full object-cover",
                                                        attrs: {
                                                          src:
                                                            "/images/Profile/" +
                                                            list.user1_photo,
                                                          alt: "username",
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "w-full pb-2",
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "flex justify-between",
                                                            },
                                                            [
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "nama block ml-2 font-semibold text-base text-white ",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      list.user1_name
                                                                    )
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              list
                                                                .get_msg_relation
                                                                .length != 0
                                                                ? _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "ml-32  text-sm text-ump-green",
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          _vm
                                                                            .moment(
                                                                              list
                                                                                .get_msg_relation[0]
                                                                                .created_at
                                                                            )
                                                                            .format(
                                                                              "h:mm a"
                                                                            )
                                                                        )
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
                                                                "flex justify-between",
                                                              attrs: {
                                                                id: "msg",
                                                              },
                                                            },
                                                            [
                                                              list
                                                                .get_msg_relation
                                                                .length != 0
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "msg block ml-2 text-sm text-gray-200",
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          list
                                                                            .get_msg_relation[0]
                                                                            .msg
                                                                        )
                                                                      ),
                                                                    ]
                                                                  )
                                                                : _vm._e(),
                                                              _vm._v(" "),
                                                              list.get_msg_relation_count >
                                                              0
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "badge mb-3 bg-red-800 shrink-0 grow-0 rounded-full px-3 py-1 text-center object-right-top text-white text-sm mr-1",
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          list.get_msg_relation_count
                                                                        )
                                                                      ),
                                                                    ]
                                                                  )
                                                                : _vm._e(),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  )
                                                : _vm._e(),
                                            ]
                                          ),
                                        ])
                                      }
                                    ),
                                    0
                                  )
                                : _c(
                                    "div",
                                    { staticClass: "p-2 text-white" },
                                    [
                                      _c("center", [
                                        _vm._v("No conversations "),
                                      ]),
                                    ],
                                    1
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
                          "col-span-2 bg-conic-to-r from-indigo-200 via-blue-gray-600 to-indigo-200",
                      },
                      [
                        _vm.checkContact == false &&
                        _vm.filterContact.length > 0 &&
                        _vm.chat.name != ""
                          ? _c(
                              "div",
                              {
                                staticClass: "w-full",
                                attrs: { id: "Profile" },
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "flex items-center border-b border-gray-300 bg-gray-800 pl-3 py-3",
                                  },
                                  [
                                    _vm.chat.avatar != ""
                                      ? _c("img", {
                                          staticClass:
                                            "h-10 w-10 rounded-full object-cover cursor-pointer",
                                          attrs: {
                                            src:
                                              "/images/Profile/" +
                                              _vm.chat.avatar,
                                            alt: "username",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.viewProfile(
                                                _vm.chat.u_id,
                                                _vm.chat.u_role
                                              )
                                            },
                                          },
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "cursor-pointer block ml-2 font-bold text-base text-white hover:underline",
                                        on: {
                                          click: function ($event) {
                                            return _vm.viewProfile(
                                              _vm.chat.u_id,
                                              _vm.chat.u_role
                                            )
                                          },
                                        },
                                      },
                                      [_vm._v(_vm._s(_vm.chat.name) + " ")]
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    ref: "feed",
                                    staticClass:
                                      "w-full overflow-y-auto p-10 relative",
                                    staticStyle: { height: "400px" },
                                    attrs: { id: "chat" },
                                  },
                                  [
                                    _c(
                                      "ul",
                                      _vm._l(_vm.messages, function (msg) {
                                        return _c(
                                          "li",
                                          {
                                            key: msg.id,
                                            staticClass: "clearfix2",
                                          },
                                          [
                                            msg.receiver_role == _vm.role &&
                                            msg.receiver_id == _vm.user_id
                                              ? _c("div", [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "w-full flex justify-start",
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative",
                                                          staticStyle: {
                                                            "max-width":
                                                              "300px",
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "block",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(msg.msg)
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "block text-xs text-right",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm
                                                                    .moment(
                                                                      msg.created_at
                                                                    )
                                                                    .format(
                                                                      "h:mm a"
                                                                    )
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ])
                                              : _c("div", [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "w-full flex justify-end",
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "rounded px-5 py-2 my-2 text-gray-700 relative",
                                                          class: [_vm.text],
                                                          staticStyle: {
                                                            "max-width":
                                                              "300px",
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "block",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(msg.msg)
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "block text-xs text-left",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm
                                                                    .moment(
                                                                      msg.created_at
                                                                    )
                                                                    .format(
                                                                      "h:mm a"
                                                                    )
                                                                )
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
                                      0
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "w-full py-3 px-3 flex items-center justify-between border-t border-gray-300 bg-gray-800 ",
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.formSend.put_msg,
                                          expression: "formSend.put_msg",
                                        },
                                      ],
                                      staticClass:
                                        "py-2 mx-3 pl-5 block w-full rounded-full bg-gray-500 outline-none focus:text-white",
                                      attrs: {
                                        "aria-placeholder": "Type a message",
                                        placeholder: "Type a message",
                                        type: "text",
                                        name: "message",
                                        required: "",
                                      },
                                      domProps: { value: _vm.formSend.put_msg },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.formSend,
                                            "put_msg",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    }),
                                    _vm._v(" "),
                                    _vm.formSend.put_msg.length != 0
                                      ? _c(
                                          "button",
                                          {
                                            staticClass:
                                              "outline-none focus:outline-none",
                                            attrs: { type: "submit" },
                                            on: { click: _vm.send },
                                          },
                                          [
                                            _c(
                                              "svg",
                                              {
                                                staticClass:
                                                  "text-gray-400 h-7 w-7 origin-center transform rotate-90",
                                                attrs: {
                                                  xmlns:
                                                    "http://www.w3.org/2000/svg",
                                                  viewBox: "0 0 20 20",
                                                  fill: "currentColor",
                                                },
                                              },
                                              [
                                                _c("path", {
                                                  attrs: {
                                                    d: "M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z",
                                                  },
                                                }),
                                              ]
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                  ]
                                ),
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.checkContact == true
                          ? _c("div", { staticClass: "w-full" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "flex items-center border-b border-gray-300 pl-3 py-3 bg-gray-800",
                                },
                                [
                                  _vm.photo != undefined
                                    ? _c("img", {
                                        staticClass:
                                          "h-10 w-10 rounded-full object-cover",
                                        attrs: {
                                          src: "/images/Profile/" + _vm.photo,
                                          alt: "username",
                                        },
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "block ml-2 font-bold text-base text-white",
                                    },
                                    [_vm._v(" " + _vm._s(_vm.name))]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  ref: "feed",
                                  staticClass:
                                    "w-full overflow-y-auto p-10 relative",
                                  staticStyle: { height: "400px" },
                                  attrs: { id: "chat" },
                                },
                                [_vm._m(0)]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "w-full py-3 px-3 flex items-center justify-between border-t border-gray-300 bg-gray-800",
                                },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.enter_msg,
                                        expression: "form.enter_msg",
                                      },
                                    ],
                                    staticClass:
                                      "py-2 mx-3 pl-5 block w-full rounded-full bg-gray-500 outline-none focus:text-white",
                                    attrs: {
                                      "aria-placeholder": "Type a message",
                                      placeholder: "Type a message",
                                      type: "text",
                                      name: "message",
                                      required: "",
                                    },
                                    domProps: { value: _vm.form.enter_msg },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "enter_msg",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _vm.form.enter_msg.length != 0
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "outline-none focus:outline-none",
                                          attrs: { type: "sendNew" },
                                          on: { click: _vm.sendNew },
                                        },
                                        [
                                          _c(
                                            "svg",
                                            {
                                              staticClass:
                                                "text-gray-400 h-7 w-7 origin-center transform rotate-90",
                                              attrs: {
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                              },
                                            },
                                            [
                                              _c("path", {
                                                attrs: {
                                                  d: "M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z",
                                                },
                                              }),
                                            ]
                                          ),
                                        ]
                                      )
                                    : _vm._e(),
                                ]
                              ),
                            ])
                          : _vm.checkContact == false &&
                            _vm.filterContact.length == 0
                          ? _c("div", { staticClass: "w-full" }, [
                              _vm._m(1),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  ref: "feed",
                                  staticClass:
                                    "w-full overflow-y-auto p-10 relative",
                                  staticStyle: { height: "400px" },
                                  attrs: { id: "chat" },
                                },
                                [_vm._m(2)]
                              ),
                              _vm._v(" "),
                              _c("div", {
                                staticClass:
                                  "w-full py-3 px-3 flex items-center justify-between border-t border-gray-300",
                              }),
                            ])
                          : _vm._e(),
                      ]
                    ),
                  ]
                ),
              ]),
            ])
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
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [_c("li", { staticClass: "clearfix2" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "flex items-center border-b border-gray-300 pl-3 py-3 " },
      [
        _c("span", {
          staticClass: "block ml-2 font-bold text-base text-gray-600",
        }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [_c("li", { staticClass: "clearfix2" })])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ManageMessenger/Chat.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/ManageMessenger/Chat.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chat_vue_vue_type_template_id_3b2b1224_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=3b2b1224&scoped=true& */ "./resources/js/components/ManageMessenger/Chat.vue?vue&type=template&id=3b2b1224&scoped=true&");
/* harmony import */ var _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&lang=js& */ "./resources/js/components/ManageMessenger/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Chat_vue_vue_type_style_index_0_id_3b2b1224_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chat.vue?vue&type=style&index=0&id=3b2b1224&scoped=true&lang=css& */ "./resources/js/components/ManageMessenger/Chat.vue?vue&type=style&index=0&id=3b2b1224&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chat_vue_vue_type_template_id_3b2b1224_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chat_vue_vue_type_template_id_3b2b1224_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3b2b1224",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManageMessenger/Chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManageMessenger/Chat.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ManageMessenger/Chat.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageMessenger/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManageMessenger/Chat.vue?vue&type=style&index=0&id=3b2b1224&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/ManageMessenger/Chat.vue?vue&type=style&index=0&id=3b2b1224&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_3b2b1224_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=0&id=3b2b1224&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageMessenger/Chat.vue?vue&type=style&index=0&id=3b2b1224&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_3b2b1224_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_3b2b1224_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_3b2b1224_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_3b2b1224_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/ManageMessenger/Chat.vue?vue&type=template&id=3b2b1224&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/ManageMessenger/Chat.vue?vue&type=template&id=3b2b1224&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_3b2b1224_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=template&id=3b2b1224&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageMessenger/Chat.vue?vue&type=template&id=3b2b1224&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_3b2b1224_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_3b2b1224_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);