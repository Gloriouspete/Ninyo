import { View, Text, Button, Image, Pressable, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons, Entypo, EvilIcons, FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import { RefreshControl } from 'react-native-gesture-handler';


export const Mainchat = ({ data, deal }) => {
    const navigation = useNavigation()
    const [chatlist, setChatlist] = useState([])
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {

        setChatlist(data)
        console.log(data)
    }, [data]);

    const renderItem = ({ item }) => (
        <Pressable style={styles.pressmain} onPress={() => navigation.navigate('Chatface', { data: item.displayname, userId: item.userid })}>
            <Pressable style={styles.pressimage} >
                <Image source={deal} style={styles.img} />
            </Pressable>
            <View style={styles.pressbox}>
                <Text style={styles.bigtext}>{item.displayname}</Text>
                <Text style={{ fontSize: 15, fontWeight: '400', }}>{item.lastmsg}</Text>
            </View>
        </Pressable>
    );
    const handleRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false)
        }, 3000)
    }
    return (
        <>

            <FlatList
                data={chatlist}
                keyExtractor={(item) => item.userid}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                    />
                }
            />

        </>
    )
}

export const Header = ({ deals }) => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.header}>
                <View style={styles.headerly}>
                    <TouchableOpacity style={styles.imager} onPress={() => navigation.navigate('Profile')} >
                        <Image source={deals} style={styles.image} />
                    </TouchableOpacity>
                    <FontAwesome name='gear' size={22} style={{ marginRight: 10, }} />
                </View>

            </View>
        </>
    )
}