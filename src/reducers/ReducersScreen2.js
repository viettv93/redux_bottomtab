const initialState = {
    text1: 'Circle',
    scan: require('../image/screen2/scan.png'),
    thap: require('../image/screen2/thap.png'),
    search: require('../image/screen2/search.png'),
    mic: require('../image/screen2/mic.png'),
    imageBackground: require('../image/screen2/background.png'),
    text2: 'Send the sample',
    text3: 'How do you',
    text4: 'create your circle?',
    text5: 'Popular circle',
    text6: 'More',
    text7: 'The circle to join',
    
    array1: [
        { ava: require('../image/screen2/ava1.png'), name: 'Golden retriever' },
        { ava: require('../image/screen2/ava2.png'), name: 'Back of the head' },
        { ava: require('../image/screen2/ava3.png'), name: 'Adopt' },
        { ava: require('../image/screen2/ava1.png'), name: 'Golden retriever' },
        { ava: require('../image/screen2/ava2.png'), name: 'Back of the head' },
        { ava: require('../image/screen2/ava3.png'), name: 'Adopt' }],
    array2: [
        { ava1: require('../image/screen2/ava4.png'), name1: 'I love Golden Retriever', members: '548 Members' },
        { ava1: require('../image/screen2/ava5.png'), name1: 'The life of a dog king', members: '6886 Members' },
        { ava1: require('../image/screen2/ava4.png'), name1: 'I love Golden Retriever', members: '548 Members' },
        { ava1: require('../image/screen2/ava5.png'), name1: 'The life of a dog king', members: '6886 Members' },
        { ava1: require('../image/screen2/ava5.png'), name1: 'The life of a dog king', members: '6886 Members' }]
}


const countReducer2 = (state = initialState) => {
    return state
}
export default countReducer2;