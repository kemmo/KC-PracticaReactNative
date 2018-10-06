import React, { Component } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import { CharacterCell  } from '../../widgets/'
import styles from './styles'
import { connect } from 'react-redux'
import * as CharactersActions from '../../../redux/characters/actions'

class Characters extends Component {

    componentDidMount() {
        this.props.fetchCharactersList()
    }

    _onCharacterTapped(character) {
        this.props.onCharacterTapped(character)
    }

    _renderItem({ item }) {
        return ( 
            <CharacterCell 
                character={item} 
                onCharacterPress={ v => this._onCharacterTapped(v) } 
            />
        )
    }

    _renderActivityIndicator() {
        if(!this.props.isFetching) {
            return null
        }
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}>
                <ActivityIndicator size={'large'} color={'white'} animating={true} />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>

                <FlatList
                    data={this.props.list}
                    renderItem={ value => this._renderItem(value) }
                    keyExtractor={ (item, i) => 'cell' + item.id }
                    extraData={this.props}
                    style={{paddingTop: 40}}
                />

                { this._renderActivityIndicator() }     

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.characters.isFetching,
        list: state.characters.list,
    }
} 

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchCharactersList: () => {
            dispatch(CharactersActions.fetchCharactersList())
        },
        onCharacterTapped: (character) => {
            dispatch(CharactersActions.setItem(character))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters)