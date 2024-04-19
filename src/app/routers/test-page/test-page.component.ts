import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestPageComponent { }
