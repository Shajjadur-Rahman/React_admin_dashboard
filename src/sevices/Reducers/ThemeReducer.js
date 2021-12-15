import * as actinType from '../Types'


const mode = localStorage.getItem('themeMode')
const mode_id = localStorage.getItem('mode_id')
const color = localStorage.getItem('colorMode')
const color_id = localStorage.getItem('color_id')

const initialState = {
    mode: mode,
    mode_id: mode_id,
    color: color,
    color_id: color_id
}

const ThemeReducer = (state = initialState, action) => {
    switch(action.type) {
        case actinType.SET_MODE:
            return {
                ...state,
                mode: action.payload.class,
                mode_id: action.payload.id
            }
        case actinType.SET_COLOR:
            return {
                ...state,
                color: action.payload.background,
                color_id: action.payload.id
            }
        default:
            return state
    }
}

export default ThemeReducer