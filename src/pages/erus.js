import React from "react";
import CaseStudyPage from "../components/CaseStudy";
import imgCover from "../assets/image/jpg/details/erus.webp";

const data = {
  title: "Erus — Tienda en línea con pagos integrados",
  tags: ["Angular", "PHP", "Openpay", "E-commerce"],
  cover: imgCover,
  meta: { client: "Erus", year: "2016", role: "Front-End Developer", stack: "Angular · PHP · Openpay" },
  problem: "Erus comercializaba sus productos únicamente de forma presencial y telefónica. No tenía presencia en línea ni un mecanismo para recibir pagos digitales, lo que limitaba su alcance de ventas y dependía completamente del canal físico.",
  solution: "Desarrollamos una tienda en línea completa con catálogo de productos, carrito de compras y checkout con pago seguro mediante Openpay. La solución permitió a Erus vender sus productos 24/7 sin intermediarios.",
  highlights: [
    { title: "Catálogo de productos", desc: "Vitrina digital con filtros por categoría, descripción detallada y galería de imágenes de cada producto." },
    { title: "Sistema de pagos con Openpay", desc: "Integración de la pasarela de pagos Openpay para aceptar tarjetas de crédito y débito con tokenización segura." },
    { title: "Panel de administración", desc: "Dashboard para gestionar inventario, pedidos y clientes sin conocimientos técnicos." },
  ],
  screenshots: [],
  result: "Erus pasó de cero ventas digitales a tener un canal de e-commerce activo accesible desde cualquier dispositivo. El proceso de compra completo se puede realizar en menos de 3 minutos, ampliando el alcance de ventas más allá de su área geográfica.",
  techStack: ["AngularJS", "PHP", "Openpay", "MySQL", "Bootstrap", "npm"],
  myRole: "Desarrollo front-end con AngularJS, integración con la API de Openpay y coordinación con el equipo de backend para el flujo de compra completo.",
  bullets: ["E-commerce con pago en línea en producción", "Integración Openpay con tokenización segura", "Catálogo administrable sin código", "Responsive para móvil y escritorio"],
  liveUrl: "https://erus.mx/",
};

const ErusPage = () => <CaseStudyPage data={data} />;
export default ErusPage;
