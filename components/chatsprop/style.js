import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    header: {
        height: 100,
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        borderColor: '#ff6222',
        borderBottomWidth: 1,
    },
    headerly: {
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imager: {
        height: 35,
        width: 35,
        backgroundColor: '#ff622250',
        borderRadius: 30,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 30,
        width: 30,
        backgroundColor: 'white',
        borderRadius: 30,
    },
    img: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 60,
    },
    body: {
        flex: 1,

    },
    pressmain: {
        marginTop: 10,
        marginBottom:10,
        width: '100%',
        height: 60,
        backgroundColor: '#f1f1f1',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderBottomWidth: 0.2,
    },
    pressbox: {
        width: '75%',
        height: 50,
        backgroundColor: '#f1f1f1',
    },
    pressimage: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 60,
    },
    bigtext: {
        fontSize: 18,
        fontWeight:'800',
        fontFamily: 'inter',
    },
    smalltext: {
        fontSize: 18,
        fontWeight:'800',
        fontFamily: 'inter-bold',
    },
})