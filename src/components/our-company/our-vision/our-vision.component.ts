import { Component, Input } from '@angular/core';
import { AboutUs } from '../models/about-us';
import { environment } from '../../../app/environments/environment';

@Component({
  selector: 'app-our-vision',
  standalone: true,
  imports: [],
  templateUrl: './our-vision.component.html',
  styleUrl: './our-vision.component.scss',
})
export class OurVisionComponent {
  @Input() aboutUs!: AboutUs;
  imgUrl = environment.baseUrl;
}
