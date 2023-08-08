import { View, Text, Button, TextInput, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, Entypo, EvilIcons, FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { styles } from './style';



export const Login = () => {
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const navigation = useNavigation();

  const handleSubmit = () => {
    const formData = new URLSearchParams();

    formData.append('email', email);
    formData.append('password', password);
    console.log(formData)
    axios
      .post('http://192.168.1.135:3000/login', formData.toString(), {
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
      <View style={styles.previewbox} >
        <Text style={styles.create}>Ninyo</Text>
        <Text style={styles.textsmalss}>Sign-up page</Text>
        <Text style={styles.textsmall}>Input Email Address:</Text>
        <View style={styles.bigbox}>
          <TextInput style={styles.input} placeholder='Email Address' onChangeText={(value) => setemail(value)} />
          <MaterialIcons name='email' size={22} color='grey' />
        </View>
        <Text style={styles.textsmall}>Input Password:</Text>
        <View style={styles.bigbox}>
          <TextInput style={styles.input} placeholder='*******' onChangeText={(value) => setpassword(value)} />
          <MaterialIcons name='lock' size={22} color='grey' />
        </View>
        <View style={styles.boxcont}>
          <Pressable style={styles.hutton} onPress={() => handleSubmit()} >
            <Text style={styles.press}>Login</Text>
          </Pressable>
        </View>
        <View style={styles.textcont}>
          <Text style={styles.textsmal}>Forgot password?</Text>

        </View>
        <Text style={styles.textsmals} onPress={() => navigation.navigate('Signup')} >Create account</Text>
      </View>
    </>
  )
}