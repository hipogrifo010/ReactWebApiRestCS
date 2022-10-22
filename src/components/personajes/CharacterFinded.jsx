import { urlSearchCharacters } from '../endpoints';
import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

var token = window.localStorage.getItem('userstored');
const authAxios = axios.create({
  urlSearchCharacters,
  headers: { Authorization: `Bearer ${token}` },
});

function CharacterByResult() {
  const [personaje, SetPersonaje] = useState([]);

  useEffect(() => {
    const currentURL = window.location.search;
    const getCharacters = async () => {
      console.log(urlSearchCharacters + currentURL);
      authAxios
        .get(urlSearchCharacters + currentURL)
        .then((res) => SetPersonaje(res.data));
    };
    getCharacters();
  }, []);

  return (
    <div className='Nombre de Personajes:'>
      <li>Personajes : </li>
      <ul type='Personaje'>
        <li>
          {personaje.map((per) => (
            <div key={per.characterId}>
              Nombre del Personaje : {per.nombre}
              Imagen : {per.imagen}
              id del Personaje : {per.characterId}
            </div>
          ))}
        </li>
      </ul>
      <ul>
        <Link to={`/search/characters`}>Regresar a Busqueda</Link>
      </ul>
    </div>
  );
}

export default CharacterByResult;
