const initialState = {
    text1: 'Personal',
    scan: require('../image/screen4/scan.png'),
    setting: require('../image/screen4/setting.png'),
    ava: require('../image/screen4/ava.png'),
    text2: 'Kelly Goldsmith',
    text3: 'Golden Retriever · Mobile ',
    option: require('../image/screen4/tool.png'),
    numberPraise: '98626',
    numberDynamic: '369',
    numberShare: '6869',
    text4: 'Praise',
    text5: 'Dynamic',
    text6: 'Share',
    array: [
        { ava: require('../image/screen4/friend.png'), name: 'Followers', number: '6848', image: require('../image/screen4/select.png') },
        { ava: require('../image/screen4/follow.png'), name: 'Following', number: '826', image: require('../image/screen4/select.png') },
        { ava: require('../image/screen4/star.png'), name: 'Collections', number: '264', image: require('../image/screen4/select.png') },
        { ava: require('../image/screen4/note.png'), name: 'Order', number: '18', image: require('../image/screen4/select.png') },
        { ava: require('../image/screen4/moon.png'), name: 'Dark Mode', image1: require('../image/screen4/on.png') }]
}

const countReducer5 = (state = initialState) => {
    return state
}
export default countReducer5;