import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import gato from "../images/hero-image.png";

//====////====>>>>> COMPONENTE <<<<<====\\\\====\\
const Cabecera = () => {
  return (
    <Contenedor>
      <Row>
        {/*==========> Lado Izquierdo <==========*/}
        <ColumnaIzquierda>
          <H2>La Comunidad de Invitaciones.</H2>
          <P>
            <span className="font-weight-bold">Invitación</span> es la nueva red
            social donde todos son recompensados. Únete, publica tus enlaces de
            recomendación o invitación y obtén recompensas automáticamente.
          </P>

          {/*-----> Busqueda <-----*/}
          <Form>
            <Row>
              {/*** Campo de busqueda ***/}
              <Col className="pr-0">
                <Form.Group controlId="busqueda">
                  <FAIcon icon={faSearch} className="text-dark" />
                  <FControl
                    type="text"
                    placeholder="Busca códigos de promoción"
                  />
                </Form.Group>
              </Col>
              {/*** Botón ***/}
              <Col xs={5}>
                <Boton variant="danger" type="button" className="btn-block">
                  Comienza ya, es gratis
                </Boton>
              </Col>
            </Row>
          </Form>
        </ColumnaIzquierda>

        {/*==========> Lado Derecho <==========*/}
        <Col xs={5}>
          <Img
            src={gato}
            alt="Un dibujo de un gato negro sentado en un escritorio frente a una computadora siendo sorprendido por manos que salen de la pantalla para ofrecerle un regalo envuelto."
          />
        </Col>
      </Row>
    </Contenedor>
  );
};

//====////====>>>>> ESTILOS <<<<<====\\\\====\\
const Contenedor = styled(Container)`
  background-color: black;
  color: white;
  margin-top: 30px;
`;

const ColumnaIzquierda = styled(Col)`
  padding: 60px;
`;

const Boton = styled(Button)`
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

const FAIcon = styled(FontAwesomeIcon)`
  position: absolute;
  margin-top: 10px;
  margin-left: 10px;
`;

const FControl = styled(Form.Control)`
  padding-left: 35px;
`;

const H2 = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
`;

const P = styled.p`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Img = styled.img`
  position: absolute;
  width: 90%;
`;

export default Cabecera;
