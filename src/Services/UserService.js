import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import Config from '../Config/Config'

class UsuarioService{
    async login(data){
        return axios({
            url: Config.API_URL + "usuario/login",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            AsyncStorage.setItem("TOKEN", response.data.access_token)
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}

const UserService = new UserService()
export default UserService
