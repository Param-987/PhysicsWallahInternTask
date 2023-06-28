// Get User
export const GET_User_START  = "GET_User_START"
export const GET_User_SUCCESS  = "GET_User_SUCCESS"
export const GET_User_FAILURE  = "GET_User_FAILURE"

// Action Function
export const FETCH_User_START = () => ({type:GET_User_START})
export const FETCH_User_SUCCESS = (data) => ({type:GET_User_SUCCESS,payload:data})
export const FETCH_User_FAILURE = () => ({type:GET_User_FAILURE})

///////////////////////////////////////////////////////////////////////////////////////////

// Add opening in bookmark of User
export const Add_BookMark_START  = "Add_BookMark_START"
export const Add_BookMark_SUCCESS  = "Add_BookMark_SUCCESS"
export const Add_BookMark_FAILURE  = "Add_BookMark_FAILURE"

// Action Function
export const addBookMarkStart = () => ({type:Add_BookMark_START})
export const addBookMarkSuccess = (data) => ({type:Add_BookMark_SUCCESS,payload:data})
export const addBookMarkFailure = () => ({type:Add_BookMark_FAILURE})

///////////////////////////////////////////////////////////////////////////////////////////


// Remove Opening in BookMark of User
export const Remove_BookMark_START  = "Remove_BookMark_START"
export const Remove_BookMark_SUCCESS  = "Remove_BookMark_SUCCESS"
export const Remove_BookMark_FAILURE  = "Remove_BookMark_FAILURE"

// Action Function
export const removeBookMarkStart = () => ({type:Remove_BookMark_START})
export const removeBookMarkSuccess = (data) => ({type:Remove_BookMark_SUCCESS,payload:data})
export const removeBookMarkFailure = () => ({type:Remove_BookMark_FAILURE})


