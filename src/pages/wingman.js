import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import Contact from "../sections/common/Contact";
import imgWorkCover from "../assets/image/jpg/details/wingman.webp";
import imgS1 from "../assets/image/jpg/details/crear-proyecto.webp";
import imgS2 from "../assets/image/jpg/details/usuario.webp";
import imgS3 from "../assets/image/jpg/details/proyecto.webp";
import imgS4 from "../assets/image/jpg/details/proveedor.webp";
import imgS5 from "../assets/image/jpg/details/pagos.webp";
import imgS6 from "../assets/image/jpg/details/chat.webp";
import imgS7 from "../assets/image/jpg/details/backoffice.webp";

const WorkSingle = () => {
  return (
    <>
      <PageWrapper>
        <Container
          fluid
          className="px-sm-5"
          css={`
            margin-top: 92px;
          `}
        >
          <img src={imgWorkCover} alt="" className="img-fluid w-100" />
        </Container>
        <Section className="mt-lg-5">
          <Container>
            <Row>
              <Col lg="8">
                <Text variant="tag">WEB</Text>
                <Title variant="secSm" className="my-4">
                  Wingman y Backoffice
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  Se desarrolló en Angular y PHP para Erus que funcionará como una bolsa de trabajo en línea que se pueden solicitar
                  servicios como un carpintero, un ingeniero, un licenciado hasta un pintor.
                </Text>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  <strong>PROCESO DE TRABAJO</strong>
                  <p>Los de Erus tienen un área donde mandan sus Mockups y diseños, el desarrollo del sitio web se basó en eso, después
                  se hace una reunión para revisar si las páginas son responsivas y funcionan correctamente.
                  Se desarrolló un chat donde proveedor y cliente estén en contacto.
                  Después de hacer el panel para el cliente y el proveedor se trabajó en el Backoffice donde se podrá administrar el marketing, entre otras cosas
                  que se mostrarán en las imágenes siguientes.</p>
                </Text>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  <strong>MÉTODOS DE PAGO</strong>
                  <p>Se utilizaron las librerías de npm de Stripe y Paypal</p>
                </Text>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  <strong>CORREOS</strong>
                  <p>Se usó Mailchimp para mandar correos a los usuarios en donde yo diseñé los correos que se mandarían.</p>
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <div className="mt-lg-3">
          <Container>
            <Row>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Cliente</Text>
                <Title variant="cardBig" className="mt-3">
                  Wingman
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Tiempo</Text>
                <Title variant="cardBig" className="mt-3">
                  Noviembre 27, 2020
                </Title>
              </Col>
              <Col lg="4">
              <a href="http://wingman.mx/demo/" target="_blank" rel="noopener noreferrer"><Button arrowRight>Ver página</Button></a>
              </Col>
            </Row>
          </Container>
        </div>
        <Section className="mt-lg-5">
          <Container>
            <Row>
              <Col xs="12" className="mb-5">
                <img src={imgS1} alt="" className="img-fluid w-100" />
              </Col>
              <Col xs="12" className="mb-5">
                <img src={imgS2} alt="" className="img-fluid w-100" />
              </Col>
              <Col xs="12" className="mb-5">
                <img src={imgS7} alt="" className="img-fluid w-100" />
              </Col>
              <Col lg="6" className="mb-5 mb-lg-0 pr-lg-4">
                <img src={imgS3} alt="" className="img-fluid w-100" />
              </Col>
              <Col lg="6" className="pl-lg-4">
                <img src={imgS4} alt="" className="img-fluid w-100" />
              </Col>
              <Col lg="6" className="pl-lg-4">
                <img src={imgS5} alt="" className="img-fluid w-100" />
              </Col>
              <Col lg="6" className="pl-lg-4">
                <img src={imgS6} alt="" className="img-fluid w-100" />
              </Col>
            </Row>
          </Container>
        </Section>
        <Box py={4}>
          <Contact />
        </Box>
      </PageWrapper>
    </>
  );
};
export default WorkSingle;
