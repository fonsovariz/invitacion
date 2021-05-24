import styled from "styled-components";
import { Container, Col, Button, Dropdown } from "react-bootstrap";

/** Elementos */
export const H1 = styled.h1`
  /* font-size: 1.2rem; */
  font-weight: bold;
`;

/** React Bootstrap */
export const Contenedor = styled(Container)`
  margin-top: 30px;
  padding: ${(props) => (props.anchura <= 415 ? "0 10% 0 10%" : "0 7% 0 7%")};
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
  margin-left: ${(props) => (props.anchura <= 965 ? "4%" : "10%")};
`;

export const BotonInicio = styled(BotonClaro)`
  font-weight: bold;
  margin-right: 10px;
`;

export const Menu = styled(Dropdown.Toggle)`
  background-color: white;
  border: none;
`;
