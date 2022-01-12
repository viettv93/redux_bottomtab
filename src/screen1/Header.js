import React from "react"
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useSelector } from 'react-redux'

const Header = () => {
    const view = useSelector(state => state.count1)
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: 'space-evenly', paddingVertical: 20 }}>
                <View style={{ flex: 14, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '500', marginBottom: 5, alignItems: 'center' }}>{view.text1}</Text>
                        <Image source={view.gach} resizeMode="contain" />
                    </View>
                    <Text style={{ fontSize: 18, fontWeight: '500' }}>{view.text2}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Image source={view.chuong} resizeMode="contain" />
                </View>
            </View>
            <View style={{ flexDirection: 'row', backgroundColor: '#FAFAFA', borderRadius: 30, width: '100%', alignItems: 'center' }}>
                <Image source={view.search}
                    resizeMode="contain"
                    style={{ marginLeft: 9 }} />

                <TextInput placeholder={view.text9}
                    style={{ flex: 1 }} />
                <Image source={view.mic}
                    resizeMode="contain"
                    style={{ marginRight: 9 }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: 30 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={view.cup} />
                    <Text style={{ color: 'black', fontSize: 15, fontWeight: '400' }}>{view.text3}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={view.mes} />
                    <Text style={{ color: 'black', fontSize: 15, fontWeight: '400' }}>{view.text4}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={view.gio} />
                    <Text style={{ color: 'black', fontSize: 15, fontWeight: '400' }}>{view.text5}</Text>
                </View>
            </View>
            <ImageBackground source={view.imageBackground}
                style={{ height: 200, width: 390, justifyContent: 'center', paddingHorizontal: 20 }}>
                <Text style={{ color: 'black', fontSize: 24, fontWeight: '600' }}>{view.text6}</Text>
                <Text style={{ color: 'black', fontSize: 15, fontWeight: '400' }}>{view.text7}</Text>
                <Text style={{ color: 'black', fontSize: 15, fontWeight: '400' }}>{view.text8}</Text>
                <TouchableOpacity style={{ backgroundColor: 'black', borderRadius: 5, width: 80, height: 30, alignItems: 'center', justifyContent: 'center', padding: 3, marginTop: 20 }}>
                    <Text style={{ color: 'white', fontSize: 14, fontWeight: '400' }}>Let me</Text>
                </TouchableOpacity>
            </ImageBackground>

        </View>
    )
}

export default Header