import { Image } from 'react-native'
import React from 'react'

const Avatar = ({source}) => {
  return (
    <Image className='h-20 w-20' source={source} />
  )
}
export default Avatar