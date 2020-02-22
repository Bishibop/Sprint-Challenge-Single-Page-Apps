import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard.js";
import SearchForm from "./SearchForm.js";

const initialCharactersUrl = 'https://rickandmortyapi.com/api/character';
export default function CharacterList() {

  const [characters, setCharacters] = useState([]);
  const [searchResults, setSearchResults] = useState();
  //const [prevUrl, setPrevUrl] = useState();
  //const [nextUrl, setNextUrl] = useState();

  function getCharacters() {
    axios.get(initialCharactersUrl).then(res => {
      console.log('Axios data', res.data.results);
      //setPrevUrl(res.data.info.prev);
      //setNextUrl(res.data.info.next);
      setCharacters(res.data.results);
    });
  }

  useEffect(() => {
    getCharacters();
    //This might need `characters` in the dependency array
    // Then wouldn't it run in a loop. Running useEffect every time that state
    // chaged which is every time you run useEffect?
  }, []);

  return (
    <div>
      <SearchForm
        characters={characters}
        setCharacters={setCharacters}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
      <section className="character-list">
        {searchResults && searchResults.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
        {!searchResults && characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </section>
    </div>
  );
}
