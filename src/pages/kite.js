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
        <img src={imgCover} alt="Kite — plataforma de arrendamiento" />
      </HeroWrap>

      <Section>
        <Container>
          <BackLink to="/">← Volver al portfolio</BackLink>

          <Row>
            {/* ── Main content ── */}
            <Col lg="8" className="pr-lg-5">

              <div className="mb-3">
                <Tag>Angular</Tag>
                <Tag>PHP</Tag>
                <Tag>Openpay</Tag>
                <Tag>Plataforma web</Tag>
              </div>

              <Title variant="secSm" className="mb-3">
                Kite — Plataforma de arrendamiento con pagos en línea
              </Title>

              <Text variant="p" css={`line-height: 1.75; font-size: 0.95rem;`}>
                Kite es una plataforma web para apartar y rentar departamentos en línea,
                con un ecosistema completo de roles: inquilinos, propietarios y administradores.
                El proyecto incluyó diseño de arquitectura, desarrollo full-stack y la
                integración de un sistema de pagos en producción.
              </Text>

              <MetaGrid>
                <MetaItem>
                  <p className="label">Cliente</p>
                  <p className="value">ALPAE</p>
                </MetaItem>
                <MetaItem>
                  <p className="label">Año</p>
                  <p className="value">2020</p>
                </MetaItem>
                <MetaItem>
                  <p className="label">Rol</p>
                  <p className="value">Front-End Lead</p>
                </MetaItem>
                <MetaItem>
                  <p className="label">Stack</p>
                  <p className="value">AngularJS · PHP · Openpay</p>
                </MetaItem>
              </MetaGrid>

              <Divider />

              {/* Challenge */}
              <SectionLabel>El problema</SectionLabel>
              <Text variant="p" css={`line-height: 1.75;`}>
                ALPAE administraba sus propiedades en arrendamiento de forma completamente manual:
                los interesados llamaban por teléfono, los pagos se hacían en efectivo o transferencia,
                y no existía visibilidad del estado de cada departamento en tiempo real.
                El proceso era lento, propenso a errores y no escalable.
              </Text>

              <Divider />

              {/* Solution */}
              <SectionLabel>La solución</SectionLabel>
              <Text variant="p" css={`line-height: 1.75; margin-bottom: 1.5rem;`}>
                Diseñamos y desarrollamos una plataforma web con tres portales diferenciados
                según el rol del usuario, integrando pagos en línea con Openpay para eliminar
                la fricción del proceso de apartar un departamento.
              </Text>

              <HighlightBox>
                <h6>Portal del inquilino</h6>
                <p>Búsqueda de departamentos disponibles, reserva en línea y pago seguro con tarjeta mediante Openpay. Historial de pagos y estado del contrato en tiempo real.</p>
              </HighlightBox>

              <HighlightBox>
                <h6>Portal del propietario</h6>
                <p>Dashboard con ocupación de unidades, ingresos del mes, estatus de pagos pendientes y herramientas para gestionar sus propiedades sin intermediarios.</p>
              </HighlightBox>

              <HighlightBox>
                <h6>Panel de administración</h6>
                <p>Vista global de toda la operación: usuarios, propiedades, transacciones y soporte. Control total del ciclo de vida del arrendamiento.</p>
              </HighlightBox>

              <Divider />

              {/* Screenshots */}
              <SectionLabel>Vistas del sistema</SectionLabel>

              <div className="mb-4">
                <ScreenImg src={imgS1} alt="Vista de inicio — búsqueda de departamentos" />
                <ScreenCaption>Pantalla de inicio — búsqueda y disponibilidad de departamentos</ScreenCaption>
              </div>

              <div className="mb-4">
                <ScreenImg src={imgS2} alt="Portal del propietario" />
                <ScreenCaption>Portal del propietario — dashboard de ocupación e ingresos</ScreenCaption>
              </div>

              <div className="mb-4">
                <ScreenImg src={imgS3} alt="Panel de administración" />
                <ScreenCaption>Panel de administración — gestión global de la plataforma</ScreenCaption>
              </div>

              <Divider />

              {/* Result */}
              <SectionLabel>Resultado</SectionLabel>
              <Text variant="p" css={`line-height: 1.75;`}>
                La plataforma eliminó el 100% del proceso manual de apartar departamentos.
                Los inquilinos pueden completar una reserva y pago en menos de 5 minutos,
                y los propietarios tienen visibilidad completa de su cartera sin depender
                del equipo de administración para consultar el estatus de sus unidades.
              </Text>

              <div className="mt-4">
                <LiveBtn
                  href="http://alpae.mx/kite/start"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver sitio en vivo →
                </LiveBtn>
              </div>

            </Col>

            {/* ── Sidebar ── */}
            <Col lg="4" className="mt-5 mt-lg-0">
              <div style={{ position: "sticky", top: "120px" }}>

                <SectionLabel>Tecnologías</SectionLabel>
                <div className="mb-4">
                  {["AngularJS", "PHP", "Openpay", "MySQL", "Bootstrap", "npm"].map(t => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <Divider />

                <SectionLabel>Mi rol</SectionLabel>
                <Text css={`font-size: 0.85rem; line-height: 1.7;`}>
                  Lideré el desarrollo front-end con AngularJS, diseñé la arquitectura
                  de los tres portales y coordiné la integración con el backend PHP y
                  la pasarela de pagos Openpay.
                </Text>

                <Divider />

                <SectionLabel>Highlights</SectionLabel>
                <Text css={`font-size: 0.82rem; line-height: 1.7;`}>
                  ✓ Integración de pagos en producción con Openpay<br />
                  ✓ 3 roles de usuario con accesos y vistas diferenciadas<br />
                  ✓ Proceso de reserva completamente digitalizado<br />
                  ✓ Dashboard en tiempo real para propietarios
                </Text>

                <Divider />

                <BackLink to="/">← Volver al portfolio</BackLink>

              </div>
            </Col>
          </Row>
        </Container>
      </Section>

    </PageAnim>
  </PageWrapper>
);

export default KiteCaseStudy;
