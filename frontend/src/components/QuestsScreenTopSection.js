import { View, Text } from 'react-native'
import React from 'react'
import Avatar from '../components/Avatar'
import ProgressBar from './ProgressBar'

const QuestsScreenTopSection = () => {
  return (
    <View className='bg-primary w-full px-6 pb-4 pt-2 flex-row'>
                <Avatar />
                <View className='flex-1 ml-6 justify-around'>
                    <View>
                        <View className='flex-row justify-between items-end'>
                            <Text className='font-inter-medium text-white text-base'>Health</Text>
                            <Text className='font-inter text-white text-sm'>100/300</Text>
                        </View>
                        <ProgressBar color='hard' />
                    </View>
                    <View>
                        <View className='flex-row justify-between items-end'>
                            <Text className='font-inter-medium text-white text-base'>lv. 16</Text>
                            <Text className='font-inter text-white text-sm'>100/300</Text>
                        </View>
                        <ProgressBar color='medium' />
                    </View>
                </View>
            </View>
  )
}

export default QuestsScreenTopSection