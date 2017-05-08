import React from 'react'
import { Image, Dimensions } from 'react-native'

export default ({ source, width, height }) => {
  const ratio = height / width
  const deviceWidth = Dimensions.get('window').width

  return (
    <Image
      style={{
        width: deviceWidth,
        height: deviceWidth * ratio
      }}
      source={source} />
  )
}
