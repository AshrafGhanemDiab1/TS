import { Component, inject, Input, input } from '@angular/core';
import { Services, ServicesList, ServicesPagen } from '../models/services';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Card } from '../models/card';
import { SubTextPipe } from '../../../pipes/trim.pipe';
import { environment } from '../../../environments/environment';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'services-box',
  standalone: true,
  imports: [CommonModule, SubTextPipe, TranslateModule],
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
