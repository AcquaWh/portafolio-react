import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { navigate } from "gatsby";
import GlobalContext from "../../context/GlobalContext";

import { Section, Title, Text } from "../../components/Core";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Avatar = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: linear-gradient(135deg, #495fef 0%, #7b5ea7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1px;
  border: 3px solid rgba(255,255,255,0.2);
  margin-bottom: 1rem;
  flex-shrink: 0;
`;

const StatPill = styled.div`
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 100px;
  padding: 4px 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 4px 4px 4px 0;

  span.num {
    color: #fff;
    font-weight: 700;
    font-size: 0.95rem;
  }
  span.lbl {
    color: rgba(255,255,255,0.75);
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }
`;

const SkillBadge = styled.span`
  display: inline-block;
  background: rgba(73, 95, 239, 0.18);
  border: 1px solid rgba(73, 95, 239, 0.35);
  color: rgba(255,255,255,0.88) !important;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 4px;
  margin: 3px 3px 3px 0;
`;

const SectionLabel = styled.div`
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #495fef;
  margin-bottom: 8px;
  margin-top: 20px;
`;

const Divider = styled.hr`
  border-color: rgba(255,255,255,0.1);
  margin: 20px 0;
`;

const CVLink = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  border-radius: 6px;
  background: #495fef;
  color: #fff !important;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-decoration: none !important;
  border: none;
  cursor: pointer;
  transition: background 0.25s;
  &:hover {
    background: #3a4fd4;
    color: #fff !important;
  }
`;

const LinkSocial = styled.a`
  color: rgba(255,255,255,0.65) !important;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  text-decoration: none !important;
  transition: color 0.25s;
  &:hover {
    color: #fff !important;
  }
`;

const Wrapper = styled.div`
  animation: ${fadeUp} 0.45s ease both;
  p, h1, h2, h3, h4, h5, h6, a {
    color: ${({ theme }) => theme.colors.light} !important;
  }
`;

const skills = [
  "C# · .NET 8/9", "React", "Vue.js", "Angular", "Blazor",
  "React Native", ".NET MAUI", "Google Cloud", "Kubernetes",
  "Cloud Run", "Power BI", "BigQuery", "Claude API", "Gemini API",
];

const About = ({ hero = true, bg = "dark", ...rest }) => {
  const gContext = useContext(GlobalContext);

  const handleCVClick = () => {
    gContext.closeAbout();
    navigate("/curriculum");
  };

  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Wrapper>
          <Container>
            <Row className="justify-content-center">
              <Col lg="9">
                <div className="pt-5 pb-2">
                  {/* Header row */}
                  <div className="d-flex align-items-center mb-4" style={{ gap: "1.25rem" }}>
                    <Avatar>FC</Avatar>
                    <div>
                      <Title color="light" variant="secSm" className="mb-1" style={{ lineHeight: 1.1 }}>
                        Fernanda Cruz
                      </Title>
                      <Text color="primary" variant="small" style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
                        Ingeniera de Software &amp; Líder de Equipo
                      </Text>
                      <div className="d-flex align-items-center" style={{ gap: "12px" }}>
                        <LinkSocial href="https://github.com/AcquaWh" target="_blank" rel="noopener noreferrer">
                          GitHub
                        </LinkSocial>
                        <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
                        <LinkSocial href="https://www.linkedin.com/in/acquawh/" target="_blank" rel="noopener noreferrer">
                          LinkedIn
                        </LinkSocial>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mb-2">
                    <StatPill><span className="num">9+</span><span className="lbl">años de experiencia</span></StatPill>
                    <StatPill><span className="num">8+</span><span className="lbl">años en Didcom</span></StatPill>
                    <StatPill><span className="num">5+</span><span className="lbl">tecnologías en producción</span></StatPill>
                    <StatPill><span className="num">iOS &amp; Android</span><span className="lbl">mobile</span></StatPill>
                  </div>

                  <Divider />

                  {/* Bio */}
                  <SectionLabel>Sobre mí</SectionLabel>
                  <Text color="light" css={`line-height: 1.65; font-size: 0.92rem;`}>
                    Ingeniera de Software con más de 9 años de trayectoria. Comencé como
                    desarrolladora Front-End, crecí a líder del área frontend y hoy dirijo
                    el equipo completo de software en Didcom: defino estándares de código,
                    valido Pull Requests y tomo decisiones arquitectónicas que impactan al negocio.
                  </Text>
                  <Text color="light" className="mt-3" css={`line-height: 1.65; font-size: 0.92rem;`}>
                    Mi enfoque combina ejecución técnica sólida (C# · .NET 8/9, React, APIs REST,
                    Google Cloud) con visión de liderazgo: equipos motivados, entregas a tiempo y
                    arquitectura que escala.
                  </Text>

                  {/* Skills */}
                  <SectionLabel>Stack tecnológico</SectionLabel>
                  <div>
                    {skills.map((s) => (
                      <SkillBadge key={s}>{s}</SkillBadge>
                    ))}
                  </div>

                  <Divider />

                  {/* Footer row */}
                  <div className="d-flex align-items-center justify-content-between flex-wrap" style={{ gap: "12px" }}>
                    <a
                      href="#contact"
                      style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.8rem" }}
                      onClick={(e) => {
                        e.preventDefault();
                        const u = "info";
                        const d = "fernandacruz.com";
                        window.location.href = "mailto:" + u + "@" + d;
                      }}
                    >
                      info@fernandacruz.com
                    </a>
                    <CVLink onClick={handleCVClick}>Ver curriculum completo →</CVLink>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Wrapper>
      </Section>
    </>
  );
};

export default About;
