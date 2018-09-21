import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashArray:any=[
    {name:"Madhu",age:20,class:"colorDiv"},
    {name:"Anitha",age:25,class:"colorDiv1"},
    {name:"Ravi",age:40,class:"colorDiv2"}
  ];
  constructor() { }

  ngOnInit() {
  }


}
