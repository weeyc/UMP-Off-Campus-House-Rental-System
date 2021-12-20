(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HousePlatform_Std"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRentalProperty/HousePlatform_Std.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRentalProperty/HousePlatform_Std.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    user_id: Number,
    role: Number
  },
  data: function data() {
    return {
      info: [],
      room_id: this.$route.params.id
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
        _this.info = response.data.data;
        console.warn(_this.lists.data);
      });
    }
  },
  watch: {
    $route: function $route() {}
  },
  mounted: function mounted() {
    this.getData();
  }
});

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
    _vm._m(0),
    _vm._v(" "),
    _c("section", { staticClass: "relative py-16 bg-blueGray-200" }, [
      _c("div", { staticClass: "container mx-auto px-4" }, [
        _c(
          "div",
          {
            staticClass:
              "w-full mb-6 bg-blueGray-200 shadow-xl rounded-lg -mt-36",
          },
          [
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "p-5", attrs: { id: "My Rooms" } }, [
              _c(
                "div",
                {
                  staticClass:
                    "bg-white w-full mx-auto rounded-2xl overflow-hidden shadow-lg",
                },
                [
                  _vm._m(3),
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
                        { staticClass: "min-w-full divide-y divide-gray-200" },
                        [
                          _vm._m(4),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            {
                              staticClass: "bg-white divide-y divide-gray-200",
                            },
                            [
                              _c("tr", [
                                _c(
                                  "td",
                                  {
                                    staticClass: "px-6 py-4 whitespace-nowrap",
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "text-sm text-gray-900" },
                                      [_vm._v(_vm._s())]
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass: "px-6 py-4 whitespace-nowrap",
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "text-sm text-gray-900" },
                                      [_vm._v(_vm._s())]
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(5),
                                _vm._v(" "),
                                _vm._m(6),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass: "px-6 py-4 whitespace-nowrap",
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "text-sm text-gray-900" },
                                      [_vm._v(_vm._s())]
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "py-3 px-2 text-center" },
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
                                                  click: function ($event) {
                                                    _vm.read()
                                                    _vm.toggleModal =
                                                      !_vm.toggleModal
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
                                                        "stroke-linecap":
                                                          "round",
                                                        "stroke-linejoin":
                                                          "round",
                                                        "stroke-width": "2",
                                                        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c("path", {
                                                      attrs: {
                                                        "stroke-linecap":
                                                          "round",
                                                        "stroke-linejoin":
                                                          "round",
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
                ]
              ),
            ]),
            _vm._v(" "),
            _vm._m(7),
            _vm._v(" "),
            _c("div", { staticClass: "p-5", attrs: { id: "Housemates" } }, [
              _c(
                "div",
                {
                  staticClass:
                    "bg-white w-full mx-auto rounded-2xl overflow-hidden shadow-lg",
                },
                [
                  _vm._m(8),
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
                        { staticClass: "min-w-full divide-y divide-gray-200" },
                        [
                          _vm._m(9),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            {
                              staticClass: "bg-white divide-y divide-gray-200",
                            },
                            [
                              _c("tr", [
                                _c(
                                  "td",
                                  {
                                    staticClass: "px-6 py-4 whitespace-nowrap",
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "text-sm text-gray-900" },
                                      [_vm._v(_vm._s())]
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass: "px-6 py-4 whitespace-nowrap",
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "text-sm text-gray-900" },
                                      [_vm._v(_vm._s())]
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(10),
                                _vm._v(" "),
                                _vm._m(11),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass: "px-6 py-4 whitespace-nowrap",
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "text-sm text-gray-900" },
                                      [_vm._v(_vm._s())]
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "py-3 px-2 text-center" },
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
                                                  click: function ($event) {
                                                    _vm.read()
                                                    _vm.toggleModal =
                                                      !_vm.toggleModal
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
                                                        "stroke-linecap":
                                                          "round",
                                                        "stroke-linejoin":
                                                          "round",
                                                        "stroke-width": "2",
                                                        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c("path", {
                                                      attrs: {
                                                        "stroke-linecap":
                                                          "round",
                                                        "stroke-linejoin":
                                                          "round",
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
                ]
              ),
            ]),
          ]
        ),
      ]),
      _vm._v(" "),
      _vm._m(12),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
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
            staticStyle: {
              "background-image":
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            },
          },
          [
            _c("span", {
              staticClass: "w-full h-full absolute opacity-10 bg-black",
              attrs: { id: "blackOverlay" },
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
                  staticClass: "h-24 w-24 object-cover rounded-full",
                  attrs: {
                    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                  },
                }),
                _vm._v(" "),
                _c("h1", { staticClass: "text-2xl font-semibold" }, [
                  _vm._v("Taman Sri Paduka 15150 Gambang Damai"),
                ]),
                _vm._v(" "),
                _c("h4", { staticClass: "text-sm font-semibold" }, [
                  _vm._v("Muhammad Ali"),
                ]),
              ]
            ),
          ]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "flex w-full", attrs: { id: "Board and bills" } },
      [
        _c("div", { staticClass: "p-5 flex-1 w-2/3", attrs: { id: "Board" } }, [
          _c(
            "div",
            {
              staticClass:
                "bg-white mx-auto rounded-2xl overflow-hidden shadow-lg",
            },
            [
              _c(
                "div",
                {
                  staticClass: "h-14 flex justify-center items-center p-5",
                  staticStyle: { "background-color": "#2b2a33" },
                },
                [
                  _c("img", {
                    attrs: {
                      src: "https://img.icons8.com/nolan/64/cottage.png",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass:
                        "text-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text ",
                    },
                    [_vm._v("House Bulletin Board")]
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "overflow-y-auto h-48 p-5 resize-y",
                  attrs: { id: "bulletin" },
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-blue rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4",
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "flex flex-row justify-center mr-2" },
                        [
                          _c("img", {
                            staticClass: "rounded-full w-5 h-5 shadow-lg mb-4",
                            attrs: {
                              alt: "avatar",
                              src: "https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass:
                                "text-purple-600 font-semibold ml-2 text-sm text-center md:text-left ",
                            },
                            [
                              _vm._v("@Shanel "),
                              _c(
                                "span",
                                { staticClass: "text-xs ml-5 text-black" },
                                [_vm._v("3:34 PM")]
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
                            "text-gray-600 text-base text-center md:text-left ",
                          staticStyle: { width: "90%" },
                        },
                        [
                          _vm._v(
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  "
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
        _c("div", { staticClass: "p-5 flex w-1/3", attrs: { id: "Bills" } }, [
          _c(
            "div",
            {
              staticClass:
                "bg-white mx-auto rounded-2xl overflow-hidden shadow-lg",
            },
            [
              _c(
                "div",
                {
                  staticClass: "h-14 flex justify-center items-center p-5",
                  staticStyle: { "background-color": "#2b2a33" },
                },
                [
                  _c("img", {
                    attrs: {
                      src: "https://img.icons8.com/nolan/64/cottage.png",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass:
                        "text-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text ",
                    },
                    [_vm._v("My Bills")]
                  ),
                ]
              ),
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
                        "bg-blue rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4",
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "flex flex-row justify-center mr-2" },
                        [
                          _c("img", {
                            staticClass: "rounded-full w-5 h-5 shadow-lg mb-4",
                            attrs: {
                              alt: "avatar",
                              src: "https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass:
                                "text-purple-600 font-semibold ml-2 text-sm text-center md:text-left ",
                            },
                            [
                              _vm._v("@Shanel "),
                              _c(
                                "span",
                                { staticClass: "text-xs ml-5 text-black" },
                                [_vm._v("3:34 PM")]
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
                            "text-gray-600 text-base text-center md:text-left ",
                          staticStyle: { width: "90%" },
                        },
                        [
                          _vm._v(
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  "
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
              "focus:outline-none text-sm flex flex-shrink-0 leading-normal px-3 py-2 text-gray-500",
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
    return _c(
      "div",
      {
        staticClass: "h-14 flex justify-center items-center p-5",
        staticStyle: { "background-color": "#2b2a33" },
      },
      [
        _c("img", {
          attrs: { src: "https://img.icons8.com/nolan/64/cottage.png" },
        }),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass:
              "text-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text ",
          },
          [_vm._v("My Room")]
        ),
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
              "\n                        Tenant ID\n                        "
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
          [_vm._v("\n                        Name\n                        ")]
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
              "\n                        Phone No.\n                        "
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
              "\n                        Move Date\n                        "
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
              "\n                        Tenancy Period\n                        "
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
          [_vm._v("\n                        Action\n                        ")]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "px-6 py-4 whitespace-nowrap" }, [
      _c("div", { staticClass: "text-sm text-gray-900" }, [_vm._v("{{}}")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "px-6 py-4 whitespace-nowrap" }, [
      _c("div", { staticClass: "text-sm text-gray-900" }, [_vm._v(" {{}}")]),
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
              "focus:outline-none text-sm flex flex-shrink-0 leading-normal px-3 py-2 text-gray-500",
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
    return _c(
      "div",
      {
        staticClass: "h-14 flex justify-center items-center p-5",
        staticStyle: { "background-color": "#2b2a33" },
      },
      [
        _c("img", {
          attrs: { src: "https://img.icons8.com/nolan/64/cottage.png" },
        }),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass:
              "text-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text ",
          },
          [_vm._v("My Room")]
        ),
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
              "\n                            Tenant ID\n                            "
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
              "\n                            Action\n                            "
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
    return _c("td", { staticClass: "px-6 py-4 whitespace-nowrap" }, [
      _c("div", { staticClass: "text-sm text-gray-900" }, [_vm._v("{{}}")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "px-6 py-4 whitespace-nowrap" }, [
      _c("div", { staticClass: "text-sm text-gray-900" }, [_vm._v(" {{}}")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "footer",
      { staticClass: "relative bg-blueGray-200 pt-8 pb-6 mt-8" },
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



/***/ })

}]);