import { View, Text, Button, Image, Pressable, ScrollView } from 'react-native';
import { MaterialIcons, Entypo, EvilIcons, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import { TextInput } from 'react-native-gesture-handler';
const deal = require('../../assets/splash.png')

export const Header = ({ name, online }) => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.header}>
                <View style={styles.headerly}>
                    <View style={styles.headerbos}>
                        <MaterialIcons name='arrow-back' size={23} style={{ marginRight: 10, }} onPress={() => navigation.goBack()} />
                        <Pressable style={styles.imager}>
                            <Image style={styles.image} />
                        </Pressable>

                    </View>
                    <View style={styles.middlebox}>
                        <Text style={styles.bigtext}>{name}</Text>
                        <Text style={styles.smalltext}>{online}</Text>
                    </View>
                    <View style={styles.lastbox}>
                        <Entypo name='dots-three-vertical' size={20} />
                    </View>
                </View>

            </View>
        </>
    )
    }
    export const Bottom = () => {
        return (
            <>
                <View style={styles.bottomcover}>
                    <View style={styles.bottom}>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <Pressable style={styles.sendcover}>
                        <MaterialIcons name='send' size={25} color='white' />
                    </Pressable>
                </View>
            </>
        )
    }

    