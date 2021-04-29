import React from "react";
import { Row } from "react-bootstrap";
import {
  Contenedor,
  Columna,
  H1,
  BotonFunciones,
  BotonClaro,
  BotonInicio,
  Boton,
} from "./estilos";

/**
 * Un componente que renderiza la barra de navegación principal de la aplicación.
 */
const BarraNav = () => {
  return (
    <Contenedor fluid>
      <Row>
        {/** Logotipo */}
        <Columna md="auto">
          <H1>Invitación</H1>
        </Columna>

        {/** Botones de navegación */}
        <Columna>
          <BotonFunciones variant="light" className="mr-1">
            Características
          </BotonFunciones>
          <BotonClaro variant="light" className="mr-1">
            Extensión
          </BotonClaro>
          <BotonClaro variant="light" className="mr-1">
            Programas de recomendación
          </BotonClaro>
          <BotonClaro variant="light" className="mr-1">
            Personas
          </BotonClaro>
        </Columna>

        {/** Botones de cuenta */}
        <Columna md="auto">
          <BotonInicio variant="light">Iniciar sesión</BotonInicio>
          <Boton variant="dark" style={{ "font-weight": "bold" }}>
            Regístrate
          </Boton>
        </Columna>
      </Row>
    </Contenedor>
  );
};

export default BarraNav;
