import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModelDetailsComponent } from '../../features/models/components/model-details/model-details.component';


@Component({
  selector: 'app-model-details-page',
  standalone: true,
  imports: [
    CommonModule,
    ModelDetailsComponent
  ],
  templateUrl: './model-details-page.component.html',
  styleUrl: './model-details-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelDetailsPageComponent implements OnInit {
  modelId !: number;
  constructor(private acitivatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getModeIdFromRoute();
  }
  private getModeIdFromRoute() {
    this.acitivatedRoute.params.subscribe((params) => {
      this.modelId = params['modelId'];
    }).unsubscribe();
  }
}

