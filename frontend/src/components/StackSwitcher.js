import React from 'react'
import { Drawer } from '../navigation/DrawerStack'
import LoginStack from '../navigation/LoginStack'
import { useSelector } from 'react-redux'

const StackSwitcher = () => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    
  return (
    isLoggedIn ? <Drawer /> : <LoginStack />
  )
}

export default StackSwitcher