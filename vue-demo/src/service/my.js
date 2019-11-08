import axios from "axios"

export let login =params=>{
    return axios.post("/api/user/login",params)
}
export let register=params=>{
    return axios.post("/api/user/register",params)
}
export let loginUser=params=>{
    return axios.get("/api/user/loginUser",params)
}