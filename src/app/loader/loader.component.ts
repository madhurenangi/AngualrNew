import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  @Input() alertType:string;
  @Input() message:string;
  @Output() closefunction= new EventEmitter();
  @Output() delete= new EventEmitter();

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    
  }
  close(e){
    
    this.closefunction.emit(e);
  }
  deltetrecord(){
    this.delete.emit();
  }

}
