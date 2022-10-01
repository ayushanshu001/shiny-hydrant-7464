import * as types from "./actionType"
const initialState = {
    data: [],
    isLoading: false,
    isError: false,
}
export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.GET_COMPANY_REQUEST:
            return { ...state, isLoading: true };
        case types.GET_COMPANY_SUCCESS:
            return { ...state, data: payload, isLoading: false, };
        case types.GET_COMPANY_FAILED:
            return { ...state, isLoading: false, isError: true, data: [] };
        default: return state
    }
}