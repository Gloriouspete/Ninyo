import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import { Nav } from '../../builds/nav/nav';


export const Notify = () => {
    const navigation = useNavigation();
    return (
        <>
            <View>
                <Text>Notify Screen</Text>
                <Button title="Go to Details" onPress={() => navigation.navigate('Notify')} />
            </View>
            <View >
                <Text>I do not get it</Text>
            </View>
            <Nav color3='#ff6222' />
        </>
    )
}