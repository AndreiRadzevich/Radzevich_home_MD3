import { AbstractControl } from '@angular/forms';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';

export class NameValidators {

  static checkName(control: AbstractControl) {
    if (control.value === 'text' ) {
      return { projectName: true};
    }
    return null;
  }

  static checkNameAsync(control: AbstractControl) {
    return of('text').pipe(
      map((item) => control.value === item ? {checkName: true}  : null),
      delay(3000)
    );
  }
}