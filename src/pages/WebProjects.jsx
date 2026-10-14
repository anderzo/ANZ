import { Link } from 'react-router-dom';

function WebProjects() {
  return (
    <div className="card border-0 shadow-sm p-4 mt-3">
      <h4 className="fw-bold text-primary">Proyectos Web</h4>
      <p className="text-muted">Mis aplicaciones desarrolladas.</p>
      
      {/* Enlace a la página de contacto */}
      <Link to="/contacto" className="btn btn-dark mt-2">Ir a Contacto</Link>
    </div>
  );
}

export default WebProjects;