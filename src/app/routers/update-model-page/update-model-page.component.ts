import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UpdateModelFormComponent } from '../../features/models/components/update-model-form/update-model-form.component';

@Component({
  selector: 'app-update-model-page',
  standalone: true,
  imports: [
    CommonModule,
    UpdateModelFormComponent
  ],
  templateUrl: './update-model-page.component.html',
  styleUrl: './update-model-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateModelPageComponent { }
