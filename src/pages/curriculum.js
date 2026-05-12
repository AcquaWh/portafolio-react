import React, { useEffect } from "react";
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
    html, body {
      height: auto !important;
      min-height: 0 !important;
      overflow: visible !important;
    }
    .site-wrapper {
      min-height: 0 !important;
      overflow: visible !important;
      height: auto !important;
    }
    * { animation: none !important; transition: none !important; }
    header, footer, nav,
    .site-wrapper > header,
    .site-wrapper > footer { display: none !important; }
    /* Hide loader, modals, offcanvas — they add blank pages */
    #loading,
    [class*="Modal"],
    [class*="Offcanvas"],
    [class*="ThemeSwitch"],
    [class*="ModalVideo"] { display: none !important; }
    body { font-size: 11pt; color: #000; background: #fff; }
    .no-print { display: none !important; }
    a { color: #495fef !important; text-decoration: none !important; }
    /* Remove all section padding */
    section, section[class*="Section"] {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
    /* Avoid cutting timeline items */
    div[class*="TimelineItem"] { page-break-inside: avoid; }
    div[class*="LogroItem"] { page-break-inside: avoid; }
    div[class*="EduItem"] { page-break-inside: avoid; }
    /* Remove decorative backgrounds */
    div[class*="HeroSection"]::before { display: none !important; }
    div[class*="HeroSection"] { background: #fff !important; padding-top: 0.5cm !important; }
    /* Side-by-side columns in print — clearfix on row */
    .col-lg-7 { width: 58% !important; float: left !important; padding-right: 1cm !important; }
    .col-lg-5 { width: 40% !important; float: right !important; }
    .row::after { content: ""; display: table; clear: both; }
    /* No trailing space after last element */
    body > *, .site-wrapper > * { page-break-after: avoid; }
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

const CurriculumPage = () => {
  useEffect(() => {
    const allDivs = () => document.querySelectorAll("div");

    const beforePrint = () => {
      allDivs().forEach((el) => {
        el.dataset.pb = el.style.paddingBottom;
        el.dataset.pt = el.style.paddingTop;
        el.style.setProperty("padding-bottom", "0", "important");
        el.style.setProperty("padding-top", "0", "important");
      });
    };

    const afterPrint = () => {
      allDivs().forEach((el) => {
        el.style.paddingBottom = el.dataset.pb || "";
        el.style.paddingTop = el.dataset.pt || "";
      });
    };

    window.addEventListener("beforeprint", beforePrint);
    window.addEventListener("afterprint", afterPrint);
    return () => {
      window.removeEventListener("beforeprint", beforePrint);
      window.removeEventListener("afterprint", afterPrint);
    };
  }, []);

  return (
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
          Frontend Engineer &amp; Engineering Lead
        </Title>
        <Text className="mt-3" css={`max-width: 640px; font-size: 0.9rem; line-height: 1.6;`}>
          Frontend Engineer with 9+ years of experience building web and mobile applications for clients
          in the mobility, transportation, and tourism industries. I focus on creating fast, user-centered
          interfaces and working with serverless and cloud technologies to build scalable applications.
          I have also led engineering teams and helped improve product stability and delivery quality
          across multiple projects.
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
          <a href="https://github.com/AcquaWh" target="_blank" rel="noopener noreferrer">
            github.com/AcquaWh
          </a>
        </ContactRow>
        <DownloadBtn
          href="#"
          className="no-print"
          onClick={e => { e.preventDefault(); window.print(); }}
        >
          Download Curriculum
        </DownloadBtn>
      </Container>
    </HeroSection>

    {/* ── CONTENIDO ── */}
    <Section>
      <Container>
        <Row>

          {/* ── COLUMNA IZQUIERDA: Experiencia ── */}
          <Col lg="7" className="pr-lg-5 mb-5 mb-lg-0">
            <SectionLabel>Work Experience</SectionLabel>
            <Divider />

            <TimelineWrap>

              <TimelineItem>
                <Title variant="cardSm">Software Team Lead</Title>
                <JobMeta>
                  <Company>Grupo Tecnológico DIDCOM, S.A. de C.V.</Company>
                  <Period>Sep 2025 – Present</Period>
                </JobMeta>
                <BulletList>
                  <li>Took ownership of a web app in crisis (20+ bugs per release, CEO escalations); implemented code reviews and quality standards, leading a 3-engineer team. Reduced defects to near zero within weeks and restored predictable delivery across Vue, .NET, and cloud (Cloud Run, Kubernetes, Cloud Functions, BigQuery, Firebase).</li>
                  <li>Built KPI dashboards to track rework, delivery commitments, and post-release incidents, reducing incidents by ~80–90% and improving overall team productivity.</li>
                  <li>Resolved a critical scaling issue on a client's servers impacting a React Native app used by ~4,000 users (100% of active clients) during peak hours (6–7 AM); partnered with the client to diagnose and fix the issue, restoring full production within ~1–2 hours and preventing recurrence.</li>
                </BulletList>
                <TagList>
                  {[".NET 8", ".NET 9", ".NET MAUI", "Blazor", "React", "React Native", "Vue.js", "Cloud Run", "Kubernetes", "BigQuery", "Firebase", "Claude API", "Gemini API"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </TimelineItem>

              <TimelineItem>
                <Title variant="cardSm">Frontend Engineering Lead</Title>
                <JobMeta>
                  <Company>Grupo Tecnológico DIDCOM, S.A. de C.V.</Company>
                  <Period>Jun 2023 – Sep 2025</Period>
                </JobMeta>
                <BulletList>
                  <li>Owned web and mobile frontend teams; built and drove adoption of a shared UI component library (Vue for web, React Native for mobile) across 10+ products, reducing onboarding from 1–2 months to a few days (~80–90%) and eliminating duplicated work.</li>
                </BulletList>
                <TagList>
                  {["React", "React Native", "Vue.js", "TypeScript", "Figma", "Scrum", "Kanban", "Jira"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </TimelineItem>

              <TimelineItem>
                <Title variant="cardSm">Frontend Engineer</Title>
                <JobMeta>
                  <Company>Grupo Tecnológico DIDCOM, S.A. de C.V.</Company>
                  <Period>Mar 2021 – Jun 2023</Period>
                </JobMeta>
                <BulletList>
                  <li>Took ownership of an undocumented React Native app by reverse-engineering its architecture and delivering complete documentation in ~1 week, reducing onboarding time by ~70–80% and improving team productivity.</li>
                  <li>Fixed a critical bug in a React Native app blocking 100% of QR-based passenger boarding; diagnosed and resolved within ~3–4 hours, restoring full operation the same day with zero escalations.</li>
                </BulletList>
                <TagList>
                  {[".NET", "Vue.js", "React Native", "MVC", "Figma", "Jira"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </TimelineItem>

              <TimelineItem>
                <Title variant="cardSm">Frontend Engineering Lead</Title>
                <JobMeta>
                  <Company>Ludens / Media Aérea</Company>
                  <Period>Feb 2022 – Apr 2022 · Contract / Part-time</Period>
                </JobMeta>
                <BulletList>
                  <li>Led a 3-engineer team during afternoon/night shifts to build a drag-and-drop feature in an Angular web app with AI-powered dinner recipe suggestions; delivered in ~2–3 weeks, reducing user meal selection time by ~50% and improving feature engagement.</li>
                </BulletList>
                <TagList>
                  {["Angular", "TypeScript"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </TimelineItem>

              <TimelineItem>
                <Title variant="cardSm">Frontend Engineer</Title>
                <JobMeta>
                  <Company>ALPAE Asesores Corporativos</Company>
                  <Period>Apr 2020 – Mar 2021</Period>
                </JobMeta>
                <BulletList>
                  <li>Built and launched a corporate e-learning platform (Angular, PHP) from scratch used by multiple companies (~100+ users), reducing training costs ~30–50% and enabling immediate employee onboarding.</li>
                  <li>Owned end-to-end delivery of a hotel reservation web app (Angular), including UI/UX design from scratch; enabled digital bookings, reducing manual processes ~40% and supporting 50+ active users.</li>
                  <li>Developed and enhanced an e-commerce web app (Angular + PHP) enabling users to buy/sell products and redeem vouchers; supported 100+ users, improved checkout and voucher flows, and increased successful transactions by ~20–30%.</li>
                  <li>Built a video calling platform from scratch (Angular + web services), enabling real-time communication for 80+ users; delivered core features including session management and call stability, supporting reliable virtual interactions.</li>
                </BulletList>
                <TagList>
                  {["Angular", "PHP", "Figma", "UX/UI"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </TimelineItem>

              <TimelineItem>
                <Title variant="cardSm">Software Engineer (Owner, Part-time)</Title>
                <JobMeta>
                  <Company>HostedRed</Company>
                  <Period>Jan 2017 – Sep 2021 · Own Business</Period>
                </JobMeta>
                <BulletList>
                  <li>Owned and led end-to-end development of a dental certification platform, managing a team of 4–5 engineers; defined product strategy, architecture, and delivery while building a full-stack system (Node.js, Angular, Laravel) used by 2,000+ doctors.</li>
                </BulletList>
                <TagList>
                  {["Node.js", "Angular", "Laravel", "UX/UI"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </TimelineItem>

              <TimelineItem>
                <Title variant="cardSm">Software Engineer</Title>
                <JobMeta>
                  <Company>Mawe Tecnologías</Company>
                  <Period>Jun 2019 – May 2020</Period>
                </JobMeta>
                <BulletList>
                  <li>Built and launched a university job platform from scratch (Laravel, PHP, MySQL), enabling 1,000+ alumni to apply to jobs online and companies to post vacancies; eliminated manual CV handling and introduced digital tracking of employment outcomes.</li>
                </BulletList>
                <TagList>
                  {["Laravel", "PHP", "MySQL", "APIs REST"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </TimelineItem>

              <TimelineItem>
                <Title variant="cardSm">Frontend Engineer</Title>
                <JobMeta>
                  <Company>Novutek</Company>
                  <Period>Jan 2019 – Sep 2019</Period>
                </JobMeta>
                <BulletList>
                  <li>Led UX/UI design and frontend development of a Moodle-based onboarding platform (Angular, Laravel), replacing a fully manual process; enabled 100+ employees to onboard through a structured digital flow, reducing onboarding time by 50%+ and significantly lowering HR workload.</li>
                </BulletList>
                <TagList>
                  {["Angular", "Laravel", "PHP", "Moodle", "UX/UI"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </TimelineItem>

            </TimelineWrap>
          </Col>

          {/* ── COLUMNA DERECHA ── */}
          <Col lg="5">

            {/* Stack */}
            <Box mb="2.5rem">
              <SectionLabel>Tech Stack</SectionLabel>
              <Divider />

              <SkillBlock>
                <SkillLabel>Backend</SkillLabel>
                <TagList>
                  {["C#", ".NET (Core, Framework)", "REST APIs", "Node.js", "PHP (Laravel)"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </SkillBlock>

              <SkillBlock>
                <SkillLabel>Frontend</SkillLabel>
                <TagList>
                  {["React", "Vue", "Angular", "TypeScript", "HTML", "SCSS"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </SkillBlock>

              <SkillBlock>
                <SkillLabel>Mobile</SkillLabel>
                <TagList>
                  {["React Native", ".NET MAUI", "iOS (Swift)", "Android"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </SkillBlock>

              <SkillBlock>
                <SkillLabel>Cloud &amp; DevOps</SkillLabel>
                <TagList>
                  {["GCP (Cloud Run, Kubernetes, BigQuery, Cloud Functions)", "Azure", "Docker", "CI/CD"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </SkillBlock>

              <SkillBlock>
                <SkillLabel>AI &amp; Data</SkillLabel>
                <TagList>
                  {["Claude API", "Gemini API", "BigQuery", "Power BI", "Looker Studio"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </SkillBlock>

              <SkillBlock>
                <SkillLabel>Engineering &amp; Tools</SkillLabel>
                <TagList>
                  {["Git", "GitHub", "Azure DevOps", "Jira", "Scrum", "Kanban"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </SkillBlock>

              <SkillBlock>
                <SkillLabel>Design</SkillLabel>
                <TagList>
                  {["Figma", "Adobe Creative Suite"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagList>
              </SkillBlock>
            </Box>

            {/* Education */}
            <Box mb="2.5rem">
              <SectionLabel>Education</SectionLabel>
              <Divider />

              <EduItem>
                <Title variant="cardSm">Degree in Multimedia Production Engineering</Title>
                <Company>ULSA – Universidad La Salle Noroeste</Company>
                <Text variant="small" css={`display:block; margin-top: 0.2rem;`}>Aug 2015 – Jun 2020</Text>
              </EduItem>

              <EduItem>
                <Title variant="cardSm">Diploma in Video Game Development (Unity, C#)</Title>
                <Company>ITSON – Instituto Tecnológico de Sonora</Company>
                <Text variant="small" css={`display:block; margin-top: 0.2rem;`}>Nov 2019 – Jan 2020</Text>
              </EduItem>
            </Box>

            {/* Awards */}
            <Box mb="2.5rem">
              <SectionLabel>Awards &amp; Achievements</SectionLabel>
              <Divider />

              <LogroItem>
                <Title variant="cardSm" className="mb-1">Local Winner — NASA Space Apps Challenge 2019</Title>
                <Text variant="small">Built a VR experience using Unity and C# to raise awareness of planetary pollution; recognized for innovation and social impact.</Text>
              </LogroItem>

              <LogroItem>
                <Title variant="cardSm" className="mb-1">Winner — Arizona Women Hackathon 2019</Title>
                <Text variant="small">Built an iOS app in Swift enabling communication for hearing-impaired users; delivered a functional prototype within the hackathon timeframe.</Text>
              </LogroItem>

              <LogroItem>
                <Title variant="cardSm" className="mb-1">Rapid Career Growth — Didcom</Title>
                <Text variant="small">Promoted from individual contributor to software organization lead in &lt;5 years, owning team structure and technical strategy.</Text>
              </LogroItem>
            </Box>

            {/* Languages */}
            <Box mb="2.5rem">
              <SectionLabel>Languages</SectionLabel>
              <Divider />
              <LangRow>
                <LangItem>
                  <Text css={`font-weight: 700; font-size: 0.85rem;`}>Spanish</Text>
                  <Text variant="small">Native</Text>
                </LangItem>
                <LangItem>
                  <Text css={`font-weight: 700; font-size: 0.85rem;`}>English</Text>
                  <Text variant="small">B2 (Upper-Intermediate)</Text>
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
};

export default CurriculumPage;
