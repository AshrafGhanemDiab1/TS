import { ButtonComponent } from '../../shared/button/button.component';
import { Services } from '../models/services';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-help',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './services-help.component.html',
  styleUrl: './services-help.component.scss',
})
export class ServicesHelpComponent {
  @Input() services!: Services;
  @Input() title!: string;
  @Input() discription!: string;
  @Input() button!: string;
}
