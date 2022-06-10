import React, {Component} from "react";
import { connect } from "react-redux";
import { actionCreators }  from './store'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addtion, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style'
import { CSSTransition } from 'react-transition-group'

class Header extends Component {
    render() {
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
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
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
        if(this.props.focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            this.props.list.map((item) => {
                                return<SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
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
        list: state.get('header').get('list')
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
        }
    }
}


export default connect(mapStateToProps,mapDispachToProps)(Header);