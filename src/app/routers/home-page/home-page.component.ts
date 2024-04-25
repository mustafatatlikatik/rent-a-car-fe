import { BrandsListComponent } from './../../features/brands/components/brands-list/brands-list.component';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModelsListComponent } from '../../features/models/components/models-list/models-list.component';

import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';
import { FormsModule } from '@angular/forms';
import { WelcomeDirective } from '../../core/directives/welcome.directive';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MainLayoutComponent,
    ModelsListComponent,
    BrandsListComponent,
    WelcomeDirective,
    WelcomePageComponent

  ], //MainLayoutComponent pathler ile layout sağlanırsa importuna gerek kalmaz sildik.
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  selectedBrandId: number | null = null;
  searchBrandName: string | null = null;

  constructor(private change:ChangeDetectorRef){
    // setTimeout(() => {
    //   this.searchBrandName = 'BMW';
    //   this.change.markForCheck();
    // },5000);
  }

  onBrandSelect(brandId: number | null) {
    console.log('Selected brand:', brandId);
    this.selectedBrandId = brandId;
  }
}
