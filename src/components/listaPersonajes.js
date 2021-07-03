import React from "react";
import Personaje from "./personaje";

const ListadoPersonajes = ({ personajes, guardarPersonaje }) => {
  return (
    <div className="col-12 p-5 row">
      {personajes.map((personaje) => (
        // console.log(personaje)
        <Personaje
          key={personaje.id}
          personaje={personaje}
          personajes={personajes}
          guardarPersonaje={guardarPersonaje}
        />
      ))}
    </div>
  );
};

export default ListadoPersonajes;
