import { useState, useEffect } from 'react';
import { urlMovies } from '../endpoints';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieByname() {
  const { title } = useParams();
  const [pelicula, SetMovies] = useState([]);
  const [personaje, SetPersonajes] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(urlMovies + `/${title} `, {
        withCredentials: true,
      });

      SetMovies(response.data.moviebydetails);
      try {
        SetPersonajes(response.data.allcharactedlisted);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, [title]);

  let data = { pelicula, personaje };

  return data;
}

export default MovieByname;
