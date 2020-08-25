export const LOAD_BOOK = 'LOADBOOK';
export const GET_BOOK = 'GETBOOK';
export const ERROR = 'ERRORBOOK';
import axios from 'axios';

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

export const fetchbooks = (dispatch) =>{
    return (dispatch) => {
  dispatch(loadbooks());
  axios.get('http://127.0.0.1:3000/api/books')
  .then(res=>{
      const data = res.data;
      dispatch(getbooks(data.Books))
  })
  .catch(err=>dispatch(errorbooks(err)))
}
}


export const loadbooks = () => {
    return {
        type: LOAD_BOOK,
    }
}
export const getbooks = (books) => {
   return{
       type: GET_BOOK,
       books,
   }
}
export const errorbooks = (req_error)=>{
    return {
        type: ERROR,
        req_error,
    }
}

