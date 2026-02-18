import { get ,post } from "./client"

export function getJobs() {
  return get("/api/jobs/get-list");
}

export function getCandidateByEmail(email) {
  return get(`/api/candidate/get-by-email?email=${encodeURIComponent(email)}`)
}


export function applyToJob(payload) {
  return post("/api/candidate/apply-to-job", payload)
}