import { React, useState } from 'react';
import { urlDeleteMovies } from '../endpoints';
import axios from 'axios';

function DeleteMovies() {
  const [id, setId] = useState([]);

  const deletemovies = async () => {
    const response = await axios.delete(urlDeleteMovies + `/${id}`, {
      withCredentials: true,
    });
    console.log(response.data);
  };

  return (
    <div className='Borrar pelicula:'>
      <ul>
        <label>
          MovieID :
          <input value={id} onChange={(e) => setId(e.target.value)} />
        </label>
      </ul>
      <p>Introduce el movie Id de la pelicula a eliminar</p>
      <button onClick={deletemovies}>Busqueda!</button>
    </div>
  );
}

export default DeleteMovies;
