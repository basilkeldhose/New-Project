import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/service/register.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  showmessage: boolean
  errormessage: string
  constructor(public registerservice: RegisterService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.registerservice.postAdmin(form.value).subscribe(
      res => {
        this.showmessage = true;
        setTimeout(() => this.showmessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.errormessage = err.error.join('<br/>');
        }
        else
          this.errormessage = 'Something went wrong.Please contact admin.';
      }
    );
  }


  resetForm(form: NgForm) {
    this.registerservice.selectedUser = {
      fullname: '',
      address: "",
      username: '',
      password: ''
    }

  }
}
