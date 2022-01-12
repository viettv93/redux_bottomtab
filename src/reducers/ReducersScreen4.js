const initialState = {
    text1: 'Message',
    nen: require('../image/screen3/nen.png'),
    scan: require('../image/screen3/scan.png'),
    search: require('../image/screen3/search.png'),
    likeIcon: require('../image/screen3/like.png'),
    messageIcon: require('../image/screen3/mess.png'),
    commentIcon: require('../image/screen3/comment.png'),
    helpIcon: require('../image/screen3/help.png'),
    text2: 'Praise',
    text3: 'Messages',
    text4: 'Comments',
    text5: 'Help',
    array: [
        {
            ava: require('../image/screen3/ava1.png'),
            name: 'Love dog little assistant',
            image: require('../image/screen3/tagname.png'),
            status: 'Congratulations! Your article was recommended by dog lovers to feature',
            dateTime: '02/07'
        },
        {
            ava: require('../image/screen3/alert.png'),
            name: 'The system informs',
            status: 'We will spare no effort to protect the ecology of the community and severely crack down on violations of regulations',
            dateTime: '05/18'
        },
        {
            ava: require('../image/screen3/ava3.png'),
            name: 'Dogdom', status: 'Your March report has been generated, click to view.',
            dateTime: '11 days ago'
        }]

}


const countReducer4 = (state = initialState) => {
    return state
}
export default countReducer4;