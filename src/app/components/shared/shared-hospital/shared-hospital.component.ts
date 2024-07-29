import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shared-hospital',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-hospital.component.html',
  styleUrl: './shared-hospital.component.scss',
})
export class SharedHospitalComponent {
  @Input() mainTitle: string = '';
  @Input() year: {} = {};
  @Input() imgOne: {} = {};
  @Input() imgTow: {} = {};
  imgUrl = environment.baseUrl;
}
