import { HttpService } from './../../Services/http/http.service';
import { Component, inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsGetResponse } from './models/news';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../../environments/endpoints';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { SubTextPipe } from '../../pipes/trim.pipe';
import { ButtonComponent } from '../shared/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, SubTextPipe, ButtonComponent, RouterLink],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  news$!: Observable<NewsGetResponse>;
  httpService = inject(HttpClient);
  @Input() news!: NewsGetResponse;
  @Input() link = '/news';
  imageUrl = environment.baseUrl;
  ngOnInit(): void {
    this.news$ = this.httpService.get<NewsGetResponse>(Endpoints.NEWS);
  }
}
