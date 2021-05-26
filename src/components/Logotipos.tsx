import React, { ReactElement } from "react";
import { Container, Row, Col } from "react-bootstrap";
import airbnb from "../images/company-1.png";
import uber from "../images/company-2.png";
import coinbase from "../images/company-3.png";
import robinhood from "../images/company-4.png";
import transferwise from "../images/company-5.png";
import n26 from "../images/company-6.png";

type Props = {
  anchura: number;
};

/**
 * Un componente que renderiza una fila de logotipos de diversas empresas.
 */
const Logotipos = ({ anchura }: Props) => {
  /** Los últimos tres logotipos. */
  const segundaHilera = (): ReactElement => {
    return (
      <>
        <Col xs={anchura > 767 ? 2 : undefined}>
          <img src={coinbase} alt="Logotipo de Coinbase." className="w-100 " />
        </Col>
        <Col xs={anchura > 767 ? 2 : undefined}>
          <img
            src={transferwise}
            alt="Logotipo de TransferWise."
            className="w-100"
          />
        </Col>
        <Col xs={anchura > 767 ? 1 : undefined}>
          <img src={n26} alt="Logotipo de N26." className="w-100" />
        </Col>
      </>
    );
  };

  /** Rénder */
  return (
    <Container
      className={
        anchura > 991 ? "mt-5 pt-5" : anchura > 570 ? "mt-5" : "mt-5 px-5"
      }
    >
      {/** Primera hilera de logotipos. */}
      <Row className="d-flex align-items-center justify-content-between">
        <Col xs={anchura > 767 ? 2 : undefined}>
          <img src={airbnb} alt="Logotipo de Airbnb." className="w-100 " />
        </Col>
        <Col xs={anchura > 767 ? 2 : undefined}>
          <img
            src={robinhood}
            alt="Logotipo de Robinhood."
            className="w-100 "
          />
        </Col>
        <Col xs={anchura > 767 ? 2 : undefined}>
          <img src={uber} alt="Logotipo de Uber." className="w-100 " />
        </Col>
        {/** Segunda hilera de logotipos como parte de la primera para pantallas grandes. */}
        {anchura > 767 && segundaHilera()}
      </Row>

      {/** Segunda hilera de logotipos. */}
      {anchura <= 767 && (
        <Row className="d-flex align-items-center justify-content-between mt-4">
          {segundaHilera()}
        </Row>
      )}
    </Container>
  );
};

export default Logotipos;
