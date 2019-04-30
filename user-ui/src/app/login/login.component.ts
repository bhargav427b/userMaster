import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  response: any;

  constructor(private formBuilder: FormBuilder,
    private service: AppService,
    private router: Router,
    private auth: AuthService) { }

  ngOnInit() {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['home']);
    }
    this.loginForm = this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        password: ['', Validators.required]
      }
    );
  }

  get f(){
    return this.loginForm.controls;
  }

  reset(){
    this.submitted = false;
  }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }

    console.log(this.loginForm.value);

    this.service.login(this.loginForm.value).subscribe(data => {
      this.response = data;
      if(this.response){
        this.auth.sendToken(this.response.username);
        swal.fire('Successfully logged in');
        this.router.navigateByUrl('/home');
      }
      else{
        swal.fire('Incorrect username or password!');
      }
    });
  }

}
