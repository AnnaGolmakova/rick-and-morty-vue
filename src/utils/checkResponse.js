import RequestError from './requestError'

function checkResponse(res) {
  const json = res.json()
  if (res.ok) {
    return json
  }
  return json.then((result) => {
    throw new RequestError(result.message, res.status, result)
  })
}

export default checkResponse
