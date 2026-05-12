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
    { title: "Local winner — Ciudad Obregón 2019", desc: "The project won the local NASA SpaceApps Challenge venue in Ciudad Obregón, competing against teams from across the region, and was nominated to the global judging round." },
  ],
  screenshots: [
    { img: imgS1, caption: "VR game scene — climate impact visualization" },
  ],
  result: "Won the local NASA SpaceApps Challenge 2019 venue in Ciudad Obregón and nominated to the global round. The project demonstrated that virtual reality is a powerful vehicle for science communication — making abstract climate data experiential rather than just informational.",
  techStack: ["Unity", "C#", "VR SDK", "3D Modeling", "NASA Open Data"],
  myRole: "Built the game in Unity with C#, designed game mechanics, integrated the VR environments, and presented the project to the hackathon judges.",
  bullets: ["Local winner — NASA SpaceApps Challenge 2019", "Nominated to global judging round", "Full VR experience in Unity + C#", "Real NASA data integrated", "Educational cause-and-effect mechanics"],
  liveUrl: "https://2019.spaceappschallenge.org/challenges/living-our-world/1up-nasa-earth/teams/the-no-names/project",
};

const NasaPage = () => <CaseStudyPage data={data} />;
export default NasaPage;
