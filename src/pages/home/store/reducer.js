import { fromJS } from 'immutable'
import * as constants from './constants'

//immutable对象
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch(action.type){
        case constants.CHANGE_HOME:
            return state.merge({
                topicList: action.topicList,
                articleList: action.articleList,
                recommendList: action.recommendList
            })
        default:
            return state;
    }
 
}