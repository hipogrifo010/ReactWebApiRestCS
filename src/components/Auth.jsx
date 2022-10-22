import { React, useState } from 'react';
import { urlAuth } from './endpoints';
import axios from 'axios';

function LoginPost() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const insert = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        urlAuth + `/login`,

        {
          email,
          password,
        },
        { withCredentials: true }
      );

      console.log(response);
    } catch (error) {
      console.log(error.data);
    }
  };

  return (
    <div>
      <form className='Form2'>
        <label>
          email:
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            placeholder='email'
            className='form-control p-1
          shadow-sm mb-1'
          />
        </label>
      </form>
      <form className='Form3'>
        <label>
          password :
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='text'
            placeholder='password'
            className='form-control p-1
          shadow-sm mb-1'
          />
        </label>
      </form>

      <p>
        Introduce los valores"(puedes agregar uno o mas a la vez , @nova321S)"
      </p>
      <button onClick={insert}>Crear Nuevo!</button>
    </div>
  );
}

export default LoginPost;
