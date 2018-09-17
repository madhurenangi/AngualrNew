import { Component, OnInit } from '@angular/core';
import {UserCommentsService} from '../user-comments.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  userCommnets:any=[];
  public isCollapsed = false;
  private show:string;

  constructor(private _comments:UserCommentsService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this._comments.getUserComments().subscribe(data=>{
      this.spinner.show();
      setTimeout(() => {
        this.userCommnets = data;
       
        this.spinner.hide();
        
      }, 2000);

    });
      
  }
  showdiv(value){
    if(this.show==value){
      this.show="";
    }
    else{
      this.show=value;
    }
    
  }

}
