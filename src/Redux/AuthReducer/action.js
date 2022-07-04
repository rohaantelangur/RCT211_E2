import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
import axios from 'axios'

//Create ActionCreator functions here
export const LR = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const LS = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const LF = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const login = (payload) => (despatch) => {
    despatch(LR())
  axios
    .post("https://reqres.in/api/login", payload)
    .then((res) => {
    despatch(LS({isAuth:true, token:res.data.token}))
    })
    .catch((err) => {
    despatch(LF())
    });
};
