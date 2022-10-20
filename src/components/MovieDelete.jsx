import { React, useState } from 'react';
import { urlDeleteMovies } from '../endpoints';
import axios from 'axios';

var token = window.localStorage.getItem('userstored');
const authAxios = axios.create({
  urlDeleteMovies,
  headers: { Authorization: `Bearer ${token}` },
});

function DeleteMovies() {
  const [id, setId] = useState([]);

  const deletemovies = async () => {
    const response = await authAxios.delete(urlDeleteMovies + `/${id}`);
    console.log(response.data);
  };

  return (
    <div className='Borrar pelicula:'>
      <ul>
        <form className='Form2'>
          <label>
            MovieID :
            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              type='text'
              placeholder='MovieId'
              className='form-control p-1
          shadow-sm mb-1'
            />
          </label>
        </form>
      </ul>
      <p>Introduce el movie Id de la pelicula a eliminar</p>
      <button onClick={deletemovies}>Busqueda!</button>
    </div>
  );
}

export default DeleteMovies;
