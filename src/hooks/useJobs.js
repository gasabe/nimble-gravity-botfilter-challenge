import { useState } from "react";
import { getJobs } from "../api/nimbleApi";

export function useJobs() {
  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [errorJobs, setErrorJobs] = useState("");

  const fetchJobs = async () => {
    setLoadingJobs(true);
    setErrorJobs("");

    try {
      const data = await getJobs();
      setJobs(Array.isArray(data) ? data : []);
    } catch (e) {
      setJobs([]);
      setErrorJobs(e?.message || "Error al traer trabajos de la api");
    } finally {
      setLoadingJobs(false);
    }
  };

  return { jobs, loadingJobs, errorJobs, fetchJobs };
}
