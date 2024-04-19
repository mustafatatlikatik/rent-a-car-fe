import { ModelListItemDto } from './../../../../models/models/model-list-item-dto';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { BrandListItemDto } from '../../../models/brand-list-item-dto';
import { BrandsApiService } from '../../../services/brandsApi.service';
import { ModelsApiService } from '../../../../models/services/modelsApi.service';

@Component({
  selector: 'app-brands-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands-list.component.html',
  styleUrl: './brands-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsListComponent implements OnInit {
  public list: BrandListItemDto[] = [];
  public models: ModelListItemDto[] = [];
  @Input() selectedBrandId!: number;
  @Output() brandSelected = new EventEmitter<number>();

  constructor(
    private brandsApiService: BrandsApiService,
    private modelsApiService: ModelsApiService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.brandsApiService.getList().subscribe((response) => {
      this.list = response;
      this.change.markForCheck();
    });
  }

  getModelsByBrand(brandId: number): void {
    this.modelsApiService.getModelsByBrand(brandId).subscribe((models) => {
      console.log(models);
      this.models = models;
    });
  }

  onSelectedBrand(brandId: number): void {
    this.selectedBrandId = brandId;
    this.brandSelected.emit(this.selectedBrandId);
    console.log('Selected brand:', brandId);
  }
}
