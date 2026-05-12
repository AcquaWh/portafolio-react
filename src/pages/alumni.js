import React from "react";
import CaseStudyPage from "../components/CaseStudy";
import imgCover from "../assets/image/jpg/details/alumni.webp";

const data = {
  title: "Alumni ULSA — University job board",
  tags: ["Laravel", "PHP", "Web platform", "Education"],
  cover: imgCover,
  meta: { client: "ULSA Noroeste", year: "2020", role: "Full-Stack Developer", stack: "Laravel · PHP · MySQL" },
  problem: "Universidad La Salle Noroeste had no digital platform to connect alumni with employers. The job search process was manual, with no visibility for companies and no traceability for the university on graduate employment outcomes.",
  solution: "We built a university job board platform with four distinct roles: alumni, companies, universities, and administrators. Universities can bulk-import their graduate database via CSV, and companies publish job listings directly.",
  highlights: [
    { title: "Alumni portal", desc: "Professional profile setup, job search by field, and online application. Access to application history." },
    { title: "Company portal", desc: "Post job openings, review ULSA graduate candidates, and contact applicants directly." },
    { title: "University portal", desc: "Bulk import of graduated students via CSV, employment tracking, and placement reports." },
    { title: "Admin panel", desc: "Centralized user management, company validation, and content moderation." },
  ],
  screenshots: [],
  result: "The platform centralized ULSA Noroeste's employment pipeline, eliminating manual CV management and giving the university its first-ever graduate employment metrics.",
  techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "CSV Import", "Blade"],
  myRole: "Full-stack development in Laravel: database design, CSV import modules, role and permission system, and all platform views.",
  bullets: ["4 user roles with separate access", "Bulk graduate import via CSV", "Direct alumni-company matching", "Graduate employment reports"],
  liveUrl: null,
};

const AlumniPage = () => <CaseStudyPage data={data} />;
export default AlumniPage;
