import { GET_OPENINGS_FAILURE, GET_OPENINGS_START, GET_OPENINGS_SUCCESS, Set_Show_List } from "./action";

const InitialState = {
    openingList:[],
    showingList:[],
    isFetching:false,
    isError:false
}

 const OpeningReducer = (state=InitialState,action)=>{
    switch (action.type) {
        case GET_OPENINGS_START:
            return {
                isFetching:true,
                isError:false,
                openingList:[],
                showingList:[]
            }
        case GET_OPENINGS_SUCCESS:
            return {
                isFetching:false,
                isError:false,
                openingList:action.payload,
                showingList:action.payload,
            }
        case GET_OPENINGS_FAILURE:
            return {
                isFetching:false,
                isError:true,
                openingList:[],
                showingList:[]
            }
        case Set_Show_List:
            return {
                ...state,
                showingList:action.payload
        }
        default:
            return state;
    }
}

export default OpeningReducer