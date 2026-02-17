import CandidateResult from "./components/CandidateResult";
import CandidateSearch from "./components/candidateSearch";
import { useCandidate } from "./hooks/useCanditate";

export default function App() {
  const { candidate, loading, error, fetchCandidate } = useCandidate();

  return (
    <div className="app">
      <header className="header">
        <h1>Bot Filter — Step 2</h1>
        <p className="muted">Probar GET candidate/get-by-email</p>
      </header>

      <CandidateSearch onSearch={fetchCandidate} loading={loading} />
      <CandidateResult candidate={candidate} error={error} />
    </div>
  );
}
