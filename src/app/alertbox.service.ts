import { Injectable } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Injectable({
  providedIn: 'root'
})
export class AlertboxService {
  private message:string;
  private alertType:string;
  private modalRef;

  constructor(private modalService: NgbModal) { }
  showSuccessOrFailurmsgBox(mtype,msg){
      
      $('.modal-content').animate({
        opacity: 1,
        top: "+=50",
      }, 1000, function () {
        // Animation complete.
      });
      this.alertType=mtype;
      this.message=msg;
  }
  modalClose(){
    this.modalRef.close();
  }
}
