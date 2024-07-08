import { environment } from './environment';

const baseUrl = environment.baseUrl;
export class Endpoints {
  public static readonly HEADER = baseUrl + '/api/header-and-footer/';
  public static readonly HOME = baseUrl + '/api/home/';
  public static readonly NEWSLETTER = baseUrl + '/api/newsletter/';
  public static readonly NEWS = baseUrl + '/api/news/';
  public static readonly HOSPITAL = baseUrl + '/api/hospital/';
  public static readonly SERVICE = baseUrl + '/api/service/';
  public static readonly ABOUT = baseUrl + '/api/about-us/';
  public static readonly CAREER = baseUrl + '/api/career/';
}
