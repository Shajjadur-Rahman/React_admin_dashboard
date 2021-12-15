import { createStore, applyMiddleware  } from "redux"
import rootReducer from './Reducers';
import thunk from 'redux-thunk'



const initialState = {}


export const store = createStore(
    rootReducer,
    initialState,  
    applyMiddleware(thunk)
)