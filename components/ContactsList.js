import React, { Component } from 'react'
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native'

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
        source={{ uri: smallImageURL, cache: 'only-if-cached' }} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.phone}>{getMainPhone(phone)}</Text>
      </View>
    </View>
  </TouchableHighlight>
)

export default class ContactsList extends Component {
  state = { selected: new Map() }

  handleRowPress (id) {
    console.log(id)
    this.setState((state) => {
      const selected = new Map(state.selected)
      selected.set(id, !state.selected.get(id))
      return { selected }
    })
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
          renderItem={this.renderItem} />
      </View>
    )
  }
}

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
