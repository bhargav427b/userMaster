import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AppService } from '../app.service';
import { AuthService } from '../auth.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userRegistration:FormGroup;
  submitted: boolean
  response: any;

  constructor(private formBuilder: FormBuilder, private service: AppService, private auth: AuthService, private router: Router) {
    this.submitted = false;
   }

  ngOnInit() {
    this.userRegistration = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern('^[a-zA-Z]+([\\s][a-zA-Z]+)*$')]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern('^[a-zA-Z]+([\\s][a-zA-Z]+)*$')]],
      emailid: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(4), Validators.pattern('[A-Za-z][A-Z0-9a-z\.]*@[A-Za-z0-9]+[\.][A-Za-z]{1,3}')]],
      address:['', [Validators.required, Validators.maxLength(50), Validators.minLength(8)]],
      username: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('^[a-zA-Z]+([\\s][a-zA-Z]+)*$')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern('^[a-zA-Z0-9@*#]+$')]],
      confirmpassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern('^[a-zA-Z0-9@*#]+$')]],
    })
  }

  onSubmit(){
    this.submitted = true;

    this.service.registerUser(this.userRegistration.value).subscribe(data => {
      this.response = data;
      if(this.response){
        swal.fire('Successfully signed up');
        this.router.navigateByUrl('/login');
      }
      else{
        swal.fire('Signup failed');
      }
    });
  }

}
