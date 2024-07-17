import { TranslateService } from '@ngx-translate/core';
import { Component, inject, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { filter, map, mergeMap, Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HomeComponent],
})
export class AppComponent implements OnInit {
  title = 'Tahalof';
  private readonly currentLang!: string;
  private _subscription = new Subscription();
  private pageTitle = 'MENU.';
  translate = inject(TranslateService);
  activatedRoute: any;
  router = inject(Router);
  constructor(private titleService: Title) {}

  ngOnInit(): void {}
}
