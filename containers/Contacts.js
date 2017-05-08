import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import { getAllContacts, getFavoriteContacts } from '../reducers'
import ContactsList from '../components/ContactsList'

const AllContacts = connect((state, { navigation }) => ({
  contacts: getAllContacts(state),
  navigation
}))(ContactsList)

AllContacts.navigationOptions = {
  title: 'All',
  tabBarLabel: 'Contacts',
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('../assets/contacts.png')}
      style={[styles.icon, { tintColor }]} />
  )
}

const FavotireContacts = connect((state, { navigation }) => ({
  contacts: getFavoriteContacts(state),
  navigation
}))(ContactsList)

FavotireContacts.navigationOptions = {
  title: 'Favorites',
  tabBarLabel: 'Favorites',
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('../assets/favorites.png')}
      style={[styles.icon, { tintColor }]} />
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
