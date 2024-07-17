import { Component, Input } from '@angular/core';
import { AboutUs } from '../models/about-us';
import { AboutUsOurvisionComponent } from '../../shared/about-us-ourvision/about-us-ourvision.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-our-vision',
  standalone: true,
  imports: [AboutUsOurvisionComponent],
  templateUrl: './our-vision.component.html',
  styleUrl: './our-vision.component.scss',
})
export class OurVisionComponent {
  @Input() aboutUs!: AboutUs;
  imgUrl = environment.baseUrl;
}
