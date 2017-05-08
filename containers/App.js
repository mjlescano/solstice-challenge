import React from 'react'
import { StyleSheet, View } from 'react-native'
import Contacts from './Contacts'

const App = ({ contacts }) => (
  <View style={styles.container}>
    <Contacts />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: '#fafafa'
  }
})

export default App
