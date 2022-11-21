import { View, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LabelText from '../components/LabelText'
import InputText from '../components/InputText'
import Button from '../components/Button'
import { Formik } from 'formik'
import loginValidationSchema from './validation/loginValidation'
import ErrorText from '../components/ErrorText'
import Tab from './Tab'

const SignUpForm = ({ navigation }) => {
    return (
        <Formik
            initialValues={{
                username: '',
                password: '',
                name: '',
                type: 'adventurer'
            }}
            validationSchema={loginValidationSchema}
            onSubmit={values => {
                console.log(values)
            }} >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View className='p-2'>
                        <View className='py-2 mt-2'>
                            <LabelText title='Name' color='text-primary' />
                            <InputText
                                numberOfLines={1}
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                                login={true} />
                        </View>
                        {touched.name && errors.name && <ErrorText text={errors.name} />}
                        <View className='py-2'>
                            <LabelText title='Username' color='text-primary' />
                            <InputText
                                numberOfLines={1}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                                login={true} />
                        </View>
                        {touched.username && errors.username && <ErrorText text={errors.username} />}
                        <View className='py-2'>
                            <LabelText title='Password' color='text-primary' />
                            <InputText
                                numberOfLines={1}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                password={true}
                                login={true} />
                        </View>
                        {touched.password && errors.password && <ErrorText text={errors.password} />}
                        <View className='mt-2' >
                            <LabelText title='Type' color='text-primary' />
                            <View className='flex-row mt-2 flex-1'>
                                <Tab title='Adventurer' onPress={() => setFieldValue('type', 'adventurer')} selected={values.type === 'adventurer'} />
                                <View className='w-1' />
                                <Tab title='Guild' onPress={() => setFieldValue('type', 'guild')} selected={values.type === 'guild'} />
                            </View>
                        </View>
                        <View className='flex-1 justify-between mt-2'>
                            <Button color='bg-primary' title='SIGNUP' onPress={handleSubmit} />
                            <View className='h-2' />
                            <Button color='bg-secondary' title='RUN AWAY' onPress={() => navigation.goBack()} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            )}
        </Formik>
    )
}

export default SignUpForm