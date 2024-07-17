import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  Input,
  input,
  OnInit,
  signal,
  ViewChild,
  viewChild,
} from '@angular/core';
import { Services } from '../models/services';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ServiceDetail } from '../models/service-details';
import { ButtonComponent } from '../../shared/button/button.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Endpoints } from '../../../environments/endpoints';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-services-details',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TranslateModule],
  templateUrl: './services-details.component.html',
  styleUrl: './services-details.component.scss',
})
export class ServicesDetailsComponent implements OnInit, AfterViewInit {
  @ViewChild('image') imageElement!: ElementRef;
  serviceData: string = '';
  httpservices = inject(HttpClient);
  imgUrl = environment.baseUrl;
  servicesDetails$!: Observable<ServiceDetail>;
  @Input() services!: Services;

  private readonly route = inject(ActivatedRoute);
  public readonly id = signal('');
  ngOnInit(): void {
    this.route.paramMap.pipe().subscribe((params) => {
      const id = params.get('uuid');
      if (!id) return;
      this.id.set(id);
      this.servicesDetails$ = this.httpservices.get<ServiceDetail>(
        Endpoints.SERVICE + `${id}/`
      );
    });
  }
  ngAfterViewInit(): void {
    this.servicesDetails$.subscribe((res) => {
      this.serviceData = this.imgUrl + res.main_image;
      this.imageElement.nativeElement.style.setProperty(
        '--background-img',
        `url(${this.serviceData})`
      );
    });
  }
}
