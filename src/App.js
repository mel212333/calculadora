import "./App.css";
import Boton from "./componentes/Boton";
//import freeecodecamp from "./imagenes/freecodecamp.jpeg";
import Pantalla from "./componentes/Pantalla";
import BotonClear from "./componentes/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs"; //libreria de funciones matematicas para js

function App() {
  const [input, setInput] = useState("");
  const agregarInput = (valor) => {
    setInput(input + valor);
  };
  const calcularResultado = () => {
    //si esta vacio
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los calculos");
    }
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        {/* <img
          src={freeecodecamp}
          className="freecodecamp-logo"
          alt="Logo de freeCodeCamp"
        /> */}
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        {/* prop con el valor del estado */}
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
