import { FETCH_COMPANY_FAILURE, FETCH_COMPANY_ID_FAILURE, FETCH_COMPANY_ID_START, FETCH_COMPANY_ID_SUCCESS, FETCH_COMPANY_START, FETCH_COMPANY_SUCCESS } from "./action"

import axios from "axios"

export const getAllCompany = ()=>{
    return async (dispatch)=>{
        try {
            dispatch(FETCH_COMPANY_START())
            const response = await axios.get("https://interntaskpw.onrender.com/api/company")
            dispatch(FETCH_COMPANY_SUCCESS(response.data))
        } catch (error) {
            dispatch(FETCH_COMPANY_FAILURE())
        }
    }
}
export const getCompanyByID = (id)=>{
    return async (dispatch)=>{
        try {
            dispatch(FETCH_COMPANY_ID_START())
            const response = await axios.get("https://interntaskpw.onrender.com/api/company/" + id)
            dispatch(FETCH_COMPANY_ID_SUCCESS(response.data))
        } catch (error) {
            dispatch(FETCH_COMPANY_ID_FAILURE())
        }
    }
}