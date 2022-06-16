import './App.css';

import { MainPage } from './components/MainPage/MainPage';
import { NavBar } from './components/NavBar/NavBar';
import Herramientas from './components/herramientas/herramientas';

function App() {
  return (
    <div>
      <NavBar/>
      <MainPage/>
      <Herramientas/>
    </div>
  );
}

export default App;
