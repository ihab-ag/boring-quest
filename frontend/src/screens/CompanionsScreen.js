import React from 'react'
import CustomHeader from '../components/CustomHeader'
import { useDispatch, useSelector } from 'react-redux'
import { Swipeable } from 'react-native-gesture-handler'
import { View } from 'react-native'
import CompanionsSearchScreen from './CompanionsSearchScreen'
import { postInvite } from '../apis/postInvites.api'
import { setUser } from '../redux/slices/userSlice'
import { destructureUser } from '../helpers/destructureUser'
import { deleteFriend } from '../apis/deleteFriend.api'
import CompanionsSection from '../components/CompanionsSection'
import InvitesSection from '../components/InvitesSection'

const CompanionsScreen = ({ navigation, route }) => {

    const user = useSelector(state => state.user)
    const companions = user.companions
    const invites = user.invites
    const guilds = user.guilds
    const dispatch = useDispatch()

    const inviteReq = async (id) => {
        const res = await postInvite(id)

        if (res.status === 200) {
            
            dispatch(setUser(destructureUser(res.data)))
        }
    }
    const deleteReq = async (id) => {
        const res = await deleteFriend(id)

        if (res.status === 200) {
            dispatch(setUser(destructureUser(res.data)))
        }

    }


    return (
        <>
            <CustomHeader navigation={navigation} route={route} type='drawer' />
            <Swipeable
                renderRightActions={() => <CompanionsSearchScreen />}
                containerStyle={{
                    flex: 1,
                    justifyContent: 'flex-start'
                }}
            >
                <View className='h-full bg-white'>
                <CompanionsSection companions={companions} guilds={guilds} deleteReq={deleteReq} />
                <InvitesSection invites={invites} inviteReq={inviteReq} deleteReq={deleteReq} />
                </View>
            </Swipeable>
        </>
    )
}

export default CompanionsScreen