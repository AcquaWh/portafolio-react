import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Span } from "../../components/Core";
import imgSignLight from "../../assets/image/png/signature.png";

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
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <div className="pl-lg-4 pt-5 pt-lg-0">
                <Title color="light" variant="secSm">
                  Fernanda Cruz Quintero
                </Title>
                <Text
                  color="light"
                  className="mt-3 mt-lg-5"
                  css={`
                    line-height: 1.5;
                  `}
                >
                Desarrolladora de software con más de 5 años de experiencia
                construyendo aplicaciones web y móviles de alto impacto.
                Trabajo con tecnologías como .NET Core, React, Vue.js, Blazor,
                Azure y Google Cloud Platform.
                </Text>
                <Text color="light" className="mt-4">
                Especializada en desarrollo full-stack y aplicaciones móviles
                para Android e iOS con React Native y .NET MAUI.
                Me apasiona escribir código limpio, escalable y orientado
                a resultados reales para el negocio. Con experiencia en
                CI/CD, despliegue de aplicaciones y gestión de proyectos
                con Azure DevOps y Jira.
                </Text>
                <div className="mt-4">
                  <Text color="light">Envíame correo a</Text>

                  <Text variant="p">
                    <a
                      href="mailto:info@fernandacruz.com"
                      className="font-weight-bold"
                    >
                      <Span color="light">info@fernandacruz.com</Span>
                    </a>
                  </Text>
                </div>
                <Text color="light" className="mt-3 font-weight-bold">
                  Fernanda Cruz
                </Text>
                <Text color="light" variant="small">
                  Desarrolladora de Software
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
                  <LinkSocial
                    href="https://www.instagram.com/acquawh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-weight-bold"
                  >
                    Instagram
                  </LinkSocial>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default About;
