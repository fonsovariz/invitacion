import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

/** Elementos */
export const Img = styled.img`
  width: 90%;
`;

export const H2 = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

export const H3 = styled.h3`
  font-size: 0.95rem;
  font-weight: bold;
`;

export const P = styled.p`
  font-size: 0.9rem;
  margin-bottom: 25px;
`;

export const Span = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

/** React Bootstrap */
export const FAIcon = styled(FontAwesomeIcon)`
  color: #cf2745;
  margin-right: 7px;
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
