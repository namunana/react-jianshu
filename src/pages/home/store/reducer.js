import { fromJS } from 'immutable'

//immutable对象
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch(action.type){
        case 'change_home':
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            })
        default:
            return state;
    }
 
}