import React from "react"
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import { useSelector } from 'react-redux'
import Header from "./Header2"
const Screen2 = () => {
    const view = useSelector(state => state)
    const renderItem = ({ item }) => {
        return (
            <View style={{ flexDirection: "row", alignItems: 'center', marginVertical: 10 }}>
                <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={item.ava1} />
                    <View style={{ marginLeft: 9 }}>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>{item.name1}</Text>
                        <Text>{item.members}</Text>
                    </View >
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ backgroundColor: '#FA6650', borderRadius: 4, width: 60, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: '400' }}>Joined</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    return (
        <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20 }}>
            <FlatList
                ListHeaderComponent={<Header />}
                data={view.count2.array2}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem} />
        </View>
    )
}

export default Screen2