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
import { Endpoints } from '../../../app/environments/endpoints';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { environment } from '../../../app/environments/environment';
import { ServiceDetail } from '../models/service-details';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-services-details',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
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
