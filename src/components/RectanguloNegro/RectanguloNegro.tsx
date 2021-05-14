import React, { ReactElement } from "react";
import { StyledComponent } from "styled-components";
import { Row, Col, Button } from "react-bootstrap";
import { Contenedor, ColumnaIzquierda, H2, Div, Boton, Img } from "./estilos";

type Props = {
  /** El contenido textual que se mostrará en el lado izquierdo del componente */
  titulo?: string;
  contenido: () => ReactElement;
  pie: (Boton: StyledComponent<Button, any, {}, never>) => ReactElement;

  /** La imagen que se mostrará en el lado derecho del componente */
  imagen?: {
    url: string;
    alt: string;
    width?: string;
    col: number;
    colClases?: string;
  };

  /** El contenido textual que se mostrará en el lado derecho del componente
   * si ninguna imagen es proveída. */
  derecha?: () => ReactElement;
};

/**
 * Un componente que renderiza un rectangulo negro con contenido
 * divido en dos columnas. El lado izquierdo visualiza
 * contenido textual mientras el lado derecho visualiza una imagen
 * que sobresale del rectangulo negro.
 */
const RectanguloNegro = ({
  titulo,
  contenido,
  pie,
  imagen,
  derecha,
}: Props) => {
  return (
    <div>
      <Contenedor>
        <Row>
          {/** Lado Izquierdo */}
          <ColumnaIzquierda>
            {titulo && <H2>{titulo}</H2>}
            <Div>{contenido()}</Div>
            {pie && <div>{pie(Boton)}</div>}
          </ColumnaIzquierda>

          {/** Lado Derecho */}
          <Col
            xs={imagen ? imagen.col : 6}
            className={imagen ? imagen.colClases : undefined}
          >
            {imagen && (
              <Img src={imagen.url} alt={imagen.alt} width={imagen.width} />
            )}
            {derecha && <div>{derecha()}</div>}
          </Col>
        </Row>
      </Contenedor>
    </div>
  );
};

export default RectanguloNegro;
