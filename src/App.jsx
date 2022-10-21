import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CharacterList from './components/CharactersList';
import CharacterByname from './components/CharacterDetail';
import MovieHandled from './components/MovieListHandler';
import MovieByname from './components/MovieDetail';
import CharacterBySearch from './components/CharacterSearch';
import CharacterByResult from './components/CharacterFinded';
import MovieBySearch from './components/MovieSearch';
import MoviesByResult from './components/MovieFinded';
import CharacterPost from './components/CharacterInsert';
import MoviePost from './components/MovieInsert';
import DeleteCharacters from './components/CharacterDelete';
import DeleteMovies from './components/MovieDelete';
import MovieEdit from './components/MovieEdit';
import CharacterEdit from './components/CharacterEdit';
import LoginPost from './components/Auth';
import HomeDisplay from './components/HomeHandler';
function App() {
  return (
    <div className='App'>
      <HomeDisplay />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<CharacterList />} />
        <Route path='/characters/:name' element={<CharacterByname />} />
        <Route path='/get/imagecharacter/:name' element={<CharacterByname />} />
        <Route path='/search/characters' element={<CharacterBySearch />} />
        <Route
          path='/searchresult/characters'
          element={<CharacterByResult />}
        />
        <Route path='/new/characters' element={<CharacterPost />} />
        <Route path='/edit/characters/:id' element={<CharacterEdit />} />
        <Route path='/delete/characters' element={<DeleteCharacters />} />
        <Route path='/auth/login' element={<LoginPost />} />
        <Route path='/movies' element={<MovieHandled />} />
        <Route path='/movies/:title' element={<MovieByname />} />
        <Route path='/search/movies' element={<MovieBySearch />} />
        <Route path='/searchresult/movies' element={<MoviesByResult />} />
        <Route path='/new/movies' element={<MoviePost />} />
        <Route path='/edit/movies/:id' element={<MovieEdit />} />
        <Route path='/delete/movies' element={<DeleteMovies />} />
      </Routes>
    </div>
  );
}

export default App;
