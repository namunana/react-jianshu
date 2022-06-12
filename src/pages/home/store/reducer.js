import { fromJS } from 'immutable'

//immutable对象
const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: '社会热点',
            imgUrl: '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        },
        {
            id: 2,
            title: '手绘',
            imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        }
    ],
    articleList: [
        {
            id: 1,
            title: '《生活课》 | 生活是一场长跑，我们要在不慌不忙中坚强',
            desc: '所谓万丈深渊，下去，也是前程万里——木心 let me know when your whole life goes up in smoke，t...',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/4590039-905ca5c30e4a2ec1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 2,
            title: '今天，荣耀属于她们',
            desc: '文/水木空影 图/网络 01 『时代的一粒灰，落在个人头上，就是一座山』。这是此前在网上广为流传的一句『爆款』。 一场疫情，改变了人们对现...',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/14490662-a8b076bee7b88ec1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 3,
            title: '有一技之长，是成年人最大的底气',
            desc: '- 01 - 我最近在学跳爵士舞。 因为是零基础，加上又缺乏运动细胞，真的是每学一个动作都感觉特别费劲。之所以能坚持到现在还没有放弃，很大程度上...',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/20239662-fee891d6d20553a7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 4,
            title: '你是这样的90后吗？',
            desc: '文/弋一 “我是90后，我刚走出校园，我加班到深夜，却只拿实习工资，每天累成狗。” “我是90后，我参加工作2年，我没有存款，没有社会地位，甚至...',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/6637613-59ea1ce71dd2fd15.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ]
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
 
}