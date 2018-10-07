import React from 'react'
import { View, Text, Animated } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux' 

class CharacterDetail extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            animatedHeight: new Animated.Value(0)
        }
    }

    render() {
        Animated.timing(
            this.state.animatedHeight,
            {
                toValue: 300,
                duration: 500,
            }
        ).start()

        const { character } = this.props
        const image = character.thumbnail.path ? { uri: character.thumbnail.path+'.'+character.thumbnail.extension } : require('../../../resources/placeholder.jpg')

        return (
            <View style={styles.container}>
                <Animated.Image
                    source={image}
                    style={[styles.image, { height: this.state.animatedHeight }]}
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