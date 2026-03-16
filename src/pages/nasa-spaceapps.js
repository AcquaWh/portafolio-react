import React from "react";
import CaseStudyPage from "../components/CaseStudy";
import imgCover from "../assets/image/jpg/details/vr.webp";
import imgS1    from "../assets/image/jpg/details/vr-details.webp";

const data = {
  title: "NASA SpaceApps — Juego VR sobre cambio climático",
  tags: ["Unity", "C#", "Realidad Virtual", "Hackathon"],
  cover: imgCover,
  meta: { client: "NASA SpaceApps Challenge", year: "2019", role: "VR Developer", stack: "Unity · C# · VR" },
  problem: "El reto de NASA SpaceApps Challenge 2019 pedía crear una experiencia interactiva que hiciera tangibles las consecuencias del cambio climático. Los datos científicos existen pero son abstractos para el público general — necesitaban ser experimentados, no solo leídos.",
  solution: "Desarrollamos un juego de realidad virtual en Unity donde el jugador experimenta en primera persona las consecuencias reales del cambio climático: aumento del nivel del mar, deshielo polar y eventos climáticos extremos en entornos interactivos.",
  highlights: [
    { title: "Experiencia inmersiva en VR", desc: "El jugador se transporta a escenarios afectados por el cambio climático con visualizaciones basadas en datos reales de la NASA." },
    { title: "Mecánicas de juego educativas", desc: "Las decisiones del jugador dentro del juego tienen consecuencias ambientales visibles, generando conciencia de causa-efecto." },
    { title: "Nominación local Ciudad Obregón 2019", desc: "El proyecto fue seleccionado y nominado en la sede local del hackathon, compitiendo contra equipos de toda la región." },
  ],
  screenshots: [
    { img: imgS1, caption: "Escena del juego VR — visualización de impacto climático" },
  ],
  result: "El proyecto fue nominado en Ciudad Obregón en el NASA SpaceApps Challenge 2019. Fue una demostración de que la realidad virtual puede ser un vehículo poderoso para la comunicación científica y la educación ambiental.",
  techStack: ["Unity", "C#", "VR SDK", "3D Modeling", "NASA Open Data"],
  myRole: "Desarrollo del juego en Unity con C#, diseño de mecánicas de juego, integración de los escenarios VR y presentación del proyecto ante los jueces del hackathon.",
  bullets: ["Nominado NASA SpaceApps Challenge 2019", "Experiencia VR completa en Unity + C#", "Datos reales de la NASA integrados", "Mecánicas educativas de causa-efecto"],
  liveUrl: "https://2019.spaceappschallenge.org/challenges/living-our-world/1up-nasa-earth/teams/the-no-names/project",
};

const NasaPage = () => <CaseStudyPage data={data} />;
export default NasaPage;
