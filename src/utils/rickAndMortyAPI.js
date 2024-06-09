import checkResponse from './checkResponse.js'

const baseURL = 'https://rickandmortyapi.com/api'

function getResource(endpoint, options) {
  const params = new URLSearchParams(options).toString()

  return fetch(`${baseURL}/${endpoint}/?${params}`, {
    method: 'GET'
  }).then((res) => checkResponse(res))
}

function getCharacters(options) {
  return getResource('character', options)
}

export default getCharacters
