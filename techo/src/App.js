import './App.css';

import { MainPage } from './components/MainPage/MainPage';
import { NavBar } from './components/NavBar/NavBar';
import Herramientas from './components/herramientas/herramientas';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Areas } from './components/Areas/Areas';

function App() {
  return (
    <BrowserRouter>
      <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path='/herramientas/'element={<Herramientas/>} />
        <Route path='/areas/' element={<Areas/>} />
        <Route path='/bibliioteca/'element={<></>} />

        <Route path="/*" element = { <Navigate to='/' replace  /> } />
      </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
