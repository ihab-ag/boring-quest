import { View, Text } from 'react-native'
import React from 'react'
import Avatar from '../components/Avatar'
import ProgressBar from './ProgressBar'
import TopColoredSection from '../layouts/TopColoredSection'

const QuestsScreenTopSection = () => {
    return (
        <TopColoredSection color='bg-primary' flex='flex-row'>
            <Avatar />
            <View className='flex-1 ml-6 justify-around'>
                <View>
                    <View className='flex-row justify-between items-end'>
                        <Text className='font-inter-medium text-white text-base'>Health</Text>
                        <Text className='font-inter text-white text-sm'>100/300</Text>
                    </View>
                    <ProgressBar bg_color='bg-hard' />
                </View>
                <View>
                    <View className='flex-row justify-between items-end'>
                        <Text className='font-inter-medium text-white text-base'>lv. 16</Text>
                        <Text className='font-inter text-white text-sm'>100/300</Text>
                    </View>
                    <ProgressBar bg_color='bg-medium' />
                </View>
            </View>
        </TopColoredSection>
    )
}

export default QuestsScreenTopSection