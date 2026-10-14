function ServiceCard({ icon, title, description, badgeColor }) {
  return (
    <div className="col-md-4">
      <div className="card h-100 border-0 shadow-sm p-3">
        <div className="card-body">
          <div className={`badge ${badgeColor} p-3 mb-3 fs-4 rounded`}>
            {icon}
          </div>
          <h4 className="card-title fw-bold">{title}</h4>
          <p className="card-text text-muted">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;