import React, { Component } from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import styles from './styles'

export default class extends Component {

    static defaultProps = {
        character: null,
        onCharacterPress: () => {},
    }

    render() {
        const { character } = this.props
        const image = character.thumbnail.path ? { uri: character.thumbnail.path+'.'+character.thumbnail.extension } : require('../../../resources/placeholder.jpg')

        return (
            <TouchableOpacity 
                onPress={ () => this.props.onCharacterPress(character) } 
                style={styles.cellContainer}
            >
                <Image
                    source={image}
                    style={styles.image}
                    resizeMode={'center'}
                />
               <Text 
                    style={styles.textImage}>
                    { character.name }
                </Text>
            </TouchableOpacity>
        )
    }
}