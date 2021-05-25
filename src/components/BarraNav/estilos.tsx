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
  padding: ${(props) =>
    props.anchura <= 415
      ? "0 10% 0 10%"
      : props.anchura <= 1000
      ? "0 5% 0 5%"
      : props.anchura <= 1200
      ? "0 4% 0 4%"
      : null};
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
  margin-left: ${(props) =>
    props.anchura <= 996 && props.anchura >= 966
      ? "40px"
      : props.anchura <= 965
      ? "4%"
      : "80px"};
`;

export const BotonInicio = styled(BotonClaro)`
  font-weight: bold;
  margin-right: 10px;
`;

export const Menu = styled(Dropdown.Toggle)`
  background-color: white;
  border: none;
`;
