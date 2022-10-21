import { useState, useEffect } from 'react';
import { urlMovies } from '../endpoints';

import axios from 'axios';

var token = window.localStorage.getItem('userstored');
const authAxios = axios.create({
  urlMovies,
  headers: { Authorization: `Bearer ${token}` },
});

function useMovieList() {
  const [movies, SetMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const response = await authAxios.get(urlMovies);
    SetMovies(response.data);
  };

  return [movies];
}
export default useMovieList;
