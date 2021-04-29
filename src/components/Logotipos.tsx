import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import airbnb from "../images/company-1.png";
import uber from "../images/company-2.png";
import coinbase from "../images/company-3.png";
import robinhood from "../images/company-4.png";
import transferwise from "../images/company-5.png";
import n26 from "../images/company-6.png";

/**
 * Un componente que renderiza una fila de logotipos de diversas empresas.
 */
const Logotipos = () => {
  return (
    <Container className="mt-5 pt-5">
      <Row className="d-flex align-items-center justify-content-between">
        <Col xs={2}>
          <img src={airbnb} alt="Logotipo de Airbnb." className="w-100 " />
        </Col>
        <Col xs={2}>
          <img
            src={robinhood}
            alt="Logotipo de Robinhood."
            className="w-100 "
          />
        </Col>
        <Col xs={2}>
          <img src={uber} alt="Logotipo de Uber." className="w-100 " />
        </Col>
        <Col xs={2}>
          <img src={coinbase} alt="Logotipo de Coinbase." className="w-100 " />
        </Col>
        <Col xs={2}>
          <img
            src={transferwise}
            alt="Logotipo de TransferWise."
            className="w-100"
          />
        </Col>
        <Col xs={1}>
          <img src={n26} alt="Logotipo de N26." className="w-100" />
        </Col>
      </Row>
    </Container>
  );
};

export default Logotipos;
