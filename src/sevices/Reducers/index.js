import { combineReducers } from "redux"
import ThemeReducer from "./ThemeReducer"
import AuthReducer from './AuthReducer';




export default combineReducers({
    ThemeReducer,
    AuthReducer,
})

