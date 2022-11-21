const { axiosPostReq } = require("./configs/axios.config");

const route = 'adventures'

export const postAdventure = (data) => axiosPostReq(route, data)