import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, LinkContact } from "../../components/Core";
import bgFooter from "../../assets/image/png/subscribe-pattern.webp";

const SectionStyled = styled(Section)`
  &.pattern::before {
    position: absolute;
    bottom: -150px;
    content: "";
    width: 120%;
    height: 150%;
    background: url(${bgFooter}) bottom center no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

const Contact = ({ pattern = true }) => {
  return (
    <>
      <SectionStyled
        className={`position-relative ${pattern ? "pattern" : ""}`}
      >
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="11" xl="10" className="text-center">
              <Box>
                <Title variant="secSm">
                  Open to new projects and opportunities — reach out anytime.
                </Title>

                <Box
                  className="text-center d-flex justify-content-center"
                  mt={["3rem", null, "4rem"]}
                >
                  <div className="d-flex flex-column flex-lg-row justify-content-center">
                    <LinkContact
                      href="mailto:info@fernandacruz.com"
                      className="mb-2 mb-lg-0"
                    >
                      info@fernandacruz.com
                    </LinkContact>
                  </div>
                </Box>
              </Box>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Contact;
