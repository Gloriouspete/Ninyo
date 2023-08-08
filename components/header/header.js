import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Pressable, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
const deal = require('../../assets/20230.png');

export const Header = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.header}>
                <View style={styles.headerly}>
                    <TouchableOpacity style={styles.imager} onPress={()=> navigation.navigate('Profile')} >
                        <Image source={deal} style={styles.image} />
                    </TouchableOpacity>
                </View>

            </View>

        </>
    )
}