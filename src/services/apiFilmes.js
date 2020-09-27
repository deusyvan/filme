import axios from 'axios';

const apiFilmes = axios.create({
    baseURL: '',
    headers: {
        
    }
})

export default apiFilmes