import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Masonry from "react-masonry-component";
import styled from "styled-components";

import { Section, Box } from "../../components/Core";
import WorkCard from "../../components/WorkCard";
import { devWorks1 } from "../../data";

const FilterNav = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;

const FilterBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  padding: 0.5rem 1.1rem;
  border-radius: 500px;
  transition: background 0.25s, color 0.25s;
  color: ${({ active, theme }) => active ? "#fff" : theme.colors.text};
  background: ${({ active, theme }) => active ? theme.colors.primary : "transparent"};
  border: 2px solid ${({ active, theme }) => active ? theme.colors.primary : theme.colors.border};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    background: transparent;
  }
`;

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
          <Box mb="2.5rem" data-aos="fade-up">
            <FilterNav>
              <li><FilterBtn active={activeLink === "web" ? 1 : 0} onClick={() => filterBy("web")}>Web</FilterBtn></li>
              <li><FilterBtn active={activeLink === "mobile" ? 1 : 0} onClick={() => filterBy("mobile")}>Mobile</FilterBtn></li>
              <li><FilterBtn active={activeLink === "vr" ? 1 : 0} onClick={() => filterBy("vr")}>Virtual Reality</FilterBtn></li>
            </FilterNav>
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
