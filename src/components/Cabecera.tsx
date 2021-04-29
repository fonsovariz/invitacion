import React, { ReactElement } from "react";
import styled, { StyledComponent } from "styled-components";
import { Form, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import RectanguloNegro from "./RectanguloNegro/RectanguloNegro";
import gato from "../images/hero-image.png";

/**
 * Un componente que renderiza la cabecera de la aplicación
 * utilizando el componente RectanguloNegro.
 */
const Cabecera = () => {
  /** Elemento «p» que se usará como texto principal en RectanguloNegro */
  const contenido = (): ReactElement => {
    return (
      <p>
        <span className="font-weight-bold">Invitación</span> es la nueva red
        social donde todos son recompensados. Únete, publica tus enlaces de
        recomendación o invitación y obtén recompensas automáticamente.
      </p>
    );
  };

  /** Campo de busqueda (sin funcionamiento) que se usará como pie en RectanguloNegro*/
  const busqueda = (
    Boton: StyledComponent<Button, any, {}, never>
  ): ReactElement => {
    return (
      <Form>
        <Row>
          {/** Campo de busqueda */}
          <Col className="pr-0">
            <Form.Group controlId="busqueda">
              <FAIcon icon={faSearch} className="text-dark" />
              <FControl type="text" placeholder="Busca códigos de promoción" />
            </Form.Group>
          </Col>

          {/** Botón */}
          <Col xs={5}>
            <Boton variant="danger" type="button" className="btn-block">
              "Comienza ya, es gratis"
            </Boton>
          </Col>
        </Row>
      </Form>
    );
  };

  /** Rénder */
  return (
    <RectanguloNegro
      titulo="La Comunidad de Invitaciones."
      contenido={contenido}
      pie={busqueda}
      imagen={{
        url: gato,
        alt:
          "Un dibujo de un gato negro sentado en un escritorio frente a una computadora siendo sorprendido por manos que salen de la pantalla para ofrecerle un regalo envuelto.",
      }}
    />
  );
};

/** Estilos */
export const FAIcon = styled(FontAwesomeIcon)`
  position: absolute;
  margin-top: 10px;
  margin-left: 10px;
`;

export const FControl = styled(Form.Control)`
  padding-left: 35px;
`;

export default Cabecera;
