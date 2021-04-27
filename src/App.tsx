import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BarraNav from "./components/BarraNav";
import Cabecera from "./components/Cabecera";
import Logotipos from "./components/Logotipos";

function App() {
  return (
    <>
      <BarraNav></BarraNav>
      <Cabecera></Cabecera>
      <Logotipos></Logotipos>
    </>
  );
}

export default App;
