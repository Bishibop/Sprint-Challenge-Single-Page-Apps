import React from "react";
import styled from 'styled-components';

const StyledCharacter = styled.div`
  text-align: center;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  border: solid black 1px;
  width: 50%;
`;

export default function CharacterCard({ character }) {
  return (
    <StyledCharacter>
      <img src={character.image} alt="headshot" / >
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Type: {character.type === '' ? 'UKNOWN' : character.type}</p>
      <p>Gender: {character.gender}</p>
      <p>Location: {character.location.name}</p>
      <p>Appears in {character.episode.length} episodes.</p>
    </StyledCharacter>
  );
}
