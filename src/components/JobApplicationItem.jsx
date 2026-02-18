import { useState } from "react";

export default function JobApplicationItem({
  job,
  candidate,
  onSubmitJob,
  getJobState,
}) {
  const [repoUrl, setRepoUrl] = useState("");

  const st = getJobState(job.id);
  const trimmed = repoUrl.trim();
  const canSubmit = !!candidate && !!trimmed && !st.loading;

  return (
    <li className="job-item">
      <div className="job-item__header">
        <strong>{job.title}</strong>
        <span className="muted">ID: {job.id}</span>
      </div>

      <div className="row">
        <input
          className="input"
          placeholder="https://github.com/tu-usuario/tu-repo"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          disabled={!candidate || st.loading}
        />
        <button
          className="btn"
          onClick={() => onSubmitJob(job.id, trimmed)}
          disabled={!canSubmit}
        >
          {st.loading ? "Enviando..." : "Submit"}
        </button>
      </div>

      {st.error && <div className="alert alert--error">{st.error}</div>}
      {st.ok && (
        <div className="alert alert--success">Postulación enviada</div>
      )}
    </li>
  );
}
