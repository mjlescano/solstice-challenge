import shortid from 'shortid'

const initialState = {
  fetchingContacts: false,
  contacts: []
}

const reducers = {
  RECEIVE_CONTACTS: (state, action) => {
    return {
      ...state,
      contacts: action.contacts.map((contact) => ({
        ...contact,
        // Add unique `id` for future reference
        id: shortid.generate(),
        // Allows to calculate a re-render on edition
        modifiedAt: Date.now()
      })).sort(byName)
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

  ADD_CONTACT: (state, action) => {
    return {
      ...state,
      contacts: state.contacts.concat({
        ...action.contact,
        id: shortid.generate(),
        modifiedAt: Date.now()
      }).sort(byName)
    }
  },

  EDIT_CONTACT: (state, action) => {
    return {
      ...state,
      contacts: action.contacts.map((contact) => {
        if (contact.id !== action.contact.id) return contact
        return {
          ...action.contact,
          modifiedAt: Date.now()
        }
      }).sort(byName)
    }
  },

  REMOVE_CONTACT: (state, action) => {
    return {
      ...state,
      contacts: action.contacts.filter((contact) => {
        return contact.id !== action.contact.id
      })
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

const byName = (a, b) => {
  const aname = a.name.toUpperCase()
  const bname = b.name.toUpperCase()
  return aname < bname ? -1 : aname > bname ? 1 : 0
}
