import React from "react";
import Personaje from "./personaje";

const viewBusquedaPersonaje = ({ personaje }) => {
  return (
    <div className="col-12 p-5 row">
      <Personaje key={personaje.id} personaje={personaje} />
    </div>
  );
};

export default viewBusquedaPersonaje;
