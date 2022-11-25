import { View, Text, TextInput } from 'react-native'
import React from 'react'

const InputText = ({ placeholder, numberOfLines, onChangeText, onBlur, value, password = false, login = false }) => {
    return (
        <TextInput
            className={`px-2 pt-1 border-2 border-secondary text-secondary rounded-sm mt-2 w-full bg-white placeholder:text-lg ${login && 'border-0 border-b-2 border-primary'}`}
            placeholder={placeholder}
            textAlignVertical='top'
            cursorColor='#118AB2'
            multiline={!password}
            numberOfLines={numberOfLines}
            onChangeText={onChangeText}
            onBlur={onBlur}
            value={value}
            secureTextEntry={password}
        />
    )
}

export default InputText