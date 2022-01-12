const initialState = {
    text1: 'Select',
    text2: 'Discover',
    gach: require('../image/screen1/gach.png'),
    chuong: require('../image/screen1/chuong.png'),
    search: require('../image/screen1/search.png'),
    mic: require('../image/screen1/mic.png'),
    cup: require('../image/screen1/cup.png'),
    mes: require('../image/screen1/mes.png'),
    gio: require('../image/screen1/gio.png'),
    imageBackground: require('../image/screen1/imagebackground.png'),
    array: [{ avata: require('../image/screen1/ava1.png'), name: 'Mirabelle Swift', status: 'Adwords Keyword Research For Beginners.', image1: require('../image/screen1/image1.png'), like: require('../image/screen1/like.png'), likeNumbers: '5,233', comment: require('../image/screen1/comment.png'), commentNumber: '189', share: require('../image/screen1/share.png'), shareNumber: '238', more: require('../image/screen1/more.png') },
    {
        avata: require('../image/screen1/ava2.png'), name: 'William Watts', status: 'How To Boost Your Traffic Of Your Blog And Destroy The Competition.😏 😏 😋', image1: require('../image/screen1/image2_1.png'), image2: require('../image/screen1/image2_2.png'), image3: require('../image/screen1/image2_3.png'), image4: require('../image/screen1/image2_4.png'), image5: require('../image/screen1/image2_5.png'),
        image6: require('../image/screen1/image2_6.png'), like: require('../image/screen1/like.png'), likeNumbers: '9,236', comment: require('../image/screen1/comment.png'), commentNumber: '639', share: require('../image/screen1/share.png'), shareNumber: '6173', more: require('../image/screen1/more.png'), image7: require('../image/screen1/image3_1.png'), image8: require('../image/screen1/image3_2.png')
    },
    { avata: require('../image/screen1/ava3.png'), name: 'Jorge Long', status: 'A dog is a beloved, intelligent, and very loyal animal. So I like dogs very much.', image1: require('../image/screen1/image4.png'), like: require('../image/screen1/like.png'), likeNumbers: '9,784', comment: require('../image/screen1/comment.png'), commentNumber: '589', share: require('../image/screen1/share.png'), shareNumber: '168', more: require('../image/screen1/more.png') },
    { avata: require('../image/screen1/ava4.png'), name: 'Miguel Parsons', status: 'A dog is a beloved, intelligent, and very loyal animal. So I like dogs very much.', image1: require('../image/screen1/image4.png'), like: require('../image/screen1/like.png'), likeNumbers: '9,784', comment: require('../image/screen1/comment.png'), commentNumber: '589', share: require('../image/screen1/share.png'), shareNumber: '168', more: require('../image/screen1/more.png') }],
    text3: 'Ranking',
    text4: 'Discuss',
    text5: 'Surrounding',
    text6: 'Take me home',
    text7: 'Take care of stray dogs, please',
    text8: 'take them home.',
    text9:'Send the sample',
    user: null
}
const countReducer1 = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCEEDED':
        return {...state, user: action.user}
        default:
            return state
    }
    
}
export default countReducer1;