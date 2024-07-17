import { Component, Input } from '@angular/core';
import { AboutUs } from '../models/about-us';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-years-of-experience',
  standalone: true,
  imports: [],
  templateUrl: './years-of-experience.component.html',
  styleUrl: './years-of-experience.component.scss',
})
export class YearsOfExperienceComponent {
  @Input() aboutUs!: AboutUs;
  imgUrl = environment.baseUrl;
}
