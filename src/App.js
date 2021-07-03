import React, { useState, useEffect } from "react";
import Buscador from "./components/buscador";
import ListadoPersonajes from "./components/listaPersonajes";

function App() {
  const [personaje, guardarPersonaje] = useState("");
  const [personajes, guardarPersonajes] = useState([]);

  // useEffect(() => {
  //   const consultaApiPersonaje = async () => {
  //     if (personaje === "") return;

  //     const apikey = "1a01f31533d5332e760bf12dd611ec82";
  //     const hash = "871ffb6e72cb4a6cd3a90080c5c4d307";
  //     const urlAPI = `https://gateway.marvel.com:443/v1/public/characters?name=${personaje}&apikey=${apikey}&ts=1&hash=${hash}`;

  //     fetch(urlAPI)
  //       .then((res) => res.json())
  //       .then((json) => {
  //         console.log(json.data.results, "RES.JSON");
  //         guardarPersonaje(json.data.results);
  //       });
  //   };
  //   consultaApiPersonaje();
  // }, [personaje]);

  useEffect(() => {
    const consultaApiPersonajes = async () => {
      if (personaje !== "") return;

      const apikey = "1a01f31533d5332e760bf12dd611ec82";
      const hash = "871ffb6e72cb4a6cd3a90080c5c4d307";
      const urlAPI = `https://gateway.marvel.com:443/v1/public/characters?apikey=${apikey}&ts=1&hash=${hash}`;

      fetch(urlAPI)
        .then((res) => res.json())
        .then((json) => {
          console.log(json.data.results, "RES.JSON");
          guardarPersonajes(json.data.results);
        });
    };
    consultaApiPersonajes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center"> Buscador Personaje por Nombre:</p>
        <Buscador guardarPersonaje={guardarPersonaje} />
      </div>
      <div className="row justify-content-center">
        <ListadoPersonajes personajes={personajes} guardarPersonaje={guardarPersonaje} />
      </div>
    </div>
  );
}

export default App;
