import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
    surname: ['de paperis', Validators.required],
    adress: this.fb.group({
      city: ['paperopoli'],
      street: ['via delle oche'],
      number: [12]
    })
  })

  submit(){
    console.log(this.profileForm.value);
  }
}
