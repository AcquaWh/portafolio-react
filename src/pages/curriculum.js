/**
 * curriculum.js
 *
 * Interactive résumé page for Fernanda Cruz's portfolio.
 *
 * Key behaviors:
 *  - Hides the site footer so the page looks like a standalone document.
 *  - Provides a "Download Curriculum" button that triggers a direct PDF download
 *    from /CV_FernandaCruz.pdf (served from the Gatsby static/ folder).
 *  - Cross-browser print support (Chrome + Firefox): inline spacing injected by
 *    styled-system is stripped before the browser captures the print layout, then
 *    restored after, so the PDF comes out without large blank pages.
 *  - Layout: two-column — left 58% for Work Experience timeline, right 42% for
 *    Tech Stack, Education, Awards, and Languages.
 */

import React, { useEffect } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text, Box } from "../components/Core";
import bgHeroPattern from "../assets/image/webp/hero-pattern.webp";

// Hides the global site footer on this page — the CV is a self-contained document
// and the footer adds unnecessary content when printing.
const HideFooter = createGlobalStyle`
  .site-wrapper > footer { display: none !important; }
`;

/**
 * Global print stylesheet injected via styled-components' createGlobalStyle.
 * Applied only inside @media print so it never affects the on-screen layout.
 *
 * Goals:
 *  1. Set A4 page size and margins.
 *  2. Remove any element that is not part of the CV content (header, modals, etc.).
 *  3. Prevent blank pages caused by min-height or animation state on wrappers.
 *  4. Keep the two-column layout intact using float-based columns (Bootstrap's
 *     flex grid doesn't work reliably in print mode).
 *  5. Prevent page breaks in the middle of timeline or award cards.
 */
const PrintStyles = createGlobalStyle`
  @media print {
    @page { margin: 1.2cm 1.5cm; size: A4; }

    html, body {
      height: auto !important;
      min-height: 0 !important;
      overflow: visible !important;
    }

    /* Prevent viewport-height containers from creating blank pages */
    * { min-height: 0 !important; animation: none !important; transition: none !important; }

    .site-wrapper { overflow: visible !important; height: auto !important; }

    /* Remove navigation chrome — only CV content should print */
    header, footer, nav,
    .site-wrapper > header,
    .site-wrapper > footer { display: none !important; }

    /* Hide UI overlays that would otherwise print as blank pages */
    #loading,
    [class*="Modal"],
    [class*="Offcanvas"],
    [class*="ThemeSwitch"],
    [class*="ModalVideo"] { display: none !important; }

    body { font-size: 11pt; color: #000; background: #fff; }

    /* .no-print is applied to the Download button so it doesn't appear on paper */
    .no-print { display: none !important; }

    a { color: #495fef !important; text-decoration: none !important; }

    /*
     * page-break-inside: avoid keeps each job, award, and education entry on a
     * single page. The selectors use [class*="..."] because styled-components
     * generates hashed class names — babel-plugin-styled-components adds the
     * component display name as a prefix, making partial matching possible.
     */
    div[class*="TimelineItem"] { page-break-inside: avoid; }
    div[class*="LogroItem"] { page-break-inside: avoid; }
    div[class*="EduItem"] { page-break-inside: avoid; }

    /*
     * Bootstrap's flex-based responsive columns don't apply in print because the
     * @media (min-width: ...) breakpoints don't match the paper width.
     * Float-based widths force the two-column layout on paper.
     */
    .col-lg-7 { width: 58% !important; float: left !important; padding-right: 1cm !important; }
    .col-lg-5 { width: 40% !important; float: right !important; }
    .row::after { content: ""; display: table; clear: both; }
  }
`;

/**
 * HeroSection — full-width banner with a decorative background pattern.
 *
 * Extends the shared Section component (which renders as a Box/div with
 * responsive vertical padding via styled-system). The ::before pseudo-element
 * renders the pattern image behind all content using z-index: -1.
 *
 * Print overrides are embedded here rather than in PrintStyles because
 * styled-components generates a specific CSS class for this component that is
 * guaranteed to land on the rendered div — class-name propagation through
 * styled(Section) → Section → Box is reliable, whereas targeting by a utility
 * class added via className prop is not.
 *
 * The `& > :empty` rule hides the invisible spacer Box that Section adds when
 * the `hero` prop is true (it exists to push content below the fixed header
 * on screen but should not add blank space on paper).
 */
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
  @media print {
    padding: 0 !important;
    margin: 0 !important;
    min-height: 0 !important;
    background: #fff !important;
    overflow: visible !important;
    &::before { display: none !important; }
    & > :empty { display: none !important; }
  }
`;

/**
 * ContentSection — the main two-column body of the CV.
 * Same reasoning as HeroSection: print styles live here so they're scoped to
 * the correct generated CSS class and not subject to className propagation.
 */
const ContentSection = styled(Section)`
  @media print {
    padding: 0 !important;
    margin: 0 !important;
    min-height: 0 !important;
    overflow: visible !important;
  }
`;

// Inline contact links (email, GitHub) displayed in a wrapping flex row.
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

/**
 * DownloadBtn — triggers a direct PDF download from /CV_FernandaCruz.pdf.
 * The file is placed in Gatsby's static/ folder so it is served as-is at the
 * root path without any webpack processing.
 * The .no-print class ensures this button is hidden in the print stylesheet.
 */
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

// ─── Internal layout primitives ───────────────────────────────────────────────

// Thin horizontal rule used between section label and content.
const Divider = styled.hr`
  border-color: ${({ theme }) => theme.colors.border};
  margin: 0 0 2rem;
`;

// Small uppercase label that introduces each content group (e.g. "Work Experience").
const SectionLabel = styled.p`
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

// ─── Work experience timeline ─────────────────────────────────────────────────

/**
 * TimelineWrap — vertical line running along the left edge of all job entries.
 * The ::before pseudo-element draws the line; individual TimelineItems position
 * their dot bullets relative to this container.
 */
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

/**
 * TimelineItem — a single job entry.
 * The ::before pseudo-element renders the circular dot on the timeline.
 * The double box-shadow creates the outlined ring effect around the dot.
 */
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

// Row displaying company name and date range on the same line.
const JobMeta = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
`;

// Company name rendered in the primary brand color.
const Company = styled.span`
  font-size: 0.82rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

// Employment period — the ::before inserts a "·" separator before the date range.
const Period = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.ash};
  font-weight: 400;
  &::before { content: "·"; margin-right: 0.4rem; }
`;

// Bulleted list of accomplishments within a job entry.
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

// Horizontal wrapping list of technology pill tags.
const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 0.5rem;
`;

// Individual technology tag — pill shape with a subtle background.
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

// ─── Right-column sidebar primitives ─────────────────────────────────────────

// Wrapper for each skill category group (Backend, Frontend, Mobile, etc.).
const SkillBlock = styled.div`
  margin-bottom: 1.5rem;
`;

// Category label inside a SkillBlock (e.g. "Backend").
const SkillLabel = styled.p`
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 0.5rem;
`;

// Award/achievement card with a colored left border accent.
const LogroItem = styled.div`
  padding: 1.1rem 1.25rem;
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.border};
  border-radius: 0 8px 8px 0;
  margin-bottom: 0.85rem;
`;

// Education entry wrapper.
const EduItem = styled.div`
  margin-bottom: 1.5rem;
`;

// Side-by-side language proficiency items.
const LangRow = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const LangItem = styled.div`
  display: flex;
  flex-direction: column;
`;

// ─── Page entrance animation ──────────────────────────────────────────────────

// Slides content up from 18px below and fades it in when the page first loads.
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const PageFade = styled.div`
  animation: ${fadeIn} 0.55s ease forwards;
`;

// ─── Page component ───────────────────────────────────────────────────────────

const CurriculumPage = () => {
  /**
   * Cross-browser print style fix.
   *
   * Problem: styled-system sets large vertical padding on Section components
   * (e.g. py={100px}). This causes blank pages in the printed PDF because the
   * browser reserves that space even though it has no visual content.
   *
   * Solution: Before the browser captures the print layout, find the two
   * structural section divs (marked with data-cv-section) and override their
   * padding/margin/min-height via inline !important styles — inline styles
   * have the highest CSS specificity and reliably win over any stylesheet rule.
   * After printing, all original values are restored.
   *
   * Chrome/Safari: `beforeprint` fires before layout — the standard approach works.
   * Firefox: `beforeprint` fires AFTER the layout is already frozen, so changes
   * made there are ignored. `matchMedia('print').addEventListener('change', ...)`
   * fires before Firefox locks the layout, which is why both listeners are needed.
   */
  useEffect(() => {
    // Map to store each element's original inline style values before overriding.
    const saved = new Map();

    const applyPrint = () => {
      document.querySelectorAll("[data-cv-section]").forEach((el) => {
        // Save current inline style values so we can restore them after printing.
        saved.set(el, {
          pt: el.style.paddingTop,
          pb: el.style.paddingBottom,
          mt: el.style.marginTop,
          mb: el.style.marginBottom,
          mh: el.style.minHeight,
          ov: el.style.overflow,
        });
        el.style.setProperty("padding-top", "0", "important");
        el.style.setProperty("padding-bottom", "0", "important");
        el.style.setProperty("margin-top", "0", "important");
        el.style.setProperty("margin-bottom", "0", "important");
        el.style.setProperty("min-height", "0", "important");
        el.style.setProperty("overflow", "visible", "important");

        // The Section component renders an empty spacer div when `hero` is true
        // (it offsets content below the fixed header on screen). That spacer has
        // no content but still occupies vertical space in print — hide it.
        el.querySelectorAll(":empty").forEach(child => {
          child.dataset.cvHidden = child.style.display;
          child.style.setProperty("display", "none", "important");
        });
      });
    };

    const removePrint = () => {
      // Restore all original inline styles after the print dialog closes.
      saved.forEach((s, el) => {
        el.style.paddingTop = s.pt;
        el.style.paddingBottom = s.pb;
        el.style.marginTop = s.mt;
        el.style.marginBottom = s.mb;
        el.style.minHeight = s.mh;
        el.style.overflow = s.ov;
        el.querySelectorAll("[data-cv-hidden]").forEach(child => {
          child.style.display = child.dataset.cvHidden;
          delete child.dataset.cvHidden;
        });
      });
      saved.clear();
    };

    // Chrome / Safari
    window.addEventListener("beforeprint", applyPrint);
    window.addEventListener("afterprint", removePrint);

    // Firefox — matchMedia fires before the print layout is calculated
    const mql = window.matchMedia("print");
    const onMqlChange = (e) => { if (e.matches) applyPrint(); else removePrint(); };
    mql.addEventListener("change", onMqlChange);

    return () => {
      window.removeEventListener("beforeprint", applyPrint);
      window.removeEventListener("afterprint", removePrint);
      mql.removeEventListener("change", onMqlChange);
    };
  }, []);

  return (
  <PageWrapper>
    <HideFooter />
    <PrintStyles />
    <PageFade>

    {/* ── HERO: name, title, summary, and contact links ── */}
    {/* data-cv-section marks this div for the JS print handler above */}
    <HeroSection hero className="position-relative" data-cv-section>
      <Container>
        <Title variant="hero">Fernanda Cruz</Title>
        <Title variant="card" color="primary" className="mt-2">
          Frontend Engineer &amp; Engineering Lead
        </Title>
        <Text className="mt-3" css={`max-width: 640px; font-size: 0.9rem; line-height: 1.6;`}>
          Frontend Engineer with 9+ years building consumer-facing web and mobile products at scale.
          I focus on fast, user-centered interfaces and real-time systems — from React and React Native
          apps used daily by thousands of users to scalable cloud architectures on GCP and Azure.
          I lead engineering teams, own architecture decisions, and drive product quality from design to deployment.
        </Text>

        {/*
          Email is obfuscated by assembling it in JS to reduce harvesting by
          email-scraping bots that parse raw HTML.
        */}
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

        {/*
          Direct PDF download — the file lives in static/CV_FernandaCruz.pdf.
          Gatsby copies everything in static/ to the build output root unchanged,
          making it available at /CV_FernandaCruz.pdf without webpack processing.
          The `download` attribute tells the browser to save the file instead of
          navigating to it. The no-print class hides this button on paper.
        */}
        <DownloadBtn
          href="/CV_FernandaCruz.pdf"
          download="CV_FernandaCruz.pdf"
          className="no-print"
        >
          Download Curriculum
        </DownloadBtn>
      </Container>
    </HeroSection>

    {/* ── MAIN CONTENT: two-column layout ── */}
    {/* data-cv-section marks this div for the JS print handler above */}
    <ContentSection data-cv-section>
      <Container>
        <Row>

          {/* ── LEFT COLUMN (58%): chronological work experience ── */}
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

          {/* ── RIGHT COLUMN (42%): skills, education, awards, languages ── */}
          <Col lg="5">

            {/* Tech Stack — grouped by discipline */}
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

            {/* Awards & Achievements */}
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
    </ContentSection>

    </PageFade>
  </PageWrapper>
  );
};

export default CurriculumPage;
