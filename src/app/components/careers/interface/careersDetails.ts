export interface CareerDetails {
  job_description: string;
  job_requirement: RequirementsList[];
  job_title: string;
  loaded: boolean;
}

export interface RequirementsList {
  requirement: string;
}
