import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoints } from '../../app/environments/endpoints';
import { CommonModule } from '@angular/common';
import { AboutServicesBoxComponent } from './about-services-box/about-services-box.component';
import { Services, ServicesList, ServicesPagen } from './models/services';
import { Card } from './models/card';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, AboutServicesBoxComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit {
  httpservices = inject(HttpClient);
  services$!: Observable<Services>;
  ngOnInit(): void {
    this.services$ = this.httpservices.get<Services>(Endpoints.SERVICE);
  }
}
