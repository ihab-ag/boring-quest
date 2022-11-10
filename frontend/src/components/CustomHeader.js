import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



const CustomHeader = ({ navigation, route, type = 'drawer', color = 'bg-primary' }) => {

  const typeProps = {
    drawer: {
      action: () => navigation.openDrawer(),
      icon: <Feather name="menu" size={34} color="white" />
    },
    modal: {
      action: () => navigation.goBack(),
      icon: <AntDesign name="close" size={32} color="white" />
    }
  }

  return (
    <>
    <View className={`flex-row w-full ${color} px-6 py-4 items-center justify-between`}>
      <Text className='font-inter-semibold text-2xl text-white capitalize'>{route.name}</Text>
      <TouchableOpacity onPress={typeProps[type].action}>
        {typeProps[type].icon}
      </TouchableOpacity>
    </View>
    <StatusBar backgroundColor='#fff' barStyle='dark-content' />
    </>
  )
}

export default CustomHeader