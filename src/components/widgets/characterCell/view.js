import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

export default class extends Component {

    static defaultProps = {
        character: null,
        onCharacterPress: () => {},
    }

    render() {
        const { character } = this.props
        return (
            <TouchableOpacity 
                onPress={ () => this.props.onCharacterPress(character) } 
                style={styles.cellContainer}
            >
               <Text>{ character.name }</Text>
            </TouchableOpacity>
        )
    }
}