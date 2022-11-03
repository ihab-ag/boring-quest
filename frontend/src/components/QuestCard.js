import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import DiamondIconContainer from './DiamondIconContainer';

const QuestCard = ({ difficulty }) => {
    return (
        <TouchableOpacity>
            <View className='border-2 border-primary bg-white px-4 flex-row justify-between mb-4 rounded'>
                <View className='flex-row'>
                    <View className={`w-4 ${difficulty} h-full`} />
                    <View className='justify-center py-2 w-4/5 ml-2'>
                        <Text className='text-primary font-inter-medium text-lg'>Quest Name</Text>
                        <Text numberOfLines={1} className='text-passive font-inter text-xs'>Go buy some fried chicken to feed the crying cat in the corner</Text>
                    </View>
                </View>
                <View className='justify-center items-center' style={{}}>
                    <DiamondIconContainer>
                        <Entypo name="dots-three-horizontal" size={18} color="white" />
                    </DiamondIconContainer>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default QuestCard