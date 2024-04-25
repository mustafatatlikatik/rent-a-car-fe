import { CustomersApiService } from './../../services/customersApi.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CustomerListItemDto } from '../../models/customer-list-item-dto';
import { WelcomeDirective } from '../../../../core/directives/welcome.directive';
import { WelcomePageComponent } from '../../../../routers/welcome-page/welcome-page.component';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    CommonModule,WelcomeDirective,WelcomePageComponent
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
    this.getListWithDelay();
  }

  getListWithDelay(){
    setTimeout(() => {
      this.getList();
    }, 3000);
  }
  getList() {
    this.customersApiService.getList().subscribe(customers => {
      this.list = customers;
      this.change.markForCheck();
    });
  }

}
