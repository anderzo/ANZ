import React from 'react';

function Contact() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border-0 shadow-sm p-4">
            <h2 className="fw-bold text-primary mb-3">Contacto</h2>
            <p className="text-muted mb-4">
              ¿Tienes un proyecto en mente, una propuesta laboral o quieres conectar? Rellena el formulario o comunícate directamente.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label fw-bold">Nombre</label>
                <input type="text" className="form-control" id="nombre" placeholder="Tu nombre completo" />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" placeholder="tucorreo@example.com" />
              </div>
              
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label fw-bold">Mensaje</label>
                <textarea className="form-control" id="mensaje" rows="4" placeholder="Escribe los detalles de tu mensaje..."></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary px-4">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;