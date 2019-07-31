import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  userDataForm;
  constructor() { 
    this.userDataForm = new FormGroup({
      'userName' : new FormControl(),
      'email' : new FormControl(),
      'mobile' : new FormControl()
    });
  }

  ngOnInit() {

  }
submitFormData(){
  console.log(this.userDataForm.value)
}
}
