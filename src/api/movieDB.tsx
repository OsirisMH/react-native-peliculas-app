import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '368ff84de0f65ddbf8b5df98e3ede192',
    language: 'es-ES',
  }
});

export default movieDB;
