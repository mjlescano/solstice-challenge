const initialState = {
  contacts: []
}

const reducers = {
  RECEIVE_CONTACTS: (state, action) => {
    return Object.assign({}, state, {
      contacts: action.contacts
    })
  }
}

export default (state = initialState, action) => {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  } else {
    return state
  }
}

export const getContact = (state, id) => {
  return state.contacts.find((contact) => contact.id === id)
}

export const getContacts = (state) => state.contacts
