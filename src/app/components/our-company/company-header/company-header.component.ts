import { Component, Input, input } from '@angular/core';
import { AboutUs } from '../models/about-us';
import { ButtonComponent } from '../../shared/button/button.component';
import { environment } from '../../../environments/environment';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-company-header',
  standalone: true,
  imports: [ButtonComponent, TranslateModule, TranslateModule],
  templateUrl: './company-header.component.html',
  styleUrl: './company-header.component.scss',
})
export class CompanyHeaderComponent {
  @Input() aboutUs!: AboutUs;
  imgUrl = environment.baseUrl;
}
