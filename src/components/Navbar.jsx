import { Link } from 'react-router-dom';

function Navbar() {
  const navItems = [
    { label: "Inicio", path: "/" },
    { label: "Proyectos", path: "/proyectos" }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#212529' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Mi Portfolio</Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link" to={item.path}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;