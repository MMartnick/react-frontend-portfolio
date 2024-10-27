import React from 'react';
import PortfolioSection from './PortfolioSection';


const Portfolio = () => {
  const interactiveProjects = [
    {
      title: "Artificial Nocturne",
      description:
        "Artificial Nocturne was my capstone graduate project. It is a top-down role-playing game that utilizes the mobile device light sensor to adjust the players' visibility of the game world. Core technical features for this project are the implementation of the device light sensor, the A-Star pathfinding algorithm, and player/enemy data sheets that determine damage dealt based on various attribute statistics. This project was built in OOP C# with the Unity game engine framework.",
      media: "https://www.youtube.com/embed/nAPBIC37qZ4",
      type: "video",
    },
    {
      title: "Out Runner",
      description:
        "Out Runner is a standard endless run and gun platformer designed for mobile devices. Although it is a relatively basic project, the intent was to build a game through to completion and gain experience in deploying it to an active user base through the Google Play Store. After its initial release, I received user feedback and pushed updates to address any concerns players had, such as responsive design for specific devices. This project was built in OOP C# with the Unity game engine framework, implemented Unity Ads and Analytics features, and deployed as an Android App Bundle.",
      media: "https://www.youtube.com/embed/4uTy1rmPGwk",
      type: "video",
    },
  ];

  const designProjects = [
    { title: "Brand Identity", description: "Logo design for a car company.", media: "/images/design/car.jpg", type: "image" },
    { title: "UI Mockup", description: "High-fidelity mockup for a mobile app.", media: "/images/design/sprint.png", type: "image" },
    { title: "Brand Identity", description: "Logo design for a car company.", media: "/images/design/Mythril.jpg", type: "image" },
    { title: "UI Mockup", description: "High-fidelity mockup for a mobile app.", media: "/images/design/Compiled.jpg", type: "image" },
    { title: "Brand Identity", description: "Logo design for a car company.", media: "/images/design/posters.jpg", type: "image" },
    { title: "UI Mockup", description: "High-fidelity mockup for a mobile app.", media: "/images/design/Mars.jpg", type: "image" },
    { title: "Brand Identity", description: "Logo design for a car company.", media: "/images/design/logos.jpg", type: "image" },
    { title: "UI Mockup", description: "High-fidelity mockup for a mobile app.", media: "/images/design//type.jpg", type: "image" },
  ];

  const artProjects = [
    { title: "Sunset Painting", description: "Acrylic painting of a sunset.", media: "/images/art/portrait2.png", type: "image" },
    { title: "Portrait Sketch", description: "Pencil sketch of a character.", media: "/images/art/astro.png", type: "image" },
    { title: "Sunset Painting", description: "Acrylic painting of a sunset.", media: "/images/art/leah.png", type: "image" },
    { title: "Portrait Sketch", description: "Pencil sketch of a character.", media: "/images/art/apple.png", type: "image" },
    { title: "Sunset Painting", description: "Acrylic painting of a sunset.", media: "/images/art/siren.jpg", type: "image" },
    { title: "Portrait Sketch", description: "Pencil sketch of a character.", media: "/images/art/blue.png", type: "image" },
    { title: "Portrait Sketch", description: "Pencil sketch of a character.", media: "/images/art/untitled.jpg", type: "image" },
    { title: "Sunset Painting", description: "Acrylic painting of a sunset.", media: "/images/art/dragon.png", type: "image" },
  ];




  

  return (
    <div className="portfolio py-5">
      <PortfolioSection title="Interactive" projects={interactiveProjects} />
      <PortfolioSection title="Design" projects={designProjects} />
      <PortfolioSection title="Art" projects={artProjects} />
    </div>
  );
};

export default Portfolio;
