import { useState } from "react";

export default function CandidateSearch({ onSearch, loading }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(email);
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2 className="card__title">Buscar candidato por email</h2>

      <div className="row">
        <input
          className="input"
          type="email"
          placeholder="tu.email@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn" disabled={loading}>
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </div>

      <p className="muted">
        Usa el mismo email con el que aplicaste a Nimble Gravity.
      </p>
    </form>
  );
}
