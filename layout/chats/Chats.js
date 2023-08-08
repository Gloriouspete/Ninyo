import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import { Nav } from '../../builds/nav/nav';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header, Mainchat } from '../../components/chatsprop/chatsprop';
const deals = require('../../assets/fineboy.jpg');
const deal = require('../../assets/boyglo.jpg');
import axios from 'axios';
import io from 'socket.io-client';
const socket = io('http://192.168.1.135:3000');

export const Chats = () => {
    const navigation = useNavigation();
    const [chatlist, setChatlist] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://192.168.1.135:3000/getall');
                const mydata = response.data;
                if (mydata !== undefined) {
                    const displayname = mydata.displayname;
                    const phonenumber = mydata.phonenumber;
                    const email = mydata.email;
                    const username = mydata.username;
                    const userid = mydata.userid;
                    const bio = mydata.bio;
                    socket.emit('user-id', userid);
                    AsyncStorage.setItem('displayname', displayname);
                    AsyncStorage.setItem('bio', bio);
                    AsyncStorage.setItem('username', username);
                    AsyncStorage.setItem('phonenumber', phonenumber.toString());
                    AsyncStorage.setItem('email', email);
                    AsyncStorage.setItem('userid', userid);
                    console.log('User data stored successfully', userid);

                    const biotext = await AsyncStorage.getItem('bio');


                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        const unsubscribe = navigation.addListener('focus', fetchData);
        return unsubscribe;
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            axios.post('http://192.168.1.135:3000/getchatlist')
                .then((response) => {
                    const data = response.data;
                    console.log('this is ', data);
                    setChatlist(data);
                })
                .catch(error => {
                    console.log(error)
                })
        }
        const unsubscribe = navigation.addListener('focus', fetchData);
        return unsubscribe;
    }, [])

    return (
        <>
            <Header deals={deals} />
            <Mainchat data={chatlist} deal={deal} />
            <Nav color4='#ff6222' />
        </>
    )
}