import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Section, Box, Text } from "../../components/Core";

const Number = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: -2px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0;
  line-height: 1;
`;

const Stats = () => (
  <Section>
    <Container>
      <Row className="text-center justify-content-center">
        <Col xs="6" lg="3" className="mb-5 mb-lg-0">
          <Box>
            <Number>9+</Number>
            <Text variant="tag" className="mt-3">Años de experiencia</Text>
          </Box>
        </Col>
        <Col xs="6" lg="3" className="mb-5 mb-lg-0">
          <Box>
            <Number>10+</Number>
            <Text variant="tag" className="mt-3">Proyectos entregados</Text>
          </Box>
        </Col>
        <Col xs="6" lg="3" className="mb-5 mb-lg-0">
          <Box>
            <Number>3</Number>
            <Text variant="tag" className="mt-3">Plataformas cloud</Text>
          </Box>
        </Col>
        <Col xs="6" lg="3">
          <Box>
            <Number>8+</Number>
            <Text variant="tag" className="mt-3">Tecnologías dominadas</Text>
          </Box>
        </Col>
      </Row>
    </Container>
  </Section>
);

export default Stats;
