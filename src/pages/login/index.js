import React, {PureComponent} from "react";
import {LoginWrapper, LoginBox,Input,Button} from './style'
import {connect} from 'react-redux'



class Login extends PureComponent {

    render() {
        
        return(
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='账号' />
                    <Input placeholder='密码' type='password'/>
                    <Button >登陆</Button>
                </LoginBox>
            </LoginWrapper> 
        )

        
    }

}

const mapStateToProps = (state) =>({
    
})

const mapDispatch = (dispatch) => {
    return {
        
    }
}
export default connect(mapStateToProps,mapDispatch)(Login)