import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import Contact from "../sections/common/Contact";
import imgWorkCover from "../assets/image/jpg/details/cov.jpg";
import { device } from "../utils";

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
                  Eventos COV
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  Desarrolle esta plataforma en Laravel para la inscripción de colegiados, universidades, entre otras cosas para los eventos que se organizan en ELCOV para saber
                  si asistió o no al evento organizado actual y sí pago su inscripción.
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
                  COV
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Tiempo</Text>
                <Title variant="cardBig" className="mt-3">
                  Apr 14, 2020
                </Title>
              </Col>
              <Col lg="4">
                <Link to="https://colegiados.elcov.org/login" target="_blank"><Button arrowRight>Ver página</Button></Link>
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
