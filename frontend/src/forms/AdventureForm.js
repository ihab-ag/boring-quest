import { View, Text, TouchableWithoutFeedback, ScrollView, Keyboard, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import FullWidthButton from '../components/FullWidthButton'
import TopColoredSection from '../layouts/TopColoredSection'
import LabelText from '../components/LabelText'
import InputText from '../components/InputText'
import DefaultScreen from '../layouts/DefaultScreen'
import { Entypo } from '@expo/vector-icons';
import ErrorText from '../components/ErrorText'
import { useSelector, useDispatch } from 'react-redux'
import QuestCard from '../components/QuestCard'
import DropDown from '../components/DropDown'
import DateModal from '../modals/DateModal'
import { emptyQuests, removeQuest } from '../redux/slices/adventureSlice'
import adventureValidationSchema from './validation/adventureValidation'
import mapQuests from '../helpers/mapQuests'

const AdventureForm = ({ navigation }) => {

    const [dateModalVisible, setDateModalVisible] = useState(false)

    const questsArray = useSelector(state => state.adventure.quests)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(emptyQuests())
    }, [])

    return (
        <Formik
            initialValues={{
                title: '',
                description: '',
                date: new Date(),
                quests: []
            }}
            validationSchema={adventureValidationSchema}
            onSubmit={values => {
                console.log(values)
                navigation.goBack()
            }} >
            {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched }) => (
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View className='flex-1'>
                        <ScrollView>
                            <TopColoredSection color='bg-primary' >
                                {/* Adventure Title */}
                                <View>
                                    <LabelText color='text-white' title='Adventure title' />
                                    <InputText
                                        placeholder='Conquer the land of the fallen'
                                        numberOfLines={1}
                                        onChangeText={handleChange('title')}
                                        onBlur={handleBlur('title')}
                                        value={values.title}
                                    />
                                    {touched.title && errors.title && <ErrorText text={errors.title} />}
                                </View>
                                <View className='mt-2'>
                                    <LabelText color='text-white' title='Adventure description' />
                                    <InputText
                                        placeholder='Clean the house before guests arrive'
                                        numberOfLines={3}
                                        onChangeText={handleChange('description')}
                                        onBlur={handleBlur('description')}
                                        value={values.desc}
                                    />
                                    {touched.description && errors.description && <ErrorText text={errors.description} />}
                                </View>
                            </TopColoredSection>
                            <TouchableOpacity className='flex-row p-2 bg-primary justify-center items-center'
                                onPress={() =>
                                    navigation.navigate('New Quest', {
                                        type: 'adventure'
                                    })}>
                                <Text className='text-white font-inter-semibold text-base'>ADD QUEST </Text>
                                <Entypo name="plus" size={24} color='white' />
                            </TouchableOpacity>
                            <DefaultScreen>
                                {/* End Date */}
                                <View className='flex-row justify-between items-center mt-4'>
                                    <LabelText title='End date' color='text-secondary' />
                                    <DropDown value={values.date.toDateString()} onPress={() => setDateModalVisible(true)} />
                                </View>
                                {/* Quests */}
                                <View className='mt-4'>
                                    <LabelText title='Quests' color='text-secondary' />
                                    <View className='mt-4'>
                                        {
                                            questsArray.length > 0 ? mapQuests(questsArray, (key) => dispatch(removeQuest(key)))
                                                :
                                                (<QuestCard difficulty='bg-easy' title='Add a quest' description='are you up to it?' />)
                                        }
                                    </View>
                                    {touched.quests && errors.quests && <ErrorText text={errors.quests} />}
                                </View>
                            </DefaultScreen>
                        </ScrollView>
                        <FullWidthButton onPress={() => {
                            setFieldValue('quests', questsArray)
                            dispatch(emptyQuests())
                            handleSubmit()
                        }} title={'START ADVENTURE'} />
                        {/* modals */}
                        {dateModalVisible && (<DateModal
                            modalVisible={dateModalVisible}
                            setModalVisible={setDateModalVisible}
                            setFieldValue={setFieldValue}
                            date={values.date} />)}
                    </View>
                </TouchableWithoutFeedback>
            )}
        </Formik>

    )
}

export default AdventureForm