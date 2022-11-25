import { axiosPostReq } from "./configs/axios.config"

const route = 'auth/signup'

export const signupReq = (data) => axiosPostReq(route, data)