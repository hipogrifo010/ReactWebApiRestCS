import { React } from 'react';
import MovieByname from './MovieDetail';
import MovieByImage from './MovieImage';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

function MovieDetailHandled() {
  const { pelicula, personaje } = MovieByname();
  const imagen = MovieByImage();
  return (
    <div className='Nombre de Personajes:'>
      <li>Peliculas : </li>
      {pelicula.map((pel) => (
        <div key={pel.movieId}>
          <ul>
            <li>Nombre de Pelicula : {pel.titulo}</li>
            <li>Fecha de Creacion : {pel.fechaDeCreacion}</li>
            <li>Calificacion : {pel.calificacion}</li>
            <li>Personajes asociados : {pel.personajesAsociados}</li>
            <li>id de Genero : {pel.genreId}</li>
          </ul>
        </div>
      ))}
      <li>Lista de Personajes : </li>
      <div>
        {' '}
        {personaje.map((per, index) => (
          <div key={index}>{per}</div>
        ))}
      </div>
      <ul>
        {pelicula.map((mov) => (
          <div key={uuidv4()}>
            <Link to={`/edit/movies/${mov.movieId}`}>Editar pelicula!</Link>
          </div>
        ))}
      </ul>
      <div>
        <ul>
          <img src={imagen} alt='Shrek' />
        </ul>
      </div>
    </div>
  );
}

export default MovieDetailHandled;
