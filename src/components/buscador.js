import React, { useState } from "react";
import Error from "./error";
// asdalskdjlas
function Buscador({ guardarPersonaje }) {
  const [nombrePersonaje, guardarNombrePersonaje] = useState("");
  const [error, guardarError] = useState(false);

  const buscarPersonaje = (e) => {
    e.preventDefault();

    if (nombrePersonaje === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarPersonaje(nombrePersonaje);
  };

  return (
    <form onSubmit={buscarPersonaje}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Spider-man"
            onChange={(e) => guardarNombrePersonaje(e.target.value)}
          ></input>
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block boton"
            value="Buscar"
          ></input>
        </div>
      </div>
      {error ? <Error mensaje="Agrega un Nombre de personaje" /> : null}
    </form>
  );
}

export default Buscador;
