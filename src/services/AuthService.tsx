import axios from "axios"
import { User } from "../interfaces/types"

const loginService = async (userInfo:User) => {
    return(
        await axios.post('https://reqres.in/api/login', userInfo)
    )
}

export { loginService }