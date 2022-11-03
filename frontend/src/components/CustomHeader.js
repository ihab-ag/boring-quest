import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const CustomHeader = ({ navigation, route, type = '' }) => {

  let action = null
  let icon = null
  // change navigation based on type
  if (type === 'drawer'){
    action = () => navigation.openDrawer()
    icon = (<Feather name="menu" size={34} color="white" />)
  }
  else if (type === 'modal'){
    action = () => navigation.goBack()
    icon = (<AntDesign name="close" size={32} color="white" />)
  }
  return (
    <View className='flex-row w-full bg-primary px-6 py-4 items-center justify-between'>
      <Text className='font-inter-semibold text-2xl text-white'>{route.name}</Text>
      <TouchableOpacity onPress={action}>
        {icon}
      </TouchableOpacity>
    </View>
  )
}

export default CustomHeader