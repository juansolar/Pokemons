import React from 'react';
import{ BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home/Home';

export default function Ruta() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='*' element={<div>No sea imbecil</div>}/>
        </Routes>
    </BrowserRouter>
  )
}