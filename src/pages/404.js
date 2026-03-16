import React from "react"
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import Contact from "../sections/common/Contact";

export default function NotFound() {
  return (
    <>
      <PageWrapper>
        <Section className="mt-lg-5">
          <Container className="text-center">
            <Row>
              <Col lg="12">
                <Text variant="tag">PÁGINA NO ENCONTRADA</Text>
                <Title variant="secSm" className="my-4">
                  404
                </Title>
              </Col>
            </Row>
          </Container>
        </Section>
        <Box py={4}>
          <Contact />
        </Box>
      </PageWrapper>
    </>
  )
}