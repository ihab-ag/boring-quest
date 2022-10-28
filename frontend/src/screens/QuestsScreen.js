import { View, Text } from 'react-native'
import React from 'react'
import CustomHeader from '../components/CustomHeader'

const QuestsScreen = ({ navigation, route }) => {
    return (
        <View>
            <CustomHeader navigation={navigation} route={route} />
            <Text>QuestsScreen</Text>
        </View>
    )
}

export default QuestsScreen