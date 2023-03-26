import api from "../api";

const URLS={
    GET_TOP_USERS:'/get/users/top3'
}
export const getUsers=()=>{
    return  api.get(URLS.GET_TOP_USERS).then((response)=>{
        return response?.data?.topUsers
     });
      
}

