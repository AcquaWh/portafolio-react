import React from "react";
import CaseStudyPage from "../components/CaseStudy";
import imgCover from "../assets/image/jpg/details/novutek.webp";
import imgS1 from "../assets/image/jpg/details/novutek-details.webp";
import imgS2 from "../assets/image/jpg/details/novutek-details2.webp";

const data = {
  title: "Novutek UI — Design to code for an internal e-learning platform",
  tags: ["UI Design", "Angular", "Adobe XD", "Photoshop", "Design System"],
  cover: imgCover,
  meta: { client: "Novutek", year: "2019", role: "UI Designer & Frontend Developer", stack: "Photoshop · Adobe XD · Angular" },
  problem: "Novutek had no internal platform for employee training or certification. Learning was unstructured, with no way to track progress, validate completed courses, or issue certifications — making it impossible to verify which employees had the required skills.",
  solution: "I owned the full design-to-code pipeline: defined the visual system in Photoshop, validated the interaction flow with an Adobe XD prototype, and delivered the final UI as a production-ready Angular application — ensuring pixel-perfect fidelity between the design and the live product.",
  highlights: [
    { title: "Visual system in Photoshop", desc: "Defined the full UI kit: typography, color palette, component states, and layout grid before writing any code." },
    { title: "Interactive prototype in Adobe XD", desc: "Built a clickable prototype covering the full user journey — course browsing, video playback, exam flow, and badge award — validated with stakeholders before development." },
    { title: "Design-to-code in Angular", desc: "Translated every design spec into production Angular components, maintaining visual fidelity across all screen sizes and interaction states." },
    { title: "Badge & certification UI", desc: "Designed and implemented the gamification layer: earned badges visible on each employee's profile, encouraging course completion." },
  ],
  screenshots: [
    { img: imgS1, caption: "Course dashboard — design translated to Angular components" },
    { img: imgS2, caption: "Badge system UI — from XD prototype to production" },
  ],
  result: "Delivered a fully designed and implemented e-learning platform — from blank canvas to production code — as a solo designer-developer. The project demonstrated end-to-end ownership of the UI: visual design, interaction prototype, and final implementation with no handoff gaps.",
  techStack: ["Photoshop", "Adobe XD", "Angular", "TypeScript", "CSS3", "Bootstrap"],
  myRole: "Sole UI designer and front-end developer. Owned every stage: visual design in Photoshop, interactive prototype in Adobe XD, and production implementation in Angular — with direct stakeholder reviews at each phase.",
  bullets: [
    "Full design-to-code ownership — no handoff",
    "Interactive XD prototype validated before development",
    "Pixel-perfect Angular implementation",
    "Reusable component system from Photoshop kit",
    "Badge & certification gamification UI",
  ],
  liveUrl: null,
};

const NovutekUIPage = () => <CaseStudyPage data={data} />;
export default NovutekUIPage;
