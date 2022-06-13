import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

export const changeHome = (data) => ({
    type: constants.CHANGE_HOME,
    topicList: fromJS(data.topicList),
    articleList: fromJS(data.articleList),
    recommendList: fromJS(data.recommendList)
})
export const addHomeList = (list,nextPage) => ({
    type: constants.ADD_HOME_LIST,
    list: fromJS(list),
    nextPage
})

export const toggleTopShow = (show) =>({
    type: constants.TOGGLE_SCROLL_TOP,
    show: fromJS(show)
})

export const getChangeHome = () =>{
    return (dispatch) =>{
        axios.get('/api/home.json').then((res) => {
            let result = res.data.data
            const action = changeHome(result)
            dispatch(action)
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export const getMoreList = (page) =>{
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+page).then((res) =>{
          const result = res.data.data
          const action = addHomeList(result,page+1)
          dispatch(action) 
        }).catch((err)=>{
            console.log(err)
        })   
    }
}

