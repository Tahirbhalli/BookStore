"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorbooks = exports.getbooks = exports.loadbooks = exports.fetchbooks = exports.ERROR = exports.GET_BOOK = exports.LOAD_BOOK = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LOAD_BOOK = 'LOADBOOK';
exports.LOAD_BOOK = LOAD_BOOK;
var GET_BOOK = 'GETBOOK';
exports.GET_BOOK = GET_BOOK;
var ERROR = 'ERRORBOOK';
exports.ERROR = ERROR;

// export const fetchUsers = () => {
//     return (dispatch) => {
//       dispatch(fetchUsersRequest())
//       axios
//         .get('https://jsonplaceholder.typicode.com/users')
//         .then(response => {
//           // response.data is the users
//           const users = response.data
//           dispatch(fetchUsersSuccess(users))
//         })
//         .catch(error => {
//           // error.message is the error message
//           dispatch(fetchUsersFailure(error.message))
//         })
//     }
//   }
var fetchbooks = function fetchbooks(dispatch) {
  return function (dispatch) {
    dispatch(loadbooks());

    _axios["default"].get('http://127.0.0.1:3000/api/books').then(function (res) {
      var data = res.data;
      dispatch(getbooks(data.Books));
    })["catch"](function (err) {
      return dispatch(errorbooks(err));
    });
  };
};

exports.fetchbooks = fetchbooks;

var loadbooks = function loadbooks() {
  return {
    type: LOAD_BOOK
  };
};

exports.loadbooks = loadbooks;

var getbooks = function getbooks(books) {
  return {
    type: GET_BOOK,
    books: books
  };
};

exports.getbooks = getbooks;

var errorbooks = function errorbooks(req_error) {
  return {
    type: ERROR,
    req_error: req_error
  };
};

exports.errorbooks = errorbooks;