import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrandsApiService } from '../../services/brandsApi.service';
import { PutBrandRequest } from '../../models/put-brand-request';
import { ControlErrorMessagePipe } from '../../../../core/pipes/control-error-message.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-brand-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ControlErrorMessagePipe],
  templateUrl: './update-brand-form.component.html',
  styleUrl: './update-brand-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateBrandFormComponent {
  form: FormGroup = this.fb.group({
    id: [],
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

  updateBrand() {
    const request: PutBrandRequest = {
      id: this.form.value.id,
      name: this.form.value.name,
    };
    this.brandsApiService.putBrand(request.id, request).subscribe({
      next: (response) => {
        console.info('Response: ', response);
      },
      error: (error) => {
        console.error('Error: ', error);
      },
      complete: () => {
        console.log('Brand updated successfully');
        this.form.reset();
        this.router.navigate(['/home/brands'])
      },
    });
  }

  onFormSubmit() {
    if (this.form.invalid) {
      console.error('Form is invalid');
      return;
    }
    this.updateBrand();
  }
}
