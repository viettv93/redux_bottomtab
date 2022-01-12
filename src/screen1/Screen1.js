import React from "react"
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native"
import { useSelector } from 'react-redux'
import Header from "./Header"

const Screen1 = ({navigation}) => {
    const view = useSelector(state => state)
    const renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 7, flexDirection: 'row' }}>
                        <Image source={item.avata}
                            resizeMode="contain" />
                        <Text style={{ fontSize: 18, color: 'black', fontWeight: '400', paddingLeft: 20 }}>{item.name}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('ScreenA')} style={{ backgroundColor: '#FA6650', borderRadius: 4, height: 30, width: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 14, fontWeight: '400', padding: 6 }}>Follow</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ color: 'rgba(0, 0, 0, 0.7)', fontSize: 15, fontWeight: '400', marginVertical: 10 }}>{item.status}</Text>
                <View>
                    {item.image2 ? (
                        <View >
                            <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                                <Image source={item.image1} resizeMode="contain" style={{}} />
                                <Image source={item.image2} resizeMode="contain" style={{ marginHorizontal: 10 }} />
                                <Image source={item.image3} resizeMode="contain" />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                                <Image source={item.image4} resizeMode="contain" />
                                <Image source={item.image5} resizeMode="contain" style={{ marginHorizontal: 10 }} />
                                <Image source={item.image6} resizeMode="contain" />
                            </View>

                        </View>
                    ) : (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={item.image1} resizeMode="contain"
                                style={{ flex: 1 }} />
                        </View>
                    )}
                    <View style={{ flexDirection: 'row', alignItems: 'center', height: 40 }}>
                        <View style={{ flexDirection: 'row', flex: 90, alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={item.like} resizeMode="contain" />
                                <Text style={{ color: 'rgba(0, 0, 0, 0.4)', fontSize: 15, fontWeight: '400', marginLeft: 5 }}>{item.likeNumbers}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                                <Image source={item.comment} resizeMode="contain" />
                                <Text style={{ color: 'rgba(0, 0, 0, 0.4)', fontSize: 15, fontWeight: '400', marginLeft: 5 }}>{item.commentNumber}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={item.share} resizeMode="contain" />
                                <Text style={{ color: 'rgba(0, 0, 0, 0.4)', fontSize: 15, fontWeight: '400', marginLeft: 5 }}>{item.shareNumber}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image source={item.more} resizeMode="contain" />
                        </View>
                    </View>
                </View>
                {item.image7 ? (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image source={item.image7} resizeMode="contain" />
                        <Image source={item.image8} resizeMode="contain" />

                    </View>) : (
                    <View></View>
                )}
            </View>
        )
    }
    return (
        <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 20 }}>
            <FlatList
                ListHeaderComponent={<Header />}
                data={view.count1.array}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false} />
        </View>
    )
}



export default Screen1