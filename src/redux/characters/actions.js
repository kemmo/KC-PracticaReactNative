import * as types from './types'
import { Actions } from 'react-native-router-flux'

function setFetching(value) {
    return {
        type: types.CHARACTERS_SET_FETCHING,
        value: value,
    }
}

export function setList(value) {
    return {
        type: types.CHARACTERS_UPDATE_LIST,
        value,
    }
}

export function setItem(value) {
    return {
        type: types.CHARACTERS_SET_ITEM,
        value,
    }
}

export function fetchCharactersList() {
    return (dispatch, getState, api) => {
        dispatch(setList([]))
        dispatch(setFetching(true))
        
        api
            .fetchCharacters()
            .then( res => {
                dispatch(setFetching(false))
                dispatch(setList(res.data.data.results))
                console.log("fetchCharactersList ok: ", res.data.data.results)
            })
            .catch( err => {
                dispatch(setFetching(false))
                console.log("fetchCharactersList error: ", err)
            })  

    }
}