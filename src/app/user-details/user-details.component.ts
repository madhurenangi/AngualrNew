import { Component, OnInit } from '@angular/core';

import { UserDataService } from '../user-data.service';
import { Subject } from 'rxjs/Subject';
import { NgxSpinnerService } from 'ngx-spinner';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {LoaderComponent} from '../loader/loader.component';




@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  userDetails: any = [];
  dtTrigger: Subject<any> = new Subject();
  closeResult: string;
  result:any={};


  constructor(private _userData: UserDataService,private spinner: NgxSpinnerService,private modalService: NgbModal) { }

  ngOnInit(): void {
    
    this._userData.getUserDetails().subscribe(data => {
      this.spinner.show();
      setTimeout(() => {
        this.userDetails = data;
        this.dtTrigger.next();
        this.spinner.hide();
        
      }, 2000);
     
    });
    this.dtOptions = {
      // "dom": '<"top"f>rt<"bottom"ilp><"clear">',
      "dom": '<f<t>ilp>',
      pagingType:'numbers',
      pageLength: 10,
      language: { search: "", searchPlaceholder:'Search'}



    };
  }
  open(content,rslt) {
    this.result=rslt;
    this.modalService.open(content);
    $('.modal-content').animate({
      opacity:1,
      top: "+=50",
     
    }, 1000, function() {
      // Animation complete.
    });
    //$('.modal-backdrop').animate({ opacity: 0.9 });
     
   
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
