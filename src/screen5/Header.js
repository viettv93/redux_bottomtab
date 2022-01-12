import React from "react"
import { View, Image, Text } from "react-native"
import { useSelector } from "react-redux"

const Header = () => {
    const view = useSelector(state => state)
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 4 }}>
                    <Text style={{ color: 'black', fontSize: 24, fontWeight: '600' }}>{view.count5.text1}</Text>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                    <Image source={view.count5.scan} />
                    <Image source={view.count5.setting} />
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 30 }}>
                <Image source={view.count5.ava} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: 'black', fontWeight: '500', fontSize: 17 }}>{view.count5.text2}</Text>
                    <Text>{view.count5.text3}</Text>
                </View>
                <View style={{ flex: 1 }}></View>
                <Image source={view.count5.option} />
            </View>
            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-evenly', marginVertical: 20 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>{view.count5.numberPraise}</Text>
                    <Text style={{ fontSize: 18, fontWeight: '400', color: 'black' }}>{view.count5.text4}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>{view.count5.numberDynamic}</Text>
                    <Text style={{ fontSize: 18, fontWeight: '400', color: 'black' }}>{view.count5.text5}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>{view.count5.numberShare}</Text>
                    <Text style={{ fontSize: 18, fontWeight: '400', color: 'black' }}>{view.count5.text6}</Text>
                </View>
            </View>
        </View>
    )
}

export default Header