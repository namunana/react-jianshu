import React, {PureComponent} from "react";
import {connect} from 'react-redux'
import {RecommendWrapper, RecommendItem} from '../style'

class Recommend extends PureComponent {
    render() {
        const {list} = this.props;
        return(
            <RecommendWrapper>
                {list.map((item) => {
                    return (
                        <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
                    )
                })}
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
     list: state.get('home').get('recommendList')
})
export default connect(mapStateToProps,null)(Recommend)