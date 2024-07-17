import { HospitalsDetailsComponent } from './hospitals-details/hospitals-details.component';
import { HospitalsComponent } from './hospitals.component';
import { Routes } from '@angular/router';
export const Hospitals: Routes = [
  {
    path: '',
    component: HospitalsComponent,
  },
  {
    path: ':uuid',
    component: HospitalsDetailsComponent,
  },
];
