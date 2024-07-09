import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoints } from '../../app/environments/endpoints';
import { CommonModule } from '@angular/common';
import { AboutServicesBoxComponent } from './about-services-box/about-services-box.component';
import { Services, ServicesList } from './models/services';
import { ServicesHelpComponent } from './services-help/services-help.component';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    AboutServicesBoxComponent,
    ServicesHelpComponent,
    RouterLink,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit {
  httpservices = inject(HttpClient);
  services$!: Observable<Services>;
  @Input() services!: ServicesList;
  @Input() link = '/services';
  private readonly route = inject(ActivatedRoute);
  ngOnInit(): void {
    this.services$ = this.httpservices.get<Services>(Endpoints.SERVICE);
  }
}
