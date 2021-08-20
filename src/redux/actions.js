import axios from "axios";
import * as types from './actionType'

const url="http://localhost:3000/users"
const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users
});

const userDelete=()=>({
  type:types.DELETE_USERS
}) 

const userAdded=()=>({
  type:types.ADD_USERS
})
const getUSer=(user)=>({
  type:types.GET_SINGLE_USER,
  payload:user,
})
const userUpdated=()=>({
  type:types.UPDATE_USERS
})
// Define hanh dong se gui len cho reducer tiep nhan
// not Pure object: khong phai object nguyen thuy -> moi phai dung middleware de xu ly: redux-thunk
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

export const deleteUsers = (id) => {
  return function (dispatch) {
    axios
      .delete(`${url}/${id}`)
      .then((res) => {
        console.log("res", res);
        dispatch(userDelete());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};
export const AddUsers = (user) => {
  return function (dispatch) {
    axios
      .post(`${url}`,user)
      .then((res) => {
        console.log("res", res);
        dispatch(userAdded());
        dispatch(loadUsers());
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

export const updateUsers = (user,id) => {
  return function (dispatch) {
    axios
      .put(`${url}/${id}`,user)
      .then((res) => {
        console.log("res", res);
        dispatch(userUpdated());
    
      })
      .catch((error) => console.log(error));
  };
};
