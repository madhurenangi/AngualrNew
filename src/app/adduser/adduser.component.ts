import { Component, OnInit} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserData } from '../user-data';
import { HttpClient } from '@angular/common/http';
import {LoaderComponent} from '../loader/loader.component';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private modalService: NgbModal, private _http: HttpClient) { }
  
  userData = new UserData('', '', '', 123);
  userDetails: any = [];
  private lbltext: string = "Save";
  private idx: string;
  private alertType:string;
  private message:string;
  private modalRef;
  ngOnInit() {

  }
  open(content) {

    this.userData = {};

    this.modalService.open(content);
    $('.modal-content').animate({
      opacity: 1,
      top: "+=50",
    }, 1000, function () {
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
      return `with: ${reason}`;
    }
  }


  saveFormData(value,success) {
  
    if (this.lbltext == "Save") {
      if(Object.keys(value).length!=0){
      this.userDetails.push(value);
      this.showSuccessOrFailurmsgBox(success,"Success","Saved Successfully!");
     }
     else{
      this.showSuccessOrFailurmsgBox(success,"Fail","Something Went Wrong!");
     }

    }
    else if (this.lbltext == "Update") {
      this.userDetails.splice(this.idx, 1, value);
    }

  }
  showSuccessOrFailurmsgBox(success,mtype,msg){
    this.modalRef=this.modalService.open(success);
      
      $('.modal-content').animate({
        opacity: 1,
        top: "+=50",
      }, 1000, function () {
        // Animation complete.
      });
      this.alertType=mtype;
      this.message=msg;
  }
  editFormData(content, i) {
    this.userData = this.userDetails[i];
    this.modalService.open(content);
    this.lbltext = "Update";
    this.idx = i;

  }
  deleteRecord(i,success) {
    
    this.showSuccessOrFailurmsgBox(success,"conform","Are you sure you want to Delete");
    //this.userDetails.splice(i, 1);
    this.idx=i;

  }
  closefunction(){
    this.modalRef.close();
  }
  delete(){
    this.userDetails.splice(this.idx, 1);
    this.modalRef.close();
  }

}
