import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 2rem;
  background-color: #fefefe;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.2rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: #444;
`;

const List = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
  color: #333;
`;

const ListItem = styled.li`
  margin-bottom: 0.8rem;
  font-size: 1rem;
  line-height: 1.6;
`;

const Lists = () => (
  <Section>
    <Title>Why All These Projects Are Essential for PAC</Title>
    <Description>
      The PAC Program’s goal of preserving African culture requires a multifaceted approach. Each of these projects addresses a specific challenge or opportunity:
    </Description>
    <List>
      <ListItem>
        <strong>Digitalizing Heritage:</strong> Through AI, apps, and digital centers, the program ensures cultural knowledge is preserved permanently.
      </ListItem>
      <ListItem>
        <strong>Global Reach:</strong> Virtual museums and documentaries make African culture accessible to global audiences.
      </ListItem>
      <ListItem>
        <strong>Community Ownership:</strong> By involving villagers in every project, PAC empowers communities to take control of their narratives.
      </ListItem>
      <ListItem>
        <strong>Economic Sustainability:</strong> E-commerce and festivals create financial opportunities, making cultural preservation viable.
      </ListItem>
      <ListItem>
        <strong>Cultural Education:</strong> PAC encourages the learning and transmission of traditions to younger generations and the diaspora.
      </ListItem>
    </List>
    <Description>
      The integration of these projects guarantees a comprehensive and lasting impact. The PAC Program can revolutionize how African culture is preserved and celebrated.
    </Description>
  </Section>
);

export default Lists;
