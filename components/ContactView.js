import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'

const ContactView = ({
  id,
  name,
  largeImageURL
}) => (
  <View style={styles.container}>
    <View style={styles.info}>
      <Image
        style={styles.image}
        defaultSource={require('../assets/avatar.png')}
        source={{ uri: largeImageURL }} />
      <Text style={styles.name}>{name}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
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
    alignItems: 'center'
  },
  name: {
    color: '#222',
    fontWeight: 'normal',
    fontSize: 32
  }
})

export default ContactView
