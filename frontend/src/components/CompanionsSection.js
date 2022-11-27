import { View, Text } from 'react-native'
import React from 'react'
import { Swipeable } from 'react-native-gesture-handler'
import SwipableActionButton from './SwipableActionButton'
import CompanionsCard from './CompanionsCard'
import SectionTitleText from './SectionTitleText'
import EmptyState from './EmptyState'

const CompanionsSection = ({ companions, guilds, deleteReq }) => {
    return (
        <View className='bg-white'>
            <View className='px-6 pt-2' >
                <SectionTitleText>Adventurers</SectionTitleText>
            </View>
            {companions.length === 0 ?
                <View className='px-6'>
                    <EmptyState />
                </View>
                :
                companions.map(user =>
                    <View key={user._id} className='my-2 bg-primary'>
                        <Swipeable
                            className='p-2'
                            renderRightActions={() => <SwipableActionButton color='bg-hard' title='-' onPress={() => deleteReq(user._id)} />}
                        >
                            <CompanionsCard user={user} />
                        </Swipeable>
                    </View>)}
            <View className='px-6 pt-2' >
                <SectionTitleText>Guilds:</SectionTitleText>
            </View>
            {guilds.length === 0 ?
                <View className='px-6'>
                    <EmptyState />
                </View>
                : guilds.map(user =>
                    <View key={user._id} className='my-2 bg-primary'>
                        <Swipeable
                            className='p-2'
                            renderRightActions={() => <SwipableActionButton color='bg-hard' title='-' onPress={() => deleteReq(user._id)} />}
                        >
                            <CompanionsCard user={user} />
                        </Swipeable>
                    </View>)}
        </View>
    )
}

export default CompanionsSection