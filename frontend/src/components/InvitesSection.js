import { View, Text } from 'react-native'
import React from 'react'
import { Swipeable } from 'react-native-gesture-handler'
import SwipableActionButton from './SwipableActionButton'
import CompanionsCard from './CompanionsCard'
import SectionTitleText from './SectionTitleText'
import EmptyState from './EmptyState'

const InvitesSection = ({ invites, inviteReq, deleteReq }) => {
    return (
        <View className='bg-white'>
            <View className='px-6 pt-2' >
                <SectionTitleText>Invites:</SectionTitleText>
            </View>
            {
                invites.length === 0 ?
                    <View className='px-6'>
                        <EmptyState />
                    </View>
                    : invites.map(user =>
                        <View key={user._id} className='my-2 bg-primary'>
                            <Swipeable
                                className='p-2'
                                renderRightActions={() =>
                                    <>
                                        <SwipableActionButton color='bg-easy' title='+' onPress={() => inviteReq(user._id)} />
                                        <SwipableActionButton color='bg-hard' title='-' onPress={() => deleteReq(user._id)} />
                                    </>}
                            >
                                <CompanionsCard user={user} />
                            </Swipeable>
                        </View>)}
        </View>
    )
}

export default InvitesSection