import { React, useState, useEffect } from 'react';
import { urlCharacters } from '../endpoints';
import { urlGetImageCharacters } from '../endpoints';
import { useParams, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

var token = window.localStorage.getItem('userstored');
const authAxios = axios.create({
  urlCharacters,
  headers: { Authorization: `Bearer ${token}` },
  withCredentials: true,
});

const authAxiosImg = axios.create({
  urlGetImageCharacters,
  headers: { Authorization: `Bearer ${token}` },
  withCredentials: true,
});

function CharacterByname() {
  const { name } = useParams();
  const [personaje, SetPersonaje] = useState([]);
  const [imagen, SetImagen] = useState();

  useEffect(() => {
    const getCharacters = async () => {
      const response = await authAxios.get(urlCharacters + `/${name} `);
      console.log(response.data);
      SetPersonaje(response.data);
    };

    const config = { responseType: 'blob' };

    const getImage = async () => {
      const response = await authAxiosImg.get(
        urlGetImageCharacters + `/${name} `,
        config
      );

      var linked = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = linked;
      //link.setAttribute('name', '.jpg'); // sepuede usar para descargar...
      document.body.appendChild(link);
      //link.click(); //se puede usar para descargar...
      console.log(document.body.appendChild(link));
      SetImagen(document.body.appendChild(link));
    };

    getImage();
    getCharacters();
  }, [name]);

  return (
    <div className='Nombre de Personajes:'>
      <li>Personajes : </li>
      <ul type='Personaje'>
        <li>
          {personaje.map((per, index) => (
            <div key={index}>
              Nombre del Personaje : {per.nombre}
              Edad del Personaje : {per.edad}
              Imagen : {per.imagen}
              id del Personaje : {per.characterId}
              Historia del Personaje : {per.historia}
              Peso del Personaje : {per.peso}
              Id de la Pelicula : {per.movieId}
              Pelicula : {per.titulo}
            </div>
          ))}
        </li>
      </ul>
      <div>
        <ul>
          {personaje.map((mov) => (
            <div key={uuidv4()}>
              <Link to={`/edit/characters/${mov.characterId}`}>
                Editar personaje!
              </Link>
            </div>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          <img src={imagen} alt='Shrek' />
        </ul>
      </div>
    </div>
  );
}

export default CharacterByname;
