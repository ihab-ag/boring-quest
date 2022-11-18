import React from 'react'
import { Text } from 'react-native'
import ActivityGraph from '../components/ActivityGraph'
import CustomHeader from '../components/CustomHeader'
import DefaultScreen from '../layouts/DefaultScreen'

const StatisticsScreen = ({navigation, route}) => {
  return (
    <>
        <CustomHeader navigation={navigation} route={route} type='drawer' />
        <DefaultScreen>
            <ActivityGraph />
        </DefaultScreen>
    </>
  )
}

export default StatisticsScreen