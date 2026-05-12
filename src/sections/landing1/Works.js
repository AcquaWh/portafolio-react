import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Masonry from "react-masonry-component";

import { Section, Box, ListNav } from "../../components/Core";
import WorkCard from "../../components/WorkCard";
import { devWorks1 } from "../../data";

const Works = () => {
  const [items, setItems] = useState([]);
  const [activeLink, setActiveLink] = useState("web");

  useEffect(() => {
    setItems(devWorks1.filter((item) => item.categories.indexOf("web") !== -1));
  }, []);

  const filterBy = (cat) => {
    if (cat === "*") {
      setActiveLink("*");
      setItems(devWorks1);
    } else {
      const filteredItems = devWorks1.filter((item) => {
        return item.categories.indexOf(cat) !== -1;
      });
      setActiveLink(cat);
      setItems(filteredItems);
    }
  };

  const masonryOptions = {
    transitionDuration: 1000,
  };

  return (
    <>
      <Section className="position-relative">
        <Container>
          <Box mb="2.5rem" ml="-1.75rem" data-aos="fade-up">
            <ListNav className="nav">
              <li className="nav-item">
                <button
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "web" ? "active" : null
                  }`}
                  style={{ background: "none", border: "none", padding: 0, cursor: "pointer", outline: "none" }}
                  onClick={() => filterBy("web")}
                >
                  Web development
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "vr" ? "active" : null
                  }`}
                  style={{ background: "none", border: "none", padding: 0, cursor: "pointer", outline: "none" }}
                  onClick={() => filterBy("vr")}
                >
                  Virtual Reality
                </button>
              </li>
            </ListNav>
          </Box>
        </Container>

        <Container fluid>
          {items.length === 1 ? (
            <Row className="justify-content-center">
              <Col lg="4" md="6" sm="6">
                <WorkCard workItem={items[0]} mb="30px" link={items[0].link} />
              </Col>
            </Row>
          ) : (
            <Masonry
              options={masonryOptions}
              className={"masonry-grid row"}
            >
              {items.map((item, index) => (
                <Col lg="4" md="6" sm="6" key={index} className="filtr-item">
                  <WorkCard workItem={item} mb="30px" link={item.link}/>
                </Col>
              ))}
            </Masonry>
          )}
        </Container>
      </Section>
    </>
  );
};

export default Works;
