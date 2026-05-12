import React from "react";
import styled, { keyframes } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import { Section, Title, Text } from "../Core";
import PageWrapper from "../PageWrapper";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const HeroWrap = styled.div`
  margin-top: 92px;
  position: relative;
  overflow: hidden;
  max-height: 540px;
  img { width: 100%; object-fit: cover; display: block; }
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
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
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

const CaseStudyPage = ({ data }) => {
  const { title, tags, cover, meta, problem, solution, highlights, screenshots, result, techStack, myRole, bullets, liveUrl } = data;

  return (
    <PageWrapper>
      <PageAnim>
        <HeroWrap>
          <img src={cover} alt={title} />
        </HeroWrap>

        <Section>
          <Container>
            <BackLink to="/">← Back to portfolio</BackLink>

            <Row>
              <Col lg="8" className="pr-lg-5">

                <div className="mb-3">
                  {tags.map(t => <Tag key={t}>{t}</Tag>)}
                </div>

                <Title variant="secSm" className="mb-3">{title}</Title>

                <MetaGrid>
                  {meta.client && <MetaItem><p className="label">Client</p><p className="value">{meta.client}</p></MetaItem>}
                  {meta.year   && <MetaItem><p className="label">Year</p><p className="value">{meta.year}</p></MetaItem>}
                  {meta.role   && <MetaItem><p className="label">Role</p><p className="value">{meta.role}</p></MetaItem>}
                  {meta.stack  && <MetaItem><p className="label">Stack</p><p className="value">{meta.stack}</p></MetaItem>}
                </MetaGrid>

                <Divider />

                <SectionLabel>The problem</SectionLabel>
                <Text variant="p" css={`line-height: 1.75;`}>{problem}</Text>

                <Divider />

                <SectionLabel>The solution</SectionLabel>
                <Text variant="p" css={`line-height: 1.75; margin-bottom: 1.5rem;`}>{solution}</Text>

                {highlights.map((h, i) => (
                  <HighlightBox key={i}>
                    <h6>{h.title}</h6>
                    <p>{h.desc}</p>
                  </HighlightBox>
                ))}

                {screenshots.length > 0 && (
                  <>
                    <Divider />
                    <SectionLabel>Screenshots</SectionLabel>
                    {screenshots.map((s, i) => (
                      <div key={i} className="mb-4">
                        <ScreenImg src={s.img} alt={s.caption} />
                        <ScreenCaption>{s.caption}</ScreenCaption>
                      </div>
                    ))}
                  </>
                )}

                <Divider />

                <SectionLabel>Result</SectionLabel>
                <Text variant="p" css={`line-height: 1.75;`}>{result}</Text>

                {liveUrl && (
                  <div className="mt-4">
                    <LiveBtn href={liveUrl} target="_blank" rel="noopener noreferrer">
                      View live site →
                    </LiveBtn>
                  </div>
                )}

              </Col>

              <Col lg="4" className="mt-5 mt-lg-0">
                <div style={{ position: "sticky", top: "120px" }}>

                  <SectionLabel>Technologies</SectionLabel>
                  <div className="mb-4">
                    {techStack.map(t => <Tag key={t}>{t}</Tag>)}
                  </div>

                  <Divider />

                  <SectionLabel>My role</SectionLabel>
                  <Text css={`font-size: 0.85rem; line-height: 1.7;`}>{myRole}</Text>

                  <Divider />

                  <SectionLabel>Highlights</SectionLabel>
                  <Text css={`font-size: 0.82rem; line-height: 1.9;`}>
                    {bullets.map((b, i) => <span key={i}>✓ {b}<br /></span>)}
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
};

export default CaseStudyPage;
