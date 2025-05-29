import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
overflow-x: hidden;
  background-color: #121212;
  color: #eee;
  padding: 2rem 1rem;
  border-top: 1px solid #333;
  font-size: 0.9rem;
  text-align: center;

  a {
    color: #8ab4f8;
    margin: 0 0.8rem;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #a3c9ff;
      text-decoration: underline;
    }
  }

  .links {
    margin: 1rem 0 1.5rem;
  }

  @media (min-width: 600px) {
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .links {
      margin: 0;
    }
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <div>
        © {new Date().getFullYear()} Preserve African Culture Program. All rights reserved.
      </div>
      <nav className="links" aria-label="Footer quick links">
        <a href="/">Home</a>
        <a href="/features">Features</a>
        <a href="/importance">Impact</a>
        <a href="/pac-coordinators">Coordinators</a>
        <a href="/contact">Contact</a>
      </nav>
    </FooterWrapper>
  );
}
