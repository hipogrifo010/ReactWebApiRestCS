import { useState, useEffect } from 'react';
import { urlMovies } from '../endpoints';
import userAuth from '../AuthTokenHandler';
import axios from 'axios';
const authAxios = userAuth();
function useMovieList() {
  const [movies, SetMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const response = await axios.get(urlMovies, { withCredentials: true });
    SetMovies(response.data);
  };

  return [movies];
}
export default useMovieList;
