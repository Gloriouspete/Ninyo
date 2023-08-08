import React from 'react';
import { Preview } from '../layout/preview/preview';
import { Signup } from './signup/signup';
import { Home } from '../layout/home/Home';
import { Login } from './login/login';
import { Chats } from '../layout/chats/Chats';
import { Connect } from '../layout/search/Search';
import { Chatface } from '../components/chatface/chatface';
import { UserProfile } from './userprofile/userprofile';
import {Profile} from './profile/profile';
import { Notify } from '../layout/notify/Notify';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export const Route = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Preview" options={{ headerTransparent: true, headerTitle: '', }} component={Preview} />
                    <Stack.Screen name="Signup" options={{ headerTransparent: true, headerTitle: '', headerTintColor: 'white', }} component={Signup} />
                    <Stack.Screen name="Login" options={{ headerTransparent: true, headerTitle: '', headerTintColor: 'white', }} component={Login} />
                    <Stack.Screen name="Home" options={{ headerTransparent: true, headerTitle: '', headerLeft: () => null, }} component={Home} />
                    <Stack.Screen name="Notify" options={{ headerTransparent: true, headerTitle: '', }} component={Notify} />
                    <Stack.Screen name="Connect" options={{ headerTransparent: true, headerTitle: '', headerLeft: () => null,}} component={Connect} />
                    <Stack.Screen name="Profile" options={{ headerTransparent: true, headerTitle: '', headerLeft: () => null, }} component={Profile} />
                    <Stack.Screen name="UserProfile" options={{ headerTransparent: true, headerTitle: '', }} component={UserProfile} />
                    <Stack.Screen name="Chats" options={{ headerTransparent: true, headerTitle: '', headerLeft: () => null, }} component={Chats} />
                    <Stack.Screen name="Chatface" options={{ headerTransparent: true, headerTitle: '', headerLeft: () => null, }} component={Chatface} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}
