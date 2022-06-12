import React, {Component} from "react";
import {HomeWrapper, HomeLeft, HomeRight} from './style'
import List from './component/List'
import Recommend from "./component/Recommend";
import Topic from "./component/Topic";
import Writer from "./component/Writer";
import axios from "axios";
import {connect} from 'react-redux'

class Home extends Component {
    render() {
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" alt="" src="https://upload.jianshu.io/admin_banners/web_images/5055/348f9e194f4062a17f587e2963b7feb0b0a5a982.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        axios.get('/api/home.json').then((res) => {
            let result = res.data.data
            const action = {
                type: 'change_home',
                topicList: result.topicList,
                articleList: result.articleList,
                recommendList: result.recommendList
            }
            this.props.changeHome(action)
        })
    }
}

const mapDispath = (dispatch) => {
    return{
        changeHome(action) {
            dispatch(action)
        }
    }
}
export default connect(null,mapDispath)(Home)