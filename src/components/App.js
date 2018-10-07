import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Router, Scene, Stack } from 'react-native-router-flux'
import { Characters, CharacterDetail, Register } from './sections/'
import * as api from '../api/'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk' 

import * as reducers from '../redux/'
const reducer = combineReducers(reducers)
const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
)

const sceneDefaultStyles = {
    navigationBarStyle: { backgroundColor: 'rgb(144,39,23)'},
    backButtonTintColor: 'white',
    backButtonTextStyle: { color: 'white' },
    titleStyle: { color: 'white' },
}

export default class App extends Component {
 
    componentWillMount() {
        api.configureAxios()
        StatusBar.setBarStyle('light-content')
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Stack key="root">
                        <Scene 
                            key="characters" 
                            component={Characters} 
                            hideNavBar={true} 
                            initial={true}
                        />
                        <Scene 
                            key={'characterDetail'}
                            component={CharacterDetail}
                            {...sceneDefaultStyles}
                        />
                        <Scene 
                            key={'register'}
                            component={Register}
                            title={'Registro de usuario'}
                            {...sceneDefaultStyles}
                        />
                    </Stack>
                </Router>
            </Provider>
        )
    }
}