
import * as types from "./actionType"
const initialState={
    status:false,
    userDetail:[],
    isLoading:false,
    isError:false,
}

const reducer =(oldState=initialState,action)=>{
    const {type,payload}=action
    switch (type){
        case types.GET_LOGIN_REQUEST:   
            return {
                ...oldState,
                status:false,
                isLoading:true,
                isError:false,
                userDetail:[]
            }
        case types.GET_LOGIN_SUCCESS:
            return {
                ...oldState,
                status:true,
                isLoading:false,
                isError:false,
                userDetail:payload
            }
        case types.GET_LOGIN_FAILURE:
            return {
                ...oldState,
                status:false,
                isLoading:false,
                isError:true,
                userDetail:[]
            };
        default:
            return oldState;
    }
}

export {reducer}