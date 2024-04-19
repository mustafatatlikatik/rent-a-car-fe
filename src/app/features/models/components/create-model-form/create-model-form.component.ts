import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ModelsApiService } from '../../services/modelsApi.service';
import { PostModelRequest } from '../../models/post-model-request';

@Component({
  selector: 'app-create-model-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-model-form.component.html',
  styleUrl: './create-model-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateModelFormComponent {
  form: FormGroup = this.fb.group({
    brandId: [],
    name: [],
    modelYear: [],
    imageUrl: [],
    dailyPrice: [],
  });

  constructor(
    private fb: FormBuilder,
    private modelsApiService: ModelsApiService,
  ) {}


  createModel() {
    const request: PostModelRequest = {
      brandId: this.form.value.brandId,
      name: this.form.value.name,
      modelYear: this.form.value.modelYear,
      imageUrl: this.form.value.imageUrl,
      dailyPrice: this.form.value.dailyPrice,

    };
    this.modelsApiService.postBrand(request).subscribe({
      next: (response) => {
        console.info('Response: ', response);
      },
      error: (error) => {
        console.error('Error: ', error);
      },
      complete: () => {
        console.log('Model created successfully');
        this.form.reset();
      },
    });
  }

  onFormSumbit() {
    if (this.form.invalid) {
      console.error('Form is invalid');
      return;
    }
    this.createModel();
  }



}
