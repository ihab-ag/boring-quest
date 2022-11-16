import { View, Modal } from 'react-native'
import React from 'react'

const ModalLayout = ({ modalVisible, children }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >
      <View className='flex-1 flex-row justify-center items-center p-6 bg-black/50'>
        <View className='flex-1 rounded'>
          {children}
        </View>
      </View>
    </Modal>
  )
}

export default ModalLayout