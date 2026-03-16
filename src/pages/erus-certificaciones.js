import React from "react";
import CaseStudyPage from "../components/CaseStudy";
import imgCover from "../assets/image/jpg/details/certificate.webp";
import imgS1    from "../assets/image/jpg/details/certificate-details.webp";
import imgS2    from "../assets/image/jpg/details/certificate-details2.webp";
import imgS3    from "../assets/image/jpg/details/certificate-details3.webp";

const data = {
  title: "Erus Certificaciones — Plataforma interna de capacitación",
  tags: ["Angular", "PHP", "E-learning", "Interno"],
  cover: imgCover,
  meta: { client: "Erus", year: "2020", role: "Front-End Lead", stack: "Angular · PHP · Videoconferencias" },
  problem: "Erus capacitaba a sus empleados de forma presencial y sin seguimiento estructurado. No existía un mecanismo para validar que los empleados completaran las capacitaciones ni para certificar las habilidades adquiridas.",
  solution: "Desarrollamos una plataforma interna de e-learning con acceso restringido a empleados Erus. Incluye reproducción de videos, videoconferencias internas, exámenes de validación y un sistema de insignias por nivel de capacitación completado.",
  highlights: [
    { title: "Biblioteca de videos de capacitación", desc: "Cursos organizados por área y nivel, con progreso guardado y control de visualización completa antes del examen." },
    { title: "Videoconferencias internas", desc: "Capacitaciones en vivo integradas en la plataforma, sin necesidad de herramientas externas." },
    { title: "Exámenes de certificación", desc: "Al finalizar cada módulo, el empleado presenta un examen. Solo con calificación aprobatoria se otorga la insignia del nivel." },
    { title: "Sistema de insignias", desc: "Gamificación del aprendizaje: cada capacitación superada otorga una insignia visible en el perfil del empleado." },
  ],
  screenshots: [
    { img: imgS1, caption: "Biblioteca de cursos — módulos disponibles por área" },
    { img: imgS2, caption: "Vista de capacitación con video y progreso" },
    { img: imgS3, caption: "Sistema de insignias — certificaciones obtenidas por empleado" },
  ],
  result: "Erus formalizó su proceso de capacitación interna con trazabilidad completa: saben exactamente qué empleados completaron cada curso, cuántos aprobaron los exámenes y qué certificaciones tiene activas cada persona del equipo.",
  techStack: ["AngularJS", "PHP", "MySQL", "Bootstrap", "Video streaming"],
  myRole: "Lideré el equipo de desarrollo front-end. Diseñé la arquitectura de roles (empleado / admin), el flujo de capacitación completo y el sistema de insignias.",
  bullets: ["Acceso restringido solo a empleados Erus", "Videos + videoconferencias integradas", "Exámenes de validación por módulo", "Sistema de insignias por capacitación", "Seguimiento de progreso por empleado"],
  liveUrl: "https://capacitate.erus.mx/login",
};

const ErusCertPage = () => <CaseStudyPage data={data} />;
export default ErusCertPage;
