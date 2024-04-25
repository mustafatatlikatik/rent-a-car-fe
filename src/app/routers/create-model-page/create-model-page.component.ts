import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CreateModelFormComponent } from '../../features/models/components/create-model-form/create-model-form.component';
import { WelcomeDirective } from '../../core/directives/welcome.directive';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';

@Component({
  selector: 'app-create-model-page',
  standalone: true,
  imports: [
    CommonModule,
    CreateModelFormComponent,
    WelcomeDirective,
    WelcomePageComponent
  ],
  templateUrl: './create-model-page.component.html',
  styleUrl: './create-model-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateModelPageComponent { }
