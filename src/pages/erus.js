import React from "react";
import CaseStudyPage from "../components/CaseStudy";
import imgCover from "../assets/image/jpg/details/erus.webp";

const data = {
  title: "Erus — Online store with integrated payments",
  tags: ["Angular", "PHP", "Openpay", "E-commerce"],
  cover: imgCover,
  meta: { client: "Erus", year: "2016", role: "Front-End Developer", stack: "Angular · PHP · Openpay" },
  problem: "Erus sold products exclusively in person and over the phone. They had no online presence or mechanism to accept digital payments, limiting their sales reach and making them entirely dependent on the physical channel.",
  solution: "We built a complete online store with a product catalog, shopping cart, and checkout with secure card payments via Openpay, letting Erus sell 24/7 without intermediaries.",
  highlights: [
    { title: "Product catalog", desc: "Digital storefront with category filters, detailed descriptions, and image galleries for each product." },
    { title: "Openpay payment gateway", desc: "Integration of the Openpay payment gateway to accept credit and debit cards with secure tokenization." },
    { title: "Admin dashboard", desc: "Dashboard to manage inventory, orders, and customers without technical knowledge." },
  ],
  screenshots: [],
  result: "Erus went from zero digital sales to an active e-commerce channel accessible from any device. The full purchase flow takes under 3 minutes, extending their sales reach beyond their local area.",
  techStack: ["AngularJS", "PHP", "Openpay", "MySQL", "Bootstrap", "npm"],
  myRole: "Front-end development with AngularJS, Openpay API integration, and coordination with the backend team for the complete purchase flow.",
  bullets: ["Live e-commerce with online payments", "Openpay integration with secure tokenization", "Code-free manageable catalog", "Responsive for mobile and desktop"],
  liveUrl: "https://erus.mx/",
};

const ErusPage = () => <CaseStudyPage data={data} />;
export default ErusPage;
