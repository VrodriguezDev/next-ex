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
    content: "Mr. Toefl",
    inverted: true,
    style: {
      fontSize: mobile ? '2em' : '4em',
      fontWeight: 'normal',
      marginBottom: 0,
      marginTop: mobile ? '1.5em' : '3em'
    }
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    as: "h2",
    content: "Educaci\xF3n en Ingl\xE9s especializada",
    inverted: true,
    style: {
      fontSize: mobile ? '1.5em' : '1.7em',
      fontWeight: 'normal',
      marginTop: mobile ? '0.5em' : '1.5em'
    }
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    primary: true,
    size: "huge"
  }, "Comenzar", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
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
      }, "Inicio"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Menu"].Item, {
        as: "a"
      }, "Lecciones"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Menu"].Item, {
        as: "a"
      }, "Pr\xE1cticas"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Menu"].Item, {
        as: "a"
      }, "Planes"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Menu"].Item, {
        position: "right"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        as: "a",
        inverted: !fixed
      }, "Ingresa"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        as: "a",
        inverted: !fixed,
        primary: fixed,
        style: {
          marginLeft: '0.5em'
        }
      }, "Reg\xEDstrate")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HomepageHeading, null))), children);
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
  }, "Garantiza tu buen desempe\xF1o en el Toefl"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    style: {
      fontSize: '1.33em'
    }
  }, "Texto --- S\xE1bete, Sancho, que no es un hombre m\xE1s que otro si no hace m\xE1s que otro. Todas estas borrascas que nos suceden son se\xF1ales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    as: "h3",
    style: {
      fontSize: '2em'
    }
  }, "Obt\xE9n planes a tu medida"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    style: {
      fontSize: '1.33em'
    }
  }, "Texto --- Porque no es posible que el mal ni el bien sean durables, y de aqu\xED se sigue que, habiendo durado mucho el mal.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    floated: "right",
    width: 6
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    bordered: true,
    rounded: true,
    size: "large",
    src: "https://browardcollegeblog.com/wp-content/uploads/2015/10/ETS_TOEFL_Authorized_Test_Center.jpg"
  }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    textAlign: "center"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    size: "huge"
  }, "Revisa nuestros planes"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Segment"], {
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
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    avatar: true,
    src: "https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg"
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    as: "h3",
    style: {
      fontSize: '2em'
    }
  }, "\"Obtuve incre\xEDbles resultados\""), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    style: {
      fontSize: '1.33em'
    }
  }, "\xC1lvaro Alvarez")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    style: {
      paddingBottom: '5em',
      paddingTop: '5em'
    }
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    as: "h3",
    style: {
      fontSize: '2em'
    }
  }, "\"Excelente programa!\""), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    style: {
      fontSize: '1.33em'
    }
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    avatar: true,
    src: "https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg"
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "Ing."), ' ', "Marco Marquez"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Segment"], {
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
  }, "M\xE1s datos positivos, llamar la atenci\xF3n"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    style: {
      fontSize: '1.33em'
    }
  }, "Texto de descripci\xF3n --- Todas estas borrascas que nos suceden son se\xF1ales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aqu\xED se sigue que, habiendo durado mucho el mal, el bien est\xE1 ya cerca."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
    as: "h4",
    className: "header",
    horizontal: true,
    style: {
      margin: '3em 0em',
      textTransform: 'uppercase'
    }
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
    href: "#"
  }, "M\xE1s informaci\xF3n")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    as: "h3",
    style: {
      fontSize: '2em'
    }
  }, "\xBFPor qu\xE9 usar MrToefl?"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    style: {
      fontSize: '1.33em'
    }
  }, "Texto de descripci\xF3n --- Y, vi\xE9ndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: S\xE1bete, Sancho, que no es un hombre m\xE1s que otro si no hace m\xE1s que otro."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
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
//# sourceMappingURL=index.js.4d339ca0c827fca29d13.hot-update.js.map