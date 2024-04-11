import './App.css';
import codemonkeyLogo from './Imagenes/the-monkey-svgrepo-com.svg';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      
      <div className='codemonkey-logo-contenedor'>
        <img 
        className='codemonkey-logo'
        src={codemonkeyLogo}
        alt='Logo de Code Monkey' />
      </div>

      <div className='contenedor-principal'>

        <Contador numClicks={numClicks} />

        <Boton
        texto= 'Click'
        esBotonDeClick={true}
        manejarClick={manejarClick} />

        <Boton
        texto= 'Reiniciar'
        esBotonDeClick={false}
        manejarClick={reiniciarContador} />

      </div>
    
    </div>
  );
}

export default App;
