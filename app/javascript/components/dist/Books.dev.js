"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _bookActions = require("../redux/books/bookActions");

var _reactRedux = require("react-redux");

var _jsxFileName = "/home/tahir/Documents/Microverse/react-rails/Bookstore/app/javascript/components/Books.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Books(props) {
  return (
    /*#__PURE__*/
    _react["default"].createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }
    }, props.books[0].title)
  );
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    books: state.books
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchbooks: dispatch((0, _bookActions.fetchbooks)())
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Books);

exports["default"] = _default;