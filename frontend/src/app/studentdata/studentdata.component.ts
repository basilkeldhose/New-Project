import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from 'src/app/service/student.service';
@Component({
  selector: 'app-studentdata',
  templateUrl: './studentdata.component.html',
  styleUrls: ['./studentdata.component.css']
})
export class StudentdataComponent implements OnInit {
  showmessage: boolean
  errormessage: string
  constructor(public studentservice: StudentService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.studentservice.postStudent(form.value).subscribe(
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
    this.studentservice.selectedStudent = {
      fullname: '',
      rollno: '',
      class: '',
      address: '',
      phone: '',
      gender: ''
    }

  }
}
