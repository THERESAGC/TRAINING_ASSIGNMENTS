import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  

@Component({
  selector: 'app-registration',
  imports: [CommonModule, FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  @Output() dataEmitter = new EventEmitter<any>()
states:string[]=["Maharashtra","Kerala","Punjab"];

cities = ['Pune', 'Mumbai', 'Nagpur'];

formData: any = {};
submitted = false;

onSubmit() {
  this.submitted = true;
  // console.log(this.formData);
  console.log(typeof this.formData)
  this.sendData();
}

sendData(){
   this.dataEmitter.emit(this.formData);
}
}
