import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appVarAdd',
  standalone: true,
})
export class VarAddPipe implements PipeTransform {

  transform(value: number, rate: number): number {
    return value + (value * rate) / 100;
  }

}
