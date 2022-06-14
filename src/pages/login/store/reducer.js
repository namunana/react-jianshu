import { fromJS } from 'immutable'
import * as constants from './constants'

//immutable对象
const defaultState = fromJS({
    login: false
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch(action.type){
        case constants.CHNAGE_LOGIN:
            return state.set('login', action.value)
        case constants.CHANGE_LOGOUT:
            return state.set('login', action.value)
        default:
            return state;
    }
}