import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getContact } from '../reducers'
import ContactView from '../components/ContactView'

class Contact extends Component {
  render () {
    const { contact } = this.props
    console.log(contact, this.props.navigation.state.params)
    return <ContactView {...contact} />
  }
}

export default connect((state, props) => ({
  contact: getContact(state, props.navigation.state.params.contact)
}))(Contact)
