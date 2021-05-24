import React from "react";
import { Row, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Contenedor,
  Columna,
  H1,
  BotonFunciones,
  BotonClaro,
  BotonInicio,
  Boton,
  Menu,
} from "./estilos";

type Props = {
  anchura: number;
};

/**
 * Un componente que renderiza la barra de navegación principal de la aplicación.
 */
const BarraNav = ({ anchura }: Props) => {
  console.log(anchura);
  return (
    <Contenedor fluid anchura={anchura}>
      <Row className="d-flex justify-content-between">
        {/** Logotipo */}
        <Columna md="start">
          <H1 style={{ fontSize: anchura <= 903 ? "1.6rem" : "1.2rem" }}>
            Invitación
          </H1>
        </Columna>

        {/** Botones de navegación */}
        {anchura >= 907 && (
          <Columna>
            <BotonFunciones
              variant="light"
              className={anchura <= 930 ? null : "mr-1"}
              anchura={anchura}
            >
              Características
            </BotonFunciones>
            <BotonClaro
              variant="light"
              className={anchura <= 930 ? null : "mr-1"}
            >
              Extensión
            </BotonClaro>
            <BotonClaro
              variant="light"
              className={anchura <= 930 ? null : "mr-1"}
            >
              Programas de recomendación
            </BotonClaro>
            <BotonClaro
              variant="light"
              className={anchura <= 930 ? null : "mr-1"}
            >
              Personas
            </BotonClaro>
          </Columna>
        )}

        {/** Botones de cuenta */}
        {anchura >= 907 && (
          <Columna md="auto">
            <BotonInicio variant="light">Iniciar sesión</BotonInicio>
            <Boton variant="dark" style={{ "font-weight": "bold" }}>
              Regístrate
            </Boton>
          </Columna>
        )}

        {/** Botón del menú */}
        {anchura <= 906 && (
          <Columna md="end">
            <Dropdown>
              <Menu variant="light" size="lg">
                <FontAwesomeIcon icon={faBars} />
              </Menu>

              <Dropdown.Menu>
                <Dropdown.Item>Características</Dropdown.Item>
                <Dropdown.Item>Extensión</Dropdown.Item>
                <Dropdown.Item>Programas de recomendación</Dropdown.Item>
                <Dropdown.Item>Personas</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Iniciar sesión</Dropdown.Item>
                <Dropdown.Item>Regístrate</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Columna>
        )}
      </Row>
    </Contenedor>
  );
};

export default BarraNav;
