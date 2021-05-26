import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDollar,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import ilusIzquierda from "../../images/left-illustration.png";
import ilusDerecha from "../../images/right-illustration.png";
import { Img, H2, H3, P, FAIcon, Boton, Span } from "./estilos";

type Props = {
  anchura: number;
};
/**
 * Un componente que renderiza contenido dividido en tres columnas.
 * Las columnas de la izquierda y derecha visualizan imagenes
 * para estilizar la página y la columna del medio visualiza
 * contenido textual que informa al usuario sobre los beneficios
 * de utilizar la aplicación.
 */
const ContenidoSuperior = ({ anchura }: Props) => {
  return (
    <Container
      className={
        anchura > 991
          ? "my-5 pt-5"
          : anchura > 570
          ? "my-5 pt-2"
          : "my-5 pt-2 px-5"
      }
    >
      <Row className="d-flex justify-content-between align-items-center">
        {/** Ilustración en la izquierda */}
        {anchura > 991 && (
          <Col xs={4}>
            <Img
              src={ilusIzquierda}
              alt="Un dibujo de una mujer saliendo caminando de la pantalla de un celular."
            />
          </Col>
        )}

        {/** Contenido textual */}
        <Col xs={anchura > 991 ? 4 : anchura > 767 ? 6 : 12}>
          {/** Cabecera */}
          <H2 className="mb-4 pb-2 ">
            Recompensas en Efectivo
            <FontAwesomeIcon
              icon={faCommentDollar}
              className="text-success mb-2 pb-2 "
            />
          </H2>

          {/** Contenido */}
          <H3>
            <FAIcon icon={faCheckCircle} /> Publica
          </H3>
          <P>
            Comparte los códigos de recomendación o invitación de los productos
            que amas y usas. Te tomará solo 5 minutos reunirlos.
          </P>

          <H3>
            <FAIcon icon={faCheckCircle} /> Gana
          </H3>
          <P>
            Se recompensado cada vez que alguien utilice uno de tus códigos.
            Cada día miles de personas vienen aquí a buscar invitaciones y
            recomendaciones.
          </P>

          <H3>
            <FAIcon icon={faCheckCircle} /> Crece
          </H3>
          <P className="mb-5">
            Explora{" "}
            <Span className="text-primary">más programas de recomendación</Span>{" "}
            y promueve tu página para obtener más bonificaciones y descuentos.
          </P>

          {/** Pie */}
          <div className="text-center ">
            <Boton type="Boton" className="btn-danger w-75">
              Comienza ya, es gratis
            </Boton>
          </div>
        </Col>

        {/** Ilustración en la derecha */}
        {anchura > 767 && (
          <Col xs={anchura > 991 ? 4 : 6} className="text-right">
            <Img
              src={ilusDerecha}
              alt="Un dibujo de una mujer sentada con las piernas cruzadas sobre un taburete amarillo."
            />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default ContenidoSuperior;
