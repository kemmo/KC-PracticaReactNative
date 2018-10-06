import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Router, Scene, Stack } from 'react-native-router-flux'
import { Characters } from './sections/'
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
                    </Stack>
                </Router>
            </Provider>
        )
    }
}