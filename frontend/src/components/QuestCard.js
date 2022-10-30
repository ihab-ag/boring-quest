import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

const QuestCard = ({ difficulty }) => {
    return (
        <TouchableOpacity>
            <View className='border-2 border-primary bg-white px-4 flex-row justify-between mb-4 rounded'>
                <View className='flex-row'>
                    <View className={`w-4 bg-${difficulty} h-full`} />
                    <View className='justify-center py-2 w-4/5 ml-2'>
                        <Text className='text-primary font-inter-medium text-lg'>Quest Name</Text>
                        <Text numberOfLines={1} className='text-passive font-inter text-xs'>Go buy some fried chicken to feed the crying cat in the corner</Text>
                    </View>
                </View>
                <View className='justify-center'>
                    <View className='bg-primary w-6 h-6 rotate-45 justify-center items-center'>
                        <View className='-rotate-45'>
                            <Entypo name="dots-three-horizontal" size={18} color="white" />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default QuestCard