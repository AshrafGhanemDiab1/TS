import { Component, inject, Input, input } from '@angular/core';
import { Services, ServicesList, ServicesPagen } from '../models/services';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endpoints } from '../../../app/environments/endpoints';
import { CommonModule } from '@angular/common';
import { Card } from '../models/card';
import { environment } from '../../../app/environments/environment';
import { SubTextPipe } from '../../../app/pipes/trim.pipe';

@Component({
  selector: 'services-box',
  standalone: true,
  imports: [CommonModule, SubTextPipe],
  templateUrl: './about-services-box.component.html',
  styleUrl: './about-services-box.component.scss',
})
export class AboutServicesBoxComponent {
  @Input() services!: Services;
  @Input() name!: string;
  @Input() img!: string;
  @Input() discription!: string;
  imgUrl = environment.baseUrl;
  ngOnInit(): void {}
}
