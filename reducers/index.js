const initialState = {
  fetchingContacts: false,
  contacts: []
}

const reducers = {
  RECEIVE_CONTACTS: (state, action) => {
    return Object.assign({}, state, {
      contacts: action.contacts
    })
  },

  FETCH_START: (state, action) => {
    return Object.assign({}, state, {
      fetchingContacts: true
    })
  },

  FETCH_END: (state, action) => {
    return Object.assign({}, state, {
      fetchingContacts: false
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

export const getAllContacts = (state) => state.contacts.slice(0)

export const getFavoriteContacts = (state) => {
  return state.contacts.filter((contact) => contact.favorite)
}
