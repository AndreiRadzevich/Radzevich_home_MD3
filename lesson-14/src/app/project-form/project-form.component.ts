import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NameValidators } from './validators';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent {

  status: string[] = ['Stable', 'Critical', 'Finished'];

  constructor() { }

  form = new FormGroup({
    projectName: new FormControl('', [Validators.required],
        [NameValidators.checkNameAsync.bind(this)]),
    mail: new FormControl('',
        [ Validators.required, Validators.email] ),
    projectStatusDropdown: new FormControl('')
    });

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}