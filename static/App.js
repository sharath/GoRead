"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = function (_React$Component) {
  _inherits(Reader, _React$Component);

  function Reader() {
    _classCallCheck(this, Reader);

    return _possibleConstructorReturn(this, (Reader.__proto__ || Object.getPrototypeOf(Reader)).call(this));
  }

  _createClass(Reader, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "The Reader component goes here."
      );
    }
  }]);

  return Reader;
}(React.Component);

var BookShelf = function (_React$Component2) {
  _inherits(BookShelf, _React$Component2);

  function BookShelf() {
    _classCallCheck(this, BookShelf);

    return _possibleConstructorReturn(this, (BookShelf.__proto__ || Object.getPrototypeOf(BookShelf)).call(this));
  }

  _createClass(BookShelf, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "The BookShelf component goes here."
      );
    }
  }]);

  return BookShelf;
}(React.Component);

var Login = function (_React$Component3) {
  _inherits(Login, _React$Component3);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "The Login component goes here."
      );
    }
  }]);

  return Login;
}(React.Component);

var App = function (_React$Component4) {
  _inherits(App, _React$Component4);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(Login, null);
    }
  }]);

  return App;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(App, null), document.getElementById("contents"));