import { React, useState, useEffect } from 'react';
import { urlMovies } from '../endpoints';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MovieListOptions from './MovieListOptions';

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
    SetMovies(response.data);
  };
  return (
    <div className='MovieResult'>
      {movies.map((mov) => (
        <div key={uuidv4()}>
          <Link to={`/movies/${mov.titulo}`}>
            <li>{mov.titulo}</li>
          </Link>
          <li>{mov.fechaDeCreacion}</li>
          <img
            style={{ width: 200, height: 300 }}
            src={require('./Imgs/' + mov.imagen)}
            className='ImgMovie'
            alt='imagen'
          />
          <ul>{''}</ul>
        </div>
      ))}
      <MovieListOptions />
    </div>
  );
}
export default MovieList;
