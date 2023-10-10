import React from 'react';
import{ BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import Fourofour from './views/404/404';
import PokemonDetail from './views/PokemonDetail/PokemonDetail';

export default function Ruta() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/pokemon/:id' element={<PokemonDetail />}/>
            <Route path='*' element={<Fourofour />}/>
        </Routes>
    </BrowserRouter>
  )
}