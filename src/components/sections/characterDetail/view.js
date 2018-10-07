import React from 'react'
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux' 

class CharacterDetail extends React.Component {

    render() {
        const { character } = this.props
        const image = character.thumbnail.path ? { uri: character.thumbnail.path+'.'+character.thumbnail.extension } : require('../../../resources/placeholder.jpg')

        return (
            <View style={styles.container}>
                <Image
                    source={image}
                    style={styles.image}
                    resizeMode={'contain'}
                />
               <Text 
                    style={styles.textImage}>
                    { character.name }
                </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        character: state.characters.item,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail)