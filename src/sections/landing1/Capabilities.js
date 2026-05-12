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
    desc: "Delivered production interfaces from Figma specs to pixel-perfect code across 6+ client products — Kite (fleet management), Erus (certifications platform), Caffenio (public website), and more. Each project covers visual design, responsive layout, and accessibility.",
    link: "/kite",
    linkLabel: "View Kite case study",
  },
  {
    label: "02 — Component Design",
    title: "Design Systems & Component Libraries",
    desc: "Architected a shared UI component library (Vue + React Native) adopted across 10+ products. Cut developer onboarding from 1–2 months to a few days, eliminated duplicated styles, and enforced design consistency at the org level.",
    link: "/curriculum",
    linkLabel: "See full experience",
  },
  {
    label: "03 — Motion",
    title: "Animation & Motion",
    desc: "Implements Lottie-driven loaders, CSS keyframe transitions, AOS scroll-triggered reveals, and smooth page fade-ins. Built an interactive VR environment in Unity & C# for NASA Space Apps Challenge — awarded local winner.",
    link: "/nasa-spaceapps",
    linkLabel: "View NASA VR project",
  },
  {
    label: "04 — Prototyping",
    title: "Design-to-Code",
    desc: "Novutek UI Kit went from Photoshop mockup → Adobe XD interactive prototype → Angular production build. Every project in this portfolio follows the same end-to-end flow: concept, wireframe, prototype, and live implementation.",
    link: "/novutek-ui",
    linkLabel: "View Novutek UI",
  },
  {
    label: "05 — Mobile",
    title: "React Native & Cross-Platform",
    desc: "Production React Native apps for iOS and Android used by thousands of daily users. Fixed a critical boarding bug affecting 100% of active passengers in ~3–4 hours; resolved a peak-hour scaling outage for ~4,000 users in ~1–2 hours. Also shipped cross-platform apps with .NET MAUI.",
    link: "/curriculum",
    linkLabel: "See full experience",
  },
  {
    label: "06 — Code",
    title: "Live Demos & Code Samples",
    desc: "Projects ship with live URLs, case studies, and code available on GitHub. This portfolio itself — Gatsby + React + styled-components, deployed on Google Cloud Run with CSP headers, immutable caching, and lighthouse-optimized builds.",
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
