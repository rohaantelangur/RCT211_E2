import axios from "axios";
import {
  GET_SHOES_DATA_FAILURE,
  GET_SHOES_DATA_REQUEST,
  GET_SHOES_DATA_SUCCESS,
} from "./actionTypes";

//Create ActionCreator functions here
export const GSDR = () => {
  return {
    type: GET_SHOES_DATA_REQUEST,
  };
};

export const GSDS = (payload) => {
  return {
    type: GET_SHOES_DATA_SUCCESS,
    payload,
  };
};

export const GSDF = () => {
  return {
    type: GET_SHOES_DATA_FAILURE,
  };
};

export const FeactData = (payload) => (despatch) => {
  despatch(GSDR());
  axios
    .get("http://localhost:8080/shoes",payload)
    .then((res) => {
      despatch(GSDS(res.data));
      console.log(res.data)
    })
    .catch((err) => {
      despatch(GSDF());
    });
};
