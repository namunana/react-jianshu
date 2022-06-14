import React, {useEffect} from "react";
import { DetailWrapper, Header, Content } from './style'
import {connect} from 'react-redux'
import {actionCreator} from './store'
import { useParams } from 'react-router-dom';

function Detail(props){
    const {title, content,getDetail} = props
    const { id } = useParams();

    useEffect(() => {
        getDetail(id);
        console.log(id)
    },[]);
        
    return(
        <DetailWrapper>
            <Header>{title}</Header>
            <Content dangerouslySetInnerHTML={{__html: content}}></Content>             
        </DetailWrapper>
    )
}


const mapStateToProps = (state) =>({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
})

const mapDispatch = (dispatch) => {
    return {
        getDetail(id){
            dispatch(actionCreator.getDetail(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatch)(Detail)