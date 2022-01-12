import React from "react"
import { View, FlatList, Image, ImageBackground, Text, TextInput, TouchableOpacity, } from "react-native"
import { useSelector } from 'react-redux'
const Header = () => {
    const view = useSelector(state => state)
    const renderItem = ({ item }) => {
        return (
            <View style={{ paddingHorizontal: 10, alignItems: 'center', marginVertical: 20 }}>
                <Image source={item.ava} resizeMode="contain" />
                <Text>{item.name}</Text>
            </View>
        )
    }
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 4, }}>
                    <Text style={{ fontSize: 24, color: 'black', fontWeight: '600' }}>{view.count2.text1}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 20 }}>
                    <Image source={view.count2.scan} resizeMode="contain" />
                    <Image source={view.count2.thap} resizeMode="contain" />
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#FAFAFA', borderRadius: 30 }}>
                <Image source={view.count2.search} style={{ marginLeft: 9 }} />
                <TextInput placeholder={view.count2.text2} style={{ flex: 1 }} />
                <Image source={view.count2.mic} style={{ marginRight: 9 }} />
            </View>
            <ImageBackground source={view.count2.imageBackground} style={{ height: 200, paddingHorizontal: 20, justifyContent: 'center', marginTop: 20 }}>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>{view.count2.text3}</Text>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>{view.count2.text4}</Text>
                <TouchableOpacity style={{ backgroundColor: 'black', borderRadius: 5, padding: 4, width: 50, height: 30, justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 13, fontWeight: '400' }}>Create</Text>
                </TouchableOpacity>
            </ImageBackground>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 20 }}>
                <View style={{ flex: 6 }}>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>{view.count2.text5}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 13, fontWeight: '400', color: 'rgba(0, 0, 0, 0.4)' }}>{view.count2.text6}</Text>
                </View>
            </View>
            <FlatList horizontal={true}
                data={view.count2.array1}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 6 }}>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>{view.count2.text7}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 13, fontWeight: '400', color: 'rgba(0, 0, 0, 0.4)' }}>{view.count2.text6}</Text>
                </View>
            </View>
        </View>
    )
}

export default Header