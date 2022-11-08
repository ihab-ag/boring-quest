import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import DiamondIconContainer from './DiamondIconContainer';
import { MaterialIcons } from '@expo/vector-icons';

const QuestCard = ({ difficulty, title, description, onPress, status = 'in progress' }) => {

    const icon = {
        'delete':
            <MaterialIcons name="delete" size={16} color="white" />,
        'in progress':
            <Entypo name="dots-three-horizontal" size={18} color="white" />,
        'submitted':
            <Entypo name="check" size={18} color="white" />,
        'failed':
            <MaterialIcons name="close" size={18} color="white" />
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View className='border-2 border-primary bg-white px-4 flex-row justify-between mb-4 rounded'>
                <View className='flex-row'>
                    <View className={`w-4 ${difficulty} h-full`} />
                    <View className='justify-center py-2 w-4/5 ml-2'>
                        <Text className='text-primary font-inter-medium text-lg capitalize'>{title}</Text>
                        <Text numberOfLines={1} className='text-passive font-inter text-xs'>{description}</Text>
                    </View>
                </View>
                <View className='justify-center items-center' style={{}}>
                    <DiamondIconContainer>
                        {icon[status]}
                    </DiamondIconContainer>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default QuestCard