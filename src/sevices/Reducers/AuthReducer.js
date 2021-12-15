import * as actionType from '../Types'

const login = localStorage.getItem('login', false)

const initialState = {
    login: login
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.LOGIN_USER:
            return{
                ...state,
                login: action.payload
            }
        case actionType.LOGOUT_USER:
            return{
                ...state,
                login: action.payload
            }
        default:
            return state
    }
}

export default AuthReducer