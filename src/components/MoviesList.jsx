import { React, useState, useEffect } from 'react';
import { urlMovies } from '../endpoints';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import MovieListTest from './MovieListTestB';

var token = window.localStorage.getItem('userstored');
const authAxios = axios.create({
  urlMovies,
  headers: { Authorization: `Bearer ${token}` },
});
function MovieList() {
  const [movies, SetMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const response = await authAxios.get(urlMovies);
    console.log(response.data);
    SetMovies(response.data);
  };
  return (
    <div>
      {movies.map((mov) => (
        <div key={uuidv4()}>
          <Link to={`/movies/${mov.titulo}`}>
            <ul> {''}</ul>
            <li>{mov.titulo}</li>
            <li>{mov.fechaDeCreacion}</li>
            <li>{mov.imagen}</li>
          </Link>
        </div>
      ))}
      <MovieListTest />
    </div>
  );
}
export default MovieList;
