import "./App.css";
import React, { useState, useEffect } from "react";
import Character from "./Character";

function Dropdowns() {
  const [season, setSeason] = useState(1);
  const [episode, setEpisode] = useState(null); // Nuevo estado para el episodio seleccionado
  const [episodes, setEpisodes] = useState([]);
  const [characters, setCharacters] = useState([]); // Nuevo estado para los personajes

  useEffect(() => {
    const startEpisode = (season - 1) * 10 + 1;
    const endEpisode = season === 1 ? startEpisode + 10 : startEpisode + 9; 
    const ids = Array.from(
      { length: endEpisode - startEpisode + 1 },
      (_, i) => i + startEpisode
    ).join(",");
  
    fetch(`https://rickandmortyapi.com/api/episode/${ids}`)
      .then((response) => response.json())
      .then((data) => {
        setEpisodes(data);
      })
      .catch((error) =>
        console.error("Ocurrió un error al buscar los episodios", error)
      );
  }, [season]);  

  useEffect(() => {
    if (episode) {
      // Sólo buscar personajes si hay un episodio seleccionado
      const characterURLs = episode.characters;
      const characterPromises = characterURLs.map((url) =>
        fetch(url).then((response) => response.json())
      );
      Promise.all(characterPromises).then((characters) => {
        console.log(characters)
        setCharacters(characters);
      });
    }
  }, [episode]);

  return (
    <div>
      <div className="cnt-dropdowns">
        <select
          className="selectSeason"
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
        {characters.map((character) => (
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
