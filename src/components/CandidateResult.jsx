export default function CandidateResult({ candidate, error }) {
  if (error) {
    return <div className="alert alert--error">{error}</div>;
  }

  if (!candidate) return null;

  return (
    <section className="card">
      <h2 className="card__title">Respuesta</h2>
      <pre className="pre">{JSON.stringify(candidate, null, 2)}</pre>
    </section>
  );
}
