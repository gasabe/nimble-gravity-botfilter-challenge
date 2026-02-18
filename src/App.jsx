import CandidateResult from "./components/CandidateResult";
import CandidateSearch from "./components/candidateSearch";
import JobList from "./components/jobList";
import { useCandidate } from "./hooks/useCandidate";
import { useJobs } from "./hooks/useJobs";
import useApplyJob from "./hooks/useApplyJob";

export default function App() {
  const {
    candidate,
    loading: candLoading,
    error: candError,
    fetchCandidate,
  } = useCandidate();
  const { jobs, loading: jobsLoading, error: jobsError, fetchJobs } = useJobs();
  const { submitApplication, getJobState } = useApplyJob();

  const handleSubmitJob = (jobId, repoUrl) => {
    if (!candidate) return;
    submitApplication(jobId, {
      uuid: candidate.uuid,
      applicationId: candidate.applicationId,
      candidateId: candidate.candidateId,
      jobId,
      repoUrl,
    });
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Bot Filter — Challenge</h1>
        <p className="muted">Step 2 → Step 3/4 → Step 5</p>
      </header>
      <CandidateSearch onSearch={fetchCandidate} loading={candLoading} />
      <CandidateResult candidate={candidate} error={candError} />

      {candidate && (
        <JobList
          jobs={jobs}
          loading={jobsLoading}
          error={jobsError}
          candidate={candidate}
          onLoadJobs={fetchJobs}
          onSubmitJob={handleSubmitJob}
          getJobState={getJobState}
        />
      )}
    </div>
  );
}
