import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import Contact from "../sections/common/Contact";
import imgWorkCover from "../assets/image/jpg/details/alumni.webp";

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
                  Alumni
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  La desarrollé en Laravel para los Alumnis de ULSA Noroeste mientras estaba laborando en la empresa de Mawe Tecnologías
                  donde empresas y alumnos graduados se registrarán para buscar empleo o registrar alguna oferta de trabajo.
                  Tiene un panel de control para los alumnis, administradores, las universidades y las empresas.
                  Las universidades podrán importar sus alumnos mediante un CSV.
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
                  ULSA
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Tiempo</Text>
                <Title variant="cardBig" className="mt-3">
                  Mayo 14, 2020
                </Title>
              </Col>
            </Row>
          </Container>
        </div>
        <Box py={4}>
          <Contact />
        </Box>
      </PageWrapper>
    </>
  );
};
export default WorkSingle;
