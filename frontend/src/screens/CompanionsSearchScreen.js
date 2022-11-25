import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import InputText from '../components/InputText'
import { usersSearchReq } from '../apis/getSearch.api'
import { Swipeable } from 'react-native-gesture-handler'
import CompanionsCard from '../components/CompanionsCard'
import { postInvite } from '../apis/postInvites.api'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/slices/userSlice'
import { destructureUser } from '../helpers/destructureUser'
import SwipableActionButton from '../components/SwipableActionButton'

const CompanionsSearchScreen = () => {
    const [search, setSearch] = useState('')
    const [users, setusers] = useState([])
    const dispatch = useDispatch()

    const InviteReq = async (id) => {
        const res = await postInvite(id)

        if (res.status === 200) {
            console.log(res.data)
            dispatch(setUser(destructureUser(res.data)))
        }
    }

    return (
        <View className='flex-1'>
            <View className='bg-primary p-6 pb-2 pt-0'>
                <Text className='text-white font-inter-medium text-lg'>Search:</Text>
                <InputText value={search} onChangeText={async (e) => {
                    setSearch(e)
                    const req = await usersSearchReq(search)
                    setusers(req.data)
                }} />
            </View>
            <View>
                {users?.map(user => <View key={user._id} className='my-2 bg-primary'>
                    <Swipeable
                        className='p-2'
                        renderRightActions={() =>
                            <SwipableActionButton color='bg-easy' title='+' onPress={() => InviteReq(user._id)} />
                        }
                    >
                        <CompanionsCard user={user} />
                    </Swipeable>
                </View>)}
            </View>
        </View>
    )
}

export default CompanionsSearchScreen