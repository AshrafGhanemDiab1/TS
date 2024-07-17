import { AboutUs } from './../models/about-us';
import { Component, importProvidersFrom, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-our-history',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './our-history.component.html',
  styleUrl: './our-history.component.scss',
})
export class OurHistoryComponent {
  @Input() aboutUs!: AboutUs;
  imgUrl: string = environment.baseUrl;
}
