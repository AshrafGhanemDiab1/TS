import { Observable } from 'rxjs';
import { HealthcareAlliance, Hospital } from './models/hospitals';
import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Endpoints } from '../../../app/environments/endpoints';
import { CommonModule } from '@angular/common';
import { environment } from '../../../app/environments/environment';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavgateComponent } from '../layout/navgate/navgate.component';
import { LoaderComponent } from '../layout/loader/loader.component';

@Component({
  selector: 'app-hospitals',
  standalone: true,
  imports: [CommonModule, RouterLink, NavgateComponent, LoaderComponent],
  templateUrl: './hospitals.component.html',
  styleUrl: './hospitals.component.scss',
})
export class HospitalsComponent implements OnInit {
  httpservice = inject(HttpClient);
  hospital$!: Observable<HealthcareAlliance>;
  imgUrl: string = environment.baseUrl;
  @ViewChild('image') imageElement!: ElementRef;
  hospitalData: string = '';
  @Input() services!: Hospital;
  @Input() link = '/hospitals';
  ngOnInit(): void {
    this.hospital$ = this.httpservice.get<HealthcareAlliance>(
      Endpoints.HOSPITAL
    );
  }
}
