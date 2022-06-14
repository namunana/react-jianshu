import React, {Component} from "react";
import { DetailWrapper, Header, Content } from './style'
import {connect} from 'react-redux'

class Detail extends Component {
    render() {
        const {title, content} = this.props
        console.log(content)
        return(
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html: content}}>
                </Content> 
            </DetailWrapper>
        )
    }
}

const mapStateToProps = (state) =>({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
})
export default connect(mapStateToProps,null)(Detail)