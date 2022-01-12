import React from "react"
import { FlatList, Image, ImageBackground, Text, View } from "react-native"
import { useSelector } from "react-redux"



const Screen4 = () => {
    const view = useSelector(state => state)
    const renderItem = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, paddingLeft: 20, paddingRight: 30, paddingVertical: 20 }}>
                <Image source={item.ava} resizeMode="contain" />
                <View style={{ marginLeft: 10, width: '87%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'black', fontWeight: '600', fontSize: 16, marginRight: 5 }}>{item.name}</Text>
                            {item.image && (
                                <Image source={item.image} resizeMode="contain" />
                            )}
                        </View>
                        <Text style={{ fontWeight: '400', fontSize: 11, flexWrap: 'wrap' }}>{item.dateTime}</Text>
                    </View>
                    <Text style={{ color: 'rgba(0, 0, 0, 0.7)', fontWeight: '400', fontSize: 13, }}>{item.status}</Text>
                </View>
            </View>

        )
    }
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground resizeMode="cover"
                source={view.count4.nen}
                style={{ height: 200, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
                <View style={{ flex: 4, }}>
                    <Text style={{ fontSize: 24, color: 'white', fontWeight: '600' }}>{view.count4.text1}</Text>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                    <Image source={view.count4.scan} resizeMode="contain" />
                    <Image source={view.count4.search} resizeMode="contain" />
                </View>
            </ImageBackground>
            <View style={{ flexDirection: 'row', position: 'absolute', top: 150, backgroundColor: 'white', justifyContent: 'space-evenly', alignItems: 'center', left: 20, height: 100, width: 320, borderRadius: 15 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={view.count4.likeIcon} resizeMode="contain" />
                    <Text style={{ color: 'rgba(0, 0, 0, 0.7)', fontWeight: '400', fontSize: 13 }}>{view.count4.text2}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={view.count4.messageIcon} resizeMode="contain" />
                    <Text style={{ color: 'rgba(0, 0, 0, 0.7)', fontWeight: '400', fontSize: 13 }}>{view.count4.text3}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={view.count4.commentIcon} resizeMode="contain" />
                    <Text style={{ color: 'rgba(0, 0, 0, 0.7)', fontWeight: '400', fontSize: 13 }}>{view.count4.text4}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={view.count4.helpIcon} resizeMode="contain" />
                    <Text style={{ color: 'rgba(0, 0, 0, 0.7)', fontWeight: '400', fontSize: 13 }}>{view.count4.text5}</Text>
                </View>
            </View>
            <FlatList data={view.count4.array}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                style={{ marginTop: 70 }} />

        </View>
    )
}

export default Screen4