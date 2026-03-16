import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Span } from "../../components/Core";

const LightTextWrapper = styled.div`
  p, h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.light} !important;
  }
`;

const LinkSocial = styled.a`
  color: ${({ theme }) => theme.colors.light} !important;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 1.63px;
  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.colors.light} !important;
    transform: translateY(-5px);
  }
`;

const About = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <LightTextWrapper>
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <div className="pl-lg-4 pt-5 pt-lg-0">
                <Title color="light" variant="secSm">
                  Fernanda Cruz
                </Title>
                <Text
                  color="light"
                  className="mt-3 mt-lg-5"
                  css={`
                    line-height: 1.5;
                  `}
                >
                Líder del área de software con más de 5 años de experiencia.
                Dirijo el equipo de desarrollo, defino estándares de código,
                valido Pull Requests y tomo decisiones arquitectónicas que
                impactan al negocio. Mi día a día es C# con .NET 8/.NET 9,
                construyendo APIs REST y servicios web robustos.
                </Text>
                <Text color="light" className="mt-4">
                Desarrollo aplicaciones web con React, Vue.js, Angular, Blazor y
                Razor, y apps móviles para iOS y Android con React Native, .NET
                MAUI y MAUI Blazor. Integro inteligencia artificial en desarrollos
                usando Claude API y Gemini API. Gestiono infraestructura en
                Google Cloud con Kubernetes, Cloud Run, Cloud Tasks y VM.
                Construyo reportes con Power BI, Looker Studio y BigQuery.
                Coordino entregas de equipo con Jira usando Kanban y Scrum.
                </Text>
                <div className="mt-4">
                  <Text color="light">Envíame correo a</Text>
                  <Text variant="p">
                    <a
                      href="#contact"
                      className="font-weight-bold"
                      onClick={(e) => {
                        e.preventDefault();
                        const u = "info";
                        const d = "fernandacruz.com";
                        window.location.href = "mailto:" + u + "@" + d;
                      }}
                    >
                      <Span color="light">{["info", "fernandacruz.com"].join("@")}</Span>
                    </a>
                  </Text>
                </div>
                <Text color="light" className="mt-3 font-weight-bold">
                  Fernanda Cruz
                </Text>
                <Text color="primary" variant="small">
                  Ingeniera de Software &amp; Líder de Equipo
                </Text>
                <div className="mt-5 d-flex">
                  <LinkSocial
                    href="https://github.com/AcquaWh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" mr-3"
                  >
                    Github
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.linkedin.com/in/acquawh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    Linkedin
                  </LinkSocial>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        </LightTextWrapper>
      </Section>
    </>
  );
};

export default About;
