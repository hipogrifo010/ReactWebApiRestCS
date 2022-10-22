import { React, useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

function CharacterBySearch() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [movies, setMovies] = useState('');
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();

    const addName = [['name', name]];
    const addAge = [['age', age]];
    const addMovies = [['movies', movies]];

    let params = [];
    if (name !== '') params = params.concat(addName);
    if (age !== '') params = params.concat(addAge);
    if (movies !== '') params = params.concat(addMovies);

    navigate({
      pathname: '/searchresult/characters',
      search: `?${createSearchParams(params)}`,
    });
  };

  return (
    <div>
      <form onSubmit={register} className='Form'>
        <label>
          Nombre:
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
          Edad:
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type='text'
            placeholder='Edad del personaje '
            className='form-control p-1
          shadow-sm mb-1'
          />
        </label>
      </form>
      <form onSubmit={register} className='Form3'>
        <label>
          Id Titulo:
          <input
            value={movies}
            onChange={(e) => setMovies(e.target.value)}
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

export default CharacterBySearch;
