import CandidateResult from "./components/CandidateResult";
import CandidateSearch from "./components/candidateSearch";
import { useCandidate } from "./hooks/useCanditate";
import { useJobs } from "./hooks/useJobs";
import JobList from "./components/jobList";

export default function App() {
  const { candidate, loading, error, fetchCandidate } = useCandidate();
  const { jobs, loading: jobsLoading, error: jobsError, fetchJobs } = useJobs();

  return (
    <div className="app">
      <header className="header">
        <h1>Bot Filter — Step 2</h1>
        <p className="muted">Probar GET candidate/get-by-email</p>
      </header>
      <CandidateSearch onSearch={fetchCandidate} loading={loading} />
      <CandidateResult candidate={candidate} error={error} />
      <section className="card">

        <h2 className="card__title">Step 3 — Posiciones</h2>

        <button className="btn" onClick={fetchJobs} disabled={jobsLoading}>
          {jobsLoading ? "Cargando..." : "Cargar posiciones"}
        </button>

        <JobList jobs={jobs} loading={jobsLoading} error={jobsError} />
      </section>
      
    </div>
  );
}
