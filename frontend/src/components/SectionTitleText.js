import { Text } from 'react-native'
import React from 'react'

const SectionTitleText = ({children}) => {
  return (
    <Text className='font-inter-semibold text-2xl text-secondary '>{children}</Text>
  )
}

export default SectionTitleText