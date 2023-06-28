

import axios from "axios"
import { FETCH_OPENING_FAILURE, FETCH_OPENING_START, FETCH_OPENING_SUCCESS, showList } from "./action"

export const getAllOpening = () => {
    return async (dispatch) => {
        try {
            dispatch(FETCH_OPENING_START())
            const response = await axios.get("https://interntaskpw.onrender.com/api/opening")
            dispatch(FETCH_OPENING_SUCCESS(response.data))

        } catch (error) {
            dispatch(FETCH_OPENING_FAILURE())
        }
    }
}
export const getRandom = async () => {
    try {
        // dispatch(FETCH_COMPANY_ID_START())
        return await axios.get("https://interntaskpw.onrender.com/api/opening/random").then((res) => res.data)
        // console.log(response.data)
        // dispatch(FETCH_COMPANY_ID_SUCCESS(response.data))
    } catch (error) {
        // dispatch(FETCH_COMPANY_ID_FAILURE())
    }
}


export const filterOpenings = (allSel, openingList, companyList) => {
    // console.log(allSel)
    return (dispatch) => {
        let filterData = openingList
        filterData = allSel.timings.length ? filterData.filter(item => allSel.timings.includes(item.timings)) : filterData
        filterData = allSel.type.length ? filterData.filter(item => allSel.type.includes(item.type)) : filterData
        filterData = allSel.dur ? filterData.filter(item => item.Duration >= allSel.dur) : filterData
        filterData = allSel.app ? filterData.filter(item => companyList[item.company_id].Applicant >= allSel.app) : filterData
        filterData = allSel.stip ? filterData.filter(item => item.Stipend[0] >= allSel.stip) : filterData
        filterData = allSel.category ? filterData.filter(item => new RegExp(`\\b(${companyList[item.company_id].compantType})\\b`, 'i').test(allSel.category.join())) : filterData
        filterData = allSel.location ? filterData.filter(item => allSel.location.some(loc => item.location.some(itemLoc => new RegExp(`\\b${loc}\\b`, 'i').test(itemLoc)))) : filterData;
        filterData = allSel.skills ? filterData = filterData.filter(item =>
            allSel.skills.some(skill =>
                item.skills.some(itemSkill =>
                    new RegExp(`\\b${skill}\\b`, 'i').test(itemSkill)
                )
            )
        ) : filterData

        dispatch(showList(filterData))
        console.log(filterData)
    }
}