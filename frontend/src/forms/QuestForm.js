import { View, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
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
import { postQuest } from '../apis/postQuest.api'
import { addQuest } from '../redux/slices/questsSlice'
import { addAdventureQuest } from '../redux/slices/adventureSlice'

const QuestForm = ({ route, navigation }) => {

    const [typeModalVisible, setTypeModalVisible] = useState(false)
    const [dateModalVisible, setDateModalVisible] = useState(false)

    const type = route.params.type

    const dispatch = useDispatch()

    const handlePost = async (values) => {

        const res = await postQuest(values)

        if (res.status === 200) {
            dispatch(addQuest(res.data))
        }
    }

    return (
        <Formik
            initialValues={{
                name: '',
                description: '',
                asignee: '-',
                due: type === 'main' ? new Date() : '',
                type: type === 'main' ? 'todo' : 'adventure',
                difficulty: 'easy',
            }}
            validationSchema={questValidationSchema}
            onSubmit={async (values) => {
                if (type === 'adventure') {
                    dispatch(addAdventureQuest(values))
                }
                else if (type === 'main') {
                    handlePost(values)
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
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        value={values.name}
                                    />
                                    {touched.name && errors.name && <ErrorText text={errors.name} />}
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
                                            <DropDown value={values.due.toDateString()} onPress={() => setDateModalVisible(true)} />
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
                            due={values.due} />)}

                    </View>
                </TouchableWithoutFeedback>
            )}
        </Formik>
    )
}

export default QuestForm