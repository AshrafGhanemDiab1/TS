export interface values {
  svg: string;
  title: 'string';
  description: 'string';
}

export interface Achievements {
  svg: string;
  number: 'string';
  title: 'string';
}

export interface history {
  year: string;
  description: string;
  month: string;
  logo: string;
}

export interface Mission_descriptions {
  description: string;
}

export interface AboutUs {
  page_title: string;
  main_image1?: string;
  main_title1: string;
  sub_title1: string;
  description1: string;
  main_header2: string;
  main_title2: string;
  experience_title2: string;
  experiance_years: string;
  experiance_title: string;
  left_description2: string;
  image2?: string;
  right_svg2?: string;
  right_title2: string;
  right_description: string;
  main_title3: string;
  sub_title3: string;
  main_background3?: any;
  achievements: Achievements[];
  main_title4: string;
  vision_title: string;
  vision_image: string;
  mission_image: string;
  vision_description: string;
  mission_title: string;
  main_title6: string;
  experience_years2: string;
  mission_descriptions: Mission_descriptions[];
  values: values[];
  history: history[];
}
