import { HospitalDetails } from '../models/hospitals-details';
import { Component, Input, input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AboutUsOurvisionComponent } from '../../shared/about-us-ourvision/about-us-ourvision.component';

@Component({
  selector: 'app-hospital-details-section-2',
  standalone: true,
  imports: [AboutUsOurvisionComponent],
  templateUrl: './hospital-details-section-2.component.html',
  styleUrl: './hospital-details-section-2.component.scss',
})
export class HospitalDetailsSection2Component {
  @Input() hospitalDetails!: HospitalDetails;
  imgUrl = environment.baseUrl;
}
