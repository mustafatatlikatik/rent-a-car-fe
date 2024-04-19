import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModelsListComponent } from '../../features/models/components/models-list/models-list.component';
import { BrandsListComponent } from '../../features/brands/components/brands-list/brands-list/brands-list.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ModelsListComponent, BrandsListComponent], //MainLayoutComponent pathler ile layout sağlanırsa importuna gerek kalmaz sildik.
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
