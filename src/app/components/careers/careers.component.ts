import { CareersGetResponse } from './interface/careers';
import { Observable } from 'rxjs';
import { careers } from './careers.routes';
import { Component, inject, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../../environments/endpoints';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../shared/button/button.component';
import { SubTextPipe } from '../../pipes/trim.pipe';
import { RouterLink } from '@angular/router';
import { NavgateComponent } from '../layout/navgate/navgate.component';
import { LoaderComponent } from '../layout/loader/loader.component';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    SubTextPipe,
    RouterLink,
    NavgateComponent,
    LoaderComponent,
  ],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss',
})
export class CareersComponent implements OnInit {
  careers$!: Observable<CareersGetResponse>;
  httpService = inject(HttpClient);
  @Input() careers!: CareersGetResponse;
  @Input() link = '/careers';
  ngOnInit(): void {
    this.careers$ = this.httpService.get<CareersGetResponse>(Endpoints.CAREER);
  }
}
