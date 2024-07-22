import { CareersDetailsComponent } from './careers-details/careers-details.component';
import { CareersComponent } from './careers.component';
import { Routes } from '@angular/router';
export const careers: Routes = [
  {
    path: '',
    component: CareersComponent,
  },
  {
    path: ':id',
    component: CareersDetailsComponent,
  },
];
