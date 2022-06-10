import React, {Component} from "react";
import { connect } from "react-redux";
import { actionCreators }  from './store'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addtion, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style'
import { CSSTransition } from 'react-transition-group'

class Header extends Component {
    
    render() {
        const {focused, handleInputFocus, handleInputBlur } = this.props
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
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
                        {this.getSearchInfo()}
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
                        <SearchInfoSwitch onClick={() => handleChangePage(page,totalPage)}>换一批</SearchInfoSwitch>
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
        mouseIn: state.get('header').get('mouseIn')
    }
}


const mapDispachToProps = (dispatch) => {
    return{
        handleInputFocus() {
            dispatch(actionCreators.getList())
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

        handleChangePage(page, totalPage) {
            console.log(page,totalPage)
            if(page < totalPage){
                dispatch(actionCreators.changePage(page+1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
        }
    }
}


export default connect(mapStateToProps,mapDispachToProps)(Header);