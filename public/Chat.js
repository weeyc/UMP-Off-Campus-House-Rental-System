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
    photo: String
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
      contacts: [],
      contak: {},
      form: {
        enter_msg: '',
        receiver_id: this.id,
        receiver_role: ''
      }
    };
  },
  methods: {
    getConverstations: function getConverstations() {
      var _this = this;

      axios.get('/api/getConverstations/' + this.user_id + '/' + this.role).then(function (response) {
        _this.conversations = response.data;
        console.warn(_this.conversations.data);
      });
    },
    send: function send() {
      var _this2 = this;

      axios.post('/api/send_msg/' + this.user_id + '/' + this.role, this.form).then(function () {
        _this2.$toaster.success('Sent');
      })["catch"](function (error) {
        return _this2.errors.record(error.response.data);
      });
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
        _this3.$toaster.success('Sent');
      })["catch"](function (error) {
        return _this3.errors.record(error.response.data);
      });
    },
    scrollToBottom: function scrollToBottom() {
      var _this4 = this;

      setTimeout(function () {
        _this4.$refs.feed.scrollTop = _this4.$refs.feed.scrollHeight - _this4.$refs.feed.clientHeight;
      }, 50);
    },
    getContact: function getContact(id1, role1, id2, role2) {
      var _this5 = this;

      var selected_role;
      var selected_id;

      if (role1 == this.role) {
        if (id1 == this.user_id) {
          selected_role = role2;
          selected_id = id2;
        } else if (id2 == this.user_id) {
          selected_role = role2;
          selected_id = id1;
        }
      } else if (role2 == this.role) {
        if (id1 == this.user_id) {
          selected_role = role1;
          selected_id = id2;
        } else if (id2 == this.user_id) {
          selected_role = role1;
          selected_id = id1;
        }
      }

      axios.get('/api/getContact/' + selected_id + '/' + selected_role).then(function (response) {
        _this5.contak = response.data.data;
        var clone = JSON.parse(JSON.stringify(_this5.contak));

        _this5.contacts.push(clone);

        _this5.contak = [], console.warn(_this5.contacts);
      });
    },
    getRole: function getRole() {
      if (this.role == 1) {
        this.margin = 'mt-5 mb-5';
      } else if (this.role == 2) {
        this.margin = 'mt-5 mb-5';
      } else {}
    }
  },
  mounted: function mounted() {
    // this.getProperty();
    this.getRole();
    this.getConverstations();
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
exports.push([module.i, ".msg[data-v-3b2b1224] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1; /* number of lines to show */\n  line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n", ""]);

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
          "max-w-5xl p-6 mx-auto bg-gray-100 rounded-md shadow-inner ",
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
        _c("div", { staticClass: "w-full" }, [
          _c(
            "div",
            { staticClass: "grid grid-cols-3 min-w-full border rounded" },
            [
              _c(
                "div",
                { staticClass: "col-span-1 bg-white border-r border-gray-300" },
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
                          staticClass:
                            "py-2 pl-10 block w-full rounded bg-gray-100 outline-none focus:text-gray-700",
                          attrs: {
                            "aria-placeholder":
                              "Busca tus amigos o contacta nuevos",
                            placeholder: "Busca tus amigos",
                            type: "search",
                            name: "search",
                            required: "",
                            autocomplete: "search",
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
                        { staticClass: "ml-2 mb-2 text-gray-600 text-lg my-2" },
                        [_vm._v("Chats")]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _vm._l(_vm.conversations, function (list) {
                            return _c("div", { key: list.id }, [
                              _vm._v(
                                "\n                             " +
                                  _vm._s(
                                    _vm.getContact(
                                      list.user1_id,
                                      list.user1_role,
                                      list.user2_id,
                                      list.user2_role
                                    )
                                  ) +
                                  "\n                        "
                              ),
                            ])
                          }),
                          _vm._v(" "),
                          _vm._m(0),
                        ],
                        2
                      ),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-span-2 bg-white" }, [
                _vm.user_role == undefined
                  ? _c(
                      "div",
                      { staticClass: "w-full", attrs: { id: "Profile" } },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            ref: "feed",
                            staticClass: "w-full overflow-y-auto p-10 relative",
                            staticStyle: { height: "400px" },
                            attrs: { id: "chat" },
                          },
                          [_vm._m(2)]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "w-full py-3 px-3 flex items-center justify-between border-t border-gray-300",
                          },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "outline-none focus:outline-none",
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "text-gray-400 h-6 w-6",
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
                                        d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "outline-none focus:outline-none ml-1",
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "text-gray-400 h-6 w-6",
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
                                        d: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13",
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
                                  value: _vm.form.enter_msg,
                                  expression: "form.enter_msg",
                                },
                              ],
                              staticClass:
                                "py-2 mx-3 pl-5 block w-full rounded-full bg-gray-100 outline-none focus:text-gray-700",
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
                            _c(
                              "button",
                              {
                                staticClass: "outline-none focus:outline-none",
                                attrs: { type: "submit" },
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass:
                                      "text-gray-400 h-7 w-7 origin-center transform rotate-90",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
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
                            ),
                          ]
                        ),
                      ]
                    )
                  : _c("div", { staticClass: "w-full" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "flex items-center border-b border-gray-300 pl-3 py-3",
                        },
                        [
                          _c("img", {
                            staticClass: "h-10 w-10 rounded-full object-cover",
                            attrs: {
                              src: "/images/Profile/" + _vm.photo,
                              alt: "username",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass:
                                "block ml-2 font-bold text-base text-gray-600",
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
                          staticClass: "w-full overflow-y-auto p-10 relative",
                          staticStyle: { height: "400px" },
                          attrs: { id: "chat" },
                        },
                        [_vm._m(3)]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "w-full py-3 px-3 flex items-center justify-between border-t border-gray-300",
                        },
                        [
                          _c(
                            "button",
                            { staticClass: "outline-none focus:outline-none" },
                            [
                              _c(
                                "svg",
                                {
                                  staticClass: "text-gray-400 h-6 w-6",
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
                                      d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass:
                                "outline-none focus:outline-none ml-1",
                            },
                            [
                              _c(
                                "svg",
                                {
                                  staticClass: "text-gray-400 h-6 w-6",
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
                                      d: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13",
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
                                value: _vm.form.enter_msg,
                                expression: "form.enter_msg",
                              },
                            ],
                            staticClass:
                              "py-2 mx-3 pl-5 block w-full rounded-full bg-gray-100 outline-none focus:text-gray-700",
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
                          _c(
                            "button",
                            {
                              staticClass: "outline-none focus:outline-none",
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
                                    xmlns: "http://www.w3.org/2000/svg",
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
                          ),
                        ]
                      ),
                    ]),
              ]),
            ]
          ),
        ]),
        _vm._v("\n" + _vm._s(_vm.haha) + "\n\n    "),
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
      "a",
      {
        staticClass:
          "hover:bg-gray-100 border-b border-gray-300 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out",
      },
      [
        _c("img", {
          staticClass: "h-10 w-10 rounded-full object-cover",
          attrs: { alt: "username" },
        }),
        _vm._v(" "),
        _c("div", { staticClass: "w-full pb-2" }, [
          _c("div", { staticClass: "flex justify-between" }, [
            _c("span", {
              staticClass:
                "msg block ml-2 font-semibold text-base text-gray-600 ",
            }),
            _vm._v(" "),
            _c("span", { staticClass: "block ml-2 text-sm text-gray-600" }, [
              _vm._v("5 minutes"),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex justify-between", attrs: { id: "msg" } },
            [
              _c(
                "span",
                { staticClass: "msg block ml-2 text-sm text-gray-600" },
                [
                  _vm._v(
                    "Hello world!! hello my name hahahsda hello bodo mung beodo is blalblalallskdakskd askdk asdk asdkaskda sdaks dksakd akskd ask"
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    "badge mb-3 bg-red-800 shrink-0 grow-0 rounded-full px-3 py-1 text-center object-right-top text-white text-sm mr-1",
                },
                [_vm._v("9")]
              ),
            ]
          ),
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
      { staticClass: "flex items-center border-b border-gray-300 pl-3 py-3" },
      [
        _c("img", {
          staticClass: "h-10 w-10 rounded-full object-cover",
          attrs: {
            src: "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            alt: "username",
          },
        }),
        _vm._v(" "),
        _c(
          "span",
          { staticClass: "block ml-2 font-bold text-base text-gray-600" },
          [_vm._v("Eduard")]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", { staticClass: "clearfix2" }, [
        _c("div", { staticClass: "w-full flex justify-start" }, [
          _c(
            "div",
            {
              staticClass:
                "bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative",
              staticStyle: { "max-width": "300px" },
            },
            [
              _c("span", { staticClass: "block" }, [_vm._v("Hello bro")]),
              _vm._v(" "),
              _c("span", { staticClass: "block text-xs text-right" }, [
                _vm._v("10:30pm"),
              ]),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-full flex justify-end" }, [
          _c(
            "div",
            {
              staticClass:
                "bg-yellow-200 rounded px-5 py-2 my-2 text-gray-700 relative",
              staticStyle: { "max-width": "300px" },
            },
            [
              _c("span", { staticClass: "block" }, [_vm._v("Hello")]),
              _vm._v(" "),
              _c("span", { staticClass: "block text-xs text-left" }, [
                _vm._v("10:32pm"),
              ]),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-full flex justify-end" }, [
          _c(
            "div",
            {
              staticClass:
                "bg-blue-200 rounded px-5 py-2 my-2 text-gray-700 relative",
              staticStyle: { "max-width": "300px" },
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "relative m-3 flex flex-wrap mx-auto justify-center",
                  attrs: { id: "room" },
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer",
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "overflow-x-hidden rounded-2xl relative",
                        },
                        [
                          _c("img", {
                            staticClass: "h-40 rounded-2xl w-full object-cover",
                            attrs: {
                              src: "https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg",
                            },
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-4 pl-2 mb-2 flex justify-between " },
                        [
                          _c("div", [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "text-lg font-semibold text-gray-900 mb-0",
                              },
                              [_vm._v("Master Bed")]
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              { staticClass: "text-md text-gray-800 mt-0" },
                              [_vm._v("RM130 / Months")]
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
        ]),
      ]),
    ])
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