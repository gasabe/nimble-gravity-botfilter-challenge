import { useState } from "react";
import { getJobs } from "../api/nimbleApi";

export function useJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchJobs = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await getJobs();
      setJobs(Array.isArray(data) ? data : []);
    } catch (e) {
      setJobs([]);
      setError(e?.message || "Error al traer trabajos de la api");
    } finally {
      setLoading(false);
    }
  };

  return { jobs, loading, error, fetchJobs };
}
