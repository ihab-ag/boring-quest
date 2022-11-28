import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import LabelText from '../components/LabelText'
import InputText from '../components/InputText'
import Button from '../components/Button'
import { Formik } from 'formik'
import CheckBox from '../components/CheckBox'
import loginValidationSchema from './validation/loginValidation'
import ErrorText from '../components/ErrorText'
import { loginReq } from '../apis/login.api'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/slices/authSlice'
import { setMessage } from '../redux/slices/globalMessageSlice'
import { setUser } from '../redux/slices/userSlice'
import { destructureUser } from '../helpers/destructureUser'
import { setQuests, setData } from '../redux/slices/questsSlice'
import { mapQuestsToDays } from '../helpers/mapQuestToDays'
import * as SecureStore from 'expo-secure-store'
import { getQuestData } from '../helpers/getQuestData'

const LoginForm = ({ navigation }) => {

    const dispatch = useDispatch()
    // set notification token
    const token = useSelector(state => state.auth.token)

    const handleLogin = async (values) => {
        // send notification token with login credentials
        const res = await loginReq({ ...values, push_token: token })
        
        if (res.status === 200) {
            // store jwt 
            await SecureStore.setItemAsync('TOKEN', res.data.authorisation.token)

            const user_data = res.data.user

            dispatch(setUser(destructureUser(user_data)))
            // map quests and adventures to day
            let quests_map = mapQuestsToDays({}, user_data.quests)
            quests_map = mapQuestsToDays(quests_map, user_data.adventures)
            // sort quests data
            const quest_data = getQuestData(user_data.quests)

            dispatch(setQuests(quests_map))

            dispatch(setData(quest_data))

            dispatch(login())
        }
        else {
            dispatch(setMessage(true))
            setTimeout(()=>dispatch(setMessage(false)), 2000) 
        }
    }
    return (
        <Formik
            initialValues={{
                name: '-',
                username: '',
                password: ''
            }}
            validationSchema={loginValidationSchema}
            onSubmit={values => {
                handleLogin(values)
            }} >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View className='p-2'>
                        {/* username */}
                        <View className='py-2 mt-2'>
                            <LabelText title='Username' color='text-primary' />
                            <InputText
                                numberOfLines={1}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                                login={true} />
                        </View>
                        {touched.username && errors.username && <ErrorText text={errors.username} />}
                        {/* password */}
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
                        {/* signup and login buttons */}
                        <View className='flex-row flex-1 justify-between py-2 mt-2'>
                            <Button color='bg-secondary' title='SIGNUP' onPress={() => navigation.navigate('Sign Up')} />
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