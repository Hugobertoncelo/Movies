import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'c275101533b14c318ef644c34a923425',
    language: 'pt-BR',
    page: 1
  }
})

export default api
