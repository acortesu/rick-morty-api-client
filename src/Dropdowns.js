import "./App.css";
import React, { useState, useEffect } from "react";
import Character from "./Character";

function Dropdowns() {
  const [season, setSeason] = useState("1");
  const [episode, setEpisode] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchAllEpisodes = async () => {
      let episodes = [];
      let nextPage = 1;
      let hasMorePages = true;

      while (hasMorePages) {
        const response = await fetch(
          `https://rickandmortyapi.com/api/episode?page=${nextPage}`
        );
        const data = await response.json();
        episodes = episodes.concat(data.results);
        hasMorePages = data.info.next ? true : false;
        nextPage++;
      }

      // Filtrar episodios por la temporada seleccionada
      const filteredEpisodes = episodes.filter((episode) =>
        episode.episode.startsWith(`S0${season}`)
      );
      setEpisodes(filteredEpisodes);
    };

    fetchAllEpisodes();
  }, [season]);

  useEffect(() => {
    if (episode) {
      const characterURLs = episode.characters;
      const characterPromises = characterURLs.map((url) =>
        fetch(url).then((response) => response.json())
      );
      Promise.all(characterPromises).then((characters) => {
        setCharacters(characters);
      });
    }
  }, [episode]);

  return (
    <div>
      <div className="cnt-dropdowns">
        <select
          className="selectSeason"
          value={season}
          onChange={(e) => setSeason(e.target.value)}
        >
          <option value="1">Season 1</option>
          <option value="2">Season 2</option>
          <option value="3">Season 3</option>
          <option value="4">Season 4</option>
          <option value="5">Season 5</option>
        </select>
        <select
          className="selectEpisode"
          onChange={(e) =>
            setEpisode(episodes.find((ep) => ep.id === +e.target.value))
          }
        >
          <option value="">Select an Episode</option>
          {episodes.map((episode) => (
            <option key={episode.id} value={episode.id}>
              {episode.name}
            </option>
          ))}
        </select>
      </div>
      <div className="character-grid">
      {characters.length > 0 &&
        characters.map((character) => (
          <Character
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            status={character.status}
            image={character.image} 
          />
        ))}
    </div>
  </div>
  );
}

export default Dropdowns;
