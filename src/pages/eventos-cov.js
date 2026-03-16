import React from "react";
import CaseStudyPage from "../components/CaseStudy";
import imgCover from "../assets/image/jpg/details/cov.webp";

const data = {
  title: "Eventos COV — Gestión de inscripciones para colegiados",
  tags: ["Laravel", "PHP", "Gestión de eventos", "Colegio"],
  cover: imgCover,
  meta: { client: "ELCOV", year: "2020", role: "Full-Stack Developer", stack: "Laravel · PHP · MySQL" },
  problem: "El Colegio de Obstetricia y Ginecología (ELCOV) gestionaba las inscripciones a sus eventos de forma manual: hojas de cálculo, transferencias bancarias sin trazabilidad y listas de asistencia en papel. Era imposible saber en tiempo real quién había pagado y quién asistiría.",
  solution: "Desarrollamos una plataforma web en Laravel para gestionar el ciclo completo de inscripción a eventos: registro de colegiados y universidades, control de pagos y validación de asistencia en tiempo real.",
  highlights: [
    { title: "Registro de colegiados y universidades", desc: "Los participantes se registran y asocian a su institución. El sistema valida que sean miembros activos del colegio." },
    { title: "Control de pagos de inscripción", desc: "Registro de pagos por evento con estado (pendiente / confirmado). El organizador puede filtrar inscritos por estado de pago." },
    { title: "Control de asistencia", desc: "Al día del evento, el sistema permite validar la asistencia de cada inscrito con un check-in digital, eliminando las listas en papel." },
  ],
  screenshots: [],
  result: "ELCOV eliminó el trabajo manual de sus eventos: el equipo organizador tiene en tiempo real la lista de inscritos, estado de pago y confirmación de asistencia desde cualquier dispositivo, reduciendo el tiempo de check-in en eventos de horas a minutos.",
  techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "Blade"],
  myRole: "Desarrollo full-stack en Laravel: diseño del modelo de datos, módulos de inscripción, gestión de pagos y control de asistencia.",
  bullets: ["Control de inscripciones en tiempo real", "Gestión de pagos por evento", "Check-in digital en día de evento", "Filtros por estado de pago y asistencia"],
  liveUrl: "https://colegiados.elcov.org/login",
};

const EventosCovPage = () => <CaseStudyPage data={data} />;
export default EventosCovPage;
