
import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { styles } from './style';
export const Nav = ({ color1, color2, color3, color4 }) => {

    const navigation = useNavigation();
    return (
        <>
            <View style={styles.buttoncover}>
                <View style={styles.footerly}>
                    <View style={styles.footname}>
                        <Text><Entypo name='chat' size={24} color={color4} style={styles.buttonIcon} title="Profile" onPress={() => navigation.navigate('Chats')} /></Text>
                        <Text style={{ color: color4, fontWeight: '500',fontSize:12  }}>Chats</Text>
                    </View>
                   
                    <View style={styles.footname}>
                        <Text><MaterialIcons name='pages' size={24} color={color2} style={styles.buttonIcon} title="Search" onPress={() => navigation.navigate('Connect')} /></Text>
                        <Text style={{ color: color2, fontWeight: '500',fontSize:12  }}>Connect</Text>
                    </View>
                    <View style={styles.footname}>
                        <Text><MaterialIcons name='notifications' size={24} color={color3} style={styles.buttonIcon} title="Notify" onPress={() => navigation.navigate('Notify')} /></Text>
                        <Text style={{ color: color3, fontWeight: '500',fontSize:12 }}>Notification</Text>
                    </View>
                    <View style={styles.footname}>
                        <Text>   <MaterialIcons name="person" size={24} color={color1} style={styles.buttonIcon} title="Home" onPress={() => navigation.navigate('Profile')} /> </Text>
                        <Text style={{ color: color1, fontWeight: '500',fontSize:12  }}>Profile</Text>
                    </View>

                </View>
            </View>
        </>
    )
}