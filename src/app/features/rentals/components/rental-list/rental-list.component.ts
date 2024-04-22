import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RentalApiService } from '../../services/rentalsApi.service';
import { RentalsItemDto } from '../../models/rentals-item-dto';

@Component({
  selector: 'app-rental-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './rental-list.component.html',
  styleUrl: './rental-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RentalListComponent implements OnInit {
  list: Array<RentalsItemDto> = [];

  constructor(
    private rentalsApiService: RentalApiService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.rentalsApiService.getList().subscribe(rentals => {
      this.list = rentals;
      this.change.markForCheck();
    });
  }
}
