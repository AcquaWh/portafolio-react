import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import Contact from "../sections/common/Contact";
import imgWorkCover from "../assets/image/jpg/details/caffenio-details.png";
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
                  Caffenio Wordpress
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  Se desarrollo en Wordpress como un tema nuevo para Caffenio como una bolsa de trabajo donde 
                  podrán contratar empleados nuevos y nosotros podremos buscar nuevas opciones para trabajar en Caffenio.
                  Esto se creo cuando estaba laborando en Mawe Tecnologías.
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
                  Caffenio
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Tiempo</Text>
                <Title variant="cardBig" className="mt-3">
                  Agusto 20, 2020
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
