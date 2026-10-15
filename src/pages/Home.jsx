import React from 'react';
import ServiceCard from '../components/ServiceCard';
import servicesList from '../data/services.json';
import CvModal from '../components/CvModal';

function Home({ showCvModal, setShowCvModal }) {
  return (
    <>
 {/* Sección Hero / Bienvenida */}
      <section id="inicio" className="text-white py-5 text-center text-md-start" style={{ backgroundColor: '#0f172a' }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-7 mb-4 mb-md-0">
              <span className="badge bg-primary fs-6 mb-3 shadow-sm">Desarrollador de Software & Sistemas</span>
              <h1 className="display-4 fw-bold">
                Hola, soy Anderzon <span className="text-primary">Desarrollador Full Stack</span>
              </h1>
              <p className="lead text-light opacity-75 mt-3">
                Especializado en la creación de aplicaciones web escalables, arquitecturas de backend sólidas e integración de sistemas, integración y matenimieto de redes, y solidos conocimeintos en cienca de datos.
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-4">
                <button className="btn btn-primary btn-lg px-4 shadow" onClick={() => setShowCvModal(true)}> Ver Mi CV </button>
                <a href="#servicios" className="btn btn-outline-light btn-lg px-4 bg-warning border-dark border-2 text-dark"> Mis Servicios </a>
              </div>
            </div>
            <div className="col-md-5 text-center">
              {/* Contenedor adaptado con un sutil efecto de brillo y fondo oscuro translúcido */}
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

          {/* componetes trajetas*/}
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
      <CvModal show={showCvModal} onClose={() => setShowCvModal(false)} />
    </>
  );
}

export default Home;