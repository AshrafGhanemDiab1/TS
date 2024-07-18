import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsDetails } from '../models/newsdetails';
import { Endpoints } from '../../../environments/endpoints';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.scss',
})
export class NewsDetailsComponent implements OnInit {
  httpservice = inject(HttpClient);
  newsDetails$!: Observable<NewsDetails>;
  ngOnInit(): void {
    this.newsDetails$ = this.httpservice.get<NewsDetails>(Endpoints.NEWS);
  }
}
