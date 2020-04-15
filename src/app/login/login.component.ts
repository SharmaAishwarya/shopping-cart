import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  options: FormGroup;
  user:User;
  message:string;
  key:string;
  value:string;

  constructor(fb: FormBuilder, private userService: UserService) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
    this.user= new User();
  }
  
 login():void{
    this.user = this.userService.login(this.user.email , this.user.password);
    if(this.user!=null)
    //this.message="welcome............to shopping website" + this.user.name ;
    this.key ="email";
    this.value=this.user.email;
    sessionStorage.setItem(this.key,this.value);
    console.log(sessionStorage.getItem("email"));
    console.log(this.user);
  }

  ngOnInit() {
  }

}
