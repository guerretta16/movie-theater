import axios from "axios"
import { User } from "../interfaces/types"

function loginService (userInfo:User){
    return(
        axios.post('https://reqres.in/api/login', userInfo)
    )
}

export { loginService }