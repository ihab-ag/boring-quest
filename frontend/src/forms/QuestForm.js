import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React, { useState } from 'react'
import TopColoredSection from '../layouts/TopColoredSection'
import { Formik } from 'formik'
import InputText from '../components/InputText'
import LabelText from '../components/LabelText'
import DefaultScreen from '../layouts/DefaultScreen'
import DropDown from '../components/DropDown'
import QuestTypesModal from '../modals/QuestTypesModal'
import DateModal from '../modals/DateModal'
import DIFFICULTIES from '../constants/QuestDifficulties'
import DifficultyTab from '../components/DifficultyTab'
import ErrorText from '../components/ErrorText'
import questValidationSchema from './validation/questValidation'
import FullWidthButton from '../components/FullWidthButton'
import { useDispatch } from 'react-redux'
import { addQuest } from '../redux/slices/adventureSlice'

const QuestForm = ({ route, navigation }) => {

    const [typeModalVisible, setTypeModalVisible] = useState(false)
    const [dateModalVisible, setDateModalVisible] = useState(false)

    const type = route.params.type

    const dispatch = useDispatch()

    return (
        <Formik
            initialValues={{
                title: '',
                description: '',
                asignee: '',
                date: type === 'main' ? new Date() : '',
                type: type === 'main' ? 'todo' : 'adventure',
                difficulty: 'easy',
            }}
            validationSchema={questValidationSchema}
            onSubmit={(values) => {
                if (type === 'adventure') {
                    dispatch(addQuest(values))
                }
                else if (type === 'main') {
                    // api call
                }
                navigation.goBack()
            }} >
            {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched }) => (
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View className='flex-1'>
                        <ScrollView>
                            <TopColoredSection color='bg-primary' >
                                {/* Quest Title */}
                                <View>
                                    <LabelText color='text-white' title='Quest title' />
                                    <InputText
                                        placeholder='Gather loot'
                                        numberOfLines={1}
                                        onChangeText={handleChange('title')}
                                        onBlur={handleBlur('title')}
                                        value={values.title}
                                    />
                                    {touched.title && errors.title && <ErrorText text={errors.title} />}
                                </View>
                                {/* Quest Description */}
                                <View className='mt-2'>
                                    <LabelText color='text-white' title='Quest description' />
                                    <InputText
                                        placeholder='Defeat mobs in the forbidden forest'
                                        numberOfLines={3}
                                        onChangeText={handleChange('description')}
                                        onBlur={handleBlur('description')}
                                        value={values.desc}
                                    />
                                    {touched.description && errors.description && <ErrorText text={errors.description} />}
                                </View>
                            </TopColoredSection>
                            <DefaultScreen>
                                {type === 'main' &&
                                    (<>
                                        {/* Quest Type */}
                                        <View className='flex-row justify-between items-center mt-4'>
                                            <LabelText title='Quest type' color='text-secondary' />
                                            <DropDown value={values.type} onPress={() => setTypeModalVisible(true)} />
                                        </View>
                                        {/* End Date */}

                                        <View className='flex-row justify-between items-center mt-4'>
                                            <LabelText title='End date' color='text-secondary' />
                                            <DropDown value={values.date.toDateString()} onPress={() => setDateModalVisible(true)} />
                                        </View>
                                    </>)}
                                {/* Difficulties */}
                                <View className='mt-4' >
                                    <LabelText title='Difficulty' color='text-secondary' />
                                    <View className='flex-row justify-between mt-4'>
                                        {
                                            DIFFICULTIES.map((item) => {
                                                const color = item.value === values.difficulty ? item.bg_selected_color : item.bg_color
                                                const text_color = item.value === values.difficulty ? 'text-secondary/70' : 'text-secondary/50'
                                                return (
                                                    <DifficultyTab
                                                        key={item.value}
                                                        name={item.name}
                                                        color={color}
                                                        text_color={text_color}
                                                        onPress={() => setFieldValue('difficulty', item.value)} />
                                                )
                                            })
                                        }
                                    </View>
                                    <ErrorText text={touched.difficulty && errors.difficulty} />
                                </View>
                            </DefaultScreen>
                        </ScrollView>
                        {/* Submit Button */}
                        <FullWidthButton title={type == 'adventure' ? 'ADD TO ADVENTURE' : 'START QUEST'} 
                        onPress={handleSubmit} />
                        {/* modals */}
                        <QuestTypesModal modalVisible={typeModalVisible}
                            setModalVisible={(value) => setTypeModalVisible(value)}
                            setFieldValue={setFieldValue}
                            values={values}
                        />
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

export default QuestForm