import React from 'react'
import { View } from 'react-native'
import { Item } from '../components/ListPickerItem'
import ModalHeader from '../components/ModalHeader'
import QUEST_TYPES from '../constants/QuestTypes'
import ModalLayout from '../layouts/ModalLayout'

const QuestTypesModal = ({modalVisible, setModalVisible, setFieldValue, values }) => {
    return (
        <ModalLayout modalVisible={modalVisible} >
            <ModalHeader title='Set Type' onPress={() => setModalVisible(false)} />
            <View className='bg-white'>
            {
                QUEST_TYPES.map((item) => {
                    const backgroundColor = item.value === values.type ? 'bg-secondary' : 'bg-white'
                    const color = item.value === values.type ? 'text-white' : 'text-primary'

                    return (
                        <Item
                            item={item}
                            key={item.value}
                            onPress={() => {
                                setFieldValue('type', item.value)
                                setModalVisible(false)
                            }}
                            backgroundColor={backgroundColor}
                            textColor={color}
                        />
                    )
                }
                )
            }
            </View>
        </ModalLayout>
    )
}

export default QuestTypesModal