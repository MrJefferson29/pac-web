// Coordinators.js
import React from "react";
import styled from "styled-components";

const Styles = styled.section`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #005f73;
    margin-bottom: 1rem;
    text-align: center;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
  }

  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }

  li::before {
    content: "•";
    position: absolute;
    left: 0;
    top: 0;
    color: #f28482;
    font-weight: bold;
  }

  button {
    display: block;
    margin: 2rem auto 0;
    padding: 0.75rem 1.5rem;
    background-color: #e9c46a;
    color: #2c3e50;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background-color: #f2b94e;
    }
  }
`;

export default function Coordinators() {
  const responsibilities = [
    "Supervision & Coordination: Oversee app maintenance and feature updates (lectures, content, forums, projects, shop).",
    "Content Management: Facilitate documentaries, interviews, and written publications with cultural custodians.",
    "Community Engagement: Mobilize villagers to contribute and participate in app features.",
    "Communication: Use SMS and email tools to send announcements and event updates.",
    "Project Advocacy: Champion village projects and liaise with sponsors and stakeholders.",
    "E-commerce Coordination: Manage marketplace listings and support local artisans."
  ];

  return (
    <Styles>
      <h1>PAC COORDINATOR OF A VILLAGE</h1>
      <p>
        PAC coordinators play a critical role in the success of the PAC program. These
        leaders oversee implementation, act as cultural ambassadors, and manage community
        engagement to preserve and promote their village's heritage.
      </p>
      <ul>
        {responsibilities.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <button>Apply to be a Coordinator</button>
    </Styles>
  );
}
