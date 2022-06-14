import { fromJS } from 'immutable'
import * as constants from './constants'

//immutable对象
const defaultState = fromJS({
    title: '',
    content: ''
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch(action.type){
        case constants.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            })
        default:
            return state;
    }
}