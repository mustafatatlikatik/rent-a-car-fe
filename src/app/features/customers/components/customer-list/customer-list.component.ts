import { CustomersApiService } from './../../services/customersApi.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CustomerListItemDto } from '../../models/customer-list-item-dto';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerListComponent implements OnInit {
  list: Array<CustomerListItemDto> = [];

  constructor(
    private customersApiService: CustomersApiService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.customersApiService.getList().subscribe(customers => {
      this.list = customers;
      this.change.markForCheck();
    });
  }

}
