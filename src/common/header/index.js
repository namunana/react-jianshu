import React, {Component} from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { actionCreators }  from './store'
import { actionCreator as loginActionCreator } from "../../pages/login/store";
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addtion, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style'
import { CSSTransition } from 'react-transition-group'

class Header extends Component {
    
    render() {
        const {focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props
        return(
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    { 
                        login ? 
                            <NavItem onClick={logout} className="right logout">退出</NavItem> :  
                            <Link to='/login'><NavItem className="right">登录</NavItem></Link>
                    }
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
                        {this.getSearchInfo()}
                    </SearchWrapper>  
                </Nav>
                <Addtion>
                    <Link to="/write">
                        <Button className="writting">
                            <i className="iconfont">&#xe615;</i>
                            写文章
                        </Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Addtion>
            </HeaderWrapper>
        )
    }

    getSearchInfo(){
        const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList = []

        for(let i = (page-1) * 10 ; i<page * 10; i++){
            if(newList[i]){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused || mouseIn) {
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return{
        focused: state.get('header').get('focused'),
        list: state.get('header').get('list'),
        page: state.get('header').get('page'),
        totalPage: state.get('header').get('totalPage'),
        mouseIn: state.get('header').get('mouseIn'),
        login: state.get('login').get('login')
    }
}


const mapDispachToProps = (dispatch) => {
    return{
        handleInputFocus(list) {
            if(list.size === 0){
                dispatch(actionCreators.getList())
            }
            dispatch(actionCreators.searchFocus())
        },

        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },

        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },

        handleMouseLeave () {
            dispatch(actionCreators.mouseLeave())
        },

        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle) {
                originAngle = parseInt(originAngle, 10)
            }else{
                originAngle = 0
            }
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)';
            if(page < totalPage){
                dispatch(actionCreators.changePage(page+1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
        },

        logout() {
            dispatch(loginActionCreator.logout())
        }
    }
}


export default connect(mapStateToProps,mapDispachToProps)(Header);