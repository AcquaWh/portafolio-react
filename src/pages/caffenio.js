import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import Contact from "../sections/common/Contact";
import imgWorkCover from "../assets/image/jpg/details/vr.jpg";
import imgS1 from "../assets/image/jpg/details/details-6.jpg";
import imgS2 from "../assets/image/jpg/details/details-5.jpg";
import imgS3 from "../assets/image/jpg/details/details-4.jpg";
import imgS4 from "../assets/image/jpg/details/details-3.jpg";
import imgS5 from "../assets/image/jpg/details/details-8.jpg";
import imgS6 from "../assets/image/jpg/details/details-7.jpg";
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
                  To satisfy our goal of creating a brand that could adapt
                  across many use cases, we took the base form of their new logo
                  and used it as an artboard. As long as the structural outline
                  of the mark stayed consistent their brand was allowed to flex
                  and adapt to specific uses. And by introducing these
                  illustrative elements to the logomark, Strictly found it’s
                  voice.
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
