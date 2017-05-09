import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Button } from 'react-native'
import { NavigationActions } from 'react-navigation'
import CustomActionSheet from 'react-native-custom-action-sheet'
import ActionButton from 'react-native-custom-action-sheet/button'
import { getContact } from '../reducers'
import ContactView from '../components/ContactView'

class Contact extends Component {
  static navigationOptions = ({ navigation: { setParams } }) => ({
    title: 'Contact',
    headerRight: (
      <Button
        onPress={() => setParams({ showActions: true })}
        title='Edit' />
    )
  })

  hideActions = () => {
    const { setParams } = this.props.navigation
    setParams({ showActions: false })
  }

  handleToggleFavorite = () => {
    this.props.toggleFavorite(this.props.contact.id)
    this.hideActions()
  }

  handleRemoveContact = () => {
    this.hideActions()
    this.props.navigation.dispatch(NavigationActions.back())
    this.props.removeContact(this.props.contact.id)
  }

  render () {
    const { contact } = this.props

    if (!contact) return null

    const { favorite } = contact
    const { state: { params } } = this.props.navigation

    return (
      <View>
        <ContactView {...contact} />
        {!!params.showActions && (
          <CustomActionSheet
            modalVisible={!!params.showActions}
            onCancel={this.hideActions}>
            <View style={styles.actions}>
              <ActionButton
                onPress={this.handleRemoveContact}
                text='Delete Contact' />
              <ActionButton
                onPress={this.handleToggleFavorite}
                text={`${favorite ? 'Remove from' : 'Add to'} favorites`} />
            </View>
          </CustomActionSheet>
        )}
      </View>
    )
  }
}

export default connect((state, props) => ({
  contact: getContact(state, props.navigation.state.params.contact)
}), (dispatch) => ({
  toggleFavorite: (id) => dispatch({
    type: 'TOGGLE_FAVORITE',
    id
  }),
  removeContact: (id) => dispatch({
    type: 'REMOVE_CONTACT',
    id
  })
}))(Contact)

const styles = StyleSheet.create({
  actions: {
  }
})
