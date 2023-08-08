import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 200,
        marginTop: 40,
        backgroundColor: '#ff5222',
        justifyContent: "center",
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        flexDirection: 'column',
    },
    propic: {
        width: 100,
        height: 100,
        borderRadius: 70,
        marginTop: -50,
        backgroundColor: '#ffffff',
        justifyContent: "center",
        alignItems: 'center',
        marginLeft: 20,
    },
    proimage: {
        width: '90%',
        height: '90%',
        borderRadius: 70,
    },
    uncover: {
        width: '50%',
        height: 40,
        backgroundColor: '#ffffff80',
        borderRadius: 18,
        marginTop: 20,
        justifyContent: "center",
        alignItems: 'center',
    },
    image: {
        width: 30,
        height: 40,
        borderRadius: 18,
    },
    imager: {
        width: 100,
        height: 100,
        borderRadius: 75,
        marginTop: 30,
    },
    nametext: {
        fontSize: 18,
        fontWeight: '700'
    },
    maincontent: {
        width: '100%',
        height: 'auto',
        marginBottom: 70,
    },
    profilebox: {
        marginTop: 10,
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.2,
        borderColor: 'gray',
    },
    firstbox: {
        width: '60%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,

    },
    secondbox: {
        width: '20%',
        marginRight: 10,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    texty: {
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'inter',

    },
    trailercover: {
        width: '100%',
        height: 'auto',
        minHeight: 200,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    trailer: {
        width: '90%',
        height: 50,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius:20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    biotext: {
        width: '90%',
        height: 'auto',
        minHeight: 100,
        backgroundColor: 'white',
        justifyContent:'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius:20,
    },
    pressa:{
        width:'24%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
})