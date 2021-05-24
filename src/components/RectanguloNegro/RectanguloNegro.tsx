import React, { ReactElement } from "react";
import { StyledComponent } from "styled-components";
import { Row, Col, Button } from "react-bootstrap";
import { Contenedor, ColumnaTextual, H2, Div, Boton, Img } from "./estilos";

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
        <Row className="d-flex justify-content-between">
          {/** Lado Izquierdo */}
          <ColumnaTextual xs={derecha ? 5 : undefined}>
            {titulo && <H2>{titulo}</H2>}
            <Div>{contenido()}</Div>
            {pie && <div>{pie(Boton)}</div>}
          </ColumnaTextual>

          {/** Lado Derecho - Imagen*/}
          {imagen && (
            <Col xs={imagen.col} className={imagen.colClases}>
              <Img src={imagen.url} alt={imagen.alt} width={imagen.width} />
            </Col>
          )}

          {/** Lado Derecho - Texto */}
          {derecha && (
            <ColumnaTextual xs={6} padding="60px 60px 30px 60px">
              {derecha()}
            </ColumnaTextual>
          )}
        </Row>
      </Contenedor>
    </div>
  );
};

export default RectanguloNegro;
