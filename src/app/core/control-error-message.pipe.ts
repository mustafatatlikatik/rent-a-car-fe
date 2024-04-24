import { Pipe, type PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'appControlErrorMessage',
  standalone: true,
})
export class ControlErrorMessagePipe implements PipeTransform {

  transform(control: AbstractControl): string {
    if(control.errors){
      if(control.hasError('required')){
        return 'Required field.';
      }
    }
    return '?';
  }

}
