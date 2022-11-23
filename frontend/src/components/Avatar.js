import { Image } from 'react-native'
import React from 'react'

const Avatar = ({avatar}) => {

  return (
    <Image className='h-20 w-20'  source={{ uri: 'http://192.168.1.102:8000/' + avatar }} />
  )
}
export default Avatar