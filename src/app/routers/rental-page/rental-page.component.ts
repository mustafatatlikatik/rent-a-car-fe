import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RentalListComponent } from '../../features/rentals/components/rental-list/rental-list.component';

@Component({
  selector: 'app-rental-page',
  standalone: true,
  imports: [
    CommonModule,
    RentalListComponent
  ],
  templateUrl: './rental-page.component.html',
  styleUrl: './rental-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RentalPageComponent { }
