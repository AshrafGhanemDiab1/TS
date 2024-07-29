import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Endpoints } from '../../environments/endpoints';
import { Home } from './interface/home';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeOurHospitalsComponent } from './home-our-hospitals/home-our-hospitals.component';
import { LoaderComponent } from '../layout/loader/loader.component';
import { HomeSeviceComponent } from './home-sevice/home-sevice.component';
import { HomeNewsComponent } from './home-news/home-news.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HomeHeaderComponent,
    HomeOurHospitalsComponent,
    LoaderComponent,
    HomeSeviceComponent,
    HomeNewsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  home$!: Observable<Home>;
  httpServices = inject(HttpClient);
  ngOnInit(): void {
    this.home$ = this.httpServices.get<Home>(Endpoints.HOME);
  }
}
