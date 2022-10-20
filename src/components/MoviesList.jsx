import { React, useState, useEffect } from 'react';
import { urlMovies } from '../endpoints';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

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
      <div>
        <ul>
          {movies.map((mov) => (
            <div key={uuidv4()}>
              <Link to={`/movies/${mov.titulo}`}>
                <li>{''}</li>
                <li>{mov.titulo}</li>
                <li>{mov.fechaDeCreacion}</li>
                <li>{mov.imagen}</li>
              </Link>
            </div>
          ))}
        </ul>
        <ul>
          <Link to={`/search/movies`}>Busqueda</Link>
        </ul>
        <ul>
          <Link to={`/new/movies`}>Nueva Pelicula</Link>
        </ul>
        <ul>
          <Link to={`/delete/movies`}>Borrar Personajes</Link>
        </ul>
      </div>
    </div>
  );
}

export default MovieList;
