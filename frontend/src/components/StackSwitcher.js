import React from 'react'
import { Drawer } from '../navigation/DrawerStack'
import LoginStack from '../navigation/LoginStack'
import { useSelector } from 'react-redux'
import MessageFloater from './MessageFloater'
import { Text } from 'react-native'

const StackSwitcher = () => {
    const globalMessageStatus = useSelector(state => state.globalMessage.status)
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    
  return (
    <>
    {globalMessageStatus && <MessageFloater />}
    {isLoggedIn ? <Drawer /> : <LoginStack />}
    </>
  )
}

export default StackSwitcher