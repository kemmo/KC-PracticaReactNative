import { StyleSheet } from 'react-native' 

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(24,24,24)'
    },
    image: {
        width: '100%',
        height: 200
    },
    dataContainer: {
        padding: 20,
        flexDirection: 'row'
    },
    text: {
        color: 'white',
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