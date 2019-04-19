webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");






/* eslint-disable max-len */

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable react/no-unescaped-entities */

/* eslint-disable react/jsx-one-expression-per-line */

/* eslint-disable react/no-multi-comp */

/* eslint-disable react/prop-types */



var HomepageHeading = function HomepageHeading(_ref) {
  var mobile = _ref.mobile;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    text: true
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    as: "h1",
    content: "Imagine-a-Company",
    inverted: true,
    style: {
      fontSize: mobile ? '2em' : '4em',
      fontWeight: 'normal',
      marginBottom: 0,
      marginTop: mobile ? '1.5em' : '3em'
    }
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    as: "h2",
    content: "Do whatever you want when you want to.",
    inverted: true,
    style: {
      fontSize: mobile ? '1.5em' : '1.7em',
      fontWeight: 'normal',
      marginTop: mobile ? '0.5em' : '1.5em'
    }
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    primary: true,
    size: "huge"
  }, "Get Started", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
    name: "right arrow"
  })));
};

var getWidth = function getWidth() {
  var isSSR = typeof window === 'undefined';
  return isSSR ? semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Responsive"].onlyTablet.minWidth : window.innerWidth;
};
/* Heads up!
   * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however,
   it can be implemented easily.
   * It can be more complicated, but you can create really flexible markup.
   */


var DesktopContainer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DesktopContainer, _React$Component);

  function DesktopContainer(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DesktopContainer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DesktopContainer).call(this, props));
    _this.state = {};
    return _this;
  } // // let hideFixedMenu = () => this.setState({ fixed: false });
  // function hideFixedMenu() {
  //     this.setState({ fixed: false });
  // }
  // let showFixedMenu = () => this.setState({ fixed: true });


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DesktopContainer, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var fixed = this.state.fixed;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Responsive"], {
        getWidth: getWidth,
        minWidth: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Responsive"].onlyTablet.minWidth
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Visibility"], {
        once: false,
        onBottomPassed: this.showFixedMenu,
        onBottomPassedReverse: this.hideFixedMenu
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Segment"], {
        inverted: true,
        textAlign: "center",
        style: {
          minHeight: 700,
          padding: '1em 0em'
        },
        vertical: true
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Menu"], {
        fixed: fixed ? 'top' : null,
        inverted: !fixed,
        pointing: !fixed,
        secondary: !fixed,
        size: "large"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Container"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Menu"].Item, {
        as: "a",
        active: true
      }, "Home"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Menu"].Item, {
        as: "a"
      }, "Work"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Menu"].Item, {
        as: "a"
      }, "Company"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Menu"].Item, {
        as: "a"
      }, "Careers"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Menu"].Item, {
        position: "right"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        as: "a",
        inverted: !fixed
      }, "Log in"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        as: "a",
        inverted: !fixed,
        primary: fixed,
        style: {
          marginLeft: '0.5em'
        }
      }, "Sign Up")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HomepageHeading, null))), children);
    }
  }]);

  return DesktopContainer;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var MobileContainer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MobileContainer, _Component);

  function MobileContainer(props) {
    var _this2;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MobileContainer);

    _this2 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MobileContainer).call(this, props));
    _this2.state = {};
    return _this2;
  } // handleSidebarHide = () => this.setState({ sidebarOpened: false })
  // handleToggle = () => this.setState({ sidebarOpened: true })


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MobileContainer, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var sidebarOpened = this.state.sidebarOpened;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Responsive"], {
        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Sidebar"].Pushable,
        getWidth: getWidth,
        maxWidth: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Responsive"].onlyMobile.maxWidth
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Sidebar"], {
        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Menu"],
        animation: "push",
        inverted: true,
        onHide: this.handleSidebarHide,
        vertical: true,
        visible: sidebarOpened
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Menu"].Item, {
        as: "a",
        active: true
      }, "Home"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Menu"].Item, {
        as: "a"
      }, "Work"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Menu"].Item, {
        as: "a"
      }, "Company"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Menu"].Item, {
        as: "a"
      }, "Careers"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Menu"].Item, {
        as: "a"
      }, "Log in"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Menu"].Item, {
        as: "a"
      }, "Sign Up")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Sidebar"].Pusher, {
        dimmed: sidebarOpened
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Segment"], {
        inverted: true,
        textAlign: "center",
        style: {
          minHeight: 350,
          padding: '1em 0em'
        },
        vertical: true
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Container"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Menu"], {
        inverted: true,
        pointing: true,
        secondary: true,
        size: "large"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Menu"].Item, {
        onClick: this.handleToggle
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        name: "sidebar"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Menu"].Item, {
        position: "right"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        as: "a",
        inverted: true
      }, "Log in"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        as: "a",
        inverted: true,
        style: {
          marginLeft: '0.5em'
        }
      }, "Sign Up")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HomepageHeading, {
        mobile: true
      })), children));
    }
  }]);

  return MobileContainer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var ResponsiveContainer = function ResponsiveContainer(_ref2) {
  var children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(DesktopContainer, null, children), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(MobileContainer, null, children));
};

var HomepageLayout = function HomepageLayout() {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ResponsiveContainer, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Segment"], {
    style: {
      padding: '8em 0em'
    },
    vertical: true
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    stackable: true,
    verticalAlign: "middle"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    width: 8
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    as: "h3",
    style: {
      fontSize: '2em'
    }
  }, "We Help Companies and Companions"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    style: {
      fontSize: '1.33em'
    }
  }, "We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs... through pure data analytics."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    as: "h3",
    style: {
      fontSize: '2em'
    }
  }, "We Make Bananas That Can Dance"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    style: {
      fontSize: '1.33em'
    }
  }, "Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    floated: "right",
    width: 6
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    bordered: true,
    rounded: true,
    size: "large",
    src: "/images/wireframe/white-image.png"
  }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    textAlign: "center"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    size: "huge"
  }, "Check Them Out"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Segment"], {
    style: {
      padding: '0em'
    },
    vertical: true
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    celled: "internally",
    columns: "equal",
    stackable: true
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, {
    textAlign: "center"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    style: {
      paddingBottom: '5em',
      paddingTop: '5em'
    }
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    as: "h3",
    style: {
      fontSize: '2em'
    }
  }, "\"What a Company\""), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    style: {
      fontSize: '1.33em'
    }
  }, "That is what they all say about us")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    style: {
      paddingBottom: '5em',
      paddingTop: '5em'
    }
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    as: "h3",
    style: {
      fontSize: '2em'
    }
  }, "\"I shouldn't have gone with their competitor.\""), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    style: {
      fontSize: '1.33em'
    }
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    avatar: true,
    src: "/images/avatar/large/nan.jpg"
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "Nan"), ' ', "Chief Fun Officer Acme Toys"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Segment"], {
    style: {
      padding: '8em 0em'
    },
    vertical: true
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    text: true
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    as: "h3",
    style: {
      fontSize: '2em'
    }
  }, "Breaking The Grid, Grabs Your Attention"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    style: {
      fontSize: '1.33em'
    }
  }, "Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    as: "a",
    size: "large"
  }, "Read More"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
    as: "h4",
    className: "header",
    horizontal: true,
    style: {
      margin: '3em 0em',
      textTransform: 'uppercase'
    }
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
    href: "#"
  }, "Case Studies")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    as: "h3",
    style: {
      fontSize: '2em'
    }
  }, "\xBFPor qu\xE9 usar MrToefl?"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    style: {
      fontSize: '1.33em'
    }
  }, "Y, vi\xE9ndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: S\xE1bete, Sancho, que no es un hombre m\xE1s que otro si no hace m\xE1s que otro."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    as: "a",
    size: "large"
  }, "Ver los Planes"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Segment"], {
    inverted: true,
    vertical: true,
    style: {
      padding: '5em 0em'
    }
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Container"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    divided: true,
    inverted: true,
    stackable: true
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    width: 3
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    inverted: true,
    as: "h4",
    content: "Servicios"
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["List"], {
    link: true,
    inverted: true
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["List"].Item, {
    as: "a"
  }, "FAQ"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["List"].Item, {
    as: "a"
  }, "Contactos"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["List"].Item, {
    as: "a"
  }, "Acerca del Toefl"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    width: 7
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    as: "h4",
    inverted: true
  }, "Desarrollo"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "dev.vrodriguez@gmail.com")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomepageLayout);

/***/ })

})
//# sourceMappingURL=index.js.3c18f084f89c7fda8fff.hot-update.js.map