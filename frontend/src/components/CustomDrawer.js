import { Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { SimpleLineIcons } from '@expo/vector-icons'
import DrawerTopSection from './DrawerTopSection'

const CustomDrawer = (props) => {
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
                onPress={() => props.navigation.navigate('login') }/>
        </>
    )
}

export default CustomDrawer