import React from "react"
import { FlatList, Image, Text, View } from "react-native"
import { useSelector } from "react-redux"
import Header from "./Header"

const Screen5 = () => {
    const view = useSelector(state => state)
    const renderItem = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', paddingVertical: 15 }}>

                <Image source={item.ava} />
                <Text style={{ color: 'black', fontWeight: "400", fontSize: 16, marginLeft: 5 }}>{item.name}</Text>
                <View style={{ flex: 1 }}></View>

                {item.image1 ? (
                    <View>
                        <Image source={item.image1} />
                    </View>
                ) : (
                    <View style={{ flexDirection: 'row' }}>
                        <Text >{item.number}</Text>
                        <Image source={item.image} />
                    </View>

                )}

            </View>
        )
    }
    return (
        <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20 }}>

            <FlatList data={view.count5.array}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                ListHeaderComponent={<Header />} />
        </View>
    )
}
export default Screen5