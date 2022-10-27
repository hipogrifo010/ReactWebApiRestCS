import { React, useState } from 'react';

function EditForm() {
  const [titulo, setTitulo] = useState(['']);
  const [fechaDeCreacion, setFechaDeCreacion] = useState(['']);
  const [calificacion, setCalificacion] = useState(['']);
  const [personajesAsociados, setPersonajesAsociados] = useState(['']);
  const [genreId, setGenreId] = useState(['']);
  let payloader = {
    titulo,
    fechaDeCreacion,
    calificacion,
    personajesAsociados,
    genreId,
  };

  return {
    payloader,
    render: (
      <div>
        <form type='text' className='formControl'>
          <label>
            Titulo:
            <input value={titulo} onChange={(e) => setTitulo(e.target.value)} />
          </label>
          <label>
            FechaDeCreacion:
            <input
              value={fechaDeCreacion}
              onChange={(e) => setFechaDeCreacion(e.target.value)}
            />
          </label>
          <label>
            Calificacion :
            <input
              value={calificacion}
              onChange={(c) => setCalificacion(c.target.value)}
            />
          </label>
          <label>
            Personajes Asociados :
            <input
              value={personajesAsociados}
              onChange={(e) => setPersonajesAsociados(e.target.value)}
            />
          </label>
          <label>
            GenreId :
            <input
              value={genreId}
              onChange={(e) => setGenreId(e.target.value)}
            />
          </label>
        </form>
        <p>Introduce los valores"(puedes agregar uno o mas a la vez)"</p>
      </div>
    ),
  };
}
export default EditForm;
