import * as types from "./actionType"
import axios from "axios"
export const getData = (payload) => (dispatch) => {
    dispatch({ type: types.GET_COMPANY_REQUEST })
    return axios
        .get(`https://chalo-api.herokuapp.com/Companies`)
        .then(res => {
            dispatch({ type: types.GET_COMPANY_SUCCESS, payload: res.data })
        })
        .catch(e => {
            console.log(e);
            dispatch({ type: types.GET_COMPANY_FAILED });
        })
}