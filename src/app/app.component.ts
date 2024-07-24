import { TranslateService } from '@ngx-translate/core';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { register } from 'swiper/element/bundle';
import { CommonModule } from '@angular/common';
register();

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HomeComponent, CommonModule],
})
export class AppComponent implements OnInit {
  title = 'Tahalof-ElSaha ';
  translate = inject(TranslateService);
  activatedRoute: any;
  router = inject(Router);
  constructor() {}

  ngOnInit(): void {}
}
