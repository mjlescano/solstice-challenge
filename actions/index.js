import shortid from 'shortid'

const parseContacts = (contacts) => contacts.map((contact, i) => {
  return {
    ...contact,
    // Add unique `id` for future reference
    id: shortid.generate(),
    // Allows to calculate a re-render on edition
    modifiedAt: Date.now()
  }
})

export const fetchContacts = () => (dispatch) => {
  dispatch({ type: 'FETCH_START' })

  fetch('https://s3.amazonaws.com/technical-challenge/Contacts_v2.json')
    .then((res) => res.json())
    .then(parseContacts)
    .then((contacts) => dispatch({
      type: 'RECEIVE_CONTACTS',
      contacts
    }))
    .then(() => dispatch({ type: 'FETCH_END' }))
    .catch((err) => { throw err })
}
