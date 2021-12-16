import * as actinType from '../Types'


const mode = localStorage.getItem('themeMode')
const color = localStorage.getItem('colorMode')
const hover_bg = localStorage.getItem('hoverBg')

const initialState = {
    mode: mode,
    color: color,
    hover_bg: hover_bg
}

const ThemeReducer = (state = initialState, action) => {
    switch(action.type) {
        case actinType.SET_MODE:
            return {
                ...state,
                mode: action.payload,
            }
        case actinType.SET_COLOR:
            return {
                ...state,
                color: action.payload,
                hover_bg: action.background
            }
        default:
            return state
    }
}

export default ThemeReducer