import { Component, Input, input } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us-ourvision.component.html',
  styleUrl: './about-us-ourvision.component.scss',
})
export class AboutUsOurvisionComponent {
  imgUrl = environment.baseUrl;
  @Input() title = '';
  @Input() decription = '';
  @Input() imgeOne = '';
  @Input() imgaetow = '';
  @Input() titleTwo = '';
  @Input() lastDiscr = {};
}
