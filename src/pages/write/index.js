import React, {PureComponent} from "react";
import {connect} from 'react-redux'
import { Navigate } from 'react-router-dom';

class Write extends PureComponent {
    render() {
        const  { loginState } = this.props
        if(loginState){
            return(
                <div>write</div>
            ) 
        }else{
            return <Navigate to='/login'  />
        }
         
    }

}

const mapStateToProps = (state) =>({
    loginState: state.getIn(['login','login'])
})

export default connect(mapStateToProps,null)(Write)