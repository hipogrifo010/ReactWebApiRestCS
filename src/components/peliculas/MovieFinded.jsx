import { urlSearchMovies } from '../endpoints';
import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

var token = window.localStorage.getItem('userstored');
const authAxios = axios.create({
  urlSearchMovies,
  headers: { Authorization: `Bearer ${token}` },
});

function MoviesByResult() {
  const [pelicula, SetPersonaje] = useState([]);

  useEffect(() => {
    const currentURL = window.location.search;
    const getMovies = async () => {
      console.log(urlSearchMovies + currentURL);
      authAxios
        .get(urlSearchMovies + currentURL)
        .then((res) => SetPersonaje(res.data));
    };
    getMovies();
  }, []);

  return (
    <div className='Nombre de Peliculas:'>
      <li>Pelicula : </li>
      <ul type='Personaje'>
        <li>
          {pelicula.map((per) => (
            <div key={uuidv4}>
              Titulo : {per.titulo}
              Genero : {per.genreId}
            </div>
          ))}
        </li>
      </ul>
      <ul>
        <Link to={`/search/movies`}>Regresar a Busqueda</Link>
      </ul>
    </div>
  );
}

export default MoviesByResult;
