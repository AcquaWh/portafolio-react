import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import Masonry from "react-masonry-component";

import { Section, Box, ListNav } from "../../components/Core";
import WorkCard from "../../components/WorkCard";
import { devWorks1 } from "../../data";

const Works = () => {
  const [items, setItems] = useState([]);
  const [activeLink, setActiveLink] = useState("*");

  useEffect(() => {
    setItems(devWorks1);
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
      {/* <!-- Works Area --> */}
      <Section className="position-relative">
        <Container>
          <Box mb="2.5rem" ml="-1.75rem" data-aos="fade-up">
            <ListNav className="nav">
              <li className="nav-item">
                <button
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "*" ? "active" : null
                  }`}
                  style={{ background: "none", border: "none", padding: 0, cursor: "pointer", outline: "none" }}
                  onClick={() => filterBy("*")}
                >
                  Todos los trabajos
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "web" ? "active" : null
                  }`}
                  style={{ background: "none", border: "none", padding: 0, cursor: "pointer", outline: "none" }}
                  onClick={() => filterBy("web")}
                >
                  Desarrollo web
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
                  Realidad Virtual
                </button>
              </li>
            </ListNav>
          </Box>
        </Container>

        <Container fluid>
          <Masonry
            options={masonryOptions}
            className={"masonry-grid row"} // default ''
          >
            {items.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="filtr-item">
                <WorkCard workItem={item} mb="30px" link={item.link}/>
              </Col>
            ))}
          </Masonry>
        </Container>
      </Section>
    </>
  );
};

export default Works;
