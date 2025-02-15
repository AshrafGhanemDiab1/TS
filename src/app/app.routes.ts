import { Routes } from '@angular/router';
import { LayoutComponent } from '../components/layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../components/home/home.routes').then((m) => m.Home),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('../components/services/services.routes').then(
            (m) => m.Services
          ),
      },
    ],
  },
];
