export const fetchContacts = () => (dispatch) => {
  dispatch({ type: 'FETCH_START' })

  fetch('https://s3.amazonaws.com/technical-challenge/Contacts_v2.json')
    .then((res) => res.json())
    .then((contacts) => dispatch({
      type: 'RECEIVE_CONTACTS',
      contacts
    }))
    .then(() => dispatch({ type: 'FETCH_END' }))
    .catch((err) => { throw err })
}
