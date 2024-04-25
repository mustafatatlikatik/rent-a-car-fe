import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'controlErrorMessage',
  standalone: true
})
export class ControlErrorMessagePipe implements PipeTransform {


  transform(control: ValidationErrors | null | undefined, ...args: unknown[]): string | unknown  {
    if (!control) {
      return '';
    }

    return  control['required'] ? 'Bu alan zorunludur.' :
            control['customError'] ? 'Bir hata meydana geldi.' :
            control['pattern'] ? 'Geçersiz formatta.' :
            control['minlength'] ? `This field must be at least ${control['minlength'].requiredLength} characters but it has ${control['minlength'].actualLength} characters.` :
            control['maxlength'] ? `This field must be maximum ${control['maxlength'].requiredLength} characters but it has ${control['maxlength'].actualLength} characters.` : 'Invalid';
}

    // if (control?.['required']) {
    //   return 'Bu alan zorunludur.';
    // }S

    // if (control?.['customError']) {
    //   return 'Bir hata meydana geldi.';
    // }

    // if (control?.['pattern']) {
    //   return 'Geçersiz formatta.';
    // }

    // if(!control?.['minLength']) {
    //   return 'Minimum 3 karakter olmalıdır.';
    // }

    // if(!control?.['maxLength']) {
    //   return 'Maksimum 20 karakter olmalıdır.';
    // }
    //   return "Invalid";
}




