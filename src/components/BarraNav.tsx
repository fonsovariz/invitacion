import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";

//====////====>>>>> COMPONENTE <<<<<====\\\\====\\
const BarraNav = () => {
  return (
    <Contenedor fluid>
      <Row>
        {/*==========> Logotipo <==========*/}
        <Columna md="auto">
          <H1>Invitación</H1>
        </Columna>

        {/*==========> Botones de navegación <==========*/}
        <Columna>
          <BotonFunciones variant="light" className="mr-1">
            Funciones
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

        {/*==========> Botones de cuenta <==========*/}
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

//====////====>>>>> ESTILOS <<<<<====\\\\====\\
const Contenedor = styled(Container)`
  margin-top: 30px;
  padding: 0 7% 0 7%;
`;

const Columna = styled(Col)`
  padding: 0;
`;

const H1 = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Boton = styled(Button)`
  font-size: 0.8rem;
`;

const BotonClaro = styled(Boton)`
  background-color: white;
  border: none;
`;

const BotonFunciones = styled(BotonClaro)`
  margin-left: 10%;
`;

const BotonInicio = styled(BotonClaro)`
  font-weight: bold;
  margin-right: 10px;
`;

export default BarraNav;
