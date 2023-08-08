import { View, Text, Button, Image, Pressable, ScrollView, TextInput } from 'react-native';
import { MaterialIcons, Entypo, EvilIcons, FontAwesome } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import { Bottom, Header } from '../interface/interface';
import io from 'socket.io-client';
import axios from 'axios';
import { GiftedChat, Time } from 'react-native-gifted-chat';
import TypingIndicator from 'react-native-gifted-chat/lib/TypingIndicator';
import Bubble from 'react-native-gifted-chat';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SERVER_URL = 'http://192.168.1.135:3000';
const socket = io(SERVER_URL);

export const Chatface = ({ route }) => {
    const [message, setMessage] = useState('');
    const [myid, setMyid] = useState('');
    const [msglist, setMsglist] = useState([]);
    const [receivedMessage, setReceivedMessage] = useState('');
    const [classer, setClass] = useState('messagebox');
    const navigation = useNavigation();

    const { data, userId } = route.params;
    const name = data;
    const fetch = (hydon) => {
        const theme = `${myid}-${userId}`;
        const thenam = JSON.stringify(hydon);

    }
    useEffect(() => {
        socket.on('message', (data) => {

            if (data.sender === userId) {
                fetch()
                setMsglist((prevmessage) => [...prevmessage, data])
                console.log('this is the message received', data.msg, myid, 'truly');
                console.log(data.msg)
            }
            else if (myid === null) {
                console.log('too empty idan')
                return;
            }

        });
        return () => {
            socket.off('message')
        }
    }, []);

    navigation.addListener('focus', () => {
        AsyncStorage.getItem('userid')
            .then((datar) => {
                if (datar !== null) {
                    setMyid(datar)
                    console.log('be like this is the ', datar)
                    const theme = `${datar}-${userId}`;
                    const thename = theme.toString();
                    console.log('test the name', thename);
                    AsyncStorage.getItem(thename)
                        .then((isthis) => {
                            if (isthis !== null) {
                                setMsglist(isthis)
                            }
                            else {
                                console.log('Message Empty')
                            }
                        })
                        .catch((error) => {
                            console.error(error)
                        })
                }
                else {
                    console.log('data not fine')
                }
            })
            .catch((error) => {
                console.error(error)
            })
    })

    const sendMessage = () => {
        const currentDate = new Date();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes()
        const hydon = {
            msg: message,
            id: userId,
            sender: myid,
            date: hours + ':' + (minutes < 10 ? '0' : '') + minutes
        }
        if (hydon.msg !== '') {
            socket.emit('message', hydon);
            setMsglist((prevmessage) => [...prevmessage, hydon]);
            setMessage('');
            fetch(hydon)
            return;
        }

    };


    return (
        <>
            <Header name={name} online='online' />
            <ScrollView style={styles.container}>
                {msglist.map((list, index) => (
                    <View key={index} style={styles.messagecover} >
                        <View style={list.sender === myid ? styles.mybox : styles.messagebox} >
                            <Text style={styles.chatmsg} >{list.msg}</Text>
                            <View style={styles.inboxx}>
                                <Text style={{ fontSize: 10, marginRight: 4 }} >{list.date}</Text>
                                <Text style={{ fontSize: 10, color: 'blue' }} >Sent</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.bottomcover}>
                <View style={styles.bottom}>
                    <MaterialIcons name='emoji-emotions' size={25} color='#444444' style={{ marginRight: 5, }} />
                    <TextInput style={styles.input} value={message}
                        onChangeText={(text) => setMessage(text)} ></TextInput>
                    <MaterialIcons name='image' size={25} color='#444444' style={{ marginRight: 5, }} />
                </View>
                <Pressable style={styles.sendcover} onPress={() => sendMessage()} >
                    <MaterialIcons name='send' size={27} color='#ff5222' />
                </Pressable>
            </View>

        </>
    )
};