import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, EmailValidator, FormControl, Validators, RequiredValidator} from '@angular/forms';
import { User } from '../user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUPComponent implements OnInit {

  key:string;
  value:string;
  options: FormGroup;
  user: User;

  constructor(fb: FormBuilder,private userService : UserService) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });

    this.user = new User();
  }

    
  
  ngOnInit() {
    }

  registerUser(user): void {


      if(this.userService.registerUser(user))
      {
        this.key = "email"; 
        this.value = this.user.email;
        sessionStorage.setItem(this.key, this.value);
        console.log(user);
        alert("user registered successfully");
      }
      else{
        alert("try registering with another email");
      }
      
    

    

  }

}
