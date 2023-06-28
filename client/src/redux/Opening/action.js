export const GET_OPENINGS_START  = "GET_OPENINGS_START"
export const GET_OPENINGS_SUCCESS  = "GET_OPENINGS_SUCCESS"
export const GET_OPENINGS_FAILURE  = "GET_OPENINGS_FAILURE"
export const Set_Show_List  = "Set_Show_List"

// export const GET_OPENINGS_ID_START  = "GET_OPENINGS_ID_START"
// export const GET_OPENINGS_ID_SUCCESS  = "GET_OPENINGS_ID_SUCCESS"
// export const GET_OPENINGS_ID_FAILURE  = "GET_OPENINGS_ID_FAILURE"

export const FETCH_OPENING_START = () => ({type:GET_OPENINGS_START})
export const FETCH_OPENING_SUCCESS = (data) => ({type:GET_OPENINGS_SUCCESS,payload:data})
export const FETCH_OPENING_FAILURE = () => ({type:GET_OPENINGS_FAILURE})
export const showList = (data)=>({type:Set_Show_List,payload:data})

// export const FETCH_OPENING_ID_START = () => ({type:GET_OPENINGS_ID_START})
// export const FETCH_OPENING_ID_SUCCESS = (data) => ({type:GET_OPENINGS_ID_SUCCESS,payload:data})
// export const FETCH_OPENING_ID_FAILURE = () => ({type:GET_OPENINGS_ID_FAILURE})

