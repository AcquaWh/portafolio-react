import React from "react";
import CaseStudyPage from "../components/CaseStudy";
import imgCover   from "../assets/image/jpg/details/wingman.webp";
import imgS1      from "../assets/image/jpg/details/crear-proyecto.webp";
import imgS2      from "../assets/image/jpg/details/usuario.webp";
import imgS3      from "../assets/image/jpg/details/backoffice.webp";
import imgS4      from "../assets/image/jpg/details/proyecto.webp";
import imgS5      from "../assets/image/jpg/details/proveedor.webp";
import imgS6      from "../assets/image/jpg/details/pagos.webp";
import imgS7      from "../assets/image/jpg/details/chat.webp";

const data = {
  title: "Wingman — Professional services marketplace",
  tags: ["Angular", "PHP", "Stripe", "PayPal", "Marketplace"],
  cover: imgCover,
  meta: { client: "Erus / Wingman", year: "2020", role: "Front-End Lead", stack: "Angular · PHP · Stripe · PayPal" },
  problem: "Hiring professional services (carpenters, engineers, painters, etc.) was a fully undigitized process: word-of-mouth referrals, cash payments, no traceability, and no guarantees for either clients or service providers.",
  solution: "We designed and built Wingman, a professional services marketplace with dual portals (client and provider), Stripe and PayPal payment integration, real-time chat, and a full backoffice for marketing and operations management.",
  highlights: [
    { title: "Client portal", desc: "Browse and hire services by category, track active projects, make secure payments, and chat with the provider." },
    { title: "Provider portal", desc: "Manage offered services, accept jobs, track received payments, and communicate directly with clients." },
    { title: "Stripe & PayPal payments", desc: "Dual payment gateway integration for maximum coverage. Funds are released to the provider upon service delivery confirmation." },
    { title: "Real-time chat", desc: "Direct communication channel between client and provider built into the platform to coordinate service details." },
    { title: "Admin backoffice", desc: "Panel for marketing management, users, disputes, and transaction reports. Transactional email design with Mailchimp." },
  ],
  screenshots: [
    { img: imgS1, caption: "Project creation flow — client requests a service" },
    { img: imgS2, caption: "User dashboard — active and pending projects" },
    { img: imgS3, caption: "Backoffice — marketing and operations management" },
    { img: imgS4, caption: "Project detail view — status and tracking" },
    { img: imgS5, caption: "Provider portal — assigned jobs management" },
    { img: imgS6, caption: "Payments module — transaction history" },
    { img: imgS7, caption: "Real-time chat — client-provider communication" },
  ],
  result: "Wingman fully digitized the service hiring lifecycle: from search to payment and confirmation. Providers gain digital visibility without their own marketing costs, and clients have payment protection until delivery is confirmed.",
  techStack: ["AngularJS", "PHP", "Stripe", "PayPal", "Mailchimp", "MySQL", "Bootstrap"],
  myRole: "Led front-end development in Angular: architected both client and provider portals, integrated Stripe and PayPal, implemented real-time chat, and designed transactional emails in Mailchimp.",
  bullets: ["Full marketplace with 2 separate portals", "Dual Stripe + PayPal integration", "Real-time client-provider chat", "Backoffice with marketing management", "Transactional emails with Mailchimp"],
  liveUrl: null,
};

const WingmanPage = () => <CaseStudyPage data={data} />;
export default WingmanPage;
