import React from 'react';
import ServiceCard from '../components/ServiceCard';
import servicesList from '../data/services.json';

function Home({ showCvModal, setShowCvModal }) {
  return (
    <>
      {/* Sección Hero / Bienvenida */}
      <section id="inicio" className="text-white py-5 text-center text-md-start" style={{ backgroundColor: '#253f59' }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-7 mb-4 mb-md-0">
              <span className="badge bg-primary fs-6 mb-3">Desarrollador de Software & Sistemas</span>
              <h1 className="display-4 fw-bold">
                Hola, soy <span className="text-primary">Desarrollador Full Stack</span>
              </h1>
              <p className="lead text-secondary mt-3">
                Especializado en la creación de aplicaciones web escalables, arquitecturas de backend sólidas e integración de sistemas.
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-4">
                <button 
                  className="btn btn-primary btn-lg px-4" 
                  onClick={() => setShowCvModal(true)}
                >
                  Ver Mi CV
                </button>
                <a href="#servicios" className="btn btn-outline-light btn-lg px-4">
                  Mis Servicios
                </a>
              </div>
            </div>
            <div className="col-md-5 text-center">
              <div className="p-4 bg-secondary bg-opacity-10 rounded-circle d-inline-block border border-primary border-3 shadow">
                <img
                  src="https://via.placeholder.com/220"
                  alt="Perfil"
                  className="rounded-circle img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section id="servicios" className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Mis Servicios</h2>
            <p className="text-muted">Soluciones integrales de software adaptadas a tus necesidades</p>
          </div>

          {/* componete */}
          <div className="row g-4">
            {servicesList.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                badgeColor={service.badgeColor}
              />
            ))}
          </div>
          {/* componete */}
          
        </div>
      </section>

      {/* Modal de CV */}
      {showCvModal && (
        <div className="modal show d-block tab-index-1 bg-dark bg-opacity-50" role="dialog">
          <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header bg-dark text-white">
                <h5 className="modal-title fw-bold">Curriculum Vitae</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowCvModal(false)}
                ></button>
              </div>
              <div className="modal-body p-4">
                <h4 className="fw-bold text-primary">Resumen Profesional</h4>
                <p>
                  Estudiante e Ingeniero en Sistemas enfocado en desarrollo backend, arquitecturas de software y gestión de infraestructura de red y servidores.
                </p>
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
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowCvModal(false)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;