import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Pressable, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Nav } from '../../builds/nav/nav';
import { styles } from './style';
import { FontAwesome, MaterialCommunityIcons, EvilIcons, MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { FontVariant } from 'react-native';
const deal = require('../../assets/boyglo.jpg');
import AsyncStorage from '@react-native-async-storage/async-storage';


export const UserProfile = ({ route }) => {
    const navigation = useNavigation();
    const { data, userid } = route.params;
    console.log('this is the details ',data,userid);
    const [displayname, setDisplay] = useState('');
    const [username, setUsername] = useState('');
    const [bio,setBio] = useState('');
 

    useEffect(() => {
        const fetchData = async () => {
            const formData = new URLSearchParams();
            formData.append('userid', userid);
            console.log(formData)
            axios
            .post('http://192.168.1.135:3000/userprofile', formData.toString())
                .then(response => {
                    const usethis = response.data;
                    setBio(usethis.bio);
                    setDisplay(usethis.displayname);
                    setUsername(usethis.username);
                })
                .catch(error => {
                    console.error(error)
                })
        }
        const unsubscribe = navigation.addListener('focus', fetchData);
        return unsubscribe;
    }, []);



    return (
        <>
            <ScrollView
                style={styles.container}>
                <SafeAreaView>
                    <View style={styles.header}>

                    </View>
                    <Pressable style={styles.propic}>
                        <Image source={deal} style={styles.proimage} />
                    </Pressable>
                    <View style={styles.namecontainer}>
                        <Text style={{ fontSize: 27, fontWeight: '900', color: 'black', marginLeft: 40, marginTop: 10, }}>{displayname}</Text>
                        <Text style={{ fontSize: 14, fontWeight: '400', color: '#00000099', marginLeft: 35, marginTop: 1, }}>@ {username}</Text>
                    </View>
                    <View style={styles.trailercover}>
                        <View style={styles.biotext}>
                            <Text style={{ textAlign: 'center' }} >{bio}</Text>
                        </View>
                        <View style={styles.trailer}>
                            <Pressable style={styles.pressa} onPress={() => navigation.navigate('Chatface', { data:data, userId: userid })} >
                                <MaterialIcons name='message' size={22} color="#00ccdf" />
                                <Text style={{fontSize:11}} >Message</Text>
                            </Pressable>
                            <Pressable style={styles.pressa}>
                                <MaterialIcons name='card-giftcard' size={22} color='orangered' />
                                <Text>Gift</Text>
                            </Pressable>
                            <Pressable style={styles.pressa}>
                                <MaterialIcons name='block' size={22} color='red' />
                                <Text>Block</Text>
                            </Pressable>
                            <Pressable style={styles.pressa}>
                                <MaterialIcons name='person' size={22} color='#00cf00' />
                                <Text>Request</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.maincontent} >


                        <View style={styles.profilebox}>
                            <View style={styles.firstbox}>
                                <MaterialIcons name='people' size={22} style={{ marginRight: 10, }} />
                                <Text style={styles.texty}>Status</Text>
                            </View>
                            <View style={styles.secondbox}>
                                <Text style={{ fontSize: 12, fontWeight: '400', marginRight: 5, }}>Online</Text>
                            </View>
                        </View>
                        <View style={styles.profilebox}>
                            <View style={styles.firstbox}>
                                <MaterialIcons name='account-circle' size={22} color='#00a200' style={{ marginRight: 10, }} />
                                <Text style={styles.texty}>Account Options</Text>
                            </View>
                            <View style={styles.secondbox}>
                                <MaterialIcons name='arrow-forward-ios' size={15} color='gray' />
                            </View>
                        </View>
                        <View style={styles.profilebox}>
                            <View style={styles.firstbox}>
                                <MaterialIcons name='language' size={22} color='#ff5222' style={{ marginRight: 10, }} />
                                <Text style={styles.texty}>Preferred Language</Text>
                            </View>
                            <View style={styles.secondbox}>
                                <Text style={{ fontSize: 12, fontWeight: '400', marginRight: 5, }}>Japanese</Text>
                            </View>
                        </View>
                        <View style={styles.profilebox}>
                            <View style={styles.firstbox}>
                                <MaterialIcons name='lock' size={22} color='#5f5222' style={{ marginRight: 10, }} />
                                <Text style={styles.texty}>Set Lock PIN</Text>
                            </View>
                            <View style={styles.secondbox}>

                                <MaterialIcons name='arrow-forward-ios' size={15} color='gray' />
                            </View>
                        </View>
                        <View style={styles.profilebox}>
                            <View style={styles.firstbox}>
                                <MaterialIcons name='stop' size={22} color='#cf0000' style={{ marginRight: 10, }} />
                                <Text style={styles.texty}>BLOCK</Text>
                            </View>
                            <View style={styles.secondbox}>
                                <MaterialIcons name='arrow-forward-ios' size={15} color='gray' />
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    )
}