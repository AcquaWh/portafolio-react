import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import { Section, Title, Text } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import imgTrips from "../assets/image/jpg/details/teper-trips.webp";
import imgRoutes from "../assets/image/jpg/details/teper-routes.webp";
import imgScanner from "../assets/image/jpg/details/teper-scanner.webp";
import imgMessages from "../assets/image/jpg/details/teper-messages.webp";
import imgTrip from "../assets/image/jpg/details/teper-trip.webp";
import imgEscaneo from "../assets/image/jpg/details/teper-escaneo.webp";
import imgContabilizacion from "../assets/image/jpg/details/teper-contabilizacion.webp";
import imgAbordados from "../assets/image/jpg/details/teper-abordados.webp";

const HeroSection = styled(Section)`
  margin-top: 92px;
  padding-bottom: 0 !important;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary} !important;
  text-decoration: none !important;
  margin-bottom: 2.5rem;
  transition: opacity 0.2s;
  &:hover { opacity: 0.7; }
`;

const Tag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.85rem;
  border-radius: 500px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  margin: 0 4px 8px 0;
`;

const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 1.5rem;
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin: 2.5rem 0;
`;

const MetaItem = styled.div`
  p.label {
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 4px;
  }
  p.value {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.heading};
    margin: 0;
    line-height: 1.4;
  }
`;

const SectionLabel = styled.p`
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const FeatureCard = styled.div`
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  height: 100%;
  h5 {
    font-size: 0.95rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.heading};
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.84rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
  }
`;


const StoreBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0.65rem 1.5rem;
  border-radius: 8px;
  background: #000;
  color: #fff !important;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none !important;
  transition: opacity 0.25s;
  &:hover { opacity: 0.75; }
`;

const ResultBox = styled.div`
  background: ${({ theme }) => theme.colors.primary}12;
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
`;

const screenshots = [
  { src: imgTrips, label: "Trip List" },
  { src: imgTrip, label: "Trip Detail" },
  { src: imgRoutes, label: "Live Map" },
  { src: imgScanner, label: "QR Scanner" },
  { src: imgEscaneo, label: "Scanning" },
  { src: imgAbordados, label: "Boarded Passengers" },
  { src: imgContabilizacion, label: "Manual Count" },
  { src: imgMessages, label: "Messaging" },
];

const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 3rem;
`;

const CarouselTrack = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  padding-bottom: 8px;
`;

const ScreenshotItem = styled.div`
  flex: 0 0 auto;
  scroll-snap-align: start;
  text-align: center;
  img {
    height: 260px;
    width: auto;
    border-radius: 16px;
    object-fit: cover;
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
    display: block;
  }
  p {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 8px;
  }
`;

const features = [
  {
    title: "Trip Management",
    desc: "Drivers view assigned trips with origin, destination, schedule, and passenger capacity. Tabs separate upcoming and completed trips.",
  },
  {
    title: "Live Trip Map",
    desc: "Real-time route visualization with bus position, stops, and passenger tabs — all in one screen during an active trip.",
  },
  {
    title: "QR Passenger Scanning",
    desc: "Camera-based QR scanner validates passenger tickets on boarding. Instant feedback: verified, not boarded, or successful scan.",
  },
  {
    title: "Manual Passenger Count",
    desc: "Numeric keypad for counting passengers per stop when QR scanning isn't feasible. Occupation percentage tracked live.",
  },
  {
    title: "In-Trip Messaging",
    desc: "Real-time chat between driver, operators, and passengers to communicate delays, route changes, or service updates.",
  },
  {
    title: "Boarding Summary",
    desc: "Live passenger list with boarding status (verified, not completed) and counters — giving drivers full control of capacity.",
  },
];

const TeperPage = () => (
  <PageWrapper>
    <HeroSection>
      <Container>
        <BackLink to="/">← Back to portfolio</BackLink>

        <div className="mb-3">
          {["React Native", "Android", "Real-time", "Firebase"].map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <Title variant="secSm" className="mb-3">
          TEPER Conductores — Driver Mobile App
        </Title>

        <Text css={`max-width: 680px; font-size: 1rem; line-height: 1.7;`}>
          A production React Native app with 4,000+ active users. Drivers manage trips,
          scan passenger QR codes in real time, track live routes, and communicate via
          in-trip messaging — all synchronized through Firebase with sub-second latency.
          Built for reliability: resolved a critical boarding bug and a peak-hour scaling
          outage, both with zero service interruption after the fix.
        </Text>

        <MetaGrid>
          <MetaItem>
            <p className="label">Client</p>
            <p className="value">Didcom / TEPER</p>
          </MetaItem>
          <MetaItem>
            <p className="label">Platform</p>
            <p className="value">Android</p>
          </MetaItem>
          <MetaItem>
            <p className="label">Role</p>
            <p className="value">Frontend Lead</p>
          </MetaItem>
          <MetaItem>
            <p className="label">Stack</p>
            <p className="value">React Native · Firebase · REST API</p>
          </MetaItem>
          <MetaItem>
            <p className="label">Year</p>
            <p className="value">2022 – Present</p>
          </MetaItem>
        </MetaGrid>

        <Row className="mb-5">
          <Col lg="6" className="mb-4">
            <SectionLabel>The Problem</SectionLabel>
            <Text css={`font-size: 0.95rem; line-height: 1.75;`}>
              Bus drivers had no centralized tool to manage their daily operations.
              Passenger boarding was tracked manually on paper, trip information was
              communicated by phone, and there was no real-time visibility into
              route progress or passenger capacity — leading to errors, delays, and
              poor service traceability.
            </Text>
          </Col>
          <Col lg="6" className="mb-4">
            <SectionLabel>The Solution</SectionLabel>
            <Text css={`font-size: 0.95rem; line-height: 1.75;`}>
              TEPER Conductores is a React Native app that gives drivers everything
              in one place: assigned trips, live map tracking, QR-based passenger
              scanning with instant validation, manual boarding count, and real-time
              chat with operators. The app integrates with Firebase for live data
              and a REST API for trip and passenger management.
            </Text>
          </Col>
        </Row>

        <SectionLabel>Features</SectionLabel>
        <Row className="mb-5">
          {features.map((f) => (
            <Col lg="4" md="6" className="mb-4" key={f.title}>
              <FeatureCard>
                <h5>{f.title}</h5>
                <p>{f.desc}</p>
              </FeatureCard>
            </Col>
          ))}
        </Row>


        <SectionLabel>Screenshots</SectionLabel>
        <CarouselWrapper className="mb-5">
          <CarouselTrack>
            {screenshots.map((s) => (
              <ScreenshotItem key={s.label}>
                <img src={s.src} alt={s.label} />
                <p>{s.label}</p>
              </ScreenshotItem>
            ))}
          </CarouselTrack>
        </CarouselWrapper>

        <ResultBox className="mb-5">
          <SectionLabel>Result</SectionLabel>
          <Text css={`font-size: 0.95rem; line-height: 1.75;`}>
            The app is live on Google Play and used in production across multiple clients
            and routes. It replaced fully manual boarding processes, improved trip
            traceability, and enabled real-time communication between drivers and operators.
            I personally resolved a critical boarding bug that blocked 100% of QR-based
            passenger validation in ~3–4 hours, and a peak-hour scaling outage affecting
            ~4,000 active users in ~1–2 hours — both with zero service interruptions after the fix.
          </Text>
          <div className="mt-3">
            <StoreBtn
              href="https://play.google.com/store/apps/details?id=com.teper.conductores"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Play →
            </StoreBtn>
          </div>
        </ResultBox>

      </Container>
    </HeroSection>
  </PageWrapper>
);

export default TeperPage;
