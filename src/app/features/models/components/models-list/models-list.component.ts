import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { ModelsApiService } from '../../services/modelsApi.service';
import { ModelListItemDto } from '../../models/model-list-item-dto';

@Component({
  selector: 'app-models-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './models-list.component.html',
  styleUrl: './models-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsListComponent implements OnInit, OnChanges {
  @Input() brandId: number | null = null; //homel-page.html'den alıyor
  @Input() searchBrandName: string | null = null;

  public list: ModelListItemDto[] = [];
  //@Input() modelList:ModelListItemDto[] = [];


  constructor(
    private modelsApiService: ModelsApiService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['brandId'] && changes['brandId'].currentValue !== changes['brandId'].previousValue) {
      this.getList();
    }
    if (changes['searchBrandName'] && changes['searchBrandName'].currentValue !== changes['searchBrandName'].previousValue) {
      this.getList();
    }
  }

  private getList() {
    this.modelsApiService.getList(this.brandId, this.searchBrandName).subscribe((response) => {
      this.list = response;
      this.change.markForCheck();
    });
  }

  // getModelsByBrand(brandId: number) {
  //   this.modelsApiService.getModelsByBrand(brandId)
  //     .subscribe(models => this.list = models);
  // }


}
