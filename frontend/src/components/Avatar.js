import { Image } from 'react-native'
import React from 'react'

const Avatar = () => {
  return (
    <Image className='h-20 w-20'  source={require('../../assets/test_avatars/avatar.png')} />
  )
}
export default Avatar