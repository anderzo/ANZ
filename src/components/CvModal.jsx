import React from 'react';

function CvModal({ show, onClose }) {
  if (!show) return null; // Si show es false, no se muestra nada

  return (
    <div className="modal show d-block bg-dark bg-opacity-50" role="dialog">
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header bg-dark text-white">
            <h5 className="modal-title fw-bold">Curriculum Vitae</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          <div className="modal-body p-4">
            <h4 className="fw-bold text-primary">Resumen Profesional</h4>
            <p>Estudiante e Ingeniero en Sistemas...</p>
            <hr />
                <h5 className="fw-bold">Habilidades Técnicas</h5>
                <ul className="list-inline">
                  <li className="list-inline-item badge bg-secondary p-2 mb-2">Java / Spring Boot</li>
                  <li className="list-inline-item badge bg-secondary p-2 mb-2">C# / .NET</li>
                  <li className="list-inline-item badge bg-secondary p-2 mb-2">React / JavaScript / TypeScript</li>
                  <li className="list-inline-item badge bg-secondary p-2 mb-2">PostgreSQL / MySQL / MongoDB</li>
                  <li className="list-inline-item badge bg-secondary p-2 mb-2">Docker / Git / Linux</li>
                  <li className="list-inline-item badge bg-secondary p-2 mb-2">Redes / GNS3 / Cisco</li>
                </ul>
                <hr />
                <h5 className="fw-bold">Educación & Experiencia</h5>
                <p className="mb-1"><strong>Ingeniería en Sistemas Computacionales</strong></p>
                <p className="text-muted small">Universidad Nacional Autónoma de Honduras (UNAH)</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CvModal;