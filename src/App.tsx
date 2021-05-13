import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import BarraNav from "./components/BarraNav/BarraNav";
import Cabecera from "./components/Cabecera";
import Logotipos from "./components/Logotipos";
import ContenidoSuperior from "./components/ContenidoSuperior/ContenidoSuperior";
import ContenidoInferior from "./components/ContenidoInferior";
import Imagenes from "./components/Imagenes";

function App() {
  return (
    <>
      <BarraNav></BarraNav>
      <Cabecera></Cabecera>
      <Logotipos></Logotipos>
      <ContenidoSuperior></ContenidoSuperior>
      <ContenidoInferior></ContenidoInferior>
      <Imagenes></Imagenes>
    </>
  );
}

export default App;
