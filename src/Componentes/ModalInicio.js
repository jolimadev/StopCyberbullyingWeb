import React, { useState } from "react";

const ModalInicio = () => {
  // Estado para controlar la visibilidad del modal
  const [showModal, setShowModal] = useState(true);

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    // Estructura del modal
    <div
      className={`modal ${showModal ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: showModal ? "block" : "none" }}
    >
      <div className="modal-dialog" role="document" >
        <div className="modal-content" style={{ backgroundColor: "#599eee",color: "#f5f5f5" }}>
          {/* Cabecera del modal */}
          <div className="modal-header">
            <h5 className="modal-title">Bienvenido/a al Quiz</h5>
            {/* Botón para cerrar el modal */}
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleCloseModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {/* Cuerpo del modal */}
          <div className="modal-body  text-center">
            <h2>¡Hola Usuario/a del Internet!</h2>
            <h4>
              Este quiz te ayudará a concientizar y reflexionar acerca de esta
              problemática social digital.
            </h4>
            <strong>
              Siéntete libre de compartir el quiz en tus redes al finalizar el
              mismo.
            </strong>
          </div>
          {/* Pie del modal */}
          <div className="modal-footer d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCloseModal}
            >
              Empezar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInicio;
