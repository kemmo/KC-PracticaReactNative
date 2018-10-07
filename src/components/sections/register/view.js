import React from 'react'
import { View, Alert } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'
import { Button, TextInput } from '../../widgets/'
import { Actions } from 'react-native-router-flux'

class Register extends React.Component {
    constructor(props) {
        super(props)

        if(props.isEdit && props.character) {
            this.state = {
                nick: props.nick,
                email: props.email,
                name: props.nombre,
                age: props.edad.toString(),
            }
        } else {
            this.state = {
                nick: '',
                email: '',
                name: '',
                age: '',
            }
        }
    }

    _validateForm() {
        const {name, age, nick, email} = this.state 
        if(name && age && nick && email) {
            return true
        } else {
            return false
        }
    }

    _onSubmit() {
        if(this._validateForm()) {
            const {name, age, nick, email} = this.state 
            if(this.props.isEdit) {
                const data = {
                    nick: nick,
                    email: email,
                    nombre: name,
                    edad: age, 
                }
            } else {
                const data = {
                    nick: nick,
                    email: email,
                    nombre: name,
                    edad: age,
                }
                //TODO: Send data to backend
                Alert.alert('Enhorabuena', 
                            'Se ha registrado con éxito!',
                            [
                                {text: 'OK', onPress: () => Actions.pop()},
                            ],
                            { cancelable: false }
                            )
            }
        } else {
            Alert.alert('Atención', 
                        'Complete todos los campos')
        }
    }

    _renderTextInput(label, key, placeholder = '') {
        return (
            <TextInput 
                label={label}
                value={this.state[key]}
                onChangeText={ v => this.setState({ [key]: v }) }
                placeholder={placeholder}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{paddingTop: 40, padding: 20}}>
                    { this._renderTextInput('Nick: *', 'nick', 'Tu nick') }
                </View>

                <View style={{paddingHorizontal: 20, paddingBottom: 20}}>
                    { this._renderTextInput('Email: *', 'email', 'email@provider.com') }
                </View>

                <View style={{paddingHorizontal: 20, paddingBottom: 20}}>
                    { this._renderTextInput('Nombre: *', 'name', 'Jorge') }
                </View>

                <View style={{paddingHorizontal: 20, paddingBottom: 20}}>
                    { this._renderTextInput('Edad: *', 'age', '32') }
                </View>

                <View style={{paddingHorizontal: 20, paddingBottom: 20}}>
                    <Button 
                        label={'Guardar'.toUpperCase()} 
                        onPress={() => this._onSubmit()} 
                        isFetching={this.props.isFetching} 
                    />
                </View>
 
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)