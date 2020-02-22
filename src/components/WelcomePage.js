import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  text-align: center;
`;

const StyledLink = styled.div`
  margin-top: 20px;
  font-size: 26px;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <StyledHeader>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <StyledLink><Link to='/characters'>See the characters!</Link></StyledLink>
      </StyledHeader>
    </section>
  );
}
