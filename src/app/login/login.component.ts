import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

username='';
password='';

  login(){
  if(this.username=='Dnyanada' && this.password=='12345')
  {
    alert("You have successfully logged in!");
  }
  else{
    alert("Username or password is incorrect");
  }
  }
}
