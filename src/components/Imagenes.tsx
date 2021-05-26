import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import autoAzul from "../images/footer-1.png";
import autoRojo from "../images/footer-2.png";
import senderismo from "../images/footer-3.png";
import fogata from "../images/footer-4.png";
import edificio from "../images/footer-5.png";
import crepusculo from "../images/footer-6.png";
import pradera from "../images/footer-7.png";

type Props = {
  anchura: number;
};

/**
 * Un componente que renderiza una fila de imágenes.
 */
const Imagenes = ({ anchura }: Props) => {
  return (
    <Container className="my-5 pt-3">
      <Row>
        {anchura > 767 && (
          <Col xs={3} className="px-0">
            <img
              src={autoAzul}
              alt="Una fotografía de un descapotable de color celeste estacionado en paralelo frente a un edificio de color blanco."
              className="w-100"
            />

            <div className="text-right">
              <img
                src={edificio}
                alt="Una fotografía del lado de la azotea de un edificio color café situado en una ciudad."
                className="w-75 mt-4"
              />
            </div>
          </Col>
        )}

        <Col xs={anchura > 767 ? 3 : anchura > 400 ? 4 : 6}>
          <img
            src={senderismo}
            alt="Una fotografía de dos personas caminando por la cima de un monte."
            className="w-100"
          />
        </Col>

        {anchura > 400 && (
          <Col xs={anchura > 767 ? 3 : 4} className="px-0">
            <img
              src={autoRojo}
              alt="Una fotografía de un auto rojo estacionado a varios pies de una hilera de arboles."
              className="w-100"
            />
            <img
              src={fogata}
              alt="Una fotografía de dos jovenes sentados en el suelo a ambos lados de una fogata en una playa mientras miran al horizonte."
              className="w-100 mt-4"
            />
          </Col>
        )}

        <Col xs={anchura > 767 ? 3 : anchura > 400 ? 4 : 6}>
          <img
            src={pradera}
            alt="Una fotografía de una pradera con cielo despejado."
            className="w-100"
          />
          <img
            src={crepusculo}
            alt="Una fotografía de un cielo vespertino con nubes teñidas de rojo."
            className="w-100 mt-4"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Imagenes;
