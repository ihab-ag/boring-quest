import { Text, View } from 'react-native'
import React, { useState } from 'react'
import DropDown from './DropDown'
import SectionTitleText from './SectionTitleText'
import MonthYearPickerModal from '../modals/MonthYearPickerModal'
import DaysSlider from './DaysSlider'
import { useDispatch, useSelector } from 'react-redux'
import { setDay } from '../redux/slices/dateSlice'
import MONTHS from '../constants/Months'


const DatePickerSection = () => {

    const { day, days, month } = useSelector(state => state.date)
    const dispatch = useDispatch()
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View className='mt-4' >
            <View className='flex-row justify-between items-center'>
                <SectionTitleText>Your <Text className='font-inter'>Calender</Text></SectionTitleText>
                <DropDown onPress={() => setModalVisible(true)} value={MONTHS[month - 1].name} />
            </View>
            <DaysSlider dispatch={(item) => dispatch(setDay(item))} day={day} days={days} />
            <MonthYearPickerModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible} />
        </View>
    )
}


export default DatePickerSection