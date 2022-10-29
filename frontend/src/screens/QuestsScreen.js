import { View, Text } from 'react-native'
import React from 'react'
import CustomHeader from '../components/CustomHeader'
import QuestsScreenTopSection from '../components/QuestsScreenTopSection'

const QuestsScreen = ({ navigation, route }) => {
    return (
        <>
            <CustomHeader navigation={navigation} route={route} />
            <QuestsScreenTopSection />
            <View className='flex-1 bg-screen-bg px-6'>
            </View>
        </>
    )
}

export default QuestsScreen