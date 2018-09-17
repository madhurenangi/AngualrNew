import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import {users} from './users';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

private _url:string="https://jsonplaceholder.typicode.com/users";
  constructor(private _http:HttpClient){ }
  getUserDetails(){
    return this._http.get<users[]>(this._url);
  }
}
