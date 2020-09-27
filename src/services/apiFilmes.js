import axios from 'axios';

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'content-type': 'application/json;charset-utf-8',
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTAwYjZhNzA0OGE1NjM2NmJhNWI0MmQ2ZmVlYjQ5ZSIsInN1YiI6IjVmNzA5YTQzM2RkMTI2MDAzNzY1MzI0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZWL-eEisqeS0qXdldfEz6_uHNl8IBqRRODbc-_-fgxg'
    }
})

export default apiFilmes