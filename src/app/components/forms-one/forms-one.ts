import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-one',
  imports: [ReactiveFormsModule],
  templateUrl: './forms-one.html',
  styleUrl: './forms-one.scss',
})
export class FormsOne {
  // profileForm = new FormGroup({
  //   name: new FormControl("pippo"),
  //   surname: new FormControl("de pippis"),
  //   adress: new FormGroup({
  //     city: new FormControl("topolinia"),
  //     street: new FormControl("corso perrone"),
  //     number: new FormControl(12)
  //   })
  // })
  fb = inject(FormBuilder);

  profileForm = this.fb.group({
    name: ['paperone', Validators.required],
    surname: ['de paperis', Validators.maxLength(4)],
    adress: this.fb.group({
      city: ['paperopoli'],
      street: ['via delle oche'],
      number: [12, [Validators.required, Validators.min(1)]]
    }),

    aliases: this.fb.array([
      this.fb.control('')
    ])
  })

  submit(){
    console.log(this.profileForm);
  }

  getAliases(){
    return this.profileForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.getAliases().push(this.fb.control(''));
  }

  removeAlias(inbex: number) {
    this.getAliases().removeAt(inbex);
  }
}
