const initialState = {
  fetchingContacts: false,
  contacts: []
}

const reducers = {
  RECEIVE_CONTACTS: (state, action) => {
    return {
      ...state,
      contacts: action.contacts
    }
  },

  FETCH_START: (state, action) => {
    return {
      ...state,
      fetchingContacts: true
    }
  },

  FETCH_END: (state, action) => {
    return {
      ...state,
      fetchingContacts: false
    }
  },

  TOGGLE_FAVORITE: (state, action) => {
    return {
      ...state,
      contacts: state.contacts.map((contact) => {
        if (contact.id !== action.id) return contact
        return {
          ...contact,
          favorite: !contact.favorite
        }
      })
    }
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
