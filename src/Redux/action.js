import { GET_LOGIN_FAILURE,GET_LOGIN_REQUEST,GET_LOGIN_SUCCESS } from "./actionType"


const getLoginRequest=()=>{
    return {
        type:GET_LOGIN_REQUEST
    }
}

const getLoginSuccess=(payload)=>{
    return {
        type:GET_LOGIN_SUCCESS,
        payload
    }
}

const getLoginFailure=()=>{
    return {
        type:GET_LOGIN_FAILURE
    }
}



export  {getLoginFailure,getLoginRequest,getLoginSuccess} 