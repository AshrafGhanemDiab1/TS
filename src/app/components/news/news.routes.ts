import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsComponent } from './news.component';
import { Routes } from '@angular/router';
export const News: Routes = [
  {
    path: '',
    component: NewsComponent,
  },
  {
    path: ':id',
    component: NewsDetailsComponent,
  },
];
