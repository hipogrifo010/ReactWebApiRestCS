import { React, useState } from 'react';

import { createSearchParams, useNavigate } from 'react-router-dom';

function MovieBySearch() {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [order, setOrder] = useState('');
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();

    const addName = [['name', name]];
    const addGenre = [['genre', genre]];
    const addOrder = [['order', order]];

    let params = [];
    if (name !== '') params = params.concat(addName);
    if (genre !== '') params = params.concat(addGenre);
    if (order === 'ASC' || order === 'DESC') params = params.concat(addOrder);

    navigate({
      pathname: '/searchresult/movies',
      search: `?${createSearchParams(params)}`,
    });
  };

  return (
    <div>
      <form onSubmit={register} className='Form'>
        <label>
          Titulo :
          <input
            value={name}
            onChange={(c) => setName(c.target.value)}
            type='text'
            placeholder='Nombre Del Personaje'
            className='form-control p-1
          shadow-sm mb-1'
          />
        </label>
      </form>
      <form onSubmit={register} className='Form2'>
        <label>
          Genero :
          <input
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            type='text'
            placeholder='Edad del personaje '
            className='form-control p-1
          shadow-sm mb-1'
          />
        </label>
      </form>
      <form onSubmit={register} className='Form3'>
        <label>
          Orden :
          <input
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            type='text'
            placeholder='Id de la pelicula'
            className='form-control p-1
          shadow-sm mb-1'
          />
        </label>
      </form>
      <p>Introduce los valores"(puedes agregar uno o mas a la vez)"</p>
      <button onClick={register}>Busqueda!</button>
    </div>
  );
}

export default MovieBySearch;
