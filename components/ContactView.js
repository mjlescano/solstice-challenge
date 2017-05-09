import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  Linking,
  TouchableOpacity
} from 'react-native'
import moment from 'moment'
import FullWidthImage from './FullWidthImage'

export default class ContactView extends Component {
  handleMapShow () {
    const lat = this.props.address.latitude
    const lng = this.props.address.longitude

    const url = `https://maps.google.com/maps?&z=13&q=${lat}+${lng}`

    Linking.openURL(url).catch((err) => console.error('An error occurred', err))
  }

  render () {
    const {
      largeImageURL,
      name,
      company,
      phone,
      birthdate,
      email,
      address
    } = this.props

    return (
      <ScrollView style={styles.container}>
        <View style={styles.info}>
          <Image
            style={styles.image}
            defaultSource={require('../assets/avatar.png')}
            source={{ uri: largeImageURL }} />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.company}>{company}</Text>
        </View>
        {phone && (
          <View style={styles.attributes}>
            <Text style={styles.attributeName}>Phone:</Text>
            {Object.keys(phone).map((type) => {
              const number = phone[type]
              if (!number) return null
              return (
                <View key={type} style={styles.attributeWithType}>
                  <Text style={styles.attributeValue}>{number}</Text>
                  <Text style={styles.attributeType}> ({type})</Text>
                </View>
              )
            })}
          </View>
        )}
        {birthdate && (
          <View style={styles.attributes}>
            <Text style={styles.attributeName}>Birthday:</Text>
            <Text style={styles.attributeValue}>
              {moment(parseInt(birthdate, 10)).format('MMMM Do, YYYY')}
            </Text>
          </View>
        )}
        {email && (
          <View style={styles.attributes}>
            <Text style={styles.attributeName}>Email:</Text>
            <Text style={styles.attributeValue}>{email}</Text>
          </View>
        )}
        {address && (
          <View style={styles.attributes}>
            <Text style={styles.attributeName}>Address:</Text>
            <Text style={styles.attributeValue}>{address.street}</Text>
            <Text style={styles.attributeValue}>
              {address.city}, {address.state} {address.zip}
            </Text>
          </View>
        )}
        {address && address.latitude && address.longitude && (
          <TouchableOpacity
            onPress={this.handleMapShow}>
            <FullWidthImage
              width={1000}
              height={800}
              source={{ uri: `https://maps.googleapis.com/maps/api/staticmap?scale=2&size=640x512&zoom=13&markers=${address.latitude},${address.longitude}` }} />
          </TouchableOpacity>
        )}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10
  },
  name: {
    color: '#222',
    fontWeight: 'normal',
    fontSize: 32
  },
  company: {
    color: '#666',
    fontWeight: '100',
    fontSize: 16
  },
  attributes: {
    padding: 10,
    marginBottom: 10
  },
  attributeWithType: {
    flex: 1,
    flexDirection: 'row'
  },
  attributeName: {
    color: '#666',
    fontWeight: '100',
    fontSize: 16
  },
  attributeValue: {
    color: '#222',
    fontWeight: '700',
    fontSize: 18
  },
  attributeType: {
    color: '#666',
    fontWeight: '100',
    fontSize: 16
  }
})
