import { useState } from "react";
import { getCandidateByEmail } from "../api/nimbleApi";

export function useCandidate() {
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCandidate = async (email) => {
    const trimmed = email?.trim();

    if (!trimmed) {
      setError("El email es requerido.");
      setCandidate(null);
      return;
    }

    setLoading(true);
    setError("");
    setCandidate(null);

    try {
      const data = await getCandidateByEmail(trimmed);
      setCandidate(data);
    } catch (e) {
      setError(e?.message || "Error al traer el candidato de la api");
    } finally {
      setLoading(false);
    }
  };

  return { candidate, loading, error, fetchCandidate };
}
