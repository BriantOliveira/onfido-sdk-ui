function setToken(payload) {
  return {
    type: 'SET_TOKEN',
    payload
  }
}

function setWebSocketSupport(payload) {
  return {
    type: 'SET_WEBSOCKET_SUPPORT',
    payload
  }
}

function setDocumentCaptured(payload) {
  return {
    type: 'SET_DOCUMENT_CAPTURED',
    payload
  }
}

function setFaceCaptured(payload) {
  return {
    type: 'SET_FACE_CAPTURED',
    payload
  }
}

function setAuthenticated(payload) {
  return {
    type: 'SET_AUTHENTICATED',
    payload
  }
}

function setGumSupport(payload) {
  return {
    type: 'SET_GUM_SUPPORT',
    payload
  }
}

module.exports = {
  setToken,
  setWebSocketSupport,
  setGumSupport,
  setDocumentCaptured,
  setFaceCaptured,
  setAuthenticated
}
