import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/Home';
import { Routes, Route, NavLink } from "react-router-dom";
import { APropos } from './Pages/A propos';

function App() {
  return (
    <div className='bg-[#1F2039]'>
      <main>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='a-propos' element={<APropos/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
