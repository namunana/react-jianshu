import { fromJS } from 'immutable'
import { act } from 'react-dom/test-utils'
import * as constants from './constants'

//immutable对象
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
})

const changeHome = (state, action) => {
    return state.merge({
        topicList: action.topicList,
        articleList: action.articleList,
        recommendList: action.recommendList
    })
}

const addHomeList = (state,action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
    })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch(action.type){
        case constants.CHANGE_HOME:
            return changeHome(state,action)
        case constants.ADD_HOME_LIST:
            return addHomeList(state,action)
        case constants.TOGGLE_SCROLL_TOP: 
            return state.set('showScroll', action.show)
        default:
            return state;
    }
 
}