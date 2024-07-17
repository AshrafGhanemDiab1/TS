export interface Hospital {
  uuid: string;
  built_year: number;
  image: string;
  name: string;
  hospital_logo: string;
}

export interface HospitalResults {
  count: number;
  next: string | null;
  previous: string | null;
  results: Hospital[];
}

export interface HealthcareAlliance {
  main_image: string;
  main_title: string;
  years: number[];
  hospitals: HospitalResults;
}
