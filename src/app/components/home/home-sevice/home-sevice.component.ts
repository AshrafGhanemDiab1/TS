import { Component, Input } from '@angular/core';
import { Home } from '../interface/home';
import { environment } from '../../../environments/environment';
import { SubTextPipe } from '../../../pipes/trim.pipe';
import { ButtonComponent } from '../../shared/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-sevice',
  standalone: true,
  imports: [SubTextPipe, ButtonComponent, RouterLink],
  templateUrl: './home-sevice.component.html',
  styleUrl: './home-sevice.component.scss',
})
export class HomeSeviceComponent {
  @Input() home!: Home;
  imgUrl = environment.baseUrl;
  @Input() link = '/services';
}
