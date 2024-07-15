import { environment } from '../../../app/environments/environment';
import { AboutUs } from './../models/about-us';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-our-values',
  standalone: true,
  imports: [],
  templateUrl: './our-values.component.html',
  styleUrl: './our-values.component.scss',
})
export class OurValuesComponent {
  @Input() aboutUs!: AboutUs;
  imgUrl: string = environment.baseUrl;
}
