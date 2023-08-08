import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Pressable, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import { Nav } from '../../builds/nav/nav';
import { Header } from '../../components/header/header';

export const Home = () => {
    return (
        <><SafeAreaView>
            <Header />
            </SafeAreaView>
            <Nav color1='#ff5222' />
        </>
    )
};