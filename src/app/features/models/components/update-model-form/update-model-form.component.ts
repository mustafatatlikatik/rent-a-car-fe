import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModelsApiService } from '../../services/modelsApi.service';
import { PutModelRequest } from '../../models/put-model-request';
import { ControlErrorMessagePipe } from '../../../../core/pipes/control-error-message.pipe';
import { Router } from '@angular/router';
import { IfNotDirective } from '../../../../core/directives/if-not.directive';
import { NoCharacterInputDirective } from '../../../../core/directives/no-character-input.directive';

@Component({
  selector: 'app-update-model-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ControlErrorMessagePipe,
    IfNotDirective,
    NoCharacterInputDirective
  ],
  templateUrl: './update-model-form.component.html',
  styleUrl: './update-model-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateModelFormComponent {
  form: FormGroup = this.fb.group({
    id: [],
    brandId: [],
    name: ['',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ],],
    modelYear: [],
    imageUrl: [],
    dailyPrice: []
  });

  constructor(
    private fb: FormBuilder,
    private modelsApiService: ModelsApiService,
    private router: Router
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
        this.router.navigate(['/home/models'])
      },
    });
  }

  onFormSubmit() {
    if (this.form.invalid) {
      console.error('Form is invalid');
      return;
    }
    this.updateModel();
  }
}
