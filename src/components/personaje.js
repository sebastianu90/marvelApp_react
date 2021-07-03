import React, { useState } from "react";
import moment from "moment";
import EditarPersonaje from "./EditarPersonaje";

const Personaje = ({ personaje, personajes, guardarPersonaje }) => {
  const { name, description, modified, thumbnail, id } = personaje;
  const [modalEditar, abrirModalEditar] = useState(false);
  const [personajeId, setPersonajeId] = useState({
    id: "",
    name: "",
    description: "",
  });

  const thumbnailImg = thumbnail.path + "." + thumbnail.extension;
  const fechaMoficado = moment(modified, "YYYY-MM-DDTHH:mm:ssZ").format("DD-MM-YYYY");

  const obtenerId = (elemento) => {
    setPersonajeId(elemento);
    abrirModalEditar(true);
    console.log(elemento);
    console.log(personajes);
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={thumbnailImg} alt={"imagen"} className="card-img-top" />
        <div className="card-body">
          <div className="row">
            <h5 className="card-title col-9">
              Nombre:
              <br />
              {name}
            </h5>
            <button
              data-toggle="modal"
              type="button"
              onClick={() => obtenerId(personaje)}
              className="col-3 btn btn-xs btn-outline-warning btn-block"
            >
              <span className="material-icons text-center">edit</span>
            </button>
          </div>
          <div className="card-text hide_description">Descripción: {description}</div>
          <div className="card-text">Modificado: {fechaMoficado}</div>
        </div>
      </div>
      <EditarPersonaje
        modalEditar={modalEditar}
        abrirModalEditar={abrirModalEditar}
        thumbnailImg={thumbnailImg}
        personajeId={personajeId}
        setPersonajeId={setPersonajeId}
        personajes={personajes}
        guardarPersonaje={guardarPersonaje}
      />
    </div>
  );
};

export default Personaje;
