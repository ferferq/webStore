import axios from 'axios';
import { CreateServerApi } from '..';
import { SearchMoviesUse } from './SearchMovie/SearchMoviesUseCase';

const apiMovie = new CreateServerApi(axios, {
  baseURL: `https://api.themoviedb.org/3`,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

export const apiSearchMovie = new SearchMoviesUse(apiMovie);