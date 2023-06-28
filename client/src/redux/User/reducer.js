import { Add_BookMark_FAILURE, Add_BookMark_START, Add_BookMark_SUCCESS, GET_User_FAILURE, GET_User_START, GET_User_SUCCESS, Remove_BookMark_FAILURE, Remove_BookMark_START, Remove_BookMark_SUCCESS } from "./action"


const InitialState = {
    user: null,
    isFetching: false,
    isError: false
}

const UserReducer = (state = InitialState, action) => {
    switch (action.type) {
        case GET_User_START:
            return {
                isFetching: true,
                ...state,
            }
        case GET_User_SUCCESS:
            return {
                isFetching: false,
                user: action.payload
            }
        case GET_User_FAILURE:
            return {
                isError: true,
                ...state,
                user: null
            }
        case Add_BookMark_START:
            return {
                isFetching: true,
                ...state,
            }
        case Add_BookMark_SUCCESS:
            return {
                isFetching: false,
                user: action.payload
            }
        case Add_BookMark_FAILURE:
            return {
                isError: true,
                ...state,
            }

        case Remove_BookMark_START:
            return {
                isFetching: true,
                ...state,
            }
        case Remove_BookMark_SUCCESS:
            return {
                isFetching: false,
                user: action.payload
            }
        case Remove_BookMark_FAILURE:
            return {
                isError: true,
                ...state,
            }
        default:
            return state;
    }
}

export default UserReducer