import axios from "axios"
import * as constants from './constants'


export const changeDetail = (title,content) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content
})

export const getDetail = ()=>{
    return (dispatch) => {
        axios.get('/api/detail.json').then((res) => {
            const result = res.data.data;
            dispatch(changeDetail(result.title,result.content))
        }).catch((e)=>{
            console.log(e)
        })
    }
    
}