import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter, OnInit,
  Output
} from '@angular/core';
import { BrandsApiService } from '../../services/brandsApi.service';
import { BrandListItemDto } from '../../models/brand-list-item-dto';


@Component({
  selector: 'app-brands-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands-list.component.html',
  styleUrl: './brands-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsListComponent implements OnInit {
  @Output() selectBrand = new EventEmitter<number | null>(); //home-page.html
  selectedItemId: number | null = null;
  list: Array<BrandListItemDto> = [];

  // public list: BrandListItemDto[] = [];
  // models: ModelListItemDto[] = [];
  // @Input() selectedBrandId!: number;
  // @Output() brandSelected = new EventEmitter<number>();

  constructor(
    private brandsApiService: BrandsApiService,
    private change: ChangeDetectorRef
  // private modelsApiService: ModelsApiService,

  ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.brandsApiService.getList().subscribe((brands) => {
      this.list = brands;
      this.change.markForCheck();
    });
  }

  onBrandClick(id: number | null): void {
    this.selectedItemId = this.list.findIndex(item => item.id === id);
    this.selectBrand.emit(id);
  }

  // ngOnInit(): void {
  //   this.brandsApiService.getList().subscribe((response) => {
  //     this.list = response;
  //     this.change.markForCheck();
  //   });
  // }


  // getModelsByBrand(brandId: number): void {
  //   this.modelsApiService.getModelsByBrand(brandId).subscribe((models) => {
  //     console.log(models);
  //     this.models = models;
  //   });
  // }

  // onSelectedBrand(brandId: number): void {
  //   this.selectedBrandId = brandId;
  //   this.brandSelected.emit(this.selectedBrandId);
  //   console.log('Selected brand:', brandId);
  // }


}
