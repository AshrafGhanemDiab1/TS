import { Component, Input } from '@angular/core';
import { Home } from '../interface/home';
import { SharedHospitalComponent } from '../../shared/shared-hospital/shared-hospital.component';
import { SubTextPipe } from '../../../pipes/trim.pipe';
import { ButtonComponent } from '../../shared/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-our-hospitals',
  standalone: true,
  imports: [SharedHospitalComponent, SubTextPipe, ButtonComponent, RouterLink],
  templateUrl: './home-our-hospitals.component.html',
  styleUrl: './home-our-hospitals.component.scss',
})
export class HomeOurHospitalsComponent {
  @Input() home!: Home;
  @Input() link = '/hospitals';
}
