import { Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { SimpleLineIcons } from '@expo/vector-icons'
import DrawerTopSection from './DrawerTopSection'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/slices/authSlice'

const CustomDrawer = (props) => {

    const dispatch = useDispatch()
    return (
        <>
            <DrawerTopSection />
            <DrawerContentScrollView {...props} >
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <DrawerItem
                label={() => (
                    <Text className='font-inter-medium text-hard text-lg -ml-4 p-1' >Logout</Text>)
                }
                icon={() => (
                    <SimpleLineIcons name="logout" size={24} color="#EF476F" />)
                }
                onPress={() => dispatch(logout()) }/>
        </>
    )
}

export default CustomDrawer