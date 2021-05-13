import styled from "styled-components";
import { Container, Col, Button } from "react-bootstrap";

/** Elementos */
export const H2 = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
`;

export const Div = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Img = styled.img`
  position: absolute;
  width: ${(props) => (props.width ? props.width : "95%")};
`;

/** React Bootstrap */
export const Contenedor = styled(Container)`
  background-color: black;
  color: white;
  margin-top: 30px;
`;

export const ColumnaIzquierda = styled(Col)`
  padding: 60px;
`;

export const Boton = styled(Button)`
  background-color: #cf2745;
  border-color: #cf2745;

  &:hover {
    background-color: #f04867;
    border-color: #f04867;
  }

  &:focus {
    background-color: #cf2745;
    border-color: #cf2745;
  }
`;
