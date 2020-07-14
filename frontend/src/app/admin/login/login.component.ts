import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import {Router} from "@angular/router"
import { RegisterService } from 'src/app/service/register.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:RegisterService,private router: Router) { }
  login={
    usernme:'',
    password:''
  };
  serverErrorMessages: string;
  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    this.loginservice.login(form.value).subscribe(
      res => {
        this.loginservice.setToken(res['token']);
        this.router.navigateByUrl('/home');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }


}
