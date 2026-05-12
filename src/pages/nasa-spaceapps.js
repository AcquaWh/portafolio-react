import React from "react";
import CaseStudyPage from "../components/CaseStudy";
import imgCover from "../assets/image/jpg/details/vr.webp";
import imgS1    from "../assets/image/jpg/details/vr-details.webp";

const data = {
  title: "NASA SpaceApps — VR game about climate change",
  tags: ["Unity", "C#", "Virtual Reality", "Hackathon"],
  cover: imgCover,
  meta: { client: "NASA SpaceApps Challenge", year: "2019", role: "VR Developer", stack: "Unity · C# · VR" },
  problem: "The NASA SpaceApps Challenge 2019 asked teams to create an interactive experience that made the consequences of climate change tangible. Scientific data exists but is abstract for the general public — it needed to be experienced, not just read.",
  solution: "We built a virtual reality game in Unity where the player experiences the real-world consequences of climate change firsthand: rising sea levels, polar ice melt, and extreme weather events in interactive environments.",
  highlights: [
    { title: "Immersive VR experience", desc: "The player is transported to climate-affected scenarios with visualizations based on real NASA data." },
    { title: "Educational game mechanics", desc: "The player's in-game decisions have visible environmental consequences, building cause-and-effect awareness." },
    { title: "Local winner — Ciudad Obregón 2019", desc: "The project was selected and nominated at the local hackathon venue, competing against teams from across the region." },
  ],
  screenshots: [
    { img: imgS1, caption: "VR game scene — climate impact visualization" },
  ],
  result: "The project was nominated at the NASA SpaceApps Challenge 2019 in Ciudad Obregón. It demonstrated that virtual reality can be a powerful vehicle for science communication and environmental education.",
  techStack: ["Unity", "C#", "VR SDK", "3D Modeling", "NASA Open Data"],
  myRole: "Built the game in Unity with C#, designed game mechanics, integrated the VR environments, and presented the project to the hackathon judges.",
  bullets: ["Nominated at NASA SpaceApps Challenge 2019", "Full VR experience in Unity + C#", "Real NASA data integrated", "Educational cause-and-effect mechanics"],
  liveUrl: "https://2019.spaceappschallenge.org/challenges/living-our-world/1up-nasa-earth/teams/the-no-names/project",
};

const NasaPage = () => <CaseStudyPage data={data} />;
export default NasaPage;
