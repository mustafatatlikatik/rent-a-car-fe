import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { ButtonDirective } from '../../../core/directives/button.directive';

export type NavbarItem = {
  label: string;
  routerLink: string;
};

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule, MainLayoutComponent, RouterModule, ButtonDirective
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input() items: NavbarItem[] = [];
}
