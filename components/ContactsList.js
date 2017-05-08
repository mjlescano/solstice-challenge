import React, { Component } from 'react'
import { StyleSheet, ListView, Text, View } from 'react-native'

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
  name
}) => (
  <View style={styles.row}>
    <Text style={styles.id}>{id}</Text>
    <Text style={styles.name}>{name}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  row: {
    flex: 1
  },
  id: {
    color: '#444',
    fontSize: 12
  },
  name: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 16
  }
})
