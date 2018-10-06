import axios from 'axios'

const BASE_URL = 'http://gateway.marvel.com/v1/public'
const CONTENT_TYPE = 'application/json'
const REFERER_URL = 'http://XXXXXXXX'
const PUBLIC_API_KEY = 'XXXXXXXX'

export function configureAxios() {
    axios.defaults.baseURL = BASE_URL
    axios.defaults.headers.post['Content-Type'] = CONTENT_TYPE
    axios.defaults.headers.common['Referer'] = REFERER_URL
}

export function fetchCharacters() {
    const url = '/characters?apikey=' + PUBLIC_API_KEY

    return axios.get(url).then((response) => {
        console.log('OK: ', response)
    }).catch((error) => {
        console.log('NOK: ', error)
    })
}