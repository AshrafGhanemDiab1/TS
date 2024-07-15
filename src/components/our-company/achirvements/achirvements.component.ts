import { AboutUs } from './../models/about-us';
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../app/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../../../app/environments/endpoints';

@Component({
  selector: 'app-achirvements',
  standalone: true,
  imports: [],
  templateUrl: './achirvements.component.html',
  styleUrl: './achirvements.component.scss',
})
export class AchirvementsComponent implements AfterViewInit {
  @Input() aboutUs!: AboutUs;
  serviceData: string = '';
  imgUrl = environment.baseUrl;
  @ViewChild('image') imageElement!: ElementRef;
  ngAfterViewInit(): void {
    this.serviceData = this.imgUrl + this.aboutUs.main_background3;
    this.imageElement.nativeElement.style.setProperty(
      '--background-img',
      `url(${this.serviceData})`
    );
  }
}
