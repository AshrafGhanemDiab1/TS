import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsDetails } from '../models/newsdetails';
import { Endpoints } from '../../../environments/endpoints';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.scss',
})
export class NewsDetailsComponent implements OnInit {
  httpservice = inject(HttpClient);
  newsDetails$!: Observable<NewsDetails>;
  imageUrl = environment.baseUrl;
  private readonly route = inject(ActivatedRoute);
  private readonly id = signal('');
  ngOnInit(): void {
    this.route.paramMap.pipe().subscribe((params) => {
      const id = params.get('id');
      if (!id) return;
      this.id.set(id);
      this.newsDetails$ = this.httpservice.get<NewsDetails>(
        Endpoints.NEWS + `${id}/`
      );
    });
  }
}
