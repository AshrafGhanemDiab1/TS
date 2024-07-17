import { Swiper, SwiperOptions } from 'swiper/types';
import { environment } from '../../../environments/environment';
import { HospitalDetails } from './../models/hospitals-details';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { Pagination } from 'swiper/modules';
@Component({
  selector: 'app-hospitals-details-swiper',
  standalone: true,
  imports: [],
  templateUrl: './hospitals-details-swiper.component.html',
  styleUrl: './hospitals-details-swiper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HospitalsDetailsSwiperComponent {
  @Input() hospitalDetails!: HospitalDetails;

  imagUrl = environment.baseUrl;
  swiperOptions: SwiperOptions = {
    slidesPerView: 3.25,
    spaceBetween: 16,
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
}
