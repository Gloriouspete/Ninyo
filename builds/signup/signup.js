import { View, Text, Button, TextInput, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, Entypo, EvilIcons, FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { styles } from './style';

export const Signup = () => {
    const [displayname, setdisplayname] = useState(null);
    const [username, setusername] = useState(null);
    const [email, setemail] = useState(null);
    const [password, setpassword] = useState(null);
    const [number, setnumber] = useState(null);
    const navigation = useNavigation();
        
    const handleSubmit =() =>{
        const formData = new URLSearchParams();
        formData.append('displayname', displayname);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('phonenumber', number);
        console.log(formData)
        axios
          .post('http://192.168.1.135:3000/signup', formData.toString(), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          })
          .then((response) => {
            const mydata = response.data;
            if (mydata === 'home') {
              navigation.navigate('Chats');
            };
          })
          .catch(error => {
            console.error(error)
          })
    }


    return (
        <>
            <ScrollView style={styles.previewbox} >
                <Text style={styles.create}>Ninyo</Text>
                <Text style={styles.textsmals}>Sign-up page</Text>
                <Text style={styles.textsmall}>Input Display Name:</Text>
                <View style={styles.bigbox}>
                    <TextInput style={styles.input} placeholder='Your DisplayName' onChangeText={(value) => setdisplayname(value)} />
                    <MaterialIcons name='person' size={22} color='grey' />
                </View>
                <Text style={styles.textsmall}>Input Unique UserName:</Text>
                <View style={styles.bigbox}>
                    <TextInput style={styles.input} placeholder='Your UserName' onChangeText={(value) => setusername(value)} />
                    <MaterialIcons name='person' size={22} color='grey' />
                </View>
                <Text style={styles.textsmall}>Input Email Address:</Text>
                <View style={styles.bigbox}>
                    <TextInput style={styles.input} keyboardType='email-address' placeholder='Email Address' onChangeText={(value) => setemail(value)} />
                    <MaterialIcons name='email' size={22} color='grey' />
                </View>
                <Text style={styles.textsmall}>Phone number</Text>
                <View style={styles.biggybox}>
                    <View style={styles.smallbox}>
                <Text style={{}}>id</Text>
                    </View>
                    <TextInput style={styles.inputty} keyboardType='numeric' placeholder='+234 90234 699 27' onChangeText={(value) => setnumber(value)} />
                </View>
                <Text style={styles.textsmall}>Password</Text>
                <View style={styles.bigbox}>
                    <TextInput style={styles.input} placeholder='*******' onChangeText={(value) => setpassword(value)} />
                    <MaterialIcons name='lock' size={22} color='grey' />
                </View>
                <View style={styles.boxconter}>
                    <Pressable style={styles.hutton} title='Sign Up' onPress={() => handleSubmit()} >
                        <Text style={styles.press}>Sign Up</Text>
                    </Pressable>
                </View>
                <Text style={styles.textys} onPress={() => navigation.navigate('Login')} >Login</Text>

            </ScrollView>

        </>
    )
}