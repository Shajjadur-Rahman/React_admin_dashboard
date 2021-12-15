import * as actionType from '../Types'



export const loginUser = () => dispatch => {
    localStorage.setItem('login', true)
    dispatch({
        type: actionType.LOGIN_USER,
        payload: true
    })
}


export const logOutUser = () => dispatch => {
    localStorage.removeItem('login')
    dispatch({
        type: actionType.LOGOUT_USER,
        payload: false
    })
}