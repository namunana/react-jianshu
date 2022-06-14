import React, {PureComponent} from "react";
import {LoginWrapper, LoginBox,Input,Button} from './style'
import {connect} from 'react-redux'
import { actionCreator } from './store'
import { Navigate } from 'react-router-dom';

class Login extends PureComponent {
    render() {
        const  { loginState } = this.props
        if(!loginState){
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' ref = {(input) => this.account = input}/>
                        <Input placeholder='密码' type='password' ref = {(input) => this.password = input}/>
                        <Button onClick={() => this.props.login(this.account,this.password)}>登陆</Button>
                    </LoginBox>
                </LoginWrapper> 
            ) 
        }else{
            return <Navigate to='/'  />
        }
         
    }

}

const mapStateToProps = (state) =>({
    loginState: state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => {
    return {
        login(accountRef,passwordRef){
            dispatch(actionCreator.login(accountRef.value,passwordRef.value))
        }
    }
}
export default connect(mapStateToProps,mapDispatch)(Login)