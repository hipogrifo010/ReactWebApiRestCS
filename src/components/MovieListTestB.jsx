import { Link } from 'react-router-dom';
import { React, Fragment } from 'react';

function MovieListTest() {
  return (
    <Fragment>
      <div>
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
    </Fragment>
  );
}
export default MovieListTest;
