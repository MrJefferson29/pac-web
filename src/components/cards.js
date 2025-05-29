import React from "react";
import styled from "styled-components";
import tech1 from "../assets/tech1.jpg";
import tech2 from "../assets/tech2.jpg";
import vr from "../assets/vr.jpg";
import tech3 from "../assets/tech3.jpg";
import doc from "../assets/doc.jpg";
import fest from "../assets/fest.jpg";
import food from "../assets/food.jpg";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCardContainer = styled.article`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  cursor: default;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover,
  &:focus-within {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }
`;

const CardImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;

  ${ProjectCardContainer}:hover &,
  ${ProjectCardContainer}:focus-within & {
    transform: scale(1.05);
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent);
`;

const CardContent = styled.div`
  padding: 1.5rem 1.75rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 0.8rem;
  line-height: 1.2;
`;

const CardDescription = styled.p`
   font-size: 1.135rem;
    font-weight: 500;
  color: #444;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const ImportanceSection = styled.section`
  margin-top: 1rem;
`;

const ImportanceTitle = styled.h4`
  font-size: 1.15rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.6rem;
`;

const ImportanceList = styled.ul`
  list-style-type: disc;
  padding-left: 1.6rem;
    font-size: 1.135rem;
    font-weight: 500;
`;

const ImportanceListItem = styled.li`
  font-size: 0.95rem;
  margin-bottom: 0.35rem;
  color: #555;
  line-height: 1.4;
`;

const pacProjects = [
  {
    title: "PAC AI: Building an Artificial Intelligence for African Cultural Preservation",
    image: tech1,
    description:
      "PAC AI focuses on training an artificial intelligence model specifically designed to store, analyze, and share information about African culture, traditions, languages, and heritage...",
    importance: [
      "Preservation of Oral Histories: Safeguards disappearing oral traditions by converting them into digital formats.",
      "Access for Future Learning: Makes African cultural knowledge accessible to future generations.",
      "Language Protection: Supports translation and protection of endangered African languages.",
      "Universal Accessibility: Makes African culture accessible to both Africans and non-Africans worldwide.",
    ],
  },
  {
    title: "PAC Digital Centers: Empowering Villages with Mini-Studios",
    image: tech2,
    description:
      "This project establishes digital centers equipped with mini-studios in each participating village...",
    importance: [
      "Ease of Documentation: Allows villagers to document stories, dance, food, and rituals locally.",
      "Community Engagement: Empowers communities to lead preservation efforts.",
      "Data Collection: Feeds directly into PAC AI for training the model.",
      "Sustainability: Local ownership ensures continuity and engagement.",
    ],
  },
  {
    title: "PAC Virtual Museums: A Web 3.0 Experience of African Culture",
    image: vr,
    description:
      "PAC Virtual Museums will be immersive, 3D web-based experiences allowing global users to experience African culture digitally.",
    importance: [
      "Global Reach: People worldwide can visit and learn about African culture without traveling.",
      "Digital Preservation: Secures cultural assets in a virtual form.",
      "Engagement: Offers youth-friendly and educational access.",
      "Blockchain Integrity: Web 3.0 ensures authenticity and traceability of content.",
    ],
  },
  {
    title: "PAC Apps: Learning Africa, the Fun Way",
    image: tech3,
    description:
      "We will develop mobile applications to teach kids, teens, and adults about African traditions, languages, and history.",
    importance: [
      "Gamified Learning: Makes cultural education fun and interactive.",
      "Wide Accessibility: Available on Android and iOS for free or low cost.",
      "Offline Capability: Helps rural users with limited internet.",
    ],
  },
  {
    title: "PAC Documentaries: Capturing Culture in Motion",
    image: doc,
    description:
      "Through short documentaries and interviews, we will showcase the richness and diversity of African communities and their practices.",
    importance: [
      "Emotional Storytelling: Creates empathy and interest.",
      "Wide Broadcast: Can be streamed online or shown in local PAC centers.",
      "High-Quality Archives: Acts as research material for future generations.",
    ],
  },
  {
    title: "PAC Festivals: Annual Cultural Exhibitions",
    image: fest,
    description:
      "We aim to organize annual events celebrating African art, music, fashion, and food, rotating across African countries.",
    importance: [
      "Unity: Brings together diverse African communities.",
      "Cultural Pride: Showcases African creativity and identity.",
      "Economic Opportunity: Promotes artisans, chefs, and musicians.",
    ],
  },
  {
    title: "PAC E-commerce: Market for African Cultural Products",
    image: food,
    description:
      "We’ll build an online marketplace to sell African crafts, clothing, instruments, and more.",
    importance: [
      "Global Exposure: Promotes African-made products to global markets.",
      "Supports Artisans: Directly benefits cultural creators and craft workers.",
      "Cultural Continuity: Encourages the production of traditional goods.",
    ],
  },
];

const Card = () => (
  <Grid>
    {pacProjects.map((project, index) => (
      <ProjectCardContainer key={index} tabIndex={0} aria-label={`Project: ${project.title}`}>
        <CardImageWrapper>
          <CardImage src={project.image} alt={project.title || "PAC Project Image"} />
          <GradientOverlay />
        </CardImageWrapper>
        <CardContent>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
          <ImportanceSection>
            <ImportanceTitle>Importance</ImportanceTitle>
            <ImportanceList>
              {project.importance.map((item, idx) => (
                <ImportanceListItem key={idx}>{item}</ImportanceListItem>
              ))}
            </ImportanceList>
          </ImportanceSection>
        </CardContent>
      </ProjectCardContainer>
    ))}
  </Grid>
);

export default Card;
