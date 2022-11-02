import { View, FlatList } from 'react-native'
import React from 'react'
import getMonthDaysArray from '../helpers/getMonthDaysArray'
import DayTab from './DayTab'


const DaysSlider = ({dispatch, days, day}) => {
    

    const renderDay = ({ item }) => {
        const backgroundColor = item === day ? 'bg-secondary' : 'bg-primary'

        return (
            <DayTab
                day={item}
                onPress={() => {
                    dispatch(item)
                }}
                backgroundColor={backgroundColor}
            />
        )
    }

    return (
        <View className='mt-2'>
            <FlatList
                data={getMonthDaysArray(days)}
                renderItem={renderDay}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default DaysSlider