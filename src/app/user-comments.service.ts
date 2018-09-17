import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {comments} from './comments';

@Injectable({
  providedIn: 'root'
})
export class UserCommentsService {
  private _url:string="https://jsonplaceholder.typicode.com/comments";

  constructor(private _http:HttpClient) { }
  getUserComments(){
    return this._http.get<comments[]>(this._url);
  }
}
