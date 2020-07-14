import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  result: any = { student: [] }
  student
  studentdetails
  constructor(public studentservice: StudentService) { }

  ngOnInit(): void {
    this.studentservice.getstudentprofile().subscribe(
      res => {
        this.studentdetails = res['student'];
      },
      err => {

        console.log(err);

      })
  }
  edit(uid) {
    for (let i = 0; i < this.result.users.length; i++) {
      if (uid == this.result.users[i].id) {
        this.student= this.result.users[i]
      }
    }
  }

  delete(uid) {
    for (let i = 0; i < this.result.users.length; i++) {
      if (uid == this.result.users[i].id) {
        this.result.users.splice(i, 1)
      }
    }
  }

}

