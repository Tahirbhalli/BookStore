"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;

var _react = _interopRequireDefault(require("react"));

var _Books = _interopRequireDefault(require("./Books"));

var _jsxFileName = "/home/tahir/Documents/Microverse/react-rails/Bookstore/app/javascript/components/App.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function App() {
  return (
    /*#__PURE__*/
    _react["default"].createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }
    },
    /*#__PURE__*/
    _react["default"].createElement(_Books["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }
    }))
  );
}