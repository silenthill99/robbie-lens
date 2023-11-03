import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/Home';
import { Routes, Route, NavLink } from "react-router-dom";
import { APropos } from './Pages/A propos';

function App() {
  return (
    <div>
      <header>
        <nav className="flex items-end justify-between bg-[white] text-[#242424]">
          <NavLink to="/" className="hover:opacity-50"><img src="images/logo.png" alt="" /></NavLink>
          <div>
            <NavLink to="/" className="hover:underline hover:opacity-50">Accueil</NavLink>
            <NavLink to="a-propos" className="hover:underline hover:opacity-50">A propos</NavLink>
          </div>
        </nav>
      </header>
      <main className='bg-[#1F2039]'>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='a-propos' element={<APropos/>}/>
        </Routes>
      </main>
      <footer className='flex items-end bg-[white] text-[#242424]'>
        <NavLink to="/" className="hover:opacity-50"><img src="images/logo.png" alt="" /></NavLink>
        <a href="https://twitter.com/" target="_blank" className="hover:opacity-50"><img src="images/twitter.png" alt="" /></a>
        <a href="https://www.instagram.com/" target="_blank" className="hover:opacity-50"><img src="images/instagram.png" alt="" /></a>
      </footer>
    </div>
  );
}

export default App;
