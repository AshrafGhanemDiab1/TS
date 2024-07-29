export interface Slider {
  image: string;
  title: string;
  description: string;
}

export interface Info {
  svg: string;
  title: string;
  text: string;
}

export interface WhoWeAreSection {
  image: string;
  title: string;
  description: string;
}

export interface Service {
  main_image: string;
  name: string;
  description: string;
  uuid: string;
}

export interface Hospital {
  image: string;
  name: string;
  description: string;
  uuid: string;
}

export interface News {
  id: string;
  created_at: string;
  main_image: string;
  news_svg: string;
  main_description: string;
  main_title: string;
}
export interface Project {
  image: string;
  name: string;
  description: string;
}

export interface Home {
  sliders: Slider[];
  infos: Info[];
  who_we_are_section: WhoWeAreSection;
  services_title: string;
  services: Service[];
  hero_projects: Project[];
  hospitals_title: string;
  hospitals: Hospital[];
  news_title: string;
  news: News[];
}
