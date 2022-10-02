import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://frontend-api-test-nultien.azurewebsites.net'
})

export default instance