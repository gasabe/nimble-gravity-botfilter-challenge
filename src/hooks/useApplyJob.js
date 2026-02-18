import { useState } from "react";
import { applyToJob } from "../api/nimbleApi";

export default function useApplyJob() {
  const [stateByJobId, setStateByJobId] = useState({})

  const submitApplication = async (jobId, payload) => {
    setStateByJobId((prev) => ({
      ...prev,
      [jobId]: { loading: true, error: null },
    }));
    try {
      const res = await applyToJob(payload);
      setStateByJobId((prev) => ({
        ...prev,
        [jobId]: { loading: false, error: "", ok: true },
      }));
      return res;
    } catch (e) {
      setStateByJobId((prev) => ({
        ...prev,
        [jobId]: { loading: false, error: e?.message || "Error al enviar", ok: false },
      }));
      return null;
    }
  };

  const getJobState = (jobId) =>
    stateByJobId[jobId] || { loading: false, error: "", ok: false };

  return { submitApplication, getJobState };
}