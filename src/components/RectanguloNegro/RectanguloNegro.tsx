import React, { ReactElement } from "react";
import { StyledComponent } from "styled-components";
import { Row, Col, Button } from "react-bootstrap";
import { Contenedor, ColumnaIzquierda, H2, Div, Boton, Img } from "./estilos";

type Props = {
  /** Contenido textual que se mostrará en el lado izquierdo del componente */
  titulo: string;
  contenido: () => ReactElement;
  pie: (Boton: StyledComponent<Button, any, {}, never>) => ReactElement;

  /** Imagen que se mostrará en el lado derecho del componente */
  imagen: {
    url: string;
    alt: string;
  };
};

/**
 * Un componente que renderiza un rectangulo negro con contenido
 * divido en dos columnas. El lado izquierdo visualiza
 * contenido textual mientras el lado derecho visualiza una imagen
 * que sobresale del rectangulo negro.
 */
const RectanguloNegro = ({ titulo, contenido, pie, imagen }: Props) => {
  return (
    <div>
      <Contenedor>
        <Row>
          {/** Lado Izquierdo */}
          <ColumnaIzquierda>
            <H2>{titulo}</H2>
            <Div>{contenido()}</Div>
            <div>{pie(Boton)}</div>
          </ColumnaIzquierda>

          {/** Lado Derecho */}
          <Col xs={5}>
            <Img src={imagen.url} alt={imagen.alt} />
          </Col>
        </Row>
      </Contenedor>
    </div>
  );
};

export default RectanguloNegro;
