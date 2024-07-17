export interface Info {
  svg: string;
  number: number;
  text: string;
}

export interface Media {
  image: string;
  description: string;
}

export interface HospitalDetails {
  built_year: number;
  image: string;
  name: string;
  info: Info[];
  country_title: string;
  country: string;
  contact_title: string;
  contact_svg1: string;
  contact_number1: string;
  contact_svg2: string;
  contact_number2: string;
  branch_title: string;
  branch: string;
  location_title: string;
  location_svg: string;
  location: string;
  location_iframe: string | null;
  description_title: string;
  description1: string;
  description_img1: string;
  description_img2: string;
  description2: string;
  media_title: string;
  media: Media[];
  hospital_logo: string;
}
