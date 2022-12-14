import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import CustomHeader from '../components/CustomHeader'
import TopColoredSection from '../layouts/TopColoredSection'
import DefaultScreen from '../layouts/DefaultScreen'
import { useState } from 'react'
import MyCamera from '../components/Camera'
import { Feather } from '@expo/vector-icons';
import FullWidthButton from '../components/FullWidthButton'
import { putSubmit } from '../apis/putSubmit.api'
import { useDispatch, useSelector } from 'react-redux'
import { addQuest } from '../redux/slices/questsSlice'
import mapQuests from '../helpers/mapQuests'
import { setUser } from '../redux/slices/userSlice'
import { destructureUser } from '../helpers/destructureUser'
import { BASE_URL } from '../apis/configs/axios.config'

const QuestScreen = ({ navigation, route }) => {

    const [cameraVisibile, setCameraVisible] = useState(false)
    const [photo, setPhoto] = useState()

    const user = useSelector(state => state.user)

    const quest = route.params.quest

    const due_date = new Date(quest.due).toDateString()
    route.name = quest.name

    const dispatch = useDispatch()

    const handleSubmit = async () => {
        const res = await putSubmit(quest._id, {
            "picture_submitted": true,
            "base64Image": photo.base64
        })

        if (res.status === 200) {
            for (const quest of res.data.quests)
                dispatch(addQuest(quest))
            dispatch(setUser(destructureUser(res.data.user)))
            navigation.goBack()
        }
    }


    return (
        <>
            <CustomHeader navigation={navigation} route={route} type='modal' color={`bg-secondary bg-${quest.difficulty}`} />
            <TopColoredSection color={`bg-secondary bg-${quest.difficulty}`}>
                <Text className='font-inter-medium text-white/90 text-lg'>{quest.description}</Text>
            </TopColoredSection>
            <DefaultScreen>
                <View className='mt-4 flex-row justify-between items-center'>
                    <Text className='font-inter-semibold text-secondary text-xl'>Due</Text>
                    <Text className='font-inter-medium text-secondary text-base'>{due_date}</Text>
                </View>
                {user.type !== 'guild' && quest.status === 'in progress' && <View className='mt-4 flex-row justify-between items-start'>
                    <Text className='font-inter-semibold text-secondary text-xl'>Submission</Text>
                    <View className='gap-y-4'>
                        <TouchableOpacity onPress={() => setCameraVisible(true)}>
                            <Feather name="camera" size={24} color="#073B4C" />
                        </TouchableOpacity>

                    </View>
                </View>}
                {photo && (
                    <View className='border-2 border-primary mt-4'>
                        <Image className='align-super h-96' source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
                    </View>
                )}
                {
                    quest.picture_url && (
                        <View className='border-2 border-primary mt-4'>
                            <Image className='align-super h-96' source={{ uri: BASE_URL + quest._id + '.jpg' }
                            } />
                        </View>
                    )}
                {
                    quest.quests && (
                        <View className='mt-4'>
                            <Text className='font-inter-semibold text-secondary text-xl mb-4'>Quests:</Text>
                            {mapQuests(quest.quests, (key, quest) => {
                                navigation.navigate('Quest', { quest })
                            })}
                        </View>
                    )
                }
            </DefaultScreen>
            {user.type !== 'guild' && quest.status === 'in progress' &&

                <FullWidthButton title='SUBMIT' onPress={handleSubmit} />}
            {cameraVisibile &&
                <MyCamera setPhoto={setPhoto} setVisible={setCameraVisible} />
            }
        </>
    )
}

export default QuestScreen