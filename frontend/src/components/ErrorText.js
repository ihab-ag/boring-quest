import { View, Text } from 'react-native'
import React from 'react'

const ErrorText = ({text}) => {
  return (
    <Text className='font-inter-medium text-sm text-hard'>{text}</Text>
  )
}

export default ErrorText