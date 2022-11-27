import { Image } from 'react-native'
import React from 'react'
import { BASE_URL } from '../apis/configs/axios.config'

const Avatar = ({avatar}) => {

  return (
    <Image className='h-20 w-20'  source={{ uri: BASE_URL + avatar }} />
  )
}
export default Avatar