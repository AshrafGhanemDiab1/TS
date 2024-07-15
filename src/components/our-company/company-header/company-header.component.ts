import { Component, Input, input } from '@angular/core';
import { AboutUs } from '../models/about-us';
import { environment } from '../../../app/environments/environment';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-company-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './company-header.component.html',
  styleUrl: './company-header.component.scss',
})
export class CompanyHeaderComponent {
  @Input() aboutUs!: AboutUs;
  imgUrl = environment.baseUrl;
}
