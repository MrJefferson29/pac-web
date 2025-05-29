import React from "react";
import styled, { keyframes } from "styled-components";

import img1 from "../assets/place1.jpg";
import img2 from "../assets/place2.jpg";
import img3 from "../assets/place3.jpg";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Styles = styled.section`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #005f73;
    margin-bottom: 1rem;
    text-align: center;
  }

  p.intro {
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    h1 {
      font-size: 1.6rem;
    }
    p.intro {
      font-size: 0.9rem;
    }
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const PlaceholderImg = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  margin-bottom: 1.5rem;
  padding-left: 1.7rem;
  position: relative;
  cursor: default;
  animation: ${fadeInUp} 0.5s ease forwards;
  opacity: 0;

  &:hover {
    background-color: #f9f1e7;
    border-radius: 8px;
  }

  &::before {
    content: "✔︎";
    position: absolute;
    left: 0;
    top: 0.2rem;
    font-size: 1rem;
    color: #f28482;
  }

  @media (max-width: 480px) {
    padding-left: 1.5rem;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #e9c46a;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const FeatureDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #2c3e50;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export default function Features() {
  const features = [
    {
      title: "Lectures (Language & Cultural Classes)",
      description:
        "Enables village elders, experts, and practitioners to teach languages and cultural practices via live or prerecorded sessions. Live weekly classes help diaspora communities stay connected to their roots.",
    },
    {
      title: "Culture & Tradition (Video and Article Content)",
      description:
        "A multimedia repository of village traditions—marriage rituals, dances, festivals, ancestral worship, and more—captured in both video and written formats for an engaging, multi-sensory experience.",
    },
    {
      title: "Projects (Village Development & Cultural Initiatives)",
      description:
        "Lists and funds essential community projects—building centers, purchasing land for events, and more—via donations from locals and the diaspora, sustaining both traditions and physical spaces.",
    },
    {
      title: "Quarters (Localized Community Support)",
      description:
        "Allows sub-groups within the village to pool resources for specific causes—funerals, feasts, historical site preservation—bringing transparency and organization to collective efforts.",
    },
    {
      title: "Forums (Discussions & Cultural Exchange)",
      description:
        "Provides discussion spaces for quarters and community members to share ideas, plan festivals, resolve disputes, and bridge generational gaps through cross-generational dialogue.",
    },
    {
      title: "Shop (Marketplace for Cultural Items)",
      description:
        "An online marketplace for traditional artifacts, handicrafts, clothing, and instruments—giving artisans global market access, preserving craftsmanship, and creating sustainable income.",
    },
  ];

  return (
    <Styles>
      <ImageGrid>
        <PlaceholderImg src={img1} alt="Village landscape scene" />
        <PlaceholderImg src={img2} alt="Traditional African festival" />
        <PlaceholderImg src={img3} alt="Cultural artifacts display" />
      </ImageGrid>

      <h1>CORE FEATURES OF THE VILLAGE APP</h1>
      <p className="intro">
        The PAC (Preserve African Culture) program provides an innovative and critical platform for documenting, preserving,
        and promoting African cultural heritage in the digital age. The app’s features are designed to ensure that these valuable
        cultural practices are safeguarded for future generations, especially as many elders, who hold vast knowledge of the culture,
        pass on. Here’s a deeper look into the app’s features and why they are crucial:
      </p>
      <FeatureList>
        {features.map((feat, idx) => (
          <FeatureItem key={idx} style={{ animationDelay: `${idx * 0.15}s` }}>
            <FeatureTitle>{feat.title}</FeatureTitle>
            <FeatureDescription>{feat.description}</FeatureDescription>
          </FeatureItem>
        ))}
      </FeatureList>
    </Styles>
  );
}
