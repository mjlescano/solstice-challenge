import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import { getAllContacts, getFavoriteContacts } from '../reducers'
import ContactsList from '../components/ContactsList'

const AllContacts = connect((state) => ({
  contacts: getAllContacts(state)
}))(ContactsList)

AllContacts.navigationOptions = {
  tabBarLabel: 'Contacts',
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('../assets/contacts.png')}
      style={[styles.icon, { tintColor: tintColor }]} />
  )
}

const FavotireContacts = connect((state) => ({
  contacts: getFavoriteContacts(state)
}))(ContactsList)

FavotireContacts.navigationOptions = {
  tabBarLabel: 'Favorites',
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('../assets/favorites.png')}
      style={[styles.icon, { tintColor: tintColor }]} />
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default TabNavigator({
  Favorites: { screen: FavotireContacts },
  All: { screen: AllContacts }
}, {
  tabBarOptions: {
    labelStyle: {
      fontSize: 14
    }
  }
})
