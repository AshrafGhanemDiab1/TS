import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoints } from '../../app/environments/endpoints';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  home$!: Observable<any>;
  httpServices = inject(HttpClient);
  ngOnInit(): void {
    this.home$ = this.httpServices.get(Endpoints.HOME);
    this.home$.subscribe((res) => {
      console.log(res);
    });
  }
}
