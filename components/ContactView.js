import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

const ContactView = ({
  id,
  name,
  largeImageURL
}) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      defaultSource={require('../assets/avatar.png')}
      source={{ uri: largeImageURL, cache: 'only-if-cached' }} />
    <View style={styles.info}>
      <Text style={styles.name}>{name}</Text>
    </View>
  </View>
)

ContactView.navigationOptions = {
  title: 'All Contacts',
  tabBarLabel: 'Contacts',
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('../assets/contacts.png')}
      style={[styles.icon, { tintColor }]} />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  info: {
    flex: 1,
    paddingLeft: 10,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  name: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default ContactView
