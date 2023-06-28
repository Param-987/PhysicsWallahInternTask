import axios from "axios"
import { FETCH_User_FAILURE, FETCH_User_START, FETCH_User_SUCCESS, addBookMarkFailure, addBookMarkStart, addBookMarkSuccess, removeBookMarkFailure, removeBookMarkStart, removeBookMarkSuccess } from "./action"

export const getUserById = (id)=>{
    return async (dispatch)=>{
        try {
            dispatch(FETCH_User_START())
            const response = await axios.get("https://interntaskpw.onrender.com/api/user/"+ id)
            dispatch(FETCH_User_SUCCESS(response.data))
        } catch (error) {
            dispatch(FETCH_User_FAILURE())
        }
    }
}

export const AddBookMark = (id)=>{
    return async (dispatch)=>{
        try {
            dispatch(addBookMarkStart())
            const response = await axios.put("https://interntaskpw.onrender.com/api/user/649a7b00cce571fc3561f5e4/bookmark",{id})
            console.log(response.data)
            dispatch(addBookMarkSuccess(response.data))
        } catch (error) {
            dispatch(addBookMarkFailure())
        }
    }
}
export const RemoveBookMark = (id)=>{
    return async (dispatch)=>{
        try {
            dispatch(removeBookMarkStart())
            const response = await axios.delete("https://interntaskpw.onrender.com/api/user/649a7b00cce571fc3561f5e4/bookmark/"+id)
            dispatch(removeBookMarkSuccess(response.data))
        } catch (error) {
            dispatch(removeBookMarkFailure())
        }
    }
}