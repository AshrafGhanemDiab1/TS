import { Hospital } from './../models/hospitals';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  Input,
  signal,
} from '@angular/core';
import { Observable } from 'rxjs';
import { HospitalDetails } from '../models/hospitals-details';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../../../../app/environments/endpoints';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../app/environments/environment';
import { HospitalDetailsSection2Component } from '../hospital-details-section-2/hospital-details-section-2.component';
import { HospitalsDetailsSwiperComponent } from '../hospitals-details-swiper/hospitals-details-swiper.component';

@Component({
  selector: 'app-hospitals-details',
  standalone: true,
  imports: [
    CommonModule,
    HospitalDetailsSection2Component,
    HospitalsDetailsSwiperComponent,
  ],
  templateUrl: './hospitals-details.component.html',
  styleUrl: './hospitals-details.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HospitalsDetailsComponent {
  httpservices = inject(HttpClient);
  @Input() hospital!: Hospital;
  imagUrl = environment.baseUrl;
  hospitalsDetails$!: Observable<HospitalDetails>;
  private readonly route = inject(ActivatedRoute);
  public readonly id = signal('');
  ngOnInit(): void {
    this.route.paramMap.pipe().subscribe((params) => {
      const id = params.get('uuid');
      if (!id) return;
      this.id.set(id);
      this.hospitalsDetails$ = this.httpservices.get<HospitalDetails>(
        Endpoints.HOSPITAL + `${id}/`
      );
    });
  }
}
