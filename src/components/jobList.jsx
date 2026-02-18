import JobApplicationItem from "./JobApplicationItem";

export default function JobList({
  jobs,
  loading,
  error,
  candidate,
  onLoadJobs,
  onSubmitJob,
  getJobState,
}) {
  return (
    <section className="card">
      <h2 className="card__title">Step 3 — Posiciones abiertas</h2>

      <button className="btn" onClick={onLoadJobs} disabled={loading}>
        {loading ? "Cargando..." : "Cargar posiciones"}
      </button>

      {error && <div className="alert alert--error">{error}</div>}

      {!loading && !error && jobs.length === 0 && (
        <p className="muted">No hay posiciones disponibles.</p>
      )}

      {jobs.length > 0 && (
        <div className="step-divider">
          <h3 className="step-divider__title">Step 4 — Subí tu repositorio</h3>
          <p className="muted">Pegá el link de tu repo en la posición a la que querés aplicar.</p>
        </div>
      )}

      <ul className="job-list">
        {jobs.map((job) => (
          <JobApplicationItem
            key={job.id}
            job={job}
            candidate={candidate}
            onSubmitJob={onSubmitJob}
            getJobState={getJobState}
          />
        ))}
      </ul>
    </section>
  );
}
