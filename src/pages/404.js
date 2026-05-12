import React from "react";
import styled, { keyframes } from "styled-components";
import { Container } from "react-bootstrap";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import { Section } from "../components/Core";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Wrap = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 1rem;
  animation: ${fadeUp} 0.5s ease both;
`;

const BigNumber = styled.div`
  font-size: clamp(7rem, 20vw, 14rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -6px;
  color: transparent;
  -webkit-text-stroke: 3px ${({ theme }) => theme.colors.primary};
  animation: ${float} 4s ease-in-out infinite;
  user-select: none;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 1.5rem 0 0.5rem;
`;

const Description = styled.p`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.ash};
  max-width: 360px;
  line-height: 1.65;
  margin: 0 auto 2rem;
`;

const HomeBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.65rem 1.75rem;
  border-radius: 500px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff !important;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none !important;
  transition: opacity 0.25s;
  &:hover { opacity: 0.85; }
`;

const SecondaryBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.65rem 1.75rem;
  border-radius: 500px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary} !important;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none !important;
  transition: all 0.25s;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff !important;
  }
`;

const Dot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  margin: 0 10px;
  vertical-align: middle;
`;

export default function NotFound() {
  return (
    <PageWrapper>
      <Section>
        <Container>
          <Wrap>
            <BigNumber>404</BigNumber>
            <Subtitle>Page not found</Subtitle>
            <Description>
              The page you're looking for doesn't exist or has been moved.
              Don't worry, everything else is right where you left it.
            </Description>
            <div className="d-flex align-items-center flex-wrap justify-content-center" style={{ gap: "12px" }}>
              <HomeBtn to="/">← Back to home</HomeBtn>
              <Dot />
              <SecondaryBtn to="/curriculum">View CV</SecondaryBtn>
            </div>
          </Wrap>
        </Container>
      </Section>
    </PageWrapper>
  );
}
