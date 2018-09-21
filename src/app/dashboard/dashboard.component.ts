import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  seat:string="";
  passenger:any={};

  dashArray:any=[
    {name:"",age:"",mobile:"",seat:"1",selected:"",status:""},
    {name:"",age:"",mobile:"",seat:"2",selected:"",status:""},
    {name:"",age:"",mobile:"",seat:"3",selected:"",status:""},
    {name:"",age:"",mobile:"",seat:"4",selected:"",status:""},
    {name:"",age:"",mobile:"",seat:"5",selected:"",status:""}
    
  ];
  constructor() { }

  ngOnInit() {
  }
  showSeat(value){
    for(var i=0;i<this.dashArray.length;i++){
      if(this.dashArray[i].seat==value){
        if(this.dashArray[i].selected=="false" || this.dashArray[i].selected==""){
        var obj={name:"",age:"",mobile:"",seat:value,selected:"true",status:""};
        this.dashArray.splice(i,1,obj);
        }
        else{
          var obj={name:"",age:"",mobile:"",seat:value,selected:"false",status:""};
          this.dashArray.splice(i,1,obj);
        }

       
      }
    }
    this.passenger.seat=value;
  }
  savePassenger(value){
    for(var i=0;i<this.dashArray.length;i++){
      if(this.dashArray[i].seat==value.seat){
        var obj={name:value.name,age:value.age,mobile:value.mobile,seat:value.seat,selected:"true",status:"true"};
        this.dashArray.splice(i,1,obj);
        console.log(this.dashArray);
      }
    }
    //this.dashArray.push(value);
  }


}
