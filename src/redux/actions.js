
import axios from "axios";
import * as types from './actionType'

const url="http://localhost:3001/users"
const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users
});
const getMess = (users) => ({
  type: types.GET_MESSAGES,
  payload: users
});

const getUSer=(user)=>({
  type:types.GET_SINGLE_USER,
  payload:user,
})
// const addMessages=()=>({
//   type:types.ADD_MESSAGES
// })

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${url}`)
      .then((res) => {
        console.log("res", res);
        dispatch(getUsers(res.data));
      })
      .catch((error) => console.log(error));
  };
};

export const loadUsers2 = (id) => {
  return function (dispatch) {
    axios
      .get(`${url}/${id}/List_messages`)
      .then((res) => {
        console.log("res", res);
        dispatch(getMess(res.data));
      })
      .catch((error) => console.log(error));
  };
};

export const AddUsers = (user,id) => {
  return function (dispatch) {
    axios
      .post(`${url}/${id}/List_messages`,user)
      .then((res) => {
        console.log("res", res);
        // dispatch(userAdded());
        dispatch(loadUsers2(id));
      
      })
      .catch((error) => console.log(error));
  };
};
export const getSingUsers = (id) => {
  return function (dispatch) {
    axios
      .get(`${url}/${id}`)
      .then((res) => {
        console.log("res", res);
        dispatch(getUSer(res.data));
        
    
      })
      .catch((error) => console.log(error));
  };
};  
