import './App.css';

import { MainPage } from './components/MainPage/MainPage';
import { NavBar } from './components/NavBar/NavBar';
import Herramientas from './components/herramientas/herramientas';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Areas } from './components/Areas/Areas';
import AreaReutilizable from './components/AllAreas/AreaReutilizable';

function App() {
  return (
    <BrowserRouter>
      <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path='/herramientas/'element={<Herramientas/>} />
        <Route path='/areas/' element={<Areas/>} />
        <Route path='/areas/legales' element={<AreaReutilizable/>} />
        <Route path='/areas/fondos' element={<Areas/>} />
        <Route path='/areas/comunicacion' element={<Areas/>} />
        <Route path='/areas/gestion' element={<Areas/>} />
        <Route path='/areas/voluntariado' element={<Areas/>} />
        <Route path='/areas/viviendas' element={<Areas/>} />
        <Route path='/areas/adminyfinanzas' element={<Areas/>} />
        <Route path='/areas/investigacion' element={<Areas/>} />
        <Route path='/bibliioteca/'element={<></>} />

        <Route path="/*" element = { <Navigate to='/' replace  /> } />
      </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
