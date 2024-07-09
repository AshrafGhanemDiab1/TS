import { ServicesDetailsComponent } from './services-details/services-details.component';
import { ServicesComponent } from './services.component';
import { Routes } from '@angular/router';
export const Services: Routes = [
  {
    path: '',
    component: ServicesComponent,
  },
  {
    path: ':uuid',
    component: ServicesDetailsComponent,
  },
];
