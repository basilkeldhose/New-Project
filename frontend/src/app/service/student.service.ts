import { Injectable } from '@angular/core';
import {Student} from './student'
import{HttpClient, HttpHeaders} from '@angular/common/http'
import {environment} from '../../environments/environment'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
selectedStudent:Student={
  fullname:'',
  rollno:'',
  class:'',
  address:'',
  phone:'',
  gender:''
}
  constructor( private http:HttpClient) { }

  postStudent(admin:Student){
    return this.http.post(environment.apiBaseUrl+'/student',admin)
  }
  getstudentprofile(){
    return this.http.get(environment.apiBaseUrl+'/studentprofile')
  }
}
