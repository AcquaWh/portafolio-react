import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import Contact from "../sections/common/Contact";
import imgWorkCover from "../assets/image/jpg/details/novutek.webp";
import imgS1 from "../assets/image/jpg/details/novutek-details.webp";
import imgS2 from "../assets/image/jpg/details/novutek-details2.webp";

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
                <Text variant="tag">UI</Text>
                <Title variant="secSm" className="my-4">
                  Novutek UI
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  Designed for an internal education platform where Novutek employees could take courses and earn online certificates. The design process started in Photoshop, was prototyped in Adobe XD, and delivered as a production-ready Angular application.
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <div className="mt-lg-3">
          <Container>
            <Row>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Client</Text>
                <Title variant="cardBig" className="mt-3">
                  Novutek
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Date</Text>
                <Title variant="cardBig" className="mt-3">
                  Mayo 2, 2019
                </Title>
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
