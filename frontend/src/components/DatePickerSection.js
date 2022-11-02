import { Text, View } from 'react-native'
import React, { useState } from 'react'
import DropDown from './DropDown'
import SectionTitleText from './SectionTitleText'
import MonthYearPickerModal from './MonthYearPickerModal'
import DaysSlider from './DaysSlider'
import { useDispatch, useSelector } from 'react-redux'
import { setDay } from '../redux/slices/dateSlice'
 

const DatePickerSection = () => {

    const { day, days } = useSelector(state => state.date)
    const dispatch = useDispatch()
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View className='mt-4' >
            <View className='flex-row justify-between items-center'>
                <SectionTitleText>Your <Text className='font-inter'>Calender</Text></SectionTitleText>
                <DropDown onPress={() => setModalVisible(true)} />
            </View>
            <DaysSlider dispatch={(item) => dispatch(setDay(item))} day={day} days={days} />
            <MonthYearPickerModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible} />
        </View>
    )
}


export default DatePickerSection