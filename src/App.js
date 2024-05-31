import './App.css';
import React from 'react';
import Panels from "./Pages/Home";
import Helo from './Pages/Signin';
import Login from './Pages/Login';
import { Route,Routes } from 'react-router-dom';
import Movie from './Pages/movie';
import Movie2 from "./Pages/movie2";
import Movie3 from "./Pages/movie3";
import Movie4 from "./Pages/movie4";
import Movie5 from "./Pages/movie5";
import Movie6 from "./Pages/movie6";
import Movie7 from './Pages/movie7';
import Movie8 from './Pages/movie8';
import Movie9 from './Pages/movie9';
import Movie10 from './Pages/movie10';
import Video from './Pages/video';
import Category from './Pages/Categories';
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Panels />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/Signin" element={<Helo />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/video" element={<Video />} />
        <Route path="/movie2" element={<Movie2 />} />
        <Route path="/movie3" element={<Movie3 />} />
        <Route path="/movie4" element={<Movie4 />} />
        <Route path="/movie5" element={<Movie5 />} />
        <Route path="/movie6" element={<Movie6 />} />
        <Route path="/movie7" element={<Movie7 />} />
        <Route path="/movie8" element={<Movie8 />} />
        <Route path="/movie9" element={<Movie9 />} />
        <Route path="/movie10" element={<Movie10 />} />
        <Route path="/category" element={<Category />} />
        <Route path="/login" element={<Login />}/>
      </Routes>
    </>
  );
}

export default App;
