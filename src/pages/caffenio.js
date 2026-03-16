import React from "react";
import CaseStudyPage from "../components/CaseStudy";
import imgCover from "../assets/image/jpg/details/caffenio-details.webp";

const data = {
  title: "Caffenio — Bolsa de trabajo corporativa en WordPress",
  tags: ["WordPress", "PHP", "Tema personalizado", "RRHH"],
  cover: imgCover,
  meta: { client: "Caffenio", year: "2020", role: "WordPress Developer", stack: "WordPress · PHP · CSS" },
  problem: "Caffenio, una de las cadenas de café más grandes del noroeste de México, no tenía un canal digital propio para recibir solicitudes de empleo. Los candidatos enviaban CVs por correo o se presentaban físicamente, generando un proceso desorganizado para RRHH.",
  solution: "Desarrollamos un tema WordPress completamente personalizado para Caffenio que funciona como portal de empleo: los candidatos pueden explorar vacantes disponibles y postularse, y los candidatos existentes en Caffenio también tienen acceso para buscar nuevas oportunidades internas.",
  highlights: [
    { title: "Tema WordPress a medida", desc: "Diseño y desarrollo de un tema propio que sigue la identidad visual de Caffenio, sin usar plantillas comerciales." },
    { title: "Portal de vacantes", desc: "Listado de posiciones disponibles filtradas por área, tipo de contrato y sede. Los candidatos aplican directamente desde la plataforma." },
    { title: "Postulación en línea", desc: "Formulario de aplicación con carga de CV, integrado con el flujo de RRHH de Caffenio para centralizar los candidatos recibidos." },
  ],
  screenshots: [],
  result: "Caffenio digitalizó su proceso de reclutamiento con un canal propio de empleo, reduciendo la carga operativa de RRHH al centralizar todas las aplicaciones en un solo sistema y mejorando la experiencia del candidato.",
  techStack: ["WordPress", "PHP", "CSS3", "JavaScript", "MySQL"],
  myRole: "Desarrollo del tema WordPress personalizado desde cero: diseño de templates, integración con la base de datos y configuración del flujo de postulación. Proyecto realizado en Mawe Tecnologías.",
  bullets: ["Tema WordPress 100% personalizado", "Portal de vacantes por área y sede", "Postulación en línea con CV", "Integrado con flujo de RRHH de Caffenio"],
  liveUrl: null,
};

const CaffenioPage = () => <CaseStudyPage data={data} />;
export default CaffenioPage;
