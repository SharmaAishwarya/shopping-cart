import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../user';
import { USERS } from '../mockUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userNew: User;
  users:User[]=USERS;
  
  
  constructor()
  {
  
  }

  getUser(): Observable<User[]> {

    return of(USERS);
  }

  registerUser(user: User): boolean {
    this.userNew =new User();
    this.userNew.email = user.email;
    this.userNew.name = user.name;
    this.userNew.address = user.address;
    this.userNew.password = user.password;
    this.userNew.dateofbirth = user.dateofbirth;
    if (this.isUserExist(this.userNew.email)) {
      console.log("false")
      return false;
    }
    USERS.push(user);
    console.log(USERS);
    return true;
  }

  isUserExist(email: string): boolean {
    return USERS.some(u => u.email === email);
  }



  login(email: string, password: string): User {

    const size = USERS.length;
    for (var i = 0; i < size; i++) {
      if (USERS[i].email === email && USERS[i].password === password) {
        return USERS[i];

      }
    }
    return null;


  }


}
