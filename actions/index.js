import shortid from 'shortid'

const parseContacts = (contacts) => contacts.map((contact, i) => {
  return Object.assign({}, contact, {
    // Add unique `id` for future reference
    id: shortid.generate(),
    // Allows to calculate a re-render on edition
    modifiedAt: Date.now()
  })
})

const receiveContacts = (contacts) => ({
  type: 'RECEIVE_CONTACTS',
  contacts
})

export const getAllContacts = () => (dispatch) => {
  fetch('https://s3.amazonaws.com/technical-challenge/Contacts_v2.json')
    .then((res) => res.json())
    .then(parseContacts)
    .then((contacts) => dispatch(receiveContacts(contacts)))
    .catch((err) => { throw err })
}
