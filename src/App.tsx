import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import BarraNav from "./components/BarraNav/BarraNav";
import Cabecera from "./components/Cabecera";
import Logotipos from "./components/Logotipos";
import ContenidoSuperior from "./components/ContenidoSuperior/ContenidoSuperior";
import ContenidoInferior from "./components/ContenidoInferior";
import Imagenes from "./components/Imagenes";
import Pie from "./components/Pie/Pie";

function App() {
  /** Estado */
  const [anchura, setAnchura] = useState(window.innerWidth);

  /** Hook de efecto que actualiza la variable de estado de
   * anchura cuando se cambia el tamaño de la pantalla. */
  useEffect(() => {
    const manejaCambioDePantalla = () => setAnchura(window.innerWidth);

    window.addEventListener("resize", manejaCambioDePantalla);

    return () => window.removeEventListener("resize", manejaCambioDePantalla);
  });

  /** Rénder */
  return (
    <>
      <BarraNav anchura={anchura}></BarraNav>
      <Cabecera></Cabecera>
      <Logotipos></Logotipos>
      <ContenidoSuperior></ContenidoSuperior>
      <ContenidoInferior></ContenidoInferior>
      <Imagenes></Imagenes>
      <Pie></Pie>
    </>
  );
}

export default App;
