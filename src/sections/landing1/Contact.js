import React, { useContext } from "react";

import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import { Section, Title, ButtonIcon } from "../../components/Core";

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      <Section className="pt-4">
        <Container>
          <Row className="text-center justify-content-center">
            <Col lg="10" xl="7">
              <div className="text-center mb-5" data-aos="fade-up">
                <Title variant="hero">¿Estás listo para hablar?</Title>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="150">
                <ButtonIcon
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleAbout();
                  }}
                >
                  Hablemos ahora
                </ButtonIcon>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
