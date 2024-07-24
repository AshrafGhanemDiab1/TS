import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { Home } from '../interface/home';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeHeaderComponent {
  @Input() home!: Home;
  imageUrl = environment.baseUrl;
}
