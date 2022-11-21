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
import { login, setToken } from '../redux/slices/authSlice'
import { setMessage } from '../redux/slices/globalMessageSlice'
import { setUser } from '../redux/slices/userSlice'
import { destructureUser } from '../helpers/destructureUser'
import { setQuests } from '../redux/slices/questsSlice'
import { mapQuestsToDays } from '../helpers/mapQuestToDays'
import * as SecureStore from 'expo-secure-store';

const LoginForm = ({ navigation }) => {


    const [rememberMe, setRememberMe] = useState(false)

    const dispatch = useDispatch()

    const handleLogin = async (values) => {

        const res = await loginReq(values)
        
        if (res.status === 200) {
            await SecureStore.setItemAsync('TOKEN', res.data.authorisation.token)
            console.log(res.data.authorisation.token)

            const user_data = res.data.user

            dispatch(setUser(destructureUser(user_data)))

            let quests_map = mapQuestsToDays({}, user_data.quests)
            quests_map = mapQuestsToDays(quests_map, user_data.adventures)

            dispatch(setQuests(quests_map))

            dispatch(login())
        }
        else {
            dispatch(setMessage('login error'))
        }
    }
    return (
        <Formik
            initialValues={{
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
                        <CheckBox value={rememberMe} setValue={setRememberMe} />
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