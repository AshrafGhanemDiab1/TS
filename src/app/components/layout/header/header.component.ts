import {
  AfterViewInit,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FooterInfo } from './Header-footer';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../../../../app/environments/endpoints';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../../../app/translate/translate/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ButtonComponent,
    TranslateModule,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  header$!: Observable<FooterInfo>;
  httpservice = inject(HttpClient);
  translationService = inject(TranslationService);

  isArabic: boolean = false;
  ngOnInit(): void {
    this.header$ = this.httpservice.get<FooterInfo>(Endpoints.HEADER);
  }
  onChangeLang() {
    this.translationService.changeLang();
  }
}
