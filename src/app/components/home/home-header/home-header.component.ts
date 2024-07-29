import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { Home } from '../interface/home';
import { environment } from '../../../environments/environment';
import { ButtonComponent } from '../../shared/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeHeaderComponent {
  @Input() home!: Home;
  imageUrl = environment.baseUrl;
}
