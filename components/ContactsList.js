import React, { Component } from 'react'
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native'

export default class ContactsList extends Component {
  handleRowPress (id) {
    const { navigate } = this.props.navigation
    navigate('Contact', { contact: id })
  }

  renderItem = ({ item }) => (
    <ContactItem {...item} onPress={() => this.handleRowPress(item.id)} />
  )

  keyExtractor = (contact) => contact.id

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.contacts}
          keyExtractor={this.keyExtractor}
          onRefresh={this.props.fetchContacts}
          refreshing={this.props.refreshing}
          removeClippedSubviews={false}
          renderItem={this.renderItem} />
      </View>
    )
  }
}

const getMainPhone = (phones) => phones[Object.keys(phones)[0]]

const ContactItem = ({
  id,
  name,
  smallImageURL,
  phone,
  onPress
}) => (
  <TouchableHighlight
    underlayColor={'#fafafa'}
    onPress={onPress}>
    <View style={styles.row}>
      <Image
        style={styles.image}
        defaultSource={require('../assets/avatar.png')}
        source={{ uri: smallImageURL }} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.phone}>{getMainPhone(phone)}</Text>
      </View>
    </View>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10
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
  },
  phone: {
    color: '#444',
    fontSize: 12
  }
})
