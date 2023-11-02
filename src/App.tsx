import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/Home';
import { Routes, Route, NavLink } from "react-router-dom";
import { APropos } from './Pages/A propos';

function App() {
  return (
    <div>
      <main>
        
      </main>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='a-propos' element={<APropos/>}/>
      </Routes>
      <footer>
        <a href="https://twitter.com/" target="_blank">Twitter</a><br/>
        <a href="https://www.instagram.com/" target="_blank">Instagram</a>
      </footer>
    </div>
  );
}

export default App;
