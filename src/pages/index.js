import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Stats from "../sections/landing1/Stats";
import Skills from "../sections/landing1/Skills";
import Works from "../sections/landing1/Works";
import Contact from "../sections/landing1/Contact";

const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Stats />
        <Skills />
        <Works />
        <Contact />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
