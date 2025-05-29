import React from "react";
import styled, { keyframes } from "styled-components";

import imp1 from "../assets/imp1.jpg";
import imp2 from "../assets/imp2.jpg";
import imp3 from "../assets/imp3.jpg";

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

  h2 {
    font-size: 1.9rem;
    font-weight: 700;
    color: #005f73;
    margin-bottom: 1rem;
    text-align: center;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #f28482;
    margin-top: 2rem;
    margin-bottom: 0.7rem;
  }

  p,
  p.intro {
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.1rem;
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
    }

    p,
    p.intro {
      font-size: 0.95rem;
      margin-bottom: 1.2rem;
    }
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  margin: 1rem 0 2rem 0;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const PointSection = styled.section`
  margin-bottom: 2rem;
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease forwards;
  animation-delay: ${({ delay }) => delay}s;
`;

const PointTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #f28482;
  margin-bottom: 0.5rem;
`;

export default function Importance() {
  const reasons = [
    {
      title: "Aging Populations & Knowledge Gaps",
      text: "Many elders are the sole bearers of detailed ceremonies, stories, and languages. As they age, we risk losing this wisdom. PAC records and shares it while they’re still with us.",
      img: imp1,
    },
    {
      title: "Cultural Erosion",
      text: "Global influences have diluted many traditions. PAC bridges the gap, making heritage digitally accessible to younger generations.",
      img: null,
    },
    {
      title: "Preserving Languages",
      text: "With many African languages endangered, our lectures and content archive ensures these languages remain alive for future learners.",
      img: imp2,
    },
    {
      title: "Documentation for Posterity",
      text: "Using video, text, and audio, the app captures culture in its purest form, creating a lasting archive for anyone, anywhere.",
      img: null,
    },
    {
      title: "Connecting Diaspora Communities",
      text: "Africans abroad can reconnect, learn, and participate virtually, strengthening bonds with their home villages.",
      img: imp3,
    },
  ];

  return (
    <Styles>
      <h2>THE NEED FOR IMMEDIATE ACTION: WHY THIS PLATFORM IS CRUCIAL</h2>
      <p className="intro">
        Time threatens African cultural heritage. Below are the urgent drivers behind PAC:
      </p>

      {reasons.map((item, idx) => (
        <PointSection key={idx} delay={idx * 0.15}>
          <PointTitle>{item.title}</PointTitle>
          <p>{item.text}</p>
          {item.img && (
            <ImgWrapper>
              <img src={item.img} alt={`${item.title} image`} />
            </ImgWrapper>
          )}
        </PointSection>
      ))}

      <h3>COMMUNICATION TOOLS</h3>
      <p>
        SMS and email integrations keep villagers updated on events and projects instantly, ensuring no one misses critical information.
      </p>

      <h3>MY MEDIA PRIME’S PARTNERSHIP</h3>
      <p>
        My Media Prime travels with PAC to document and produce high-quality content, from on-the-ground videos to a global showcase, elevating each village’s stories and attracting support, tourism, and investment.
      </p>
    </Styles>
  );
}
