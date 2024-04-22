import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomerListComponent } from '../../features/customers/components/customer-list/customer-list.component';

@Component({
  selector: 'app-customer-page',
  standalone: true,
  imports: [
    CommonModule,
    CustomerListComponent
  ],
  templateUrl: './customer-page.component.html',
  styleUrl: './customer-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerPageComponent { }
