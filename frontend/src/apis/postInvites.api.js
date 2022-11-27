const { axiosPostReq } = require("./configs/axios.config");

const route = 'users/invites/'

export const postInvite = (data) => axiosPostReq(route+data, null)