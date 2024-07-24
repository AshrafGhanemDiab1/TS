import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutUs } from './models/about-us';
import { CommonModule } from '@angular/common';
import { CompanyHeaderComponent } from './company-header/company-header.component';
import { YearsOfExperienceComponent } from './years-of-experience/years-of-experience.component';
import { AchirvementsComponent } from './achirvements/achirvements.component';
import { OurVisionComponent } from './our-vision/our-vision.component';
import { OurHistoryComponent } from './our-history/our-history.component';
import { OurValuesComponent } from './our-values/our-values.component';
import { Endpoints } from '../../environments/endpoints';
import { NavgateComponent } from '../layout/navgate/navgate.component';
import { RouterLink } from '@angular/router';
import { LoaderComponent } from '../layout/loader/loader.component';

@Component({
  selector: 'app-our-company',
  standalone: true,
  imports: [
    CommonModule,
    CompanyHeaderComponent,
    YearsOfExperienceComponent,
    AchirvementsComponent,
    OurVisionComponent,
    OurHistoryComponent,
    OurValuesComponent,
    NavgateComponent,
    RouterLink,
    LoaderComponent,
  ],
  templateUrl: './our-company.component.html',
  styleUrl: './our-company.component.scss',
})
export class OurCompanyComponent {
  httpservices = inject(HttpClient);
  aboutUs$!: Observable<AboutUs>;
  translateService = inject(TranslateService);
  ngOnInit(): void {
    this.aboutUs$ = this.httpservices.get<AboutUs>(Endpoints.ABOUT);
    this.translateService.setDefaultLang('ar');
  }
}
