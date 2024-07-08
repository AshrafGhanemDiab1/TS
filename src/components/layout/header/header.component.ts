import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FooterInfo } from './Header-footer';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../../../app/environments/endpoints';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  header$!: Observable<FooterInfo>;
  httpservice = inject(HttpClient);
  ngOnInit(): void {
    this.header$ = this.httpservice.get<FooterInfo>(Endpoints.HEADER);
  }
}
