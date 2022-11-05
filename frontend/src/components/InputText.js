import { View, Text, TextInput } from 'react-native'
import React from 'react'

const InputText = ({ placeholder, numberOfLines, onChangeText, onBlur, value }) => {
    return (
        <TextInput
            className='px-2 pt-1 border-2 border-secondary text-secondary rounded-sm mt-2 w-full bg-white placeholder:text-xl'
            placeholder={placeholder}
            textAlignVertical='top'
            cursorColor='#118AB2'
            multiline={true}
            numberOfLines={numberOfLines}
            onChangeText={onChangeText}
            onBlur={onBlur}
            value={value}
        />
    )
}

export default InputText