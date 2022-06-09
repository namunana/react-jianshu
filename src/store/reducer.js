import { combineReducers } from 'redux'
import {reducer as headerReduce} from '../common/header/store'

const reducer =  combineReducers({
    header: headerReduce
})

export default reducer