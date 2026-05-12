import React from "react";
import styled, { keyframes } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";

import { Section, Title, Text } from "../components/Core";
import PageWrapper from "../components/PageWrapper";

import imgCover  from "../assets/image/jpg/details/kite.webp";
import imgS1     from "../assets/image/jpg/details/kite-inicio.webp";
import imgS2     from "../assets/image/jpg/details/kite-propietario.webp";
import imgS3     from "../assets/image/jpg/details/kite-admin.webp";

/* ── Animations ── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ── Styled components ── */
const HeroWrap = styled.div`
  margin-top: 92px;
  position: relative;
  overflow: hidden;
  max-height: 540px;
  img {
    width: 100%;
    object-fit: cover;
    display: block;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 180px;
    background: linear-gradient(to bottom, transparent, ${({ theme }) => theme.colors.bg});
  }
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
  background: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  margin: 0 4px 4px 0;
`;

const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  padding: 1.75rem 2rem;
  background: ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  margin: 2.5rem 0;
`;

const MetaItem = styled.div`
  p.label {
    font-size: 0.68rem;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.3rem;
  }
  p.value {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
  }
`;

const SectionLabel = styled.p`
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const HighlightBox = styled.div`
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  padding: 1.25rem 1.5rem;
  background: ${({ theme }) => theme.colors.border};
  border-radius: 0 10px 10px 0;
  margin-bottom: 1rem;
  h6 {
    font-size: 0.88rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.heading};
    margin-bottom: 0.3rem;
  }
  p {
    font-size: 0.82rem;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    margin: 0;
  }
`;

const ScreenCaption = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.ash};
  text-align: center;
  margin-top: 0.6rem;
  font-style: italic;
`;

const ScreenImg = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  display: block;
`;

const Divider = styled.hr`
  border-color: ${({ theme }) => theme.colors.border};
  margin: 3rem 0;
`;

const LiveBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.65rem 1.75rem;
  border-radius: 500px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff !important;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-decoration: none !important;
  transition: opacity 0.25s;
  &:hover { opacity: 0.85; }
`;

const PageAnim = styled.div`
  animation: ${fadeUp} 0.5s ease both;
`;

/* ── Page ── */
const KiteCaseStudy = () => (
  <PageWrapper>
    <PageAnim>

      {/* Cover */}
      <HeroWrap>
        <img src={imgCover} alt="Kite — rental platform" />
      </HeroWrap>

      <Section>
        <Container>
          <BackLink to="/">← Back to portfolio</BackLink>

          <Row>
            {/* ── Main content ── */}
            <Col lg="8" className="pr-lg-5">

              <div className="mb-3">
                <Tag>Angular</Tag>
                <Tag>PHP</Tag>
                <Tag>Openpay</Tag>
                <Tag>Web platform</Tag>
              </div>

              <Title variant="secSm" className="mb-3">
                Kite — Rental platform with online payments
              </Title>

              <Text variant="p" css={`line-height: 1.75; font-size: 0.95rem;`}>
                Kite is a web platform for booking and renting apartments online,
                with a complete multi-role ecosystem: tenants, property owners, and administrators.
                The project included architecture design, full-stack development, and
                integration of a live payment gateway.
              </Text>

              <MetaGrid>
                <MetaItem>
                  <p className="label">Client</p>
                  <p className="value">ALPAE</p>
                </MetaItem>
                <MetaItem>
                  <p className="label">Year</p>
                  <p className="value">2020</p>
                </MetaItem>
                <MetaItem>
                  <p className="label">Role</p>
                  <p className="value">Front-End Lead</p>
                </MetaItem>
                <MetaItem>
                  <p className="label">Stack</p>
                  <p className="value">AngularJS · PHP · Openpay</p>
                </MetaItem>
              </MetaGrid>

              <Divider />

              {/* Challenge */}
              <SectionLabel>The problem</SectionLabel>
              <Text variant="p" css={`line-height: 1.75;`}>
                ALPAE managed their rental properties entirely manually: interested tenants
                called by phone, payments were made in cash or wire transfer,
                and there was no real-time visibility into each apartment's availability.
                The process was slow, error-prone, and not scalable.
              </Text>

              <Divider />

              {/* Solution */}
              <SectionLabel>The solution</SectionLabel>
              <Text variant="p" css={`line-height: 1.75; margin-bottom: 1.5rem;`}>
                We designed and built a web platform with three role-specific portals,
                integrating online payments via Openpay to eliminate friction from
                the apartment booking process.
              </Text>

              <HighlightBox>
                <h6>Tenant portal</h6>
                <p>Search available apartments, book online, and pay securely by card via Openpay. Payment history and contract status in real time.</p>
              </HighlightBox>

              <HighlightBox>
                <h6>Owner portal</h6>
                <p>Dashboard with unit occupancy, monthly income, pending payment status, and tools to manage properties without intermediaries.</p>
              </HighlightBox>

              <HighlightBox>
                <h6>Admin panel</h6>
                <p>Global view of the entire operation: users, properties, transactions, and support. Full control of the rental lifecycle.</p>
              </HighlightBox>

              <Divider />

              {/* Screenshots */}
              <SectionLabel>Screenshots</SectionLabel>

              <div className="mb-4">
                <ScreenImg src={imgS1} alt="Home view — apartment search" />
                <ScreenCaption>Home screen — apartment search and availability</ScreenCaption>
              </div>

              <div className="mb-4">
                <ScreenImg src={imgS2} alt="Owner portal" />
                <ScreenCaption>Owner portal — occupancy and income dashboard</ScreenCaption>
              </div>

              <div className="mb-4">
                <ScreenImg src={imgS3} alt="Admin panel" />
                <ScreenCaption>Admin panel — global platform management</ScreenCaption>
              </div>

              <Divider />

              {/* Result */}
              <SectionLabel>Result</SectionLabel>
              <Text variant="p" css={`line-height: 1.75;`}>
                The platform eliminated 100% of the manual apartment booking process.
                Tenants can complete a booking and payment in under 5 minutes,
                and owners have full visibility into their portfolio without depending
                on the admin team to check unit status.
              </Text>

              <div className="mt-4">
                <LiveBtn
                  href="http://alpae.mx/kite/start"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View live site →
                </LiveBtn>
              </div>

            </Col>

            {/* ── Sidebar ── */}
            <Col lg="4" className="mt-5 mt-lg-0">
              <div style={{ position: "sticky", top: "120px" }}>

                <SectionLabel>Technologies</SectionLabel>
                <div className="mb-4">
                  {["AngularJS", "PHP", "Openpay", "MySQL", "Bootstrap", "npm"].map(t => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <Divider />

                <SectionLabel>My role</SectionLabel>
                <Text css={`font-size: 0.85rem; line-height: 1.7;`}>
                  Led front-end development with AngularJS, designed the architecture
                  for all three portals, and coordinated integration with the PHP backend
                  and the Openpay payment gateway.
                </Text>

                <Divider />

                <SectionLabel>Highlights</SectionLabel>
                <Text css={`font-size: 0.82rem; line-height: 1.7;`}>
                  ✓ Live payment integration with Openpay<br />
                  ✓ 3 user roles with separate views and access<br />
                  ✓ Fully digitized booking process<br />
                  ✓ Real-time dashboard for property owners
                </Text>

                <Divider />

                <BackLink to="/">← Back to portfolio</BackLink>

              </div>
            </Col>
          </Row>
        </Container>
      </Section>

    </PageAnim>
  </PageWrapper>
);

export default KiteCaseStudy;
