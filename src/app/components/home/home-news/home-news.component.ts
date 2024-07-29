import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  HostListener,
  Input,
} from '@angular/core';
import { Home } from '../interface/home';
import { environment } from '../../../environments/environment';
import { SubTextPipe } from '../../../pipes/trim.pipe';
import { ButtonComponent } from '../../shared/button/button.component';
import { RouterLink } from '@angular/router';
import { SwiperOptions } from 'swiper/types';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-home-news',
  standalone: true,
  imports: [SubTextPipe, ButtonComponent, RouterLink],
  templateUrl: './home-news.component.html',
  styleUrl: './home-news.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeNewsComponent {
  @Input() home!: Home;
  imageUrl = environment.baseUrl;
  @Input() link = '/news';
  slidesPerView: number = 2;
  screenWidth!: number;
  @HostListener('window:resize')
  getScreenWidth() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 900) {
      this.slidesPerView = 1.25;
      if (this.screenWidth <= 576) {
        this.slidesPerView = 1;
      }
    } else {
      this.slidesPerView = 2;
    }
  }
}
