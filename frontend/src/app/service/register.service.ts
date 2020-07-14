import { Injectable } from '@angular/core';
import {Register} from './register'
import {environment} from '../../environments/environment'
import{HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 selectedUser:Register={
   fullname:'',
   address:'',
   username:'',
   password:''
 }
  constructor(private http:HttpClient) { }

postAdmin(admin:Register){
  return this.http.post(environment.apiBaseUrl+'/register',admin)
}
login(authCredential){
  return this.http.post(environment.apiBaseUrl+'/authenticate',authCredential)
}

setToken(token: string) {
  localStorage.setItem('token', token);
}

}
