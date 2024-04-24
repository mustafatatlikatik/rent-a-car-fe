import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrandsApiService } from '../../services/brandsApi.service';
import { PostBrandRequest } from '../../models/post-brand-request';
import { ControlErrorMessagePipe } from '../../../../core/pipes/control-error-message.pipe';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-brand-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ControlErrorMessagePipe,
    RouterModule
  ],
  templateUrl: './create-brand-form.component.html',
  styleUrl: './create-brand-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateBrandFormComponent {
  form: FormGroup = this.fb.group({
    // Form Controls name isminde bir from control var
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private brandsApiService: BrandsApiService,
    private router: Router
  ) {}

  createBrand() {
    const request: PostBrandRequest = {
      name: this.form.value.name,
    };
    this.brandsApiService.postBrand(request).subscribe({
      next: (response) => {
        console.info('Response: ', response);
      },
      error: (error) => {
        console.error('Error: ', error);
      },
      complete: () => {
        console.log('Brand created successfully');
        this.form.reset();
        this.router.navigate(['/home/brands']);
      },
    });
  }

  onFormSubmit() {
    if (this.form.invalid) {
      console.error('Form is invalid');
      return;
    }
    this.createBrand();
  }
}
