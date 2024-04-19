import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ModelsApiService } from '../../services/modelsApi.service';
import { PutModelRequest } from '../../models/put-model-request';

@Component({
  selector: 'app-update-model-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './update-model-form.component.html',
  styleUrl: './update-model-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateModelFormComponent {
  form: FormGroup = this.fb.group({
    id: [],
    brandId: [],
    name: [],
    modelYear: [],
    imageUrl: [],
    dailyPrice: []
  });

  constructor(
    private fb: FormBuilder,
    private modelsApiService: ModelsApiService
  ) {}

  updateModel() {
    const request: PutModelRequest = {
      id: this.form.value.id,
      brandId: this.form.value.brandId,
      name: this.form.value.name,
      modelYear: this.form.value.modelYear,
      imageUrl: this.form.value.imageUrl,
      dailyPrice: this.form.value.dailyPrice
    };
    this.modelsApiService.putBrand(request.id, request).subscribe({
      next: (response) => {
        console.info('Response: ', response);
      },
      error: (error) => {
        console.error('Error: ', error);
      },
      complete: () => {
        console.log('Model updated successfully');
        this.form.reset();
      },
    });
  }

  onFormSumbit() {
    if (this.form.invalid) {
      console.error('Form is invalid');
      return;
    }
    this.updateModel();
  }
}
