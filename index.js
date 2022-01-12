/**
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppRegistry, Image, View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { name as appName } from './app.json';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Screen1 from './src/screen1/Screen1';
import Screen2 from './src/screen2/Screen2';
import Screen3 from './src/screen3/Screen3';
import Screen4 from './src/screen4/Screen4';
import Screen5 from './src/screen5/Screen5';
import { Provider } from 'react-redux'
import store from './src/store/Store'
import Login from './src/login/Login'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Screen1} options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused)
                        return (
                            <Image source={require('./src/image/screen1/home_select.png')} />
                        )
                    else

                        return (
                            <Image source={require('./src/image/screen1/home.png')} />
                        )
                }
                , tabBarActiveTintColor: 'red', tabBarInactiveTintColor: 'black'
            }}
            />
            <Tab.Screen name="Data" component={Screen2} options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused)
                        return (
                            <Image source={require('./src/image/screen1/data_select.png')} />
                        )
                    else

                        return (
                            <Image source={require('./src/image/screen1/data.png')} />
                        )
                }
                , tabBarActiveTintColor: 'red', tabBarInactiveTintColor: 'black'
            }} />
            <Tab.Screen name="ADD" component={Screen3} options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused)
                        return (
                            <Image source={require('./src/image/screen1/add_select.png')} />
                        )
                    else

                        return (
                            <Image source={require('./src/image/screen1/add.png')} />
                        )
                }
                , tabBarActiveTintColor: 'red', tabBarInactiveTintColor: 'black'
            }} />
            <Tab.Screen name="Message" component={Screen4} options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused)
                        return (
                            <Image source={require('./src/image/screen1/messelect.png')} />
                        )
                    else

                        return (
                            <Image source={require('./src/image/screen1/mess.png')} />
                        )
                }
                , tabBarActiveTintColor: 'red', tabBarInactiveTintColor: 'black'
            }} />
            <Tab.Screen name="User" component={Screen5} options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused)
                        return (
                            <Image source={require('./src/image/screen1/userSelect.png')} />
                        )
                    else

                        return (
                            <Image source={require('./src/image/screen1/user.png')} />
                        )
                }
                , tabBarActiveTintColor: 'red', tabBarInactiveTintColor: 'black'
            }} />
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    const [loged, setLoged] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem('user')
            .then(value => {
                console.log(value)
                if (value) setLoged(true)
                else setLoged(false)
            })
    })

    const LogedNav = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="Body"
                    component={MyTabs}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        )
    }


    return (
        <NavigationContainer>
            <LogedNav />
        </NavigationContainer>
    );
}

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)



AppRegistry.registerComponent(appName, () => RNRedux);
