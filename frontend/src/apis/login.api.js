const { axiosPostReq } = require("./configs/axios.config");

const route = 'auth/login'

export const loginReq = (data) => axiosPostReq(route, data)