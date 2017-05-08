import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { getContacts } from '../reducers'
import ContactsList from '../components/ContactsList'

const App = ({ contacts }) => (
  <View style={styles.container}>
    <ContactsList contacts={contacts} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  }
})

export default connect((state) => ({
  contacts: getContacts(state)
}))(App)
