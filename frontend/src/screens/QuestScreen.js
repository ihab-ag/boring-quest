import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import CustomHeader from '../components/CustomHeader'
import TopColoredSection from '../layouts/TopColoredSection'
import DefaultScreen from '../layouts/DefaultScreen'
import { useState } from 'react'
import MyCamera from '../components/Camera'
import { Feather } from '@expo/vector-icons';

const QuestScreen = ({ navigation, route }) => {

    const [cameraVisibile, setCameraVisible] = useState(false)
    const [photo, setPhoto] = useState()

    const quest = route.params.quest

    route.name = quest.title

    return (
        <>
            <CustomHeader navigation={navigation} route={route} type='modal' color={`bg-${quest.difficulty}`} />
            <TopColoredSection color={`bg-${quest.difficulty}`}>
                <Text className='font-inter-medium text-white/90 text-lg'>{quest.description}</Text>
            </TopColoredSection>
            <DefaultScreen>
                <View className='mt-4 flex-row justify-between items-center'>
                    <Text className='font-inter-semibold text-secondary text-xl'>Due:</Text>
                    <Text className='font-inter-medium text-secondary text-base'>{quest.date.toDateString()}</Text>
                </View>
                <View className='mt-4 flex-row justify-between items-start'>
                    <Text className='font-inter-semibold text-secondary text-xl'>Submission:</Text>
                    <View className='gap-y-4'>
                    <TouchableOpacity onPress={() => setCameraVisible(true)}>
                        <Feather name="camera" size={24} color="#073B4C" />
                    </TouchableOpacity>
                    
                    </View>
                </View>
                {photo && (
                    <View className='border-2 border-primary mt-4'>
                        <Image className='align-super h-96' source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
                    </View>
                )}
            </DefaultScreen>
            {cameraVisibile && 
                <MyCamera setPhoto={setPhoto} setVisible={setCameraVisible} />
            }
        </>
    )
}

export default QuestScreen