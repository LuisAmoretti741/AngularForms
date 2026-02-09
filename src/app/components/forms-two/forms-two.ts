import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms-two',
  imports: [FormsModule],
  templateUrl: './forms-two.html',
  styleUrl: './forms-two.scss',
})
export class FormsTwo {
  
  name: string = 'paperino'
  surname: string = 'paperone'
  age: number = 12
  
  look() {
    console.log(this.name);
    console.log(this.surname);
    console.log(this.age);
  }

  changeName(){
    this.name = 'paperinik'
  }

  submit(){

  }

}
