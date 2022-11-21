import axios from "axios"
import * as SecureStore from 'expo-secure-store'

export const BASE_URL = 'http://192.168.1.102:8000/'


export const axiosPostReq = async (route, data) => {
    const TOKEN = await SecureStore.getItemAsync('TOKEN') || null

    try {
        return await axios.post(BASE_URL + route, data, {
            headers: {
                'Authorization': `Bearer ${TOKEN}`
            }
        })
    } catch (error) {
        return error
    }
}

export const axiosPutReq = async (route, data) => {
    const TOKEN = await SecureStore.getItemAsync('TOKEN') || null
    
    try {
        return await axios.put(BASE_URL + route, data, {
            headers: {
                'Authorization': `Bearer ${TOKEN}`
            }
        })
    } catch (error) {
        return error
    }
}

export const axiosDeleteReq = async (route) => {
    const TOKEN = await SecureStore.getItemAsync('TOKEN') || null
    
    try {
        return await axios.delete(BASE_URL + route, {
            headers: {
                'Authorization': `Bearer ${TOKEN}`
            }
        })
    } catch (error) {
        return error
    }
}
