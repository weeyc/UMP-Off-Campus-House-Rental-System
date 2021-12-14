(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["BrowseRoom_Student"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/BrowseRoom_Student.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/BrowseRoom_Student.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      lists: [],
      campus: 'Gambang',
      location: '',
      price: {},
      gender: '',
      room: '',
      top_btn_style: 'p-3 rounded bg-yellow-100 text-yellow-500 hover:bg-yellow-500 hover:text-white :active:bg-yellow-500 active:text-white active:outline-none transition duration-150 ease-in-out shadow-xl'
    };
  },
  methods: {
    getList: function getList() {
      var _this = this;

      axios.get('/api/get_BrowseList/' + this.campus, {
        params: {
          location: this.location,
          minPrice: this.price.min,
          maxPrice: this.price.max,
          gender: this.gender,
          room: this.room
        }
      }).then(function (response) {
        _this.lists = response.data.data;
        console.warn(_this.lists.data);
      });
    },
    change_campus: function change_campus(c) {
      if (c == 0) {
        this.campus = 'Gambang';
        this.getList();
      } else {
        this.campus = 'Pekan';
        this.getList();
      }
    },
    changeQueryString: function changeQueryString() {
      this.$router.replace({
        query: {
          campus: this.campus.toLocaleLowerCase(),
          location: this.location.toLocaleLowerCase(),
          roomtype: this.room.toLocaleLowerCase(),
          gender: this.gender.toLocaleLowerCase(),
          minprice: this.price.min,
          maxprice: this.price.max
        }
      });
    },
    removeQueryString: function removeQueryString() {
      this.$router.replace({
        name: "BrowseRoom_Student"
      });
    },
    dropdownHandlerRoomType: function dropdownHandlerRoomType(event) {
      var single = event.currentTarget.getElementsByTagName("ul")[0];
      single.classList.toggle("hidden");
    },
    dropdownHandlerPriceRange: function dropdownHandlerPriceRange(event) {
      var single = event.currentTarget.getElementsByTagName("ul")[0];
      single.classList.toggle("hidden");
    },
    dropdownHandlerGenderPreference: function dropdownHandlerGenderPreference(event) {
      var single = event.currentTarget.getElementsByTagName("ul")[0];
      single.classList.toggle("hidden");
    },
    clearFilter: function clearFilter(type) {
      if (type == 'room') {
        var ele = document.getElementsByName("room_type");
        this.room = '';

        for (var i = 0; i < ele.length; i++) {
          ele[i].checked = false;
        }
      } else if (type == 'gender') {
        var ele = document.getElementsByName("gender");
        this.gender = '';

        for (var i = 0; i < ele.length; i++) {
          ele[i].checked = false;
        }
      } else {
        var ele = document.getElementsByName("price");
        this.maxPrice = '';
        this.minPrice = '';

        for (var i = 0; i < ele.length; i++) {
          ele[i].checked = false;
        }
      }
    },
    getFilter: function getFilter() {
      this.changeQueryString();
      this.getList();
    }
  },
  watch: {
    $route: function $route() {
      if (this.$route.query.campus == "Gambang") {}
    }
  },
  mounted: function mounted() {
    this.getList();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/BrowseRoom_Student.vue?vue&type=template&id=2065807d&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManagePropertyList/BrowseRoom_Student.vue?vue&type=template&id=2065807d& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "max-w-5xl p-6 mx-auto mt-5 bg-gray-200 rounded-md mb-5" },
      [
        _c("span", [_vm._v("Select Your Campus:")]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex items-center justify-center h-40 w-full overflow-hidden bg-gradient-to-b from-green-200 to-green-500"
          },
          [
            _c(
              "section",
              { staticClass: "flex items-stretch h-40 w-full text-white " },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "relative items-center w-1/2 bg-gray-500 bg-no-repeat bg-cover lg:flex",
                    staticStyle: {
                      "background-image": "url(/images/UMP/Gambang.jpg)"
                    }
                  },
                  [
                    _c("div", { staticClass: "w-full justify-center flex" }, [
                      _c(
                        "button",
                        {
                          staticClass: "px-5 ",
                          class: [_vm.top_btn_style],
                          attrs: { "exact-active-class": "exact-active" },
                          on: {
                            click: function($event) {
                              _vm.change_campus(0)
                              _vm.changeQueryString()
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                            Gambang\n                        "
                          )
                        ]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "relative items-center w-1/2 bg-gray-500 bg-no-repeat bg-cover lg:flex",
                    staticStyle: {
                      "background-image": "url(/images/UMP/cancelori.jpg)"
                    }
                  },
                  [
                    _c("div", { staticClass: "w-full justify-center flex" }, [
                      _c(
                        "button",
                        {
                          staticClass: "px-10",
                          class: [_vm.top_btn_style],
                          attrs: { "exact-active-class": "exact-active" },
                          on: {
                            click: function($event) {
                              _vm.change_campus(1)
                              _vm.changeQueryString()
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                            Pekan\n                        "
                          )
                        ]
                      )
                    ])
                  ]
                )
              ]
            )
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "max-w-5xl p-6 mx-auto mt-5 bg-gray-200 rounded-md mb-5" },
      [
        _c("div", { staticClass: "flex justify-start" }, [
          _c(
            "div",
            {
              staticClass:
                "flex justify-center bg-white rounded-xl border-2 overflow-hidden"
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.location,
                    expression: "location"
                  }
                ],
                staticClass:
                  "block rounded-md border-0 focus:outline-none focus:ring-0 focus:border-blue-500 flex-grow p-2",
                attrs: {
                  type: "search",
                  placeholder: "Search Area / Property Name"
                },
                domProps: { value: _vm.location },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.location = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("button", { on: { click: _vm.getFilter } }, [
                _c(
                  "svg",
                  {
                    staticClass: "h-6 w-6 my-auto m-2",
                    staticStyle: { color: "gray" },
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      }
                    })
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "hidden xl:flex items-center ",
              attrs: { id: "room" }
            },
            [
              _c("div", { staticClass: "ml-6 relative" }, [
                _c(
                  "div",
                  {
                    staticClass: "flex items-center relative",
                    on: {
                      click: function($event) {
                        return _vm.dropdownHandlerRoomType($event)
                      }
                    }
                  },
                  [
                    _c(
                      "ul",
                      {
                        staticClass:
                          "w-52 p-2 border-r bg-yellow-100 absolute rounded right-0 top-0 shadow mt-16 hidden overflow-hidden z-10 "
                      },
                      [
                        _c(
                          "li",
                          {
                            staticClass:
                              "cursor-pointer text-yellow-500 text-sm leading-3 tracking-normal py-2"
                          },
                          [
                            _c(
                              "label",
                              { staticClass: "flex radio p-2 cursor-pointer" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.room,
                                      expression: "room"
                                    }
                                  ],
                                  staticClass: "my-auto transform scale-125",
                                  attrs: {
                                    type: "radio",
                                    name: "room_type",
                                    value: "Single"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.room, "Single")
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.room = "Single"
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "title px-2" }, [
                                  _vm._v("Single")
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("hr", { staticClass: "border-yellow-300  " }),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            staticClass:
                              "cursor-pointer text-yellow-500 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
                          },
                          [
                            _c(
                              "label",
                              { staticClass: "flex radio p-2 cursor-pointer" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.room,
                                      expression: "room"
                                    }
                                  ],
                                  staticClass: "my-auto transform scale-125",
                                  attrs: {
                                    type: "radio",
                                    name: "room_type",
                                    value: "Shared"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.room, "Shared")
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.room = "Shared"
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "title px-2" }, [
                                  _vm._v("Shared")
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("hr", { staticClass: "border-yellow-300" }),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            staticClass:
                              "cursor-pointer text-yellow-500 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 items-center focus:text-indigo-700 focus:outline-none"
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "flex justify-center cursor-pointer"
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "px-5 rounded-full text-yellow-500 mt-3 ",
                                    on: {
                                      click: function($event) {
                                        return _vm.clearFilter("room")
                                      }
                                    }
                                  },
                                  [_vm._v("✗ Clear")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "px-5 rounded-full ",
                                    class: [_vm.top_btn_style],
                                    on: { click: _vm.getFilter }
                                  },
                                  [_vm._v("Apply")]
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "flex justify-center text-gray-100" },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "px-5 rounded-full",
                            class: [_vm.top_btn_style]
                          },
                          [_vm._v("Room Type")]
                        ),
                        _vm._v(" "),
                        _c(
                          "svg",
                          {
                            staticClass:
                              "icon icon-tabler icon-tabler-chevron-down cursor-pointer",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "20",
                              height: "20",
                              viewBox: "0 0 24 24",
                              "stroke-width": "1.5",
                              stroke: "currentColor",
                              fill: "none",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("path", {
                              attrs: { stroke: "none", d: "M0 0h24v24H0z" }
                            }),
                            _vm._v(" "),
                            _c("polyline", {
                              attrs: { points: "6 9 12 15 18 9" }
                            })
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "hidden xl:flex items-center ",
              attrs: { id: "price" }
            },
            [
              _c("div", { staticClass: "ml-6 relative" }, [
                _c(
                  "div",
                  {
                    staticClass: "flex items-center relative",
                    on: {
                      click: function($event) {
                        return _vm.dropdownHandlerPriceRange($event)
                      }
                    }
                  },
                  [
                    _c(
                      "ul",
                      {
                        staticClass:
                          "w-52 p-2 border-r bg-yellow-100 absolute rounded right-0 top-0 shadow mt-16 hidden overflow-hidden z-10 "
                      },
                      [
                        _c(
                          "li",
                          {
                            staticClass:
                              "cursor-pointer text-yellow-500 text-sm leading-3 tracking-normal py-2"
                          },
                          [
                            _c(
                              "label",
                              { staticClass: "flex radio p-2 cursor-pointer" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.price,
                                      expression: "price"
                                    }
                                  ],
                                  staticClass: "my-auto transform scale-125",
                                  attrs: { type: "radio", name: "price" },
                                  domProps: {
                                    value: { min: 0, max: 200 },
                                    checked: _vm._q(_vm.price, {
                                      min: 0,
                                      max: 200
                                    })
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.price = { min: 0, max: 200 }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "title px-2" }, [
                                  _vm._v("RM0 - RM200")
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("hr", { staticClass: "border-yellow-300  " }),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            staticClass:
                              "cursor-pointer text-yellow-500 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
                          },
                          [
                            _c(
                              "label",
                              { staticClass: "flex radio p-2 cursor-pointer" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.price,
                                      expression: "price"
                                    }
                                  ],
                                  staticClass: "my-auto transform scale-125",
                                  attrs: { type: "radio", name: "price" },
                                  domProps: {
                                    value: { min: 200, max: 500 },
                                    checked: _vm._q(_vm.price, {
                                      min: 200,
                                      max: 500
                                    })
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.price = { min: 200, max: 500 }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "title px-2" }, [
                                  _vm._v("RM200 - RM500")
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("hr", { staticClass: "border-yellow-300  " }),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            staticClass:
                              "cursor-pointer text-yellow-500 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
                          },
                          [
                            _c(
                              "label",
                              { staticClass: "flex radio p-2 cursor-pointer" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.price,
                                      expression: "price"
                                    }
                                  ],
                                  staticClass: "my-auto transform scale-125",
                                  attrs: { type: "radio", name: "price" },
                                  domProps: {
                                    value: { min: 500, max: 800 },
                                    checked: _vm._q(_vm.price, {
                                      min: 500,
                                      max: 800
                                    })
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.price = { min: 500, max: 800 }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "title px-2" }, [
                                  _vm._v("RM500 - RM800")
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            staticClass:
                              "cursor-pointer text-yellow-500 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
                          },
                          [
                            _c(
                              "label",
                              { staticClass: "flex radio p-2 cursor-pointer" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.price,
                                      expression: "price"
                                    }
                                  ],
                                  staticClass: "my-auto transform scale-125",
                                  attrs: { type: "radio", name: "price" },
                                  domProps: {
                                    value: { min: 800, max: 2000 },
                                    checked: _vm._q(_vm.price, {
                                      min: 800,
                                      max: 2000
                                    })
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.price = { min: 800, max: 2000 }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "title px-2" }, [
                                  _vm._v("RM800 - RM2000")
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("hr", { staticClass: "border-yellow-300" }),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            staticClass:
                              "cursor-pointer text-yellow-500 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 items-center focus:text-indigo-700 focus:outline-none"
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "flex justify-center cursor-pointer"
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "px-5 rounded-full text-yellow-500 mt-3 ",
                                    on: {
                                      click: function($event) {
                                        return _vm.clearFilter("price")
                                      }
                                    }
                                  },
                                  [_vm._v("✗ Clear")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "px-5 rounded-full ",
                                    class: [_vm.top_btn_style],
                                    on: { click: _vm.getFilter }
                                  },
                                  [_vm._v("Apply")]
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "flex justify-center text-gray-100" },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "px-5 rounded-full",
                            class: [_vm.top_btn_style]
                          },
                          [_vm._v("Price Range")]
                        ),
                        _vm._v(" "),
                        _c(
                          "svg",
                          {
                            staticClass:
                              "icon icon-tabler icon-tabler-chevron-down cursor-pointer",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "20",
                              height: "20",
                              viewBox: "0 0 24 24",
                              "stroke-width": "1.5",
                              stroke: "currentColor",
                              fill: "none",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("path", {
                              attrs: { stroke: "none", d: "M0 0h24v24H0z" }
                            }),
                            _vm._v(" "),
                            _c("polyline", {
                              attrs: { points: "6 9 12 15 18 9" }
                            })
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "hidden xl:flex items-center ",
              attrs: { id: "gender" }
            },
            [
              _c("div", { staticClass: "ml-6 relative" }, [
                _c(
                  "div",
                  {
                    staticClass: "flex items-center relative",
                    on: {
                      click: function($event) {
                        return _vm.dropdownHandlerGenderPreference($event)
                      }
                    }
                  },
                  [
                    _c(
                      "ul",
                      {
                        staticClass:
                          "w-52 p-2 border-r bg-yellow-100 absolute rounded right-0 top-0 shadow mt-16 hidden overflow-hidden z-10 "
                      },
                      [
                        _c(
                          "li",
                          {
                            staticClass:
                              "cursor-pointer text-yellow-500 text-sm leading-3 tracking-normal py-2"
                          },
                          [
                            _c(
                              "label",
                              { staticClass: "flex radio p-2 cursor-pointer" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.gender,
                                      expression: "gender"
                                    }
                                  ],
                                  staticClass: "my-auto transform scale-125",
                                  attrs: {
                                    type: "radio",
                                    name: "gender",
                                    value: "Male"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.gender, "Male")
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.gender = "Male"
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "title px-2" }, [
                                  _vm._v("Male")
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("hr", { staticClass: "border-yellow-300  " }),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            staticClass:
                              "cursor-pointer text-yellow-500 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
                          },
                          [
                            _c(
                              "label",
                              { staticClass: "flex radio p-2 cursor-pointer" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.gender,
                                      expression: "gender"
                                    }
                                  ],
                                  staticClass: "my-auto transform scale-125",
                                  attrs: {
                                    type: "radio",
                                    name: "gender",
                                    value: "Female"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.gender, "Female")
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.gender = "Female"
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "title px-2" }, [
                                  _vm._v("Female")
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("hr", { staticClass: "border-yellow-300" }),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            staticClass:
                              "cursor-pointer text-yellow-500 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 items-center focus:text-indigo-700 focus:outline-none"
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "flex justify-center cursor-pointer"
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "px-5 rounded-full text-yellow-500 mt-3 ",
                                    on: {
                                      click: function($event) {
                                        return _vm.clearFilter("gender")
                                      }
                                    }
                                  },
                                  [_vm._v("✗ Clear")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "px-5 rounded-full ",
                                    class: [_vm.top_btn_style],
                                    on: { click: _vm.getFilter }
                                  },
                                  [_vm._v("Apply")]
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "flex justify-center text-gray-100" },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "px-5 rounded-full",
                            class: [_vm.top_btn_style]
                          },
                          [_vm._v("Gender Preference")]
                        ),
                        _vm._v(" "),
                        _c(
                          "svg",
                          {
                            staticClass:
                              "icon icon-tabler icon-tabler-chevron-down cursor-pointer",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "20",
                              height: "20",
                              viewBox: "0 0 24 24",
                              "stroke-width": "1.5",
                              stroke: "currentColor",
                              fill: "none",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("path", {
                              attrs: { stroke: "none", d: "M0 0h24v24H0z" }
                            }),
                            _vm._v(" "),
                            _c("polyline", {
                              attrs: { points: "6 9 12 15 18 9" }
                            })
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            ]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "max-w-5xl p-6 mx-auto mt-5 bg-gray-200 rounded-md mb-5" },
      [
        _c("span", [_vm._v("Rooms for rent:")]),
        _vm._v(" "),
        _vm._l(_vm.lists, function(list, index) {
          return _c(
            "div",
            { key: index.id, staticClass: "flex justify-start" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "flex justify-center w-full px-8 py-4 overflow-hidden bg-white rounded-lg shadow-lg mt-5"
                },
                [
                  _c("div", { staticClass: "w-1/3 bg-cover" }, [
                    _c("img", {
                      staticClass: "h-48 w-full object-cover",
                      attrs: {
                        src:
                          "/images/Properties/" + list.photo_room[0].photo_name,
                        alt: "Avatar"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-2/3 p-4 md:p-4" }, [
                    _c(
                      "div",
                      { staticClass: "flex justify-between item-center" },
                      [
                        _c(
                          "h1",
                          {
                            staticClass:
                              "text-2xl font-bold text-gray-800 dark:text-white"
                          },
                          [_vm._v(" " + _vm._s(list.listing_name))]
                        ),
                        _vm._v(" "),
                        _c(
                          "h1",
                          {
                            staticClass:
                              "text-2xl font-bold text-yellow-800 dark:text-white"
                          },
                          [_vm._v("RM" + _vm._s(list.monthly_rent) + "/Month")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass:
                          "mt-2 text-sm text-gray-600 dark:text-gray-400"
                      },
                      [
                        _vm._v(
                          _vm._s(list.property.name) +
                            " | " +
                            _vm._s(list.campus)
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex mt-2 item-center" }, [
                      _c(
                        "p",
                        {
                          staticClass:
                            "mt-2 text-sm text-gray-600 dark:text-gray-400"
                        },
                        [
                          _vm._v(
                            _vm._s(list.room_type) +
                              " | " +
                              _vm._s(list.property.gender_preferences)
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex mt-2 item-center" }, [
                      _c(
                        "p",
                        {
                          staticClass:
                            "mt-2 text-sm text-gray-600 dark:text-gray-400"
                        },
                        [
                          _vm._v(
                            _vm._s(list.property.furnishing) +
                              "| " +
                              _vm._s(list.room_furnishing)
                          )
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]
          )
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ManagePropertyList/BrowseRoom_Student.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/BrowseRoom_Student.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BrowseRoom_Student_vue_vue_type_template_id_2065807d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrowseRoom_Student.vue?vue&type=template&id=2065807d& */ "./resources/js/components/ManagePropertyList/BrowseRoom_Student.vue?vue&type=template&id=2065807d&");
/* harmony import */ var _BrowseRoom_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrowseRoom_Student.vue?vue&type=script&lang=js& */ "./resources/js/components/ManagePropertyList/BrowseRoom_Student.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BrowseRoom_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BrowseRoom_Student_vue_vue_type_template_id_2065807d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BrowseRoom_Student_vue_vue_type_template_id_2065807d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManagePropertyList/BrowseRoom_Student.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/BrowseRoom_Student.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/BrowseRoom_Student.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowseRoom_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BrowseRoom_Student.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/BrowseRoom_Student.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowseRoom_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManagePropertyList/BrowseRoom_Student.vue?vue&type=template&id=2065807d&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/ManagePropertyList/BrowseRoom_Student.vue?vue&type=template&id=2065807d& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowseRoom_Student_vue_vue_type_template_id_2065807d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BrowseRoom_Student.vue?vue&type=template&id=2065807d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManagePropertyList/BrowseRoom_Student.vue?vue&type=template&id=2065807d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowseRoom_Student_vue_vue_type_template_id_2065807d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowseRoom_Student_vue_vue_type_template_id_2065807d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);