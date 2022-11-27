import * as Notifications from 'expo-notifications'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setToken } from '../redux/slices/authSlice'


Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true
    }),
  })

const AppNotifications = () => {
    
    const dispatch = useDispatch()
    async function registerForPushNotificationsAsync() {
        let token

        const { status: existingStatus } = await Notifications.getPermissionsAsync()
        let finalStatus = existingStatus

        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync()
            finalStatus = status
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!')
            return
        }
        token = (await Notifications.getExpoPushTokenAsync()).data
        
        dispatch(setToken(token))
        return token
    }
        useEffect(() => {
            registerForPushNotificationsAsync()
        }, [])
        return (
            <></>
        )
}

        export default AppNotifications