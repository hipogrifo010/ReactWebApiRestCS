import { React, useState } from 'react';
import { urlNewMovies } from '../endpoints';
import axios from 'axios';

function MoviePost() {
  const [titulo, setTitulo] = useState(['']);
  const [imagen, setImagen] = useState(['']);
  const [fechaDeCreacion, setFechaDeCreacion] = useState(['']);
  const [calificacion, setCalificacion] = useState(['']);
  const [personajesAsociados, setPersonajesAsociados] = useState(['']);
  const [genreId, setGenreId] = useState(['']);

  const insert = async (e) => {
    e.preventDefault();
    let payload = {
      movieId: 0,
      titulo,
      imagen,
      fechaDeCreacion,
      calificacion,
      personajesAsociados,
      genreId,
    };
    try {
      const response = await axios.post(urlNewMovies, payload, {
        withCredentials: true,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className='Form'>
        <label>
          Titulo:
          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            type='text'
            placeholder='Titulo de la pelicula'
            className='form-control p-1
          shadow-sm mb-1'
          />
        </label>
      </form>
      <form className='Form2'>
        <label>
          Imagen :
          <input
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            type='text'
            placeholder='Imagen'
            className='form-control p-1
          shadow-sm mb-1'
          />
        </label>
      </form>
      <form className='Form3'>
        <label>
          FechaDeCreacion :
          <input
            value={fechaDeCreacion}
            onChange={(e) => setFechaDeCreacion(e.target.value)}
            type='text'
            placeholder='Fecha De Creacion'
            className='form-control p-1
          shadow-sm mb-1'
          />
        </label>
      </form>
      <form className='Form4'>
        <label>
          Calificacion :
          <input
            value={calificacion}
            onChange={(c) => setCalificacion(c.target.value)}
            type='text'
            placeholder='Calificacion de la pelicula'
            className='form-control p-1
          shadow-sm mb-1'
          />
        </label>
      </form>
      <form className='Form5'>
        <label>
          Personajes Asociados :
          <input
            value={personajesAsociados}
            onChange={(e) => setPersonajesAsociados(e.target.value)}
            type='text'
            placeholder='Personajes Asociados '
            className='form-control p-1
          shadow-sm mb-1'
          />
        </label>
      </form>
      <form className='Form5'>
        <label>
          GenreId :
          <input
            value={genreId}
            onChange={(e) => setGenreId(e.target.value)}
            type='text'
            placeholder='GenreId '
            className='form-control p-1
          shadow-sm mb-1'
          />
        </label>
      </form>

      <p>Introduce los valores"(puedes agregar uno o mas a la vez)"</p>
      <button onClick={insert}>Crear Nuevo!</button>
    </div>
  );
}

export default MoviePost;
