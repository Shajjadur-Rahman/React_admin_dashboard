import * as actionTyp from '../Types'


export const setMode = mode => dispatch => {
    localStorage.setItem('themeMode', mode.class)
    localStorage.setItem('mode_id', mode.id)
    dispatch({
        type: actionTyp.SET_MODE,
        payload: mode
    })
}

export const setColor = color => dispatch =>{
    localStorage.setItem('colorMode', color.background)
    localStorage.setItem('color_id', color.id)
    dispatch({
        type: actionTyp.SET_COLOR,
        payload: color
    })
}

export const getTheme = () => {
    return {
        type: 'GET_THEME'
    }
}

