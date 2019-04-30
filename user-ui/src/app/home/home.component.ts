import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AppService } from '../app.service';
import { AuthService } from '../auth.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userUpdate:FormGroup;
  submitted: boolean
  response: any;
  update: boolean;
  user: any;
  username: string;

  constructor(private formBuilder: FormBuilder, private service: AppService) {
    this.submitted = false;
    this.update = false;
    this.user = {};
    this.username = JSON.stringify(localStorage.getItem('username'));
   }

  ngOnInit() {
    this.userUpdate = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern('^[a-zA-Z]+([\\s][a-zA-Z]+)*$')]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern('^[a-zA-Z]+([\\s][a-zA-Z]+)*$')]],
      emailid: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(4), Validators.pattern('[A-Za-z][A-Z0-9a-z\.]*@[A-Za-z0-9]+[\.][A-Za-z]{1,3}')]],
      address:['', [Validators.required, Validators.maxLength(50), Validators.minLength(8)]],
      username: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('^[a-zA-Z]+([\\s][a-zA-Z]+)*$')]],
    });
    console.log(this.username);
    this.service.getUser(this.username).subscribe(data => {
      this.user = data;
    })
  }

  get f(){
    return this.userUpdate.controls;
  }
  onSubmit(){
    this.submitted = true;
    if(this.userUpdate.invalid){
      return;
    }

    this.service.updateUser(this.userUpdate.value).subscribe(data => {
      this.response = data;
      if(this.response){
        swal.fire('Successfully updated');
      }
      else{
        swal.fire('Update failed!');
      }
    });
  }

  edit(){
    this.userUpdate.setValue(this.user);
    this.update = true;
  }
  cancel(){
    this.update = false;
  }

}
