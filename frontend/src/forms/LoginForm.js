import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import LabelText from '../components/LabelText'
import InputText from '../components/InputText'
import Button from '../components/Button'
import { Formik } from 'formik'
import CheckBox from '../components/CheckBox'
import loginValidationSchema from './validation/loginvalidation'
import ErrorText from '../components/ErrorText'

const LoginForm = ({ navigation }) => {
    const [rememberMe, setRememberMe] = useState(false)
    return (
        <Formik
            initialValues={{
                username: '',
                password: ''
            }}
            validationSchema={loginValidationSchema}
            onSubmit={values => {
                console.log(values)
            }} >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View className='p-2'>
                        <View className='py-2 mt-2'>
                            <LabelText title='Username' color='text-primary' />
                            <InputText
                                placeholder='Username'
                                numberOfLines={1}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username} />
                        </View>
                        {touched.username && errors.username && <ErrorText text={errors.username} />}
                        <View className='py-2'>
                            <LabelText title='Password' color='text-primary' />
                            <InputText
                                placeholder='Password'
                                numberOfLines={1}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                password={true} />
                        </View>
                        {touched.password && errors.password && <ErrorText text={errors.password} />}
                        <CheckBox value={rememberMe} setValue={setRememberMe} />
                        <View className='flex-row flex-1 justify-between py-2 mt-2'>
                            <Button color='bg-secondary' title='SIGNUP' />
                            <View className='w-2' />
                            <Button color='bg-primary' title='LOGIN' onPress={handleSubmit} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            )}
        </Formik>
    )
}

export default LoginForm