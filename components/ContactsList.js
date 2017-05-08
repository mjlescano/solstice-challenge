import React, { Component } from 'react'
import { StyleSheet, ListView, Text, View, Image } from 'react-native'

export default class ContactsList extends Component {
  constructor (props) {
    super(props)

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => {
        return r1.id !== r2.id || r1.modifiedAt !== r2.modifiedAt
      }
    })

    this.state = {
      dataSource: ds.cloneWithRows(props.contacts)
    }
  }

  componentWillReceiveProps (props) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(props.contacts)
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={Row} />
      </View>
    )
  }
}

const Row = ({
  id,
  name,
  smallImageURL,
  phone
}) => (
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
)

const getMainPhone = (phones) => phones[Object.keys(phones)[0]]

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
