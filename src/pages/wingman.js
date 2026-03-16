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
  title: "Wingman — Marketplace de servicios profesionales",
  tags: ["Angular", "PHP", "Stripe", "PayPal", "Marketplace"],
  cover: imgCover,
  meta: { client: "Erus / Wingman", year: "2020", role: "Front-End Lead", stack: "Angular · PHP · Stripe · PayPal" },
  problem: "Contratar servicios profesionales (carpinteros, ingenieros, pintores, etc.) era un proceso sin digitalizar: búsqueda por recomendación verbal, pagos en efectivo, sin trazabilidad ni garantías para el cliente ni para el proveedor.",
  solution: "Diseñamos y desarrollamos Wingman, un marketplace de servicios profesionales con doble portal (cliente y proveedor), sistema de pagos con Stripe y PayPal, chat en tiempo real y un backoffice completo para administración de marketing y operaciones.",
  highlights: [
    { title: "Portal del cliente", desc: "Búsqueda y contratación de servicios por categoría, seguimiento de proyectos activos, pagos seguros y chat con el proveedor." },
    { title: "Portal del proveedor", desc: "Gestión de servicios ofrecidos, aceptación de trabajos, seguimiento de pagos recibidos y comunicación directa con clientes." },
    { title: "Pagos con Stripe y PayPal", desc: "Integración dual de pasarelas de pago para máxima cobertura. Los fondos se liberan al proveedor al confirmar la entrega del servicio." },
    { title: "Chat en tiempo real", desc: "Canal de comunicación directo entre cliente y proveedor integrado en la plataforma para coordinar detalles del servicio." },
    { title: "Backoffice de administración", desc: "Panel para gestión de marketing, usuarios, disputas y reportes de transacciones. Diseño de emails transaccionales con Mailchimp." },
  ],
  screenshots: [
    { img: imgS1, caption: "Flujo de creación de proyecto — cliente solicita un servicio" },
    { img: imgS2, caption: "Dashboard del usuario — proyectos activos y en espera" },
    { img: imgS3, caption: "Backoffice — administración de marketing y operaciones" },
    { img: imgS4, caption: "Vista de detalle de proyecto — estado y seguimiento" },
    { img: imgS5, caption: "Portal del proveedor — gestión de trabajos asignados" },
    { img: imgS6, caption: "Módulo de pagos — historial de transacciones" },
    { img: imgS7, caption: "Chat en tiempo real — comunicación cliente-proveedor" },
  ],
  result: "Wingman digitalizó completamente el ciclo de contratación de servicios: desde la búsqueda hasta el pago y confirmación. Los proveedores obtienen visibilidad digital sin costos de marketing propio y los clientes tienen garantía de pago protegido hasta confirmar la entrega.",
  techStack: ["AngularJS", "PHP", "Stripe", "PayPal", "Mailchimp", "MySQL", "Bootstrap"],
  myRole: "Lideré el desarrollo front-end en Angular: arquitectura de los portales cliente y proveedor, integración de Stripe y PayPal, implementación del chat y diseño de los correos transaccionales en Mailchimp.",
  bullets: ["Marketplace completo con 2 portales diferenciados", "Integración dual Stripe + PayPal", "Chat en tiempo real cliente-proveedor", "Backoffice con gestión de marketing", "Emails transaccionales con Mailchimp"],
  liveUrl: "http://wingman.mx/demo/",
};

const WingmanPage = () => <CaseStudyPage data={data} />;
export default WingmanPage;
