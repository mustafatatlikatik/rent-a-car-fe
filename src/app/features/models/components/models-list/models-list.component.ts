import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ModelsApiService } from '../../services/modelsApi.service';
import { ModelListItemDto } from '../../models/model-list-item-dto';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-models-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './models-list.component.html',
  styleUrl: './models-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsListComponent implements OnInit, OnChanges {
  @Input() brandId: number | null = null; //homel-page.html'den alıyor
  @Input() searchBrandName: string | null = null;

  currentPage: number = 1;
  totalPages: number = 0;

  public list: ModelListItemDto[] = [];
  //@Input() modelList:ModelListItemDto[] = [];

  pageIndex: number = 0;
  private static pageSize: number = 5;
  hasPageNext: boolean = true;

  constructor(
    private modelsApiService: ModelsApiService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (
      changes['brandId'] &&
      changes['brandId'].currentValue !== changes['brandId'].previousValue
    ) {
      this.getList();
    }
    if (
      changes['searchBrandName'] &&
      changes['searchBrandName'].currentValue !==
        changes['searchBrandName'].previousValue
    ) {
      this.getList();
    }
  }

  private getList() {
    this.modelsApiService
      .getList(
        this.brandId,
        this.searchBrandName,
        this.pageIndex,
        ModelsListComponent.pageSize
      )
      .subscribe({
        next: (response) => {
          if (response.length === 0) {
            this.hasPageNext = false;
            return;
          }
          if (!this.hasPageNext) this.hasPageNext = true;
          this.list = response;
        },
        complete: () => {
          this.change.markForCheck();
        },
      });
  }

  onPageChange(newPageIndex: number) {
    this.pageIndex = newPageIndex;
    this.getList();
  }

  // getModelsByBrand(brandId: number) {
  //   this.modelsApiService.getModelsByBrand(brandId)
  //     .subscribe(models => this.list = models);
  // }
}
