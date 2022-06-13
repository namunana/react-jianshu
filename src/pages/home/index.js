import React, {PureComponent} from "react";
import {HomeWrapper, HomeLeft, HomeRight, BackTop} from './style'
import List from './component/List'
import Recommend from "./component/Recommend";
import Topic from "./component/Topic";
import Writer from "./component/Writer";
import {connect} from 'react-redux'
import { actionCreator } from './store'

class Home extends PureComponent {
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
                {
                    this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
                }
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHome()
        this.bindEvent()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
    
    bindEvent() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }

    handleScrollTop(){
        window.scrollTo(0,0);
    }
}

const mapStateToProps = (state) =>({
    showScroll: state.get('home').get('showScroll')
})

const mapDispath = (dispatch) => {
    return {
        changeHome(){
            dispatch(actionCreator.getChangeHome())
        },
        changeScrollTopShow() {
            if(document.documentElement.scrollTop > 100){
                dispatch(actionCreator.toggleTopShow(true))
            }else{
                dispatch(actionCreator.toggleTopShow(false))
            }
        }
    }
}
export default connect(mapStateToProps,mapDispath)(Home)