
import React, { useEffect, useState } from "react"
import { Image, TextInput, TouchableOpacity, View, Text } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import AsyncStorage from '@react-native-async-storage/async-storage'


const Login = ({ navigation }) => {
    const [value2, setValue2] = useState('')
    const [value1, setValue1] = useState('')
    const dispatch = useDispatch()
    const state = useSelector(state => state.count1)
    const view = useSelector(state => state)

    const onPress = () => {
        dispatch({ type: 'LOGIN', payload: {email: value1, password: value2}})
    }


    useEffect(() => {
        if(state.user){
            navigation.navigate('Body')
        }
    })

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
            <Image source={view.count6.nen} style={{ marginBottom: 20 }} />
            <Image source={view.count6.sally} style={{ marginBottom: 20 }} />

            <TextInput
                placeholder={view.count6.text1}
                style={{ borderWidth: 1, width: '98%', marginBottom: 20 }}
                value={value1}
                onChangeText={(value1) => {
                    setValue1(value1)
                }} />
            <View style={{ borderWidth: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <TextInput
                    placeholder={view.count6.text2}
                    style={{ width: '89%' }}
                    secureTextEntry={true}
                    value={value2}
                    onChangeText={(value2) => {
                        setValue2(value2)
                    }} />
                <Image source={view.count6.hidden}
                    style={{ marginRight: 9 }} />
            </View>
            <TouchableOpacity onPress={onPress}
                style={{ backgroundColor: '#1E57F1', justifyContent: 'center', alignItems: 'center', width: '98%', height: '7%' }}>
                <Text style={{ padding: 5, color: 'white' }}>Login</Text>
            </TouchableOpacity>

            <Image source={view.count6.anhText}
                resizeMode='contain'
                style={{ marginTop: 20 }} />
        </View>
    )
}

export default Login