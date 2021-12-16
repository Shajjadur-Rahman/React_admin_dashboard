import * as actionTyp from '../Types'


export const setMode = mode => dispatch => {
    localStorage.setItem('themeMode', mode)
    dispatch({
        type: actionTyp.SET_MODE,
        payload: mode
    })
}

export const setColor = (color, background) => dispatch => {
    localStorage.setItem('colorMode', color)
    localStorage.setItem('hoverBg', background)
    dispatch({
        type: actionTyp.SET_COLOR,
        payload: color,
        background: background
    })
}

export const getTheme = () => {
    return {
        type: 'GET_THEME'
    }
}

