import React, {Component} from "react";
import { DetailWrapper, Header, Content } from './style'
import {connect} from 'react-redux'
import {actionCreator} from './store'

class Detail extends Component {
    render() {
        const {title, content} = this.props
        return(
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html: content}}>
                </Content> 
            </DetailWrapper>
        )

        
    }

    componentDidMount() {
        this.props.getDetail()
    }
}

const mapStateToProps = (state) =>({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
})

const mapDispatch = (dispatch) => {
    return {
        getDetail(){
            dispatch(actionCreator.getDetail())
        }
    }
}
export default connect(mapStateToProps,mapDispatch)(Detail)