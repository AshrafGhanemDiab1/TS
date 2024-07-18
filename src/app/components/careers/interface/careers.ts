export interface JobGetResponse {
  id: string;
  job_title: string;
  job_description: string;
}

export interface CareersGetResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: JobGetResponse[];
}
