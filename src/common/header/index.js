import React from "react";
import { connect } from "react-redux";
import { actionCreators }  from './store'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addtion, Button, SearchWrapper } from './style'
import { CSSTransition } from 'react-transition-group'


const Header = (props) => {
    return(
        <HeaderWrapper>
            <Logo href="/"></Logo>
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <NavItem className="right">登录</NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                        className={props.focused ? 'focused' : ''}
                        onFocus={props.handleInputFocus}
                        onBlur={props.handleInputBlur}
                        >
                        </NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
                </SearchWrapper>  
            </Nav>
            <Addtion>
                <Button className="writting">
                    <i className="iconfont">&#xe615;</i>
                    写文章
                </Button>
                <Button className="reg">注册</Button>
            </Addtion>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return{
        focused: state.get('header').get('focused')
    }
}


const mapDispachToProps = (dispatch) => {
    return{
        handleInputFocus() {
            dispatch(actionCreators.searchFocus())
        },

        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        }
    }
}


export default connect(mapStateToProps,mapDispachToProps)(Header);