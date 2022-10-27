import { useState, useEffect } from 'react';
import { urlGetImageMovies } from '../endpoints';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const authAxiosImg = axios.create({
  urlGetImageMovies,
  withCredentials: true,
  responseType: 'blob',
});

function MovieByImage() {
  const { title } = useParams();
  const [imagen, SetImagen] = useState();
  useEffect(() => {
    const getImage = async () => {
      const response = await authAxiosImg.get(urlGetImageMovies + `/${title} `);

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
  }, [title]);

  return imagen;
}

export default MovieByImage;
