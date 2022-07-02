import './App.css';

import { MainPage } from './components/MainPage/MainPage';
import { NavBar } from './components/NavBar/NavBar';
import Herramientas from './components/herramientas/herramientas';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Areas } from './components/Areas/Areas';
import AreaReutilizable from './components/AllAreas/AreaReutilizable';
import { Footer } from './components/Footer/Footer';
import { DesarrolloFondos } from './components/AllAreas/DesarrolloFondos';
import { Comunicaciones } from './components/AllAreas/Comunicaciones';
import { GestionComunitaria } from './components/AllAreas/GestionComunitaria';
import { Voluntariado } from './components/AllAreas/Voluntariado';
import { Viviendas } from './components/AllAreas/Viviendas';
import { AdminFinanzas } from './components/AllAreas/AdminFinanzas';
import { Investigacion } from './components/AllAreas/Investigacion';
import { Legales } from './components/AllAreas/Legales';

function App() {
  return (
    <BrowserRouter>
      <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path='/herramientas/'element={<Herramientas/>} />
        <Route path='/areas/' element={<Areas/>} />
        <Route path='/areas/legales' element={<Legales/>} />
        <Route path='/areas/fondos' element={<DesarrolloFondos/>} />
        <Route path='/areas/comunicacion' element={<Comunicaciones/>} />
        <Route path='/areas/gestion' element={<GestionComunitaria/>} />
        <Route path='/areas/voluntariado' element={<Voluntariado/>} />
        <Route path='/areas/viviendas' element={<Viviendas/>} />
        <Route path='/areas/adminyfinanzas' element={<AdminFinanzas/>} />
        <Route path='/areas/investigacion' element={<Investigacion/>} />
        <Route path='/bibliioteca/'element={<></>} />

        <Route path="/*" element = { <Navigate to='/' replace  /> } />
      </Routes>
      <Footer/>
      </div>

    </BrowserRouter>
  );
}

export default App;
