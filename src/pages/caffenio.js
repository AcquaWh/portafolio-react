import React from "react";
import CaseStudyPage from "../components/CaseStudy";
import imgCover from "../assets/image/jpg/details/caffenio-details.webp";

const data = {
  title: "Caffenio — Corporate job board in WordPress",
  tags: ["WordPress", "PHP", "Custom theme", "HR"],
  cover: imgCover,
  meta: { client: "Caffenio", year: "2020", role: "WordPress Developer", stack: "WordPress · PHP · CSS" },
  problem: "Caffenio, one of the largest coffee chains in northwest Mexico, had no digital channel to receive job applications. Candidates emailed CVs or showed up in person, creating a disorganized process for the HR team.",
  solution: "We built a fully custom WordPress theme for Caffenio that functions as a job portal: candidates can browse open positions and apply, and existing Caffenio employees also have access to search for internal opportunities.",
  highlights: [
    { title: "Custom WordPress theme", desc: "Designed and developed a bespoke theme aligned with Caffenio's visual identity — no commercial templates." },
    { title: "Job listings portal", desc: "Available positions filterable by area, contract type, and location. Candidates apply directly from the platform." },
    { title: "Online application", desc: "Application form with CV upload, integrated with Caffenio's HR workflow to centralize all incoming candidates." },
  ],
  screenshots: [],
  result: "Caffenio digitized their recruitment process with a dedicated job channel, reducing HR operational load by centralizing all applications in one system and improving the candidate experience.",
  techStack: ["WordPress", "PHP", "CSS3", "JavaScript", "MySQL"],
  myRole: "Built the custom WordPress theme from scratch: template design, database integration, and application flow configuration. Project completed at Mawe Tecnologías.",
  bullets: ["100% custom WordPress theme", "Job board filterable by area and location", "Online application with CV upload", "Integrated with Caffenio's HR workflow"],
  liveUrl: null,
};

const CaffenioPage = () => <CaseStudyPage data={data} />;
export default CaffenioPage;
