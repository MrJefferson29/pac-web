import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Car from "../components/carousel";
import Card from "../components/cards";
import Lists from "../components/list";

import group from "../assets/group.jpg";

export default function Home() {
  return (
    <Styles>
      <Container>
        <Car />
        <Row className="content-row">
          <Col md={6} className="text-col">
            <h2 className="heading">PRESERVE AFRICAN CULTURE (PAC) PROGRAM</h2>
            <p className="para">
              Africa is home to one of the richest cultural heritages in the world. Yet,
              globalization, urbanization, and the passage of time threaten the survival of
              many of its traditions, languages, and practices. The Preserve African Culture
              (PAC) Program offers a groundbreaking solution — a multidimensional initiative
              designed to document, preserve, and promote African culture through digital
              technology, education, and global partnerships. The PAC Program empowers local
              communities to become stewards of their own history while fostering international
              recognition of Africa’s extraordinary diversity. By combining community-based
              efforts with innovative digital tools such as AI, virtual reality, and custom
              mobile apps, the program ensures African culture remains accessible, celebrated,
              and monetized, benefiting communities economically and socially. With various
              interconnected projects like PAC AI, Digital Centers, Virtual Museums, Festivals,
              and more, the PAC Program is a long-term solution to a complex problem. We invite
              you to join this vision to ensure the preservation and global sharing of African
              culture. PAC not only bridges the gap between the local communities and their
              diaspora but also ensures that African cultural heritage is passed down to future
              generations. The project includes a dedicated one-hour show on My Media Prime to
              showcase African culture and promote the platform.
            </p>
          </Col>
          <Col md={6} className="image-col">
            <img
              src={group}
              alt="Group of people celebrating African culture"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        <div className="cards-section">
          <Card />
        </div>

        <div className="lists-section">
          <Lists />
        </div>
      </Container>
    </Styles>
  );
}

const Styles = styled.div`
  /* Container padding override */
  .container {
    padding-top: 2rem;
    padding-bottom: 4rem;
    max-width: 1140px;
  }

  /* Content row */
  .content-row {
    margin-top: 3rem;
    margin-bottom: 4rem;
    align-items: center;
    gap: 2rem;
  }

  /* Text column */
  .text-col {
    background-color: #f8f9fa;
    padding: 2.5rem 2rem;
    border-radius: 10px;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
  }

  .heading {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    font-size: 2.25rem;
    color: #222;
    margin-bottom: 1.25rem;
    line-height: 1.2;
  }

  .para {
    color: #555;
    font-size: 1.135rem;
    line-height: 1.7;
    letter-spacing: 0.02em;
    font-weight: 500;
  }

  /* Image column */
  .image-col img {
    border-radius: 15px;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
    max-height: 480px;
    object-fit: cover;
    width: 100%;
  }

  /* Cards section spacing */
  .cards-section {
    margin-bottom: 3rem;
  }

  /* Lists section spacing */
  .lists-section {
    margin-bottom: 5rem;
  }

  /* Responsive tweaks */
  @media (max-width: 767px) {
    .text-col,
    .image-col {
      padding: 1.5rem 1rem;
      background-color: transparent;
      box-shadow: none;
      margin-bottom: 2rem;
    }

    .heading {
      font-size: 1.75rem;
    }

    .para {
      font-size: 1rem;
      line-height: 1.6;
    }

    .image-col img {
      max-height: 300px;
    }
  }
`;
