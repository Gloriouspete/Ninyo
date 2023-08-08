import { View, Text, Button, TextInput, Pressable, Image,FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Nav } from '../../builds/nav/nav';
import { styles } from './style';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
const deal = require('../../assets/20230.png')
const deals = require('../../assets/fineboy.jpg')

export const Connect = () => {
    const [name, setName] = useState(null);
    const [text, setText] = useState('');
    const [chatlist, setChatlist] = useState([]);
    const navigation = useNavigation();
    const search = async (texts) => {
        setText(texts);
        const formData = new URLSearchParams();
        formData.append('text', texts)
        console.log(formData);
        await axios.post('http://192.168.1.135:3000/getlist', formData.toString())
            .then((response) => {
                const data = response.data;
                console.log(data);
                setChatlist(data);

            })
            .catch(error => {
                console.log(error)
            })
    }
      const renderItem = ({item}) => (
        <Pressable style={styles.pressmain} onPress={() => navigation.navigate('UserProfile', { data: item.displayname, userid: item.userid })} >
        <Pressable style={styles.pressimage} >
            <Image source={deals} style={styles.img} />
        </Pressable>
        <View style={styles.pressbox}>
            <Text style={styles.bigtext}>{item.displayname}</Text>
            <Text style={{ fontSize: 14, fontWeight: '400',color:'grey' }}>@{item.username}</Text>
        </View>
    </Pressable>
      )
    return (
        <>
            <View style={styles.header}>
                <View style={styles.headerly}>
                    <Pressable style={styles.imager}>
                        <MaterialIcons name='arrow-back' size={22} style={{}} onPress={() => navigation.goBack()} />
                    </Pressable>
                    <View style={styles.searchbox}>
                        <TextInput
                            onChangeText={(texts) => search(texts)}
                            value={text} placeholder='Search Username' style={styles.search} />
                    </View>
                    <FontAwesome name='gear' size={22} style={{ marginRight: 10, }} />
                </View>

            </View>
            <View>
               <FlatList 
               data={chatlist}
               keyExtractor={(item) => item.userid}
               renderItem={renderItem}
               />
            </View>
            <Nav color2='#ff6222' />
        </>
    )
}