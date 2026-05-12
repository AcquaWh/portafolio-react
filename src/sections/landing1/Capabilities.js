import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import { Section, Title, Box } from "../../components/Core";

const Card = styled(Box)`
  padding: 1.75rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  height: 100%;
  transition: border-color 0.3s, box-shadow 0.3s;
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 4px 24px rgba(73, 95, 239, 0.08);
  }
`;

const Number = styled.div`
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const CardTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 0.75rem;
  line-height: 1.3;
`;

const CardText = styled.p`
  font-size: 0.84rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0;
`;

const CardLink = styled(Link)`
  display: inline-block;
  margin-top: 1.25rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary} !important;
  text-decoration: none !important;
  &:hover {
    text-decoration: underline !important;
  }
`;

const CardExternalLink = styled.a`
  display: inline-block;
  margin-top: 1.25rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary} !important;
  text-decoration: none !important;
  &:hover {
    text-decoration: underline !important;
  }
`;

const capabilities = [
  {
    label: "01 — UI/UX",
    title: "Polished UI/UX Design",
    desc: "End-to-end interface delivery from Figma and Adobe XD wireframes to production-ready code. Case studies include Erus, Wingman, Kite, Alumni, Caffenio, and Novutek UI — each covering research, visual design, and implementation.",
    link: "/novutek-ui",
    linkLabel: "View Novutek UI case study",
  },
  {
    label: "02 — Component Design",
    title: "Design Systems & Component Libraries",
    desc: "Built and drove adoption of a shared UI component library (Vue for web, React Native for mobile) across 10+ products at Didcom, reducing developer onboarding from 1–2 months to a few days and eliminating duplicated work.",
    link: "/curriculum",
    linkLabel: "See full experience",
  },
  {
    label: "03 — Motion",
    title: "Animation & Motion Implementation",
    desc: "Built a VR experience with Unity & C# for NASA Space Apps Challenge (local winner). Implements CSS keyframe animations, AOS scroll-triggered effects, and motion-driven transitions across web applications.",
    link: "/nasa-spaceapps",
    linkLabel: "View NASA Space Apps project",
  },
  {
    label: "04 — Prototyping",
    title: "Interactive Prototypes & Design-to-Code",
    desc: "Novutek UI was designed in Photoshop, prototyped in Adobe XD, and delivered in Angular — a complete design-to-code workflow. All portfolio case studies follow the same process: concept, wireframe, prototype, implementation.",
    link: "/novutek-ui",
    linkLabel: "View prototype case study",
  },
  {
    label: "05 — Mobile",
    title: "React Native & Cross-Platform",
    desc: "Fixed a critical bug blocking 100% of QR-based passenger boarding in a production React Native app — resolved in ~3–4 hours with zero escalations. Resolved a scaling issue impacting ~4,000 active users during peak hours. Cross-platform experience with .NET MAUI for iOS and Android.",
    link: "/curriculum",
    linkLabel: "See full experience",
  },
  {
    label: "06 — Code",
    title: "Code Samples & Live Demos",
    desc: "Open-source repositories and live demos available on GitHub. This portfolio is built with Gatsby, React, and styled-components — deployed on Google Cloud Run with nginx, full CSP headers, and immutable asset caching.",
    external: "https://github.com/AcquaWh",
    linkLabel: "View GitHub profile",
  },
];

const Capabilities = () => (
  <Section>
    <Container>
      <Title variant="secSm" className="mb-5" data-aos="fade-up">
        What I build
      </Title>
      <Row>
        {capabilities.map(({ label, title, desc, link, external, linkLabel }, index) => (
          <Col lg="4" md="6" className="mb-4" key={label} data-aos="fade-up" data-aos-delay={`${(index % 3) * 100 + 100}`}>
            <Card>
              <Number>{label}</Number>
              <CardTitle>{title}</CardTitle>
              <CardText>{desc}</CardText>
              {link && <CardLink to={link}>{linkLabel} →</CardLink>}
              {external && (
                <CardExternalLink href={external} target="_blank" rel="noopener noreferrer">
                  {linkLabel} →
                </CardExternalLink>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </Section>
);

export default Capabilities;
