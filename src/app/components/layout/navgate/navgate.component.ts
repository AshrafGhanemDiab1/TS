import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navgate',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navgate.component.html',
  styleUrl: './navgate.component.scss',
})
export class NavgateComponent {
  @Input() route!: string;
}
