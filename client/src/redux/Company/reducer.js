import { GET_COMPANY_ID_FAILURE, GET_COMPANY_ID_START, GET_COMPANY_ID_SUCCESS } from "./action"


const InitialState = {
    companyList:{},
    isFetching:false,
    isError:false
}

 const CompanyReducer = (state=InitialState,action)=>{
    switch (action.type) {
        // case GET_COMPANY_START:
        //     return {
        //         isFetching:true,
        //         ...state
        //     }
        // case GET_COMPANY_SUCCESS:
        //     return {
        //         isFetching:false,
        //         ...state,
        //         companyList[action.payload._id] :action.payload
        //     }
        // case GET_COMPANY_FAILURE:
        //     return {
        //         isFetching:false,
        //         isError:true,
        //         companyList:[]
        //     }
        case GET_COMPANY_ID_START:
            return {
                isFetching:true,
                ...state
            }
        case GET_COMPANY_ID_SUCCESS:
            return {
                isFetching:false,
                isError:false,
                ...state,
                companyList:{
                    ...state.companyList,
                    [action.payload._id]: action.payload
                }
            }
        case GET_COMPANY_ID_FAILURE:
            return {
                ...state,
                isError:true
            }
        default:
            return state;
    }
}

export default CompanyReducer