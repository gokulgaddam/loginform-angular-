import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  loginForm = this.fb.group({

  fname : ['',[Validators.required,Validators.minLength(4),Validators.pattern("^[a-zA-Z]+$")]],
  lname : ['',[Validators.required,Validators.minLength(4),Validators.pattern("^[a-zA-Z]+$")]],
  uname : ['',[Validators.required,Validators.minLength(4),Validators.pattern("^[A-Za-z0-9_-]*$")]],
  dob : [''],
  country: ['']

  });

  get fname(){
    return this.loginForm.get('fname');
  }
  get lname(){
    return this.loginForm.get('lname');
  }
  get uname(){
    return this.loginForm.get('uname');
  }
    

  ngOnInit(): void {
  }


  onSubmit(){
   
    alert(Object.keys(this.loginForm.value).map(key=>{
      return this.loginForm.value[key]
    }));
    window.location.reload();
    
  }
}
