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
  return (
    <Contenedor f anchura={anchura}>
      <Row className="d-flex justify-content-between">
        {/** Logotipo */}
        <Columna md="start">
          <H1 style={{ fontSize: anchura <= 903 ? "1.6rem" : "1.2rem" }}>
            Invitación
          </H1>
        </Columna>

        {/** Botones de navegación */}
        {anchura >= 992 && (
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

        <Columna md="end">
          {/** Botones de cuenta */}
          {anchura >= 768 && (
            <BotonInicio variant="light">Iniciar sesión</BotonInicio>
          )}
          {anchura >= 768 && (
            <Boton variant="dark" style={{ "font-weight": "bold" }}>
              Regístrate
            </Boton>
          )}

          {/** Botón del menú */}
          {anchura <= 991 && (
            <Dropdown className="d-inline-block">
              <Menu variant="light" size="lg">
                <FontAwesomeIcon icon={faBars} />
              </Menu>

              <Dropdown.Menu>
                <Dropdown.Item>Características</Dropdown.Item>
                <Dropdown.Item>Extensión</Dropdown.Item>
                <Dropdown.Item>Programas de recomendación</Dropdown.Item>
                <Dropdown.Item>Personas</Dropdown.Item>

                {anchura <= 767 && <Dropdown.Divider />}
                {anchura <= 767 && (
                  <Dropdown.Item>Iniciar sesión</Dropdown.Item>
                )}
                {anchura <= 767 && <Dropdown.Item>Regístrate</Dropdown.Item>}
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Columna>
      </Row>
    </Contenedor>
  );
};

export default BarraNav;
