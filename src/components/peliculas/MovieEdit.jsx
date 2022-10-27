import { React } from 'react';
import { urlEditMovies } from '../endpoints';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import EditForm from './MovieEditRequest';

function MovieEdit() {
  const { render, payloader } = EditForm();

  const { id } = useParams();
  const transferValueee = (e) => {
    let payload = payloader;
    e.preventDefault();

    try {
      axios.put(urlEditMovies + `/${id}`, payload, { withCredentials: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='parentEditMovie'>{render}</div>
      <button onClick={transferValueee}>Crear Nuevo!</button>
    </div>
  );
}

export default MovieEdit;
