export interface ServicesList {
  description: string;
  main_image: string;
  name: string;
  svg: string;
  uuid: string;
}

export interface ServicesPagen {
  count: number;
  next: string | null;
  previous: string | null;
  results: ServicesList[];
}

export interface Services {
  contact_description: string;
  contact_title: string;
  main_description: string;
  main_title: string;
  page_title: string;
  services: ServicesPagen;
  contact_button: string;
}
