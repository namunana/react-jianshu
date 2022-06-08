import React, { Component } from "react";
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addtion, Button } from './style'

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo href="/"></Logo>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">Aa</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavSearch></NavSearch>
                </Nav>
                <Addtion>
                    <Button className="writting">写文章</Button>
                    <Button className="reg">注册</Button>
                </Addtion>
            </HeaderWrapper>
            
        )
    }
}

export default Header