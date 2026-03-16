import React from "react";
import CaseStudyPage from "../components/CaseStudy";
import imgCover from "../assets/image/jpg/details/alumni.webp";

const data = {
  title: "Alumni ULSA — Bolsa de trabajo universitaria",
  tags: ["Laravel", "PHP", "Plataforma web", "Educación"],
  cover: imgCover,
  meta: { client: "ULSA Noroeste", year: "2020", role: "Full-Stack Developer", stack: "Laravel · PHP · MySQL" },
  problem: "La Universidad La Salle Noroeste no tenía una plataforma digital para conectar a sus egresados con empleadores. El proceso de búsqueda de empleo era manual, sin visibilidad para las empresas ni trazabilidad para la universidad sobre la inserción laboral de sus alumni.",
  solution: "Desarrollamos una plataforma de bolsa de trabajo universitaria con cuatro roles diferenciados: alumni, empresas, universidades y administradores. Las universidades pueden importar su base de egresados mediante CSV y las empresas publican vacantes directamente.",
  highlights: [
    { title: "Portal de Alumni", desc: "Registro de perfil profesional, búsqueda de vacantes por área y postulación en línea. Acceso a historial de aplicaciones." },
    { title: "Portal de Empresas", desc: "Publicación de ofertas de trabajo, revisión de candidatos egresados ULSA y contacto directo con postulantes." },
    { title: "Portal de Universidades", desc: "Importación masiva de alumnos graduados mediante CSV, seguimiento de inserción laboral y reportes de colocación." },
    { title: "Panel de Administración", desc: "Gestión centralizada de usuarios, validación de empresas y moderación de contenido de la plataforma." },
  ],
  screenshots: [],
  result: "La plataforma centralizó el proceso de vinculación laboral de ULSA Noroeste, eliminando la gestión manual de CVs y permitiendo a la universidad tener por primera vez métricas de inserción laboral de sus egresados.",
  techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "CSV Import", "Blade"],
  myRole: "Desarrollo full-stack en Laravel: diseño de base de datos, módulos de importación CSV, sistema de roles y permisos, y todas las vistas de la plataforma.",
  bullets: ["4 roles de usuario con accesos diferenciados", "Importación masiva de egresados por CSV", "Vinculación directa alumni-empresa", "Reportes de inserción laboral"],
  liveUrl: null,
};

const AlumniPage = () => <CaseStudyPage data={data} />;
export default AlumniPage;
