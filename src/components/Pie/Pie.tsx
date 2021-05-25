import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import RectanguloNegro from "../RectanguloNegro/RectanguloNegro";
import { Boton, H3, P } from "./estilos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

type Props = {
  anchura: number;
};

/**
 * Un componente que renderiza el pie de página
 * que contiene enlaces a otras páginas y redes sociales.
 */
const Pie = ({ anchura }: Props) => {
  //** Un elemento "p" que se usará como texto principal en RectanguloNegro */
  const contenido = () => {
    return (
      <P>
        <span className="font-weight-bold">Invitación</span> es la nueva red
        social donde todos son recompensados. Únete, publica tus enlaces de
        recomendación o invitación y obtén recompensas automáticamente.
      </P>
    );
  };

  /** Tres botones de redes sociales que se usarán como pie en RectanguloNegro*/
  const pie = () => {
    return (
      <div>
        <Row>
          <Col xs={2}>
            <Button variant="light" className="px-2 py-1">
              <FontAwesomeIcon icon={faFacebook} />
            </Button>
          </Col>

          <Col xs={2}>
            <Button variant="light" className="px-2 py-1">
              <FontAwesomeIcon icon={faInstagram} />
            </Button>
          </Col>

          <Col xs={2}>
            <Button variant="light" className="px-2 py-1">
              <FontAwesomeIcon icon={faTwitter} />
            </Button>
          </Col>
        </Row>
      </div>
    );
  };

  /** Los enlaces que se mostrarán en el lado derecho de RectanguloNegro */
  const derecha = () => {
    return (
      <div>
        <Row className="d-inline-flex justify-content-between">
          <Col className="mr-3">
            <H3>Explora</H3>
            <Boton className="text-white">Programas</Boton>
            <Boton className="text-white">Personas</Boton>
            <Boton className="text-white">Guía</Boton>
          </Col>

          <Col className="mr-3">
            <H3>Yo</H3>
            <Boton className="text-white">Publicar un enlace</Boton>
            <Boton className="text-white">Iniciar sesión</Boton>
            <Boton className="text-white">Regístrate</Boton>
          </Col>

          <Col className="mr-3">
            <H3>Producto</H3>
            <Boton className="text-white text-left">Características</Boton>
            <Boton className="text-white">Extensión</Boton>
            <Boton className="text-white">Obtener créditos</Boton>
            <Boton className="text-white">Invitar a amistades</Boton>
            <Boton className="text-white">Ayuda</Boton>
          </Col>

          <Col>
            <H3>Empresa</H3>
            <Boton className="text-white">Empleos</Boton>
            <Boton className="text-white">Anunciar</Boton>
          </Col>
        </Row>
      </div>
    );
  };

  /** Rénder */
  return (
    <footer>
      <RectanguloNegro
        anchura={anchura}
        titulo={undefined}
        contenido={contenido}
        pie={pie}
        imagen={undefined}
        derecha={derecha}
      />

      <P className="my-4 text-center text-muted">
        All product names, logos, and brands are property of their respective
        owners. Feel free to check out our <span>privacy policy</span> and{" "}
        <span>terms of service</span>.
      </P>
    </footer>
  );
};

export default Pie;
