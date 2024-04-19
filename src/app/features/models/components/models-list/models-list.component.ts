import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { ModelsApiService } from '../../services/modelsApi.service';
import { ModelListItemDto } from '../../models/model-list-item-dto';
import { BrandsListComponent } from '../../../brands/components/brands-list/brands-list/brands-list.component';

@Component({
  selector: 'app-models-list',
  standalone: true,
  imports: [CommonModule, BrandsListComponent],
  templateUrl: './models-list.component.html',
  styleUrl: './models-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsListComponent implements OnInit {
  public list: ModelListItemDto[] = [];
  @Input() modelList:ModelListItemDto[] = [];


  constructor(
    private modelsApiService: ModelsApiService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.modelsApiService.getList().subscribe((response) => {
      this.list = response;
      this.change.markForCheck();
    });
  }


  getModelsByBrand(brandId: number) {
    this.modelsApiService.getModelsByBrand(brandId)
      .subscribe(models => this.list = models);
  }


}
