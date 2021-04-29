import styled from "styled-components";
import { Container, Col, Button } from "react-bootstrap";

/** Elementos */
export const H1 = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
`;

/** React Bootstrap */
export const Contenedor = styled(Container)`
  margin-top: 30px;
  padding: 0 7% 0 7%;
`;

export const Columna = styled(Col)`
  padding: 0;
`;

export const Boton = styled(Button)`
  font-size: 0.8rem;
`;

export const BotonClaro = styled(Boton)`
  background-color: white;
  border: none;
`;

export const BotonFunciones = styled(BotonClaro)`
  margin-left: 10%;
`;

export const BotonInicio = styled(BotonClaro)`
  font-weight: bold;
  margin-right: 10px;
`;
