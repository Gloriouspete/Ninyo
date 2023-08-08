import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { styler } from './style';
import { AntDesign } from '@expo/vector-icons';



export const Preview = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styler.previewbox} >
                <Text style={styler.pretext}>Globuy HQ</Text>
                <View style={styler.boxcont}>
                    <View style={styler.container}>
                        <Pressable style={styler.buttonstyle} onPress={() => navigation.navigate('Login')} >
                            <Text style={styler.kilode}>Get Started</Text>
                        </Pressable>
                        <Text> <AntDesign name="arrowright" size={28} color="#25292e" style={styler.buttonIcon} /></Text>
                    </View>
                </View>
            </View>
        </>
    )
}