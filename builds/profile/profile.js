import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Pressable, SafeAreaView, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Nav } from '../../builds/nav/nav';
import { styles } from './style';
import { FontAwesome, MaterialCommunityIcons, EvilIcons, MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';
import { FontVariant } from 'react-native';
import axios from 'axios';
const deal = require('../../assets/boyglo.jpg');
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const Profile = () => {
    const navigation = useNavigation();
    const [displayname, setDisplay] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('')
    const [email, setMyemail] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [deal , setDeal] = useState(deal)

    useEffect(() => {
        const fetchData = async () => {
            const disname = await AsyncStorage.getItem('displayname');
            const usename = await AsyncStorage.getItem('username');
            const usebio = await AsyncStorage.getItem('bio');
            const useemail = await AsyncStorage.getItem('email');

            setDisplay(disname);
            setUsername(usename);
            setBio(usebio);
            setMyemail(useemail);
        }
        const unsubscribe = navigation.addListener('focus', fetchData);
        return unsubscribe;
    }, []);

    const Editbio = () => {
        const biocontent = modalContent;
        if (biocontent !== '') {
            const formData = new URLSearchParams();
            formData.append('email', email);
            formData.append('biocontent', biocontent);
            console.log(formData)
            axios
                .post('http://192.168.1.135:3000/editbio', formData.toString())
                .then(response => {
                    const usethis = response.data;
                    setBio(usethis);
                })
                .catch(error => {
                    console.error(error)
                })
        }
        setModalVisible(false);
    }
    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setDeal(result.assets[0].uri);
            console.log(result.assets[0].uri);
        } else {
            alert('You did not select any image.');
        }
    };
    return (
        <>
            <ScrollView
                style={styles.container}>
                <SafeAreaView>
                    <View style={styles.header}>
                        <View style={styles.headerlio}>
                            <MaterialIcons name='arrow-back' size={28} onPress={() => navigation.goBack()} style={{marginLeft:5}} />
                            <Entypo name='dots-three-horizontal' size={28} style={{marginRight:10}} />
                        </View>
                    </View>
                    <Pressable style={styles.propic} onPress={() => pickImageAsync()} >
                        <Image source={{uri:deal}} style={styles.proimage} />
                    </Pressable>
                    <View style={styles.namecontainer}>
                        <Text style={{ fontSize: 27, fontWeight: '900', color: 'black', marginLeft: 40, marginTop: 10, }}>{displayname}</Text>
                        <Text style={{ fontSize: 15, fontWeight: '400', color: '#00000099', marginLeft: 40, marginTop: 1, }}>@{username}</Text>
                    </View>
                    <View style={styles.trailercover}>
                        <View style={styles.biotext}>
                            <Text style={{ textAlign: 'center' }} >{bio}</Text>
                        </View>
                        <Text style={{ color: 'darkblue', fontWeight: '600', }} onPress={() => setModalVisible(true)} >Edit Bio</Text>
                    </View>

                    <View style={styles.maincontent} >

                        <Text style={{ fontSize: 15, fontWeight: '700', color: 'darkblue', marginLeft: 10, marginTop: 15, }}>Account</Text>
                       
                        <View style={styles.profilebox}>
                            <View style={styles.firstbox}>
                                <MaterialIcons name='account-circle' size={22} color='#00a200' style={{ marginRight: 10, }} />
                                <Text style={styles.texty}>Account Settings</Text>
                            </View>
                            <View style={styles.secondbox}>
                                <MaterialIcons name='arrow-forward-ios' size={15} color='gray' />
                            </View>
                        </View>
                        <View style={styles.profilebox}>
                            <View style={styles.firstbox}>
                                <MaterialIcons name='people' size={22} style={{ marginRight: 10, }} />
                                <Text style={styles.texty}>Change Status</Text>
                            </View>
                            <View style={styles.secondbox}>
                                <Text style={{ fontSize: 12, fontWeight: '400', marginRight: 5, }}>Online</Text>
                                <MaterialIcons name='arrow-forward-ios' size={15} color='gray' />
                            </View>
                        </View>
                        <View style={styles.profilebox}>
                            <View style={styles.firstbox}>
                                <MaterialIcons name='language' size={22} color='#ff5222' style={{ marginRight: 10, }} />
                                <Text style={styles.texty}>Preferred Language</Text>
                            </View>
                            <View style={styles.secondbox}>
                                <MaterialIcons name='arrow-forward-ios' size={15} color='gray' />
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


                        <Text style={{ fontSize: 15, fontWeight: '700', color: 'darkblue', marginLeft: 10, marginTop: 15, }}>Security</Text>
                        <View style={styles.profilebox}>
                            <View style={styles.firstbox}>
                                <MaterialIcons name='lock-outline' size={22} style={{ marginRight: 10, }} />
                                <Text style={styles.texty}>Change Password</Text>
                            </View>
                            <View style={styles.secondbox}>
                                <MaterialIcons name='arrow-forward-ios' size={15} color='gray' />
                            </View>
                        </View>
                        <View style={styles.profilebox}>
                            <View style={styles.firstbox}>
                                <MaterialIcons name='person' size={22} color='#0052f2' style={{ marginRight: 10, }} />
                                <Text style={styles.texty}>Kyc Verification</Text>
                            </View>
                            <View style={styles.secondbox}>
                                <MaterialIcons name='arrow-forward-ios' size={15} color='gray' />
                            </View>
                        </View>
                        <View style={styles.profilebox}>
                            <View style={styles.firstbox}>
                                <MaterialIcons name='lock-outline' size={22} style={{ marginRight: 10, }} />
                                <Text style={styles.texty}>Pin Management</Text>
                            </View>
                            <View style={styles.secondbox}>
                                <MaterialIcons name='arrow-forward-ios' size={15} color='gray' />
                            </View>
                        </View>
                        <View style={styles.profilebox}>
                            <View style={styles.firstbox}>
                                <MaterialIcons name='logout' size={22} color='#cf0000' style={{ marginRight: 10, }} />
                                <Text style={styles.texty}>Sign Out</Text>
                            </View>
                            <View style={styles.secondbox}>
                                <MaterialIcons name='arrow-forward-ios' size={15} color='gray' />
                            </View>
                        </View>

                        {/* Thus page differentiates Between Account and Security*/}


                        <Text style={{ fontSize: 15, fontWeight: '700', color: 'darkblue', marginLeft: 10, marginTop: 15, }}>About</Text>
                        <View style={styles.profilebox}>
                            <View style={styles.firstbox}>
                                <MaterialIcons name='send' size={22} style={{ marginRight: 10, }} />
                                <Text style={styles.texty}>Customer Care</Text>
                            </View>
                            <View style={styles.secondbox}>
                                <MaterialIcons name='arrow-forward-ios' size={15} color='gray' />
                            </View>
                        </View>
                        <View style={styles.profilebox}>
                            <View style={styles.firstbox}>
                                <MaterialIcons name='person' size={22} color='#0052f2' style={{ marginRight: 10, }} />
                                <Text style={styles.texty}>Customer Care</Text>
                            </View>
                            <View style={styles.secondbox}>
                                <MaterialIcons name='arrow-forward-ios' size={15} color='gray' />
                            </View>
                        </View>
                        <View style={styles.profilebox}>
                            <View style={styles.firstbox}>
                                <MaterialIcons name='mail' size={22} style={{ marginRight: 10, }} color='orange' />
                                <Text style={styles.texty}>Send Us an Email</Text>
                            </View>
                            <View style={styles.secondbox}>
                                <MaterialIcons name='arrow-forward-ios' size={15} color='gray' />
                            </View>
                        </View>
                        <Modal
                            visible={modalVisible} transparent={true}
                            animationType="slide">
                            <View style={styles.modalview} >
                                <View style={styles.cover}>
                                    <View style={styles.inputbox}>
                                        <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: '800', color: '#ff5222' }} >Edit Bio</Text>
                                        <TextInput style={styles.input} value={modalContent} onChangeText={(text) => setModalContent(text)} placeholder='Enter New bio content' />
                                        <Pressable style={styles.modalpress} onPress={() => Editbio()} >
                                            <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>Done</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </Modal>

                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    )
}