import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const EditarPersonaje = (props) => {
  const {
    modalEditar,
    abrirModalEditar,
    thumbnailImg,
    personajeId,
    setPersonajeId,
    personajes,
    guardarPersonaje,
  } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonajeId((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(personajeId);
  };

  const guardarCambios = () => {
    let personajesEditados = personajes;
    personajesEditados.map((hero) => {
      if (hero.id === personajeId.id) {
        hero.name = personajeId.name;
        hero.description = personajeId.description;
      }
    });
    guardarPersonaje(personajesEditados);
    abrirModalEditar(false);
  };

  const cerrarModal = () => {
    abrirModalEditar(false);
  };

  return (
    <div>
      <Modal className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" show={modalEditar}>
        <Modal.Body>
          <div className="card">
            <img src={thumbnailImg} alt={"imagen"} className="card-img-top" />
            <div className="card-body">
              <div>
                <label className="title">Nombre:</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="name"
                  value={personajeId.name}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <label className="title ">Descripcion:</label>
                <textarea
                  type="text"
                  className="form-control"
                  name="description"
                  value={personajeId.description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={() => cerrarModal()}>
            Cancelar
          </Button>
          <Button variant="outline-success" onClick={() => guardarCambios()}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditarPersonaje;
