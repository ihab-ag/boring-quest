import { View, Text } from 'react-native'
import React from 'react'
import ModalLayout from '../layouts/ModalLayout'
import ModalHeader from '../components/ModalHeader'
import { Item } from '../components/ListPickerItem'

const AssigneeModal = ({ modalVisible, setModalVisible, setFieldValue, companions, values }) => {
    return (
        <ModalLayout modalVisible={modalVisible} >
            <ModalHeader title='Assign User' onPress={() => setModalVisible(false)} />
            <View className='bg-white'>
                {
                    companions.map((user) => {
                        const backgroundColor = user._id === values.assignee_id ? 'bg-secondary' : 'bg-white'
                        const color = user._id === values.assignee_id ? 'text-white' : 'text-primary'

                        return (
                            <Item
                                item={user}
                                key={user._id}
                                onPress={() => {
                                    setFieldValue('assignee_id', user._id)
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

export default AssigneeModal