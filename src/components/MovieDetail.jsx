import { React, useState, useEffect } from 'react';
import { urlMovies } from '../endpoints';
import { urlGetImageMovies } from '../endpoints';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import axios from 'axios';

var token = window.localStorage.getItem('userstored');
const authAxios = axios.create({
  urlMovies,
  headers: { Authorization: `Bearer ${token}` },
});
const authAxiosImg = axios.create({
  urlGetImageMovies,
  headers: { Authorization: `Bearer ${token}` },
});

function MovieByname() {
  const { title } = useParams();
  const [pelicula, SetMovies] = useState([]);
  const [personaje, SetPersonajes] = useState([]);
  const [imagen, SetImagen] = useState();
  useEffect(() => {
    const getMovies = async () => {
      const response = await authAxios.get(urlMovies + `/${title} `);
      console.log(response.data.moviebydetails);

      SetMovies(response.data.moviebydetails);
      try {
        console.log(response.data.allcharactedlisted);
        SetPersonajes(response.data.allcharactedlisted);
      } catch (error) {
        console.log(error);
      }
    };
    const config = { responseType: 'blob' };

    const getImage = async () => {
      const response = await authAxiosImg.get(
        urlGetImageMovies + `/${title} `,
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
    getMovies();
  }, [title]);

  return (
    <div className='Nombre de Personajes:'>
      <li>Peliculas : </li>
      {pelicula.map((pel) => (
        <div key={pel.movieId}>
          <ul>
            <li>Nombre de Pelicula : {pel.titulo}</li>
            <li>Id de Pelicula : {pel.movieId}</li>
            <li>Imagen de Pelicula : {pel.imagen}</li>
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

export default MovieByname;
