import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

export const changeHome = (data) => ({
    type: constants.CHANGE_HOME,
    topicList: fromJS(data.topicList),
    articleList: fromJS(data.articleList),
    recommendList: fromJS(data.recommendList)
})

export const getChangeHome = () =>{
    return (dispatch) =>{
        axios.get('/api/home.json').then((res) => {
            let result = res.data.data
            const action = changeHome(result)
            dispatch(action)
        })
    }
}