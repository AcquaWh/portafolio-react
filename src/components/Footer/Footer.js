import React from "react";
import { Container } from "react-bootstrap";
import { Box, Title } from "../Core";

const Footer = ({ isDark = true }) => {
  return (
    <>
      <Box
        bg="bg"
        pt={[0, null, null, "3.75rem"]}
        pb="3.75rem"
        css={`
          z-index: -50;
        `}
        className="position-relative"
      >
        <Container>
          <div className="text-center">
            <Title
              variant="card"
              css={`font-size: 0.8125rem;`}
              className="text-uppercase"
            >
              © 2026 Fernanda Cruz
            </Title>
            <div style={{ marginTop: "0.5rem", display: "flex", justifyContent: "center", gap: "1.5rem" }}>
              <a href="https://github.com/AcquaWh" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/acquawh/" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
                LinkedIn
              </a>
            </div>
          </div>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
