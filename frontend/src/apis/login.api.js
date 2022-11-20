import { axiosPostReq } from "./configs/axios.config"

const route = 'auth/login'

export const loginReq = (data) => axiosPostReq(route, data)