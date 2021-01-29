import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import Contact from "../sections/common/Contact";
import imgWorkCover from "../assets/image/jpg/details/vr.webp";
import imgS1 from "../assets/image/jpg/details/vr-details.webp";
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
                <Text variant="tag">VR</Text>
                <Title variant="secSm" className="my-4">
                  Nasa Spaceapps
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  Un juego de realidad virtual desarrollado en Unity con C# que permite a los jugadores experimentar las verdaderas consecuencias del cambio climatico. 
                  Fue nominado en Ciudad Obregón en el 2019.
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
                  Nasa
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Tiempo</Text>
                <Title variant="cardBig" className="mt-3">
                  Octubre 28, 2019
                </Title>
              </Col>
              <Col lg="4">
                <Link to="https://2019.spaceappschallenge.org/challenges/living-our-world/1up-nasa-earth/teams/the-no-names/project" target="_blank"><Button arrowRight>Ver página</Button></Link>
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
