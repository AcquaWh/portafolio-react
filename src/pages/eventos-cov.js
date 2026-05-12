import React from "react";
import CaseStudyPage from "../components/CaseStudy";
import imgCover from "../assets/image/jpg/details/cov.webp";

const data = {
  title: "Eventos COV — Event registration management for guild members",
  tags: ["Laravel", "PHP", "Event management", "Guild"],
  cover: imgCover,
  meta: { client: "ELCOV", year: "2020", role: "Full-Stack Developer", stack: "Laravel · PHP · MySQL" },
  problem: "The College of Obstetrics and Gynecology (ELCOV) managed event registrations entirely manually: spreadsheets, wire transfers with no traceability, and paper attendance lists. It was impossible to know in real time who had paid and who would attend.",
  solution: "We built a Laravel web platform to manage the complete event registration cycle: member and university registration, payment tracking, and real-time attendance validation.",
  highlights: [
    { title: "Member and university registration", desc: "Participants register and link to their institution. The system validates active guild membership." },
    { title: "Registration payment tracking", desc: "Payment records per event with status (pending / confirmed). Organizers can filter registrants by payment status." },
    { title: "Attendance control", desc: "On event day, the system enables digital check-in for each registrant, eliminating paper lists." },
  ],
  screenshots: [],
  result: "ELCOV eliminated manual event work: the organizing team has real-time access to the registrant list, payment status, and attendance confirmation from any device, reducing event check-in time from hours to minutes.",
  techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "Blade"],
  myRole: "Full-stack development in Laravel: data model design, registration modules, payment management, and attendance control.",
  bullets: ["Real-time registration tracking", "Per-event payment management", "Digital check-in on event day", "Filters by payment and attendance status"],
  liveUrl: null,
};

const EventosCovPage = () => <CaseStudyPage data={data} />;
export default EventosCovPage;
