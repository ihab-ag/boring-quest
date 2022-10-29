import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const CustomHeader = ({navigation,route}) => {
  return (
    <View className='flex-row w-full bg-primary px-6 py-4 items-center justify-between'>
      <Text className='font-inter-semibold text-2xl text-white'>{route.name}</Text>
      <TouchableOpacity onPress={()=> navigation.openDrawer()}>
        <Feather name="menu" size={34} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default CustomHeader