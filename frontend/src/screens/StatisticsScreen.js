import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import ActivityGraph from '../components/ActivityGraph'
import BarGraph from '../components/BarGraph'
import CustomHeader from '../components/CustomHeader'
import StatsCard from '../components/StatsCard'
import DefaultScreen from '../layouts/DefaultScreen'

const StatisticsScreen = ({navigation, route}) => {
  const user = useSelector(state => state.user)
  const quests = useSelector(state => state.quests)
  return (
    <>
        <CustomHeader navigation={navigation} route={route} type='drawer' />
        <DefaultScreen>
            <StatsCard user={user} quests={quests} />
            <ActivityGraph name='Productivity'/>
            <BarGraph />
        </DefaultScreen>
    </>
  )
}

export default StatisticsScreen