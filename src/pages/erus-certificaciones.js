import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import Contact from "../sections/common/Contact";
import imgWorkCover from "../assets/image/jpg/details/certificate.webp";
import imgS1 from "../assets/image/jpg/details/certificate-details.webp";
import imgS2 from "../assets/image/jpg/details/certificate-details2.webp";
import imgS3 from "../assets/image/jpg/details/certificate-details3.webp";

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
                  Erus Certificaciones
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  Mi equipo y yo creamos una herramienta para capacitar a los empleados de Erus programada con Angular y PHP,
                  donde podrán ver videos, hacer sus propias videoconferencias desde la plataforma. El acceso es solo restringido a
                  empleados de Erus. Dependiendo de cuántas capacitaciones hayas tomado y pasado por un examen después conseguirás
                  una insignia.
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
                  Erus
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Tiempo</Text>
                <Title variant="cardBig" className="mt-3">
                  Apr 14, 2020
                </Title>
              </Col>
              <Col lg="4">
                <a href="https://capacitate.erus.mx/login" target="_blank" rel="noopener noreferrer"><Button arrowRight>Ver página</Button></a>
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
              <Col lg="12" className="mb-5">
                <img src={imgS3} alt="" className="img-fluid w-100" />
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
