import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getContact } from '../reducers'
import ContactView from '../components/ContactView'

class Contact extends Component {
  render () {
    const { contact, toggleFavorite } = this.props
    return (
      <ContactView
        onToggleFavorite={() => toggleFavorite(contact.id)}
        {...contact} />
    )
  }
}

export default connect((state, props) => ({
  contact: getContact(state, props.navigation.state.params.contact)
}), (dispatch) => ({
  toggleFavorite: (id) => dispatch({
    type: 'TOGGLE_FAVORITE',
    id
  })
}))(Contact)
