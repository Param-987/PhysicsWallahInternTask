import { legacy_createStore as createStore, combineReducers ,applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import CompanyReducer from "./Company/reducer"
import OpeningReducer from "./Opening/reducer"
import UserReducer from "./User/reducer"


const rootReducer = combineReducers(
    {
        company: CompanyReducer,
        opening: OpeningReducer,
        user:UserReducer
    })
const store = createStore(rootReducer,applyMiddleware(thunk))

export default store
