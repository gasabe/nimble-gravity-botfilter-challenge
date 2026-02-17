export default function JobList({ jobs, loading, error }) {
  return (
    <section className="card">
      <h2 className="card__title">Step 3 — Posiciones abiertas</h2>

      {loading && <p className="muted">Cargando posiciones...</p>}

      {error && <div className="alert alert--error">{error}</div>}

      {!loading && !error && jobs.length === 0 && (
        <p className="muted">No hay posiciones disponibles.</p>
      )}

      <ul className="job-list">
        {jobs.map((job) => (
          <li key={job.id} className="job-item">
            <div className="job-item__content">
              <strong>{job.title}</strong>
              <span className="muted">ID: {job.id}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
