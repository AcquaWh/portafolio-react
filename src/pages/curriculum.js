import React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text, Box } from "../components/Core";
import bgHeroPattern from "../assets/image/webp/hero-pattern.webp";
import imgL from "../assets/image/jpg/avatar.jpg";

const HideFooter = createGlobalStyle`
  .site-wrapper > footer { display: none !important; }
`;

const PrintStyles = createGlobalStyle`
  @media print {
    @page { margin: 1.2cm 1.5cm; size: A4; }
    header, footer, nav,
    .site-wrapper > header,
    .site-wrapper > footer { display: none !important; }
    body { font-size: 11pt; color: #000; background: #fff; }
    .no-print { display: none !important; }
    a { color: #495fef !important; text-decoration: none !important; }
    /* Hero */
    section[class*="Section"] { padding-top: 0 !important; }
    /* Evitar que el timeline se corte */
    div[class*="TimelineItem"] { page-break-inside: avoid; }
    div[class*="LogroItem"] { page-break-inside: avoid; }
    div[class*="EduItem"] { page-break-inside: avoid; }
    /* Quitar sombras y backgrounds decorativos */
    div[class*="HeroSection"]::before { display: none !important; }
    div[class*="HeroSection"] { background: #fff !important; padding-top: 0.5cm !important; }
    /* Columnas lado a lado en print */
    .col-lg-7 { width: 58% !important; float: left !important; padding-right: 1cm !important; }
    .col-lg-5 { width: 40% !important; float: right !important; }
  }
`;

/* ── Hero ── */
const HeroSection = styled(Section)`
  &::before {
    position: absolute;
    top: 0;
    content: "";
    width: 100%;
    height: 100%;
    background: url(${bgHeroPattern}) top center no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50rem;
  object-fit: cover;
  margin-bottom: 1.5rem;
`;

const ContactRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  margin-top: 1rem;
  a {
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-decoration: none;
    &:hover { color: ${({ theme }) => theme.colors.primary}; }
  }
`;

const DownloadBtn = styled.a`
  display: inline-flex;
  align-items: center;
  margin-top: 1.75rem;
  padding: 0.55rem 1.5rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 500px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  transition: all 0.3s;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff !important;
    text-decoration: none;
  }
`;

/* ── Layout interno ── */
const Divider = styled.hr`
  border-color: ${({ theme }) => theme.colors.border};
  margin: 0 0 2rem;
`;

const SectionLabel = styled.p`
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

/* ── Timeline ── */
const TimelineWrap = styled.div`
  position: relative;
  padding-left: 1.5rem;
  &::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: ${({ theme }) => theme.colors.border};
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 2rem;
  &::before {
    content: "";
    position: absolute;
    left: -1.5rem;
    top: 7px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.bg};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }
`;

const JobMeta = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
`;

const Company = styled.span`
  font-size: 0.82rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const Period = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.ash};
  font-weight: 400;
  &::before { content: "·"; margin-right: 0.4rem; }
`;

const BulletList = styled.ul`
  margin: 0.4rem 0 0.6rem;
  padding-left: 1.1rem;
  li {
    font-size: 0.82rem;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    margin-bottom: 0.15rem;
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 0.5rem;
`;

const Tag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 500px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  background: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
`;

/* ── Sidebar ── */
const SkillBlock = styled.div`
  margin-bottom: 1.5rem;
`;

const SkillLabel = styled.p`
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 0.5rem;
`;

const LogroItem = styled.div`
  padding: 1.1rem 1.25rem;
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.border};
  border-radius: 0 8px 8px 0;
  margin-bottom: 0.85rem;
`;

const EduItem = styled.div`
  margin-bottom: 1.5rem;
`;

const LangRow = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const LangItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const PageFade = styled.div`
  animation: ${fadeIn} 0.55s ease forwards;
`;

const CurriculumPage = () => (
  <PageWrapper>
    <HideFooter />
    <PrintStyles />
    <PageFade>

    {/* ── HERO ── */}
    <HeroSection hero className="position-relative">
      <Container>
        <Avatar src={imgL} alt="Fernanda Cruz" />
        <Title variant="hero">Fernanda Cruz</Title>
        <Title variant="card" color="primary" className="mt-2">
          Ingeniera de Software &amp; Líder de Equipo
        </Title>
        <Text className="mt-3" css={`max-width: 620px; font-size: 0.9rem; line-height: 1.6;`}>
          Ingeniera de Software con más de 9 años de experiencia en desarrollo full-stack y liderazgo técnico.
          Especializada en arquitecturas modernas con .NET Core, Vue.js, React y cloud (Azure / GCP).
          Apasionada por la calidad del código, las metodologías ágiles y el desarrollo de equipos de alto rendimiento.
        </Text>
        <ContactRow>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              const u = "info"; const d = "fernandacruz.com";
              window.location.href = "mailto:" + u + "@" + d;
            }}
          >
            info@fernandacruz.com
          </a>
          <a href="https://www.linkedin.com/in/acquawh/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/acquawh
          </a>
          <a href="https://github.com/AcquaWh" target="_blank" rel="noopener noreferrer">
            github.com/AcquaWh
          </a>
        </ContactRow>
        <DownloadBtn
          href="#"
          className="no-print"
          onClick={e => { e.preventDefault(); window.print(); }}
        >
          Descargar CV
        </DownloadBtn>
      </Container>
    </HeroSection>

    {/* ── CONTENIDO ── */}
    <Section>
      <Container>
        <Row>

          {/* ── COLUMNA IZQUIERDA: Experiencia ── */}
          <Col lg="7" className="pr-lg-5 mb-5 mb-lg-0">
            <SectionLabel>Experiencia laboral</SectionLabel>
            <Divider />

            <TimelineWrap>

              <TimelineItem>
                <Title variant="cardSm">Software Engineering Leader</Title>
                <JobMeta>
                  <Company>Didcom Connecting Innovations</Company>
                  <Period>sept 2025 – presente</Period>
                </JobMeta>
                <BulletList>
                  <li>Gestión completa del ciclo de vida del proyecto: análisis de requerimientos, estimaciones de tiempo, cronogramas, release notes y seguimiento bajo estándares ISO 9001.</li>
                  <li>Canal transversal entre áreas comercial, hardware y software para asegurar el entendimiento del producto, su despliegue y comercialización.</li>
                  <li>Liderazgo técnico de equipos de desarrollo frontend y backend: revisión de PRs, estándares de código y decisiones arquitectónicas.</li>
                  <li>Arquitectura con .NET Core, .NET MAUI, Blazor, React JS, React Native y Vue.js.</li>
                  <li>Gestión de infraestructura cloud en Azure y GCP (Cloud Run, Cloud Tasks, VM, BigQuery).</li>
                  <li>Implementación de pipelines CI/CD con Azure DevOps.</li>
                  <li>Integración de IA mediante Claude API y Gemini API.</li>
                </BulletList>
                <TagList>
                  {[".NET 8", ".NET 9", ".NET MAUI", "Blazor", "React", "React Native", "Vue.js", "Azure", "GCP", "Claude API", "Gemini API"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </TimelineItem>

              <TimelineItem>
                <Title variant="cardSm">Front-End Leader</Title>
                <JobMeta>
                  <Company>Didcom Connecting Innovations</Company>
                  <Period>jun 2023 – ene 2026</Period>
                </JobMeta>
                <BulletList>
                  <li>Dirección del equipo frontend, definición de estándares y revisión de código.</li>
                  <li>Diseño de arquitectura de componentes reutilizables con Vue.js y React.</li>
                  <li>Metodologías ágiles (Scrum / Kanban) con Jira y Monday.</li>
                </BulletList>
                <TagList>
                  {["React", "Vue.js", "TypeScript", "Figma", "Scrum", "Kanban", "Jira", "Monday"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </TimelineItem>

              <TimelineItem>
                <Title variant="cardSm">Software Developer Front-End</Title>
                <JobMeta>
                  <Company>Didcom Connecting Innovations</Company>
                  <Period>mar 2021 – jun 2023</Period>
                </JobMeta>
                <BulletList>
                  <li>Desarrollo de interfaces con .NET, Vue.js y arquitectura MVC.</li>
                  <li>Diseño UI/UX con Figma.</li>
                </BulletList>
                <TagList>
                  {[".NET", "Vue.js", "MVC", "Figma", "Jira"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </TimelineItem>

              <TimelineItem>
                <Title variant="cardSm">Desarrolladora Front-End</Title>
                <JobMeta>
                  <Company>Ludens</Company>
                  <Period>feb 2022 – abr 2022 · Freelance</Period>
                </JobMeta>
                <BulletList>
                  <li>Desarrollo de Front y Back Office de Dasana en Angular.</li>
                  <li>Capacitación de personal nuevo en el área de Frontend.</li>
                </BulletList>
                <TagList>
                  {["Angular"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </TimelineItem>

              <TimelineItem>
                <Title variant="cardSm">Front-End Developer</Title>
                <JobMeta>
                  <Company>ALPAE Asesores Corporativos</Company>
                  <Period>abr 2020 – mar 2021</Period>
                </JobMeta>
                <BulletList>
                  <li>Desarrollo de aplicaciones web en Angular: proyectos Erus, Wingman y Kite.</li>
                  <li>Plataforma Certificate para capacitación de empleados.</li>
                </BulletList>
                <TagList>
                  {["Angular", "Erus", "Wingman", "Kite"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </TimelineItem>

              <TimelineItem>
                <Title variant="cardSm">Fundadora &amp; Desarrolladora Full-Stack</Title>
                <JobMeta>
                  <Company>HostedRed</Company>
                  <Period>ene 2017 – sept 2021 · Freelance</Period>
                </JobMeta>
                <BulletList>
                  <li>Desarrollo full-stack con Node.js, Java, Angular, Laravel y diseño UX/UI.</li>
                  <li>Sitio web y sistema de registro para el Colegio de Odontólogos de Venezuela.</li>
                  <li>Sistemas de inscripción y big data para eventos con miles de estudiantes.</li>
                </BulletList>
                <TagList>
                  {["Node.js", "Java", "Angular", "Laravel", "UX/UI"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </TimelineItem>

              <TimelineItem>
                <Title variant="cardSm">Full Stack Developer</Title>
                <JobMeta>
                  <Company>Mawe Tecnologías</Company>
                  <Period>jun 2019 – may 2020</Period>
                </JobMeta>
                <BulletList>
                  <li>Frontend y backend con Laravel, PHP, WordPress y APIs REST.</li>
                  <li>Proyectos: Caffenio (diseño web), STEM (inventario universitario), ULSA (bolsa de trabajo).</li>
                </BulletList>
                <TagList>
                  {["Laravel", "PHP", "WordPress", "APIs REST"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </TimelineItem>

              <TimelineItem>
                <Title variant="cardSm">Practicante Desarrolladora</Title>
                <JobMeta>
                  <Company>Novutek</Company>
                  <Period>ene 2019 – sept 2019</Period>
                </JobMeta>
                <BulletList>
                  <li>Desarrollo de plataforma educativa para empleados en PHP y Moodle.</li>
                </BulletList>
                <TagList>
                  {["PHP", "Moodle"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </TimelineItem>

            </TimelineWrap>
          </Col>

          {/* ── COLUMNA DERECHA ── */}
          <Col lg="5">

            {/* Stack */}
            <Box mb="2.5rem">
              <SectionLabel>Stack tecnológico</SectionLabel>
              <Divider />

              <SkillBlock>
                <SkillLabel>Backend</SkillLabel>
                <TagList>
                  {["C#", ".NET 8", ".NET 9", ".NET Core", ".NET Framework", "REST APIs", "PHP", "Laravel", "Node.js"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </SkillBlock>

              <SkillBlock>
                <SkillLabel>Frontend</SkillLabel>
                <TagList>
                  {["React", "Vue.js", "Angular", "Blazor", "Razor", "TypeScript", "HTML/SCSS", "Bootstrap", "Vuetify"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </SkillBlock>

              <SkillBlock>
                <SkillLabel>Móvil</SkillLabel>
                <TagList>
                  {["React Native", ".NET MAUI", "MAUI Blazor", "iOS", "Android"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </SkillBlock>

              <SkillBlock>
                <SkillLabel>Cloud &amp; DevOps</SkillLabel>
                <TagList>
                  {["Azure DevOps", "Docker", "Kubernetes", "Cloud Run", "Cloud Tasks", "VM", "BigQuery", "CI/CD"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </SkillBlock>

              <SkillBlock>
                <SkillLabel>Inteligencia Artificial</SkillLabel>
                <TagList>
                  {["Claude API", "Gemini API", "Integración de IA"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </SkillBlock>

              <SkillBlock>
                <SkillLabel>Datos &amp; Reportes</SkillLabel>
                <TagList>
                  {["Power BI", "Looker Studio", "BigQuery"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </SkillBlock>

              <SkillBlock>
                <SkillLabel>Gestión</SkillLabel>
                <TagList>
                  {["Jira", "Monday", "Kanban", "Scrum", "Git", "GitHub", "Azure DevOps"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </SkillBlock>

              <SkillBlock>
                <SkillLabel>Diseño</SkillLabel>
                <TagList>
                  {["Figma", "Photoshop", "Adobe Illustrator", "Looker Studio"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </SkillBlock>
            </Box>

            {/* Educación */}
            <Box mb="2.5rem">
              <SectionLabel>Educación</SectionLabel>
              <Divider />

              <EduItem>
                <Title variant="cardSm">Lic. Ingeniería en Producción Multimedia</Title>
                <Company>ULSA – Universidad La Salle Noroeste</Company>
                <Text variant="small" css={`display:block; margin-top: 0.2rem;`}>ago 2015 – jun 2020</Text>
              </EduItem>

              <EduItem>
                <Title variant="cardSm">Diplomado en Desarrollo de Videojuegos</Title>
                <Company>ITSON – Instituto Tecnológico de Sonora</Company>
                <Text variant="small" css={`display:block; margin-top: 0.2rem;`}>nov 2019 – ene 2020 · Unity con C#</Text>
              </EduItem>
            </Box>

            {/* Reconocimientos */}
            <Box mb="2.5rem">
              <SectionLabel>Reconocimientos</SectionLabel>
              <Divider />

              <LogroItem>
                <Title variant="cardSm" className="mb-1">NASA Space Apps Challenge 2019</Title>
                <Text variant="small">Ganadora local y nominada global. Proyecto de Realidad Virtual con Unity y C#.</Text>
              </LogroItem>

              <LogroItem>
                <Title variant="cardSm" className="mb-1">Arizona Woman Hackathon 2019</Title>
                <Text variant="small">Ganadora. App móvil para iPhone que ayuda a personas sordomudas a comunicarse mediante símbolos, programada en Swift.</Text>
              </LogroItem>

              <LogroItem>
                <Title variant="cardSm" className="mb-1">Líder de equipo de software</Title>
                <Text variant="small">Crecí de desarrolladora a líder del área completa de software en Didcom en menos de 5 años.</Text>
              </LogroItem>
            </Box>

            {/* Idiomas */}
            <Box mb="2.5rem">
              <SectionLabel>Idiomas</SectionLabel>
              <Divider />
              <LangRow>
                <LangItem>
                  <Text css={`font-weight: 700; font-size: 0.85rem;`}>Español</Text>
                  <Text variant="small">Nativo</Text>
                </LangItem>
                <LangItem>
                  <Text css={`font-weight: 700; font-size: 0.85rem;`}>Inglés</Text>
                  <Text variant="small">B1</Text>
                </LangItem>
              </LangRow>
            </Box>

          </Col>
        </Row>
      </Container>
    </Section>

    </PageFade>
  </PageWrapper>
);

export default CurriculumPage;
