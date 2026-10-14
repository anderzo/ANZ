import { Link, Outlet } from 'react-router-dom';

function Projects() {
  return (
    <div className="container mt-4 text-dark">
      <h1>Mis Proyectos</h1>
      <p>Explora mis desarrollos divididos por áreas:</p>

      {/* Sub-menú de navegación interna */}
      <div className="nav nav-pills gap-2 mb-4">
        <Link className="btn btn-outline-primary" to="web"> Desarrollo Web </Link>
        <Link className="btn btn-outline-success" to="infraestructura"> Redes & Backend </Link>
      </div>

      <hr />
      <Outlet />
    </div>
  );
}

export default Projects;