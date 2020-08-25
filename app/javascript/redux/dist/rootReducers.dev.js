"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bookReducers = require("./books/bookReducers");

var _redux = require("redux");

var rootReducer = (0, _redux.combineReducers)({
  books: _bookReducers.BookReducer
});
var _default = rootReducer;
exports["default"] = _default;