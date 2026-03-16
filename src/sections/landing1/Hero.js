import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";

import GlobalContext from "../../context/GlobalContext";
import { Title, ButtonIcon, Section, Box } from "../../components/Core";
import bgHeroPattern from "../../assets/image/webp/hero-pattern.webp";
import imgL from "../../assets/image/jpg/avatar.jpg";

const SectionStyled = styled(Section)`
  &::before {
    position: absolute;
    top: 0;
    content: "";
    width: 100%;
    height: 120%;
    background: url(${bgHeroPattern}) top center no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-right: 1.25rem;
  transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`;

const CVButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1.25rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 500px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff !important;
    text-decoration: none;
  }
`;

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled hero className="position-relative">
        <Container>
          <Box pb="40px">
            <img
              src={imgL}
              alt=""
              css={`
                border-radius: 50rem !important;
              `}
            />
          </Box>
          <Row className="align-items-lg-end">
            <Col lg="8" sm="12" className="mb-5 mb-lg-0">
              <Box>
                <Title variant="hero">
                  Fernanda Cruz
                </Title>
                <Title variant="card" className="mt-2" color="primary">
                  Ingeniera de Software &amp; Líder de Equipo
                </Title>
                <Box mt="1.25rem" className="d-flex align-items-center flex-wrap">
                  <SocialLink
                    href="https://www.linkedin.com/in/acquawh/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </SocialLink>
                  <SocialLink
                    href="https://github.com/AcquaWh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </SocialLink>
                  <CVButton to="/curriculum">
                    Ver curriculum
                  </CVButton>
                </Box>
              </Box>
            </Col>
            <Col lg="4" sm="12">
              <Box pl="1.25rem">
                <ButtonIcon
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleAbout();
                  }}
                >
                  Hablemos ahora
                </ButtonIcon>
              </Box>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;
