import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    cellContainer: {
        width: '50%',
        height: 200,
        backgroundColor: 'rgb(144,39,23)',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%', 
        height: '80%'
    },
    textImage: {
        height: '20%', 
        color: 'white', 
        fontWeight: 'bold', 
        textAlign: 'center', 
        fontSize: 13, 
        paddingTop: 4
    }
})