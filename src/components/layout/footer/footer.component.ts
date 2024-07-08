import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FooterInfo } from '../header/Header-footer';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../../../app/environments/endpoints';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  footer$!: Observable<FooterInfo>;
  httpService = inject(HttpClient);
  ngOnInit(): void {
    this.footer$ = this.httpService.get<FooterInfo>(Endpoints.HEADER);
  }
}
