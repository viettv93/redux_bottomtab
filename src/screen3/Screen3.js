import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'
const Screen3 = ({navigation}) => {
    const logOut =()=>{
        AsyncStorage.setItem('user', null) 
        navigation.navigate('Login')
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                onPress={logOut}
                style={{ backgroundColor: 'red', width: '30%', height: '5%', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
                <Text style={{color: 'white', fontSize: 18}}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Screen3