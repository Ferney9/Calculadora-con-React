import "./App.css";
import { Cabecera } from "./Components/Cabecera";
import { Papi } from "./Components/Papi";
import { Footer } from './Components/Footer';

//import { SumForm } from './Components/SumForm';
import { Operaciones } from './Components/Operaciones';
import { useState } from 'react';

function App() {
  const  [operBasica, setOperBasica, ] =useState<string>("Suma");
  const  [operTipo, setOperTipo, ] =useState<string>("Par");
  return (
    <div className="container-fluid">
      <Papi>
        <Cabecera 
        seleccionar = {(dato)=> {
          setOperBasica(dato);
          
        }}
        seleccionartipo = {(tip) => {
          setOperTipo(tip);
        }}
        />
        <Operaciones nombre={operBasica} tipoNum={operTipo} />
      </Papi>
      <Footer/>
    </div>
  );
}

export default App;
