import axios from 'axios';

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {

    }
})

export default apiFilmes