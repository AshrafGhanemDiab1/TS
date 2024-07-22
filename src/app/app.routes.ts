import { careers } from './components/careers/careers.routes';
import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./components/home/home.routes').then((m) => m.Home),
      },
      {
        path: 'company',
        loadChildren: () =>
          import('./components/our-company/company.routes').then(
            (m) => m.Company
          ),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./components/services/services.routes').then(
            (m) => m.Services
          ),
      },
      {
        path: 'hospitals',
        loadChildren: () =>
          import('./components/hospitals/hospitals.routes').then(
            (m) => m.Hospitals
          ),
      },
      {
        path: 'news',
        loadChildren: () =>
          import('./components/news/news.routes').then((m) => m.News),
      },
      {
        path: 'careers',
        loadChildren: () =>
          import('./components/careers/careers.routes').then((m) => m.careers),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./components/contact-us/contact.routes').then(
            (m) => m.contact
          ),
      },
    ],
  },
];
