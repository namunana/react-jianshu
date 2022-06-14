import React, {Component} from "react";
import { DetailWrapper, Header, Content } from './style'

class Detail extends Component {
    render() {
        return(
            <DetailWrapper>
                <Header>8个月写了80万字的我，得到了什么？</Header>
                <Content>
                    <img className="img" alt="" src="https://img0.baidu.com/it/u=468539302,3909142183&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=676"></img>
                    <p><b>时隔半年，和前同事们吃饭。饭后，我们走在春夜里，人潮热闹，晚风微凉。</b>一个同事说，“你的文是写得最好的。我们在阅读你的稿的时候，总蹦出一种：太棒了，我怎么没想到的兴奋感。”我苦笑了一下，没当回事，开玩笑回应：“鬼才信呢，说啥呢。”</p>
                    <p>时隔半年，和前同事们吃饭。饭后，我们走在春夜里，人潮热闹，晚风微凉。一个同事说，“你的文是写得最好的。我们在阅读你的稿的时候，总蹦出一种：太棒了，我怎么没想到的兴奋感。”我苦笑了一下，没当回事，开玩笑回应：“鬼才信呢，说啥呢。”</p>
                    <p>时隔半年，和前同事们吃饭。饭后，我们走在春夜里，人潮热闹，晚风微凉。一个同事说，“你的文是写得最好的。我们在阅读你的稿的时候，总蹦出一种：太棒了，我怎么没想到的兴奋感。”我苦笑了一下，没当回事，开玩笑回应：“鬼才信呢，说啥呢。”</p>
                </Content> 
            </DetailWrapper>
        )
    }
}

export default Detail